const Book = require('../../../models/book')

const books = async (_,{},{user}) => {
  
  const books = await Book
    .find()
    .populate({
      path : "createdBy"
      
    })
    return books.filter(book => book.createdBy.email === user.email)
}

module.exports = books