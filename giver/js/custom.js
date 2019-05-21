$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 50) {
            $("#mainNav").removeClass("giver-top-nav");
        } else {
            $("#mainNav").addClass("giver-top-nav");
        }
    });
});


$(function () {
    $('.video-inner').css("height",($('.video-inner').width()*.56));
    $(window).resize(function () {
        $('.video-inner').css("height",($('.video-inner').width()*.56));
    });
});

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true 
  });
$(function () {
        $('.navbar-toggler').click(function () {
            $("#mainNav").addClass("giver-top-nav");
            if($('.navbar').height()>100 && $(window).scrollTop() < 50){
                setTimeout(() => {
                    $("#mainNav").removeClass("giver-top-nav");
                }, 250);
            }
        });
});
$(function () {
    $('.navbar-toggler').click(function () {
        
    });
});



var isClicked1 = false;
var isClicked2 = false;
var isClicked3 = false;
var isClicked4 = false;
function changeSign1() {
    isClicked1 = !isClicked1;
    var element = document.getElementById("default1");
    element.style.transform = (isClicked1  == true) ? "rotate(180deg)" : "rotate(0deg)";
    var element = document.getElementById("default2");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default3");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default4");
    element.style.transform ="rotate(0deg)";


    isClicked2 = false;
    isClicked3 = false;
    isClicked4 = false;
    
}

function changeSign2() {
   
    isClicked2 = !isClicked2;
    var element = document.getElementById("default2");
    element.style.transform = (isClicked2  == true) ? "rotate(180deg)" : "rotate(0deg)";
    var element = document.getElementById("default1");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default3");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default4");
    element.style.transform ="rotate(0deg)";


    isClicked1 = false;
    isClicked3 = false;
    isClicked4 = false;
}


function changeSign3() {
    isClicked3 = !isClicked3;
    var element = document.getElementById("default3");
    element.style.transform = (isClicked3  == true) ? "rotate(180deg)" : "rotate(0deg)";
    var element = document.getElementById("default2");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default1");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default4");
    element.style.transform ="rotate(0deg)";


    isClicked1 = false;
    isClicked2 = false;
    isClicked4 = false;
}

function changeSign4() {
    isClicked4 = !isClicked4;
    var element = document.getElementById("default4");
    element.style.transform = (isClicked4  == true) ? "rotate(180deg)" : "rotate(0deg)";
    var element = document.getElementById("default2");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default1");
    element.style.transform ="rotate(0deg)";
    var element = document.getElementById("default3");
    element.style.transform ="rotate(0deg)";


    isClicked1 = false;
    isClicked2 = false;
    isClicked3 = false;
}
//chart js
// $(document).ready(function(){
// 	var ctx = $("#myChart").get(0).getContext("2d"); 
// 	var data = [
// 		{
// 			value: 270,
// 			color: "cornflowerblue",
// 			highlight: "lightskyblue",
// 			label: "JavaScript"
// 		},
// 		{
// 			value: 50,
// 			color: "white",
// 			label: "HTML"
// 		},
		
//     ];
//     var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: data,
//         options: options
//     });
 
// 	var chart = new Chart(ctx).Doughnut(data);
// });
const CHART = document.getElementById('myChart');
let donughtChart = new Chart(CHART, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Points',
            backgroundColor:['white','#80c342'],
            hoverBackgroundColor:['white', '#80c342'],
            hoverBorderWidth:[0,0],
            data: [2, 3],
            weight:[10]
        }],
    },
    options: { 
        cutoutPercentage: 80
    }
});
const CHART2 = document.getElementById('myChart2');
let donughtChart2 = new Chart(CHART2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Points',
            backgroundColor:['#80c342','white'],
            hoverBackgroundColor:['#80c342', 'white'],
            hoverBorderWidth:[0,0],
            data: [6, 2],
            weight:[10]
        }],
    },
    options: { 
        cutoutPercentage: 80,
        tooltips: {
            custom: function (tooltipModel) {
                var tooltipEl = document.getElementById('chartjs-tooltip');
                tooltipEl.style.padding = '100px'
                // tooltipEl.style.zIndex = 999999999;
            }
        }
    }
});









// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: {
//         tooltips: {
//             // Disable the on-canvas tooltip
//             enabled: false,

//             custom: function (tooltipModel) {
//                 // Tooltip Element
//                 var tooltipEl = document.getElementById('chartjs-tooltip');

//                 // Create element on first render
//                 if (!tooltipEl) {
//                     tooltipEl = document.createElement('div');
//                     tooltipEl.id = 'chartjs-tooltip';
//                     tooltipEl.innerHTML = '<table></table>';
//                     document.body.appendChild(tooltipEl);
//                 }

//                 // Hide if no tooltip
//                 if (tooltipModel.opacity === 0) {
//                     tooltipEl.style.opacity = 0;
//                     return;
//                 }

//                 // Set caret Position
//                 tooltipEl.classList.remove('above', 'below', 'no-transform');
//                 if (tooltipModel.yAlign) {
//                     tooltipEl.classList.add(tooltipModel.yAlign);
//                 } else {
//                     tooltipEl.classList.add('no-transform');
//                 }

//                 function getBody(bodyItem) {
//                     return bodyItem.lines;
//                 }

//                 // Set Text
//                 if (tooltipModel.body) {
//                     var titleLines = tooltipModel.title || [];
//                     var bodyLines = tooltipModel.body.map(getBody);

//                     var innerHtml = '<thead>';

//                     titleLines.forEach(function (title) {
//                         innerHtml += '<tr><th>' + title + '</th></tr>';
//                     });
//                     innerHtml += '</thead><tbody>';

//                     bodyLines.forEach(function (body, i) {
//                         var colors = tooltipModel.labelColors[i];
//                         var style = 'background:' + colors.backgroundColor;
//                         style += '; border-color:' + colors.borderColor;
//                         style += '; border-width: 2px';
//                         var span = '<span style="' + style + '"></span>';
//                         innerHtml += '<tr><td>' + span + body + '</td></tr>';
//                     });
//                     innerHtml += '</tbody>';

//                     var tableRoot = tooltipEl.querySelector('table');
//                     tableRoot.innerHTML = innerHtml;
//                 }

//                 // `this` will be the overall tooltip
//                 var position = this._chart.canvas.getBoundingClientRect();

//                 // Display, position, and set styles for font
//                 tooltipEl.style.opacity = 1;
//                 tooltipEl.style.position = 'absolute';
//                 tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
//                 tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
//                 tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
//                 tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
//                 tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
//                 tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
//                 tooltipEl.style.pointerEvents = 'none';
//             }
//         }
//     }
// });
