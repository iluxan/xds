const $ =  (s) => document.querySelectorAll(s)[0]
const stateGroups = {
  'Home zero state': ['create-pages', 'zero-state', 'buttons-url', 'what-guests'],
  'Home create url': ['create-pages', 'zero-state', 'create-url', 'what-guests'],
  'Home create page': ['create-pages', 'urls', 'buttons-page', 'what-guests'],
  'Create page / default hours': ['page', 'default-hours'],
  'Create page / custom hours': ['page', 'custom-hours']
}
const stateGroupsFirst = Object.keys(stateGroups)[0]

function init() {
  const $el = document.createElement('div')
  $el.innerHTML = `
    <div class="input-ellipsis" style="position: absolute; top:0; right:0;">
      <select class="statesChange">
        ${Object.keys(stateGroups).map(key => `<option value="${key}">${key}</option>`)}
      </select>
    </div>  
  `
  document.body.appendChild($el)
}
function off () {
  for (let group in stateGroups) {
    stateGroups[group].forEach((s) => {
      $([`#${s}`]).classList.add('hidden')
    })
  }
}
function on (group) {
  off()
  stateGroups[group].forEach((s) => {
    $(`#${s}`).classList.remove('hidden')
  })
}

init()
off()
on(stateGroupsFirst)
$('.statesChange').addEventListener('change', (ev) => {
  on(ev.target.value)
})