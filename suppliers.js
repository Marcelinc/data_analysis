const fs = require('fs')

const names = ['UPS Standard','DPD','GLS','UPS Express Saturday','DHL Express']
const basicPayment = [30.50,23,79,26,20,29,89,25,71]
const additionalPayment = [{do1Kg: 8.95,do2Kg: 8.95,do4Kg: 8.95,do8Kg: 10.04,powyzej8Kg: 13.98},
    {do1Kg: 6.98,do2Kg: 6.98,do4Kg: 8.95,do8Kg: 13.98,powyzej8Kg: 15.07},
    {do1Kg: 15.07,do2Kg: 15.07,do4Kg: 19.01,do8Kg: 19.01,powyzej8Kg: 20.97}]

var csv = ''
csv+= '"dostawca_id";"nazwa";"oplataPodstawowa";"do1Kg";"do2Kg";"do4Kg";"do8Kg";"powyzej8Kg"\n'
names.map((n,index) => {
    let basic = basicPayment[Math.floor(Math.random()*5)]
    let additional = additionalPayment[Math.floor(Math.random()*3)]

    csv+=index+';'+n+';'+basic+';'+additional.do1Kg+';'+additional.do2Kg+';'+additional.do4Kg+';'+additional.do8Kg+';'+additional.powyzej8Kg+'\n'
})
fs.writeFileSync('suppliers.csv',csv)
