import React from 'react';
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Unit 1',
          type: 'column',
          data: [ 15, 35, 45, 10, 25, 30, 25, 40, 35, 40]
        }, {
          name: 'Unit 2',
          type: 'area',
          data: [ 10, 40, 60, 25, 40, 30, 40, 55, 30, 50]
        }, {
          name: 'Unit 3',
          type: 'line',
          data: [ 35, 45, 50, 75, 25, 40, 20, 50, 30, 50]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false,
          },
          colors: ['#ff6178' , '#2E86C1' , '#febc3b'],
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },
          
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.95,
              opacityTo: 0.65,
              stops: [0, 100, 100, 100]
            }
          },
          labels: ['1', '2', '3', '4', '5', '6', '7',
            '8', '9', '10'
          ],
          markers: {
            size: 0
          },
          grid: {
           
            row: {
              colors: ['#222'], // takes an array which will be repeated on columns
              opacity: 0.7
            },
          },
          
          yaxis: {
            
          },
          tooltip: {
            shared: true,
            intersect: false,
            
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" max-height={600}  />
</div>


      );
    }
  }
  export default ApexChart;