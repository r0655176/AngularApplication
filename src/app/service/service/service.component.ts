import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/Services/logger.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private _loggerService : LoggerService) { }

  ngOnInit() {
  }

  onAClickErr() {
    this._loggerService.logError("Test!!")
  }
  onAClickWar() {
    this._loggerService.logWarning("Test!!")
  }
  onAClickInfo() {
    this._loggerService.logInfo("Test!!")
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
