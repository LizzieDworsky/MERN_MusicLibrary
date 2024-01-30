import Song from "./Song";
import "./MusicTableSong.css";

const MusicTable = ({ songs, getAllSongs }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <Song
                            key={song._id}
                            song={song}
                            getAllSongs={getAllSongs}
                        />
                    ))}
                </tbody>
            </table>
            <button onClick={(e) => getAllSongs(e)} className="reset-song-btn">
                Reset Songs
            </button>
        </div>
    );
};

export default MusicTable;
