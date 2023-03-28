import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ backgroundColor: "#f791af", height: "100vh" }}>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "white",
          margin: "0",
          paddingTop: "1rem",
        }}
      >
        To Do List
      </h1>
      <Todo />
    </div>
  );
}

export default App;
