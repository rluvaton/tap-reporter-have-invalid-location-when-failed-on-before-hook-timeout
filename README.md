Running:

```shell
$ node ./run-tests.js

TAP version 13
# Subtest: should work
ok 1 - should work
  ---
  duration_ms: 1.079375
  ...
# Subtest: ./a.test.js
not ok 1 - ./a.test.js
  ---
  duration_ms: 5001.997458
  location: 'undefined:undefined:undefined' <------------- invalid
  failureType: 'testTimeoutFailure'
  error: 'test timed out after 5000ms'
  code: 'ERR_TEST_FAILURE'
  stack: |-
    async Promise.allSettled (index 0)
  ...
1..2
# tests 2
# suites 0
# pass 1
# fail 0
# cancelled 1
# skipped 0
# todo 0
# duration_ms 5006.3885

Process finished with exit code 0



```
