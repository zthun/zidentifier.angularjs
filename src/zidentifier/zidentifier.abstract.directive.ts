import * as ng from 'angular';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

/**
 * Represents an abstract base class for all identifiers.
 */
export abstract class ZAbstractIdentifierDirective implements ng.IDirective {
    /**
     * Attribute
     */
    public restrict: string;
    /**
     * Link methods
     */
    public link: any;

    /**
     * Initializes a new instance of this object.
     *
     * @param {ng.IParseService} $parse The angular $parse service.
     * @param {IZIdGeneratorService} zIdGeneratorService The service used to generate ids.
     * @param {String} attr The attribute that this identifier generates.
     */
    constructor(private $parse: ng.IParseService, private zIdGeneratorService: IZIdGeneratorService, private attrToLookFor: string, private attrToGenerate: string) {
        this.restrict = 'A';
        this.link = {
            pre: this.pre
        };
    }

    /**
     * Occurs after the directive is compiled and linked to the scope.
     *
     * @param {ng.IScope} scope The element scope that is attached to the directive.
     * @param {ng.IAugmentedJQuery} instanceElement The element that is attached to the directive.
     *
     * @this {ZIdentifierDirective}
     */
    public pre(scope: ng.IScope, instanceElement: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
        let nativeElement = instanceElement[0];
        let zValue = attrs[this.attrToLookFor];
        let zidExpr = zValue ? `"${zValue}"` : null;
        let zvalue = zValue ? this.$parse(zidExpr)(scope) : null;
        this.zIdGeneratorService.generateAttributeForElement(this.attrToGenerate, zvalue, nativeElement);
    }
}
