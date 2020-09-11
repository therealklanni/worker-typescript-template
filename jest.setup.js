// set up global namespace for worker environment
const makeServiceWorkerEnv = require('service-worker-mock')

Object.assign(global, makeServiceWorkerEnv())
