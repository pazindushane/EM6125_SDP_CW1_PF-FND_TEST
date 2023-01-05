import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {SystemConfig} from "../../../core/util/SystemConfig";
import {Filter} from "../../../core/models/Filter";
import {componentDTO} from "../dto/componentDTO";
import {debounceTime, distinctUntilChanged, Subject, Subscription, timeout} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TokensService} from "../service/tokens.service";
import {TokenDTO} from "../dto/tokenDTO";
import {UpdateTokenComponent} from "./components/update-token/update-token.component";
import {ApprovalDialogComponent} from "../../../core/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../core/dialogs/approval-dialog/model/ApprovalDialogConfig";
import {state} from "@angular/animations";

@Component({
  selector: 'app-manage-tokens',
  templateUrl: './manage-tokens.component.html',
  styleUrls: ['./manage-tokens.component.scss']
})
export class ManageTokensComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokensService,
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
  items!: Array<TokenDTO>[];
  displayedColumns: string[] = ['action', 'tid', 'vehicleRegNo', 'status', 'tokenExpDate', 'requestQuota',
    'fillingTimeAndDate','username'];
  dataSource: MatTableDataSource<Array<TokenDTO>>;
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
    this.allItemSub = this.tokenService.getAllTokens()
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.width = '55%';
    dialogConfig.height = '75%';
    console.log(row);
    console.log('----------------------------');
    const dialogRef = this.dialog.open(UpdateTokenComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.refreshTable();
    });

  }

  AcceptToken(row: any): void {
    const approval = this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      data: new ApprovalDialogConfig('Confirm', 'Update As ACCEPTED !', 'Are you sure sir you want to Update Token Number ' + row.tid + ' ?')
    });
    approval.afterClosed().subscribe(approve => {
      if (approve) {
        console.log(row);
        this.tokenService.changeToken("ACCEPTED",row.tid)
          .subscribe((result:any) => {
            console.log("This is result")
            console.log(result)
            this.refreshTable();
          }, error => {
            console.log(error);
          });
      }
    });



  }

  DeliverToken(row: any): void {
    const approval = this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      data: new ApprovalDialogConfig('Confirm', 'Update As DELIVERED !', 'Are you sure sir you want to Update Token Number ' + row.tid + ' ?')
    });
    approval.afterClosed().subscribe(approve => {
      if (approve) {
        console.log(row);
        this.tokenService.changeToken("DELIVERED",row.tid)
          .subscribe((result:any) => {
            console.log("This is result")
            console.log(result)
            this.refreshTable();
          }, error => {
            console.log(error);
          });
      }
    });



  }

  CancelToken(row: any): void {
    const approval = this.dialog.open(ApprovalDialogComponent, {
      width: '350px',
      data: new ApprovalDialogConfig('Confirm', 'Update As CANCELLED !', 'Are you sure sir you want to Update Token Number ' + row.tid + ' ?')
    });
    approval.afterClosed().subscribe(approve => {
      if (approve) {
        console.log(row);
        this.tokenService.changeToken("CANCELLED",row.tid)
          .subscribe((result:any) => {
            console.log("This is result")
            console.log(result)
            this.refreshTable();
          }, error => {
            console.log(error);
          });
      }
    });



  }

}
