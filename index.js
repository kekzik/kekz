const token = '525299598:AAFSIRKqKAT19-ZJfjOU6HRkS-_sTFYgCVI'; // токен
const TelegramBot = require('node-telegram-bot-api'); // библиотека

// Включить опрос сервера
const bot = new TelegramBot(token, {polling: true});

// Простая команда без параметров.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});