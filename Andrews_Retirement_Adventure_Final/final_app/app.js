const retirement=new Date('2027-07-27T00:00:00');
const birthday=new Date('2026-07-27T00:00:00');
const quotes=['☕ One less coffee until retirement.','🎣 The fish do not know it is Tuesday.','🏕️ The camper is waiting.','🦘 Adventure can start with a walk.','🎬 Sci‑Fi marathon loading...'];
function update(){const now=new Date();const diff=retirement-now;if(diff<=0){document.body.innerHTML='<div class="overlay"><h1>🎂 Happy 60th Birthday Dad!</h1><h2>⏰ Time To Clock Off For Good!</h2><p>🏕️ Retirement Adventure Started</p></div>';return;}let s=Math.floor(diff/1000);let d=Math.floor(s/86400);s%=86400;let h=Math.floor(s/3600);s%=3600;let m=Math.floor(s/60);let sec=s%60;document.getElementById('countdown').innerHTML=`${d} Days<br>${h} Hours ${m} Minutes ${sec} Seconds`;document.getElementById('quote').innerText=quotes[new Date().getDate()%quotes.length];}
setInterval(update,1000);update();
