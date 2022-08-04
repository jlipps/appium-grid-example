const {remote} = require('webdriverio')

/** @type {import('webdriverio').RemoteOptions */
const OPTS = {
  hostname: 'localhost',
  port: 4444,
  connectionRetryCount: 0,
}

const CAPS = {
  platformName: 'iOS',
  'appium:platformVersion': '15.5',
  'appium:automationName': 'XCUITest',
  'appium:browserName': 'Safari',
  'appium:noReset': true,
}

async function test() {
  /** @type {import('webdriverio').Browser<'async'>} */
  const driver1 = await remote({...OPTS, capabilities: {...CAPS, 'appium:deviceName': 'iPhone 13'}})

  /** @type {import('webdriverio').Browser<'async'>} */
  const driver2 = await remote({...OPTS, capabilities: {...CAPS, 'appium:deviceName': 'iPhone 12'}})

  // can do drivery stuff here

  await driver1.deleteSession()
  await driver2.deleteSession()
}

if (require.main === module) {
  test().catch(err => {
    throw err
  });
}
