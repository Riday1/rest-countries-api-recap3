const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = (countries) => {

    const allCountriesHTML = countries.map(country => getCountryHTML(country));

    const container = document.getElementById("countries")
    container.innerHTML = allCountriesHTML.join(' ')


}
const getCountryHTML = (country) => {
    return `
    <div class="country">
        <h3>Country Name : ${country.name.common}</h3>
        <img src = "${country.flags.png}" > 

    </div>
    `
}


loadCountries();