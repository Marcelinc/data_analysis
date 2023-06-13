const fs = require('fs')
const readline = require('readline')

const statusy = ['zrealizowane','anulowane','zrealizowane','zrealizowane','zrealizowane','zrealizowane']
const statusy2 = ['zrealizowane','w trakcie', 'anulowane']
const sposobPlatnosci = ['blik','przelew','za pobraniem','karta płatnicza']

const suppliers =  fs.readFileSync('suppliers.csv','utf8').split('\n')

var csv = ''
csv+='"order_id";"status";"platnosc";"kosztZamowienia";"wagaPrzesylki";"oplataZaDostawe";"kosztCalkowityZamowienia";"dataZlozeniaZamowienia";"dataRealizacjiZamowienia";"dostawca_id";"client_id"\n'
const createOrders = (orderValue,wagaProduktow) => {
    for(let i=0;i<1000;i++){

        let status = statusy[Math.floor(Math.random()*6)]
        let platnosc = sposobPlatnosci[Math.floor(Math.random()*4)]
        let kosztZamowienia = orderValue[i]
        let wagaPrzesylki = Math.round(wagaProduktow[i])
        let oplataZaDostawe = 0
        let kosztCalkowityZamowienia = 0

        let dataZlozeniaZamowienia = Math.floor(Math.random()*998)
        let dataRealizacjiZamowienia
        if(status === 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia
        else if(status!== 'w trakcie' && status !== 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia+1
        else null

        let supplierId = Math.floor(Math.random()*5)
        let supplierData = suppliers[supplierId].split(';')
        if(wagaPrzesylki <= 1 ) oplataZaDostawe = supplierData[3]
        if(wagaPrzesylki>1 && wagaPrzesylki<=2) oplataZaDostawe = supplierData[4]
        if(wagaPrzesylki > 2 && wagaPrzesylki <=4) oplataZaDostawe = supplierData[5]
        if(wagaPrzesylki > 4 && wagaPrzesylki <=8) oplataZaDostawe = supplierData[6]
        if(wagaPrzesylki > 8) oplataZaDostawe = supplierData[7]

        kosztCalkowityZamowienia = orderValue[i]+parseFloat(oplataZaDostawe)
        //console.log(kosztCalkowityZamowienia,',',wagaPrzesylki,',',kosztZamowienia)

        let client_id = i

        csv += i+';'+status+';'+platnosc+';'+parseFloat(kosztZamowienia)+';'+wagaPrzesylki+';'+parseFloat(oplataZaDostawe)+';'+parseFloat(kosztCalkowityZamowienia)+';'+
        dataZlozeniaZamowienia+';'+dataRealizacjiZamowienia+';'+supplierId+';'+parseInt(client_id)+';'+'\n'
    }

    //orders for random clients
    for(let i=1000; i<1500;i++){
        let status = statusy[Math.floor(Math.random()*6)]
        let platnosc = sposobPlatnosci[Math.floor(Math.random()*4)]
        let kosztZamowienia = orderValue[i]
        let wagaPrzesylki = Math.round(wagaProduktow[i])
        let oplataZaDostawe = 0
        let kosztCalkowityZamowienia = 0

        let dataZlozeniaZamowienia = Math.floor(Math.random()*998)
        let dataRealizacjiZamowienia
        if(status === 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia
        else if(status!== 'w trakcie' && status !== 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia+1
        else null

        let supplierId = Math.floor(Math.random()*5)
        let supplierData = suppliers[supplierId].split(';')
        if(wagaPrzesylki <= 1 ) oplataZaDostawe = supplierData[3]
        if(wagaPrzesylki>1 && wagaPrzesylki<=2) oplataZaDostawe = supplierData[4]
        if(wagaPrzesylki > 2 && wagaPrzesylki <=4) oplataZaDostawe = supplierData[5]
        if(wagaPrzesylki > 4 && wagaPrzesylki <=8) oplataZaDostawe = supplierData[6]
        if(wagaPrzesylki > 8) oplataZaDostawe = supplierData[7]

        kosztCalkowityZamowienia = orderValue[i]+parseFloat(oplataZaDostawe)
        //console.log(kosztCalkowityZamowienia,',',wagaPrzesylki,',',kosztZamowienia)

        let client_id = Math.floor(Math.random()*1000)

        csv += i+';'+status+';'+platnosc+';'+parseFloat(kosztZamowienia)+';'+wagaPrzesylki+';'+parseFloat(oplataZaDostawe)+';'+parseFloat(kosztCalkowityZamowienia)+';'+
        dataZlozeniaZamowienia+';'+dataRealizacjiZamowienia+';'+supplierId+';'+parseInt(client_id)+';'+'\n'
    }
    

    for(let i=0; i<16;i++){
        let status = statusy2[Math.floor(Math.random()*3)]
        let platnosc = sposobPlatnosci[Math.floor(Math.random()*4)]
        let kosztZamowienia = orderValue[i]
        let wagaPrzesylki = Math.round(wagaProduktow[i])
        let oplataZaDostawe = 0
        let kosztCalkowityZamowienia = 0

        const actualDatedId = [1000,1002,1004,1006,1008,1010,1012,1014,1016]

        let dataZlozeniaZamowienia = actualDatedId[Math.floor(Math.random()*9)]
        let dataRealizacjiZamowienia
        if(status === 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia
        else if(status!== 'w trakcie' && status !== 'anulowane')
            dataRealizacjiZamowienia = dataZlozeniaZamowienia+1
        else null

        let supplierId = Math.floor(Math.random()*5)
        let supplierData = suppliers[supplierId].split(';')
        if(wagaPrzesylki <= 1 ) oplataZaDostawe = supplierData[3]
        if(wagaPrzesylki>1 && wagaPrzesylki<=2) oplataZaDostawe = supplierData[4]
        if(wagaPrzesylki > 2 && wagaPrzesylki <=4) oplataZaDostawe = supplierData[5]
        if(wagaPrzesylki > 4 && wagaPrzesylki <=8) oplataZaDostawe = supplierData[6]
        if(wagaPrzesylki > 8) oplataZaDostawe = supplierData[7]

        kosztCalkowityZamowienia = orderValue[i]+parseFloat(oplataZaDostawe)
        //console.log(kosztCalkowityZamowienia,',',wagaPrzesylki,',',kosztZamowienia)

        let client_id = Math.floor(Math.random()*1000)

        let j = 1500+i

        csv += j+';'+status+';'+platnosc+';'+parseFloat(kosztZamowienia)+';'+wagaPrzesylki+';'+parseFloat(oplataZaDostawe)+';'+parseFloat(kosztCalkowityZamowienia)+';'+
        dataZlozeniaZamowienia+';'+dataRealizacjiZamowienia+';'+supplierId+';'+parseInt(client_id)+';'+'\n'
    }


    fs.writeFileSync('orders.csv',csv)
}

module.exports = {createOrders}
