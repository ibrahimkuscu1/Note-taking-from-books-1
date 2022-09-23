const express = require("express")
const app = express()
const PORT = 3000
const connectDB = require("./config/db")
const Book = require("./models/bookModels")

connectDB()

//middleware is a function which chronically runs between request and response (req-middleware-res)
app.use(express.json())

//This middleware used to take data from form
app.use(express.urlencoded({
  extended: false
}));

app.route("/api/books").get(async (req, res) => {
  const books = await Book.find()
  res.json(books)
}).post(async (req, res) => {
  const {
    title,
    note
  } = req.body
  const book = await Book.create({
    title,
    note
  })
  res.json(book)
})


app.delete("/api/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id)
  await book.remove()
  res.json({
    message: "book deleted"
  })
})





app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
})