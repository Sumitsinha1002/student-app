import {HttpClient} from '@angular/common/http';
import { Student } from '../../models/student.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class StudentService {
    url: string;
    constructor(private http: HttpClient){
      this.url = '/student';
    }
    addStudent (student: Student): Observable<Student> {
        return this.http.post<Student>(this.url, student)
        
          
      }
}