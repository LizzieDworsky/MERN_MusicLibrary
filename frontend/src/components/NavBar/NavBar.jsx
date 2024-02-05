import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <h1 className="nav-title">Rhythm Rift</h1>
            </Link>
        </div>
    );
};

export default NavBar;
