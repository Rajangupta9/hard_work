const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema({
    email: {type: string, required: true},
    phoneNumber: {type: number, required: true},
    isPrimary: {type: boolean, required: true},
    PrimaryContactId: {type: mongoose.Schema.Types.ObjectId, ref: "ContactInformation"}
}, {timestamps: true});

module.exports = mongoose.model("ContactInformation", contactSchema);