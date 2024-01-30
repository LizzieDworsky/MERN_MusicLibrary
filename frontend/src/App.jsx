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

    useEffect(() => {
        getAllSongs();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <NewSongForm getAllSongs={getAllSongs} />
            <MusicTable songs={songs} />
        </div>
    );
}

export default App;
