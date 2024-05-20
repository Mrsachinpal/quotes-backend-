const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true
    },
    quote: {
        type: String,
        trim: true,
        required: true
    },
    tag: [
        {
            type: String,
            trim: true,
            required: true
        }
    ],
    topic: [
        {
            type: String,
            trim: true,
        }
    ],
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true // Ensure emails are stored in lowercase
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Indexes (optional but recommended for performance)
quoteSchema.index({ author: 1 }); // Index on author field

const Quotes = mongoose.model('Quote', quoteSchema);
module.exports = Quotes;
