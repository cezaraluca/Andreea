var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Da", "Nu"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
      ],
      data: [44, 11]
    }]
  }
});