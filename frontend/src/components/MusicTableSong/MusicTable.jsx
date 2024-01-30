import Song from "./Song";
import "./MusicTableSong.css";

const MusicTable = ({ songs, getAllSongs }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
                {songs.map((song) => (
                    <Song key={song.id} song={song} />
                ))}
            </table>
            <button onClick={(e) => getAllSongs(e)} className="reset-song-btn">
                Reset Songs
            </button>
        </div>
    );
};

export default MusicTable;
