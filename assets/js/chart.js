//  bargraph 
var options = {
  series: [{
    name: 'series1',
    type: 'column',
    data: [350, 180, 240, 470, 200],
  }, {
    name: 'series2',
    type: 'column',
    data: [500, 390, 280, 140, 290],
  }, {
    name: 'series3',
    type: 'line',
    data: [350, 180, 240, 470, 290]
  }],
  grid: {
    show: false,
  },
  legend: {
    show: false,
  },
  chart: {
    height: 350,
    width: '100%',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    curve: 'straight',
    colors: ['#7A70BA'],
    width: 1,
    dashArray: 0,
  },
  markers: {
    size: 6,
    colors: ['#7A70BA'],
    strokeColors: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
  },
  fill: {
    colors: ['#7A70BA', '#48A3D7']
  },
  xaxis: {
    categories: ["Jan", "Feb", "mar", "apr", "may"],
  },
  yaxis: {
  },
  tooltip: {
    fixed: {
      enabled: false,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  grid: {
    strokeDashArray: 8,
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',

    },
  },
};
var chart = new ApexCharts(document.querySelector("#customer"), options);
chart.render();

// leaflets
var options = {
  series: [{
    name: 'growth',
    data: [22, 14, 23, 8, 14, 12, 2, 14, 18, 35, 18, 8, 24]
  }],
  chart: {
    height: 130,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  stroke: {
    width: 3,
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
    crosshairs: {
      show: false,
    },
    tooltip: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#7A70BA'],
      shadeIntensity: 1,
      type: '',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [, , ,]
    },
  }
};
var chart = new ApexCharts(document.querySelector("#leaflets"), options);
chart.render();

// piechart    
var options = {
  series: [55, 30, 25, 35],
  chart: {
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
};
var chart = new ApexCharts(document.querySelector("#piechart"), options);
chart.render();

// area chart 
var options = {
  series: [{
    name: "TEAM A",
    data: [20, 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140, 70, 130, 90, 100, 50, 0]
  },
  {
    name: "TEAM B",
    data: [20, 70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130, 300, 220, 180, 40, 70, 0]
  },
  ],
  chart: {
    height: 300,
    type: 'line',
    colors: ['#564d92', '#7A70BA'],
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      blur: 10,
      color: '#000',
      opacity: .3,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 4,
    curve: 'smooth',
    colors: ['#7A70BA', '#a89fe2'],
    dashArray: [0, 8, 5],
  },
  markers: {
    size: 0,
    colors: '#2F2F3B',
    strokeColors: '#fff',
    fillOpacity: .9,
    discrete: [],
    shape: "circle",
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
  },
  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
    }
  },
  fill: {
    gradien: {
      shadeIntensity: 10,
    },
  },
  xaxis: {
    categories: ['Jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept',
      'oct', 'nov', 'dec'
    ],
  },
  grid: {
    borderColor: 'lightgray',
    strokeDashArray: 8,
  }
};
var chart = new ApexCharts(document.querySelector("#areachart"), options);
chart.render();