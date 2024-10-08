import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="w-full h-screen flex flex-col sm:flex-row justify-evenly items-center text-black">
        <div className="max-w-screen-xl order-2 m-4">
          <div className="text-center sm:text-right sm:ml-auto">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Download Now
              <span className="hidden sm:block text-3xl lg:text-5xl">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-4 lg:px-6 py-2 lg:py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-5"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="">
          <img
            className="w-64 xs:w-80 lg:w-96 m-4"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center">
        <img
          className="w-64 xs:w-80 sm:w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl py-5 xs:py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
