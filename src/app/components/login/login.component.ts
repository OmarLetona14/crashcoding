import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passwordType:string = 'password'
  private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  validField(fieldName:string):string{
    const validatedField = this.loginForm.get(fieldName);
    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  isValidData():String{
    if (this.loginForm.valid){
      return 'btn-success';
    }
    else{
      return 'btn-danger';
    }
  }

  showPassword(){
    if (this.passwordType == 'text') {
        this.passwordType = 'password';
    }else{
      this.passwordType = 'text'
    }
  }
  
  private initForm():void{
    this.loginForm = this.fb.group({
      // Estructura [valor inicial, validaciones  ]
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
