//travel info
const travel = {
  name:"Derek", 
  countries: [
      {
          name: "Vietnam",
          year: 2016
      },
      {
          name: "Germany",
          year: 2018
      },
      {
          name:"Italy",
          year: 2018
      },

  ]
};
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travel)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });