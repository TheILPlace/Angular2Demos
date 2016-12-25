import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from 'rxjs';



export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        if (route.data && route.data['preload']) {
            return fn();
        }
        else {
            return Observable.of(null);
        }

    }

}