const express = require("express");
const router = express.Router();
const Document = require("../models/Document");
const upload = require("../middleware/upload");
const cloudinary = require("../config/cloudinaryConfig");

// Upload documents
router.post(
    "/upload",
    upload.fields([
        { name: "aadharCard", maxCount: 1 },
        { name: "panCard", maxCount: 1 },
        { name: "electricityBill", maxCount: 1 },
        { name: "taxReceipt", maxCount: 1 },
        { name: "passportPhoto", maxCount: 1 },
        { name: "cancelledCheque", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const { fullName, mobileNumber } = req.body;
            const files = req.files;

            if (!files) {
                return res.status(400).json({ message: "No files uploaded" });
            }

            const uploadFileToCloudinary = (fileBuffer, fileType) => {
                return new Promise((resolve, reject) => {
                    const uploadStream = cloudinary.uploader.upload_stream(
                        { folder: "devine-energy-docs" },
                        (error, result) => {
                            if (error) {
                                console.error(`Cloudinary Upload Error for ${fileType}:`, error);
                                return reject(error);
                            }
                            resolve(result.secure_url);
                        }
                    );
                    uploadStream.end(fileBuffer);
                });
            };

            // Upload each file to Cloudinary and store URLs
            const uploadedFiles = {};
            for (const key in files) {
                uploadedFiles[key] = await uploadFileToCloudinary(files[key][0].buffer, key);
            }

            // Save document links in MongoDB
            const newDocument = new Document({
                fullName,
                mobileNumber,
                ...uploadedFiles,
            });

            await newDocument.save();
            res.status(201).json({ message: "Documents uploaded successfully", newDocument });
        } catch (error) {
            console.error("Upload Error:", error);
            res.status(500).json({ message: "Error uploading documents", error });
        }
    }
);

// Get all documents
router.get("/documents", async (req, res) => {
    try {
        const documents = await Document.find();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ message: "Error fetching documents", error });
    }
});

// Update document status
router.put("/documents/:id", async (req, res) => {
    try {
        const { status } = req.body;
        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).json({ message: "Document not found" });
        }

        res.json(updatedDocument);
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a document
router.delete("/documents/:id", async (req, res) => {
    try {
        const deletedDocument = await Document.findByIdAndDelete(req.params.id);

        if (!deletedDocument) {
            return res.status(404).json({ message: "Document not found" });
        }

        res.status(200).json({ message: "Document deleted successfully", deletedDocument });
    } catch (error) {
        console.error("Error deleting document:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;