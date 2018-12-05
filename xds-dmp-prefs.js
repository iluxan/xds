const $ =  (s) => document.querySelectorAll(s)[0]
const stateGroups = {
  'Preferences': ['prefs-home', 'prefs'],
  'Calendar': ['prefs-home', 'calendar'],
  'Thank You': ['thanks-home'],
}
const stateGroupsFirst = Object.keys(stateGroups)[0]

function init() {
  const $el = document.createElement('div')
  $el.innerHTML = `
    <div class="input-ellipsis" style="position: absolute; top:20px; left:10px;">
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