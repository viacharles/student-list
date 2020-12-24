import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student.model';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public $student:StudentService,
  ) { }

public name:string = '';
public score:number = 0;

  ngOnInit(): void {
  }

  

}
