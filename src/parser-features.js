import Utils from './utils.js';
import { OS_MAP, PLATFORMS_MAP } from './constants.js';

/*
 * More specific goes first
 * test - matches
 * describe - method which detect and overwrite if applicable
 */

export default {
  os: {
    [OS_MAP.MacOS]: {
      describe(os, UA, parsedResult) {
        if (os.name === 'macos' && 'ontouchend' in document) {
          os.name = OS_MAP.iOS;
          os.spoofed = true;
          delete os.version;
          delete os.versionName;
        }
        return os;
      },
    },
  },
  platform: {
    [PLATFORMS_MAP.desktop]: {
      [OS_MAP.MacOS]: {
        describe(platform, UA, parsedResult) {
          if ('ontouchend' in document) {
            platform.type = PLATFORMS_MAP.tablet;
            platform.spoofed = true;
          }
          return platform;
        },
      },
    },
  },
};
