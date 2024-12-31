import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import Search from "./components/Search";

function App() {
  return (
    <div className="App w-full h-auto bg-blue-300 p-2">
      <Search />
      <Pagination />
      <Posts />
      {/* <ReducerComp /> */}
    </div>
  );
}

export default App;
