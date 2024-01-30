import Song from "./Song";

const MusicTable = ({ songs }) => {
    return (
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
    );
};

export default MusicTable;
