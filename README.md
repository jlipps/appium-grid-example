To run this example:

1. Make sure Appium 2 and the XCUITest driver are available
1. `npm install` in this directory
1. Update any of the capabilities that don't make sense for your system (iOS versions, etc...)

Now, in 5 different terminal windows opened up to this dir, run:
1. `appium --config appium1.yml`
1. `appium --config appium2.yml`
1. `java -jar /path/to/selenium.jar node --config node1.toml`
1. `java -jar /path/to/selenium.jar node --config node2.toml`
1. `java -jar /path/to/selenium.jar hub`

At this point, in another window, you can run `node test.js` to start 2 sessions simultaneously via
the grid, and end them.
