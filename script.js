'use strict';
// SUNTING KANDUNGAN DI SINI. correct ialah indeks jawapan (0 = A, 1 = B, 2 = C).
const QUESTIONS = [
 { image:'scene-cemas.png',alt:'Seorang murid lelaki terkejut apabila sebuah kereta bergerak ketika dia melintas jalan.',question:'Apakah perasaan yang dialami oleh watak dalam gambar ini?',options:['Risau','Cemas','Lega'],correct:1 },
 { image:'scene-risau.png',alt:'Seorang kanak-kanak perempuan kelihatan bimbang di tempat yang sesak dengan orang ramai.',question:'Apakah perasaan watak dalam gambar ini?',options:['Sedih','Takut','Risau'],correct:2 },
 { image:'scene-sedih.png',alt:'Seorang murid perempuan terjatuh dan menangis di tepi jalan.',question:'Apakah perasaan yang dialami oleh watak dalam gambar ini?',options:['Sedih','Lega','Takut'],correct:0 }
];
const $=id=>document.getElementById(id);
let chestId=0;
const chest=(image='')=>{
 const id='treasure-'+chestId++;
 return `<span class="chest" aria-hidden="true">
 <span class="chest-aura"></span><span class="spark spark-one">✦</span><span class="spark spark-two">✧</span>
 <svg class="treasure-svg" viewBox="0 0 340 285" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="${id}-wood" x2="0.1" y2="1"><stop stop-color="var(--wood-light)"/><stop offset=".45" stop-color="var(--wood)"/><stop offset="1" stop-color="var(--wood-dark)"/></linearGradient>
  <linearGradient id="${id}-gold" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="#fff4b1"/><stop offset=".28" stop-color="#ffd36b"/><stop offset=".55" stop-color="#c88524"/><stop offset=".72" stop-color="#ffe387"/><stop offset="1" stop-color="#af6c17"/></linearGradient>
  <linearGradient id="${id}-shade"><stop stop-color="#33110d" stop-opacity=".15"/><stop offset="1" stop-color="#29110c" stop-opacity=".65"/></linearGradient>
  <radialGradient id="${id}-light"><stop stop-color="#fffce0"/><stop offset=".5" stop-color="#ffda54" stop-opacity=".8"/><stop offset="1" stop-color="#ffcc33" stop-opacity="0"/></radialGradient>
  <pattern id="${id}-grain" width="88" height="27" patternUnits="userSpaceOnUse"><path d="M0 7Q22 0 46 8T90 7M-6 21Q23 12 48 21T96 19" fill="none" stroke="#4c240f" stroke-opacity=".2" stroke-width="2"/><path d="M9 12Q24 7 37 12" fill="none" stroke="#fff7d6" stroke-opacity=".22"/></pattern>
 </defs>
 <ellipse cx="177" cy="257" rx="142" ry="17" fill="#493c27" opacity=".18"/>
 <g class="chest-interior"><ellipse cx="169" cy="134" rx="125" ry="89" fill="url(#${id}-light)"/><path d="M48 143L94 111L292 124L246 158Z" fill="#5c3414" stroke="#ffd267" stroke-width="9"/>
 <g class="inside-coins" fill="url(#${id}-gold)" stroke="#a56a16" stroke-width="2"><ellipse cx="107" cy="136" rx="20" ry="10"/><ellipse cx="140" cy="129" rx="22" ry="11"/><ellipse cx="176" cy="143" rx="22" ry="10"/><ellipse cx="210" cy="132" rx="23" ry="11"/><circle cx="159" cy="120" r="17"/><circle cx="198" cy="115" r="18"/><path d="M155 111v18m39-22v17" stroke="#fff2ad" stroke-width="4"/></g></g>
 <g class="chest-base">
 <path d="M246 151L292 125L283 230L241 254Z" fill="url(#${id}-wood)" stroke="#71411e" stroke-width="3"/>
 <path d="M246 151L292 125L283 230L241 254Z" fill="url(#${id}-shade)"/>
 <path d="M48 143L246 153L241 254L57 242Z" fill="url(#${id}-wood)" stroke="#71411e" stroke-width="3"/>
 <path d="M48 143L246 153L241 254L57 242Z" fill="url(#${id}-grain)"/>
 <path d="M53 174L244 184M55 205L243 215" stroke="#4d2818" stroke-opacity=".4" stroke-width="3"/>
 <path d="M48 143L246 153L292 125M55 237L241 249L283 226M246 153L241 249" fill="none" stroke="url(#${id}-gold)" stroke-width="13" stroke-linejoin="round"/>
 <path d="M81 147L87 240M206 153L202 248M269 139L263 237" stroke="url(#${id}-gold)" stroke-width="16"/>
 <path d="M84 149L90 235M209 156L205 243" stroke="#fff0a4" stroke-opacity=".6" stroke-width="2"/>
 <g fill="#9b5f1b" stroke="#ffe39a" stroke-width="1"><circle cx="84" cy="160" r="3"/><circle cx="88" cy="225" r="3"/><circle cx="208" cy="167" r="3"/><circle cx="205" cy="233" r="3"/><circle cx="267" cy="155" r="3"/><circle cx="264" cy="220" r="3"/></g>
 </g>
 <g class="chest-lid">
 <path d="M43 143L42 101Q43 49 91 49L227 57Q257 61 253 110L248 154Z" fill="url(#${id}-wood)" stroke="#855020" stroke-width="3"/>
 <path d="M43 143L42 101Q43 49 91 49L227 57Q257 61 253 110L248 154Z" fill="url(#${id}-grain)"/>
 <path d="M227 57L267 35Q299 44 298 91L292 126L248 154L253 110Q258 72 227 57Z" fill="url(#${id}-wood)" stroke="#875222" stroke-width="3"/>
 <path d="M227 57L267 35Q299 44 298 91L292 126L248 154L253 110Q258 72 227 57Z" fill="url(#${id}-shade)"/>
 <path d="M43 143L42 101Q43 49 91 49L227 57Q257 61 253 110L248 154ZM248 154L292 126L298 91Q299 44 267 35L227 57" fill="none" stroke="url(#${id}-gold)" stroke-width="12" stroke-linejoin="round"/>
 <path d="M83 146L79 101Q78 65 96 50M206 151L209 105Q214 71 204 56M271 139L277 92Q282 63 264 39" fill="none" stroke="url(#${id}-gold)" stroke-width="17"/>
 <path d="M53 101Q53 63 89 61L224 68" fill="none" stroke="#fff2b5" stroke-opacity=".65" stroke-width="3"/>
 <g class="chest-lock"><path d="M141 143V132Q142 116 155 117Q168 117 168 134V144" fill="none" stroke="#e4b34d" stroke-width="7"/><rect x="136" y="138" width="38" height="38" rx="8" fill="url(#${id}-gold)" stroke="#a56c20" stroke-width="2"/><path d="M155 148a5 5 0 0 0-3 9l-1 8h8l-1-8a5 5 0 0 0-3-9" fill="#704019"/></g>
 </g></svg>
 ${image?`<img class="chest-picture" src="assets/${image}" alt="">`:''}
 </span>`;
};
let completed=new Set(),active=null,opening=false,opener=null;
try{const saved=JSON.parse(sessionStorage.getItem('kotak-misteri-v1')||'[]');if(Array.isArray(saved))completed=new Set(saved.filter(x=>Number.isInteger(x)&&x>=0&&x<3));}catch{}
function save(){try{sessionStorage.setItem('kotak-misteri-v1',JSON.stringify([...completed]));}catch{}}
// Audio asli dijana menggunakan Web Audio; tiada lagu atau rakaman luaran.
const audio={ctx:null,music:true,sound:true,timer:null,step:0,musicBus:null,sfxBus:null,
 start(){try{if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return;this.ctx=new C();this.musicBus=this.ctx.createGain();this.musicBus.gain.value=this.music?.2:0;this.musicBus.connect(this.ctx.destination);this.sfxBus=this.ctx.createGain();this.sfxBus.connect(this.ctx.destination);this.timer=setInterval(()=>this.tick(),280);}this.ctx.resume().catch(()=>{});}catch{}},
 tone(freq,duration,offset=0,bus='sfx',volume=.12){if(!this.ctx)return;const t=this.ctx.currentTime+offset,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=bus==='music'?'triangle':'sine';o.frequency.value=freq;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.015);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(bus==='music'?this.musicBus:this.sfxBus);o.start(t);o.stop(t+duration+.02);},
 tick(){if(!this.music||document.hidden||this.ctx?.state!=='running')return;const melody=[523.25,659.25,783.99,0,659.25,587.33,523.25,0,440,523.25,659.25,783.99,698.46,659.25,587.33,0];const n=this.step++%melody.length;if(melody[n])this.tone(melody[n],.3,0,'music',.16);if(n%4===0)this.tone(n<8?130.81:174.61,.7,0,'music',.12);},
 clap(offset){if(!this.ctx)return;const rate=this.ctx.sampleRate,buffer=this.ctx.createBuffer(1,rate*.15,rate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/(rate*.025));const source=this.ctx.createBufferSource(),filter=this.ctx.createBiquadFilter(),g=this.ctx.createGain();filter.type='highpass';filter.frequency.value=900;g.gain.value=.23;source.buffer=buffer;source.connect(filter);filter.connect(g);g.connect(this.sfxBus);source.start(this.ctx.currentTime+offset);},
 effect(kind){if(!this.sound||!this.ctx)return;if(kind==='open')[523,659,784,1047,1319].forEach((f,i)=>this.tone(f,.5,i*.09));if(kind==='wrong'){this.tone(392,.22);this.tone(330,.3,.16);}if(kind==='correct'||kind==='finish'){[523,659,784,1047].forEach((f,i)=>this.tone(f,.45,i*.11));for(let i=0;i<(kind==='finish'?24:12);i++)this.clap(i*.085+Math.random()*.035);}},
 toggle(which){this.start();this[which]=!this[which];if(which==='music'&&this.musicBus)this.musicBus.gain.value=this.music?.2:0;if(which==='sound'&&this.sfxBus)this.sfxBus.gain.value=this.sound?1:0;const b=$(which);b.setAttribute('aria-pressed',String(this[which]));b.querySelector('span').textContent=(which==='music'?'Muzik ':'Bunyi ')+(this[which]?'ON':'OFF');}
};
function render(){ $('boxes').innerHTML=QUESTIONS.map((q,i)=>`<div class="adventure"><span class="companion-stage" data-companion="${i}"><img class="companion companion-${i}" src="assets/${['briar-transparent.png','bramble-transparent.png','logger-vick-transparent.png'][i]}" alt="${['Briar','Bramble','Logger Vick'][i]}"><span class="companion-sparkles" aria-hidden="true"><i>✧</i><i>✦</i></span></span><button class="box-button ${completed.has(i)?'completed':''}" data-box="${i}" ${completed.has(i)?'disabled':''} aria-label="Kotak ${i+1}${completed.has(i)?', selesai':', buka kotak misteri'}">${chest(q.image)}<span class="completed-badge" aria-hidden="true">✓</span></button></div>`).join('');const n=completed.size;$('coin-total').textContent=n;$('progress-text').textContent=`Kotak Selesai: ${n}/3`;$('progress-fill').style.width=`${n/3*100}%`;document.querySelector('[role=progressbar]').setAttribute('aria-valuenow',n);$('encourage').textContent=['Mari mulakan pengembaraan!','Hebat! Teruskan usaha kamu.','Satu kotak lagi. Kamu boleh!','Syabas! Semua kotak selesai.'][n];}
function celebrate(big=false){$('confetti').replaceChildren();for(let i=0;i<(big?85:30);i++){const p=document.createElement('i');p.className='confetti-piece'+(big&&i%3===0?' falling-coin':'');if(big&&i%3===0)p.textContent='★';p.style.left=Math.random()*100+'%';p.style.background=['#f5bf44','#64b599','#80c8e3','#ba92c9','#ee8a69'][i%5];p.style.animationDelay=Math.random()*.5+'s';p.style.borderRadius=i%2?'50%':'2px';$('confetti').append(p);}setTimeout(()=>$('confetti').replaceChildren(),3300);}
function finish(){if(completed.size!==3)return;$('final-boxes').innerHTML=[0,1,2].map(i=>`<div class="final-chest final-chest-${i}">${chest()}</div>`).join('');$('final-dialog').showModal();audio.effect('finish');celebrate(true);}
async function openBox(i,button){if(opening||completed.has(i))return;audio.start();opening=true;opener=button;button.classList.add('opening');audio.effect('open');reactCompanion(i);await new Promise(r=>setTimeout(r,1450));button.classList.remove('opening');active=i;const q=QUESTIONS[i];$('box-tag').textContent=`KOTAK ${i+1} · MISTERI PERASAAN`;$('scene').src='assets/'+q.image;$('scene').alt=q.alt;$('question-title').textContent=q.question;$('feedback').textContent='';$('feedback').className='';$('next').hidden=true;$('answers').innerHTML=q.options.map((option,j)=>`<button class="answer" data-answer="${j}"><span>${String.fromCharCode(65+j)}</span>${option}</button>`).join('');$('question-dialog').showModal();opening=false;}
// A short visual reaction; gameplay and audio state stay untouched.
function reactCompanion(index){
 const stage=document.querySelector(`[data-companion="${index}"]`);
 if(!stage)return;
 stage.classList.remove('is-happy');void stage.offsetWidth;stage.classList.add('is-happy');
 setTimeout(()=>stage.classList.remove('is-happy'),1800);
}
function answer(index,button){if(active===null||completed.has(active))return;audio.start();const q=QUESTIONS[active];if(index!==q.correct){button.classList.add('wrong');$('feedback').className='error';$('feedback').textContent='Oops! Belum tepat. Cuba sekali lagi!';audio.effect('wrong');setTimeout(()=>button.classList.remove('wrong'),700);return;}completed.add(active);save();button.classList.add('correct');document.querySelectorAll('.answer').forEach(b=>b.disabled=true);$('feedback').className='';$('feedback').textContent='Wah, betul! Syabas!';$('next').hidden=false;audio.effect('correct');celebrate();render();if(completed.size===3){$('next').hidden=true;setTimeout(()=>{if($('question-dialog').open)$('question-dialog').close();finish();},1500);}}
function closeQuestion(){if(completed.size===3)return;const celebrated=active;$('question-dialog').close();if(completed.has(celebrated))reactCompanion(celebrated);active=null;const next=document.querySelector(`.box-button[data-box="${opener?.dataset.box}"]`);(next&&!next.disabled?next:document.querySelector('.box-button:not(:disabled)'))?.focus();}
$('boxes').addEventListener('click',e=>{const b=e.target.closest('[data-box]');if(b)openBox(Number(b.dataset.box),b);});$('answers').addEventListener('click',e=>{const b=e.target.closest('[data-answer]');if(b)answer(Number(b.dataset.answer),b);});$('close-question').onclick=closeQuestion;$('next').onclick=closeQuestion;$('question-dialog').addEventListener('cancel',e=>{e.preventDefault();closeQuestion();});$('final-dialog').addEventListener('cancel',e=>e.preventDefault());$('restart').onclick=()=>{audio.start();completed.clear();active=null;save();$('final-dialog').close();$('confetti').replaceChildren();render();document.querySelector('.box-button').focus();};$('music').onclick=()=>audio.toggle('music');$('sound').onclick=()=>audio.toggle('sound');render();if(completed.size===3)finish();
