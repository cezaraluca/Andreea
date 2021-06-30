var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Nimic",
      "Ce fel de muzica se asculta (jazz, pop, house etc)",
      "Sa fie primitor ",
      "imagini",
      "Ce tip de mancare servesc",
      "Sa fie curat si sa aiba un personal cat de cat prietenos",
      "Reviews",
      "Orar, specificul localului (restaurante)",
      "Tipul de muzică, design",
      "Ofertele săptămânale/zilnice ale localului",
      "Localizare",
      "muzica din local, rating al curateniei/igienei ",
      "Ce ținută ar accepta  ",
      "Nu stiu",
      "Loc de parcare",
      "Care sunt cele mai aglomerate ore, daca au happy hours, daca organizeaza vreun eveniment in ziua in care planuiesc sa merg",
      "dacă livrează și la domiciliu (în cazul în care locul respectiv servește mâncare)"
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
            "#666699",
            "#99ffcc",
            "#00cc00",
            "#cc33ff",
            "#99ffcc",
            "#ff9900",
            "#6600cc"
          ],
        data: [11, 6, 7, 1, 5, 7, 4,3 ,2, 3, 1, 2, 1, 4, 4, 1, 1],
      },
    ],
  },
});
