function handleUpdate(update) {
  if (update.message) {
    const text = update.message.text || '';
    if (text.startsWith('/start')) {
      sendMessage(update.message.chat.id, MESSAGES.start.it); // default lang
    } else if (text.startsWith('/help')) {
      sendMessage(update.message.chat.id, MESSAGES.help.it);
    }
  }
}

function sendMessage(chatId, text, buttons) {
  const url = `https://api.telegram.org/bot${TELEGRAM_API_KEY}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: text,
    reply_markup: buttons ? JSON.stringify({ inline_keyboard: buttons }) : undefined
  };
  UrlFetchApp.fetch(url, { method: 'post', payload });
}
