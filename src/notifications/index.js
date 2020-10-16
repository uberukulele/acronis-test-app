import Noty from 'noty'

export function showError (text) {
  new Noty({
    type: 'error',
    progressBar: true,
    timeout: 2000,
    text
  }).show()
}
