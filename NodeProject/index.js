var http = require('http');

//Dependencies
var dep = {
    config: require('./build/config'),          //All configurations will be holding in this.
    getFile: require('gethtml'),                //Custom module created for getting html content and calling REST API
    strformat: require('strformat'),            //For string format installed from npm
    formidable: require('formidable'),          //For getting form fields insatlled from npm
    noderestclient: require('node-rest-client') //for calling REST api installed form npm
}

//createServer(requestListener)
var server = http.createServer((request, response) => {
    if (request.url == '/registration') {
       dep.getFile.getFormDataAndCallRegService(request, response, dep);
    } else {
        dep.getFile.showRegistrationForm(request, response, dep);
    }
});

//Serve Start
function startServer(req, res) {
    server.listen(dep.config.serverport);
    console.log("Server running on port 2020");
}

//Starting server
startServer();