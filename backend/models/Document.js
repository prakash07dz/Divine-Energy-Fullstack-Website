const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNumber: {
        type: Number, required: true, trim: true, validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    aadharCard: { type: String, required: true },
    panCard: { type: String, required: true },
    electricityBill: { type: String, required: true },
    taxReceipt: { type: String, required: true },
    passportPhoto: { type: String, required: true },
    cancelledCheque: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
