import { useEffect, useState } from "react";
import axios from "axios";
import MusicTable from "./components/MusicTableSong/MusicTable";
import NavBar from "./components/NavBar/NavBar";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import "./App.css";

function App() {
    const [songs, setSongs] = useState([]);

    const getAllSongs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/songs");
            setSongs(response.data);
        } catch (error) {
            console.warn(`Error in getAllSongs request:${error}`);
        }
    };

    const filterSongs = (searchTerm) => {
        searchTerm = searchTerm.toLowerCase();
        let filteredSongs = songs.filter(
            (song) =>
                song.title.toLowerCase().includes(searchTerm) ||
                song.artist.toLowerCase().includes(searchTerm) ||
                song.album.toLowerCase().includes(searchTerm) ||
                song.genre.toLowerCase().includes(searchTerm)
        );
        setSongs(filteredSongs);
    };

    useEffect(() => {
        getAllSongs();
    }, []);

    return (
        <div className="App">
            <NavBar filterSongs={filterSongs} />
            <NewSongForm getAllSongs={getAllSongs} />
            <MusicTable songs={songs} getAllSongs={getAllSongs} />
        </div>
    );
}

export default App;
