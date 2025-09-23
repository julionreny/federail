const seats = document.querySelectorAll('.seat.available, .seat.premium');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seats.forEach(s => s.classList.remove('selected'));
    seat.classList.add('selected');
    const seatType = seat.classList.contains('premium') ? 1 : 2;
    handleSelectedSeat(seat.textContent, seatType);
  });
});



let ptrainid = [];
let ntrainid = [];

fetch("http://localhost:5000/pseats")
  .then(res => res.json())
  .then(data => {
    data.forEach(pseats => {
      ptrainid.push(pseats.train_id);
    });
    console.log("Premium Train IDs:", ptrainid);
  })
  .catch(err => console.error(err));

fetch("http://localhost:5000/nseats")
  .then(res => res.json())
  .then(data => {
    data.forEach(trains => {
      ntrainid.push(trains.train_id); // ✅ fixed
    });
    console.log("Normal Train IDs:", ntrainid);
  })
  .catch(err => console.error(err));
const trainName = sessionStorage.getItem("trainName").toLowerCase();
console.log(trainName);

ttrainid=[];
ttrainname=[];
ttrainprice=[]

fetch("http://localhost:5000/trains")
  .then(res => res.json())
  .then(data => {
    data.forEach(trains => {
      ttrainid.push(trains.train_id); 
      ttrainname.push(trains.train_name);
      ttrainprice.push(trains.price);// ✅ fixed
    });
    console.log("Normal Train IDs:", ntrainid);
  })
  .catch(err => console.error(err));

  
let tt="";
let tttpr=0;
  let count=0;
function handleSelectedSeat(seatNumber, seatType) {
  console.log(seatNumber, seatType);

  if(count==0)
  {
    tt=tt+trainName;
    count++;
  }
  let tid=0
  let tpr=0;
  let ttpr=0;
  let ftpr=500;
  
  for(let q=0;q<ttrainid.length;q++)
  {
    if(ttrainname[q]==trainName)
    {
        tid=ttrainid[q];
        tpr=ttrainprice[q];
        ttpr=ttrainprice[q];
        break;
    }
  }
  if(seatType==1)
  {
    let found=0;
    for(let i=0;i<ptrainid.length;i++)
    {
        if(ptrainid[i]==tid)
        {
            found=1;
        }
        

    }
    if(found==0)
    {
        window.alert("no premium seats available now");
    }
    else
    {
        ftpr=ftpr+tpr;
        console.log(ftpr);
    }
  }
  else
  {
    console.log(tpr);
  }
  console.log(ttpr,ftpr);
  const kk=document.getElementById("confirm");
  kk.style.display="none";

  const priceshow=document.getElementById("p");
  if(seatType==1)
  {
    priceshow.textContent="price: "+ftpr;
    tttpr=ftpr;
    priceshow.style.display="block";
    
    kk.style.display="block";
  }
  else
  {
    priceshow.textContent="price: "+ttpr;
    priceshow.style.display="block";
    tttpr=ttpr;
    
  kk.style.display="block";
  }
   
  
}
const tttrainname = [];
const source = [];
const destination = [];

function confirmticket() {
  fetch("http://localhost:5000/trains")
    .then(res => res.json())
    .then(data => {
     
      tttrainname.length = 0;
      source.length = 0;
      destination.length = 0;

      data.forEach(trains => {
        tttrainname.push(trains.train_name);
        source.push(trains.source);
        destination.push(trains.destination);
      });

      console.log("Train names:", tttrainname);
      console.log("Sources:", source);
      console.log("Destinations:", destination);

      const payment = document.getElementById("confirmpage");
      const pg = document.getElementById("TRAINAME");

      
      const currentText = pg.textContent;

      if (currentText !== tt.toUpperCase()) {
        pg.textContent = tt.toUpperCase();
        payment.style.display = "block";
      }

      
      for (let i = 0; i < source.length; i++) {
        if (tttrainname[i].toLowerCase() === tt.toLowerCase()) {
          const kg = document.getElementById("startend");
          kg.textContent = `${source[i]}  --->   ${destination[i]}`;
          break;
        }
      }

    
      const paybutt = document.getElementById("paymoney");
      paybutt.textContent = `Pay Rs.${tttpr}`;
    })
    .catch(err => console.error(err));
}



function paymoney()
{
  sessionStorage.setItem("Name",tt);
sessionStorage.setItem("Price",tttpr);
    window.location.href="page4.html";
    
    
    

}
console.log(k+"bsuwqgbswgsjygwvs");

