
// Chart 1: Pet Ownership Trends
var chart1 = "charts/pet_ownership.vl.json";

vegaEmbed("#pet-ownership-chart", chart1)
  .then(function(result) {
    console.log("Chart 1 loaded successfully!");
  })
  .catch(console.error);


// Chart 2: Pet Types
var chart2 = "charts/pet_types.vl.json";

vegaEmbed("#pet-types-chart", chart2)
  .then(function(result) {
    console.log("Chart 2 loaded successfully!");
  })
  .catch(console.error);


// Chart 3: Pet Expenditure
var chart3 = "charts/pet_expenditure.vl.json";

vegaEmbed("#pet-expenditure-chart", chart3)
  .then(function(result) {
    console.log("Chart 3 loaded successfully!");
  })
  .catch(console.error);


// Chart 4: Pet Vaccination
var chart4 = "charts/pet_vaccination.vl.json";

vegaEmbed("#pet-vaccination-chart", chart4)
  .then(function(result) {
    console.log("Chart 4 loaded successfully!");
  })
  .catch(console.error);






// Chart 5: RSPCA Animal Shelter Trends
var chart5 = "charts/animal_shelter_trends.vl.json";

vegaEmbed("#shelter-trends-chart", chart5)
  .then(function(result) {
    console.log("Chart 5 loaded successfully!");
  })
  .catch(console.error);

  // Chart 6 — RSPCA Shelter Outcomes Treemap (Vega)
var chart6 = "charts/shelter_outcomes.vg.json";
vegaEmbed("#shelter-outcomes-chart", chart6, { actions: false })
  .then(function () { console.log("Chart 6 loaded successfully!"); })
  .catch(function (error) {
    console.error("Chart 6 failed to load:", error);
  });

// Chart 7: State Rehoming Choropleth Map
vegaEmbed("#state-rehoming-map", "charts/state_rehoming_map.vl.json")
  .then(function () { console.log("Chart 7 loaded successfully!"); })
  .catch(console.error);

// Chart 8: Proportional Symbol Map
var chart8 = "charts/state_animals_map.vl.json";

vegaEmbed("#state-animals-map", chart8)
  .then(function() {
    console.log("Chart 8 loaded successfully!");
  })
  .catch(console.error);