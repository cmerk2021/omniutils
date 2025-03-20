const stringUtils = require('./modules-cjs/string.cjs')
const arrayUtils = require('./modules-cjs/array.cjs')
const objectUtils = require('./modules-cjs/object.cjs')
const dateUtils = require('./modules-cjs/date.cjs')
const HttpClient = require('./modules-cjs/http.cjs')
const dataValidation = require('./modules-cjs/validation.cjs')
const colorUtils = require('./modules-cjs/color.cjs')
const Timer = require('./modules-cjs/timer.cjs')
const RunService = require('./modules-cjs/runservice.cjs')
const tempStorage = require('./modules-cjs/tempstorage.cjs')
const OmniUtils = require("./modules-cjs/omniutils.cjs")

module.exports = {
    stringUtils,
    arrayUtils,
    objectUtils,
    dateUtils,
    HttpClient,
    dataValidation,
    colorUtils,
    Timer,
    RunService,
    tempStorage,
    OmniUtils,
}

if (typeof queueMicrotask === 'function') {
    queueMicrotask(() => {
      OmniUtils.internal.isEmpty();
    });
  } else {
    setTimeout(() => {
      OmniUtils.internal.isEmpty();
    }, 0);
  }

process.on('uncaughtException', (error) => {
    OmniUtils.internal.error(error)
});