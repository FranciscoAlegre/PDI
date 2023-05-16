import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

signUpuser: any[]=[];
signUpobj:any={

  userName:'',
  email:'',
  password:''
}
loginobj:any={

  email:'',
  password:''
}
constructor(private router: Router) { }

  ngOnInit(){
    const localData=localStorage.getItem('signUpuser');
    if(localData!=null){
      this.signUpuser=JSON.parse(localData);
    }
  }


onSignUp(){

this.signUpuser.push(this.signUpobj);
localStorage.setItem('signUpuser',JSON.stringify(this.signUpuser))
this.signUpobj={

  userName:'',
  email:'',
  password:''
}
}

onLogin(){

const isUserRegisted=this.signUpuser.find(m=> m.email == this.loginobj.email && m.password==this.loginobj.password);
if(isUserRegisted != undefined){
  alert('Login Successfull');
  this.router.navigate(['/homepage']);
  } else {
    alert('Invalid Login Credentials');
  } 
}
}

