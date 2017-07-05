import { NgModule } from '@angular/core';

import { QnaUpsertComponent } from "./qna/qna-upsert.component";
import { MyQuestionsComponent } from "./qna/my-questions.component";
import { SharedModule } from "../shared/shared.module";
import { MyRoutingModule } from "./routing/my-routing.module";

@NgModule({
    imports: [ SharedModule, MyRoutingModule ],
    declarations: [ QnaUpsertComponent, MyQuestionsComponent  ],
})
export class MyModule { }