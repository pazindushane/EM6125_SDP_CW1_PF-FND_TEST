import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InputDialogConfig} from "./model/InputDialogConfig";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<InputDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: InputDialogConfig) {
    this.dialogType =  data.dialogType;
    this.title = data.title;
    this.fieldTxtOne = data.fieldTxtOne;
    this.fieldTxtTwo = data.fieldTxtTwo;
    this.inputDataOne = this.data.inputDataOne;
    this.inputDataTwo = this.data.inputDataTwo;
  }
  headerStyle = 'bg-skin-ternary';
  dialogType = '';
  title = '';

  fieldTxtOne!: string;
  fieldTxtTwo!: string | null;

  inputDataOne: string | null ;
  inputDataTwo !: string | null;

  btnAccept = 'Add';
  btnUnaccepted = 'Cancel';
  fieldTxtTwoType = 'text';
  fieldTxtOneType = 'text';

  ngOnInit(): void {
    if (this.dialogType === 'Add'){
    }else if (this.dialogType === 'Update'){
      this.headerStyle = 'bg-blue-200';
      this.btnAccept = 'Update';
    }else if (this.dialogType === 'Price'){
      this.headerStyle = 'temporary-price';
      this.btnAccept = 'Change';
      this.fieldTxtOneType = 'number';
    }
  }

  onDismiss(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close({dataOne :  this.inputDataOne, dataTwo : this.inputDataTwo});
  }

}
