import axios from "axios";

const Song = ({ song, getAllSongs }) => {
    const date = new Date(song.releaseDate);
    const readableDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const deleteSong = async (songId) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/songs/${songId}`
            );
            if (response.status === 204) {
                getAllSongs();
            }
        } catch (error) {
            console.warn(`Error in getAllSongs request:${error}`);
        }
    };

    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{readableDate}</td>
            <td>
                <button
                    className="delete-btn"
                    onClick={(e) => deleteSong(song._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Song;
