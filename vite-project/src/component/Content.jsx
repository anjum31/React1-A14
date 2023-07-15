import React, { useState } from "react";

function ContentSection() {
  const [displayMessage, setMessage] = useState("");

  const handleClick = () => {
    const text = document.getElementById("text").value;

    if (text == "") {
      alert("Please enter your message");
    } else {
      setMessage(text);
    }
    
  };

  return (
    <main>
      <div className="container">
        <button className="btn" onClick={handleClick}>Display Message</button>
        <textarea
          cols="40"
          rows="10"
          placeholder="Write Your Message Here"
          name="text"
          id="text"
        ></textarea>
        <p id="showMessage">{displayMessage}</p>
      </div>
    </main>
  );
}

export default ContentSection;
