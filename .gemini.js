module.exports = {
    rootUrl: "http://localhost:9000",
    gridUrl: "http://127.0.0.1:4444/wd/hub",

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};