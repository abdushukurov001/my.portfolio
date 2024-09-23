let TOKEN ='7597406786:AAHk4DubZT96zxY_Qm1s0FzH64evyaX6xK8';
let CHAT_ID = '-1002392730094'; // Kanal nomi bilan
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
  e.preventDefault();

  let message = `<b>Ro'yxat</b>\n`;
  message += `<b>Ism:</b> ${this.name.value}\n`;
  message += `<b>Raqam:</b> ${this.number.value}\n`;
  message += `<b>Xabar:</b> ${this.message.value}`;

  console.log(message);

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res) => {
    this.name.value = '';
    this.number.value = '';
    this.message.value = '';
    console.log('Xabar yuborildi!');
  })
  .catch((err) => {
    console.warn('Xatolik:', err);
  })
  .finally(() => {
    console.log('Tugadi');
  });
});
