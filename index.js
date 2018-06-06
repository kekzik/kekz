var TelegramBot = require('node-telegram-bot-api');
var token = '525299598:AAFSIRKqKAT19-ZJfjOU6HRkS-_sTFYgCVI';
var bot = new TelegramBot(token, {polling: true});
var notes = [];
bot.onText(/\/start/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];
    notes.push({'uid': userId, 'text': 'пиши мне сообщения'});
    bot.sendMessage(userId, 'Привет');
});
setInterval(function () {
    for (var i = 0; i < notes.length; i++) {
        bot.sendMessage(notes[i]['uid'], notes[i]['text']);
    }
}, 5000);