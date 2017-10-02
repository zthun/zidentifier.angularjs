import * as ng from 'angular';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';
import {ZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZIdentifierModuleName} from './zidentifier.module';

export const ZIdGeneratorFactoryName = 'zIdGeneratorService';
ng.module(ZIdentifierModuleName).factory(ZIdGeneratorFactoryName, (): IZIdGeneratorService => new ZIdGeneratorService());
