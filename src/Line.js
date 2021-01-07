import React from 'react';
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Graph1",
            data: [50, 55, 40, 25, 30, 25, 20, 25, 10, 15, 20, 15]
          },
          {
            name: "Graph2",
            data: [45, 40, 65, 50, 20, 25, 35, 30, 40, 45, 50, 55]
          },
          {
            name: 'Graph3',
            data: [70, 50, 65, 100, 80, 45, 60, 55, 70, 50, 45, 50]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            
            
          },
          colors: ['#8b75d7' , '#febc3b' ,'#26e7a6'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [6, 0, 5]
          },
          
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val 
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val 
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          grid: {
            
            row: {
              colors: ['#222'], // takes an array which will be repeated on columns
              opacity: 0.7
            },
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart" >
<ReactApexChart options={this.state.options} series={this.state.series} type="line" max-height={600} />
</div>
      );
    }
  }

  export default ApexChart;