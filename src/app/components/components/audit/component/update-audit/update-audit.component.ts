import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ApprovalDialogComponent} from "../../../../../core/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../../core/dialogs/approval-dialog/model/ApprovalDialogConfig";
import {InputDialogComponent} from "../../../../../core/dialogs/input-dialog/input-dialog.component";
import {InputDialogConfig} from "../../../../../core/dialogs/input-dialog/model/InputDialogConfig";

@Component({
  selector: 'app-update-audit',
  templateUrl: './update-audit.component.html',
  styleUrls: ['./update-audit.component.scss']
})
export class UpdateAuditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,

              public dialog: MatDialog,
              // private toastrService: ToastrService,
              // private brandService: BrandService,
              // private categoryService: CategoryService,
              // private itemQuantityTypeService: UnitTypeService,
              private dialogRef: MatDialogRef<UpdateAuditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  statusForm: FormControl = new FormControl();
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  // searchBrand = new Subject();
  // brands!: BrandDTO[];
  // moreBrands!: boolean;
  // selectedBrand: BrandDTO|undefined;

  // category: FormControl = new FormControl();
  // searchCategory = new Subject();
  // categories!: CategoryDTO[];
  // moreCategories!: boolean;
  // selectedCategory!: CategoryDTO|undefined;

  // unitType: FormControl = new FormControl();
  // searchUnitType = new Subject();
  // unitTypes!: UnitTypeDTO[];
  // moreUnitTypes!: boolean;
  // selectedUnitType!: UnitTypeDTO|undefined;

  itemDetailsForm!: FormGroup;
  apiResponse!: boolean;
  ngOnInit(): void {
    this.itemDetailsForm = this.formBuilder.group({
      tid: ['', Validators.required],
      vehicleRegNo: ['', Validators.required],
      tokenExpDate: ['', Validators.required],
      requestQuota: ['', Validators.required],
      fillingTimeAndDate: ['', Validators.required],
      username: ['', Validators.required],
    });

    this.itemDetailsForm.setValue({
      tid: this.data.tid,
      vehicleRegNo: this.data.vehicleRegNo,
      // status: this.data.status,
      tokenExpDate: this.data.tokenExpDate,
      requestQuota: this.data.requestQuota,
      fillingTimeAndDate: this.data.fillingTimeAndDate,
      username: this.data.usernameFk?.username,
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
  private getBrands(): void {
    // this.brandService.getAllBrands('0', '5', this.brand.value, 'ALL',
    //   'ACTIVATED')
    //   .subscribe(result => {
    //     // this.paginator.length = result.data.dataCount;
    //     // this.dataSource = result.data.list;
    //     this.moreBrands = result.data.dataCount > 5;
    //     this.brands = result.data.list as BrandDTO[];
    //     console.log(result);
    //   }, error => {
    //     console.log(error);
    //   });
  }
  private getCategories(): void{
    // this.categoryService.getAllCategories('0', '5', this.category.value, 'ALL',
    //   'ACTIVATED')
    //   .subscribe(result => {
    //     // this.paginator.length = result.data.dataCount;
    //     // this.dataSource = result.data.list;
    //     this.moreCategories = result.data.dataCount > 5;
    //     this.categories = result.data.list as CategoryDTO[];
    //     console.log(result);
    //   }, error => {
    //     console.log(error);
    //   });
  }

  private getUnitTypes(): void {
    // this.itemQuantityTypeService.getAllItemQuantityTypes('0', '5', this.unitType.value, 'ALL',
    //   'ACTIVATED')
    //   .subscribe(result => {
    //     // this.paginator.length = result.data.dataCount;
    //     // this.dataSource = result.data.list;
    //     this.moreUnitTypes = result.data.dataCount > 5;
    //     this.unitTypes = result.data.list as UnitTypeDTO[];
    //     console.log(result);
    //   }, error => {
    //     console.log(error);
    //   });
  }
  moreResultsList(type: 'Brand' | 'Category' | 'QuantityType', input: HTMLInputElement): void {
    // const dialogConfig = new MatDialogConfig();
    // // dialogConfig.disableClose = true;
    // // dialogConfig.autoFocus = true;
    // dialogConfig.data = {type, value: input.value};
    // dialogConfig.width = '55%';
    // dialogConfig.height = '76%';
    // const dialogRef = this.dialog.open(SearchResultsComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result){
    //     if (result.type === 'Brand'){
    //       this.brand.setValue( result.data.customerName);
    //       this.selectedBrand = result.data;
    //     }else if (result.type === 'Category'){
    //       this.category.setValue( result.data.routeName);
    //       this.selectedCategory = result.data;
    //     }else if (result.type === 'QuantityType'){
    //       this.unitType.setValue( result.data.routeName);
    //       this.selectedUnitType = result.data;
    //     }
    //   }
    // });
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
      data: new ApprovalDialogConfig('Confirm', 'Warning!', 'Fill All Required Fields')
    });
  }

  approveDialogError4(){
    this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new ApprovalDialogConfig('Fine', 'Successfull!', 'Token Successfully Updated')
    });
  }

  approveDialogError3(){
    this.dialog.open(InputDialogComponent, {
      width: '350px',
      // height: '200px',
      data: new InputDialogConfig('Add', 'Successfull!', 'fieldTxtOne','fieldTxtTwo','inputDataOne','inputDataTwo')
    });
  }
  addItem(form: HTMLFormElement): void {
    this.approveDialogSuccess()

    // if (this.itemDetailsForm.valid &&
    //   (undefined !== (this.selectedBrand && this.selectedCategory && this.selectedUnitType))) {
    //   this.apiResponse = true;
    //   console.log('run');
    //   this.itemService.addItem(new ItemDTO(
    //     'this.itemId',
    //     this.itemDetailsForm.get('itemName')?.value,
    //     this.itemDetailsForm.get('description')?.value,
    //     this.selectedBrand,
    //     this.selectedCategory,
    //     this.selectedUnitType,
    //     'ACTIVATED'
    //   )).subscribe(res => {
    //       this.apiResponse = false;
    //       if (res.code === 201) {
    //         form.reset();
    //       }
    //     }, error => {
    //       this.apiResponse = false;
    //     }
    //   );
    // } else {
    //   this.dialog.open(ApprovalDialogComponent, {
    //       width: '350px',
    //       // height: '200px',
    //       data: new ApprovalDialogConfig('Alert', 'Warning!', 'Fill All Required Fields')
    //     }
    //   );
    // }
  }
  btnCancel(): void {
    this.dialogRef.close();
  }


}
