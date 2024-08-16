import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl rounded-3xl py-2 px-3 bg-white">
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#4169E1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#4169E1" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#FF7F50")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{
              backgroundColor: "#FF7F50",
            }}
          >
            Coral
          </button>
          <button
            onClick={() => setColor("#6B8E23")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#6B8E23" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#008080")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#008080" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("#DAA520")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#DAA520" }}
          >
            Goldenrod
          </button>
          <button
            onClick={() => setColor("#708090")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#708090" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
