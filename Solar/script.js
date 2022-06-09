function createUserCard(user) {
    if (!user) return;
  
    // destructuring user object
    const {
      name: {first: firstName, last: lastName},
      gender,
      phone,
      email = 'TEST',
      picture: {thumbnail: avatar}
    } = user;
  
    return `<div class="card">
        <img class="card__image" src="${avatar}" alt="${firstName} ${lastName}"/>
        <div class="card__info info">
          <h2 class="info__name">${firstName} ${lastName}</h2>
          <p class="info__text">${phone}</p>
          <p class="info__text">${email}</p>
          <p class="info__text">${gender}</p>
        </div>
      </div>`;
  }

  





  const content =document.querySelector('body')



function generateContentHTML(){

    return `<header class="header">
    <div class="logo"></div>
    <h3>Зеленый тариф для дома и бизнеса</h3>
    <h1>Солнечная электростанция</h1>
    <h2>с доходом от 1000 $ в месяц</h2>
    <div class="button" id="btn"></div>
    <div class="webchats">
        <a href="#" class="tg"></a>
        <a href="#" class="inst"></a>
        <a href="#" class="fb"></a>
        <a href="#" class="whatsapp"></a>
    </div>
</header>
<main>
    <article class="art">
        <h2>УСЛУГИ</h2>
        <div class="wrap">
            <div class="paragraf">
                <h3>Полный комплект солнечной электростанции</h3>
                <p>74 модели солнечных панелей, 31 модель инверторов, провода с повышенной устойчивостью к атмосферным условиям, качественные соединители, контроллеры зарядов и надежные гелевые аккумуляторы с увеличенным сроком службы.</p>
            
            </div>
            <div class="paragraf">
                <h3>Подбор оборудования с максимальной производительностью</h3>
                <p>Подбираем солнечные панели с учетом расположения Вашего дома, количеством прямого и рассеянного излучения, для того, чтобы Ваша электростанция - вырабатывала максимальное количество электроэнергии и окупилась как можно быстрее.</p>
            </div>
            <div class="paragraf">
                <h3>Монтаж оборудования в соответствии с ГОСТом</h3>
                <p>Монтаж производится в точном соответствии с ГОСТом, с учетом закона о «Зеленом тарифе» и требованиями Облэнерго. При этом, мы учитываем, чтобы солнечная станция имела максимально возможную производительность.</p>
            </div>
            <div class="paragraf">
                <h3>Помощь в подключении к «Зеленому тарифу»</h3>
                <p>Всю бюрократическую процедуру по подключению Вашей электростанции к «Зеленому тарифу», мы берем на себя, в том числе по увеличению договорной мощности вашего дома. При заказе солнечной электростанции эта услуга абсолютно бесплатна.</p>
            </div>
           
        </div>
        <aside class="picture-batery"></aside>
       
    </article>
    <div class="art">
        <h2>ЗЕЛЕНЫЙ ТАРИФ</h2>
        <div class="box-green-tarif">
            <div class="left-zone">
                <div class="sections">
                    <a href="#">продажа</a>
                    <a href="#">закрепление</a>
                    <a href="#">ограничения</a>
                </div>
                <div class="info">
                    <div class="image"></div>
                    <div class="content">
                        <p>Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</p>
                        <div class="btn">
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                    </div>
                </div>
                <div class="wrap-green">
                    <div class="items">
                        <div class="item ">
                            <h3>Гарантия выкупа</h3>
                            <p>Гарантированный выкуп электроэнергии государством - прописано в НКРЕ №447 </p>
                        </div>
                        
                        <div class="item ">
                            <h3>Долгосрочно</h3>
                            <p>это проект, поддерживаемый международными инвестиционными организациями</p>
                        </div>
                        <div class="item ">
                            <h3>Вид вложения</h3>
                            <p>Альтернатива банковским депозитам, окупаемость - от 16% до 18% годовых</p>
                        </div>
                        <div class="item ">
                            <h3>Высокая ставка</h3>
                            <p>Самая высокая тарифная ставка в европе - 0,16 евро</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <aside class="right-zone">
                <h3 class="bold-text">«Зеленый тариф» — это особые тарифные условия, которые позволяют частным домохозяйствам не только потреблять, но и продавать выработанное домашними солнечными электростанциями электричество в электросеть общего пользования.</h3>
                <div class="img"></div>
            </aside>
        </div>
    </div>
    <div class="mid-box">
        <div class="wrapp">
            <p class="citation">«Солнечная электростанция — идеальное вложение средств в свою энергонезависимость и пассивный доход»</p>
        </div>
    </div>
    <div class="wrapper">
        <div class="clients">
            <div class="left-clients">
                <h2 class="header">НАШИ КЛИЕНТЫ</h2>
                <div class="img-clients"></div>
                <div class="btn-client-slider">
                    <div class="left"></div>
                    <div class="right" id="client"></div>
                </div>
            </div>
            
            
            <aside class="right-clients">
                <h3>Солнечная электростанция 30 кВт подключенная по Зеленому Тарифу</h3>
                <ul>
                    <li>Расположение: Харьковская обл., г. Харьков</li>
                    <li>Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13 900 $.</li>
                    <li>Смонтирована: апрель 2017 г.</li>
                    <li>Срок службы: 25-30 лет</li>
                </ul>
                <div class="btn-clients"></div>
            </aside>
        </div>
        <div class="five-steps">
            <div class="steps-content">
                <h2 class="header">5 ШАГОВ К СОБСТВЕННОЙ ЭЛЕКТРОСТАНЦИИ</h2>
                <p class="numerous">01</p>
                <h3>Заявка или звонок</h3>
                <p>Оставляете заявку на нашем сайте или связываетесь с нами по телефону или в мессенджерах.</p>
                <p class="numerous">02</p>
                <h3>Консультация и замер на объекте</h3>
                <p>Мы просчитываем более 10- 15 вариантов солнечной станции на Вашем участке, чтобы предложить Вам один наиболее выгодный.</p>
                <p class="numerous">03</p>
                <h3>Заключение договора</h3>
                <p>Заключается договор, благодаря которому, вы будете застрахованы от некачественного оборудования и срыва сроков.</p>
                <p class="numerous">04</p>
                <h3>Монтаж СЭС</h3>
                <p>Наши специалисты производят монтаж солнечных батарей, проводки и инверторов, при необходимости изготавливают опоры.</p>
                <p class="numerous">05</p>
                <h3>Получение дохода от государства</h3>
                <p>После подключения к «Зеленому тарифу», вы получаете доход за каждый киловатт, выработанный на Вашей солнечной электростанции по зафиксированному тарифу на момент подключения.</p>
            </div>
            <aside class="img-five-steps"></aside>
        </div>
    </div>
</main>   
<footer class="fotter-wrap">
    <div class="form">
        <div class="submit-client">
            <h2 class="head-footer">ОСТАВИТЬ ЗАЯВКУ</h2>
            <form action="/Solar/принятие-инпутаю.txt" method="post" class="form-all">
                <div>
                    <input type="text" name="" id="" class="inputs-n" placeholder="Имя">
                </div>
                <div class="phone">
                    <input type="tel" name="" id="" class="inputs-n" placeholder="Телефон">
                    
                </div> 
                <div class="btn-footer" id="foot_btn"></div>
            </form>
        </div>
        <aside class="contacts">
            <h2 class="head-footer">КОНТАКТЫ</h2>
            <p class="item-contact">Центральный офис:<br/>г. Москва, ул,Гоголя 13, 1й этаж</p>
            <p class="item-contact">Представительство в Киеве:<br/>г. Киев, ул. Є. Коновальця, 103 оф. 410</p>
            <p class="item-contact">Представительства в Харькове, Одессе, Ростове, Сочи, Белгороде</p>
            <p class="item-contact">+7 987 654-54-56<br/> +38 067 504-32-57</p>
            <p class="item-contact">Ежедневно 08:00 - 20:00</p>
        </aside>
    </div>
    
    <div class="bottom">
        <a href="#" class="politics">Политика конфиденциальности</a>
        <div class="foot-lable"></div>
        <div class="foot-web">
            <a href="#" class="tg"></a>
            <a href="#" class="inst"></a>
            <a href="#" class="fb"></a>
            <a href="#" class="whatsapp"></a>
        </div>
    </div>
</footer> `
}
let contentHTML= '';
contentHTML+=generateContentHTML()
content.innerHTML=contentHTML



const formForClient = document.querySelector(".fotter-wrap")
const btn = document.querySelector("#btn")
const btnClient= document.querySelector(".btn-clients") 
function handleButtonClick() {
    formForClient.scrollIntoView({block: "center", behavior: "smooth"});
 }
 
 btn.addEventListener('click', handleButtonClick)
 btnClient.addEventListener('click', handleButtonClick)

btn.addEventListener("mouseover", (e)=> {
    e.preventDefault();
    btn.classList.remove('button');
    btn.classList.add('button-on')
 })
btn.addEventListener("mouseout", (e)=>{
    e.preventDefault()
    btn.classList.remove('button-on');
    btn.classList.add('button')
})
const btnFoot= document.querySelector("#foot_btn")
btnFoot.addEventListener("mouseover", (e)=> {
    e.preventDefault();
    btnFoot.classList.remove('btn-footer');
    btnFoot.classList.add('btn-footer-on')
 })
btnFoot.addEventListener("mouseout", (e)=>{
    e.preventDefault()
    btnFoot.classList.remove('btn-footer-on');
    btnFoot.classList.add('btn-footer')
})
// btnFoot.addEventListener('subimt',alert('подтвердить'))
const arrowRight = document.querySelector("#client-right")
function listPhotoRight(){}