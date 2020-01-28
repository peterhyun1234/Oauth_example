var express = require('express');

var app = express();

// configuration ===============================================================
app.set('port', process.env.PORT || 3345);

app.get('/', function(req, res) {
    res.send('Root');
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});