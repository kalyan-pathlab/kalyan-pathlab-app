const TESTS=[
{name:"Complete Blood Count (CBC)",icon:"🩸",mrp:"₹500",price:"₹250"},
{name:"HbA1c",icon:"🩺",mrp:"₹600",price:"₹300"},
{name:"Fasting Blood Sugar (FBS)",icon:"🧪",mrp:"₹150",price:"₹75"},
{name:"Post Prandial Blood Sugar (PPBS)",icon:"🍬",mrp:"₹180",price:"₹90"},
{name:"Lipid Profile",icon:"❤️",mrp:"₹800",price:"₹400"},
{name:"Liver Function Test (LFT)",icon:"🫀",mrp:"₹900",price:"₹450"},
{name:"Kidney Function Test (KFT)",icon:"🫘",mrp:"₹900",price:"₹450"},
{name:"Thyroid Profile",icon:"🦋",mrp:"₹700",price:"₹350"},
{name:"Vitamin B12",icon:"💊",mrp:"₹900",price:"₹450"},
{name:"Vitamin D",icon:"☀️",mrp:"₹1200",price:"₹600"}
];

function renderTests(){
 const box=document.getElementById("test-list"); if(!box)return;
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 box.innerHTML=TESTS.filter(t=>t.name.toLowerCase().includes(q)).map(t=>`
 <article class="test-card"><div class="test-icon">${t.icon}</div><div class="test-main"><b>${t.name}</b><small><s>${t.mrp}</s> &nbsp; <span class="price">${t.price}</span></small></div><a class="book-mini" href="book.html?test=${encodeURIComponent(t.name)}">Book</a></article>`).join("")||'<div class="notice">Test सापडली नाही. WhatsApp वर test चे नाव पाठवा.</div>';
}
function populateBooking(){
 const s=document.getElementById("testSelect"); if(!s)return;
 s.innerHTML=TESTS.map(t=>`<option value="${t.name}">${t.name}</option>`).join("");
 const q=new URLSearchParams(location.search).get("test"); if(q)s.value=q;
 const d=document.querySelector('input[name="date"]'); if(d){const now=new Date();d.min=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);}
}
const booking=document.getElementById("booking");
if(booking)booking.addEventListener("submit",e=>{
 e.preventDefault();
 const d=Object.fromEntries(new FormData(booking).entries());
 const message=`🧪 *KALYAN PATHLAB – HOME SAMPLE COLLECTION BOOKING*%0A%0A`+
 `Namaskar Kalyan Pathlab Team,%0A%0A`+
 `Mala blood test / health checkup booking karaychi aahe.%0A%0A`+
 `👤 *Patient:* ${encodeURIComponent(d.name)}%0A`+
 `📱 *Mobile:* ${encodeURIComponent(d.phone)}%0A`+
 `🧪 *Test / Package:* ${encodeURIComponent(d.test)}%0A`+
 `📅 *Preferred Date:* ${encodeURIComponent(d.date)}%0A`+
 `⏰ *Preferred Time:* ${encodeURIComponent(d.time)}%0A`+
 `🏠 *Home Collection Address:* ${encodeURIComponent(d.address)}%0A`+
 `📝 *Special Note:* ${encodeURIComponent(d.note||"None")}%0A%0A`+
 `कृपया availability, final price/discount आणि home sample collection confirmation कळवा.%0A%0A`+
 `Thank you.%0A*Kalyan Pathlab – Accurate Reports | Better Health*`;
 location.href=`https://wa.me/919870020674?text=${message}`;
});
const pf=document.getElementById("profile-form");
if(pf){
 const saved=JSON.parse(localStorage.getItem("kpProfile")||"{}");
 ["name","phone","city"].forEach(k=>{const el=document.getElementById("p"+k);if(el)el.value=saved[k]||""});
 pf.addEventListener("submit",e=>{e.preventDefault();localStorage.setItem("kpProfile",JSON.stringify(Object.fromEntries(new FormData(pf).entries())));alert("Profile saved.");});
}
renderTests();populateBooking();
if("serviceWorker"in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
