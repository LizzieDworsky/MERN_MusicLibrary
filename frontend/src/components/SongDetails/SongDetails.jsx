import "./SongDetails.css";

const SongDetailsPage = ({ song }) => {
    const date = new Date(song.releaseDate);
    const readableDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="song-details-div">
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
            <p>{song.album}</p>
            <p>{song.genre}</p>
            <p>{readableDate}</p>
        </div>
    );
};

export default SongDetailsPage;
