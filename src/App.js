import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import { Link, Route, Routes } from "react-router-dom";

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <Link to="/topics">Topics</Link>
      <h1>Topic Detail Page</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/shop" Component={ShopPage} />
      <Route path="/topics/:topicId" Component={TopicDetail} />
    </Routes>
  );
}

export default App;
