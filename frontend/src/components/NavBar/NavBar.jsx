import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = ({}) => {
    return (
        <nav className="nav-bar">
            <h1 className="nav-title">Rhythm Rift</h1>
            <SearchBar className="nav-search" />
        </nav>
    );
};

export default NavBar;
