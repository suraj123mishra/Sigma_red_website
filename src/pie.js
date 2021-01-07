import React from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
      series: [{
        name: 'value',
        data: [300, 250, 400, 450, 500, 550, 600]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        colors:["#6495ED"],
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        grid: {
          
          row: {
            colors: ['#222'], // takes an array which will be repeated on columns
            opacity: 0.7
          },
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7'
            
          ],
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val ;
            }
          }
        
        },
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" max-height={600} />
</div>


    );
  }
}

  export default ApexChart;