'use strict';

var switcher = document.getElementById('jsSwitcher');
switcher.value = 0;
var features = ['', 'float', 'float-grid', 'flex-horizontal', 'flex-vertical', 'multicol', 'basic-grid', 'advanced-grid'];
var message = ['No layout', 'Float-based layout', 'Float fixed grid', 'Flexbox horizontal', 'Flexbox vertical', 'Multicolumn', 'Basic grid', 'More complicated grid'];
var body = document.body;

function switchFeature(e) {
  for (var i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i];
    body.className = features[i];
  }
}

switcher.addEventListener('change', switchFeature);
switcher.addEventListener('input', switchFeature);