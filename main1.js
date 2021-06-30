var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Sex feminin", "Sex masculin"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
      ],
      data: [26, 29]
    }]
  }
});