const fs = require('fs')
const {createOrders} = require('./order')

var productCSV = ''

const products = [{id:1,name:'Teleskop N 200/1000 Explorer 200P EQ5',productType: 'teleskop',producer:'SkyWatcher',catalogPrice:4060,available:'yes',
    ogniskowa:'1000',podlaczenie:'2"',pozornePoleWidzenia:'brak',typTeleskopu:'Reflektor',konstrukcjaPrzedmiotu:'Newton',
    aperturaTeleskopu:'200',maxSensownePow:'400',montazT:'paralaktyczny',waga:39.7,polecaneDla:'wszyscy'
    },{
        id:2,name:'Teleskop Schmidt-Cassegrain SC 203/2032 EdgeHD 800 AVX GoTo',productType: 'teleskop',producer:'Celestron',catalogPrice:14259,
        available:'yes',ogniskowa:'2032',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'Reflektor',konstrukcjaPrzedmiotu:'Cassegrain EDGEHD',
        aperturaTeleskopu:'203',maxSensownePow:'406',montazT:'paralaktyczny',waga:28,polecaneDla:'wszyscy'
    },{
        id:3,name:'Teleskop Dobsona ProDob N 304/1500 DOB II',productType: 'teleskop',producer:'Omegon',catalogPrice:5400,
        available:'yes',ogniskowa:'1500',podlaczenie:'2"',pozornePoleWidzenia:'brak',typTeleskopu:'Reflektor',konstrukcjaPrzedmiotu:'Newton',
        aperturaTeleskopu:'304',maxSensownePow:'600',montazT:'dobson',waga:33,polecaneDla:'zaawansowani'
    },{
        id:4,name:'Filtry Filtr księżycowy Premium 1,25"',productType:'filtr',producer:'Omegon',catalogPrice:90,
        available:'yes',ogniskowa:'brak',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',konstrukcjaPrzedmiotu:'Księżycowy',
        aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.01,polecaneDla:'brak'
    },{
        id:5,name:'Filtr Pro OIII CCD 1,25"',productType:'filtr',producer:'Omegon',catalogPrice:536,
        available:'yes',ogniskowa:'brak',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',konstrukcjaPrzedmiotu:'Mgławicowy',
        aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.01,polecaneDla:'brak'
    },{
        id:6,name:'Filtry f/2 Highspeed SII CMOS 1,25"',productType:'filtr',producer:'Baader',catalogPrice:401,
        available:'yes',ogniskowa:'brak',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',konstrukcjaPrzedmiotu:'Mgławicowy',
        aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.01,polecaneDla:'brak'
    },{
        id:7,name:'Filtr przepustowy 2" IR (685 nm)(precyzyjnie polerowane dla równoległych powierzchni)',productType:'filtr',producer:'Baader'
        ,catalogPrice:650,available:'yes',ogniskowa:'brak',podlaczenie:'2"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'Przepustowy',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.01,polecaneDla:'brak'
    },{
        id:7,name:'Okular Super Plössl 40 mm 1,25"',productType:'okular',producer:'Omegon',
        catalogPrice:130,available:'yes',ogniskowa:'40',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'Super-Plössl',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.05,polecaneDla:'brak'
    },{
        id:8,name:'Okular Super Plössl 20mm 1,25"',productType:'okular',producer:'Omegon',
        catalogPrice:130,available:'yes',ogniskowa:'20',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'Super-Plössl',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.05,polecaneDla:'brak'
    },{
        id:9,name:'Okular Plössl 32mm 1,25"',productType:'okular',producer:'Levenhuk',
        catalogPrice:289,available:'yes',ogniskowa:'32',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'Plössl',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.05,polecaneDla:'brak'
    },{
        id:10,name:'Aparat fotograficzny veLOX 290 C Color',productType:'aparat',producer:'Omegon',
        catalogPrice:1350,available:'yes',ogniskowa:'brak',podlaczenie:'1.25"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'Aparaty do astrofotografii',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.09,polecaneDla:'brak'
    },{
        id:11,name:'Aparat fotograficzny ASI 183 MC Color',productType:'aparat',producer:'ZWO',
        catalogPrice:1350,available:'yes',ogniskowa:'brak',podlaczenie:'2"',pozornePoleWidzenia:'brak',typTeleskopu:'brak',
        konstrukcjaPrzedmiotu:'brak',aperturaTeleskopu:'brak',maxSensownePow:'brak',montazT:'brak',waga:0.09,polecaneDla:'brak'
    }]

    var orderValue = []
    var wagaProduktow = []
    for(let i =0;i<1000;i++){
        orderValue.push(0)
        wagaProduktow.push(0)
    }

    productCSV+= '"pozycjaZamowienia_id";"product_id";"product_name";"product_type";"product_producer";"product_catalog_price";"quantity";"transactionPrice";"product_available";'+
    '"ogniskowa";"podlaczenie";"pozornePoleWidzenia";"typTeleskopu";"konstrukcjaPrzedmiotu";"aperturaTeleskopu";"maxSensownePow";"montazT";"waga";'+
    '"polecaneDla";"opinia";"order_id"\n'
    //dla każdego zamowienia przynajmniej jedna pozycja
for(let i=0;i<1515;i++){
    let product = products[Math.floor(Math.random()*11)]
    let quantity = Math.floor(Math.random()*6)

    let transactionPrice = product.catalogPrice*quantity

    let clientOpinion = Math.floor(Math.random()*6+1)
    let orderId = i

    orderValue[orderId] = orderValue[orderId]+transactionPrice
    wagaProduktow[orderId] = wagaProduktow[orderId]+product.waga

    productCSV+= i+';'+product.id+';'+product.name+';'+product.productType+';'+product.producer+';'+product.catalogPrice+';'+
        quantity+';'+transactionPrice+';'+product.available+';'+product.ogniskowa+';'+product.podlaczenie+';'+
        product.pozornePoleWidzenia+';'+product.typTeleskopu+';'+product.konstrukcjaPrzedmiotu+';'+product.aperturaTeleskopu+';'+
        product.maxSensownePow+';'+product.montazT+';'+product.waga+';'+product.polecaneDla+';'+clientOpinion+';'+orderId+'\n'
}

//pozycje dla losowych zamowien
for(let i=0;i<200;i++){
    let product = products[Math.floor(Math.random()*6)]
    let quantity = Math.floor(Math.random()*6)

    let transactionPrice = product.catalogPrice*quantity

    let clientOpinion = Math.floor(Math.random()*6+1)
    let orderId = Math.floor(Math.random()*1000)

    orderValue[orderId] = orderValue[orderId]+transactionPrice
    wagaProduktow[orderId] = wagaProduktow[orderId]+product.waga

    productCSV+= i+';'+product.id+';'+product.productType+';'+product.producer+';'+product.catalogPrice+';'+
        quantity+';'+transactionPrice+';'+product.available+';'+product.ogniskowa+';'+product.podlaczenie+';'+
        product.pozornePoleWidzenia+';'+product.typTeleskopu+';'+product.konstrukcjaPrzedmiotu+';'+product.aperturaTeleskopu+';'+
        product.maxSensownePow+';'+product.montazT+';'+product.waga+';'+product.polecaneDla+';'+clientOpinion+';'+orderId+'\n'
}

fs.writeFileSync('products.csv',productCSV)

createOrders(orderValue,wagaProduktow)