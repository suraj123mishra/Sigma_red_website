import React from 'react';
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'value',
          data: [6.8, 4.5, 3.4, 7.5, 7.1, 6.4, 10, 6.5, 3.5, 2.8, 2.5, 4.2]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          colors: '#6495ED',
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '10px',
              colors: ["white"]
            }
          },
          
          xaxis: {
            
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#2980B9',
                  colorTo: '#2980B9',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
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
                return val + "%";
              }
            }
          
          },
          grid: {
           
            row: {
              colors: ['#222'], // takes an array which will be repeated on columns
              opacity: 0.7
            },
          },
          title: {
            
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
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