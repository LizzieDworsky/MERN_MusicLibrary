import { useEffect, useState } from "react";
import axios from "axios";
import MusicTable from "../components/MusicTableSong/MusicTable";
import NavBarSearch from "../components/NavBar/NavBarSearch";
import NewSongForm from "../components/NewSongForm/NewSongForm";

const MusicPage = ({}) => {
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
                song.genre.toLowerCase().includes(searchTerm) ||
                song.releaseDate.toLowerCase().includes(searchTerm)
        );
        setSongs(filteredSongs);
    };

    useEffect(() => {
        getAllSongs();
    }, []);

    return (
        <div className="App">
            <NavBarSearch filterSongs={filterSongs} />
            <NewSongForm getAllSongs={getAllSongs} />
            <MusicTable songs={songs} getAllSongs={getAllSongs} />
        </div>
    );
};

export default MusicPage;
