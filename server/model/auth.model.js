const mongoose = require('mongoose')



const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name must not be empty!"],
        minlength: [3, "First name must be greater than two characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name must not be empty!"],
        minlength: [3, "Last name must be greater than two characters!"]
    }

}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;