import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <h1 className="bg-gray-500 p-4 rounded-lg text-white mb-4">
        Welcome to Tailwind CSS
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Card
          imgSrc="./public/Yellow Simple Depop Profile Picture.png"
          userName="Tanveer"
          about="I'm motivated final year student of IT."
        />
        <Card
          imgSrc="./public/Red White Neon Circle Instagram Profile.png"
          userName="Hussain"
          about="I'm passionate MERN Stack Developer."
        />
      </div>
    </>
  );
}

export default App;
