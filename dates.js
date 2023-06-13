const fs = require('fs')

const months = {Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,
    Aug:8,Sep:9,Oct:10,Nov:11,Dec:12}
const quarters = {Jan:1,Feb:1,Mar:1,Apr:2,May:2,Jun:2,Jul:3,
    Aug:3,Sep:3,Oct:4,Nov:4,Dec:4}

var csv = ''
csv+='"date_id";"fullDate";"calendarYear";"monthNumber";"dayNumber";"quarter"\n'
for(let i=0;i<1000;i=i+2){
    let fulldate = new Date(new Date() - Math.random()*(1e+12))
    let fulldateString = fulldate.toString()
    let fulldate2 = new Date(fulldate.getTime()+Math.floor(Math.random()*7+1)*3680000*24+Math.floor(Math.random()*7+1)*120)
    let fulldate2String = fulldate2.toString()
   // console.log('time:',Math.floor(Math.random()*5))
    //console.log('before:',fulldate)
    //console.log('after:',fulldate2)

    let calendarYear = fulldateString.substring(11,15)
    let monthNumber = months[fulldateString.substring(4,7)]
    let dayNumber = fulldateString.substring(8,10)
    let dayName = fulldateString.substring(0,3)
    let quarter = quarters[fulldateString.substring(4,7)]

    let calendarYear2 = fulldate2String.substring(11,15)
    let monthNumber2 = months[fulldate2String.substring(4,7)]
    let dayNumber2 = fulldate2String.substring(8,10)
    let dayName2 = fulldate2String.substring(0,3)
    let quarter2 = quarters[fulldate2String.substring(4,7)]


    csv += i+';'+fulldateString.substring(0,33)+';'+calendarYear+';'+monthNumber+
        ';'+dayNumber+';'+quarter+'\n'
    csv += i+1+';'+fulldate2String.substring(0,33)+';'+calendarYear2+';'+monthNumber2+
    ';'+dayNumber2+';'+quarter2+'\n'
}

//actual dates
for(let i=0;i<16;i=i+2){
    let fulldate = new Date(2023,Math.floor(Math.random()*12),Math.floor(Math.random()*27),Math.floor(Math.random()*23),
        Math.floor(Math.random()*60),Math.floor(Math.random()*60))

    let fulldateString = fulldate.toString()
    let fulldate2 = new Date(fulldate.getTime()+Math.floor(Math.random()*7+1)*3680000*24+Math.floor(Math.random()*7+1)*120)
    let fulldate2String = fulldate2.toString()

    let calendarYear = fulldateString.substring(11,15)
    let monthNumber = months[fulldateString.substring(4,7)]
    let dayNumber = fulldateString.substring(8,10)
    let dayName = fulldateString.substring(0,3)
    let quarter = quarters[fulldateString.substring(4,7)]

    let calendarYear2 = fulldate2String.substring(11,15)
    let monthNumber2 = months[fulldate2String.substring(4,7)]
    let dayNumber2 = fulldate2String.substring(8,10)
    let dayName2 = fulldate2String.substring(0,3)
    let quarter2 = quarters[fulldate2String.substring(4,7)]

    let j = 1000+i

    csv += j+';'+fulldateString.substring(0,33)+';'+calendarYear+';'+monthNumber+
        ';'+dayNumber+';'+quarter+'\n'
    csv += j+1+';'+fulldate2String.substring(0,33)+';'+calendarYear2+';'+monthNumber2+
    ';'+dayNumber2+';'+quarter2+'\n'

}


fs.writeFileSync('dates.csv',csv)

