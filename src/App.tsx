import "./App.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";

function App() {
  return (
    <div className="App">
      {robots.map((r) => (
        <Robot key={r.id} id={r.id} name={r.name} email={r.email} />
      ))}
    </div>
  );
}

export default App;
