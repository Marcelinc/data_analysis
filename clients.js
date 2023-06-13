const fs = require('fs')


const clients = []
var csv = ''

const names = ['Mateusz','Michał','Katarzyna','Ilona','Patryk','Damian','Kinga','Karolina','Magdalena','Jan','Konrad','Mikołaj','Adam','Piotr','Natalia','Agnieszka']
const surnames = ['Nowak','Wójcik','Gajda','Skiba','Dziedzic','Żak','Szczepaniak','Jóźwiak','Mikołajczyk','Szymczak','Czajka','Łukasik']
const cities = [{
    name:'Lublin', adres: '20005 ul.Górna', kraj: 'Polska',kod:'PL'},
    {name:'Warszawa', adres: '00006 ul.Szkolna', kraj: 'Polska',kod:'PL'},
    {name:'Berlin', adres: '10115 Mitte', kraj: 'Niemcy',kod:'DE'},
    {name:'Dortmund', adres: '44263 Arnsberg', kraj: 'Niemcy',kod:'DE'},
    {name:'Paryż', adres: '75006 Saint-Germain-des-Prés', kraj: 'Francja',kod:'FR'},
    {name:'Marsylia', adres: '13010 Marseille 10', kraj: 'Francja',kod:'FR'},
    {name:'Palermo', adres: '90135 Palermo', kraj: 'Włochy',kod:'IT'},
    {name:'Troms', adres: '9379 Gryllefjord', kraj: 'Norwegia',kod:'NO'},
    {name:'Bangkok', adres: '10100 Pom Prap Sattru Phai', kraj: 'Węgry',kod:'HU'},
    {name:'Rabat', adres: '10052 Akkari', kraj: 'Maroko',kod:'MA'}]

for(let i=0;i<=1000;i++){
    let name = names[Math.floor(Math.random() * 16)]
    let surname = surnames[Math.floor(Math.random()*12)]
    let city = cities[Math.floor(Math.random()*10)]
    clients.push({id:i,name,surname,city})
}
csv += '"client_id";"name";"surname";"city";"zipCode";"country";"countryCode"\n'
clients.map(c => {
    csv += c.id+';'+c.name+';'+c.surname+';'+c.city.name+';'+c.city.adres+';'+c.city.kraj+';'+c.city.kod+'\n'
})

fs.writeFileSync('clients.csv',csv)