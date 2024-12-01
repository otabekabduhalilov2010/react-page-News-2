document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7741118087:AAHd-E4s9_eObRdq2y0wifF6wgu2ldVBk9s';  // Замените на ваш токен
    const chat_id = '-4541015938';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;
  
    const data = {
      chat_id: chat_id,
      text: message
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });

  const scoreElem = document.querySelector('#score')
const coin = document.querySelector('#coin')
const buyUpgrade = document.querySelector('#buyUpgrade')
const result = document.querySelector('#result')



let score = 0
let clickValue = 1
let upgradeCost = 100


coin.addEventListener('click', () => {
  score = score + clickValue
  scoreElem.innerText = score

  showCoinValue(event.clientX, event.clientY,
    clickValue
  )
})


buyUpgrade.addEventListener('click', () => {
    if(score >= upgradeCost) {
      score = score - upgradeCost
      clickValue = clickValue +2
      upgradeCost = upgradeCost *2
  
      scoreElem.innerText = score
  
      buyUpgrade.innerText = `Купить Улучшение ${upgradeCost}`
  
      result.innerText = `Куплено за каждый клик ${clickValue}`
    
    }  else{
      result.innerText = `У вас недостаточно коинов😢  `
    }
  })
  
  
  
  
  function showCoinValue(x,y, value) {
    const coinValueElem = document.createElement('div')
    coinValueElem.innerText = `+${clickValue}`
    coinValueElem.className = 'coin-value'
    coinValueElem.style.position = 'absolute'
    coinValueElem.style.left = `${x}px`
    coinValueElem.style.top = `${y}px`
    coinValueElem.style.color = 'white'
    coinValueElem.style.opacity = 1
    document.body.append(coinValueElem)
  
    setTimeout(() => {
      coinValueElem.style.transform = 'translateY(-30px)'
      coinValueElem.style.opacity = 1
    }, 0);
  
    setTimeout(() => {
      coinValueElem.remove()
    }, 300);
  }