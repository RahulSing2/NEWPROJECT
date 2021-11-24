import { Component } from '@angular/core';
import { mergeScan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewProject';
  IsDisable=false;
  fullname:string="Rahul kumar kataria"
Age:number=30
studentName=["abc","bcd","cde","def"]
handleSubmitBtn(){
  this.fullname="Self project"
  this.Age=32
}
  Username:string=""
  Password:string=""
msg:string=""
checkLogin()
{
if(this.Username=="Admin" &&  this.Password=="Admin123")
{
this.msg="Login is Success";
document.write(this.msg);
}
else
{
this.msg="Login is Faild!"
document.write(this.msg);
}
}

}
