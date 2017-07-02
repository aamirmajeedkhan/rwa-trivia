import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule,
  MdCardModule, MdChipsModule, MdInputModule, MdSelectModule, MdButtonModule, MdCheckboxModule, MdSnackBarModule, MdDialogModule
        } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { QuestionService } from './qna/question.service';
import { CategoryService } from './category/category.service';
import { TagService } from './tag/tag.service';
import { QuestionListComponent } from './qna/question-list/question-list.component';
import { TagListComponent } from './tag/tag-list/tag-list.component';
import { AppRoutingModule } from './app-routing.module';
import { QnaUpsertComponent } from './qna/qna-upsert/qna-upsert.component';
import { CategoryEffects } from "./store/effects/category.effect";
import { CategoryActions } from "./store/actions/category.actions";
import { default as reducer } from './store/app.store';
import { TagEffects } from "./store/effects/tag.effect";
//import { TagActions } from "./store/actions/tag.actions";
import { QuestionEffects } from "./store/effects/question.effect";
import { QuestionActions } from "./store/actions/question.actions";
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from "./auth/auth.service";
import { UserActions } from "./store/actions/user.actions";
import { UIStateActions } from "./store/actions/ui-state.actions";
import { AuthGuard } from "./auth/auth.guard";
import { UserEffects } from "./store/effects/user.effect";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyQuestionsComponent } from "./qna/my/my-questions.component";
import { AdminComponent } from "./auth/admin/admin.component";
import { AdminQuestionsComponent } from "./admin/admin-questions.component";

const firebaseConfig = {
    apiKey: "AIzaSyA1eQ8bA_cYfS0lplFP640EbxOvC5rdTgg",
    authDomain: "rwa-trivia-6b7d1.firebaseapp.com",
    databaseURL: "https://rwa-trivia-6b7d1.firebaseio.com",
    projectId: "rwa-trivia-6b7d1",
    storageBucket: "rwa-trivia-6b7d1.appspot.com",
    messagingSenderId: "692722887683"
  };

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    QuestionListComponent,
    TagListComponent,
    QnaUpsertComponent,
    LoginComponent,
    DashboardComponent,
    MyQuestionsComponent,
    AdminQuestionsComponent,
    AdminComponent,
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // ngrx based Module
    StoreModule.provideStore(reducer),
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(TagEffects),
    EffectsModule.run(QuestionEffects),
    EffectsModule.run(UserEffects),
    // Angular Material Item 
    BrowserAnimationsModule,
    FlexLayoutModule,
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
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 20
    // })
  ],
  providers: [CategoryService, TagService, QuestionService,
              CategoryActions,  QuestionActions, UserActions,AuthService,
              UIStateActions,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
