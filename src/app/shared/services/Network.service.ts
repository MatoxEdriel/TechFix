import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {



  //BehaviorSubject 
  //!para el que se suscriba reciba el ultimo valor es decir si tiene conexion xd


  private onlineStatus$ = new BehaviorSubject<boolean>(navigator.onLine)




  //todo repasar. el ngZone
  constructor(
    private ngZone: NgZone


  ) {
    this.initListeners();

  }




  private initListeners() {

    this.ngZone.runOutsideAngular(() => {
      merge(
        fromEvent(window, 'online').pipe(map(() => true)),
        fromEvent(window, 'offline').pipe(map(() => false))
      ).subscribe(isOnline => {
        this.ngZone.run(() => {
          this.onlineStatus$.next(isOnline)
        })
      })
    })
  }

  get isOnline$(): Observable<boolean> {

    return this.onlineStatus$.asObservable();


  }
}
