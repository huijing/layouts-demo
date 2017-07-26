const switcher = document.getElementById('jsSwitcher')
switcher.value = 0
const features = ['', 'float', 'float-grid', 'flex-horizontal', 'flex-vertical', 'multicol', 'basic-grid', 'advanced-grid']
const message = ['No layout', 'Float-based layout', 'Float fixed grid', 'Flexbox horizontal', 'Flexbox vertical', 'Multicolumn', 'Basic grid', 'More complicated grid']
const body = document.body

function switchFeature(e) {
  for (let i = 0; i <= parseInt(e.target.value); i++) {
    document.querySelector('.js-status').textContent = message[i]
    body.className = features[i]
  }
}

switcher.addEventListener('change', switchFeature)
switcher.addEventListener('input', switchFeature)
