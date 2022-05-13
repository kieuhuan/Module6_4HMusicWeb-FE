import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Artist} from '../../model/artist';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }
  getAllArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${API_URL}/artists`);
  }
}
