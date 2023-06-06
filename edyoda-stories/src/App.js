import "./styles.css";
import Topbar from "./topbar";
import Filterbox from "./filterBy";
import Trending from "./trending";
import BlogRender from "./renderData";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Trending />
        <Filterbox />
        <BlogRender />
      </main>
    </div>
  );
}

