import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { element, IAugmentedJQuery, ICompileService, IRootScopeService, mock } from 'angular';
import { ZIdentifierModuleName } from '../z-identifier.module';

export class ZIdentifierTestUtil {

  public create(name: string, inputAttr: string, outputAttr: string) {
    describe(name, () => {
      const ZValue: string = 'bar';

      let compile: ICompileService;
      let zIdentifierGeneratorSvc: ZIdentifierGenerator;
      let scope: any;

      beforeEach(mock.module(ZIdentifierModuleName));
      beforeEach(mock.inject(($compile: ICompileService) => compile = $compile));
      beforeEach(mock.inject(($rootScope: IRootScopeService) => scope = $rootScope.$new()));

      beforeEach(mock.inject((zIdentifierGenerator: ZIdentifierGenerator) => {
        zIdentifierGeneratorSvc = zIdentifierGenerator;

        spyOn(zIdentifierGeneratorSvc, 'generateAttributeForElement').and.callFake((attr: string, zid: string, el: HTMLElement) => {
          el.setAttribute(attr, `foo-${zid}`);
          return el;
        });
      }));

      function createHtml(): IAugmentedJQuery {
        let el = element(document.createElement('div'));
        el.attr(inputAttr, ZValue);
        return el;
      }

      function createTarget(html: IAugmentedJQuery): IAugmentedJQuery {
        let compiledElement = compile(html[0].outerHTML)(scope);
        scope.$apply();
        return compiledElement;
      }

      it(`updates the ${outputAttr} on the element.`, () => {
        // Arrange
        // Act
        createTarget(createHtml());
        // Assert
        expect(zIdentifierGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(outputAttr, ZValue, jasmine.anything());
      });

      it('leaves the element alone if the directive value is not set.', () => {
        // Arrange
        let html = createHtml();
        html.attr(inputAttr, '');
        // Act
        createTarget(html);
        // Assert
        expect(zIdentifierGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(outputAttr, null, jasmine.anything());
      });

      it('correctly interpolates values from the scope.', () => {
        // Arrange
        let html = createHtml();
        scope.prop = 'my-value';
        html.attr(inputAttr, `${ZValue}-{{prop}}`);
        // Act
        createTarget(html);
        // Assert
        expect(zIdentifierGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(outputAttr, `${ZValue}-my-value`, jasmine.anything());
      });
    });

  }
}
