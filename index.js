const messages = [
    {
        name: "Shikamaru???",
        nameColor: "#6fb2e5",
        prefix: "Владелец", 
        avatar: "img/Shika.jpg", 
        text: "Добро ищешь? Ну так иди в церковь",
        time: "1:24:27 PM",
        reply: null
    },
    {
        name: "Umka",
        nameColor: "#e74c3c",
        prefix: "Водалаз", 
        avatar: "img/Umka.jlg", 
        text: "Montagem amostra amigo",
        time: "1:24:07 PM",
        reply: null
    },
    {
        name: "йиксовокаяМ",
        nameColor: "#2ecc71",
        prefix: "аназаГ рыС",
        avatar: "img/Mayak.jpg",
        text: "Агромні ділда",
        time: "1:24:37 PM",
        reply: null
    },
    {
        name: "Жоски хоумлендер",
        nameColor: "#f1c40f",
        prefix: "Хохлы-----я",
        avatar: "img/Home.jpg",
        text: "Мам я хочу быть как Газан",
        time: "1:24:42 PM",
        reply: null
    },
    {
        name: "Itz_Tensh1 ♡ | #Abbys",
        nameColor: "#3498db",
        prefix: "Мамбо старший",
        avatar: "img/Tensh1.jpg",
        text: "Ооо. БУХАНКА КИРПИЧА, ебля, я скучал за этой штукой",
        time: "1:27:80 PM",
        reply: null
    },
    {   
        name: "Астрал/Шляпа",
        nameColor: "#3498db",
        prefix: "Владелец",
        avatar: "img/Astral.jpg",
        text: "Гб",
        time: "1:35:27 PM",
        reply: { name: "Itz_Tensh1 ♡ | #Abbys", text: "Ооо. БУХАНКА КИРПИЧА, ебля..." }
    },
    {
        name: "Iris | Deep Purple",
        nameColor: "#ca9ef8", 
        prefix: "Бурмалденс",
        prefixBg: "#1c3519",  
        prefixColor: "#4ebd57", 
        avatar: "img/Iris.jpg",
        text: "📊 Голосование за бан Itz_Tensh1 ♡ | #Abbys началось\nСостояние: до 5 голосов, голосовать могут все участники\n\n— Команды \"за бан @1614667859\" / \"против бана @1614667859\"",
        time: "10:22:35 PM",
        reply: { name: "Астрал/Шляпа", text: "Гб" }, 
        buttons: [
            [{ text: "👎 За бан" }, { text: "👍 Живи" }], 
            [{ text: "❌ Отменить голосование" }]        
        ]
    }
];
// --------------------------------------------------

const chatContainer = document.getElementById('chat');

messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'message';

  
    const avatarHtml = msg.avatar 
        ? `<img src="${msg.avatar}" class="avatar" alt="avatar">` 
        : `<div class="avatar" style="background-color: ${msg.nameColor}25; color: ${msg.nameColor};">${msg.name[0]}</div>`;
    
 
    const replyHtml = msg.reply ? `
        <div class="reply">
            <div class="reply-name">${msg.reply.name}</div>
            <div class="reply-text">${msg.reply.text}</div>
        </div>` : '';

  
    const currentBg = msg.prefixBg ? msg.prefixBg : 'rgba(127, 145, 164, 0.15)';
    const currentColor = msg.prefixColor ? msg.prefixColor : '#7f91a4';
    const prefixHtml = msg.prefix ? `<span class="prefix" style="background-color: ${currentBg}; color: ${currentColor};">${msg.prefix}</span>` : '';

    let buttonsHtml = '';
    if (msg.buttons) {
        buttonsHtml = '<div class="bot-buttons">';
        msg.buttons.forEach(row => {
            buttonsHtml += '<div class="button-row">';
            row.forEach(btn => {
                buttonsHtml += `<div class="inline-btn">${btn.text}</div>`;
            });
            buttonsHtml += '</div>';
        });
        buttonsHtml += '</div>';
    }

  
    div.innerHTML = `
        ${avatarHtml}
        <div style="display: flex; flex-direction: column; width: 100%;">
            <div class="bubble">
                <div class="name-container">
                    <span class="name" style="color: ${msg.nameColor};">${msg.name}</span>
                    ${prefixHtml}
                </div>
                ${replyHtml}
                <div class="text">${msg.text}</div>
                <div class="time">${msg.time}</div>
            </div>
            ${buttonsHtml}
        </div>
    `;
    chatContainer.appendChild(div);
});
