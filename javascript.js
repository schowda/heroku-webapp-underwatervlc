// window.onload = function () {
//     var url = document.location.href,
//         params = url.split('?')[1].split('&'),
//         data = {}, tmp;
//     for (var i = 0, l = params.length; i < l; i++) {
//          tmp = params[i].split('=');
//          data[tmp[0]] = tmp[1];
//     }
//     document.getElementById('videotitle2').innerHTML = data.name;
// }
var value = String(localStorage.getItem("value"));
var prettyVal = String(localStorage.getItem("prettyvalue"));
var words = prettyVal.split(" ");
document.getElementById("videotitle2").innerHTML = value;
console.log(words);
document.getElementById("videotitle2").innerHTML = "Video Analysis";

if(words.length == 3 ) {
    document.getElementById("parameters").innerHTML = "Parameters" + ": " + words[0] + ", " + words[1] + ", " + words[2]; 
} 
else if (words.length == 4) {
    document.getElementById("parameters").innerHTML = "Parameters" + ": " + words[0] + ", " + words[1] + ", " + words[2] + ", " + words[3]; 
}


let meanBlueLevels = window["MEAN_BLUE_LEVELS_" + value];
let meanGreenLevels = window["MEAN_GREEN_LEVELS_" + value];
let meanRedLevels = window["MEAN_RED_LEVELS_" + value];
let threshold = window["THRESHOLD_" + value];
let receivedBits = window["RECEIVED_BITS_" + value];
let transmittedBits = window["TRANSMITTED_BITS_" + value];




// import { MEAN_BLUE_LEVELS, MEAN_RED_LEVELS,  MEAN_GREEN_LEVELS, THRESHOLD, RECEIVED_BITS, TRANSMITTED_BITS } from './graph-data/1Hz_100fps_Vertical/meanBlueLevels_1Hz_100fps_Vertical.js'









Highcharts.chart('container-a', {

    


    title: {
        text: 'Pixel Intensity Graph of RGB channels'
    },

    subtitle: {
        text: 'Source: March-30 Dataset/50Hz-100FPS'
    },

    yAxis: {
        title: {
            text: 'Pixel Intensity'
        },

    },


    xAxis: {
        min: 1,
        max: 500,
        title: {
            text: 'Frame Number'
        },

    },
    tooltip: {
        style: {
            display: "none",
        },
        enabled: false
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    chart: {
        zoomType: 'x',

    },

    plotOptions: {
        series: {


            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },


    exporting: {
        showTable: false,
        csv: {
            columnHeaderFormatter: function (item, key) {
                if (!item || item instanceof Highcharts.Axis) {
                    return 'Frame'
                } else {
                    return item.name;
                }
            }
        }
    },

    series: [{
        name: 'Blue Pixel Intensitiy',
        data: meanBlueLevels,
        color: '#0000FF'
    }, 
    {
        name: 'Red Pixel Intensity',
        data: meanRedLevels,
        color: '#FF0000'
    }, {
        name: 'Green Pixel Intensity',
        data: meanGreenLevels,
        color: '#00FF00'
    },
    {
        name: 'Threshold',
        data: threshold,
        color: '#000000'
    }
],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


// Highcharts.chart('container-b', {


//     title: {
//         text: 'Pixel Intensity Graph of Blue channel'
//     },

//     subtitle: {
//         text: 'Source: March-30 Dataset/50Hz-100FPS'
//     },

//     yAxis: {
//         title: {
//             text: ' Blue Pixel Intensity'
//         }
//     },

//     xAxis: {
//         title: {
//             text: 'Frame Number'
//         },

//     },
//     tooltip: {
//         style: {
//             display: "none",
//         },
//         enabled: false
//     },

//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle'
//     },

//     chart: {
//         zoomType: 'x',

//     },

//     plotOptions: {
//         series: {


//             label: {
//                 connectorAllowed: false
//             },
//             pointStart: 1
//         }
//     },


//     exporting: {
//         showTable: false,
//         csv: {
//             columnHeaderFormatter: function (item, key) {
//                 if (!item || item instanceof Highcharts.Axis) {
//                     return 'Frame'
//                 } else {
//                     return item.name;
//                 }
//             }
//         }
//     },

//     series: [{
//         name: 'Blue Pixel Intensitiy',
//         data: MEAN_BLUE_LEVELS,
//         color: '#0000FF'
//     }, {
//         name: 'Threshold',
//         data: THRESHOLD,
//         color: '#FF0000'
//     }],

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom'
//                 }
//             }
//         }]
//     }

// });

Highcharts.chart('container-c', {


    title: {
        text: 'Transmitted Bits VS Received Bits'
    },

    subtitle: {
        text: 'Source: March-30 Dataset/50Hz-100FPS'
    },

    yAxis: {
        title: {
            text: ' Blue Pixel Intensity'
        }
    },

    xAxis: {
        min: 1,
        max: 500,
        title: {
            text: 'Frame Number'
        },

    },
    tooltip: {
        style: {
            display: "none",
        },
        enabled: false
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    chart: {
        zoomType: 'x',

    },

    plotOptions: {
        series: {


            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },


    exporting: {
        showTable: false,
        csv: {
            columnHeaderFormatter: function (item, key) {
                if (!item || item instanceof Highcharts.Axis) {
                    return 'Frame'
                } else {
                    return item.name;
                }
            }
        }
    },

    series: [{
        name: 'Transmitted Bits',
        data: transmittedBits,
        color: '#FF0000'
    }, {
        name: 'Received Bits',
        data: receivedBits.map(Element => Element - 0.1),
        color: '#0000FF'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// var str = document.getElementsByClassName("highcharts-subtitle")
// document.getElementById("videotitle2").innerHTML = str.value;