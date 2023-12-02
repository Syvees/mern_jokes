const Joke = require ("../models/jokes.model");

// GET ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// GET ONE
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// CREATE ONE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "Something went wrong", error:err}))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong", error:err}))
}