import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import SongDetails from "../components/SongDetails/SongDetails";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const getSong = async (req) => {
    try {
        console.log(req.params.songId);
        const response = await axios.get(
            `http://localhost:5000/api/songs/${req.params.songId}`
        );
        return response.data;
    } catch (error) {
        console.warn(`Error in getSong request:${error}`);
    }
};

const SongDetailsPage = ({}) => {
    const data = useLoaderData();
    const [song, setSong] = useState(data);
    console.log(data, song);

    return (
        <div>
            <NavBar />
            <SongDetails song={song} />
        </div>
    );
};

export default SongDetailsPage;
