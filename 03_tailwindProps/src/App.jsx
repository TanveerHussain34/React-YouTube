import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-br to-yellow-300 from-red-500 p-4 rounded-lg text-white mb-4 text-center text-xl sm:text-2xl lg:text-3xl">
        Welcome to Tailwind CSS
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        <Card
          imgSrc="/Yellow Simple Depop Profile Picture.png"
          userName="Tanveer"
          about="I'm a motivated final year student of IT."
        />
        <Card
          imgSrc="/Red White Neon Circle Instagram Profile.png"
          userName="Hussain"
          about="I'm a passionate MERN Stack Developer."
        />
      </div>
    </>
  );
}

export default App;
