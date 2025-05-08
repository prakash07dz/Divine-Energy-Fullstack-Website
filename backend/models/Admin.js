const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" }
});

// Hash password before saving
// AdminSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

module.exports = mongoose.model("Admin", AdminSchema);
