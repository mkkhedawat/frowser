import test from 'ava';
import Frowser from '../../src';
import Parser from '../../src/parser';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1165';
const browser = Frowser.getParser(UA, true);

test('Frowser`s constructor returns a Parser instance', (t) => {
  t.truthy(browser instanceof Parser);
});

test('Frowser`s constructor fails if UA is empty', (t) => {
  t.throws(() => Frowser.getParser());
});

test('Frowser.parse parses UA and returns result', (t) => {
  t.deepEqual(Frowser.parse(UA, true), browser.getResult());
});
