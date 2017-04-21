// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Incidents }           from '../models/incidents';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServerService {
     // Resolve HTTP using the constructor
     constructor (private _http: Http) {}
     // private instance variable to hold base url
     //private incidentsUrl = 'http://arrosvmbld04.neoris.cxnetworks.net:61434/CambiosBD.WS/Service.asmx/GetIncidents'; 
     private incidentsUrl = 'http://localhost:61434/Service.asmx/';
     private _data;

     // Fetch all existing comments
     getComments(): any{
         // ...using get request
         return this._http.get(this.incidentsUrl+'GetIncidents')
                .map((res:Response) => res.json());
        
     }

     loginUser(dominio, user, pass): any{

        let headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        let _self = new URLSearchParams();
        _self.set('domain', dominio);
        _self.set('username', user);
        _self.set('pwd', pass);

        return this._http.post(this.incidentsUrl+'IsAuthenticated',_self.toString(),{headers:headers})
                .map((res:Response) => res.json());
     }



}