import {Component, OnInit, ViewChild} from '@angular/core';
import {Filter} from "../../../core/models/Filter";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {debounceTime, distinctUntilChanged, Subject, Subscription, timeout} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {componentDTO} from "../dto/componentDTO";
import {SystemConfig} from "../../../core/util/SystemConfig";
import {ManageItemsService} from "../service/manage-items.service";
import {DatePipe} from "@angular/common";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private dialog: MatDialog,
    // private batchService: BatchService,
    public datepipe: DatePipe,
  ) {
    this.dataSource = new MatTableDataSource(this.items);
    this.pageSizeOptions = SystemConfig.getPageSizes();
    this.dataSource.paginator = this.paginator;
  }
  pageSizeOptions: number[];
  pageCount = 0;


  filters: Filter[] = [{key: 'ALL', value: 'All'}, {key: 'NAME', value: 'Name'}, {key: 'NIC', value: 'Nic'}, {
    key: 'ADDRESS', value: 'Address'}, {key: 'ID', value: 'ID'}, {key: 'MOBILE', value: 'Mobile Number'}, {key: 'LAND',
    value: 'Land Number'}];
  items!: Array<componentDTO>[];
  displayedColumns: string[] = ['username', 'password', 'status', 'phoneNo', 'idPhoto',
    'email','name'];
  dataSource: MatTableDataSource<Array<componentDTO>>;
  private allItemSub!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tempPageEvent!: PageEvent;
  filterDetailsForm!: FormGroup;
  search = new Subject();
  searchedWords!: string[];
  systemConfig = SystemConfig;

  ngOnDestroy(): void {
    this.allItemSub.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.filterDetailsForm = this.formBuilder.group({
      searchKeyWord: [''],
      filter: ['ALL'],
      stateFilter: ['ACTIVATED'],
    });
    this.search.pipe(
      debounceTime(SystemConfig.getDebounceTime()),
      distinctUntilChanged())
      .subscribe(() => {
        this.searchedWords = this.filterDetailsForm.get('searchKeyWord')?.value.trim().split(' ');
        this.refreshTable();
      });
  }

  ngAfterViewInit(): void {
    this.refreshTable();
  }
  pageNavigate(value: string): void {
    this.paginator.pageIndex = Number(value) - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }
  refreshTable(): void {
    const filter = this.filterDetailsForm.get('filter')?.value;
    const searchKeyWord = this.filterDetailsForm.get('searchKeyWord')?.value;
    const stateFilter = this.filterDetailsForm.get('stateFilter')?.value;
    this.loadTable();
  }

  public loadTable(): void {
    // console.log(stateFilter);
    this.allItemSub = this.customerService.getAllUsers()
      .pipe(timeout(SystemConfig.getDebounceTime()))
      .subscribe(result => {
        this.paginator.length = result.data.length;
        this.dataSource = result.data;
        console.log(result.data);
      }, error => {
        console.log(error);
      });
  }

  public getServerData(event: PageEvent): any {
    const filter = this.filterDetailsForm.get('filter')?.value;
    const searchKeyWord = this.filterDetailsForm.get('searchKeyWord')?.value;
    const stateFilter = this.filterDetailsForm.get('stateFilter')?.value;
    this.loadTable();
  }

  deleteCustomer(row: any): void {
    // const approval = this.dialog.open(ApprovalDialogComponent, {
    //   width: '350px',
    //   data: new ApprovalDialogConfig('Delete', 'Warning !', 'Are you sure sir you want to delete this Item?')
    // });
    // approval.afterClosed().subscribe(approve => {
    //   if (approve) {
    //     console.log('--------------------');
    //     this.itemService.changeItemStatus(row.itemId, 'DELETED').subscribe(res => {
    //       console.log(res);
    //       this.refreshTable();
    //     });
    //   }
    // });
  }
  deactivateCustomer(row: any): void{
    // const state = row.status === 'INACTIVATED' ? 'ACTIVATE' : 'INACTIVATE';
    // const approval = this.dialog.open(ApprovalDialogComponent, {
    //   width: '350px',
    //   data: new ApprovalDialogConfig('Confirm', 'Warning !', 'Are you sure sir you want to ' + state + ' this item ?')
    // });
    // approval.afterClosed().subscribe(approve => {
    //   if (approve) {
    //     console.log('--------------------');
    //     this.itemService.changeItemStatus(row.customerId,  row.status === 'INACTIVATED' ? 'ACTIVATED' : 'INACTIVATED')
    //       .subscribe(res => {
    //         console.log(res);
    //         this.refreshTable();
    //       });
    //   }
    // });
  }

  updateCustomer(row: any): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = row;
    // dialogConfig.width = '55%';
    // dialogConfig.height = '75%';
    // console.log(row);
    // console.log('----------------------------');
    // const dialogRef = this.dialog.open(UpdateItemComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   this.refreshTable();
    // });

  }

  newBatch(row: any): void {
    // console.log(row);
    // const dialogRef = this.dialog.open(InputDialogComponent, {
    //   width: '400px',
    //   data: new InputDialogConfig('Price', 'Change Price', 'Price', 'Quantity',
    //     null, null)
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result.dataOne) {
    //     this.batchService.addBatch(new BatchDTO(
    //       '',
    //       '',
    //       row.itemId,
    //       '',
    //       '',
    //       this.datepipe.transform(new Date(), 'yyyy-MM-dd') as string,
    //       result.dataOne,
    //       result.dataTwo,
    //       'ACTIVATED')).subscribe(r => this.refreshTable());
    //   }
    // });
  }

}
