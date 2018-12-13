import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logError(pError: string) {
    console.error(pError);
  }
  logWarning(pWarn: string) {
    console.warn(pWarn);
  }
  logInfo(pInfo: string) {
    console.info(pInfo);
  }
}
