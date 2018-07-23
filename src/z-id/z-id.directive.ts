import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { IDirective, IParseService, module } from 'angular';
import { ZAbstractAttrDirective } from '../z-attr/z-abstract-attr-directive.class';
import { ZIdentifierGeneratorFactoryName } from '../z-attr/z-identifier-generator.service';
import { ZIdentifierModuleName } from '../z-identifier.module';

export const ZIdInputAttribute: string = 'zid';
export const ZIdOutputAttribute: string = 'id';

/**
 * Represents an attribute directive that can be used to dynamically generate
 * an id for a specified element based on a root element.
 */
export class ZIdDirective extends ZAbstractAttrDirective {
  /**
   * Initializes a new instance of this object.
   *
   * @param $parse The angular $parse service.
   * @param zIdGeneratorService The service used to generate ids.
   */
  constructor($parse: IParseService, zIdentifierGenerator: ZIdentifierGenerator) {
    super($parse, zIdentifierGenerator, ZIdInputAttribute, ZIdOutputAttribute);
  }
}

module(ZIdentifierModuleName).directive(ZIdInputAttribute, [
  '$parse',
  ZIdentifierGeneratorFactoryName,
  ($parse: IParseService, zIdentifierGenerator: ZIdentifierGenerator): IDirective => new ZIdDirective($parse, zIdentifierGenerator)]);
