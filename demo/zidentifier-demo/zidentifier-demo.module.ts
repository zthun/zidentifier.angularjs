import { module } from 'angular';

import { ZIdentifierModuleName } from '../../src';

export const ZIdentifierDemoModuleName = 'zthun.identifier-demo';
export const ZIdentifierDemoModuleDefinition = module(ZIdentifierDemoModuleName, [
  ZIdentifierModuleName
]);
