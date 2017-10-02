import * as ng from 'angular';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZIdentifierModuleName} from './zidentifier.module';
import {ZIdGeneratorFactoryName} from './zidgenerator.service';

export const ZIdentifierDirectiveName: string = 'zId';
export const ZIdentifierAttributeName: string = 'zId';

/**
 * Represents an attribute directive that can be used to dynamically generate
 * an id for a specified element based on a root element.
 *
 * @this {ZIdentifierDirective}
 */
export class ZIdentifierDirective implements ng.IDirective {
    /**
     * Attribute
     */
    public restrict: string;

    /**
     * Initializes a new instance of this object.
     *
     * @param {ng.IParseService} $parse The angular $parse service.
     * @param {IZIdGeneratorService} zIdGeneratorService The service used to generate ids.
     */
    constructor(private $parse: ng.IParseService, private zIdGeneratorService: IZIdGeneratorService) {
        this.restrict = 'A';
    }

    /**
     * Occurs after the directive is compiled and linked to the scope.
     *
     * @param {ng.IScope} scope The element scope that is attached to the directive.
     * @param {ng.IAugmentedJQuery} instanceElement The element that is attached to the directive.
     *
     * @this {ZIdentifierDirective}
     */
    public link(scope: ng.IScope, instanceElement: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
        let nativeElement = instanceElement[0];
        let zid = attrs[ZIdentifierAttributeName];
        let zidExpr = zid ? `"${zid}"` : null;
        let zvalue = zid ? this.$parse(zidExpr)(scope) : null;
        this.zIdGeneratorService.generateIdForElement(zvalue, nativeElement);
    }
}

ng.module(ZIdentifierModuleName).directive(ZIdentifierDirectiveName, [
    '$parse',
    ZIdGeneratorFactoryName,
    ($parse: ng.IParseService, zIdGeneratorService: IZIdGeneratorService): ng.IDirective => new ZIdentifierDirective($parse, zIdGeneratorService)]);
