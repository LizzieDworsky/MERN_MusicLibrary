import MusicTable from "./components/MusicTable";
import NavBar from "./components/NavBar/NavBar";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <NewSongForm />
            <MusicTable />
        </div>
    );
}

export default App;
