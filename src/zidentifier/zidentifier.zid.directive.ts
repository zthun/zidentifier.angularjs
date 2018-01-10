import * as ng from 'angular';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZAbstractIdentifierDirective} from './zidentifier.abstract.directive';
import {ZIdentifierModuleName} from './zidentifier.module';
import {ZIdGeneratorFactoryName} from './zidgenerator.service';

export const ZIdentifierDirectiveName: string = 'zId';
export const ZIdentifierAttributeName: string = 'zId';
export const ZIdentifierAttributeToGenerate: string = 'id';

/**
 * Represents an attribute directive that can be used to dynamically generate
 * an id for a specified element based on a root element.
 *
 * @this {ZIdentifierDirective}
 */
export class ZIdentifierDirective extends ZAbstractIdentifierDirective {
    /**
     * Initializes a new instance of this object.
     *
     * @param {ng.IParseService} $parse The angular $parse service.
     * @param {IZIdGeneratorService} zIdGeneratorService The service used to generate ids.
     */
    constructor($parse: ng.IParseService, zIdGeneratorService: IZIdGeneratorService) {
        super($parse, zIdGeneratorService, ZIdentifierAttributeName, ZIdentifierAttributeToGenerate);
    }
}

ng.module(ZIdentifierModuleName).directive(ZIdentifierDirectiveName, [
    '$parse',
    ZIdGeneratorFactoryName,
    ($parse: ng.IParseService, zIdGeneratorService: IZIdGeneratorService): ng.IDirective => new ZIdentifierDirective($parse, zIdGeneratorService)]);
