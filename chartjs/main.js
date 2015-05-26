(function(){
  var data = [
      {
          value: 45.0,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Firefox"
      },
      {
          value: 26.8,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "IE"
      },
      {
          value: 12.8,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Chrome"
      },
      {
          value: 8.5,
          color: "#FEB45C",
          highlight: "#FFC870",
          label: "Safari"
      },
      {
          value: 6.2,
          color: "#FFB45C",
          highlight: "#FFC870",
          label: "Opera"
      },
      {
          value: 0.7,
          color: "#FDE45C",
          highlight: "#FFC870",
          label: "Others"
      }
  ];

  var button = document.getElementById('btnDraw');

  button.onclick = function(){
    var ctx = document.getElementById("container").getContext("2d");
    var options = {
      animation: false
    };
    var myNewChart = new Chart(ctx).Pie(data, options);
  };

})();
