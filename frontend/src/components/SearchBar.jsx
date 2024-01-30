import { useState } from "react";

const SearchBar = ({}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(searchTerm);
        setSearchTerm("");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
