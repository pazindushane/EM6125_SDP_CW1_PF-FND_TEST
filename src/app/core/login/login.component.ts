import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {ApprovalDialogComponent} from "../dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../dialogs/approval-dialog/model/ApprovalDialogConfig";
import {InputDialogComponent} from "../dialogs/input-dialog/input-dialog.component";
import {InputDialogConfig} from "../dialogs/input-dialog/model/InputDialogConfig";
import {MatDialog} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  farmerForm!: FormGroup;
  LoginForm!:FormGroup;

  constructor(private router: Router,
              private _snackBar: MatSnackBar,
              private loginservice:LoginService,
              public dialog: MatDialog,
              private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.farmerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
    // this.LoginForm = new FormGroup({
    //   farmer_name: new FormControl('', [
    //     Validators.required
    //   ]),
    //   farmer_contact: new FormControl('', [
    //     Validators.required
    //   ]),
    //   status: new FormControl('', [
    //     Validators.required
    //   ]),
    //   farmer_password: new FormControl('', [
    //     Validators.required
    //   ]),
    // })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this._snackBar.open('Wrong Credentials', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar','login-snackbar']
    });
  }

  signIn() {
    // if (this.farmerForm.valid){
      this.loginservice.getLoggedIn(this.farmerForm.get('email')?.value,this.farmerForm.get('password')?.value)
        .subscribe((res:any) => {
          console.log(res.data.token)
          if (res.code == '201') {
            this.cookieService.put('token',JSON.stringify(res.data.token));
            this.cookieService.put('User', JSON.stringify(res.data.username));
            this.router.navigate(['/dashboard']);
          }},error => {
          console.log(error)
        });
    // }else {

      // console.log('Error Please Insert All Values Correctly')
      // this.dialog.open(DialogsComponent, {
      //   width: '350px',
      //   // height: '200px',
      //   data: new ApprovalDialogConfig('Error', 'Error!', 'Please Insert All Values Correctly')
      // });
      // else{
      //   this.dialog.open(DialogsComponent, {
      //     width: '350px',
      //     // height: '200px',
      //     data: new ApprovalDialogConfig('Error', 'Error!', 'Please Insert All Values Correctly')
      //   });
      // }
    // }
  }

  addUser(){
    this.approveDialogError()
    // this.farmerservice.AddnewUser(new FarmerDTO(
    //   this.LoginForm.get('farmer_contact')?.value,
    //   "",
    //   this.LoginForm.get('farmer_name')?.value,
    //   this.LoginForm.get('farmer_password')?.value,
    //   "",
    //   this.LoginForm.get('status')?.value
    // )).subscribe(res=>{
    //   console.log(res)
    //   if (res.code == '201'){
    //     this.openSnackBars()
    //   }else{
    //     this.openFailureSnackBar()
    //   }
    // })
  }

  approveDialogError(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Alert', 'Warning!', 'All fields need to be filled')
    });
  }

  approveDialogError4(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Fine', 'Successfull!', 'Successfull')
    });
  }

  approveDialogError3(){
    this.dialog.open(InputDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new InputDialogConfig('Add', 'Successfull!', 'fieldTxtOne','fieldTxtTwo','inputDataOne','inputDataTwo')
    });
  }

  openSnackBars(){
    this._snackBar.open('User Added Successful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  openFailureSnackBar(){
    this._snackBar.open('User Added Unsuccessful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

}
