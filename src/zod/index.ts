import * as core from '@actions/core';

console.log('an input script is: ', core.getInput('script'));

export * from './literals-enums';

core.setOutput('result', 'This is the result of the action');
