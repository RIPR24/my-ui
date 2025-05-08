import Headings from "./Reusable/Headings";
import Imgslideshow from "./Reusable/Imgslideshow";
import PassInp from "./Reusable/PassInp";
import ScrlFit from "./Reusable/ScrlFit";
import ScrlPop from "./Reusable/ScrlPop";

const App = () => {
  return (
    <div className="con">
      <input type="text" />
      <button>yolo</button>
      <PassInp />
      <div style={{ height: "100vh" }}></div>
      <Headings str="TESTINGS" />
      <ScrlPop>
        <div className="crd-prm" style={{ height: 500, width: 600 }}>
          Yolo
        </div>
      </ScrlPop>
      <div style={{ height: "100vh" }}></div>
      <ScrlFit>
        <div
          style={{ height: 400, width: 1300, backgroundColor: "#a44" }}
        ></div>
      </ScrlFit>
      <div style={{ height: "100vh" }}></div>
      <Imgslideshow
        arr={[
          "https://cdn.bikedekho.com/processedimages/honda/2025-cb650r/source/2025-cb650r678796123d48a.jpg",
          "https://imgd.aeplcdn.com/1280x720/n/cw/ec/110491/scrambler-right-side-view-3.jpeg",
        ]}
        height={800}
      />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default App;
