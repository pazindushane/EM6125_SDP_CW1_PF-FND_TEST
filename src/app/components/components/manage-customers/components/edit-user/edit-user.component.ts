import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../../../../core/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../../core/dialogs/approval-dialog/model/ApprovalDialogConfig";
import {InputDialogComponent} from "../../../../../core/dialogs/input-dialog/input-dialog.component";
import {InputDialogConfig} from "../../../../../core/dialogs/input-dialog/model/InputDialogConfig";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              // private itemService: ItemService,
              public dialog: MatDialog,
              // private toastrService: ToastrService,
              // private brandService: BrandService,
              // private categoryService: CategoryService,
              // private itemQuantityTypeService: UnitTypeService,
              private dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  statusForm: FormControl = new FormControl();
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];


  itemDetailsForm!: FormGroup;
  apiResponse!: boolean;
  ngOnInit(): void {
    this.itemDetailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required],
      phoneNo: ['', Validators.required],
      idPhoto: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.itemDetailsForm.setValue({
      username: this.data.username,
      password: this.data.password,
      status: this.data.status,
      phoneNo: this.data.phoneNo,
      idPhoto: this.data.idPhoto,
      email: this.data.email,
      name: this.data.name
    });

    this.statusForm.setValue({
      // tid: this.data.tid,
      // vehicleRegNo: this.data.vehicleRegNo,
      status: this.data.status,
      // tokenExpDate: this.data.tokenExpDate,
      // requestQuota: this.data.requestQuota,
      // fillingTimeAndDate: this.data.fillingTimeAndDate,
      // username: this.data.usernameFk?.username,
    });
  }

  moreResultsList(type: 'Brand' | 'Category' | 'QuantityType', input: HTMLInputElement): void {

  }

  approveDialogSuccess(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Confirm', 'Warning!', 'Fill All Required Fields')
    });
  }

  approveDialogError(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Alert', 'Warning!', 'Invalid Value')
    });
  }

  approveDialogError4(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Fine', 'Successfull!', 'Stock Successfully Added To Main')
    });
  }


  addItem(form: HTMLFormElement): void {
    this.approveDialogSuccess()

  }
  btnCancel(): void {
    this.dialogRef.close();
  }


}
