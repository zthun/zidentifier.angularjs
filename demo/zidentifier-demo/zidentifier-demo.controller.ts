import { module } from 'angular';
import { IDomQuery } from './dom-query.interface';
import { ZIdentifierDemoModuleName } from './zidentifier-demo.module';

export const ZIdentifierDemoControllerName = 'ZIdentifierDemoController';

export class ZIdentifierDemoController {
  public ids: IDomQuery[];
  public labels: IDomQuery[];
  public animal: string;

  public constructor() {
    this.animal = 'cat';
    this.ids = [
      { name: 'zid-demo', exists: false },
      { name: 'zid-demo-app', exists: false },
      { name: 'zid-demo-app-run-test-button', exists: false },
      { name: 'zid-demo-app-reset-test-button', exists: false },
      { name: 'zid-demo-app-id-table', exists: false },
      { name: 'zid-demo-app-a-child-component', exists: false },
      { name: 'zid-demo-app-b-child-component', exists: false }
    ];

    this.labels = [
      { name: 'zid-demo-app-dog-radio', exists: false },
      { name: 'zid-demo-app-cat-radio', exists: false },
      { name: 'zid-demo-app-bird-radio', exists: false },
      { name: 'zid-demo-app-fish-radio', exists: false }
    ];
  }

  public resetTest() {
    this.ids.forEach((id) => id.exists = false);
    this.labels.forEach((label) => label.exists = false);
  }

  public runTest() {
    this.ids.forEach((id) => id.exists = !!document.getElementById(id.name));
    const queryLabels: HTMLLabelElement[] = Array.prototype.slice.call(document.getElementsByTagName('label'));
    this.labels.forEach((lbl) => lbl.exists = queryLabels.filter((ql) => ql.getAttribute('for') === lbl.name).length > 0);
  }
}

module(ZIdentifierDemoModuleName).controller(ZIdentifierDemoControllerName, ZIdentifierDemoController);
