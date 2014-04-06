jquery-findWithSelf
=================

`$.find` including current elements.

Don't worry about wrapping HTML or repeating boilerplate code in order to include the current jQuery set in the scope of elements searched by `$.find`.

## Install

Via bower as `jquery-findWithSelf`.

```sh
bower install --save jquery-findWithSelf
```

## Usage

Include on your page, after jQuery. Supports AMD.

```js
var $div = $('<div class="container"> <!-- --> </div>');

var $container = $div.findWithSelf('.container');
```

For details, refer to [find](http://api.jquery.com/find/) API.
