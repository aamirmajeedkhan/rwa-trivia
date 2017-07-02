import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class TagService {
    private serviceUrl = 'http://localhost:3000/tagList';
    //constructor(private http:Http) { }
    constructor(private db:AngularFireDatabase) { }

    getTags():Observable<string[]>{
        // return this.http.get(this.serviceUrl)
        //             .map(res => res.json());
        return this.db.list('/tagList')
                        .map(t => t.map(a => a['$value']));
    }

}