const bs = require('browser-sync').create();

bs.watch('build/**/*.js', function(event, file) {
    //console.log("js changed", file);
    bs.reload("*.js");
})

bs.watch('build/**/*.css', function(event, file) {
    //console.log("css changed", file);
    if (event === "change") {
        bs.reload("*.css");
    }
})

bs.init({
    port: 4500,
    server: "./build",
    serveStatic: [['./build']],
    //cors: true,
    browser: "chrome",  // [ "google chrome", "firefox"]
    open: "local", // false
    reloadOnRestart: true,
    ui: false,
    notify: false
    //scrollProportionally: false
})
