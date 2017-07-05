import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule,
        MdCardModule, MdChipsModule, MdInputModule, MdSelectModule, MdButtonModule, MdCheckboxModule, MdSnackBarModule, MdDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionListComponent } from "./question-list/question-list.component";

@NgModule({
    declarations: [ QuestionListComponent ],
    imports: [ 
               CommonModule,
               ReactiveFormsModule,
               //BrowserAnimationsModule,
                MdToolbarModule,
                MdSidenavModule,
                MdIconModule,
                MdListModule,
                MdCardModule,
                MdChipsModule,
                MdInputModule,
                MdSelectModule,
                MdButtonModule,
                MdCheckboxModule,
                MdSnackBarModule, 
                MdDialogModule,
               FlexLayoutModule,  
             ],
    providers: [ ],
    exports:  [ QuestionListComponent,
              CommonModule, ReactiveFormsModule,
              MdToolbarModule,MdSidenavModule,
              MdIconModule,MdListModule,
              MdCardModule,MdChipsModule,
              MdInputModule,MdSelectModule,
              MdButtonModule,MdCheckboxModule,
              MdSnackBarModule,MdDialogModule,
              FlexLayoutModule ]
})
export class SharedModule { }