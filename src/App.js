import React, { useState } from "react";
import Country from "./components/Country";

function App() {
  const [country, setCountry] = useState("");
  const [check, setCheck] = useState(true);
  const [showCountry, setShowCountry] = useState(false);

  const clickHandler = (evt) => {
    evt.preventDefault();
    setShowCountry(true);
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            placeholder="Enter Country"
            value={country}
            onChange={(event) => {
              if (event.target.value.length === 0) {
                setCheck(true);
              } else {
                setCheck(false);
              }
              setCountry(event.target.value);
            }}
            style={{ margin: "10px" }}
          />
          <button
            onClick={clickHandler}
            className="btn btn-danger m-5"
            disabled={check}
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      {showCountry ? <Country data={country} /> : null}
    </>
  );
}

export default App;
