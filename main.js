msjLindos = ['Miamor','Preciosa','Te quiero mucho','Mi bb <3','Me gusta mucho tu compañia',
    'Sos muy lindona','Quiero bechitos😡','TE BALEO SI TE VEO CON OTRO','DAME BOLA',
    'Me gustan mucho tus besitos de princesita enamorada','Tu mirada de lindona me ilumina cada dia','Te amo mi preciosa',
    'Cuando sea q leas esto quiero besitos (y chocolate)','MI NOVIA LINDA SOLO MIA MIA','Cuando veas esto mandame un mensaje lindo o bala',
    'Mi esquizauria linda','Mi esquiza','Lindona','Preciosona','Mi esquizotomica nuclear pechocha','Pechocha','Me gustan mucho tus besitos','Tu sonrisa es uno de mis mayores tesoros (junto con tus 😏😏)',
    'Cocinas muy rico','Tu 🍒 es una de las cosas mas lindas en el universo universal','Sos casi tan esquiza como linda','Cada dia sos mas hermosa que el anterior','Estoy muy orgulloso de vos y de todo lo que haces',
    'Mi esquizopreciosa','Sos la novia mas linda del mundo mundial','Es muy lindo tenerte cada dia conmigo','Cada vez q sonreis, nace un hada','Todavia no puedo creer todo el tiempo que llevamos',
    'Me encanta tenerte a mi lado','Mi mujer','Mi señora','Mi novia precilindhermosa','Conocerte es una de las mejores cosas q me paso en la vida','Mas te vale q siempre seas mi esquizona linda',
    'Aunque seas una enojona te ves linda cuando te enojas','<3','<3<3<3','♥♥♥','BALAAAAAAAAAAA','Tenemos q terminar death note','Mi abogadona linda','Tenes una hermosa sonrisa',
    'Mi pechocha','Tus besitos son muy lindos','Sos la mejor novia del mundo','MIAAAAaAaAAaaaaAa5654da6f5sa6ad','balita<3',':3','Quiero criar un gato con vos',
    'Q lindo es haberte conocido','Mi pechochochochochochcocha','Mi enojona','Mi enojosauria','Tus tetas son DEMASIADO lindas <3'
]
msjActual = 'Miamor'
phs =['photo1.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo6.jpg','photo7.jpg','photo8.jpg']
phActual = 'photo1.jpg'
function changeMessage(){
    document.getElementById("message").textContent = getRandomString(msjLindos)
}

function getRandomString(strings) {
    do {
        let randomIndex = Math.floor(Math.random() * strings.length);
        msjNuevo = strings[randomIndex]
    } while (msjActual == msjNuevo);
    msjActual = msjNuevo
    return msjNuevo;
}
function changePhoto() {
    let phNuevo = ''
    do {
        let randomIndex = Math.floor(Math.random() * phs.length);
        phNuevo = phs[randomIndex]
    } while (phActual == phNuevo);
    phActual = phNuevo
    // aca se deberia cambiar el elemento <img src="photo1.jpg" alt="Miamor"> por <img src=phNuevo alt="Miamor">
    document.querySelector('img').src = phNuevo;
}