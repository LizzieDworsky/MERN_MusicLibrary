const express = require("express");
const router = express.Router();
const { Song, validateSong } = require("../models/Song");

router.get("/", async (req, res) => {
    try {
        let songs = await Song.find();
        res.status(200).send(songs);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let songId = req.params.id;

        let song = await Song.findById(songId);
        if (!song) {
            res.status(404).send(`No song found at ID ${songId}.`);
        }

        res.status(200).send(song);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", async (req, res) => {
    try {
        let { error } = validateSong(req.body);
        if (error) {
            return res.status(400).send("Invalid body for post request.");
        }

        let newSong = new Song(req.body);
        await newSong.save();

        res.status(201).send(newSong);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.put("/:id", async (req, res) => {
    try {
        let { error } = validateSong(req.body);
        if (error) {
            return res.status(400).send("Invalid body for put request.");
        }

        let song = await Song.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).send(song);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.status(204).send("");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
