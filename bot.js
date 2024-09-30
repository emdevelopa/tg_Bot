const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
// const token = "7308059446:AAEYK9d7nZSeWdr_Fb5tJ9g4UF3gniK2TUg";


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Define the keyboard
  const opts = {
    reply_markup: {
      keyboard: [
        [{ text: 'Say Hello' }],
        [{ text: 'Option 2' }],
        [{ text: 'Option 3' }],
      ],
      resize_keyboard: true, // Adjusts the keyboard size
      one_time_keyboard: false, // Keep the keyboard open
    },
  };

  bot.sendMessage(chatId, 'Welcome! Please choose an option:', opts);
});

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase(); // Convert the text to lower case to handle case insensitive matching

  // Respond to predefined messages
  if (text === 'hello') {
    bot.sendMessage(chatId, 'Hello! What do you want me to do?');
  } else if (text === 'say hello') {
    bot.sendMessage(chatId, 'Hello! How can I assist you today?');
  } else if (text === 'option 2') {
    bot.sendMessage(chatId, 'You selected Option 2');
  } else if (text === 'option 3') {
    bot.sendMessage(chatId, 'You selected Option 3');
  } else {
    bot.sendMessage(chatId, 'Please use the /start command to see options.');
  }
});