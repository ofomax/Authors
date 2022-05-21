const Author = require('../model/auth.model');



// _________________________________________________________CREATE AUTHOR
module.exports.createAuthor = (request, response) =>{
    const { firstName, lastName } = request.body;
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

// _________________________________________________________GET ALL AUTHORS
module.exports.allAuthors = (req, res) =>{
    Author.find({})
        .then(results => res.json(results))
        .catch(err => res.json({error:err}))
}

// ________________________________________________________GET ONE AUTHOR
module.exports.oneAuthor = (req, res) =>{
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// ________________________________________________________UPDATE AUTHOR
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.status(400).json(err))
}

// ________________________________________________________DELETE A AUTHOR
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.status(400).json(err))
}