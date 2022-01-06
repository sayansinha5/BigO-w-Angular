import { Routes } from "@angular/router";

import { IntroductionComponent } from '../introduction/introduction.component';
import { BigonotationsComponent } from "../bigonotations/bigonotations.component";
import { DatastructuresComponent } from "../datastructures/datastructures.component";
import { AlgorithmsComponent } from "../algorithms/algorithms.component";
import { BigocheatsheetComponent } from "../bigocheatsheet/bigocheatsheet.component";
import { MorecontactComponent } from "../morecontact/morecontact.component";

import { DatastructuredetailsComponent } from "../datastructuredetails/datastructuredetails.component";
import { AlgorithmdetailsComponent } from "../algorithmdetails/algorithmdetails.component";

export const routes: Routes = [
    { path: 'introduction', component: IntroductionComponent },
    { path: 'bigonotations', component: BigonotationsComponent },
    { path: 'cheatsheet', component: BigocheatsheetComponent },
    { path: 'ds', component: DatastructuresComponent },
    { path: 'ds/:slug', component: DatastructuredetailsComponent },
    { path: 'algo', component: AlgorithmsComponent },
    { path: 'algo/:slug', component: AlgorithmdetailsComponent },
    { path: 'more', component: MorecontactComponent },
    { path: '', redirectTo: '/introduction', pathMatch: 'full' }
];