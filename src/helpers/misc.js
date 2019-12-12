import {mergeWith} from 'lodash-es';

const environment = {
  browser: window != null
};

export function getEnvironment() {
  return environment;
}

export function merge(objects) {
  return mergeWith({}, ...objects, mergeCustomizer);
}

function mergeCustomizer(targetValue, sourceValue) {
  if (Array.isArray(targetValue)) {
    return sourceValue;
  }
}
