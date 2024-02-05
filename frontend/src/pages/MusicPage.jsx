import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import MusicTable from "../components/MusicTableSong/MusicTable";
import NavBarSearch from "../components/NavBar/NavBarSearch";
import NewSongForm from "../components/NewSongForm/NewSongForm";
import { useLoaderData } from "react-router-dom";

export const getAllSongs = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/songs");
        return response.data;
    } catch (error) {
        console.warn(`Error in getAllSongs request:${error}`);
    }
};

const MusicPage = () => {
    const data = useLoaderData();
    const [songs, setSongs] = useState(data);

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

    const fetchSongs = async () => {
        let allSongs = await getAllSongs();
        if (allSongs) {
            setSongs(allSongs);
        }
    };

    return (
        <div className="App">
            <NavBarSearch filterSongs={filterSongs} />
            <NewSongForm getAllSongs={fetchSongs} />
            <MusicTable songs={songs} getAllSongs={fetchSongs} />
        </div>
    );
};

export default MusicPage;
