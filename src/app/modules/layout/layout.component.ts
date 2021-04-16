import { StudentService } from './../shared/services/student.service';
import { Admin, Student } from './../shared/models/student.model';
import { EPage } from 'src/app/utilities/enums/page.enum';
import { Component, OnInit } from '@angular/core';
import { EAdminAuth } from 'src/app/utilities/enums/admin.enums';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public $student: StudentService,
  ) { }


  get EPage(): typeof EPage {
    return EPage;
  }

  public student: Student = new Student('', 0);
  public admin:Admin = new Admin('', EAdminAuth.General);

  ngOnInit(): void {
  }

 

}
