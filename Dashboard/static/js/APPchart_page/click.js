function c01(){
    var canvas2 = $('#myChart1');
    var myChart1 = Chart.getChart(canvas2[0]);
    myChart1.data.datasets[0].data = [2, 0, 8,1, 6, 5,1, 2, 3, 7, 6, 9];
    myChart1.update();
    document.getElementById('cus1').innerHTML = 'c20210302121314000';
    document.getElementById('cusname1').innerHTML = 'user1';
    document.getElementById('cus2').innerHTML = 'c20230502111314778';
    document.getElementById('cusname2').innerHTML = 'user2';
    document.getElementById('day1').innerHTML = '10/12';

    document.getElementById('cus3').innerHTML = 'c20210302121314000';
    document.getElementById('cusname3').innerHTML = 'user1';
    document.getElementById('cus4').innerHTML = 'c20230601091315340';
    document.getElementById('cusname4').innerHTML = 'user3';
    document.getElementById('day2').innerHTML = '11/31';
}
function c02(){
    var canvas2 = $('#myChart1');
    var myChart1 = Chart.getChart(canvas2[0]);
    myChart1.data.datasets[0].data = [5, 9, 0,2, 5, 0,6, 3, 2,5,1,0];
    myChart1.update();
    document.getElementById('cus1').innerHTML = 'c20230502111314778';
    document.getElementById('cusname1').innerHTML = 'user2';
    document.getElementById('cus2').innerHTML = 'c20230431222222045';
    document.getElementById('cusname2').innerHTML = 'user4';
    document.getElementById('day1').innerHTML = '10/12';

    document.getElementById('cus3').innerHTML = 'c20230502111314778';
    document.getElementById('cusname3').innerHTML = 'user2';
    document.getElementById('cus4').innerHTML = 'c20230601091315340';
    document.getElementById('cusname4').innerHTML = 'user3';
    document.getElementById('day2').innerHTML = '12/12';
}
function c03(){
    var canvas2 = $('#myChart1');
    var myChart1 = Chart.getChart(canvas2[0]);
    myChart1.data.datasets[0].data = [1, 2, 3,2, 3, 3,6, 4, 2,1,0,2];
    myChart1.update();
    document.getElementById('cus1').innerHTML = 'c20230601091315340';
    document.getElementById('cusname1').innerHTML = 'user3';
    document.getElementById('cus2').innerHTML = 'c20230431222222045';
    document.getElementById('cusname2').innerHTML = 'user4';
    document.getElementById('day1').innerHTML = '06-31';

    document.getElementById('cus3').innerHTML = 'c20230601091315340';
    document.getElementById('cusname3').innerHTML = 'user3';
    document.getElementById('cus4').innerHTML = 'c20230502111314778';
    document.getElementById('cusname4').innerHTML = 'user2';
    document.getElementById('day2').innerHTML = '12/12';
}
function c04(){
    var canvas2 = $('#myChart1');
    var myChart1 = Chart.getChart(canvas2[0]);
    myChart1.data.datasets[0].data = [2, 6, 8,8, 5, 1,0, 4, 5,3,2,7];
    myChart1.update();
    document.getElementById('cus1').innerHTML = 'c20230431222222045';
    document.getElementById('cusname1').innerHTML = 'user4';
    document.getElementById('cus2').innerHTML = 'c20230502111314778';
    document.getElementById('cusname2').innerHTML = 'user2';
    document.getElementById('day1').innerHTML = '10/12';

    document.getElementById('cus3').innerHTML = 'c20230431222222045';
    document.getElementById('cusname3').innerHTML = 'user4';
    document.getElementById('cus4').innerHTML = 'c20210302121314000';
    document.getElementById('cusname4').innerHTML = 'user1';
    document.getElementById('day2').innerHTML = '06-12';
}



