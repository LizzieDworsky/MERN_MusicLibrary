import MusicTable from "./components/MusicTable";
import NavBar from "./components/NavBar";
import NewSongForm from "./components/NewSongForm";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <SearchBar />
            <NewSongForm />
            <MusicTable />
        </div>
    );
}

export default App;
