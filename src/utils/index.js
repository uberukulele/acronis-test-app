export function setLocalData (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalData (key) {
  let data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }

  return null
}

export function generateID () {
  let firstPart = (Math.random() * 46656) | 0
  let secondPart = (Math.random() * 46656) | 0
  firstPart = ('000' + firstPart.toString(36)).slice(-3)
  secondPart = ('000' + secondPart.toString(36)).slice(-3)
  return firstPart + secondPart
}
