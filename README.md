# Description

This package is the dynamic id generator for AngularJS.  

See [@zthun/zidentifier.core](https://www.npmjs.com/package/@zthun/zidentifier.core) for the general problem and solution that this package attempts to solve.  

# How to Use

Install the package from npm into your project.  

```sh
npm install @zthun/zidentifier.angularjs --save
```

In your Angular main module, add the zthun.zidentifier module to your list of dependencies.

```typescript
import * as ng from 'angular';
ng.module('my-module', ['zthun.zidentifier']);
```

This gives you access to the z-id attribute directives.  You can now dynamically generate ids based on your root component.

```html
<div id="root">
    <div data-z-id="component">
        <div data-z-id="child-one"></div>
        <div data-z-id="child-two"></div>
    </div>
</div>
```

The attribute can be bound to context data as well.

```html
<div id="root">
    <div data-z-id="component">
        <div data-ng-repeat="item in items" data-z-id="child-{{item.id}}">
        </div>
    </div>
</div>
```

This will output the following HTML.

```html
<div id="root">
    <div id="root-component">
        <div id="root-component-child-one"></div>
        <div id="root-component-child-two"></div>
    </div>
</div>
```

You can also use this for labels.

```html
<div id="root">
    <form id="root-form">
        <label z-for-id="input">My Label</label>
        <input z-id="input" type="text">
    </form>
</div>    
```

This outputs the following HTML.



# Contribute

You will need the source repository first.

```sh
git clone https://github.com/zthun/zidentifier.angularjs
```

You can also fork the repository in preparation for a pull request back to the master branch.

Once you have the repository, you can build the solution using the following commands.

```sh
npm install
npm run make
npm pack
```
