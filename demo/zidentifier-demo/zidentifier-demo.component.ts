import { IComponentOptions, module } from 'angular';
import { ZIdentifierDemoModuleName } from './zidentifier-demo.module';

export const ZIdentifierComponentSelector = 'zidentifier-demo';

export class ZIdentifierComponent implements IComponentOptions {
  public controller: string;
  public controllerAs: string;
  public template: string;

  public constructor() {
    this.controller = 'ZIdentifierDemoController';
    this.controllerAs = 'ctrl';
    // tslint:disable-next-line:no-require-imports
    this.template = require('./zidentifier-demo.html');
  }
}

module(ZIdentifierDemoModuleName).component(ZIdentifierComponentSelector, new ZIdentifierComponent());
