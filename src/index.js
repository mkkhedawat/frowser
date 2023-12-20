import Parser from './parser.js';
import { BROWSER_MAP, PLATFORMS_MAP, OS_MAP } from './constants.js';

class Frowser {
  static getParser(UA, skipFeatureDetection = false) {
    return new Parser(UA, skipFeatureDetection);
  }

  static parse(UA, skipFeatureDetection = false) {
    return new Parser(UA, skipFeatureDetection).getResult();
  }
}

export { BROWSER_MAP, PLATFORMS_MAP, OS_MAP };
export default Frowser;
