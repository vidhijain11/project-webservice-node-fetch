# project-webservice-node-fetch
Sample project - Rest api testing using node-fetch library.

### Based on

This suite is currently based on:
- **node-fetch:** `^2.6.1`
- **mochawesome:** `^6.2.1` https://www.npmjs.com/package/mochawesome
- **Mocha:** `8.##.#` https://mochajs.org/ 
- **chai:** `^4.3.4` https://www.npmjs.com/package/chai

## Required software

Make sure nodejs is installed on your Operating system.
Install from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.
- **Node:** `v14.##.#`

### How to setup run test suite

Install the dependencies 
```
npm install
```

To run all the tests [This will by default run in parallel]
```
npx mocha
```

Report will be generated in folder
```
./api-test-report/report.html
```

