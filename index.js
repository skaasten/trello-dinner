var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var Trello = require("trello");
var trello = new Trello(process.env.TRELLO_APP_ID,
                        process.env.TRELLO_USER_TOKEN);
app.set('dinnerBoardId', process.env.DINNER_BOARD_ID);
app.get('/week', function(req, res) {
    var cards = trello.getCardsOnBoard(
        app.get('dinnerBoardId'),
        function() {
            console.log(arguments);
        }
    );
    res.send('This week\'s dinners');
});

app.listen(app.get('port'), function () {
    console.log('Listening on port', app.get('port'));
    console.log('Dinner board id:', app.get('dinnerBoardId'));
});
