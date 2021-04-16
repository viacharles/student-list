import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-example',
  templateUrl: './reactive-forms-example.component.html',
  styleUrls: ['./reactive-forms-example.component.scss'],
})
export class ReactiveFormsExampleComponent implements OnInit {
  constructor(
    private fb:FormBuilder,
    ) {}
public form: FormGroup = this.fb.group({
  email: ['', [Validators.required, this.emailValidator ]],
  password: ['', [Validators.required, this.passwordValidator ]],
});

  ngOnInit(): void {

  }


  public submit () {
    console.log(this.form.getRawValue())
  }

  public getErrorMsg(field: string):string {
    const Field = this.form.get(field);
    return Field?.hasError('required')? '這是必填欄位' : Field?.getError('invalid').message;
  }



private emailValidator(field: FormControl):ValidationErrors {
  console.log(field);
    return field.value.includes('mail')
    ? {}
    : {
        invalid: {
          message: '信箱格式錯誤',
        },
      };
  }
  private passwordValidator(field: FormControl):ValidationErrors {
    return field.value.length < 8
    ? {}
    : {
      invalid: {
        message: '須超過8個字' ,
      },
    };
  }




//   public submit() {
//     console.log(this.form.getRawValue())
//   }


  // public getErrorMsg(field: string): string {
  //   const Field:any = this.form.get(field);
  //   return Field.hasError('required') ? '此欄位必填' : Field.getError('invalid').message
  // }

//   private emailVerifier(field: FormControl): ValidationErrors {
//     return field.value.includes('gmail')
//       ? {}
//       : {
//           invalid: {
//             message: '信箱格式錯誤',
//           },
//         };
//   }
//   private passwordVerifier(field: FormControl): ValidationErrors {
// return field.value.length>8 ? {} : {
//   invalid: {
//     message: '至少8個數字',
//   }
// }
  }






