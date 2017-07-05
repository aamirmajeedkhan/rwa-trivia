import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Category } from '../../core/model';

@Injectable()
export class CategoryService {
    private serviceUrl='http://localhost:3000/categories';

    //constructor(private http:Http) { }
    constructor(private db:AngularFireDatabase) { }

    getCategories():Observable<Category[]>{
        // return this.http.get(this.serviceUrl)
        // .map( response => response.json());
        return this.db.list('/categories');
    }

}