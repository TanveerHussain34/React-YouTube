import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*()_+";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialCharAllowed, generatePassword]);

  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  }, [password]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mx-4 w-full max-w-lg md:max-w-screen-sm bg-gray-700 text-orange-500 shadow-md rounded-lg p-4 my-8">
          <h1 className="text-2xl text-white text-center xs:text-3xl">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden py-4">
            <input
              type="text"
              value={password}
              className="w-full outline-none px-3 py-1 rounded-l-lg text-lg"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-700 px-3 rounded-r-lg py-1 text-white text-lg"
              onClick={copyPassToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <input
                type="range"
                value={length}
                min={8}
                max={32}
                id="rangeInput"
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="rangeInput">Length: {length}</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={specialCharAllowed}
                id="specialCharInput"
                onChange={() => {
                  setSpecialCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="specialCharInput">Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
