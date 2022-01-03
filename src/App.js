import "./App.css";
import { Navbar } from "./navbar/navbar";
import { Tableau } from "./tableau";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Tableau">
        <Tableau />
      </div>
    </div>
  );
}

export default App;
