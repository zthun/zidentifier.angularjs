import * as ng from 'angular';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZAbstractIdentifierDirective} from './zidentifier.abstract.directive';
import {ZIdentifierModuleName} from './zidentifier.module';
import {ZIdGeneratorFactoryName} from './zidgenerator.service';

export const ZForIdentifierDirectiveName: string = 'zForId';
export const ZForIdentifierAttributeName: string = 'zForId';
export const ZForIdentifierAttributeGeneration: string = 'for';

/**
 * Represents an attribute directive that can be used to dynamically generate
 * an for attribute for a specified label based on a root element.
 *
 * @this {ZForIdentifierDirective}
 */
export class ZForIdentifierDirective extends ZAbstractIdentifierDirective {
    /**
     * Initializes a new instance of this object.
     *
     * @param {ng.IParseService} $parse The angular $parse service.
     * @param {IZIdGeneratorService} zIdGeneratorService The service used to generate ids.
     */
    constructor($parse: ng.IParseService, zIdGeneratorService: IZIdGeneratorService) {
        super($parse, zIdGeneratorService, ZForIdentifierAttributeName, ZForIdentifierAttributeGeneration);
    }
}

ng.module(ZIdentifierModuleName).directive(ZForIdentifierDirectiveName, [
    '$parse',
    ZIdGeneratorFactoryName,
    ($parse: ng.IParseService, zIdGeneratorService: IZIdGeneratorService): ng.IDirective => new ZForIdentifierDirective($parse, zIdGeneratorService)]);
