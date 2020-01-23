const { describe, it, after, before } = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Sample automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://enterprise.taskworld.com/login');
            });

            afterEach (async () => {
                await page.quit();
            });

            it ('Find the input and submit buttons', async () => {
                    await page.findInputAndButton();
                    expect(result.emailEnabled).to.equal(true);
                    expect(result.passwordEnabled).to.equal(true);
                    expect(result.loginButtonText).to.include('Log In');

            });

            it ('Log in using fake email and password', async () => {
                const result = await page.loginTaskWorld();
                expect(result.length).to.be.equal("Invalid email or password.")
            });
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();