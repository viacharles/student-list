import { StudentService } from './../../services/student.service';
import { EPage } from 'src/app/utilities/enums/page.enum';
import { Admin, Class, Student } from './../../models/student.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EAdminAuth } from 'src/app/utilities/enums/admin.enums';
import { PopupBox } from 'src/app/utilities/abstract/popup-box.abstract';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends PopupBox implements OnInit {

  @Output() emit = new EventEmitter<Student>();
  @Output() emitAdmin = new EventEmitter<Admin>();

  constructor(
    public $student: StudentService,
  ) { 
    super();
  }


  ngOnInit(): void {
  }
  public ClassList: boolean = false;
  public ClassTitle: boolean = false;

  public setStudentPage(student: Student) {
    this.emit.emit(student);
      this.$student.page = EPage.StudentPage;
  }
  public setCurrentList(classroom: Class) {
    this.$student.currentClass = classroom;
    this.ClassTitle = true;
    this.ClassList = false;
  }

  public isAdminPage(admin: Admin) {
    this.emitAdmin.emit(admin);
    this.$student.page = EPage.AdminPage;
  }

  public isStudentList() {
    return this.$student.currentClass?.students.length;
  }
}
