/* .js files add interaction to your website */

var factList = [
  "By the year 2030, the planet might have only 10% of its forests; if deforestation is not stopped, they could all be gone in less than a century.",/*0*/
  "2024 was confirmed as the hottest year in history.", /*1*/
  "About one-third of global tropical deforestation occurs in Brazil’s Amazon forest, amounting to 1.5 million hectares each year.", /*2*/
  "A 2020 World Wildlife Fund report found that the population sizes of mammals, fish, birds, reptiles and amphibians have experienced a decline of an average of 68% between 1970 and 2016.", /*3*/
   "14 million tons of plastic make their way into the oceans every year. If no action is taken, the plastic crisis will grow to 29 million metric tons per year by 2040.", /*4*/
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}
  
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
