const Song = ({ song }) => {
    const date = new Date(song.releaseDate);
    const readableDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{readableDate}</td>
        </tr>
    );
};

export default Song;
