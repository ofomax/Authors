const AuthorController = require('../controller/auth.controller');


module.exports = (app) =>{
    app.post("/api/create", AuthorController.createAuthor);
    app.get("/api/all", AuthorController.allAuthors);
    app.get("/api/author/:id", AuthorController.oneAuthor);
    app.put("/api/update/:id", AuthorController.updateAuthor);
    app.delete("/api/delete/:id", AuthorController.deleteAuthor);
}