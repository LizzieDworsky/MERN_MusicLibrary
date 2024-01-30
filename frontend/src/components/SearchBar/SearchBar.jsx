import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(searchTerm);
        setSearchTerm("");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="search-bar-form">
            <input
                type="text"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
