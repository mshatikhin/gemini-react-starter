gemini.suite("App test", (suite) => {
    suite.setUrl("/")
        .setCaptureElements("#root")
        .capture("plain");
});