import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <h1>연서의 moonshot-pretask</h1>
      <ul>
        <li>
          <Link to="/drag-n-drop">드래그앤드랍 연습</Link>
        </li>
        <li>
          <Link to="/tree-graph">트리그래프 ui 연습</Link>
        </li>
      </ul>
    </header>
  );
};

export default Home;
