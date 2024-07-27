let TOKEN ='6625359131:AAGc5uWI0n5OYH4fiNDynbRhV4dUCJn_Hg0';
let CHAT_ID= -1002047320332;
let URL_API = `https://api.telegram.org/bot${ TOKEN}/sendMessage`;


document.getElementById('tg').addEventListener('submit',function(e){
   e.preventDefault();

   let message= `<b>Ro'yxat</b>\n`;
   message+= `<b>Ism:</b> ${this.name.value}\n`;
   message+= `<b>Raqam:</b> ${this.number.value}\n`;
   message+= `<b>Xabar:</b> ${this.message.value}`;

   
   console.log(message);


  axios.post(URL_API,{
    chat_id:CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res)=>{
    this.name.value = '';
    this.number.value = '';
    this.message.value = ''
  })
  .catch(()=>{
    console.warn(err)
  })
  .finally(()=>{
   console.log('tugadi')
  })
})
