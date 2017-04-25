"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ServerService = (function () {
    // Resolve HTTP using the constructor
    function ServerService(_http) {
        this._http = _http;
        // private instance variable to hold base url
        //private incidentsUrl = 'http://arrosvmbld04.neoris.cxnetworks.net:61434/CambiosBD.WS/Service.asmx/GetIncidents'; 
        this.incidentsUrl = 'http://localhost:61434/Service.asmx/';
    }
    // Fetch all existing comments
    ServerService.prototype.getComments = function () {
        // ...using get request
        return this._http.get(this.incidentsUrl + 'GetIncidents')
            .map(function (res) { return res.json(); });
    };
    ServerService.prototype.loginUser = function (dominio, user, pass) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var _self = new http_1.URLSearchParams();
        _self.set('domain', dominio);
        _self.set('username', user);
        _self.set('pwd', pass);
        return this._http.post(this.incidentsUrl + 'IsAuthenticated', _self.toString(), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ServerService;
}());
ServerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServerService);
exports.ServerService = ServerService;
//# sourceMappingURL=server.service.js.map