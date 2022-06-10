import {transform, transformStyleAttribute} from '@parcel/css-wasm';

export {default, browserslistToTargets} from '@parcel/css-wasm';

// Hydrate Uint8Array into Buffer

function transformWrapper(config) {
  let result = transform(config);
  return {
    ...result,
    // Hydrate Uint8Array into Buffer
    code: Buffer.from(result.code.buffer),
    map: result.map ? Buffer.from(result.map.buffer) : result.map,
  };
}
function transformStyleAttributeWrapper(config) {
  let result = transformStyleAttribute(config);
  return {
    ...result,
    code: Buffer.from(result.code.buffer),
  };
}

export {
  transformWrapper as transform,
  transformStyleAttributeWrapper as transformStyleAttribute,
};
