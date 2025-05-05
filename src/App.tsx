import Headings from "./Reusable/Headings";
import PassInp from "./Reusable/PassInp";

const App = () => {
  return (
    <div className="con">
      <input type="text" />
      <button>yolo</button>
      <PassInp />
      <div style={{ height: "100vh" }}></div>
      <Headings str="TESTINGS" />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default App;
