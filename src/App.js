import "./styles.css";
import axios from "axios";

const giphy_key = process.env.REACT_APP_GIPHY_KEY;
console.log(giphy_key);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
