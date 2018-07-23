import { IComponentOptions, module } from 'angular';
import { ZIdentifierDemoModuleName } from '../zidentifier-demo/zidentifier-demo.module';

export const ZIdentifierDemoChildComponentSelector = 'zIdentifierDemoChild';

export class ZIdentifierDemoChildComponent implements IComponentOptions {
  public template: string;

  public constructor() {
    // tslint:disable-next-line:no-require-imports
    this.template = require('./zidentifier-demo-child.html');
  }
}

module(ZIdentifierDemoModuleName).component(ZIdentifierDemoChildComponentSelector, new ZIdentifierDemoChildComponent());
