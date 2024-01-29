const { Schema, model } = require("mongoose");
const Joi = require("joi");

const songSchema = new Schema({
    title: String,
    artist: String,
    album: String,
    genre: String,
    releaseDate: Date,
});

const Song = model("Song", songSchema);

const validateSong = (song) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        artist: Joi.string().required(),
        album: Joi.string().required(),
        genre: Joi.string().required(),
        releaseDate: Joi.date().required(),
    });
    return schema.validate(song);
};

module.exports = {
    Song,
    validateSong,
};
