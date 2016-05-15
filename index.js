var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/week', function(req, res) {
    res.send('This week\'s dinners');
});

app.listen(app.get('port'), function () {
    console.log('Listening on port', app.get('port'));
});
