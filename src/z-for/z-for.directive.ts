import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { IDirective, IParseService, module } from 'angular';
import { ZAbstractAttrDirective } from '../z-attr/z-abstract-attr-directive.class';
import { ZIdentifierGeneratorFactoryName } from '../z-attr/z-identifier-generator.service';
import { ZIdentifierModuleName } from '../z-identifier.module';

export const ZForInputAttribute: string = 'zfor';
export const ZForOutputAttribute: string = 'for';

/**
 * Represents an attribute directive that can be used to dynamically generate
 * an for attribute for a specified label based on a root element.
 */
export class ZForIdentifierDirective extends ZAbstractAttrDirective {
    /**
     * Initializes a new instance of this object.
     *
     * @param $parse The angular $parse service.
     * @param zIdGeneratorService The service used to generate ids.
     */
    constructor($parse: ng.IParseService, zIdentifierGenerator: ZIdentifierGenerator) {
        super($parse, zIdentifierGenerator, ZForInputAttribute, ZForOutputAttribute);
    }
}

module(ZIdentifierModuleName).directive(ZForInputAttribute, [
    '$parse',
    ZIdentifierGeneratorFactoryName,
    ($parse: IParseService, zIdentifierGenerator: ZIdentifierGenerator): IDirective => new ZForIdentifierDirective($parse, zIdentifierGenerator)]);
