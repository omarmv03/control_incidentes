// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Incidents }           from '../models/incidents';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServerService {
     // Resolve HTTP using the constructor
     constructor (private _http: Http) {
     }
     // private instance variable to hold base url
     //private incidentsUrl = 'http://arrosvmbld04.neoris.cxnetworks.net:61434/CambiosBD.WS/Service.asmx/GetIncidents'; 
     private incidentsUrl = 'http://localhost:61434/Service.asmx/';
     private _data;

     // Fetch all existing incidents
     getIncidents(): any{
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

     // Fetch all existing incidents
     getIncidentsForSprint(val): any{

        let headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        let _self = new URLSearchParams();
        _self.set('sprint', val);

         return this._http.post(this.incidentsUrl+'GetIncidentsForSprint',_self.toString(),{headers:headers})
                .map((res:Response) => res.json());
        
     }
     // Fetch all existing incidents
     getObjects(): any{
         // ...using get request
         return this._http.get(this.incidentsUrl+'GetObjects')
                .map((res:Response) => res.json());
        
     }
     // Fetch all existing incidents
     getMaxSprint(): any{
         // ...using get request
         return this._http.get(this.incidentsUrl+'GetMaxSprint')
                .map((res:Response) => res.json());
        
     }



}