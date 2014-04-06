jquery-findWithSelf
=================

`$.find` including current elements.

## Usage

Include on your page, after jQuery. Supports AMD.

```js
var $div = $('<div class="container"> <!-- --> </div>');

var $container = $div.findWithSelf('.container');
```

For details, refer to [find](http://api.jquery.com/find/) API.
