# Description

This package is the dynamic id generator for AngularJS.  

See [@zthun/identifier.core](https://www.npmjs.com/package/@zthun/identifier.core) for the general problem and solution that this package attempts to solve.

<p style="color:orange;">
  WARNING:  This will be the last major.minor version published for @zthun/identifier.angularjs.  The only remaing patches that will be published will be for the case of one of the following criteria.  
</p>

<ul style="color:orange">
  <li>A bug is found in the current production release of @zthun/identifier.angularjs that is critical and there is no workaround.</li>
  <li>A release of angular 1.7.x that will cause the current production version of @zthun/identifier.angularjs to stop working.</li>
</ul>

# How to Use

Install the package from npm into your project.  

```sh
npm install @zthun/identifier.angularjs --save
```

In your Angular main module, add the zthun.zidentifier module to your list of dependencies.

```typescript
import { module } from 'angular';
module('my-module', ['zthun.identifier']);
```

This gives you access to the zid attribute directive.  You can now dynamically generate ids based on your root component.

```html
<div id="root">
    <div zid="component">
        <div zid="child-one"></div>
        <div zid="child-two"></div>
    </div>
</div>
```

The attribute can be bound to context data as well.

```html
<div id="root">
    <div zid="component">
        <div ng-repeat="item in items" zid="child-{{item.id}}">
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
        <label zfor="input">My Label</label>
        <input zid="input" type="text">
    </form>
</div>    
```

# Build and Test

You will need the source repository first.

```sh
git clone https://github.com/zthun/zidentifier.angularjs
```

You can also fork the repository in preparation for a pull request back to the master branch.

Once you have the repository, you can build the solution using the following commands.

```sh
npm install
npm run make
```

# Contribute

No further pull requests will be accepted for features or breaking changes of this package.  Only critical bugs and patch fixes will be considered.  If you wish to continue this package, it is better to fork and rebrand the package for your needs.
