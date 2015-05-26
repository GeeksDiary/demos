(function () {
    var btnDraw = document.getElementById('btnDraw');
    btnDraw.onclick = function(){
      new Highcharts.Chart({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            renderTo: 'container'
        },
        title: {
          text: ''
        },
        credits:{
          enabled:false
        },
        plotOptions: {
          series: {
            animation: false
          },
          pie: {
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            }
          }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                ['Chrome', 12.8],
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
      });

    };
})();
