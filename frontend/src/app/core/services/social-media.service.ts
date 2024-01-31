import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";
import {SocialMediaItem} from "../model/socialMediaItem";
import {ROUTES} from "../route/routes";

@Injectable({
    providedIn: 'root'
})
export class SocialMediaService {

    listAll: Subject<boolean> = new Subject();

    constructor(private http: HttpClient) {
    }


    getAllSocialMedia(): Observable<SocialMediaItem[]> {
        return this.http.get<SocialMediaItem[]>(`${environment.apiUrl}${ROUTES.SOCIAL_MEDIA.ALL}`)
    }

    getDetailSocialMedia(id: string): Observable<SocialMediaItem> {
        return this.http.get<SocialMediaItem>(`${environment.apiUrl}${ROUTES.SOCIAL_MEDIA.DETAIL}/${id}`)
    }

    socialMediaCreate(body: SocialMediaItem): Observable<SocialMediaItem> {
        return this.http.post<SocialMediaItem>(`${environment.apiUrl}${ROUTES.SOCIAL_MEDIA.CREATE}`, body)
    }

    socialMediaUpdate(body: SocialMediaItem): Observable<SocialMediaItem> {
        return this.http.put<SocialMediaItem>(`${environment.apiUrl}${ROUTES.SOCIAL_MEDIA.UPDATE}/${body._id}`, body)
    }

}
