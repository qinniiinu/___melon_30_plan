import { HostListener, Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastWidthService {
  public signalWidth !: Signal<any>

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize($event:any) {
    console.log($event)
  }

}

export const isSizeS = (screenWidth: number): boolean => {
  return screenWidth <= 767
}

export const isSizeM = (screenWidth: number): boolean => {
  return screenWidth > 767 && screenWidth <= 1219
}

export const isSizeL = (screenWidth: number): boolean => {
  return screenWidth > 1219
}

export enum ScreenSize {
  S = 's',
  M = 'm',
  L = 'l',
}

type fn = (screenWidth: number) => boolean
export const sizeRecord: Record<ScreenSize, fn> = {
  [ScreenSize.S]: isSizeS,
  [ScreenSize.M]: isSizeM,
  [ScreenSize.L]: isSizeL,
}
