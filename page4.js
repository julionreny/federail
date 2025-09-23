let travellername=prompt("Enter Traveller Name");
console.log(travellername);
let bookingid=Math.floor(100000+Math.random()*900000);
console.log(bookingid);
let TrainName=sessionStorage.getItem("Name");
let TrainPrice=sessionStorage.getItem("Price");
console.log(TrainName,TrainPrice);
let k=0;
let userrid=0;
let starting="";
let ending="";
const trainname = [];
const start = [];
const end = [];

fetch("http://localhost:5000/trains")
  .then(res => res.json())
  .then(data => {
    data.forEach(trains => {
      
      trainname.push(trains.train_name);
      start.push(trains.source);
      end.push(trains.destination);
      
    });
    showTrains();
  })
  .catch(err => console.error(err));

  function showTrains()
  {
    for(let q=0;q<trainname.length;q++)
    {
      if(TrainName.toLowerCase()==trainname[q])
      {
        starting=starting+start[q];
        ending=ending+end[q];
      }

    }
  }

const date=new Date();
    const day=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const currentdate=day+"-"+month+"-"+year;


if(k==0)
{
  userrid=sessionStorage.getItem("useridd");
  k++;
}
console.log("user id is"+userrid);

function gotohome()
{
  window.location.href="page2.html";
}
const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");

a.textContent="User Name : "+travellername;
b.textContent="Train Name : "+(TrainName).toUpperCase();
c.textContent="Price : "+TrainPrice;
d.textContent="Booking ID : "+bookingid;

fetch("http://localhost:5000/booking", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    bookingid,   
    TrainName,   
    userrid,     
    currentdate  
  })
})
.then(res => res.json())
.then(data => console.log("✅ Booking response:", data))
.catch(err => console.error("❌ Error:", err));



function getTicket()
{
  sessionStorage.setItem("TrainName",TrainName);
  sessionStorage.setItem("Start",starting);
  sessionStorage.setItem("End",ending);
  sessionStorage.setItem("BookingId",bookingid);
  sessionStorage.setItem("Price",TrainPrice);
  window.location.href="index.html";

}