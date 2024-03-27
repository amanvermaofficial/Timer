const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const timesEnd = document.querySelector(".giveaway")
const items = document.querySelectorAll(".deadline-format h4")
const deadline = document.querySelector(".deadline")
const temp = new Date()
let tempDay = temp.getDay();
let tempDate = temp.getDate();
let tempMonth = temp.getMonth();
let tempYear = temp.getFullYear();

let futureDate = new Date(tempYear,tempMonth,tempDate+10,11,30)
let day=futureDate.getDay();
day=weekdays[day]
const date = futureDate.getDate();
let month = futureDate.getMonth();
month=months[month]
let year = futureDate.getFullYear();
const hour=futureDate.getHours()
const min=futureDate.getMinutes()

timesEnd.innerHTML =`giveaway Ends on ${day} , ${date} ${month} ${year} ${hour}:${min}am`

const futureTime=futureDate.getTime()

function getRemaindingTime(){
  const today=new Date().getTime()
  const t=futureTime-today

  const DayOne = 24*60*60*1000;
  const hourOne = 60*60*1000;
  const minOne =60*1000

  const day =Math.floor(t/DayOne)
  const hour = Math.floor((t%DayOne)/hourOne)
  const min = Math.floor((t%hourOne)/minOne)
  const sec = Math.floor((t%minOne)/1000)

  const values=[day,hour,min,sec];
  function format(value){
    if(value<10){
      return (`0${value}`)
    }
    return value
  }

  items.forEach((item,index)=>{
    item.innerHTML=format(values[index])
  })

  if(t<10){
    clearInterval(countdown)
    deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }

}

let countdown=setInterval(getRemaindingTime,1000)