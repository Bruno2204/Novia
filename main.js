msjLindos = ['Miamor','Preciosa','Te quiero mucho','Mi bb <3','Me gusta mucho tu compañia',
    'Sos muy lindona','Quiero bechitos😡','TE BALEO SI TE VEO CON OTRO','DAME BOLA',
    'Me gustan mucho tus besitos de princesita enamorada','Tu mirada de lindona me ilumina cada dia','Te amo mi preciosa',
    'Cuando sea q leas esto quiero besitos (y chocolate)','MI NOVIA LINDA SOLO MIA MIA','Cuando veas esto mandame un mensaje lindo o bala',
    'Mi esquizauria linda','Mi esquiza','Lindona','Preciosona','Mi esquizotomica nuclear pechocha','Pechocha','Me gustan mucho tus besitos','Tu sonrisa es uno de mis mayores tesoros (junto con tus 😏😏)',
    'Cocinas muy rico','Tu 🍒 es una de las cosas mas lindas en el universo universal','Sos casi tan esquiza como linda','Cada dia sos mas hermosa que el anterior','Estoy muy orgulloso de vos y de todo lo que haces',
    'Mi esquizopreciosa','Sos la novia mas linda del mundo mundial','Es muy lindo tenerte cada dia conmigo','Cada vez q sonreis, nace un hada','Todavia no puedo creer todo el tiempo que llevamos',
    'Me encanta tenerte a mi lado','Mi mujer','Mi señora','Mi novia precilindhermosa'
]
msjActual = 'Miamor'

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