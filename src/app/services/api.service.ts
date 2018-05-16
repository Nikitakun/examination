import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { get } from 'lodash';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/internal/operators';
import { Config } from '../../config/config';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    public post(url: string, data?: any, options?: any) {
        return this.sendRequest('POST', url, data, options);
    }

    private sendRequest(method: string, path: string, data?: any, options?: any): Observable<any> {
        return this.authService.getToken()
            .pipe(
              mergeMap((token: string) =>
                this.getMethod(method, this.getPath(path), data, this.getOptions(token, options))),
              map((response: Response) => this.parseResponse(response))
            );
    }

    private getMethod(method: string, url: string, data?: any, options?: any): Observable<any> {
        console.log('data', data);
        switch (method) {
            case 'GET': return this.http.get(url, options);
            case 'POST': return this.http.post(url, data, options || {});
            case 'PUT': return this.http.put(url, data, options);
            case 'DELETE': return this.http.delete(url);
        }
    }

    private getPath(url: string) {
        return `${Config.ApiUrl}${url}`;
    }

    private getOptions(token: string, options?: any): any {
        if (!token && !options) {
            return {};
        }
        const requestOptions = options || {};
        const headers = get(requestOptions, 'headers', new Headers());
        if (token) {
            headers.append('Authorization', token);
        }
        return requestOptions;
    }

    private parseResponse(response: Response): any {
        return response.text() ? response.json() : null;
    }

}
