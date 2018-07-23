import {module} from 'angular';

import {ZIdentifierGenerator} from '@zthun/identifier.core';
import {ZIdentifierModuleName} from '../z-identifier.module';

export const ZIdentifierGeneratorFactoryName = 'zIdentifierGenerator';
module(ZIdentifierModuleName).factory(ZIdentifierGeneratorFactoryName, (): ZIdentifierGenerator => new ZIdentifierGenerator());
