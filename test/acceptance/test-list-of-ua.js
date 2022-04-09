import test from 'ava';
import yaml from 'yamljs';
import path from 'path';
import Frowser from '../../src';
import FrowserBuild from '../../build/es5';

const listOfUA = yaml.load(path.join(__dirname, 'user-agent-strings.yml'));

const browserNames = Object.keys(listOfUA);

browserNames.forEach((browserName) => {
  listOfUA[browserName].forEach((browser, index) => {
    test(`Test ${browserName} ${index}`, (t) => {
      const parsed = Frowser.parse(browser.ua, true);
      const parsedBuild = FrowserBuild.parse(browser.ua, true);
      t.deepEqual(parsed, browser.spec, `${browser.ua}`);
      t.deepEqual(parsedBuild, browser.spec, `${browser.ua}`);
      t.is(parsed.browser.name, browserName, `${browser.ua}`);
    });
  });
});
