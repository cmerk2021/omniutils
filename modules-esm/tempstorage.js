let storage = {}

function setItem(key, value) {
    storage[key] = value
}

function getItem(key) {
    return storage[key]
}

function removeItem(key) {
    storage[key] = null
}

export {
    setItem,
    getItem,
    removeItem
}