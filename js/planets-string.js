(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(planetsArray);
let plutoArray = planetsString.split("|");
    console.log(plutoArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

let brString = plutoArray.join




     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let brString = plutoArray.join("<br>");
    console.log(brString);

    // let planetString = planetsString.split("<br/>");
    // console.log(plutoArray);

    let ulPlanets = "<ul>";
    let liString;
    plutoArray.forEach(function (planet){
        liString = "<li>" + planet + "</li>";
        ulPlanets += liString;
        if(planet === plutoArray[plutoArray.length - 1]){
            ulPlanets += "</ul>"
        }
    })

    console.log(ulPlanets);
})();
