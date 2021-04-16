import { StudentService } from './../shared/services/student.service';
import { Admin, Student } from './../shared/models/student.model';
import { Component, Input, OnInit } from '@angular/core';
import { EAdminAuth } from 'src/app/utilities/enums/admin.enums';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor(
  ) { }

  @Input() student: Student = new Student('', 0);
  @Input() admin: Admin = new Admin('', EAdminAuth.General);

  ngOnInit(): void {
  }

  get EAdminAuth(): typeof EAdminAuth {
    return EAdminAuth;
  }

}
