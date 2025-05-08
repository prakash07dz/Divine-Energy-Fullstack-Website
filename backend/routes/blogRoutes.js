const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Add a new blog
router.post("/", async (req, res) => {
    try {
        const { title, content, image, category } = req.body;

        const newBlog = new Blog({
            title,
            content,
            image,
            category,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: "Error creating blog", error });
    }
});

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 }); // Sort by date in descending order
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error });
    }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// // Update a blog
// router.put("/:id", async (req, res) => {
//     try {
//         const { title, content, image, category } = req.body;

//         const updatedBlog = await Blog.findByIdAndUpdate(
//             req.params.id,
//             { title, content, image, category },
//             { new: true }
//         );

//         if (!updatedBlog) {
//             return res.status(404).json({ message: "Blog not found" });
//         }

//         res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating blog", error });
//     }
// });

// // Delete a blog
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//         if (!deletedBlog) {
//             return res.status(404).json({ message: "Blog not found" });
//         }
//         res.status(200).json({ message: "Blog deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting blog", error });
//     }
// });

module.exports = router;