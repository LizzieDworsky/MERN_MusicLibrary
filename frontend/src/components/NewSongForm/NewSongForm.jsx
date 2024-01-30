import { useState } from "react";
import axios from "axios";
import "./NewSongForm.css";

const NewSongForm = ({ getAllSongs }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newSong = {
            title,
            artist,
            album,
            genre,
            releaseDate,
        };
        addNewSong(newSong);
        setTitle("");
        setArtist("");
        setAlbum("");
        setGenre("");
        setReleaseDate("");
    };

    const addNewSong = async (newSong) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/songs",
                newSong
            );
            if (response.status === 201) {
                getAllSongs();
            }
        } catch (error) {
            console.warn(`Error submitting new song form: ${error}`);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="new-song-form">
            <label className="form-label">Title</label>
            <input
                className="form-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className="form-label">Artist</label>
            <input
                className="form-input"
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <label className="form-label">Album</label>
            <input
                className="form-input"
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
            />
            <label className="form-label">Genre</label>
            <input
                className="form-input"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <label className="form-label">Release Date</label>
            <input
                className="form-input"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
            />
            <button type="submit" className="form-submit-btn">
                Submit
            </button>
        </form>
    );
};

export default NewSongForm;
