import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  model: any = {};
  schools: any = [{name:"School1",id:1}, {name:"School2",id:2}, {name:"School3",id:3}];
  constructor(/* private studentService : StudentService */){
    this.model.schoolId = this.schools[0].id;
    this.model.personalDetails = {};
    this.model.personalDetails.adress = {};
  }
  ngOnInit(){}
  onSubmit() {
      /* this.studentService.addStudent(this.model).subscribe(
          article => {
            console.log(article);
          }
      ); */
  }

}
