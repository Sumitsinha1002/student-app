import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  model: any = {};
  schools: any = [{name:"School1",id:1}, {name:"School2",id:2}, {name:"School3",id:3}];
  constructor(){
    this.model.schoolId = this.schools[0].id;
    this.model.personalDetails = {};
    this.model.personalDetails.adress = {};
  }

  onSubmit() {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    console.log(this.model);
  }
}