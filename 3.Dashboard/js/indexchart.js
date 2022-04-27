var barChartData = {
    labels: ['Jan-2020', 'Feb-2020', 'March-2020', 'Apr-2020', 'May-2020', 'Jun-2020', 'Jul-2020', 'Aug-2020',
        'Sep-2020', 'Oct-2020', 'Nov-2020', 'Dec-2020'
    ],

    datasets: [{
            label: 'Individual Payment',
            backgroundColor: '#eb9502',
            borderColor: '#fff',
            borderWidth: 3,
            stack: 'Stack 0',
            data: [
                10000,
                19000,
                9000,
                15000,
                19000,
                8000,
                19000,
                13000,
                19000,
                8000,
                19000,
                13000
            ],
            maxBarThickness: 35,
        }, {
            label: 'Bulk Supplier Payment',
            backgroundColor: '#d90142',
            borderColor: '#fff',
            borderWidth: 3,
            stack: 'Stack 0',
            data: [
                20000,
                25000,
                19000,
                25000,
                29000,
                23000,
                25000,
                20000,
                25000,
                23000,
                25000,
                20000
            ],
            maxBarThickness: 35,
        }, {
            label: 'Bulk Payroll Payment',
            backgroundColor: '#7347f2',
            borderColor: '#fff',
            borderWidth: 3,
            stack: 'Stack 0',
            data: [
                45000,
                50000,
                45000,
                55000,
                49000,
                52000,
                57000,
                41000,
                49000,
                45000,
                52000,
                57000,
                41000
            ],
            maxBarThickness: 35,
        },

    ],


};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            maintainAspectRatio:false,
            legend: {
                display: true,
                position: 'bottom',
                labels: {

                    usePointStyle: true,
                    fontSize:12,
                
                }
            },
            tooltips: {
                enabled: true,

            },
        
        
        
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true,

                }]
            }
        }
    });
};

// dash2 

var data = [{
    data: [30, 20, 25, 15, 10],
    backgroundColor: ['#f9bb0e', '#05b8e3', '#ed1b24', '#ee6c20', '#3a7eed'],
    borderColor: [
        '#f9bb0e', '#05b8e3', '#ed1b24', '#ee6c20', '#3a7eed'
    ]


}];


var options = {
    maintainAspectRatio: false,
    respnsive: true,
    tooltips: {
        enabled: true
    },

  
    plugins: {
        datalabels: {

            formatter: (value, ctx) => {
                let sum = ctx.dataset._meta[0].total;
                var label = ctx.chart.data.labels[ctx.dataIndex];
                let percentage = (value * 100 / sum).toFixed(0) + "%";
                return percentage;


            },


            color: '#fff',
        },


    },



    legend: {
        position: 'bottom',
        display: true,
        labels: {
            usePointStyle: true,
            fontSize: 12,

            fontColor: 'black',
            padding: 20,



        }
    },



};

var ctx = document.getElementById("operator-base").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['MPT', 'Telenor', 'Ooredoo', 'Mytel', 'Mec Tel'],
        datasets: data
    },
    options: options
});

//4

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ['Jan-2020', 'Feb-2020', 'March-2020', 'Apr-2020', 'May-2020', 'Jun-2020', 'Jul-2020',
        'Aug-2020',
        'Sep-2020', 'Oct-2020', 'Nov-2020', 'Dec-2020'
    ],
    datasets: [{
            label: "Bulk Payroll Payment",
            backgroundColor: '#936ff7',
            borderColor: '#936ff7',
            data: ['60000', '70000', '65000', '60000', '75000', '80000', '70000', '50000', '55000',
                '60000', '80000', '90000'
            ],
            fill: false,
            tension: 0.5
        },
        {
            label: 'Bulk Supplier Payment',
            backgroundColor: '#ff3535',
            borderColor: '#ff3535',
            data: ['50000', '45000', '40000', '55000', '44000', '53000', '60000', '40000', '35000',
                '50000', '30000', '30000'
            ],
            fill: false,
            tension: 0.5
        },
        {
            label: 'Individual Payment',
            backgroundColor: '#eba92e',
            borderColor: '#eba92e',
            data: ['30000', '20000', '10000', '25000', '30000', '20000', '25000', '30000', '10000',
                '20000', '15000', '30000'
            ],
            fill: false,
            tension: 0.5
        },

    ]
};

var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {

        plugins: {
            datalabels: {
               // hide datalabels for all datasets
               display: false
            }
          },
          
        maintainAspectRatio: false,

        legend: {
            display: true,
            position: 'bottom',
            labels: {

                usePointStyle: true,
                fontSize: 16,

            }
        },
        barValueSpacing: 20,
        scales: {

            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        },
        title: {
            display: true,
            text: 'Amount',
            align: 'left'

        },

    },

});