console.log("hello");

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (data) => {
  // for (const country of data){
  //     console.log(country);
  // }

  //with forEach

  const countriesContainer = document.getElementById("countries-container");
  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    console.log(country.name.common);
    countryDiv.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital ? country.capital[0] : "No Capital"}</p>
        <button onclick = "loadCountryDetail('${
          country.cca2
        }')">Display Button</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

loadCountryDetail = (countryCode) => {
  console.log("get country detail", countryCode);
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
    <h2>${country.name.common}</h2>
    <img src = "${country.flags.png}">
  `;
};

loadCountries();

//String call korle make sure quotation mark dao
