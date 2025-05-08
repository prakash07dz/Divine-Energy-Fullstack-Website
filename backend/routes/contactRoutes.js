const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Submit Contact Form
router.post("/", async (req, res) => {
    try {
        const { name, mobile, message } = req.body;
        const newContact = new Contact({ name, mobile, message });
        await newContact.save();
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error!" });
    }
});

// Get All Messages (For Admin Panel)
router.get("/", async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: "Server error!" });
    }
});

// Delete a message
router.delete("/:id", async (req, res) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) return res.status(404).json({ message: "Message not found" });

        res.json({ success: true, message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
