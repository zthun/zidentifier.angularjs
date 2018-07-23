import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { IAttributes, IAugmentedJQuery, IParseService, IScope } from 'angular';

/**
 * Represents an abstract base class for all identifiers.
 */
export abstract class ZAbstractAttrDirective implements ng.IDirective {
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
     * @param $parse The angular $parse service.
     * @param zIdGeneratorService The service used to generate ids.
     * @param attr The attribute that this identifier generates.
     * @param
     */
    constructor(
      private readonly $parse: IParseService,
      private readonly zIdentifierGenerator: ZIdentifierGenerator,
      private readonly inputAttribute: string,
      private readonly outputAttribute: string) {
        this.restrict = 'A';
        this.link = {
            pre: this.pre
        };
    }

    /**
     * Occurs after the directive is compiled and linked to the scope.
     *
     * @param scope The element scope that is attached to the directive.
     * @param instanceElement The element that is attached to the directive.
     * @param attrs The list of attributes on the element.
     */
    public pre(scope: IScope, instanceElement: IAugmentedJQuery, attrs: IAttributes): void {
        const nativeElement = instanceElement[0];
        const zValue = attrs[this.inputAttribute];
        const zidExpr = zValue ? `"${zValue}"` : null;
        const zvalue = zValue ? this.$parse(zidExpr)(scope) : null;
        this.zIdentifierGenerator.generateAttributeForElement(this.outputAttribute, zvalue, nativeElement);
    }
}
