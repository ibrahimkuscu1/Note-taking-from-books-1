const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  title: String,
  note: String

})


module.exports = mongoose.model("Book", bookSchema)