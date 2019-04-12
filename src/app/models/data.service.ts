import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Announcement } from './announcements/Announcement';
import { Observable } from 'rxjs';
import { GetAnnouncements } from './announcements/getAnnouncements';
import {ViewAssignments} from './assignments/View-Assignments';
import {Submissions} from './assignments/Submissions';
import {LoggedInfo} from './users/LoggedInfo';
import {User} from './users/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcements: GetAnnouncements[];
  submit: any;
  headers = new HttpHeaders({
    'content-Type': 'application/x-www-form-urlencoded'
  });
  
  constructor(private http: HttpClient) { }

  addAnnouncement(announcement: Announcement): Observable<Announcement[]> {
    const params = `teacherid=${announcement.teacherId}&body=${announcement.body}`;
    return this.http.post<Announcement[]>(this.baseUrl + 'teachers/addAnnouncement', params, {headers: this.headers});
  }

  getAnnouncements(): Observable<GetAnnouncements[]> {
    return this.http.get<GetAnnouncements[]>(this.baseUrl + 'initials/getAnnouncements');
  }

  getAssignment(id: number): Observable<ViewAssignments[]> {
    return this.http.get<ViewAssignments[]>(this.baseUrl + 'Students/listAssignments/' + id);
  }

  submitAssignment(data: Submissions): Observable<Submissions[]> {
    const params = `text=${data.text}&studentId=${data.studentId}&assignmentId=${data.assignmentId}`;
    return this.http.post<Submissions[]>(this.baseUrl + 'Students/addSubmission', params, {headers: this.headers});
  }

  login(args: User): Observable<LoggedInfo> {
    const params = `id=${args.id}&password=${args.password}`;
    return this.http.post<LoggedInfo>(this.baseUrl + 'students/login', params, {headers: this.headers});
  }

  logout(accountType, token): Observable<any>{
    console.log(token);
    const params = `token=${token}`;
    return this.http.post<any>(this.baseUrl + accountType + 's/logout', params, {headers: this.headers});
  }
}
