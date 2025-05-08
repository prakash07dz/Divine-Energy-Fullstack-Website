require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const documentRoutes = require("./routes/documentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use("/api", documentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((req, res, next) => {
    if (req.originalUrl.startsWith("/uploads")) {
        return res.status(404).json({ message: "File not found" });
    }
    next();
});

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.listen(PORT, () => {
    console.log(`Server is listning at port ${PORT}`);
});