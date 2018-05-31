describe('Google Search Tests', function () {
    context('for demo purposes', function () {

        beforeEach(function (client, done) {
            client.resizeWindow(800, 600);
            done();
        });

        afterEach(function (client, done) {
            done();
        });

        it('run a basic google search', function (browser) {
            var google = browser.page.googlePage();
            google
                .navigate()
                .expect.element('@body').to.be.present.before(1000)
            google
                .assert.visible('@searchBox')
                .enterSearchValue('nightwatch')
                .sendKeys('@searchBox', browser.Keys.ENTER)
            google.expect.element('@main').to.be.present.before(2000)
            google.waitForElementPresent('@main')
            browser.saveScreenshot('/search-result.png')
            google.assert.containsText('@main', 'The Night Watch')
        });
    });
});