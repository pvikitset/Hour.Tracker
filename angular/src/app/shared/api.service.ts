import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from "@angular/common/http";
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:44355';
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(private http: HttpClient) { }

  sampleGetData() {
    let url_ = this.baseUrl + '/api/values';
    /*
        if (input !== undefined){

          url_ += 'garou=' + encodeURIComponent('' + input) + '&';
        }
        if (input2 !== undefined){

          url_ += 'saitama=' + encodeURIComponent('' + input2) + '&';
        }*/

    url_ = url_.replace(/[?&]$/, '');

    /*let options_ : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
          "Accept": "application/json"
      })
  };*/
    return this.http.get(url_);
  }



  samplePostData(input: Entry[] | null | undefined, input2: number | null | undefined) {

    let url_ = this.baseUrl + '/api/values?';
    if (input2 != undefined) {
      url_ += 'thisisnum=' + encodeURIComponent('' + input2) + '&';
    }
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(input);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };
    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {

      return this.processPostData(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processPostData(<any>response_);
        } catch (e) {
          return <Observable<boolean>><any>_observableThrow(e);
        }
      } else
        return <Observable<boolean>><any>_observableThrow(response_);
    }));
  }

  protected processPostData(response: HttpResponseBase): Observable<boolean> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<boolean>(<any>null);
  }
}

export class Entry /*implements IEntry*/ {

  id!: number | undefined;
  name!: string | undefined;
  num!: number | undefined;
  /*
    constructor(data?: IEntry) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
    }

    init(data?: any) {
      if (data) {
          this.id = data["Id"];
          this.name = data["Name"];
          this.num = data["Num"];
      }
    }
    static fromJS(data: any): Entry {
      data = typeof data === 'object' ? data : {};
      let result = new Entry();
      result.init(data);
      return result;
    }

    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data["Id"] = this.id;
      data["Name"] = this.name;
      data["Num"] = this.num;
      return data;
  }
  }

  export interface IEntry {
    id: number | undefined;
    name: string | undefined;
    num: number | undefined;*/
}



function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = function () {
        observer.next(this.result);
        observer.complete();
      }
      reader.readAsText(blob);
    }
  });
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

export class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}
