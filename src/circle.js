import React from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: "graph1",
          data: [30, 35, 45, 30, 35, 30, 25 ,30 ,35 ,40 ]
        },
        {
          name: "graph2",
          data: [15, 10, 35, 35, 30, 25, 30 , 25 , 20 , 15]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#ff6178', '#febc3b'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        
        grid: {
          
          row: {
            colors: ['#222'], // takes an array which will be repeated on columns
            opacity: 0.7
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7' , '8' , '9' , '10'],
          
        },
        yaxis: {
          
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
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