import Parser from './parser.js';

class Frowser {
  static getParser(UA, skipFeatureDetection = false) {
    return new Parser(UA, skipFeatureDetection);
  }

  static parse(UA, skipFeatureDetection = false) {
    return new Parser(UA, skipFeatureDetection).getResult();
  }
}

export default Frowser;
