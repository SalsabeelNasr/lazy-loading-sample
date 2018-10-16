import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ActionsPageComponent } from "./actions-page.component";
import { ActionsPageRoutingModule } from "./actions-page-routing.module";
import { ActionsListComponent } from './components/actions-list/actions-list.component';
import { ActionsListItemComponent } from './components/actions-list-item/actions-list-item.component';

@NgModule({
  declarations: [
    ActionsPageComponent,
    ActionsListComponent,
    ActionsListItemComponent
  ],
  imports: [
    CommonModule,
    ActionsPageRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ]
})
export class ActionsPageModule { }
