import { ZIdentifierTestUtil } from './zidentifier.abstract.directive.spec';

export const ZForIdentifierDirectiveAttribute = 'data-z-for-id';
export const ZForIdentifierDirectiveAttributeToGenerate = 'for';

let testUtil = new ZIdentifierTestUtil();
testUtil.create('ZForIdentifierDirective', ZForIdentifierDirectiveAttribute, ZForIdentifierDirectiveAttributeToGenerate);