function c09(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [10,20,30,20];
    myBarChart.data.datasets[1].data = [50,30,10,40];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-01-04';
    document.getElementById('cou1').innerHTML = 'Cou001';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20210302121314000';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-01-14';
    document.getElementById('cou2').innerHTML = 'Cou002';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230431222222045';
    document.getElementById('num2').innerHTML = '2';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-01-24';
    document.getElementById('cou3').innerHTML = 'Cou003';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230502111314778';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '0';
}
function c10(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [30,10,10,60];
    myBarChart.data.datasets[1].data = [90,50,20,10];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-02-08';
    document.getElementById('cou1').innerHTML = 'Cou004';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230502111314778';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-02-16';
    document.getElementById('cou2').innerHTML = 'Cou005';
    document.getElementById('gif2').innerHTML = '銷售';
    document.getElementById('cou6').innerHTML = 'c20210302121314000';
    document.getElementById('num2').innerHTML = '2';
    document.getElementById('maney2').innerHTML = '200';

    document.getElementById('day5').innerHTML = '2023-02-23';
    document.getElementById('cou3').innerHTML = 'Cou006';
    document.getElementById('gif3').innerHTML = '銷售';
    document.getElementById('cou7').innerHTML = 'c20230431222222045';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '100';
}
function c11(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [10,80,60,10];
    myBarChart.data.datasets[1].data = [60,20,20,40];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-03-01';
    document.getElementById('cou1').innerHTML = 'Cou007';
    document.getElementById('gif1').innerHTML = '贈予';
    document.getElementById('cus5').innerHTML = 'c20230601091315340';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '0';

    document.getElementById('day4').innerHTML = '2023-03-19';
    document.getElementById('cou2').innerHTML = 'Cou008';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230431222222045';
    document.getElementById('num2').innerHTML = '1';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-03-31';
    document.getElementById('cou3').innerHTML = 'Cou009';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230502111314778';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '0';
}
function c12(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [60,40,90,30];
    myBarChart.data.datasets[1].data = [30,50,30,10];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-04-10';
    document.getElementById('cou1').innerHTML = 'Cou010';
    document.getElementById('gif1').innerHTML = '贈予';
    document.getElementById('cus5').innerHTML = 'c20210302121314000';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '0';

    document.getElementById('day4').innerHTML = '2023-04-13';
    document.getElementById('cou2').innerHTML = 'Cou011';
    document.getElementById('gif2').innerHTML = '銷售';
    document.getElementById('cou6').innerHTML = 'c20230502111314778';
    document.getElementById('num2').innerHTML = '3';
    document.getElementById('maney2').innerHTML = '300';

    document.getElementById('day5').innerHTML = '2023-04-28';
    document.getElementById('cou3').innerHTML = 'Cou012';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230605142259011';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '0';
}
function c13(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [50,90,20,10];
    myBarChart.data.datasets[1].data = [20,50,30,20];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-05-20';
    document.getElementById('cou1').innerHTML = 'Cou013';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230605142259011';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-05-23';
    document.getElementById('cou2').innerHTML = 'Cou014';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20210302121314000';
    document.getElementById('num2').innerHTML = '1';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-05-30';
    document.getElementById('cou3').innerHTML = 'Cou015';
    document.getElementById('gif3').innerHTML = '銷售';
    document.getElementById('cou7').innerHTML = 'c20230502111314778';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '100';
}
function c14(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [20,30,20,10];
    myBarChart.data.datasets[1].data = [90,50,20,30];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-06-04';
    document.getElementById('cou1').innerHTML = 'Cou016';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230612082345789';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-06-15';
    document.getElementById('cou2').innerHTML = 'Cou017';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230502111314778';
    document.getElementById('num2').innerHTML = '3';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-06-17';
    document.getElementById('cou3').innerHTML = 'Cou018';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230605142259011';
    document.getElementById('num3').innerHTML = '2';
    document.getElementById('maney3').innerHTML = '0';
}
function c15(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [20,30,40,30];
    myBarChart.data.datasets[1].data = [60,30,30,60];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-07-02';
    document.getElementById('cou1').innerHTML = 'Cou019';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230431222222045';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-07-09';
    document.getElementById('cou2').innerHTML = 'Cou020';
    document.getElementById('gif2').innerHTML = '銷售';
    document.getElementById('cou6').innerHTML = 'c20230605142259011';
    document.getElementById('num2').innerHTML = '4';
    document.getElementById('maney2').innerHTML = '400';

    document.getElementById('day5').innerHTML = '2023-07-10';
    document.getElementById('cou3').innerHTML = 'Cou021';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230612082345789';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '0';
}
function c16(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [60,50,20,10];
    myBarChart.data.datasets[1].data = [30,50,60,10];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-08-08';
    document.getElementById('cou1').innerHTML = 'Cou022';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230612082345789';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-08-08';
    document.getElementById('cou2').innerHTML = 'Cou023';
    document.getElementById('gif2').innerHTML = '銷售';
    document.getElementById('cou6').innerHTML = 'c20210302121314000';
    document.getElementById('num2').innerHTML = '1';
    document.getElementById('maney2').innerHTML = '100';

    document.getElementById('day5').innerHTML = '2023-08-30';
    document.getElementById('cou3').innerHTML = 'Cou024';
    document.getElementById('gif3').innerHTML = '銷售';
    document.getElementById('cou7').innerHTML = 'c20230431222222045';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '100';
}
function c17(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [20,50,60,10];
    myBarChart.data.datasets[1].data = [30,50,40,20];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-09-08';
    document.getElementById('cou1').innerHTML = 'Cou025';
    document.getElementById('gif1').innerHTML = '贈予';
    document.getElementById('cus5').innerHTML = 'c20230612082345789';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '0';

    document.getElementById('day4').innerHTML = '2023-09-09';
    document.getElementById('cou2').innerHTML = 'Cou026';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230605142259011';
    document.getElementById('num2').innerHTML = '1';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-09-19';
    document.getElementById('cou3').innerHTML = 'Cou027';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20210302121314000';
    document.getElementById('num3').innerHTML = '4';
    document.getElementById('maney3').innerHTML = '0';
}
function c18(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [30,50,20,20];
    myBarChart.data.datasets[1].data = [10,40,60,80];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-10-07';
    document.getElementById('cou1').innerHTML = 'Cou028';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230502111314778';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-10-30';
    document.getElementById('cou2').innerHTML = 'Cou029';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230612082345789';
    document.getElementById('num2').innerHTML = '2';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-10-30';
    document.getElementById('cou3').innerHTML = 'Cou030';
    document.getElementById('gif3').innerHTML = '銷售';
    document.getElementById('cou7').innerHTML = 'c20230601091315340';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '100';
}
function c19(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [90,60,50,10];
    myBarChart.data.datasets[1].data = [60,80,20,30];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-11-20';
    document.getElementById('cou1').innerHTML = 'Cou031';
    document.getElementById('gif1').innerHTML = '贈予';
    document.getElementById('cus5').innerHTML = 'c20230605142259011';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-11-24';
    document.getElementById('cou2').innerHTML = 'Cou032';
    document.getElementById('gif2').innerHTML = '贈予';
    document.getElementById('cou6').innerHTML = 'c20230601091315340';
    document.getElementById('num2').innerHTML = '2';
    document.getElementById('maney2').innerHTML = '0';

    document.getElementById('day5').innerHTML = '2023-11-27';
    document.getElementById('cou3').innerHTML = 'Cou033';
    document.getElementById('gif3').innerHTML = '銷售';
    document.getElementById('cou7').innerHTML = 'c20210302121314000';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '100';
}
function c20(){
    var canvas2 = $('#myChart2');
    var myBarChart = Chart.getChart(canvas2[0]);
    myBarChart.data.datasets[0].data = [50,30,10,40];
    myBarChart.data.datasets[1].data = [10,20,30,20];
    myBarChart.update();
    document.getElementById('day3').innerHTML = '2023-12-04';
    document.getElementById('cou1').innerHTML = 'Cou034';
    document.getElementById('gif1').innerHTML = '銷售';
    document.getElementById('cus5').innerHTML = 'c20230431222222045';
    document.getElementById('num1').innerHTML = '1';
    document.getElementById('maney1').innerHTML = '100';

    document.getElementById('day4').innerHTML = '2023-12-24';
    document.getElementById('cou2').innerHTML = 'Cou035';
    document.getElementById('gif2').innerHTML = '銷售';
    document.getElementById('cou6').innerHTML = 'c20230605142259011';
    document.getElementById('num2').innerHTML = '1';
    document.getElementById('maney2').innerHTML = '100';

    document.getElementById('day5').innerHTML = '2023-12-30';
    document.getElementById('cou3').innerHTML = 'Cou036';
    document.getElementById('gif3').innerHTML = '贈予';
    document.getElementById('cou7').innerHTML = 'c20230601091315340';
    document.getElementById('num3').innerHTML = '1';
    document.getElementById('maney3').innerHTML = '0';
}