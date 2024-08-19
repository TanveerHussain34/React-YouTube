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
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialCharAllowed, generatePassword]);

  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  }, [password]);

  return (
    <>
      <div className="mx-auto w-full max-w-lg bg-gray-700 text-orange-500 shadow-md rounded-lg p-3 my-8">
        <h1 className="text-3xl text-white text-center">
          Password Generator using React
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
            className="outline-none bg-blue-700 px-3 rounded-r-lg py-0.5 shrink-0 text-white text-lg"
            onClick={copyPassToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center gap-x-4">
          <div className="flex items-center gap-x-1">
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
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
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
    </>
  );
}

export default App;
