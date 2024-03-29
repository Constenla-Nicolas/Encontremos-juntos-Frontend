import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import { CommonModule } from '@angular/common';
import { FolderPageRoutingModule } from './folder-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
