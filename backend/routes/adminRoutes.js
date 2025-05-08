const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
require('dotenv').config();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            console.log("Admin not found in database");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // if (password.trim() !== process.env.ADMIN_PASSWORD) {
        //     return res.status(401).json({ message: "Invalid credentials" });
        // }
        
        if (password.trim() !== admin.password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Compare hashed password
        // const isMatch = await bcrypt.compare(password.trim(), admin.password);
        // if (!isMatch) {
        //     return res.status(401).json({ message: "Invalid credentials" });
        // }

        // Generate JWT Token
        const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        console.log("Generated token:", token);

        res.json({ token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;