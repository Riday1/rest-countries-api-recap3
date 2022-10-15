const loadCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountriesDetails(data))
}

const displayCountriesDetails = (countries) => {
    const allCountries = countries.map(country => getCountryHTML(country));

    const container = document.getElementById('country');
    container.innerHTML = allCountries.join(' ');
}
const getCountryHTML = (country) => {
    return `
    <div class="country">
        <h2>Country Name : ${country.name.common}</h2>
        <img src ="${country.flags.png}" alt ="">
    </div>
    `
}
loadCountriesData();