const id=[];
const names = [];
const mails = [];
const passwords = [];



fetch("http://localhost:5000/users")
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      id.push(user.user_id)
      names.push(user.name);
      mails.push(user.email);
      passwords.push(user.password);
    });
    showUsers();
  })
  .catch(err => console.error(err));

function showUsers() {
  for (let i = 0; i < names.length; i++) {
    console.log(`${id[i]} ${names[i]} | ${mails[i]} | ${passwords[i]}`);
  }
}


function logincheck() {
    const name = document.getElementById("username").value;
    const mail = document.getElementById("email").value;
    const pw = document.getElementById("password").value;

    let found = false;

    for (let i = 0; i < names.length; i++) {
        if (name === names[i] && mail === mails[i] && pw === passwords[i]) {
            found = true;
            let userid=id[i];
            sessionStorage.setItem("useridd",userid);
            window.location.href="page4.html";


            window.location.href = "page2.html";
            break;
        }
    }

    if (!found) {
        window.alert("Invalid credentials");
    }
}

//P A G E T W O
fact=["The First Train in India was the Red Hill Railway",
    "The Vivek Express running between Dibrugarh and Kanyakumari is longest route in the SubContinent",
    "Ghorakpur Railway Station has the longest platform in the World",
    "Mathura Junction is the largest Railway Junction in India"
]
function datecalc()
{
    const date=new Date();
    const day=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const currentdate=day+"-"+month+"-"+year;
    const d=document.getElementById("Date");
    d.textContent=currentdate;
}
let i=0;
function factgen()
{
    i++;
    const facts=document.getElementById("facts");
    facts.textContent=fact[i];
    if(i==3)
    {
        i=0;
    }

}


factgen();
setInterval(factgen,3000);
datecalc();
setInterval(datecalc,5000);


const trainid=[]
const trainname = [];
const start = [];
const end = [];
const price = [];
const sid=[];
const sname=[];


fetch("http://localhost:5000/stations")
  .then(res => res.json())
  .then(data => {
    data.forEach(station => {
      sid.push(station.station_id);
      sname.push(station.station_name);
      
    });
    showS();
  })
  .catch(err => console.error(err));

fetch("http://localhost:5000/trains")
  .then(res => res.json())
  .then(data => {
    data.forEach(trains => {
      trainid.push(trains.train_id);
      trainname.push(trains.train_name);
      start.push(trains.source);
      end.push(trains.destination);
      price.push(trains.price);
    });
    showTrains();
  })
  .catch(err => console.error(err));



console.log(trainid.length);

    
function showTrains() {
  for (let i = 0; i <trainname.length; i++) {
    
    console.log(`${trainid[i]} ${trainname[i]} ${start[i]} | ${end[i]} | ${price[i]}`);
    

  }
}

function showS() {
  console.log("the length i s"+sid.length);
  for (let i = 0; i < sid.length; i++) {
    console.log(`${sid[i]}  ${sname[i]}`);
    document.getElementById(`s${i+1}`).textContent=`${sid[i]} : ${sname[i]}`;
  }
}

function searchtrains() {
  const pop = document.getElementById("popup");
  const back = document.getElementById("back");
  pop.style.display = "block";
  back.style.opacity = "0.3";

  const from = document.getElementById("from").value.toLowerCase();
  const to = document.getElementById("to").value.toLowerCase();

  let foundtrains = [];
  let foundprice = [];


  for (let k = 1; k <= 3; k++) {
    document.getElementById("inside" + k).style.display = "none";
    document.getElementById("trainname" + k).textContent = "";
    document.getElementById("price" + k).textContent = "";
  }


  for (let j = 0; j < trainname.length; j++) {
    if ((from == start[j] && to == end[j]) || (to == start[j] && from == end[j])) {
      foundtrains.push(trainname[j]);
      foundprice.push(price[j]);
    }
  }

  
  for (let i = 0; i < foundtrains.length; i++) {
    let in1 = document.getElementById("inside" + (i + 1));
    in1.style.display = "block";
    document.getElementById("trainname" + (i + 1)).textContent = foundtrains[i].toUpperCase();
    document.getElementById("price" + (i + 1)).textContent = foundprice[i];
  }


  document.getElementById("from2").textContent = from.toUpperCase();
  document.getElementById("to2").textContent = to.toUpperCase();

  if (foundtrains.length === 0) {
    window.alert("NO TRAINS FOUND IN THESE ROUTES");
    closee();
  }
}


function closee()
{
    const pop=document.getElementById("popup");
  const back=document.getElementById("back");
  pop.style.display="none";
  back.style.opacity="1.0";
  console.log("hi");
}
function bookTrain(buttonId) {
    
    const btn = document.getElementById(buttonId);

    
    const trainName = btn.querySelector("[id^='trainname']").textContent.trim();
    const price = btn.querySelector("[id^='price']").textContent.trim();

    
    if (trainName !== "" && trainName !== "TRAINNAME") {
        
        booking(trainName, price);  
    } else {
        alert("No train available for booking!");
    }
}




function booking(tname,price)
{
  
  
sessionStorage.setItem("trainName", tname);
window.location.href = "page3.html";
}
function sharedetails(a,b)
{
    console.log(a,b);

}

const hh = document.getElementById("hh");
let a = 0;

function blinker() {
    if (a === 0) {   // use === for comparison
        a = 1;
        hh.style.opacity="0.5"
        
    } else {
        a = 0;
        hh.style.opacity="0.1";
        
    }
}

setInterval(blinker, 500);


// for   PPPPPAAAAAGGGGGEEEE   THREEEEEE

