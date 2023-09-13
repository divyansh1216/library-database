const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 5432;

app.use(express.json());


// To get Books and Categories
app.get('/books', async (req, res) => {
    const books = await prisma.Book.findMany();
    console.log('Retrieved data from the "book" table:', books);
    res.json(books); 
})

app.get('/category', async (req, res) => {
    const category = await prisma.Category.findMany();
    // console.log('Retrieved data from the "category" table:', category);
    res.json(category); 
});

// To post data in books and categories
app.post('/books', async (req, res) => {
    const newBook = await prisma.Book.create({
      data: {
        id:req.body.id,
        title:req.body.title,
        categoryId:req.body.categoryId,
      },
    });  
    res.json(newBook)
});
app.post('/category', async (req, res) => {
      const { name } = req.body; 
      // Create the category
      const newCategory = await prisma.Category.create({
        data: {
            id:req.body.id,
            name:req.body.name,
          },
      });  
      res.json(newCategory);
  });



// To Update category and Books by Id
app.patch("/books/:booksId",async (req,res)=>
  {
      const { booksId } = req.params;
      const { name} = req.body;
      const updatedbooks = await prisma.book.update({
          where: { id: parseInt(booksId) },
          data: {
            title:req.body.title,
            categoryId:req.body.categoryId,
          }
        })
        res.json(updatedbooks);
        });
app.patch("/category/:categoryId",async (req,res)=>
  {
      const { categoryId } = req.params;
      const { name} = req.body;
      const updatedCategory = await prisma.category.update({
          where: { id: parseInt(categoryId) },
          data: {
            name:req.body.name,
          }
        })
        res.json(updatedCategory);
        });
  
  
// To Delete Category and Books by Id 
app.delete("/category/:categoryId", async (req, res) => {
    const { categoryId } = req.params;
    const deletedCategory = await prisma.category.delete({
      where: { id: parseInt(categoryId) },
    });
    res.json(deletedCategory);
  });
app.delete("/books/:booksId", async (req, res) => {
    const { booksId } = req.params;
    const deletedbooks = await prisma.book.delete({
      where: { id: parseInt(booksId) },
    });
    res.json(deletedbooks);
  });
 
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
 
 

