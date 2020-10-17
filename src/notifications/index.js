import Noty from 'noty'
import 'noty/lib/noty.css'
import 'noty/lib/themes/relax.css'

export function showError (text) {
  new Noty({
    theme: 'relax',
    type: 'error',
    progressBar: true,
    timeout: 2000,
    text
  }).show()
}

export function showSuccess (text) {
  new Noty({
    theme: 'relax',
    type: 'success',
    progressBar: true,
    timeout: 2000,
    text
  }).show()
}
