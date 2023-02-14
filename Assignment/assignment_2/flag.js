async function fetchFlag() {
    // Fetch from REST API 
    let data = await fetch("https://restcountries.com/v3.1/all");
    let flagsWithJSON = await data.json();
    console.log (flagsWithJSON);

    // Return flagsWithJSON
    createUI(flagsWithJSON);
    
}
function createUI(flagsWithJSON){
    let container = document.querySelector("#maincontainer");

    for (let i = 0; flagsWithJSON.length; i++) {
        // Main parent tag including the class called 'country'
        let countryElement = document.createElement("form");
        countryElement.classList.add("country");

        // image tag which holds the image
        let img = document.createElement("img");
        img.src = flagsWithJSON[i].flags.png;
        img.classList.add("flag");
        countryElement.appendChild(img);

        // Creating a div element on the flags country of origin and population
        let contentInfo = document.createElement("div");
        
        let countryTitle = document.createElement("div");
        countryTitle.textContent = "Crountry Name: ";
        contentInfo.appendChild(countryTitle);
        countryTitle.setAttribute("id", "countryTitle");

        let countryName = document.createElement("div");
        countryName.textContent = flagsWithJSON[i].name.common;
        contentInfo.appendChild(countryName);
        countryName.setAttribute("id", "countryName");

        let populationTitle = document.createElement("div");
        populationTitle.textContent = "Population: ";
        contentInfo.appendChild(populationTitle);
        populationTitle.setAttribute("id", "populationTitle");
        
        let population = document.createElement("div");
        population.textContent = flagsWithJSON[i].population;
        contentInfo.appendChild(population);
        population.setAttribute("id", "population");
        
        // Appending div to element
        countryElement.appendChild(contentInfo);
        container.appendChild(countryElement);

    }
}
fetchFlag();
