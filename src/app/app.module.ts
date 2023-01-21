import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopBarComponent } from './components/dashboard/inner-com/top-bar/top-bar.component';
import { LeftSideNavBarComponent } from './components/dashboard/inner-com/left-side-nav-bar/left-side-nav-bar.component';
import { MenuContainerComponent } from './components/dashboard/inner-com/left-side-nav-bar/menu-container/menu-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ManageCustomersComponent } from './components/components/manage-customers/manage-customers.component';
import { ManangeStationsComponent } from './components/components/manange-stations/manange-stations.component';
import { ManageStocksComponent } from './components/components/manage-stocks/manage-stocks.component';
import { ManageTokensComponent } from './components/components/manage-tokens/manage-tokens.component';
import { DashboardHomeComponent } from './components/components/dashboard-home/dashboard-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {HighlightDirective} from "./components/components/service/highlight.directive";
import {DatePipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgApexchartsModule} from "ng-apexcharts";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { InputDialogComponent } from './core/dialogs/input-dialog/input-dialog.component';
import {MatInputModule} from "@angular/material/input";
import { UpdateTokenComponent } from './components/components/manage-tokens/components/update-token/update-token.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ApprovalDialogComponent } from './core/dialogs/approval-dialog/approval-dialog.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { UpdateStocksComponent } from './components/components/manage-stocks/components/update-stocks/update-stocks.component';
import { UpdateStationComponent } from './components/components/manange-stations/components/update-station/update-station.component';
import { AuditComponent } from './components/components/audit/audit.component';
import { PaymentComponent } from './components/components/payment/payment.component';
import { UpdatePaymentComponent } from './components/components/payment/component/update-payment/update-payment.component';
import { UpdateAuditComponent } from './components/components/audit/component/update-audit/update-audit.component';
import {CookieModule} from "ngx-cookie";
import { EditUserComponent } from './components/components/manage-customers/components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    TopBarComponent,
    LeftSideNavBarComponent,
    MenuContainerComponent,
    ManageCustomersComponent,
    ManangeStationsComponent,
    ManageStocksComponent,
    ManageTokensComponent,
    DashboardHomeComponent,
    HighlightDirective,
    InputDialogComponent,
    UpdateTokenComponent,
    ApprovalDialogComponent,
    UpdateStocksComponent,
    UpdateStationComponent,
    AuditComponent,
    PaymentComponent,
    UpdatePaymentComponent,
    UpdateAuditComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    NgApexchartsModule,
    FontAwesomeModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    CookieModule.forRoot()
  ],
  providers: [DatePipe],
  exports: [
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
