import { Component, AfterViewInit,ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  data = [{x:1, marks:80}, {x:2, marks:75},{x:3, marks:83}, {x:4, marks:90},{x:5, marks:60}, {x:6, marks:70}
    ,{x:7, marks:30}, {x:8, marks:50},{x:9, marks:40}, {x:10, marks:93}];
  dataClass = [{x:"Maths", marks:80}, {x:"Physics", marks:75},{x:"Chemistry", marks:83}, {x:"English", marks:90},{x:"GK", marks:60}, {x:"CS", marks:70}
      ,{x:"Hindi", marks:40}];
    year = [];
    marks = [];
    generateChart;
    subjectWise:boolean = false;
    //chart = [];
    chart;
  constructor() { }

  ngAfterViewInit() {
    var that = this;
    console.log(this);
    this.generateChart = function(data){
      console.log(this);
      console.log(that);
      that.year = [];
      that.marks = [];
    data.forEach(y => {
      that.year.push(y.x);
      that.marks.push(y.marks);
    });
    let htmlRef = that.canvas.nativeElement;
      console.log(that.canvas.nativeElement);
      console.log(htmlRef);
      that.chart = new Chart(htmlRef, {
        type: 'bar',
        data: {
          labels: that.year,
          datasets: [
            {
              data: that.marks,
              borderColor: '#3cba9f',
              label:'Marks',
              backgroundColor: "#798bb7",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines : {
                  display : false,
                  color: 'rgba(88,86,86)'
              },
              barPercentage: 0.4
          }],
            yAxes: [{
              ticks: {
                beginAtZero: true,  // minimum value will be 0.
                steps: 15,
            },
              gridLines : {
                  display : false,
                  color: 'rgba(88,86,86)'
              }
          }]
          },
          onClick: function(c,i) {
            var e = i[0];
            console.log(e._index)
            var x_value = this.data.labels[e._index];
            var y_value = this.data.datasets[0].data[e._index];
            that.chart.destroy();
            that.generateChart(that.dataClass);
            that.subjectWise = true;
        }
        }
      });
  }
  this.generateChart(this.data);
}
backToClassWise() {
  this.subjectWise = false;
  this.chart.destroy();
  this.generateChart(this.data);
}
}
