import stringUtils from './modules-esm/string.mjs';
import arrayUtils from './modules-esm/array.mjs';
import objectUtils from './modules-esm/object.mjs';
import dateUtils from './modules-esm/date.mjs';
import HttpClient from './modules-esm/http.mjs';
import dataValidation from './modules-esm/validation.mjs';
import colorUtils from './modules-esm/color.mjs';
import Timer from './modules-esm/timer.mjs';
import RunService from './modules-esm/runservice.mjs';
import tempStorage from './modules-esm/tempstorage.mjs';
import OmniUtils from './modules-esm/omniutils.mjs';

export {
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
};

if (typeof queueMicrotask === 'function') {
    queueMicrotask(() => {
      A.internal.isEmpty();
    });
  } else {
    setTimeout(() => {
      A.internal.isEmpty();
    }, 0);
  }

process.on('uncaughtException', (error) => {
    OmniUtils.internal.error(error)
});