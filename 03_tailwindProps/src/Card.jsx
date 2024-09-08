import PropTypes from "prop-types";

function Card(props) {
  // We can wrtie here { userName = "USERNAME", about, img } and can get the values of props by userName, about and img
  const handleClick = () => {
    window.open("https://github.com/TanveerHussain34", "_blank");
  };
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={props.imgSrc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {props.about || "Description"}
        </p>
        <button
          onClick={handleClick}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-transparent border-white text-align-left hover:bg-white hover:text-gray-900 hover:border-transparent py-2 px-4 border rounded-md"
        >
          View Profile →
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default Card;
