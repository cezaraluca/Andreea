var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "capacitatea localului/locuri disponibile",
      "dacă este o terasă disponibilă",
      "categoria de preț la care se încadreaza",
      "dacă se poate plăti cu cardul",
      "dacă servesc mâncare",
      'rating',
      'dacă există loc pentru fumat',
      'dacă este wi-fi',
      'ce tip de băuturi servesc (alcool, ceai, cafea)',
      "daca exista geamuri",
      "dacă este permis accesul cu animale",
    ],
    datasets: [
      {
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#cc99ff",
          "#999966",
          "#993300",
          "#006600",
          "#3399ff",
          "#666699"
        ],
        data: [31, 24, 29, 26, 27, 28, 11, 9, 22, 8, 3],
      },
    ],
  },
});
