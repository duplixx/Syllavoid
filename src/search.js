const countries = [
  { name: "AMITY UNIVERSITY" },
  { name: "GCET" },
  { name: "BIT MESRA" },
  { name: "IIT BHU" },
  { name: "GALGOTIAS UNIVERSITY" },
  { name: "NIT HAMIRPUR" },
  { name: "NIT SIKKIM" },
  { name: "VIT CHENNAI" },
  { name: "IIT DHANBAD" },
];

const searchInput = document.querySelector(".search-input");

const suggestionsPanel = document.querySelector(".suggestions");
suggestionsPanel.style.display = "none";
searchInput.addEventListener("keyup", function () {
  const input = searchInput.value.toLowerCase();
  suggestionsPanel.innerHTML = "";
  const suggestions = countries.filter(function (country) {
    return country.name.toLowerCase().startsWith(input);
  });

  // append su
  suggestions.forEach(function (suggested) {
    suggestionsPanel.style.display = "flex";
    const div = document.createElement("a");
    div.href = `collegepdf/pdfviewer.html`;
    div.innerHTML = suggested.name;
    div.classList.add("suggested");
    div.id = "suggestedSearch";
    div.setAttribute("onclick", "storeName()");
    // dev.addEventListener('')
    suggestionsPanel.appendChild(div);
  });
  //minor

  if (input === "") {
    suggestionsPanel.innerHTML = "";
  }
});

// function whenClick() {
//   const searchInput = document.querySelector(".search-input");
// }
