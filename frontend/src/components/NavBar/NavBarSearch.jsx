import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBarSearch = ({ filterSongs }) => {
    return (
        <nav className="nav-bar">
            <h1 className="nav-title">Rhythm Rift</h1>
            <SearchBar className="nav-search" filterSongs={filterSongs} />
        </nav>
    );
};

export default NavBarSearch;
