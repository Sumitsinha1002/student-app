import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../shared/student-month.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  data = [
    {
        "month": "Jan",
        "price": "180"
    },
    {
      "month": "Feb",
      "price": "200"
    },
    {
      "month": "March",
      "price": "210"
    },
    {
      "month": "April",
      "price": "190"
    },
    {
      "month": "May",
      "price": "240"
    },
    {
      "month": "June",
      "price": "230"
    },
    {
      "month": "July",
      "price": "260"
    },
    {
      "month": "Aug",
      "price": "210"
    },
    {
      "month": "Sept",
      "price": "300"
    },
    {
      "month": "Oct",
      "price": "150"
    },
    {
      "month": "Nov",
      "price": "400"
    },
    {
      "month": "Dec",
      "price": "100"
    }];
  url = './../app/shared/studentsMonth.json';
  month = [];
  price = [];
  chart = [];
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    //console.log(this.url);
      this.data.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      
      let htmlRef = this.canvas.nativeElement;
      console.log(this.canvas.nativeElement);
      console.log(htmlRef);
      this.chart = new Chart(htmlRef, {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3cba9f',
              fill: "start"
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
              }
          }],
            yAxes: [{
              gridLines : {
                  display : false,
                  color: 'rgba(88,86,86)'
              }
          }]
          },
          chartArea: {
            backgroundColor: '#abe4d8'
          }
        }
      });
  }
  }
