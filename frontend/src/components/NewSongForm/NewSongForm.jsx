import { useState } from "react";
import "./NewSongForm.css";

const NewSongForm = ({}) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    return (
        <form className="new-song-form">
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
