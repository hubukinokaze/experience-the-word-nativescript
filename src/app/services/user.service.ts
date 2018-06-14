import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private userApi: any;
    private bearer: string;
    private httpOptions: {};

    public constructor(private http: HttpClient) {
        this.userApi = 'http://blog.rexlxy.me:8080/ExperienceTheWord/user/all';
        this.bearer = '';

        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
                // 'Authorization': 'my-auth-token'
            })
        };
    }

    public getAllUsers() {

        // make api call here
        return this.http.get(this.userApi).map(
            response => {
                return response['data'];
            }
        );
    }

}
