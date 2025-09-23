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

const hh=document.getElementById("hh");
let a=0;
function blinker()
{
        if(a=0)
        {
            a=1;
            hh.textContent=""
        }
        else
        {
            a=0;
            hh.textContent="    KOZHIKODE             DELHI           NOIDA               KOLKATTA                COIMBATORE               PUNJAB                MUMBAI               SRINAGAR                 RAJASTAN"
        }

}
setInterval(blinker,5000);