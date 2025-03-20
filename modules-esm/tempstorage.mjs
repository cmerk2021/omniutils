import OmniUtils from "./omniutils.mjs"
var tempExport

try {
    OmniUtils.internal.debug("tempStorage module imported.")

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

tempExport = {
    setItem,
    getItem,
    removeItem
}
} catch (error) {
    OmniUtils.internal.error(error)
}

export default tempExport