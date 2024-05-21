msjLindos = ['Miamor','Preciosa','Te quiero mucho','Mi bb <3','Me gusta mucho tu compañia',
    'Sos muy lindona','Quiero bechitos😡','TE BALEO SI TE VEO CON OTRO','DAME BOLA',
    'Me gustan mucho tus besitos de princesita enamorada','Tu mirada de lindona me ilumina cada dia','Te amo mi preciosa',
    'Cuando sea q leas esto quiero besitos (y chocolate)','MI NOVIA LINDA SOLO MIA MIA'
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