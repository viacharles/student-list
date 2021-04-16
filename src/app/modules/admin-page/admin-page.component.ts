import { StudentService } from './../shared/services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { Admin, Class, Student } from '../shared/models/student.model';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

@Input() student:Student|undefined;
@Input() admin:Admin|undefined;

  constructor(
    public $student: StudentService,
  ) { }
  public name: string = '';
  public score: number = 0;
  public id:number|undefined;
  public nameWarn: string = '';
  public scoreWarn: boolean|undefined;


  ngOnInit(): void {
  }

  public validName() {
    this.nameWarn = this.name.length === 0? '此欄位為必填':'';
  }

  public addCurrentStudent( name:string, score:number){
    this.$student.currentClass?.admins[0].addStudent(this.$student.currentClass.students, new Student(name, score))
  }

}



