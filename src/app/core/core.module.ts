import { NgModule,ModuleWithProviders } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { StoreModule } from "@ngrx/store";
//import { reducer } from "./store/reducers/tag.reducer";
import { default as reducer } from './store/app.store';
import { EffectsModule } from "@ngrx/effects";
import { CategoryEffects } from "./store/effects/category.effect";
import { TagEffects } from "./store/effects/tag.effect";
import { QuestionEffects } from "./store/effects/question.effect";
import { UserEffects } from "./store/effects/user.effect";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "../shared/shared.module";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard";
import { CategoryService } from "./services/category.service";
import { QuestionService } from "./services/question.service";
import { TagService } from "./services/tag.service";
import { UserActions } from "./store/actions/user.actions";
import { CategoryActions } from "./store/actions/category.actions";
import { QuestionActions } from "./store/actions/question.actions";
import { UIStateActions } from "./store/actions/ui-state.actions";

const firebaseConfig = {
    apiKey: "AIzaSyA1eQ8bA_cYfS0lplFP640EbxOvC5rdTgg",
    authDomain: "rwa-trivia-6b7d1.firebaseapp.com",
    databaseURL: "https://rwa-trivia-6b7d1.firebaseio.com",
    projectId: "rwa-trivia-6b7d1",
    storageBucket: "rwa-trivia-6b7d1.appspot.com",
    messagingSenderId: "692722887683"
  };
@NgModule({
    imports: [ //firebase
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            // ngrx based Module
            StoreModule.provideStore(reducer),
            EffectsModule.run(CategoryEffects),
            EffectsModule.run(TagEffects),
            EffectsModule.run(QuestionEffects),
            EffectsModule.run(UserEffects),
            // StoreDevtoolsModule.instrumentStore({
            //   maxAge: 20
            // })
            //rwa shared Module
            SharedModule,
     ],
    declarations: [ LoginComponent ],
    entryComponents: [ LoginComponent ],
    providers : [ AuthService, AuthGuard, CategoryService,
                  TagService, QuestionService,
                  UserActions, CategoryActions,
                  QuestionActions, UIStateActions]
})
export class CoreModule { }