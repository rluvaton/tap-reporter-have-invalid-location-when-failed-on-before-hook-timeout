const { tap} = require('node:test/reporters');
const process = require('node:process');
const {run} = require("node:test");

run({
    files: ['./a.test.js'],
    timeout: 5000,
})
    .compose(tap)
    .pipe(process.stdout);
