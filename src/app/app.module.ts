import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BigonotationsComponent } from './bigonotations/bigonotations.component';
import { DatastructuresComponent } from './datastructures/datastructures.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BigocheatsheetComponent } from './bigocheatsheet/bigocheatsheet.component';
import { MorecontactComponent } from './morecontact/morecontact.component';
import { AlgomodaldetailsComponent } from './algomodaldetails/algomodaldetails.component';
import { DsmodaldetailsComponent } from './dsmodaldetails/dsmodaldetails.component';

import { SortingalgolistService } from './services/sortingalgolist.service';
import { DatastructurelistService } from './services/datastructurelist.service';
import { DatastructuredetailsComponent } from './datastructuredetails/datastructuredetails.component';
import { AlgorithmdetailsComponent } from './algorithmdetails/algorithmdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IntroductionComponent,
    BigonotationsComponent,
    DatastructuresComponent,
    AlgorithmsComponent,
    BigocheatsheetComponent,
    MorecontactComponent,
    AlgomodaldetailsComponent,
    DsmodaldetailsComponent,
    DatastructuredetailsComponent,
    AlgorithmdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SortingalgolistService, DatastructurelistService],
  bootstrap: [AppComponent]
})

export class AppModule { }
