import React, { useState } from "react";
import List from "./List";

export default function Search() {
  // const countries = [
  //   { name: "AMITY UNIVERSITY" },
  //   { name: "GCET" },
  //   { name: "BIT MESRA" },
  //   { name: "IIT BHU" },
  //   { name: "GALGOTIAS UNIVERSITY" },
  //   { name: "NIT HAMIRPUR" },
  //   { name: "NIT SIKKIM" },
  //   { name: "VIT CHENNAI" },
  //   { name: "IIT DHANBAD" },
  // ];

  // const searchInput = document.querySelector(".search-input");

  // const suggestionsPanel = document.querySelector(".suggestions");
  // suggestionsPanel.style.display = "none";
  // searchInput.addEventListener("keyup", function () {
  //   const input = searchInput.value.toLowerCase();
  //   suggestionsPanel.innerHTML = "";
  //   const suggestions = countries.filter(function (country) {
  //     return country.name.toLowerCase().startsWith(input);
  //   });

  //   // append su
  //   suggestions.forEach(function (suggested) {
  //     suggestionsPanel.style.display = "flex";
  //     const div = document.createElement("a");
  //     div.href = `collegepdf/pdfviewer.html`;
  //     div.innerHTML = suggested.name;
  //     div.classList.add("suggested");
  //     div.id = "suggestedSearch";
  //     div.setAttribute("onclick", "storeName()");
  //     // dev.addEventListener('')
  //     suggestionsPanel.appendChild(div);
  //   });
  //   //minor

  //   if (input === "") {
  //     suggestionsPanel.innerHTML = "";
  //   }
  // });
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    

  return (
    <section className="search h-[80vh]">
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Astronaut-Vector-Transparent.png"
        alt=""
        className="vector-img"
      />
      <div className="mt-[200px] md:m-0">
        <h1 className="text-center mt-16 text-white text-xl md:text-5xl text-shadow-l font-bold">
          <a
            href="http://google.com"
            className="typewrite"
            data-period="2000"
            data-type='[ "...And Hustle for your Syllabus Ends Here", "" ]'
          >
            <span className="wrap"></span>
          </a>
        </h1>
        <label
          for="countries"
          className="hidden md:block text-center text-l mt-16 font-medium text-white dark:white"
        >
          Select your
          <strong>
            <u class="text-red-500">College</u>
          </strong>
          {" "}
          🏫
        </label>
        <div className="mt-2 search-cont">
          <div className="containerS">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              onChange={inputHandler}
            />
            <div className="searchS"></div>
          </div>
          <div className="suggestions flex-col items-center space-y-2 font-3xl font-bold md:text-xl mt-8 text-center text-red-600 active:text-white active:text-3xl">
            <List input={inputText} hidden/>
          </div>
        </div>
      </div>
    </section>
  );
}
