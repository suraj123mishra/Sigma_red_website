import React from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'unit 1',
        data: [50, 56, 60, 35, 55, 40, 40, 50, 55 , 40]
      }, {
        name: 'unit 2',
        data: [70, 84, 90, 80, 95, 60, 90, 100, 90 ,60]
      }, {
        name: 'unit 3',
        data: [36, 39, 50, 50, 65, 55, 60, 50, 45 ,50]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        colors: ['#26a0fc' , '#26e7a6' , '#ff6178'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
        
        },
        yaxis: {
          
        },
        grid: {
         
          row: {
            colors: ['#222'], // takes an array which will be repeated on columns
            opacity: 0.7
          },
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val 
            }
          }
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" max-height={600}  />
</div>


    );
  }
}

  export default ApexChart;