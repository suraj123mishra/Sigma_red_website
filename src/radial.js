import React from 'react';
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'graph1',
        data: [20, 35, 30, 50, 40, 80, 100 , 90]
      }, {
        name: 'graph2',
        data: [15, 40, 45, 35, 30, 50, 40 , 35]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        colors:["#ff6178" , "#25e6a5" ],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          
          categories: ["1", "2", "3", "4", "5", "6", "7" ,"8"]
        },
        grid: {
          
          row: {
            colors: ['#222'], 
            opacity: 0.7
          },
        },
        tooltip: {
          
        },
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" max-height={600} />
</div>


    );
  }
}

  export default ApexChart;