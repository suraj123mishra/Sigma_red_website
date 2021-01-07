import React from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'graph1',
          data: [40, 50, 30, 35, 25, 25 , 20]
        }, {
          name: 'graph2',
          data: [10, 30, 20, 10, 20, 30 , 30]
        }, {
          name: 'graph3',
          data: [15, 10, 20, 25, 25, 15 , 20]
        }, {
          name: 'graph4',
          data: [20, 15, 25, 10, 30, 10, 15]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          colors:["#6495ED" , "#26e7a6" , "#ff6178" , "#febc3b"],
          responsive: [{
            breakpoint: 480,
            options: {
            //   legend: {
            //     position: 'bottom',
            //     offsetX: 0,
            //     offsetY: 0
            //   }
            }
          }],
          grid: {
            row: {
              colors: ['#222'], 
              opacity: 0.7
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
           
            categories: ['1', '2', '3', '4',
              '5', '6'
            ],
          },
          
          fill: {
            opacity: 1
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" max-height={600} />
</div>


      );
    }
  }

  export default ApexChart;