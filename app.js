
const SRC0='<!doctype html>'+document.documentElement.outerHTML,SCR=window.name==='tm3screen'&&!!window.opener;
const $=i=>document.getElementById(i),K='tm3_arrests',TM=['ชป.1','ชป.2','ชป.3'];
let D=[],eid=null,CH={};
if(window.__TVDATA)D=window.__TVDATA;else try{D=JSON.parse(localStorage.getItem(K)||'[]')}catch(e){}
if(!SCR)window.__ONL={role:-1};const NOGS=()=>!!(window.__ONL&&window.__ONL.role<2),expGate=()=>window.__expGate?window.__expGate():true;
let DVER=0;const persist=()=>{DVER++;if(SCR)return;if(!NOGS())try{localStorage.setItem(K,JSON.stringify(D))}catch(e){};if(window.__onP)window.__onP()};
const MON=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
let ERA='be';try{ERA=localStorage.getItem('tm3_era')||'be'}catch(e){}
const yr=y=>String(+y),yrIn=y=>(+y+543)+'/'+(+y),ERL=()=>'พ.ศ./ค.ศ.';
const fd=d=>d?(+d.slice(8))+' '+MON[+d.slice(5,7)-1]+' '+yr(d.slice(0,4)):'-';
const NATS=["ไทย", "จีน", "เมียนมา", "กัมพูชา", "ลาว", "เวียดนาม", "มาเลเซีย", "สิงคโปร์", "อินโดนีเซีย", "ฟิลิปปินส์", "บรูไน", "ติมอร์-เลสเต", "อินเดีย", "ปากีสถาน", "บังกลาเทศ", "ศรีลังกา", "เนปาล", "ภูฏาน", "มัลดีฟส์", "อัฟกานิสถาน", "ญี่ปุ่น", "เกาหลีใต้", "เกาหลีเหนือ", "ไต้หวัน", "ฮ่องกง", "มาเก๊า", "มองโกเลีย", "รัสเซีย", "คาซัคสถาน", "อุซเบกิสถาน", "คีร์กีซสถาน", "ทาจิกิสถาน", "เติร์กเมนิสถาน", "อิหร่าน", "อิรัก", "ซีเรีย", "จอร์แดน", "เลบานอน", "อิสราเอล", "ปาเลสไตน์", "ซาอุดีอาระเบีย", "เยเมน", "โอมาน", "สหรัฐอาหรับเอมิเรตส์", "กาตาร์", "บาห์เรน", "คูเวต", "ตุรกี", "อาเซอร์ไบจาน", "อาร์เมเนีย", "จอร์เจีย", "ไซปรัส", "สหราชอาณาจักร", "ไอร์แลนด์", "ฝรั่งเศส", "เยอรมนี", "อิตาลี", "สเปน", "โปรตุเกส", "เนเธอร์แลนด์", "เบลเยียม", "ลักเซมเบิร์ก", "สวิตเซอร์แลนด์", "ออสเตรีย", "เดนมาร์ก", "นอร์เวย์", "สวีเดน", "ฟินแลนด์", "ไอซ์แลนด์", "โปแลนด์", "เช็ก", "สโลวาเกีย", "ฮังการี", "โรมาเนีย", "บัลแกเรีย", "กรีซ", "แอลเบเนีย", "มาซิโดเนียเหนือ", "เซอร์เบีย", "มอนเตเนโกร", "บอสเนียและเฮอร์เซโกวีนา", "โครเอเชีย", "สโลวีเนีย", "ยูเครน", "เบลารุส", "มอลโดวา", "ลิทัวเนีย", "ลัตเวีย", "เอสโตเนีย", "มอลตา", "โมนาโก", "ลิกเตนสไตน์", "อันดอร์รา", "ซานมารีโน", "นครรัฐวาติกัน", "โคโซโว", "สหรัฐอเมริกา", "แคนาดา", "เม็กซิโก", "กัวเตมาลา", "เบลีซ", "ฮอนดูรัส", "เอลซัลวาดอร์", "นิการากัว", "คอสตาริกา", "ปานามา", "คิวบา", "จาเมกา", "เฮติ", "สาธารณรัฐโดมินิกัน", "บาฮามาส", "บาร์เบโดส", "ตรินิแดดและโตเบโก", "โดมินิกา", "เกรเนดา", "เซนต์ลูเชีย", "เซนต์วินเซนต์และเกรนาดีนส์", "เซนต์คิตส์และเนวิส", "แอนติกาและบาร์บูดา", "โคลอมเบีย", "เวเนซุเอลา", "เอกวาดอร์", "เปรู", "โบลิเวีย", "บราซิล", "ชิลี", "อาร์เจนตินา", "อุรุกวัย", "ปารากวัย", "กายอานา", "ซูรินาม", "ออสเตรเลีย", "นิวซีแลนด์", "ปาปัวนิวกินี", "ฟีจี", "หมู่เกาะโซโลมอน", "วานูอาตู", "ซามัว", "ตองกา", "คิริบาส", "ตูวาลู", "นาอูรู", "ปาเลา", "ไมโครนีเซีย", "หมู่เกาะมาร์แชลล์", "อียิปต์", "ลิเบีย", "ตูนิเซีย", "แอลจีเรีย", "โมร็อกโก", "ซูดาน", "ซูดานใต้", "เอธิโอเปีย", "เอริเทรีย", "จิบูตี", "โซมาเลีย", "เคนยา", "ยูกันดา", "แทนซาเนีย", "รวันดา", "บุรุนดี", "คองโก", "สาธารณรัฐประชาธิปไตยคองโก", "กาบอง", "แคเมอรูน", "ไนจีเรีย", "ไนเจอร์", "ชาด", "สาธารณรัฐแอฟริกากลาง", "อิเควทอเรียลกินี", "เซาตูเมและปรินซิปี", "กานา", "โตโก", "เบนิน", "บูร์กินาฟาโซ", "โกตดิวัวร์", "ไลบีเรีย", "เซียร์ราลีโอน", "กินี", "กินี-บิสเซา", "เซเนกัล", "แกมเบีย", "มาลี", "มอริเตเนีย", "กาบูเวร์ดี", "แองโกลา", "แซมเบีย", "ซิมบับเว", "มาลาวี", "โมซัมบิก", "นามิเบีย", "บอตสวานา", "แอฟริกาใต้", "เลโซโท", "เอสวาตีนี", "มาดากัสการ์", "มอริเชียส", "เซเชลส์", "คอโมโรส", "ไร้สัญชาติ", "ไม่ทราบสัญชาติ"],PROVS=["กทม", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พะเยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง", "ลำพูน", "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ", "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี", "อุบลราชธานี"],SC=["ม.38", "ม.37", "ทำงานโดยไม่ได้รับอนุญาต", "หลบหนีเข้าเมือง", "หมายจับไทย", "หมายต่างประเทศ", "overstay", "INTERPOLหมายแดง", "พนัน", "ทำงานนอกเหนือสิทธิ", "อาวุธปืน", "อั้งยี่", "ค้าประเวณี", "ช่วยเหลือ ซ่อนเร้น", "ยาเสพติด", "ความผิดซึ่งหน้า", "ฉ้อโกง", "คนต้องห้าม ม.12(7)", "ลักทรัพย์", "นายจ้าง", "ปลอมเงินตรา", "พรบ.คอมพิวเตอร์", "หน่วงเหนี่ยว กักขัง", "อื่นๆ(ตรวจค้น ขยายผล สืบสวน)"],SR=["ม.38", "ม.37", "ทำงานนอกเหนือสิทธิ", "ทำงานโดยไม่ได้รับอนุญาต", "หลบหนีเข้าเมือง", "Overstay", "หมายจับไทย", "หมายต่างประเทศ", "INTERPOLหมายแดง", "ฉ้อโกง", "การพนัน", "ลักทรัพย์", "ช่วยเหลือ ซ่อนเร้น", "ยาเสพติด", "อาวุธปืน", "พรบ.คอมฯ", "ประกอบธุรกิจไม่ชอบ กม.ฯ", "ยักยอก ทุจริต ฉ้อโกง", "เข้าไปมั่วสุมในสถานการค้าประเวณีฯ", "ขายพระเครื่อง", "นั่งทำงานหน้าคอมพิวเตอร์", "แกงค์ทวงหนี้", "ติดสินบน", "ฉ้อโกง,  เปิดหรือยอมให้ผู้อื่นใช้บัญชีเงินฝาก และ พ.ร.บ.คอมพิวเตอร์", "หลอกลวง", "ยักยอกทรัพย์", "ปลอมเอกสาร", "ปล้นทรัพย์", "อาวุธ", "พยายมฆ่า", "เงินกู้นอกระบบ", "Cyber Crime สแกมเมอร์", "Cyber Crime เว็บพนัน", "Cyber Crime ฟอกเงินดิจิทัล", "cyber crime บัญชีม้า", "นายจ้างรับคนต่างด้าวทำงานโดยไม่มีใบอนุญาต", "ร่วมกันเป็นธุระจัดหาฯ", "เป็นเจ้าของกิจการการค้าประเวณีฯ", "บุคคลต้องห้าม ตามมาตรา 12(7)", "อนาจาร,เพศ", "ข่มขืน", "เรียกค่าไถ่", "ลักพาตัว", "พรากผู้เยาว์", "นอมินี ถือหุ้น", "หมิ่นประมาทด้วยการโฆษณา", "เช็ค", "เสพฯ และ ขับเสพฯ", "มียาเสพติดไว้ในครอบครองและเสพยาเสพติดฯ", "มียาเสพติดให้โทษประเภท 1 ไว้ในครอบครองโดยไม่ได้รับอนุญาต", "หมายจับคดีเกี่ยวกับยาเสพติด", "ฉ้อโกงออนไลน์และอาชญากรรมข้ามชาติ", "ฉ้อโกงโดยแสดงตนเป็นผู้อื่น", "ลักทรัพย์, ใช้บัตรอิเล็กทรอนิกส์ของผู้อื่น", "ลักทรัพย์ในเวลากลางคืน", "รับของโจร", "ร่วมกันลักทรัพย์ในเวลากลางคืน โดยร่วมกันตั้งแต่สองคนขึ้นไป ในสถานที่ราชการ และใช้ยานพาหนะเพื่อสะดวกแก่การกระทำผิดหรือการพาทรัพย์นั้นไป หรือเพื่อพ้นการจับกุม", "ปกปิดทรัพย์สิน ผิดกม.", "ใช้กำลังประทุษร้ายหรือขัดขวางเจ้าพนักงานบังคับใช้กฎหมายขณะปฏิบัติหน้าที่", "ทำงานนอกเหนือสิทธิ์ (ควบคุมไซต์ก่อสร้าง)", "ขยายผล", "วีซ่าปลอม"];
const fillDL=()=>{const o=a=>a.map(v=>`<option value="${v}">`).join('');document.getElementById('nl').innerHTML=o(NATS);document.getElementById('pl').innerHTML=o(PROVS);const qo=a=>a.map(x=>`<option value="${esc(/,/.test(x)?'"'+x+'"':x)}">`).join('');document.getElementById('cl').innerHTML=qo(SC);document.getElementById('rl').innerHTML=qo(SR)};
const ck=v=>String(v||'').toLowerCase().replace(/\s+/g,'');
const NA={'พม่า':'เมียนมา','myanmar':'เมียนมา','กัมพูชา(เขมร)':'กัมพูชา','เขมร':'กัมพูชา','อเมริกา':'สหรัฐอเมริกา','สหรัฐ':'สหรัฐอเมริกา','usa':'สหรัฐอเมริกา','อังกฤษ':'สหราชอาณาจักร','uk':'สหราชอาณาจักร','เกาหลี':'เกาหลีใต้','china':'จีน','จีน(ไต้หวัน)':'ไต้หวัน'},PA={'กรุงเทพมหานคร':'กทม','กทม':'กทม','กทม.':'กทม','กรุงเทพ':'กทม','กรุงเทพฯ':'กทม','bangkok':'กทม','อยุธยา':'พระนครศรีอยุธยา','โคราช':'นครราชสีมา'};
const normNat=v=>{v=String(v||'').trim();return NA[ck(v)]||v},normProv=v=>{v=String(v||'').trim().replace(/^(จ\.|จังหวัด)\s*/,'');return PA[ck(v)]||v};
function chips(v){v=String(v||'').trim();if(!v)return[];const o=[];let c='',q=false;for(let i=0;i<v.length;i++){const h=v[i];if(h=='"'){if(q&&v[i+1]=='"'){c+='"';i++}else q=!q}else if(h==','&&!q){o.push(c.trim());c=''}else c+=h}o.push(c.trim());return o.filter(Boolean)}
const joinChips=a=>a.map(x=>/,/.test(x)?'"'+x.replace(/"/g,'""')+'"':x).join(', ');
const CHM={};[...SR,...SC].forEach(v=>CHM[ck(v)]=v);const normChg=v=>joinChips(chips(v).map(x=>CHM[ck(x)]||x));
const cntChips=(R,k)=>{const m={},nm={};R.forEach(r=>visChips(r,k,true).forEach(x=>{const q=ck(x);m[q]=(m[q]||0)+w(r);nm[q]=nm[q]||x}));return Object.keys(m).map(q=>[nm[q],m[q]]).sort((a,b)=>b[1]-a[1])};
const normRec=r=>{r.nat=normNat(r.nat);r.place=normProv(r.place);r.charge=normChg(r.charge);r.rel=normChg(r.rel);return r};
D.forEach(normRec);persist();
const F=['date','team','type','joint','name','nat','sex','pp','age','charge','rel','place','intel','num','cases','fine','link','note'];
const w=r=>+r.num||0,sm=a=>a.reduce((t,r)=>t+w(r),0);
/* จำนวนคดี: ถ้าไม่ได้ระบุ ใช้ตามจำนวนราย */
const cs=r=>+r.cases||w(r)||0,csAuto=r=>!(+r.cases)&&w(r)>0;
$('date').value=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);$('num').value=1;

/* จำนวนคดีว่าง = เติมตามจำนวนรายอัตโนมัติ (แก้เองได้ทุกเมื่อ) */
const csSync=()=>{const n=$('num'),c=$('cases');if(!n||!c)return;if(c.dataset.auto==='1'||!c.value.trim()){const v=+n.value>0?String(+n.value):'';if(c.value!==v)c.value=v;c.dataset.auto=v?'1':'';c.classList.toggle('csauto',!!v);c.title=v?'เติมอัตโนมัติตามจำนวนราย — พิมพ์ทับได้หากจำนวนคดีไม่เท่ากับจำนวนราย':''}};
setTimeout(()=>{const n=$('num'),c=$('cases');if(!n||!c)return;['input','change'].forEach(ev=>n.addEventListener(ev,csSync));
 c.addEventListener('input',()=>{c.dataset.auto='';c.classList.remove('csauto');c.title=''});c.addEventListener('blur',()=>{if(!c.value.trim())csSync()});
 setInterval(()=>{const f=$('f');if(f&&!f.classList.contains('hide')&&document.activeElement!==c)csSync()},800);csSync()},0);
function fClear(keepPtx){_noteBlock=true;eid=null;$('ft').textContent='บันทึกการจับกุม';const todayISO=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);F.forEach(k=>{const el=$(k);if(!el)return;if(k==='date'){el.value=todayISO}else if(k==='num'){el.value='1';el.min='1'}else if(k==='intel'){try{el.value=IO&&IO[0]?IO[0]:''}catch(e){}}else if(el.tagName==='SELECT'){el.selectedIndex=0}else{el.value=''}});document.querySelectorAll('#f .af').forEach(e=>e.classList.remove('af'));if(keepPtx!==true)try{$('ptx').value='';$('pcnt').textContent='';localStorage.removeItem('tm3_ptx')}catch(e){}_lastAuto='';_noteBlock=false;}
$('save').onclick=()=>{const r={id:eid||Date.now()};F.forEach(k=>r[k]=$(k).value.trim());if(!(+r.cases)&&+r.num>0)r.cases=String(+r.num);normRec(r);const old=eid?D.find(x=>x.id==eid):null;if(old&&old.gsRow)r.gsRow=old.gsRow;if(old&&old.gsSrc)r.gsSrc=old.gsSrc;const oldC=old?Object.assign({},old):null;
 if(!r.date||!r.nat||!r.charge){uiAlert('กรุณากรอกช่องที่มี * ให้ครบ',false);return}
 if(NOGS())r.pend=1;if(eid){D=D.map(x=>x.id==eid?r:x)}else D.push(r);persist();gsPush(r,oldC);fClear((()=>{try{return PM.length>0||PN.some(x=>x.src==='ข้อความที่วาง')}catch(e){return false}})());renderTodayLog();render();impShow(true,'บันทึกแล้ว','')};
$('clr').onclick=()=>fClear();
/* per-section clear buttons on the entry form */
document.addEventListener('click',e=>{const b=e.target.closest('.fclr');if(!b)return;const fs=b.closest('fieldset');if(!fs)return;_noteBlock=true;
 const todayISO=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
 fs.querySelectorAll('input[id],select[id],textarea[id]').forEach(el=>{const k=el.id;if(k==='date')el.value=todayISO;else if(k==='num')el.value='1';else if(k==='intel'){try{el.value=IO&&IO[0]?IO[0]:''}catch(x){}}else if(el.tagName==='SELECT'){if(el.options.length)el.value=el.options[0].value}else el.value='';el.classList.remove('af');el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}))});
 _noteBlock=false;const f=fs.querySelector('input:not([type=hidden]),select,textarea');if(f&&f.id!=='date')try{f.focus()}catch(x){}});


// auto-note: สรุปข้อมูลฟอร์มลงช่องหมายเหตุแบบ real-time ตามลำดับที่กำหนด
const NL={date:'วันที่',team:'ชป.',type:'จับเอง/ร่วม',num:'จำนวนราย',name:'ชื่อผู้ต้องหา',nat:'สัญชาติ',pp:'เลขพาสปอร์ต/บัตร',age:'อายุ',sex:'เพศ',place:'สถานที่',charge:'คดี',fine:'ค่าปรับ',link:'ลิงก์ข่าว'};
const NLORD=['date','team','type','num','name','nat','pp','age','sex','place','charge','fine','link'];
let _noteBlock=false,_lastAuto='';
function autoNote(){if(_noteBlock)return;try{if(PM.length)return}catch(e){}const lines=[];
 NLORD.forEach(k=>{const el=$(k);if(!el)return;let v=(el.value||'').trim();if(!v)return;
  if(k==='num'&&v==='1')return;if(k==='sex'&&v==='ไม่ระบุ')return;
  if(k==='date')v=fd(v);
  if(k==='charge'){const rl=($('rel')&&$('rel').value||'').trim();if(rl&&rl!==v)v=v+' ('+rl+')'}
  lines.push(NL[k]+': '+v)});
 if(!lines.length)return;
 const block='รายละเอียดการจับกุม\n'+lines.join('\n');
 const el=$('note'),cur=el.value||'';
 if(_lastAuto&&cur.includes(_lastAuto))el.value=cur.replace(_lastAuto,block);
 else el.value=cur.trim()?cur.replace(/\s+$/,'')+'\n'+block:block;
 _lastAuto=block}
const _fFields=F.filter(k=>k!=='note');
setTimeout(()=>{_fFields.forEach(k=>{const el=$(k);if(!el)return;el.addEventListener('change',autoNote);if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')el.addEventListener('input',()=>{clearTimeout(el._ant);el._ant=setTimeout(autoNote,600)})})},0);

function renderTodayLog(){const today=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);const box=$('todayLog');const tbody=$('todayTbody');if(!box||!tbody)return;const recs=D.filter(r=>r.date===today).sort((a,b)=>(+b.id||0)-(+a.id||0));if(!recs.length){box.style.display='none';tbody.innerHTML='';return}box.style.display='';$('todayLogDate').textContent='วันที่ '+today.split('-').reverse().join('/');const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));tbody.innerHTML=recs.map(r=>`<tr><td>${esc(new Date(+r.id).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'}))}</td><td>${esc(r.team)}</td><td>${esc(r.name)}</td><td>${esc(r.nat)}</td><td>${esc(r.charge)}</td><td style="text-align:center">${esc(r.num||1)}</td><td style="text-align:center"><button type="button" class="btn sm dg" data-tdel="${esc(r.id)}" title="ลบรายการนี้ (ลบใน Google Sheets ด้วย)">🗑 ลบ</button></td></tr>`).join('')}
renderTodayLog();
document.addEventListener('click',e=>{const b=e.target.closest('[data-tdel]');if(b)window.rm(b.dataset.tdel)});setInterval(()=>{try{renderTodayLog()}catch(e){}},6e4);
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('on',x==b));['f','d','s'].forEach(i=>$(i).classList.toggle('hide',i!=b.dataset.t));render()});
const SEL=[['team','ชป.'],['type','การปฏิบัติ'],['sex','เพศ'],['nat','สัญชาติ'],['place','จังหวัด'],['charge','คดี'],['rel','คดีที่เกี่ยวข้อง'],['intel','การข่าว'],['mon','เดือน']];
const TXT=[['name','ชื่อผู้ต้องหา'],['pp','พาสปอร์ต / เลขบัตร'],['q','ค้นหาทั่วไป']];
let FS={};
const YN=k=>`<div><label>${k[1]}</label><select data-k="${k[0]}"><option value="">ทั้งหมด</option><option value="1">${k[2]}</option><option value="0">${k[3]}</option></select></div>`;
const pad=n=>String(n).padStart(2,'0'),ds=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const fyS=()=>{const t=new Date();return t.getMonth()>=9?t.getFullYear():t.getFullYear()-1};
const mkPL=(yr=yrIn)=>({c:'กำหนดเอง',today:'วันนี้','7d':'7 วันล่าสุด','30d':'30 วันล่าสุด',tm:'เดือนนี้',lm:'เดือนที่แล้ว',tq:'ไตรมาสนี้',lq:'ไตรมาสที่แล้ว',fy:'ปีงบประมาณ '+yr(fyS()+1),lfy:'ปีงบประมาณ '+yr(fyS()),ty:'ปี '+yr(new Date().getFullYear()),ly:'ปี '+yr(new Date().getFullYear()-1)});let PL=mkPL(yr),PLd=mkPL(yr);
function perRange(k){const t=new Date(),y=t.getFullYear(),m=t.getMonth(),d=t.getDate(),N=(a,b,c)=>new Date(a,b,c),qs=Math.floor(m/3)*3,fs=fyS();
 const r={today:[t,t],'7d':[N(y,m,d-6),t],'30d':[N(y,m,d-29),t],tm:[N(y,m,1),N(y,m+1,0)],lm:[N(y,m-1,1),N(y,m,0)],tq:[N(y,qs,1),N(y,qs+3,0)],lq:[N(y,qs-3,1),N(y,qs,0)],fy:[N(fs,9,1),N(fs+1,8,30)],lfy:[N(fs-1,9,1),N(fs,8,30)],ty:[N(y,0,1),N(y,11,31)],ly:[N(y-1,0,1),N(y-1,11,31)]}[k];
 return r?r.map(ds):null}
const S_=(k,l)=>`<div><label>${l}</label><select data-k="${k}"></select></div>`,I_=(k,l,t='text')=>`<div${t=='date'?' class="span2"':''}><label>${l}</label><input type="${t}" data-k="${k}"${t=='number'?' min="0"':''}></div>`;
const fl=id=>$(id).innerHTML=`<div class="fbox"><div class="nlbox"><div class="nlw"><input data-k="nl" class="nl" autocomplete="off" placeholder="🔎 พิมพ์คำค้นเพื่อกรองทันที เช่น  จีน หมายแดง ธันวา 69   หรือ   จับเอง มกรา ชป.2"><button type="button" class="nlx" title="ล้างคำค้น" onclick="FS.nl='';this.previousElementSibling.value='';render();this.previousElementSibling.focus()">✕ ล้าง</button><button type="button" class="nlgo" title="ถาม AI (หรือกด Enter)">ถาม ▶</button><button type="button" class="nlai" aria-pressed="false" title="เปิด/ปิด AI ช่วยค้น — ปิดอยู่ = ค้นแบบเดิม (ระบบเรียนรู้คำย่อทำงานเหมือนเดิมเสมอ)">✨ AI</button><button type="button" class="nlrs" title="รีเซ็ต — ล้างตัวกรองทั้งหมด">RESET</button></div><div class="nlinfo"></div><div class="aibox"></div><details class="abr"><summary>📖 คำย่อที่ระบบรู้จัก / สอนคำย่อใหม่</summary><div class="abrin"><input class="ak" placeholder="คำย่อ เช่น ตปท"><input class="av" placeholder="ความหมาย เช่น ต่างประเทศ"><button type="button" class="btn sm pr" onclick="addAbr(this)">➕ เพิ่มคำย่อ</button></div><div class="abrlist"></div></details></div><div class="sec s0"><div class="st"><i>⏱</i>ช่วงเวลา</div><div class="prow"><div class="pc"><label>เลือกช่วงเวลา</label><select class="psel" data-k="per"><option value="">ทั้งหมด</option>${Object.entries(PL).filter(([k])=>k!="c").map(([k,l])=>`<option value="${k}">${l}</option>`).join("")}<option value="c">กำหนดเอง</option></select></div><div class="pc"><label>ตั้งแต่วันที่</label><input type="date" data-k="a"></div><div class="to">–</div><div class="pc"><label>ถึงวันที่</label><input type="date" data-k="b"></div><div class="pc"><label>เดือน + ปี</label><select class="pmon" data-k="mon"></select></div><div class="pc"><button type="button" class="btn sm clrf clrs" data-clr="per,a,b,mon">↺ ล้าง</button></div><div class="pinfo"></div></div></div>
<details><summary>🔎 ตัวกรองตามหัวข้อ (ข้อมูลการจับกุม · ผู้ต้องหา · คดี) <span class="fc"></span></summary>
<div class="fsec sec s1"><div class="st"><i>1</i>ข้อมูลการจับกุม<button type="button" class="clrs" data-clr="team,type,intel,place">↺ ล้าง</button></div><div class="frow">${S_('team','ชป.')}${S_('type','การปฏิบัติ')}${S_('intel','การข่าว')}${S_('place','จังหวัด')}</div></div>
<div class="fsec sec s2"><div class="st"><i>2</i>ข้อมูลผู้ต้องหา<button type="button" class="clrs" data-clr="nat,sex,a1,a2,name,pp">↺ ล้าง</button></div><div class="frow">${S_('nat','สัญชาติ')}${S_('sex','เพศ')}${I_('a1','อายุตั้งแต่','number')}${I_('a2','อายุถึง','number')}${I_('name','ชื่อผู้ต้องหา')}${I_('pp','พาสปอร์ต / เลขบัตร')}</div></div>
<div class="fsec sec s3"><div class="st"><i>3</i>คดีและผลการดำเนินการ<button type="button" class="clrs" data-clr="charge,rel,hf,hl,q">↺ ล้าง</button></div><div class="frow">${S_('charge','คดี')}${S_('rel','คดีที่เกี่ยวข้อง')}${YN(['hf','ค่าปรับ','มีค่าปรับ','ไม่มีค่าปรับ'])}${YN(['hl','ลิงก์ข่าว','มีลิงก์','ไม่มีลิงก์'])}${I_('q','ค้นหาทั่วไป')}</div></div></details></div>`;
fl('flt1');fl('flt2');setTimeout(()=>{const _r=render;render=function(){let x;try{x=_r.apply(this,arguments);try{aiAuto()}catch(e){}try{renderTodayLog()}catch(e){}try{SPN.kick();barsAnim()}catch(e){}}catch(e){console.error('[render]',e);let B=document.getElementById('rerr');if(!B){B=document.createElement('div');B.id='rerr';B.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:99;background:#7f1d1d;color:#fff;padding:10px 14px;border-radius:10px;font:13px Prompt,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.4)';B.onclick=()=>B.remove();document.body.appendChild(B)}B.textContent='⚠ แสดงผลไม่สำเร็จ: '+(e&&e.message||e)+' (แตะเพื่อปิด)'}try{fsegSync();tbFit()}catch(e){}return x};fsegSync()},0);
{const B=$('flt2').querySelector('.fbox'),nl=B.querySelector('.nlbox'),dt=B.querySelector(':scope>details'),g=document.createElement('div');g.className='fq';
 g.append(B.querySelector('.sec.s0'),...dt.querySelectorAll('.fsec'));const fc=dt.querySelector('.fc');dt.remove();B.prepend(g);B.append(nl);fc.classList.add('fc2');nl.querySelector('.nlw').after(fc);nl.classList.add('nlq');nl.querySelector('.nl').placeholder='🔎 ค้นหาเร็ว เช่น จีน หมายแดง ชป.2';
 const sb=document.createElement('div');sb.id='flt2s';sb.className='nlbar';sb.append(nl);const ub=document.createElement('button');ub.type='button';ub.id='gsync';ub.className='upd';ub.innerHTML='<svg class="ui" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 0 1-13.7 5.6" /><path d="M4 12A8 8 0 0 1 17.7 6.4"/><path class="ah" d="M17.7 2.6v3.9h-3.9"/><path class="ah" d="M6.3 21.4v-3.9h3.9"/></svg><span class="ut">อัปเดตข้อมูล</span>';$('imp').after(ub);const gb=document.createElement('button');gb.type='button';gb.className='updcfg';gb.title='ตั้งค่าแหล่งข้อมูล / อัปเดตอัตโนมัติ';gb.innerHTML='⚙';gb.onclick=()=>gsPanel();ub.after(gb);const uf=document.createElement('input');uf.type='file';uf.accept='.csv,text/csv';uf.id='gscsv';uf.className='hide';sb.append(uf);ub.onclick=()=>gsSync();uf.onchange=async e=>{const f=e.target.files[0];e.target.value='';if(f)gsApply(await f.text(),'ไฟล์ '+f.name)};const sc=$('sheet').closest('.sc');sc.parentNode.insertBefore(sb,sc);
 {const B=$('flt1').querySelector('.fbox'),nl=B.querySelector('.nlbox'),dt=B.querySelector(':scope>details'),g=document.createElement('div');g.className='fq';
  g.append(B.querySelector('.sec.s0'),...dt.querySelectorAll('.fsec'));dt.remove();B.prepend(g);nl.classList.add('nlq');nl.querySelector('.nl').placeholder='🔎 ค้นหาเร็ว เช่น จีน หมายแดง ชป.2';
  const sb=document.createElement('div');sb.id='flt1s';sb.className='nlbar nlbar1';sb.append(nl);$('cnt').before(sb);sb.append($('cnt'))}
 ['flt1','flt2'].forEach(F0=>['team','type','sex','intel','hf','hl'].forEach(k=>{const e=$(F0).querySelector('select[data-k="'+k+'"]');if(!e)return;e.classList.add('hide');const g=document.createElement('div');g.className='fseg';g.dataset.for=k;e.after(g);
  g.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;e.value=b.dataset.v;e.dispatchEvent(new Event('input',{bubbles:true}))})}))}
document.addEventListener('click',e=>{const rs=e.target.closest('.nlrs');if(rs){FS={};try{aiShow('')}catch(x){}document.querySelectorAll('input.nl').forEach(i=>i.value='');render();return}const b=e.target.closest('.clrs');if(!b)return;b.dataset.clr.split(',').forEach(k=>{FS[k]=''});render()});
function fsegSync(){document.querySelectorAll('.clrs').forEach(b=>b.classList.toggle('off',!b.dataset.clr.split(',').some(k=>FS[k])));document.querySelectorAll('#flt1 .fseg,#flt2 .fseg').forEach(g=>{const e=g.previousElementSibling,o=[...e.options].map(x=>[x.value,x.value?x.text.replace(/\s*\(.*\)\s*$/,''):'ทั้งหมด']),sig=o.map(x=>x.join('|')).join('/');
  if(g.dataset.sig!==sig){g.dataset.sig=sig;g.innerHTML=o.map(([v,t])=>`<button type="button" data-v="${esc(v)}">${esc(t)}</button>`).join('')}
  const cur=FS[e.dataset.k]||'';g.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===cur))})}
const mlabel=(v,f=yr)=>MON[+v.slice(5)-1]+' '+f(v.slice(0,4));
function grpOpts(k){const c={},nm={};D.forEach(r=>{(k=='charge'||k=='rel'?chips(r[k]):[String(r[k]||'').trim()]).forEach(v=>{if(!v)return;const q=ck(v);c[q]=(c[q]||0)+w(r);nm[q]=nm[q]||v})});
 const op=(v,n)=>`<option value="${esc(v)}">${esc(v)}${n?'  ('+n+')':''}</option>`,th=(a,b)=>a.localeCompare(b,'th');let h='<option value="">ทั้งหมด</option>';
 {const M={nat:NATS,place:PROVS,charge:SC,rel:SR}[k],ms=new Set(M.map(ck)),has=Object.keys(c).sort((a,b)=>c[b]-c[a]);
  if(has.length)h+='<optgroup label="มีข้อมูลในระบบ (เรียงตามจำนวน)">'+has.map(q=>op(nm[q],c[q])).join('')+'</optgroup>';
  h+='<optgroup label="'+{nat:'สัญชาติทั้งหมด',place:'จังหวัดทั้งหมด',charge:'คดีทั้งหมดจากต้นฉบับ',rel:'คดีที่เกี่ยวข้องทั้งหมดจากต้นฉบับ'}[k]+' (ก–ฮ)">'+M.filter(v=>!c[ck(v)]).sort(th).map(v=>op(v)).join('')+'</optgroup>';return h}}
let BOSIG='';
function buildOpts(){{let h=2166136261;for(let i=0;i<D.length;i++){const r=D[i],q=(r.nat||'')+'|'+(r.place||'')+'|'+(r.charge||'')+'|'+(r.rel||'')+'|'+(r.intel||'')+'|'+(r.date||'').slice(0,7)+'|'+(r.team||'')+'|'+(r.type||'')+'|'+(r.sex||'')+'|'+(r.num||'')+'|';for(let j=0;j<q.length;j++){h^=q.charCodeAt(j);h=Math.imul(h,16777619)}}
 const sg=D.length+':'+h+':'+(document.querySelectorAll('select[data-k]').length);if(sg===BOSIG&&!(document.activeElement&&document.activeElement.tagName==='SELECT'))return;BOSIG=(document.activeElement&&document.activeElement.tagName==='SELECT')?'':sg}
 SEL.forEach(([k])=>{if(k=='intel'){const c={};D.forEach(r=>{const q=ck(r.intel);c[q]=(c[q]||0)+1});document.querySelectorAll('select[data-k=intel]').forEach(e=>{if(e!==document.activeElement)e.innerHTML='<option value="">ทั้งหมด</option>'+SI.map(v=>`<option value="${v}">${v}${c[ck(v)]?'  ('+c[ck(v)]+' ครั้ง)':''}</option>`).join('')});return}if(['nat','place','charge','rel'].includes(k)){document.querySelectorAll('select[data-k="'+k+'"]').forEach(e=>{if(e!==document.activeElement)e.innerHTML=grpOpts(k)});return}const vs=[...new Set(D.map(r=>k=='mon'?r.date.slice(0,7):String(r[k]||'').trim()).filter(Boolean).concat(k=='mon'?Array.from({length:60},(_,i)=>{const t=9+i;return(2025+Math.floor(t/12))+'-'+String(t%12+1).padStart(2,'0')}):[]))].sort();document.querySelectorAll('select[data-k="'+k+'"]').forEach(e=>{if(e===document.activeElement)return;e.innerHTML='<option value="">ทั้งหมด</option>'+vs.map(v=>`<option value="${esc(v)}">${k=='mon'?mlabel(v,yr):esc(v)}</option>`).join('')})})}
function syncF(){document.querySelectorAll('#flt1 [data-k],#flt2 [data-k],#flt2s [data-k],#flt1s [data-k]').forEach(e=>{if(e.dataset.k=='nl'&&aiOn())return;if(e!==document.activeElement)e.value=FS[e.dataset.k]||''});const n=Object.entries(FS).filter(([k,v])=>v&&k!='per').length;document.querySelectorAll('.fc').forEach(e=>e.textContent=n?'— ใช้อยู่ '+n+' เงื่อนไข':'');document.querySelectorAll('.nlinfo').forEach(e=>e.innerHTML=FS.nl?nlDesc(getNL(FS.nl)):'');const pi=(FS.a||FS.b)?'📅 '+(FS.per&&FS.per!='c'?PLd[FS.per]+' : ':'')+(FS.a?fd(FS.a):'…')+' – '+(FS.b?fd(FS.b):'ปัจจุบัน'):FS.mon?'📅 เดือน '+mlabel(FS.mon):'';document.querySelectorAll('.pinfo').forEach(e=>e.textContent=pi)}
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(!k||!e.target.closest('#flt1,#flt2,#flt2s,#flt1s'))return;const v=e.target.value.trim();FS[k]=v;
 if(k=='per'){const r=perRange(v);if(r){FS.a=r[0];FS.b=r[1]}else if(!v){FS.a='';FS.b=''}if(v)FS.mon=''}
 else if(k=='a'||k=='b'){FS.per=FS.a||FS.b?'c':'';if(v)FS.mon=''}
 else if(k=='mon'&&v){FS.per='';FS.a='';FS.b=''}if(e.target.tagName==='INPUT'&&e.target.type!=='date'){clearTimeout(window._rdbT);window._rdbT=setTimeout(()=>render(),170)}else render()});
const lc=v=>String(v||'').trim().toLowerCase();
const TMR=[['มกราคม','มกรา','ม.ค.'],['กุมภาพันธ์','กุมภา','ก.พ.'],['มีนาคม','มีนา','มี.ค.'],['เมษายน','เมษา','เม.ย.'],['พฤษภาคม','พฤษภา','พ.ค.'],['มิถุนายน','มิถุนา','มิ.ย.'],['กรกฎาคม','กรกฎา','กรกฏาคม','กรกฏา','ก.ค.'],['สิงหาคม','สิงหา','ส.ค.'],['กันยายน','กันยา','ก.ย.'],['ตุลาคม','ตุลา','ต.ค.'],['พฤศจิกายน','พฤศจิกา','พฤศจิ','พ.ย.'],['ธันวาคม','ธันวา','ธ.ค.']],TMON=TMR.map(a=>a.map(x=>ck(x).replace(/\./g,'')));
const ABR0={"ตปท": "ต่างประเทศ", "ตปท.": "ต่างประเทศ", "ต่างปท": "ต่างประเทศ", "หมายตปท": "หมายต่างประเทศ", "หมายจับตปท": "หมายต่างประเทศ", "หมายจับต่างประเทศ": "หมายต่างประเทศ", "หมายไทย": "หมายจับไทย", "หจ": "หมายจับ", "หมายแดง": "INTERPOLหมายแดง", "อินเตอร์โพล": "INTERPOL", "อินเทอร์โพล": "INTERPOL", "rednotice": "INTERPOLหมายแดง", "ม37": "ม.37", "ม38": "ม.38", "ม12": "ม.12(7)", "ม.12": "ม.12(7)", "ต้องห้าม": "ต้องห้าม", "os": "overstay", "โอเวอร์สเตย์": "overstay", "อยู่เกิน": "overstay", "อยู่เกินกำหนด": "overstay", "เกินกำหนด": "overstay", "หนีเข้าเมือง": "หลบหนีเข้าเมือง", "ลักลอบเข้าเมือง": "หลบหนีเข้าเมือง", "หลบหนี": "หลบหนีเข้าเมือง", "หลบเข้าเมือง": "หลบหนีเข้าเมือง", "แรงงาน": "ทำงาน", "ทำงานผิดกฎหมาย": "ทำงานโดยไม่ได้รับอนุญาต", "ทำงานไม่ได้รับอนุญาต": "ทำงานโดยไม่ได้รับอนุญาต", "ทำงานไม่มีใบอนุญาต": "ทำงานโดยไม่ได้รับอนุญาต", "นอกสิทธิ": "ทำงานนอกเหนือสิทธิ", "นอกเหนือสิทธิ": "ทำงานนอกเหนือสิทธิ", "ยาบ้า": "ยาเสพติด", "ยาไอซ์": "ยาเสพติด", "ไอซ์": "ยาเสพติด", "ยส": "ยาเสพติด", "ยาเสพ": "ยาเสพติด", "ปืน": "อาวุธปืน", "การพนัน": "พนัน", "พนันออนไลน์": "พนัน", "เว็บพนัน": "พนัน", "คอม": "คอม", "พรบคอม": "คอม", "พ.ร.บ.คอม": "คอม", "ค้ากาม": "ค้าประเวณี", "โสเภณี": "ค้าประเวณี", "ซ่อนเร้น": "ซ่อนเร้น", "ให้ที่พักพิง": "ซ่อนเร้น", "ฉ้อ": "ฉ้อโกง", "สแกม": "สแกมเมอร์", "scam": "สแกมเมอร์", "ม้า": "บัญชีม้า", "บช.ม้า": "บัญชีม้า", "พม่า": "เมียนมา", "เขมร": "กัมพูชา", "ญวน": "เวียดนาม", "เวียตนาม": "เวียดนาม", "ปากี": "ปากีสถาน", "บังคลาเทศ": "บังกลาเทศ", "บังกลา": "บังกลาเทศ", "อเมริกา": "สหรัฐอเมริกา", "อเมริกัน": "สหรัฐอเมริกา", "usa": "สหรัฐอเมริกา", "us": "สหรัฐอเมริกา", "อังกฤษ": "สหราชอาณาจักร", "uk": "สหราชอาณาจักร", "เยอรมัน": "เยอรมนี", "ไนจี": "ไนจีเรีย", "เกาหลี": "เกาหลีใต้", "จีนไต้หวัน": "ไต้หวัน", "กรุงเทพมหานคร": "กทม", "กทม": "กทม", "กทม.": "กทม", "กรุงเทพ": "กทม", "กรุงเทพฯ": "กทม", "ชบ": "ชลบุรี", "รย": "ระยอง", "สป": "สมุทรปราการ", "ฉช": "ฉะเชิงเทรา", "อย": "พระนครศรีอยุธยา", "อยุธยา": "พระนครศรีอยุธยา", "ปท": "ปทุมธานี", "นบ": "นนทบุรี", "ปจ": "ปราจีนบุรี", "สก": "สระแก้ว", "จบ": "จันทบุรี", "ตร": "ตราด", "พัทยา": "ชลบุรี", "ศรีราชา": "ชลบุรี", "บางละมุง": "ชลบุรี", "สัตหีบ": "ชลบุรี", "มาบตาพุด": "ระยอง", "จับกุมเอง": "จับเอง", "ร่วมจับกุม": "ร่วมจับ", "ร่วม": "ร่วมจับ", "แถลง": "แถลงข่าว", "ซ้ำ": "ข่าวซ้ำ", "ส่ง": "ส่งข่าว", "ผช": "ชาย", "ญ": "หญิง", "ช": "ชาย"};
let ABRu={};try{ABRu=JSON.parse(localStorage.getItem('tm3_abbr'))||{}}catch(e){}
const abr=()=>{const o={};Object.entries({...ABR0,...ABRu}).forEach(([k,v])=>o[ck(k)]=v);return o};
let NLc={q:null,P:null};
function nlDict(A){const S=new Set(),add=v=>{const k=ck(v);if(k.length>=3)S.add(k)};
 [...NATS,...D.map(r=>r.nat),...PROVS,...SC,...SR,...SI,'จับเอง','ร่วมจับ','ปีงบประมาณ','ปีงบ','เดือนนี้','เดือนที่แล้ว','ปีนี้','ปีที่แล้ว','หมายจับ','ไทย','ลาว','จีน','ชาย','หญิง'].forEach(v=>{const k=ck(v);if(k.length>=2)S.add(k)});
 D.forEach(r=>[...chips(r.charge),...chips(r.rel)].forEach(add));TMR.flat().forEach(add);Object.keys(A).forEach(k=>{if(k.length>=3)S.add(k)});return[...S].sort((a,b)=>b.length-a.length)}
function nlSeg(t,DI){const o=[];let i=0,u='';while(i<t.length){let m=null;for(const w of DI)if(t.startsWith(w,i)){m=w;break}if(m){if(u){o.push(u);u=''}o.push(m);i+=m.length}else u+=t[i++]}if(u)o.push(u);return o}
const chgHas=c=>{const k=ck(c);return k.length>=2&&([...SC,...SR].some(x=>ck(x).includes(k))||D.some(r=>[...chips(r.charge),...chips(r.rel)].some(x=>ck(x).includes(k))))};
function getNL(q){if(NLc.q===q)return NLc.P;const A=abr(),DI=nlDict(A),P={y:[],m:[],ym:[],fy:[],team:[],type:[],sex:[],intel:[],nat:[],place:[],chg:[],txt:[],ex:[]};
 const allNat=[...new Set([...NATS,...D.map(r=>r.nat)])].filter(Boolean),uq=(a,v)=>{if(!a.includes(v))a.push(v)},now=new Date(),toY=t=>{let y=+t;if(y<100)y=y>=50?y+2500:y+2000;if(y>2400)y-=543;return y},fyNow=now.getMonth()>=9?now.getFullYear()+1:now.getFullYear();
 const isMon=k=>TMON.findIndex(a=>a.includes(k.replace(/\./g,'')));
 const known=k=>A[k]!==undefined||DI.includes(k)||/^\d+$/.test(k)||/^ชป\.[123]$/.test(k)||isMon(k)>=0||/^(\D+?)(\d{2}|\d{4})$/.test(k)&&isMon(k.replace(/\d+$/,''))>=0;
 q=q.replace(/(ชป|ชุด)\s*\.?\s*([123])(?!\d)/g,' ชป.$2 ').replace(/ม\.?\s?(\d{2})(?!\d)/g,'ม.$1').replace(/([^\d\s.])(\d)/g,'$1 $2').replace(/(\d)([^\d\s.])/g,'$1 $2');
 const T=[];q.split(/[\s,]+/).filter(Boolean).forEach(t=>{const k=ck(t);(known(k)?[k]:nlSeg(k,DI)).forEach(x=>{if(A[x]!==undefined){P.ex.push(x+' → '+A[x]);T.push(A[x])}else T.push(x)})});
 let fyN=false;
 const cls=t=>{const k=ck(t),kn=k.replace(/\./g,'');let m,v;
  if(k=='ปีงบ'||k=='ปีงบประมาณ'||k=='งบ'){fyN=true;return}
  if(k=='นี้'&&fyN){uq(P.fy,fyNow);fyN=false;return}
  if(k=='ที่แล้ว'&&fyN){uq(P.fy,fyNow-1);fyN=false;return}
  if(/^\d{2}$|^\d{4}$/.test(k)){const y=toY(k);if(fyN){uq(P.fy,y);fyN=false}else uq(P.y,y);return}
  if(k=='เดือนนี้'){uq(P.ym,now.toISOString().slice(0,7));return}if(k=='เดือนที่แล้ว'){const d=new Date(now.getFullYear(),now.getMonth()-1,15);uq(P.ym,d.toISOString().slice(0,7));return}
  if(k=='ปีนี้'){uq(P.y,now.getFullYear());return}if(k=='ปีที่แล้ว'){uq(P.y,now.getFullYear()-1);return}
  const mi=isMon(k);if(mi>=0){uq(P.m,mi+1);return}
  if(m=kn.match(/^(\D+?)(\d{2}|\d{4})$/)){const j=isMon(m[1]);if(j>=0){uq(P.m,j+1);uq(P.y,toY(m[2]));return}}
  if(m=kn.match(/^(?:ชป|ชุด)([123])$/)){uq(P.team,'ชป.'+m[1]);return}
  if(k=='จับเอง'||k=='ร่วมจับ'){uq(P.type,k);return}
  if(k=='ชาย'||k=='หญิง'){uq(P.sex,k);return}
  if(v=SI.find(x=>ck(x)==k)){uq(P.intel,v);return}
  if(v=allNat.find(x=>ck(x)==ck(normNat(t)))){uq(P.nat,v);return}
  if(v=PROVS.find(x=>ck(x)==ck(normProv(t)))){uq(P.place,v);return}
  if(chgHas(k)){uq(P.chg,k);return}
  if(k.length>=3){const n=allNat.filter(x=>ck(x).includes(k));if(n.length){n.forEach(x=>uq(P.nat,x));return}const pv=PROVS.filter(x=>ck(x).includes(k));if(pv.length){pv.forEach(x=>uq(P.place,x));return}}
  uq(P.txt,k)};
 for(let i=0;i<T.length;){let u=1;for(let j=Math.min(T.length,i+4);j>i+1;j--){const c=T.slice(i,j).join('');if(chgHas(c)){uq(P.chg,ck(c));u=j-i;break}}if(u==1)cls(T[i]);i+=u}
 NLc={q,P};return P}
function addAbr(b){const x=b.closest('.abr'),k=x.querySelector('.ak').value.trim(),v=x.querySelector('.av').value.trim();if(!k||!v)return;ABRu[k]=v;x.querySelector('.ak').value=x.querySelector('.av').value='';saveAbr()}
function saveAbr(){try{localStorage.setItem('tm3_abbr',JSON.stringify(ABRu))}catch(e){}NLc={q:null,P:null};render()}
function renderAbr(){const u=Object.entries(ABRu),b=Object.entries(ABR0).filter(([k,v])=>!(k in ABRu)&&ck(k)!=ck(v));const h=(u.length?'<div class="ah">คำย่อที่สอนเพิ่ม ('+u.length+')</div>'+u.map(([k,v])=>`<span class="u">${esc(k)} = ${esc(v)} <button type="button" data-ab="${esc(k)}" title="ลบ">✕</button></span>`).join(''):'')+'<div class="ah">คำย่อพื้นฐาน ('+b.length+')</div>'+b.map(([k,v])=>`<span>${esc(k)} = ${esc(v)}</span>`).join('');document.querySelectorAll('.abrlist').forEach(e=>e.innerHTML=h)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-ab]');if(b){delete ABRu[b.dataset.ab];saveAbr()}});
document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.closest('.abrin')){e.preventDefault();addAbr(e.target)}});
/* 📖 คำย่อ: ปิดเมื่อคลิกที่อื่น หรือกด Esc */
document.addEventListener('pointerdown',e=>{document.querySelectorAll('details.abr[open]').forEach(d=>{if(!d.contains(e.target))d.open=false})},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('details.abr[open]').forEach(d=>{d.open=false;const s=d.querySelector('summary');s&&s.focus()})});
function chipPred(col){const t=[],ex=[];if(FS.nl){getNL(FS.nl).chg.forEach(x=>t.push(x))}const f=col=='charge'?FS.charge:FS.rel;if(f)ex.push(ck(f));
 (typeof DRS!='undefined'&&DRctx?DRS:[]).forEach(c=>{if(c.k==(col=='charge'?'chg':'rel'))ex.push(ck(c.v))});if(!t.length&&!ex.length)return null;return x=>{const q=ck(x);return t.some(s=>q.includes(s))||ex.includes(q)}}
function visChips(r,k,strict){const a=chips(r[k]),p=chipPred(k);if(!p)return a;const f=a.filter(p);return strict||f.length?f:a}
const vc=(r,k)=>joinChips(visChips(r,k,false));
let DRS=[],DRF='',DRctx=false;const DRX=new Set();const LVC=['var(--lv0)','var(--lv1)','var(--lv2)','var(--lv3)','var(--lv4)','var(--lv5)'],lvc=i=>LVC[Math.min(i,LVC.length-1)];
const ageB=a=>{if(a===''||a==null)return'ไม่ระบุ';a=+a;return a<20?'ต่ำกว่า 20 ปี':a<30?'20–29 ปี':a<40?'30–39 ปี':a<50?'40–49 ปี':a<60?'50–59 ปี':'60 ปีขึ้นไป'};
const DIMS=[['type','การปฏิบัติ'],['team','ชุดปฏิบัติการ'],['chg','คดี'],['rel','คดีที่เกี่ยวข้อง'],['nat','สัญชาติ'],['place','จังหวัด'],['mon','รายเดือน'],['intel','การข่าว'],['sex','เพศ'],['age','ช่วงอายุ']];
function condOK(r,c){switch(c.k){case'fine':return +r.fine>0;case'cases':return cs(r)>0;case'news':return r.intel=='ส่งข่าว';case'chg':return chips(r.charge).some(x=>ck(x)==ck(c.v));case'rel':return chips(r.rel).some(x=>ck(x)==ck(c.v));case'mon':return r.date.startsWith(c.v);case'age':return ageB(r.age)==c.v;default:return ck(r[c.k]||'ไม่ระบุ')==ck(c.v)}}
function dimVals(r,k){switch(k){case'chg':return visChips(r,'charge',true);case'rel':return visChips(r,'rel',true);case'mon':return[r.date.slice(0,7)];case'age':return[ageB(r.age)];default:return[String(r[k]||'').trim()||'ไม่ระบุ']}}
const dLab=(k,v)=>k=='mon'?MON[+v.slice(5)-1]+' '+v.slice(0,4):v;
const cLab=c=>({cases:'มีจำนวนคดี',fine:'มีค่าปรับ',news:'ส่งข่าว',chg:'คดี: '+c.v,rel:'คดีเกี่ยวข้อง: '+c.v,nat:'สัญชาติ '+c.v,place:'จ.'+c.v,mon:dLab('mon',c.v),intel:'การข่าว: '+c.v,sex:'เพศ'+c.v,age:'อายุ '+c.v}[c.k]||c.v);
function openDR(c,f){DRS=c||[];DRF=f||'';renderDR();$('dw').classList.add('on');$('dwbg').classList.add('on');$('dw').setAttribute('aria-hidden','false')}
function closeDR(){$('dw').classList.remove('on');$('dwbg').classList.remove('on');$('dw').setAttribute('aria-hidden','true');DRS=[]}
function fbarH(){const g=[];if(FS.a||FS.b)g.push('ช่วงเวลา '+(FS.a?fd(FS.a):'…')+' – '+(FS.b?fd(FS.b):'ปัจจุบัน'));
 SEL.filter(([k])=>FS[k]).forEach(([k,l])=>{const v=k=='mon'?mlabel(FS[k]):FS[k];g.push(String(v).startsWith(l)?v:l+' '+v)});if(FS.a1||FS.a2)g.push('อายุ '+(FS.a1||'0')+'–'+(FS.a2||'∞'));if(FS.hf)g.push(FS.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(FS.hc)g.push('มีจำนวนคดี');if(FS.hl)g.push(FS.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');if(FS.name)g.push('ชื่อ: '+FS.name);if(FS.pp)g.push('พาสปอร์ต: '+FS.pp);if(FS.q)g.push('ค้นหา: '+FS.q);if(FS.nl)g.push('คำค้น: '+FS.nl);
 return`<div class="fbar"><b>🔎 กำลังกรอง</b>`+(g.length||DRS.length?g.map(x=>`<span class="fg0" title="ตัวกรองจากแดชบอร์ด">${esc(x)}</span>`).join('')+DRS.map((c,i)=>`<span class="fg1" style="background:${lvc(i+1)};color:var(--lvt)" title="ระดับที่เจาะ">ระดับ ${i+1}: ${esc(cLab(c))}</span>`).join(''):'<span class="fg2">ไม่มีตัวกรอง — แสดงข้อมูลทั้งหมด</span>')+'</div>'}
let DRFLAT=false;/* ทดลอง 1: กดผลรวมแล้วแสดงรายการข้อมูลทันที ไม่แสดงหัวข้อย่อย */
function renderDR(){DRctx=true;const S=rows().filter(r=>DRS.every(c=>condOK(r,c))),n=sm(S),self=sm(S.filter(r=>r.type=='จับเอง')),fine=S.reduce((t,r)=>t+(+r.fine||0),0),news=S.filter(r=>r.intel=='ส่งข่าว').length;
 $('dwt').textContent=DRS.length?DRS.map(cLab).join(' · '):({nat:'สัญชาติทั้งหมด',chg:'ค่าปรับ'}[DRF]||'ข้อมูลทั้งหมด (ตามตัวกรอง)');
 $('dwc').innerHTML=(DRS.length?DRS.map((c,i)=>`<button type="button" data-rm="${i}" style="background:${lvc(i+1)};border-color:${lvc(i+1)};color:var(--lvt)">ระดับ ${i+1}: ${esc(cLab(c))} ✕</button>`).join('')+'<button type="button" data-rm="all" class="all">ล้างทั้งหมด</button>':'<span>แสดงข้อมูลทั้งหมดตามตัวกรองปัจจุบัน</span>');
 const kp=[['ผู้ต้องหา',n+' ราย',null],['จับเอง',self+' ราย',{k:'type',v:'จับเอง'}],['ร่วมจับ',(n-self)+' ราย',{k:'type',v:'ร่วมจับ'}],['ค่าปรับรวม',fine.toLocaleString()+' บาท',{k:'fine',v:'1'}],['ส่งข่าว',news+' ครั้ง',{k:'news',v:'1'}],['รายการ',S.length+' แถว',null]];
 const base=rows(),dep=DRS.length,cc=lvc(dep);
 let h='<div class="lvp"><div class="lvh">เส้นทางการเจาะข้อมูล</div>'+[{l:'ข้อมูลทั้งหมด (ตามตัวกรอง)'}].concat(DRS.map(c=>({l:cLab(c)}))).map((x,i)=>{const n=sm(base.filter(r=>DRS.slice(0,i).every(c=>condOK(r,c)))),cur=i==dep;
  return`<div class="lv${cur?' cur':''}" data-lv="${i}" style="--lc:${lvc(i)};margin-left:${Math.min(i,5)*18}px;font-size:${Math.max(12,15-i)}px;padding:${Math.max(4,9-i*1.5)}px ${Math.max(8,13-i)}px">${i?'<span class="ar">↳</span>':''}<span class="tg">${i?'ระดับ '+i:'หลัก'}</span><span class="lt">${esc(x.l)}</span><b>${n.toLocaleString()} ราย</b>${i?`<button type="button" class="lx" data-rm="${i-1}" title="ลบระดับนี้และระดับย่อย">✕</button>`:''}</div>`}).join('')+'</div>';
 h+=`<div class="lvn" style="--lc:${cc}">${dep?`รายละเอียดของ <b>ระดับ ${dep}</b> — ย่อยมาจาก “${esc(dep>1?cLab(DRS[dep-2]):'ข้อมูลทั้งหมด')}”`:'รายละเอียดระดับหลัก'}${DRFLAT?'':' · กดรายการด้านล่างเพื่อเจาะเป็นระดับ '+(dep+1)}</div>`;
 h+='<div class="dstk">'+fbarH()+'<div class="dk" style="--lc:'+cc+'">'+kp.filter(x=>!/^0(\s|$)/.test(x[1])).map(([l,v,c])=>`<button type="button" class="dkb" ${c&&!DRS.some(d=>d.k==c.k)?`data-dk="${c.k}" data-dv="${esc(c.v)}"`:'disabled'}><b>${v}</b><span>${l}</span></button>`).join('')+'</div></div>';
 if(!S.length){h+='<p class="note">ไม่พบข้อมูลตามเงื่อนไขนี้</p>';$('dwb').innerHTML=h;DRctx=false;$('dwb').scrollTop=0;return}
 let ord=DIMS.slice().sort((a,b)=>(b[0]==DRF)-(a[0]==DRF));{const ci=ord.findIndex(x=>x[0]=='chg'),ri=ord.findIndex(x=>x[0]=='rel');if(ci>=0&&ri>=0){const R2=ord.splice(ri,1)[0];ord.splice(ord.findIndex(x=>x[0]=='chg')+(DRF=='rel'?0:1),0,R2)}}let ix=0;h+='<div class="ddg">';
 (DRFLAT?[]:ord).forEach(([k,l])=>{if(DRS.some(c=>c.k==k||(k=='intel'&&c.k=='news')||(k=='type'&&false)))return;const m={};S.forEach(r=>dimVals(r,k).forEach(v=>{if(k=='intel'&&(v=='ไม่ระบุ'||ck(v)==ck('ไม่มีข่าว')))return;m[v]=(m[v]||0)+(k=='intel'?1:w(r))}));let e=Object.entries(m).filter(x=>x[1]>0);if(!e.length)return;
  e.sort(k=='mon'?(a,b)=>a[0]<b[0]?-1:1:(a,b)=>b[1]-a[1]);if(e.length<2&&k!='chg')return;const mx=Math.max(...e.map(x=>x[1])),more=e.length-12;e=e.slice(0,12);const u=k=='intel'?'ครั้ง':'ราย';
  const XR=(k=='chg'||k=='rel')?(()=>{const o=k=='chg'?'rel':'chg',X={};S.forEach(r=>{const A=dimVals(r,k),B=dimVals(r,o);A.forEach(a=>B.forEach(b=>{if(b=='ไม่ระบุ')return;(X[a]=X[a]||{})[b]=(X[a][b]||0)+w(r)}))});return{o,X}})():null;
  ix++;h+=`<section class="dd c${(ix-1)%4} d${Math.min(dep,3)}" style="--lc:${cc}"><h5><i>${ix}</i>${l}<small>${e.length+Math.max(0,more)} รายการ</small></h5>`+e.map(([v,c])=>{const row=`<button type="button" class="di" data-dk="${k}" data-dv="${esc(v)}"><span class="nm">${esc(dLab(k,v))}</span><span class="br"><i style="width:${Math.max(3,c/mx*100)}%"></i></span><b>${c.toLocaleString()} <small>${u}</small></b></button>`;if(!XR)return row;
   const sub=Object.entries(XR.X[v]||{}).sort((a,b)=>b[1]-a[1]);if(!sub.length)return`<div class="dix"><div class="dixr">${row}<span class="xb0"></span></div></div>`;const key=k+'|'+v,on=DRX.has(key);
   return`<div class="dix"><div class="dixr">${row}<button type="button" class="xb${on?' on':''}" data-xp="${esc(key)}" aria-expanded="${on}" title="ดู${k=='chg'?'คดีที่เกี่ยวข้อง':'คดีหลัก'}">${sub.length}<i>▸</i></button></div><div class="xp${on?' on':''}"><div class="xhd">↳ ${k=='chg'?'คดีที่เกี่ยวข้อง':'คดีหลักที่พบร่วม'}</div>${sub.slice(0,8).map(([b,n])=>`<button type="button" class="di sub" data-dk="${k}" data-dv="${esc(v)}" data-dk2="${XR.o}" data-dv2="${esc(b)}"><span class="nm">${esc(b)}</span><b>${n.toLocaleString()} <small>${u}</small></b></button>`).join('')}${sub.length>8?`<p class="note">และอีก ${sub.length-8} รายการ</p>`:''}</div></div>`}).join('')+(more>0?`<p class="note">และอีก ${more} รายการ</p>`:'')+'</section>'});
 h+='</div>';
 const L=S.slice().sort((x,y)=>String(y.date).localeCompare(String(x.date))||(+y.id||0)-(+x.id||0)).slice(0,100),TCc={'ชป.1':'#0891b2','ชป.2':'#d97706','ชป.3':'#7c3aed'},fx=(l,v)=>v?`<span><em>${l}</em><i class="v">${v}</i></span>`:'';
 h+=`<section class="dd full c${ix%4}" style="--lc:${cc}"><h5><i>${ix+1}</i>รายการข้อมูล<small>${S.length} แถว${S.length>100?' (แสดง 100 แถวล่าสุด)':''}</small></h5><div class="rcl">`+L.map(r=>{const c=joinChips(chips(r.charge)),rl=joinChips(chips(r.rel)),sa=[r.sex&&r.sex!='ไม่ระบุ'?esc(r.sex):'',r.age?'อายุ '+esc(r.age):''].filter(Boolean).join(' · ');
  return`<div class="rc"><div class="r1"><span class="dt">${fd(r.date)}</span><span class="tmc" style="--tc:${TCc[r.team]||'#64748b'}">${esc(r.team)}</span><span class="pil ${r.type=='จับเอง'?'pa':'pb'}">${esc(r.type)}</span><span class="nmx pii">${esc(r.name)||'-'}</span><span class="nn" style="color:var(--sb)">${w(r)} <small>ราย</small></span></div><div class="r2">${fx('สัญชาติ',esc(r.nat))}${fx('เพศ/อายุ',sa)}${fx('พาสปอร์ต/บัตร',r.pp?'<span class="pii">'+esc(r.pp)+'</span>':'')}${fx('จังหวัด',esc(r.place))}${fx('คดี',esc(c)+(rl&&ck(rl)!=ck(c)?' <span style="color:var(--m)">↳ '+esc(rl)+'</span>':''))}${fx('หน่วยร่วม',esc(r.joint))}${fx('จำนวนคดี',cs(r)?(cs(r)+(csAuto(r)?' <small class="csa">(ตามจำนวนราย)</small>':'')):'')}${fx('ค่าปรับ',r.fine?(+r.fine).toLocaleString()+' บาท':'')}${fx('การข่าว',r.intel&&r.intel!='ไม่มีข่าว'?esc(r.intel):'')}${String(r.link||'').trim()?`<span><em>ข่าว</em><i class="v">${lkCell(r)}</i></span>`:''}</div>${r.note?`<details><summary>หมายเหตุ</summary><div>${esc(r.note)}</div></details>`:''}</div>`}).join('')+'</div></section>';
 $('dwb').innerHTML=h;DRctx=false;$('dwb').scrollTop=0;
 }
$('dap').onclick=()=>{applyDR();document.querySelector('[data-t=d]').click()};$('dad').onclick=()=>applyDR();
function applyDR(){DRS.forEach(c=>{if(c.k=='chg')FS.charge=c.v;else if(c.k=='fine')FS.hf='1';else if(c.k=='cases')FS.hc='1';else if(c.k=='news')FS.intel='ส่งข่าว';else if(c.k=='mon'){FS.mon=c.v;FS.per='';FS.a='';FS.b=''}else if(c.k=='age'){const m=c.v.match(/\d+/g)||[];if(/ต่ำกว่า/.test(c.v)){FS.a1='';FS.a2='19'}else if(/ขึ้นไป/.test(c.v)){FS.a1=m[0];FS.a2=''}else if(m.length==2){FS.a1=m[0];FS.a2=m[1]}}else FS[c.k]=c.v});
 $('dw').classList.remove('on');$('dwbg').classList.remove('on');DRS=[];render()}
$('dwb').addEventListener('click',e=>{const x=e.target.closest('.lx');if(x){DRS=DRS.slice(0,+x.dataset.rm);renderDR();return}const lv=e.target.closest('[data-lv]');if(lv){DRS=DRS.slice(0,+lv.dataset.lv);renderDR();return}const xp=e.target.closest('[data-xp]');if(xp){const k=xp.dataset.xp,on=!DRX.has(k);on?DRX.add(k):DRX.delete(k);xp.classList.toggle('on',on);xp.setAttribute('aria-expanded',on);xp.closest('.dix').querySelector('.xp').classList.toggle('on',on);return}
 const b=e.target.closest('[data-dk]');if(!b)return;DRS.push({k:b.dataset.dk,v:b.dataset.dv});if(b.dataset.dk2)DRS.push({k:b.dataset.dk2,v:b.dataset.dv2});renderDR()});
$('dwc').addEventListener('click',e=>{const b=e.target.closest('[data-rm]');if(!b)return;if(b.dataset.rm=='all')DRS=[];else DRS=DRS.slice(0,+b.dataset.rm);renderDR()});
$('dwx').onclick=closeDR;$('dwbg').onclick=closeDR;document.addEventListener('keydown',e=>{if(e.key=='Escape'&&$('dw').classList.contains('on'))closeDR()});
$('kp').addEventListener('click',e=>{const d=e.target.closest('[data-kpi]');if(!d)return;const t=d.dataset.kpi;
 if(/จำนวนคดี/.test(t))openDR([{k:'cases',v:'1'}],'chg');else if(/จับเอง/.test(t))openDR([{k:'type',v:'จับเอง'}]);else if(/ร่วมจับ/.test(t))openDR([{k:'type',v:'ร่วมจับ'}]);else if(/สัญชาติ/.test(t))openDR([],'nat');else if(/ข้อหา/.test(t))openDR([],'chg');else if(/ค่าปรับ/.test(t))openDR([{k:'fine',v:'1'}],'chg');else if(/ส่งข่าว/.test(t))openDR([{k:'news',v:'1'}],'chg');else openDR([],'type')});
['c5l','c3l'].forEach(id=>$(id).addEventListener('click',e=>{const t=e.target.closest('[data-k]');if(t)openDR([{k:t.dataset.k,v:t.dataset.v}])}));
$('tt').addEventListener('click',e=>{const t=e.target.closest('[data-team]');if(t)openDR([{k:'team',v:t.dataset.team}])});
function nlOK(r,P,sd){const y=+r.date.slice(0,4),mo=+r.date.slice(5,7);if(!sd){if(P.ym.length&&!P.ym.includes(r.date.slice(0,7)))return false;if(P.fy.length&&!P.fy.some(f=>r.date>=(f-1)+'-10-01'&&r.date<=f+'-09-30'))return false;
 if(P.y.length&&!P.y.includes(y)||P.m.length&&!P.m.includes(mo))return false}
 if(P.team.length&&!P.team.includes(r.team)||P.type.length&&!P.type.includes(r.type)||P.sex.length&&!P.sex.includes(r.sex)||P.intel.length&&!P.intel.includes(r.intel))return false;
 if(P.nat.length&&!P.nat.some(v=>ck(v)==ck(r.nat))||P.place.length&&!P.place.some(v=>ck(v)==ck(r.place)))return false;
 if(P.chg.length){const cs=[...chips(r.charge),...chips(r.rel)].map(ck);if(!P.chg.some(t=>cs.some(c=>c.includes(t))))return false}
 if(P.txt.length){const h=ck([r.name,r.pp,r.note,r.joint,r.place,r.charge,r.rel,r.nat,r.intel].join('|'));if(!P.txt.every(t=>h.includes(t)))return false}return true}
function nlDesc(P){const o=[],ad=(l,a,x='')=>{if(a.length)o.push(`<span class="${x}">${l}: ${esc(a.join(', '))}</span>`)};
 ad('ปีงบประมาณ',P.fy.map(String));ad('ปี',P.y.map(String));ad('เดือน',P.ym.map(v=>MON[+v.slice(5)-1]+' '+v.slice(0,4)));ad('เดือน',P.m.map(m=>MON[m-1]));ad('ชุด',P.team);ad('การปฏิบัติ',P.type);ad('เพศ',P.sex);ad('การข่าว',P.intel);ad('สัญชาติ',P.nat);ad('จังหวัด',P.place);ad('คดี (มีคำว่า)',P.chg.map(k=>[...SC,...SR].find(x=>ck(x)==k)||k));ad('คำอื่น',P.txt,'x');
 return (o.length?'<b>ระบบเข้าใจว่า:</b> '+o.join(''):'')+(P.ex.length?'<em class="exl">แปลคำย่อ: '+esc([...new Set(P.ex)].join(' · '))+'</em>':'')}
var TMODE='';
const rows=(sd)=>{const f=FS,NP=f.nl?getNL(f.nl):null,TMx=TMODE&&!$('s').classList.contains('hide')?TMODE:'';return D.filter(r=>{if(TMx&&r.team!==TMx)return false;if(NP&&!nlOK(r,NP,sd))return false;if(!sd&&(f.a&&r.date<f.a||f.b&&r.date>f.b))return false;const ag=r.age===''?null:+r.age;
 if(f.a1&&(ag==null||ag<+f.a1))return false;if(f.a2&&(ag==null||ag>+f.a2))return false;
 for(const[k]of SEL){if(!f[k]||sd&&k=='mon')continue;if(k=='charge'||k=='rel'){if(!chips(r[k]).some(x=>ck(x)==ck(f[k])))return false}else if(ck(k=='mon'?r.date.slice(0,7):r[k])!=ck(f[k]))return false}
 if(f.hf&&(f.hf=='1')!=!!+r.fine)return false;if(f.hc&&!(cs(r)>0))return false;if(f.hl&&(f.hl=='1')!=(lkN(r.link)>0))return false;
 if(f.name&&!lc(r.name).includes(lc(f.name)))return false;if(f.pp&&!lc(r.pp).includes(lc(f.pp)))return false;
 if(f.q&&![r.name,r.pp,r.charge,r.rel,r.nat,r.place,r.intel,r.note].join(' ').toLowerCase().includes(lc(f.q)))return false;return true}).sort((x,y)=>x.date<y.date?-1:1)};
const cnt=(R,f)=>{const m={};R.forEach(r=>{const k=f(r)||'ไม่ระบุ';m[k]=(m[k]||0)+w(r)});return Object.entries(m).sort((a,b)=>b[1]-a[1])};
let TBT=0;
const TBL={a:[]},LZ={};
function lazyBind(tbl,key){if(!tbl||!window.IntersectionObserver)return;let sn=$(key);if(!sn){sn=document.createElement('div');sn.id=key;sn.style.cssText='height:520px;margin-top:-520px;pointer-events:none;visibility:hidden;position:relative';tbl.after(sn)}
 let z=LZ[key];if(!z){z=LZ[key]={io:new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))z.more()})};z.more=()=>{z.io.disconnect();const tb=tbl.tBodies[0];if(!tb)return;const n=tb.rows.length;if(n>=TBL.a.length)return;tb.insertAdjacentHTML('beforeend',TBL.a.slice(n,n+150).join(''));if(tb.rows.length<TBL.a.length)z.io.observe(sn)}}
 z.io.disconnect();const tb=tbl.tBodies[0];if(tb&&tb.rows.length<TBL.a.length)z.io.observe(sn)}
function TBR(a){const t=++TBT,N=100;TBL.a=a;if(!window.IntersectionObserver||a.length<=N+40)return a.join('');setTimeout(()=>{if(t===TBT)lazyBind($('tb'),'tbmore')},0);return a.slice(0,N).join('')}
function render(){NLc={q:null,P:null};renderAbr();buildOpts();syncF();const R=rows();
 {const TC={'ชป.1':'#0891b2','ชป.2':'#d97706','ชป.3':'#7c3aed'},cols=[3.5,8,5.5,7,12,6.5,7,9,12,4,6.5,6,6.5,6.5];
 $('tb').innerHTML='<colgroup>'+cols.map(x=>`<col style="width:${x}%">`).join('')+'</colgroup><thead><tr><th>#</th><th>วันที่</th><th>ชป.</th><th>การปฏิบัติ</th><th>ผู้ต้องหา / พาสปอร์ต</th><th>สัญชาติ</th><th>เพศ / อายุ</th><th>จังหวัด</th><th>คดี / คดีที่เกี่ยวข้อง</th><th class="n">ราย</th><th class="n">จำนวนคดี</th><th class="n">ค่าปรับ</th><th>การข่าว</th><th class="c">จัดการ</th></tr></thead><tbody>'+TBR(R.slice().sort((a,b)=>a.date<b.date?1:a.date>b.date?-1:(+b.id||0)-(+a.id||0)).map((r,i)=>{const c=vc(r,'charge'),rl=vc(r,'rel');
  return`<tr><td data-l="#" class="mu">${i+1}</td><td data-l="วันที่" class="nw">${fd(r.date)}</td><td data-l="ชป."><span class="tmc" style="--tc:${TC[r.team]||'#64748b'}">${esc(r.team)}</span></td><td data-l="การปฏิบัติ"><span class="pil ${r.type=='จับเอง'?'pa':'pb'}">${esc(r.type)}</span>${r.joint?`<small>${esc(r.joint)}</small>`:''}</td><td data-l="ผู้ต้องหา"><b class="pii">${esc(r.name)||'-'}</b>${r.pp?`<small class="pii">${esc(r.pp)}</small>`:''}</td><td data-l="สัญชาติ">${esc(r.nat)||'-'}</td><td data-l="เพศ/อายุ">${esc(r.sex)||'-'}${r.age?' · '+r.age:''}</td><td data-l="จังหวัด">${esc(r.place)||'-'}</td><td data-l="คดี" title="${esc(r.charge)}${r.rel?' | '+esc(r.rel):''}"><span class="cg1">${esc(c)}</span>${rl&&ck(rl)!=ck(c)?`<small>↳ ${esc(rl)}</small>`:''}</td><td data-l="ราย" class="n"><b>${w(r)}</b></td><td data-l="จำนวนคดี" class="n">${cs(r)?(csAuto(r)?`<span class="csa" title="ไม่ได้ระบุจำนวนคดี — แสดงตามจำนวนราย">${cs(r)}</span>`:esc(r.cases)):'-'}</td><td data-l="ค่าปรับ" class="n">${r.fine?(+r.fine).toLocaleString():'-'}</td><td data-l="การข่าว">${r.intel&&r.intel!='ไม่มีข่าว'?`<span class="pil pn">${esc(r.intel)}</span>`:`<span class="mu">${esc(r.intel)||'-'}</span>`}${' '+lkCell(r)}</td><td class="c act"><button class="ib" title="แก้ไข" onclick="ed(${r.id})">✏️</button><button class="ib dg" title="ลบ" onclick="rm(${r.id})">🗑</button></td></tr>`}))+'</tbody>'}
 $('cnt').textContent='แสดง '+R.length.toLocaleString()+' จาก '+D.length.toLocaleString()+' แถว ('+sm(R).toLocaleString()+' ราย)';if(RVMODE)rvRender();else{dash(R);requestAnimationFrame(()=>{try{kpFit()}catch(e){}})}try{dmSync()}catch(e){}}
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* ลิงก์ข่าว: ตรวจจับลิงก์ในเซลล์ที่มีข้อความปนหลายลิงก์ */
const LKR=/(?:https?:\/\/|www\.)[A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+/gi;
const lkList=s=>{const o=[];String(s||'').replace(LKR,m=>{m=m.replace(/[.,;:!?)\]'"]+$/,'');if(m.length>4)o.push(/^www\./i.test(m)?'https://'+m:m);return m});return[...new Set(o)]};
const lkN=s=>lkList(s).length;
const lkCell=r=>{const t=String(r.link||'').trim();if(!t)return'';const L=lkList(t);return(L.length?`<a class="lk1" href="${esc(L[0])}" target="_blank" rel="noopener" title="${L.length>1?'เปิดลิงก์แรก (มี '+L.length+' ลิงก์)':'เปิดลิงก์ข่าว'}">🔗</a>`:'')+`<button type="button" class="lkb" data-lk="${r.id}" title="ดูข้อมูลทั้งหมดในเซลล์${L.length?' / เลือกเปิดลิงก์ ('+L.length+')':''}">${L.length>1?'<b>'+L.length+'</b>':'⋯'}</button>`};
function lkView(r){const t=String(r.link||'');const L=lkList(t);const o=document.createElement('div');o.className='lkm';
 let h='',last=0;t.replace(LKR,(m,i)=>{h+=esc(t.slice(last,i));const c=m.replace(/[.,;:!?)\]'"]+$/,''),tail=m.slice(c.length);h+=`<a href="${esc(/^www\./i.test(c)?'https://'+c:c)}" target="_blank" rel="noopener">${esc(c)}</a>`+esc(tail);last=i+m.length;return m});h+=esc(t.slice(last));
 o.innerHTML=`<div class="lkbox" role="dialog" aria-modal="true"><div class="lkh"><b>🔗 ลิงก์ข่าว</b><small>${esc(r.date?fd(r.date):'')} ${esc(r.team||'')}</small><button type="button" class="lkx" aria-label="ปิด">✕</button></div><div class="lkc"><div class="lkt">${h||'<i>ไม่มีข้อมูล</i>'}</div>${L.length?`<div class="lkl"><b>ลิงก์ที่พบ ${L.length} รายการ</b>${L.map((u,i)=>`<div class="lkr"><span class="lkn">${i+1}</span><span class="lku" title="${esc(u)}">${esc(u)}</span><a class="btn sm pr" href="${esc(u)}" target="_blank" rel="noopener">เปิด ↗</a><button type="button" class="btn sm" data-cp="${esc(u)}">คัดลอก</button></div>`).join('')}</div>`:'<p class="note">ไม่พบลิงก์ในเซลล์นี้ (เป็นข้อความอย่างเดียว)</p>'}<div class="lkf"><button type="button" class="btn sm" data-cp="${esc(t)}">คัดลอกข้อความทั้งหมด</button></div></div></div>`;
 const done=()=>{o.remove();document.removeEventListener('keydown',k)},k=e=>{if(e.key==='Escape')done()};document.addEventListener('keydown',k);
 o.addEventListener('click',e=>{if(e.target===o||e.target.closest('.lkx'))return done();const c=e.target.closest('[data-cp]');if(c){const v=c.dataset.cp,lab=c.textContent;const ok=()=>{c.textContent='คัดลอกแล้ว ✓';setTimeout(()=>{c.textContent=lab},1200)};try{navigator.clipboard.writeText(v).then(ok,()=>{const a=document.createElement('textarea');a.value=v;document.body.appendChild(a);a.select();try{document.execCommand('copy');ok()}catch(x){}a.remove()})}catch(x){}}});
 document.body.appendChild(o)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-lk]');if(!b)return;e.preventDefault();e.stopPropagation();const r=D.find(x=>String(x.id)===b.dataset.lk);if(r)lkView(r)},true);

window.ed=id=>{const r=D.find(x=>x.id==id);F.forEach(k=>$(k).value=r[k]||'');eid=id;$('ft').textContent='แก้ไขรายการ';document.querySelector('[data-t=f]').click()};
async function gsDeleteRow(r){
 if(NOGS())return;
 console.log('[gsDeleteRow] start, rec=',r&&r.id,'gsWriteOn=',gsWriteOn());
 let mcp=null;
 try{mcp=await claude.use('mcp')}catch(e){console.warn('[gsDeleteRow] claude.use(mcp) threw:',e)}
 if(!mcp){
  console.warn('[gsDeleteRow] mcp is null — connector unavailable');
  gsToast('⚠️ ลบในแอปแล้ว แต่ส่งคำสั่งลบไป Google Sheets ไม่ได้<br><small>ไม่มี MCP connector — ลองเปิดแอปใหม่หรือเชื่อมต่อ Google Sheets อีกครั้ง</small>',false);
  return;
 }
 try{
  const t=await gsTarget(mcp,(gsSrcOf(r)||gsSrcs()[0]).url),H=await gsHeader(mcp,t),HF=H.map(h=>GSH[h]||null),L=colL(H.length);
  console.log('[gsDeleteRow] sheet=',t.title,'cols=',H.length,'L=',L);
  // fuzzy match: date+team+charge+name ใกล้เคียง
  const fuzzy=rr=>rr&&rr.date===r.date&&ck(rr.team)===ck(r.team)&&ck(rr.charge)===ck(r.charge);
  let row=r.gsRow||null;
  if(row){
   const cur=(((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row},{cache:false})).payload||{}).values||[])[0]||[];
   const rr=gsRowRec(HF,cur);
   if(!fuzzy(rr)){console.log('[gsDeleteRow] gsRow',row,'no longer matches, will scan');row=null}
  }
  if(!row){
   const all=((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1:'+L},{cache:false})).payload||{}).values||[];
   console.log('[gsDeleteRow] scanning',all.length,'rows');
   for(let i=1;i<all.length;i++){const rr=gsRowRec(HF,all[i]||[]);
    if(fuzzy(rr)){const nameOk=!r.name||!rr.name||ck(rr.name)===ck(r.name);const natOk=!r.nat||!rr.nat||ck(rr.nat)===ck(r.nat);
     if(nameOk&&natOk){row=i+1;console.log('[gsDeleteRow] found at row',row);break}}}
  }
  if(!row){gsToast('⚠️ ลบในแอปแล้ว แต่หาแถวที่ตรงกันใน Google Sheets ไม่พบ<br><small>วันที่/ชป./คดีไม่ตรงกับข้อมูลในชีต</small>',false);return}
  const blanks=Array(H.length).fill('');
  await mcp.callTool(GSC,'update_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row,values:[blanks]});
  console.log('[gsDeleteRow] blanked row',row);
  gsToast('🗑️ ลบออกจาก Google Sheets แล้ว (แถว '+row+')',true)
 }
 catch(e){
  console.error('[gsDeleteRow] error',e);
  const msg=e&&e.code&&GSE[e.code]?GSE[e.code]+(e.code==='tool_error'&&e.message?' — '+esc(e.message).slice(0,140):''):esc((e&&(e.message||e.code))||e);
  gsToast('⚠️ ลบในแอปแล้ว แต่ลบใน Google Sheets ไม่สำเร็จ<br><small>'+msg+'</small>',false)
 }
}

// ---- in-page dialogs (native confirm/alert are blocked inside the sandboxed artifact frame) ----
function uiDlg(title,body,okL,noL,danger){return new Promise(res=>{const o=document.createElement('div');
 o.style.cssText='position:fixed;inset:0;z-index:100000;background:rgba(5,12,30,.55);display:grid;place-items:center;padding:16px';
 const e=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 o.innerHTML='<div style="background:var(--c);color:var(--t);border-radius:14px;width:min(440px,100%);box-shadow:0 20px 50px rgba(0,0,0,.35);overflow:hidden"><div style="background:linear-gradient(100deg,#0c2e72,#0037af);color:#fff;padding:12px 16px;font-weight:600;font-size:15.5px;border-bottom:3px solid #f2b705">'+e(title)+'</div><div style="padding:14px 16px;white-space:pre-wrap;font-size:14px;line-height:1.6;max-height:60vh;overflow:auto">'+e(body)+'</div><div style="display:flex;justify-content:flex-end;gap:8px;padding:0 16px 14px">'+(noL?'<button type="button" class="btn" data-r="0">'+e(noL)+'</button>':'')+'<button type="button" class="btn pr" data-r="1" style="'+(danger?'background:#dc2626;border-color:#dc2626':'')+'">'+e(okL||'ตกลง')+'</button></div></div>';
 const done=v=>{o.remove();document.removeEventListener('keydown',k);res(v)},k=ev=>{if(ev.key==='Escape')done(false);else if(ev.key==='Enter')done(true)};
 o.addEventListener('click',ev=>{const b=ev.target.closest('[data-r]');if(b)done(b.dataset.r==='1');else if(ev.target===o)done(false)});
 document.addEventListener('keydown',k);document.body.appendChild(o);setTimeout(()=>{const b=o.querySelector('[data-r="1"]');b&&b.focus()},0)})}
const uiConfirm=(t,b,ok,no,d)=>uiDlg(t,b,ok||'ตกลง',no||'ยกเลิก',d);
const uiAlert=(m,ok)=>{const i=String(m).indexOf('\n');return uiDlg(ok===false?'⚠️ แจ้งเตือน':'แจ้งเตือน',m,'ตกลง',null)};
window.rm=async id=>{
 const rec=D.find(x=>x.id==id);
 const preview=rec?(rec.name||rec.nat||'?')+' / '+fd(rec.date):'(ไม่พบ)';
 if(!await uiConfirm('ลบรายการนี้?',preview+'\nจะลบออกจากแอปและ Google Sheets','🗑 ลบ','ยกเลิก',true))return;
 const delDate=new Date().toLocaleDateString('th-TH',{year:'numeric',month:'long',day:'numeric'});
 const snapData=D.map(x=>x.id==id?Object.assign({},x,{_deleted:'ลบแล้ว เมื่อ '+delDate}):x);
 vSnap('อัตโนมัติ — ก่อนลบรายการ ('+delDate+')',snapData);
 D=D.filter(x=>x.id!=id);persist();renderTodayLog();render();
 if(!rec){gsToast('ℹ️ ลบจากแอปแล้ว (ไม่พบรายการใน D)',false);return}
 if(!gsWriteOn(rec)){gsToast('ℹ️ ลบจากแอปแล้ว (การซิงค์ Google Sheets ปิดอยู่ — เปิดได้ที่ ✍️)',true);return}
 gsToast('⏳ กำลังลบใน Google Sheets...',true);
 // รัน gsDeleteRow แยกออกจาก GSQ chain เพื่อให้แน่ใจว่าทำงาน
 gsDeleteRow(rec).catch(e=>{
  console.error('[rm] gsDeleteRow threw',e);
  gsToast('⚠️ ลบในแอปแล้ว แต่เกิดข้อผิดพลาด: '+(e&&(e.message||e.code)||e),false)
 })
};
const TX='#eef5ff',GL='rgba(120,180,255,.14)',FT='Prompt, Sarabun, Tahoma, sans-serif';
const rgba=(h,a)=>{const n=parseInt(h.slice(1),16);return`rgba(${n>>16},${n>>8&255},${n&255},${a})`};
const grad=(b,hz)=>c=>{const ch=c.chart,a=ch.chartArea;if(!a)return b;const g=hz?ch.ctx.createLinearGradient(a.left,0,a.right,0):ch.ctx.createLinearGradient(0,a.bottom,0,a.top);g.addColorStop(0,rgba(b,.30));g.addColorStop(.55,rgba(b,.8));g.addColorStop(1,b);return g};
const fillG=b=>c=>{const a=c.chart.chartArea;if(!a)return rgba(b,.1);const g=c.chart.ctx.createLinearGradient(0,a.bottom,0,a.top);g.addColorStop(0,rgba(b,0));g.addColorStop(1,rgba(b,.25));return g};
Chart.register({id:'glow',beforeDatasetDraw(c,a){const d=c.data.datasets[a.index];c.ctx.save();c.ctx.shadowColor=rgba(d.glow||'#22d3ee',.35);c.ctx.shadowBlur=c.config.type=='line'?4:0;c.ctx.shadowOffsetY=0},afterDatasetDraw(c){c.ctx.restore()}});
const shd=(h,f)=>{const n=parseInt(h.slice(1),16),m=v=>Math.max(0,Math.min(255,Math.round(f>0?v+(255-v)*f:v*(1+f))));return`rgb(${m(n>>16)},${m(n>>8&255)},${m(n&255)})`};
function dnFill(c,P,hv){const col=P[c.dataIndex%P.length]||P[0],ch=c.chart,A=ch.chartArea;if(!A||c.dataIndex==null)return col;const cx=(A.left+A.right)/2,cy=(A.top+A.bottom)/2,R=Math.min(A.right-A.left,A.bottom-A.top)/2,r=R*.72,g=ch.ctx.createRadialGradient(cx,cy,r,cx,cy,R);g.addColorStop(0,shd(col,-.38));g.addColorStop(.45,shd(col,hv?.1:0));g.addColorStop(.8,shd(col,hv?.4:.28));g.addColorStop(1,shd(col,-.1));return g}
Chart.register({id:'dn',beforeDatasetsDraw(c){const o=c.options.plugins.dn;if(!o||!o.on)return;const x=c.ctx,a=c.getDatasetMeta(0).data[0];if(!a)return;const{x:cx,y:cy,innerRadius:r,outerRadius:R}=a.getProps(['x','y','innerRadius','outerRadius'],true);x.save();
 let g=x.createRadialGradient(cx,cy,R*.9,cx,cy,R+12);g.addColorStop(0,(o.red?'rgba(167,139,250,.18)':'rgba(34,211,238,.16)'));g.addColorStop(1,(o.red?'rgba(167,139,250,0)':'rgba(34,211,238,0)'));x.fillStyle=g;x.beginPath();x.arc(cx,cy,R+12,0,7);x.fill();
 x.lineWidth=R-r;x.strokeStyle='rgba(255,255,255,.055)';x.beginPath();x.arc(cx,cy,(R+r)/2,0,7);x.stroke();
 g=x.createRadialGradient(cx,cy-r*.35,r*.1,cx,cy,r*.94);g.addColorStop(0,(o.red?'rgba(120,80,175,.5)':'rgba(60,110,200,.55)'));g.addColorStop(.7,(o.red?'rgba(40,20,60,.92)':'rgba(10,32,78,.92)'));g.addColorStop(1,(o.red?'rgba(22,12,34,.98)':'rgba(6,20,52,.98)'));x.fillStyle=g;x.beginPath();x.arc(cx,cy,r*.9,0,7);x.fill();
 x.lineWidth=1.2;x.strokeStyle=(o.red?'rgba(220,200,255,.35)':'rgba(165,243,252,.35)');x.beginPath();x.arc(cx,cy,r*.9,0,7);x.stroke();
 x.setLineDash([2,5]);x.strokeStyle=(o.red?'rgba(220,200,255,.28)':'rgba(165,243,252,.28)');x.beginPath();x.arc(cx,cy,r*.78,0,7);x.stroke();x.setLineDash([]);
 g=x.createLinearGradient(0,cy-r*.9,0,cy);g.addColorStop(0,'rgba(255,255,255,.16)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.beginPath();x.ellipse(cx,cy-r*.42,r*.7,r*.42,0,Math.PI,0);x.fill();x.restore()},
 beforeDatasetDraw(c){const o=c.options.plugins.dn;if(!o||!o.on)return;c.ctx.shadowColor='rgba(0,0,0,.5)';c.ctx.shadowBlur=12;c.ctx.shadowOffsetY=5},
 afterDatasetsDraw(c){const o=c.options.plugins.dn;if(!o||!o.on)return;const x=c.ctx,a=c.getDatasetMeta(0).data[0];if(!a)return;const{x:cx,y:cy,innerRadius:r,outerRadius:R}=a.getProps(['x','y','innerRadius','outerRadius'],true);x.save();
 x.beginPath();x.arc(cx,cy,R,Math.PI*1.08,Math.PI*1.92);x.arc(cx,cy,(R+r)/2,Math.PI*1.92,Math.PI*1.08,true);x.closePath();const g=x.createLinearGradient(0,cy-R,0,cy-r);g.addColorStop(0,'rgba(255,255,255,.34)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.globalCompositeOperation='source-atop';x.fill();x.restore()}});
const bFill=(col,hz)=>c=>{const ch=c.chart,a=ch.chartArea;if(!a)return col;const g=hz?ch.ctx.createLinearGradient(a.left,0,a.right,0):ch.ctx.createLinearGradient(0,a.bottom,0,a.top);g.addColorStop(0,shd(col,-.35));g.addColorStop(.6,col);g.addColorStop(1,shd(col,.22));return g};
const rr=(x,X,Y,W,H,r)=>{r=Math.max(0,Math.min(r,W/2,H/2));x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+W,Y,X+W,Y+H,r);x.arcTo(X+W,Y+H,X,Y+H,r);x.arcTo(X,Y+H,X,Y,r);x.arcTo(X,Y,X+W,Y,r);x.closePath()};
const bBox=(c,e)=>{const p=e.getProps(['x','y','base','width','height'],true);return c.options.indexAxis=='y'?{X:Math.min(p.base,p.x),Y:p.y-p.height/2,W:Math.abs(p.x-p.base),H:p.height,hz:1}:{X:p.x-p.width/2,Y:Math.min(p.y,p.base),W:p.width,H:Math.abs(p.base-p.y),hz:0}};
Chart.register({id:'gb',beforeDatasetsDraw(c){const o=c.options.plugins.gb;if(!o||!o.on)return;const x=c.ctx,A=c.chartArea,m=c.getDatasetMeta(c.data.datasets.length-1);x.save();
 m.data.forEach(e=>{const b=bBox(c,e);let X,Y,W,H;if(b.hz){X=A.left;Y=b.Y;W=A.right-A.left;H=b.H}else{X=b.X;Y=A.top;W=b.W;H=A.bottom-A.top}
  const g=b.hz?x.createLinearGradient(0,Y,0,Y+H):x.createLinearGradient(X,0,X+W,0);g.addColorStop(0,'rgba(255,255,255,.055)');g.addColorStop(1,'rgba(255,255,255,.055)');
  x.fillStyle=g;rr(x,X,Y,W,H,Math.min(10,(b.hz?H:W)/2));x.fill()});x.restore()},
 beforeDatasetDraw(c){const o=c.options.plugins.gb;if(!o||!o.on)return;c.ctx.shadowColor='rgba(0,0,0,.45)';c.ctx.shadowBlur=10;c.ctx.shadowOffsetY=4},
 afterDatasetsDraw(c){const o=c.options.plugins.gb;if(!o||!o.on)return;const x=c.ctx;x.save();
  c.data.datasets.forEach((d,di)=>{const m=c.getDatasetMeta(di);if(m.hidden)return;m.data.forEach((e,i)=>{if(!d.data[i])return;const b=bBox(c,e);if(b.W<1||b.H<1)return;
   const t=b.hz?b.H:b.W,r=Math.min(t/2,10);x.save();rr(x,b.X,b.Y,b.W,b.H,r);x.clip();
   const g=b.hz?x.createLinearGradient(0,b.Y,0,b.Y+b.H):x.createLinearGradient(b.X,0,b.X+b.W,0);
   g.addColorStop(0,'rgba(0,0,0,.34)');g.addColorStop(.42,'rgba(0,0,0,0)');g.addColorStop(.78,'rgba(255,255,255,.30)');g.addColorStop(1,'rgba(0,0,0,.10)');
   x.fillStyle=g;x.fillRect(b.X,b.Y,b.W,b.H);x.restore()})});x.restore()}});
Chart.register({id:'cyl',afterDatasetsDraw(c){const o=c.options.plugins.cyl;if(!o||!o.on)return;const x=c.ctx,A=c.chartArea,ds=c.data.datasets,m0=c.getDatasetMeta(0);x.save();
 const el=(cx,cy,rx,ry)=>{x.beginPath();x.ellipse(cx,cy,rx,ry,0,0,Math.PI*2)};
 const body=(cx,rx,top,bot,col)=>{const g=x.createLinearGradient(cx-rx,0,cx+rx,0);g.addColorStop(0,shd(col,-.5));g.addColorStop(.28,shd(col,.18));g.addColorStop(.42,shd(col,.38));g.addColorStop(.62,col);g.addColorStop(1,shd(col,-.55));x.fillStyle=g;x.fillRect(cx-rx,top,rx*2,bot-top)};
 m0.data.forEach((e0,i)=>{const p=e0.getProps(['x','y','base','width'],true),cx=p.x,rx=p.width/2,ry=Math.max(3,rx*.24),base=p.base;
  const vals=ds.map(d=>+d.data[i]||0),tot=vals.reduce((a,b)=>a+b,0);
  // glass tank
  const tt=A.top;x.save();x.fillStyle='rgba(255,255,255,.045)';x.fillRect(cx-rx,tt,rx*2,base-tt);el(cx,tt,rx,ry);x.fillStyle='rgba(255,255,255,.06)';x.fill();x.lineWidth=1;x.strokeStyle='rgba(165,215,255,.22)';x.stroke();
  x.beginPath();x.moveTo(cx-rx,tt);x.lineTo(cx-rx,base);x.moveTo(cx+rx,tt);x.lineTo(cx+rx,base);x.strokeStyle='rgba(165,215,255,.12)';x.stroke();x.restore();
  // floor shadow
  x.save();el(cx,base+ry*.35,rx*1.15,ry*1.05);const sg=x.createRadialGradient(cx,base+ry*.35,1,cx,base+ry*.35,rx*1.15);sg.addColorStop(0,'rgba(0,0,0,.55)');sg.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=sg;x.fill();x.restore();
  if(!tot)return;
  let y=base;const tops=[];
  vals.forEach((v,di)=>{if(!v)return;const col=ds[di].backgroundColor0,e=c.getDatasetMeta(di).data[i],top=e.getProps(['y'],true).y;
   el(cx,y,rx,ry);x.fillStyle=shd(col,-.45);x.fill();
   body(cx,rx,top,y,col);
   el(cx,y,rx,ry);x.save();x.clip();x.restore();
   if(y!==base){x.beginPath();x.ellipse(cx,y,rx,ry,0,0,Math.PI);x.lineWidth=1.2;x.strokeStyle='rgba(255,255,255,.35)';x.stroke()}
   const cg=x.createLinearGradient(cx-rx,top-ry,cx+rx,top+ry);cg.addColorStop(0,shd(col,.55));cg.addColorStop(.6,shd(col,.15));cg.addColorStop(1,shd(col,-.15));el(cx,top,rx,ry);x.fillStyle=cg;x.fill();x.lineWidth=1;x.strokeStyle='rgba(255,255,255,.55)';x.stroke();
   tops.push([v,top,y]);y=top});
  // gloss stripe
  const yt=y;x.save();x.beginPath();x.rect(cx-rx,yt,rx*2,base-yt);x.clip();const gl=x.createLinearGradient(cx-rx,0,cx+rx,0);gl.addColorStop(.18,'rgba(255,255,255,0)');gl.addColorStop(.3,'rgba(255,255,255,.28)');gl.addColorStop(.4,'rgba(255,255,255,0)');x.fillStyle=gl;x.fillRect(cx-rx,yt,rx*2,base-yt);x.restore();
  // labels
  x.textAlign='center';x.textBaseline='middle';
  
  x.font='700 12.5px '+FT;x.textAlign='center';x.textBaseline='bottom';x.fillStyle='#fff';x.shadowColor='rgba(34,211,238,.6)';x.shadowBlur=6;x.fillText(tot,cx,yt-ry-2);x.shadowBlur=0});
 x.restore()}});
Chart.register({id:'runner',afterInit(c){if(!c.options.plugins.runner||!c.options.plugins.runner.on)return;try{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return}catch(e){}
 c.$rn={t:0,st:[]};let lt=0;const tick=ts=>{if(!c.ctx||!c.canvas||!c.canvas.isConnected)return;if(ts-lt>=40&&!document.hidden&&!window.__noRun&&c.canvas.offsetParent!==null){lt=ts;try{c.draw()}catch(e){}}requestAnimationFrame(tick)};requestAnimationFrame(tick)},
 afterDatasetsDraw(c){const R=c.$rn;if(!R||window.__noRun)return;const x=c.ctx,now=performance.now(),dt=Math.min(.05,R.t?(now-R.t)/1e3:0);R.t=now;
  const PL=[];c.data.datasets.forEach((d,di)=>{const m=c.getDatasetMeta(di).data;if(m.length<2)return;
   const X=[m[0].x],Y=[m[0].y];for(let i=1;i<m.length;i++){const a=m[i-1],b=m[i],q=a.getProps(['cp2x','cp2y'],true),r=b.getProps(['cp1x','cp1y'],true);for(let k=1;k<=24;k++){const t=k/24,u=1-t,px=u*u*u*a.x+3*u*u*t*(q.cp2x??a.x)+3*u*t*t*(r.cp1x??b.x)+t*t*t*b.x,py=u*u*u*a.y+3*u*u*t*(q.cp2y??a.y)+3*u*t*t*(r.cp1y??b.y)+t*t*t*b.y;X.push(Math.max(px,X[X.length-1]));Y.push(py)}}
   PL.push({X,Y,col:d.borderColor})});if(!PL.length)return;
  const x0=Math.max(...PL.map(p=>p.X[0])),x1=Math.min(...PL.map(p=>p.X[p.X.length-1])),W=x1-x0;if(W<=0)return;
  const at=(p,px)=>{const X=p.X;let lo=0,hi=X.length-1;while(hi-lo>1){const md=(lo+hi)>>1;X[md]>px?hi=md:lo=md}const f=(px-X[lo])/((X[hi]-X[lo])||1),dx=X[hi]-X[lo],dy=p.Y[hi]-p.Y[lo];return[px,p.Y[lo]+dy*f,dy/(Math.hypot(dx,dy)||1)]};
  const vb=W/7,G=vb*2.2,S=R.sh||(R.sh={u:0,v:vb,w:0,h:PL.map(()=>[])});
  if(S.w>0){S.w-=dt;if(S.w<=0){S.u=0;S.v=vb;S.h=PL.map(()=>[])}}else{const g=PL.reduce((a,p)=>a+at(p,x0+S.u)[2],0)/PL.length;S.v+=G*g*dt;S.v-=S.v*.45*dt;S.v=Math.max(vb*.35,Math.min(vb*2.6,S.v));S.u+=S.v*dt;if(S.u>=W){S.u=W;S.w=1.1}}
  const fade=S.w>0?Math.max(0,S.w/1.1):1;
  PL.forEach((p,di)=>{const[px,py]=at(p,x0+S.u),h=S.h[di]||(S.h[di]=[]),col=p.col;if(S.w<=0)h.push([px,py]);if(h.length>26)h.shift();
   x.save();x.globalCompositeOperation='lighter';
   h.forEach(([hx,hy],i)=>{const f=i/h.length;x.globalAlpha=fade*f*.5;x.fillStyle=col;x.beginPath();x.arc(hx,hy,1+f*2.6,0,7);x.fill()});
   x.globalAlpha=fade;const gr=x.createRadialGradient(px,py,0,px,py,15);gr.addColorStop(0,'#fff');gr.addColorStop(.18,col);gr.addColorStop(.45,col+'66');gr.addColorStop(1,col+'00');x.fillStyle=gr;x.beginPath();x.arc(px,py,15,0,7);x.fill();
   x.fillStyle='#fff';x.beginPath();x.arc(px,py,2.4,0,7);x.fill();x.restore()})}});
Chart.register({id:'lbl',afterDatasetsDraw(c){const o=c.options.plugins.lbl;if(!o||!o.on)return;const x=c.ctx;x.save();x.font='700 12px '+FT;x.fillStyle='#fff';x.lineWidth=3;x.strokeStyle='rgba(4,14,34,.92)';x.lineJoin='round';
 const put=(t,X,Y)=>{x.strokeText(t,X,Y);x.fillText(t,X,Y)};
 if(o.on=='stack'){x.textAlign='center';x.textBaseline='bottom';x.font='700 14px '+FT;x.shadowColor='rgba(34,211,238,.6)';x.shadowBlur=8;const put=(t,X,Y)=>x.fillText(t,X,Y);const ds=c.data.datasets;c.data.labels.forEach((_,i)=>{const t=ds.reduce((a,d)=>a+(d.data[i]||0),0),e=c.getDatasetMeta(ds.length-1).data[i];if(e&&t)put(t,e.x,e.y-5)})}
 else if(o.on=='arc'){x.textAlign='center';x.textBaseline='middle';c.getDatasetMeta(0).data.forEach((a,i)=>{const v=c.data.datasets[0].data[i];if(!v||o.nv)return;const p=a.tooltipPosition();put(v,p.x,p.y)});const A=c.chartArea,cx=(A.left+A.right)/2,cy=(A.top+A.bottom)/2;const a0=c.getDatasetMeta(0).data[0],ir=a0?a0.innerRadius:40,fz=Math.max(14,Math.min(30,ir*.5)),sz=Math.max(8.5,Math.min(11.5,ir*.19));x.font='500 '+sz+'px '+FT;x.fillStyle=o.red?'#c9b6f2':'#8fb3e0';x.fillText('รวม',cx,cy-fz*.72);x.font='700 '+fz+'px '+FT;x.fillStyle='#fff';x.shadowColor=o.red?'rgba(167,139,250,.55)':'rgba(34,211,238,.55)';x.shadowBlur=10;x.fillText(o.ctr,cx,cy+1);x.shadowBlur=0;x.font='600 '+sz+'px '+FT;x.fillStyle=o.red?'#e9d5ff':'#67e8f9';x.fillText(o.unit||'ราย',cx,cy+fz*.74)}
 else if(o.on=='pts'){x.textAlign='center';x.font='700 12.5px '+FT;const D=c.data.datasets;D.forEach((d,di)=>!d.nolbl&&c.getDatasetMeta(di).data.forEach((pt,i)=>{const v=d.data[i],oth=D.map(q=>q.data[i]),hi=v>=Math.max(...oth)&&!(di==1&&v==oth[0]);x.fillStyle=d.borderColor+'a0';x.font='500 11px '+FT;x.textBaseline=hi?'bottom':'top';const LX=Math.max(14,Math.min(c.width-14,pt.x)),LY=hi?Math.max(15,pt.y-9):Math.min(c.height-15,pt.y+9);x.fillText(v,LX,LY)}))}
 else if(o.on=='right'){x.textAlign='left';x.textBaseline='middle';c.getDatasetMeta(0).data.forEach((b,i)=>put(c.data.datasets[0].data[i],b.x+7,b.y))}
 x.restore()}});
const AX=(o={})=>({grid:{color:GL,drawTicks:false},border:{display:false},ticks:{color:TX,font:{size:11.5,weight:'500'},padding:6,...o}});
const LEG={position:'top',align:'end',labels:{color:TX,font:{size:12,weight:'600'},usePointStyle:true,pointStyle:'circle',boxWidth:9,boxHeight:9,padding:16}};
function wrapTH(t,mx){if(t.length<=mx)return t;const bad=/[ัิ-ฺ็-๎]/,lead=/[เ-ไ]/;let best=-1,bs=1e9,mid=t.length/2;
 for(let i=2;i<t.length-2;i++){if(bad.test(t[i])||lead.test(t[i-1]))continue;const lat=x=>/[A-Za-z0-9.)]/.test(x),sc=Math.abs(i-mid)-(t[i-1]==' '?3:0)-(lat(t[i-1])!=lat(t[i])?4:0);if(best<0||sc<bs){best=i;bs=sc}}
 return best<0?t:[t.slice(0,best).trim(),t.slice(best).trim()]}
/* spin: หมุนขวาแล้วหยุดสลับกัน — ชี้เมาส์แล้วหยุดและขยายชิ้นนั้นออกชั่วคราว */
const SPN={a:0,w:700,vt:60,nx:1.5,kick(){this.w=Math.max(this.w,1300+Math.random()*500)},step(dt,hold){const S=this;if(hold){S.w*=Math.exp(-4*dt)}else{S.nx-=dt;if(S.nx<=0){const r=Math.random();S.vt=r<.18?0:r<.5?25+Math.random()*60:r<.85?90+Math.random()*130:220+Math.random()*190;S.nx=.9+Math.random()*2.6}S.w+=(S.vt-S.w)*(1-Math.exp(-(S.w>S.vt?1.5:1.1)*dt))}S.a=(S.a+S.w*dt)%360}};
Chart.register({id:'spin',afterInit(c){const o=c.options.plugins.spin;if(!o||!o.on)return;try{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return}catch(e){}
 c._sp={hv:-1,ho:0,t:performance.now()};
 const loop=now=>{if(!c.ctx||!c.canvas||!c.canvas.isConnected||Object.values(CH).indexOf(c)<0)return;const S=c._sp;if(document.hidden||window.__noRun||now-S.t<33){requestAnimationFrame(loop);if(document.hidden)S.t=now;return}const dt=Math.min(.1,(now-S.t)/1e3);S.t=now;
  if(c.canvas.offsetParent){const hold=S.hv>=0||S.in,tg=S.hv>=0?16:0,ta=S.in&&S.hv<0?16:0;let ch=false;
   SPN.step(dt,hold);if(Math.abs(SPN.a-(c.options.rotation||0))>.01){c.options.rotation=SPN.a;ch=true}
   if(Math.abs(S.ho-tg)>.05){S.ho+=(tg-S.ho)*Math.min(1,dt*12);ch=true}else if(S.ho!==tg){S.ho=tg;ch=true}
    S.ao=S.ao||0;if(Math.abs(S.ao-ta)>.05){S.ao+=(ta-S.ao)*Math.min(1,dt*10);ch=true}else if(S.ao!==ta){S.ao=ta;ch=true}
   if(ch)c.update('none')}
  requestAnimationFrame(loop)};
 c.options.rotation=SPN.a;requestAnimationFrame(loop)},
 afterEvent(c,a){const S=c._sp;if(!S)return;const e=a.event;if(e.type=='mouseout'||e.type=='mouseleave'){S.hv=-1;S.in=false;return}if(e.type!='mousemove')return;{const m=c.getDatasetMeta(0).data[0];S.in=!!m&&Math.hypot(e.x-m.x,e.y-m.y)<=m.outerRadius*1.06}const el=c.getElementsAtEventForMode(e,'nearest',{intersect:true},false);S.hv=el.length?el[0].index:-1;if(S.hv>=0)S.hl=S.hv}});

/* แท่งสถิติบนแดชบอร์ด: รีเซ็ตเป็น 0 แล้วยืดออกตามข้อมูลเหมือนเกจโหลด */
let BAPEND=false;
function barsAnim(){BAPEND=false;return;try{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return}catch(e){}
 const sh=$('s');if(!sh||sh.classList.contains('hide')||sh.offsetParent===null){BAPEND=true;return}BAPEND=false;
 const L=[...document.querySelectorAll('#c5l .tr>span,#c3l .tr>span,#tt .bar>span')];if(!L.length)return;
 L.forEach(e=>{e._w=e.style.width;e.style.transition='none';e.style.width='0%'});void sh.offsetWidth;
 L.forEach((e,i)=>{const d=(i%8)*70;e.style.transition='width 1.1s cubic-bezier(.16,.84,.24,1) '+d+'ms';e.style.width=e._w});
 setTimeout(()=>L.forEach(e=>{e.style.transition=''}),1700)}
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{if(BAPEND)barsAnim()},80)));
function make(id,cfg){if(CH[id])CH[id].destroy();cfg.options=Object.assign({animation:false,responsive:true,maintainAspectRatio:false,onHover:(e,el)=>{e.native&&(e.native.target.style.cursor=el.length?'pointer':'default')}},cfg.options,cfg.options0||{});delete cfg.options0;CH[id]=new Chart($(id),cfg)}
let CMP='prev',CMA='',CMB='';try{CMP=localStorage.getItem('tm3_cmp')||'prev';CMA=localStorage.getItem('tm3_cmpa')||'';CMB=localStorage.getItem('tm3_cmpb')||''}catch(e){}
if(!['prev','mom','qoq','yoy','avg3','custom','team','off'].includes(CMP))CMP='prev';
const CMPN={prev:'ช่วงก่อนหน้า',mom:'เดือนก่อน',qoq:'ไตรมาสก่อน',yoy:'ช่วงเดียวกันปีก่อน',avg3:'ค่าเฉลี่ย 3 เดือนก่อนหน้า',custom:'ช่วงที่กำหนดเอง'};
const shM=(d,k)=>{const e=d.getDate()==new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),t=new Date(d.getFullYear(),d.getMonth()+k,1),L=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();return new Date(t.getFullYear(),t.getMonth(),e?L:Math.min(d.getDate(),L))};
const nDay=(A,B)=>Math.round((pd8(B)-pd8(A))/864e5)+1;
const mEnd=(y,m)=>ds(new Date(y,m,0)),pd8=d=>{const[a,b,c]=d.split('-').map(Number);return new Date(a,b-1,c)};
function periodOf(){const P=FS.nl?getNL(FS.nl):null;
 if(FS.a||FS.b){const A=FS.a||(D.map(r=>r.date).sort()[0]||FS.b),B=FS.b||ds(new Date());return{A,B,lab:(FS.per&&FS.per!='c'?PLd[FS.per]:fd(A)+' – '+fd(B))}}
 if(FS.mon){const y=+FS.mon.slice(0,4),m=+FS.mon.slice(5);return{A:FS.mon+'-01',B:mEnd(y,m),lab:mlabel(FS.mon)}}
 if(P){if(P.fy.length){const f=P.fy[0];return{A:(f-1)+'-10-01',B:f+'-09-30',lab:'ปีงบประมาณ '+f}}
  if(P.ym.length){const v=P.ym[0];return{A:v+'-01',B:mEnd(+v.slice(0,4),+v.slice(5)),lab:mlabel(v)}}
  if(P.y.length==1&&P.m.length==1){const v=P.y[0]+'-'+String(P.m[0]).padStart(2,'0');return{A:v+'-01',B:mEnd(P.y[0],P.m[0]),lab:mlabel(v)}}
  if(P.y.length==1&&!P.m.length){const y=P.y[0];return{A:y+'-01-01',B:y+'-12-31',lab:'ปี '+y}}}
 const all=rows(true);if(!all.length)return null;const lm=all.map(r=>r.date).sort().pop().slice(0,7);return{A:lm+'-01',B:mEnd(+lm.slice(0,4),+lm.slice(5)),lab:'เดือนล่าสุด '+mlabel(lm),auto:true}}
function prevOf(p){const a=pd8(p.A),b=pd8(p.B);
 if(CMP=='off'||CMP=='team')return null;
 if(CMP=='custom')return CMA&&CMB&&CMA<=CMB?{A:CMA,B:CMB}:null;
 if(CMP=='mom'||CMP=='qoq'){const k=CMP=='mom'?1:3;return{A:ds(shM(a,-k)),B:ds(shM(b,-k))}}
 if(CMP=='avg3'){const A=new Date(a.getFullYear(),a.getMonth()-3,a.getDate());return{A:ds(A),B:ds(new Date(a.getFullYear(),a.getMonth(),a.getDate()-1))}}
 if(CMP=='yoy'){const A=new Date(a.getFullYear()-1,a.getMonth(),a.getDate()),B=new Date(b.getFullYear()-1,b.getMonth(),Math.min(b.getDate(),new Date(b.getFullYear()-1,b.getMonth()+1,0).getDate()));return{A:ds(A),B:ds(B)}}
 if(a.getDate()==1&&ds(b)==mEnd(b.getFullYear(),b.getMonth()+1)){const k=(b.getFullYear()*12+b.getMonth())-(a.getFullYear()*12+a.getMonth())+1;return{A:ds(new Date(a.getFullYear(),a.getMonth()-k,1)),B:ds(new Date(a.getFullYear(),a.getMonth(),0))}}
 const L=Math.round((b-a)/864e5)+1;return{A:ds(new Date(a.getFullYear(),a.getMonth(),a.getDate()-L)),B:ds(new Date(a.getFullYear(),a.getMonth(),a.getDate()-1))}}
const plabOf=q=>q.A.slice(8)=='01'&&q.B==mEnd(+q.B.slice(0,4),+q.B.slice(5,7))&&q.A.slice(0,7)==q.B.slice(0,7)?mlabel(q.A.slice(0,7)):fd(q.A)+' – '+fd(q.B);
const metr=S=>({n:sm(S),self:sm(S.filter(r=>r.type=='จับเอง')),joint:sm(S.filter(r=>r.type!='จับเอง')),nat:new Set(S.map(r=>r.nat).filter(Boolean)).size,chg:cntChips(S,'charge').length,fine:S.reduce((t,r)=>t+(+r.fine||0),0),news:S.filter(r=>r.intel=='ส่งข่าว').length,cases:S.reduce((t,r)=>t+cs(r),0)});
function cmpData(R){const per=periodOf();if(!per)return null;const base=rows(true),inR=(r,q)=>r.date>=q.A&&r.date<=q.B,cur=base.filter(r=>inR(r,per)),pp=prevOf(per),prev=pp?base.filter(r=>inR(r,pp)):[];
 let P=metr(prev);if(pp&&CMP=='avg3'){const f=nDay(per.A,per.B)/nDay(pp.A,pp.B);['n','self','joint','fine','news'].forEach(k=>P[k]=Math.round(P[k]*f*10)/10)}
 return{per,pp,cur,prev,M:metr(cur),P,lab:per.lab,plab:pp?(CMPN[CMP]||'')+' ('+plabOf(pp)+')'+(CMP=='avg3'?' ปรับเป็นช่วงเท่ากัน':''):''}}
const IMPRE=/หมาย|INTERPOL|ค้ามนุษย์|ยาเสพติด|อาวุธ|อั้งยี่|หน่วงเหนี่ยว|ปลอมเงิน/i;
let AIS={key:'',lines:null};const aiKey=()=>JSON.stringify([FS,CMP,CMA,CMB,D.length]);
function insFilt(){const o=[],P=(k,t)=>o.push({k,t});
 if(FS.team)P(1,FS.team);
 if(FS.mon)P(1,mlabel(FS.mon));else if(FS.a||FS.b)P(1,(FS.per&&FS.per!='c'?PLd[FS.per]:fd(FS.a||FS.b)+(FS.a&&FS.b&&FS.a!=FS.b?' – '+fd(FS.b):FS.a&&!FS.b?' – ปัจจุบัน':'')));
 if(FS.charge)P(1,'ข้อหา '+FS.charge);
 [['type','การปฏิบัติ'],['sex','เพศ'],['nat','สัญชาติ'],['place','จังหวัด'],['rel','คดีที่เกี่ยวข้อง'],['intel','การข่าว']].forEach(([k,l])=>{if(FS[k])P(0,l+' '+FS[k])});
 if(FS.a1||FS.a2)P(0,'อายุ '+(FS.a1||'0')+'–'+(FS.a2||'∞'));
 if(FS.hf)P(0,FS.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(FS.hc)P(0,'มีจำนวนคดี');if(FS.hl)P(0,FS.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');
 if(FS.name)P(0,'ระบุชื่อผู้ต้องหา');if(FS.pp)P(0,'ระบุเลขพาสปอร์ต');if(FS.q)P(0,'ค้นหา "'+FS.q+'"');if(FS.nl)P(0,'ค้นหา "'+FS.nl+'"');
 return o}
const insRow=(l,h)=>'<li><i>'+l+'</i><span>'+h+'</span></li>';
function dimF(S){const N=sm(S);if(!N)return null;const pct=x=>Math.round(x/N*1000)/10,ck=(r,x)=>visChips(r,'charge',true).some(c=>c===x||ck0(c)===ck0(x)),ck0=c=>String(c).trim();
 const t1=a=>a[0]?{ชื่อ:a[0][0],ราย:a[0][1]}:null,mk=k=>k?mlabel(k):null;
 const mo=cnt(S,r=>r.date.slice(0,7)),nat=cnt(S,r=>r.nat),cg=cntChips(S,'charge');
 const sub=f=>S.filter(f),mon=k=>r=>r.date.slice(0,7)==k,
  topCg=A=>t1(cntChips(A,'charge')),topNat=A=>t1(cnt(A,r=>r.nat)),topMon=A=>{const m=t1(cnt(A,r=>r.date.slice(0,7)));return m?{ชื่อ:mk(m.ชื่อ),ราย:m.ราย}:null};
 const O={};
 if(mo[0]){const A=sub(mon(mo[0][0]));O.เดือนสูงสุด={ชื่อ:mk(mo[0][0]),ราย:mo[0][1],เปอร์เซ็นต์ของยอดรวม:pct(mo[0][1]),สัญชาติเด่นในเดือนนั้น:topNat(A),ข้อหาเด่นในเดือนนั้น:topCg(A)};if(mo[1])O.เดือนอันดับสอง={ชื่อ:mk(mo[1][0]),ราย:mo[1][1]};const lo=mo[mo.length-1];if(mo.length>2)O.เดือนต่ำสุด={ชื่อ:mk(lo[0]),ราย:lo[1]}}
 if(nat[0]){const A=sub(r=>(r.nat||'ไม่ระบุ')==nat[0][0]);O.สัญชาติสูงสุด={ชื่อ:nat[0][0],ราย:nat[0][1],เปอร์เซ็นต์ของยอดรวม:pct(nat[0][1]),ข้อหาหลัก:topCg(A),เดือนที่ถูกจับมากสุด:topMon(A)};if(nat[1])O.สัญชาติอันดับสอง={ชื่อ:nat[1][0],ราย:nat[1][1],เปอร์เซ็นต์ของยอดรวม:pct(nat[1][1])}}
 if(cg[0]){const A=sub(r=>visChips(r,'charge',true).some(c=>ck0(c)===ck0(cg[0][0])));O.ข้อหาสูงสุด={ชื่อ:cg[0][0],ราย:cg[0][1],เปอร์เซ็นต์ของยอดรวม:pct(cg[0][1]),สัญชาติหลัก:topNat(A),เดือนที่พบมากสุด:topMon(A)};if(cg[1])O.ข้อหาอันดับสอง={ชื่อ:cg[1][0],ราย:cg[1][1],เปอร์เซ็นต์ของยอดรวม:pct(cg[1][1])}}
 return O}
function renderIns(R,C){if(RVMODE)return;const L=[],S=C&&!C.per.auto?C.cur:R,N=sm(S),pc=x=>N?Math.round(x/N*100)+'%':'0%',top=a=>a.length?a[0]:null;
 const F=insFilt(),fr=F.length?insRow('กำลังกรอง','<span class="fch">'+F.map(x=>'<em class="'+(x.k?'p':'')+'">'+esc(x.t)+'</em>').join('')+'</span>'):'';
 if(AIS.lines&&AIS.key==aiKey()){$('insm').textContent='วิเคราะห์โดย Claude';const LB=['เดือนสูงสุด','สัญชาติสูงสุด','ข้อหาสูงสุด','เทียบช่วงก่อน'];$('insl').innerHTML=fr+AIS.lines.map((x,i)=>insRow(LB[i]||'•',esc(x))).join('');return}
 $('insm').textContent='สรุปอัตโนมัติจากข้อมูล';
 if(!N){$('insl').innerHTML=fr+insRow('ผลลัพธ์','ไม่พบข้อมูลตามเงื่อนไขที่เลือก');return}
 const self=sm(S.filter(r=>r.type=='จับเอง')),ct=(a,b)=>{if(!b)return a?'ช่วงก่อนไม่มีข้อมูล':'';const d=(a-b)/b*100;return`${d>0?'▲ เพิ่ม':d<0?'▼ ลด':'● เท่าเดิม'}${d?' '+Math.abs(d).toFixed(0)+'%':''} (${b.toLocaleString()} → ${a.toLocaleString()})`};
 let o=`<b>${N.toLocaleString()} ราย</b> (${S.length.toLocaleString()} ครั้ง) · จับเอง ${pc(self)} · ร่วมจับ ${pc(N-self)}`;
 if(C&&C.pp)o+=` <span class="dl ${C.M.n>C.P.n?'up':C.M.n<C.P.n?'dn':'eq'}">${ct(C.M.n,C.P.n)} เทียบ${esc((C.per.auto?CMPN[CMP]:CMPN[CMP])||'')}</span>`;
 L.push(insRow(C&&!C.per.auto&&!F.length?esc(C.lab):'ภาพรวม',o));
 const DF=dimF(S)||{},nm=x=>x?'<b>'+esc(x.ชื่อ)+'</b>':'-',rr=(x,sx)=>x?x.ราย.toLocaleString()+' ราย ('+x.เปอร์เซ็นต์ของยอดรวม+'%)':'';
 if(DF.เดือนสูงสุด){const d=DF.เดือนสูงสุด;L.push(insRow('เดือนสูงสุด',nm(d)+' '+rr(d)+(d.สัญชาติเด่นในเดือนนั้น?' · สัญชาติเด่น '+esc(d.สัญชาติเด่นในเดือนนั้น.ชื่อ):'')+(d.ข้อหาเด่นในเดือนนั้น?' · ข้อหาเด่น '+esc(d.ข้อหาเด่นในเดือนนั้น.ชื่อ):'')+(DF.เดือนอันดับสอง?' · รองลงมา '+esc(DF.เดือนอันดับสอง.ชื่อ)+' '+DF.เดือนอันดับสอง.ราย.toLocaleString():'')))}
 if(DF.สัญชาติสูงสุด){const d=DF.สัญชาติสูงสุด;L.push(insRow('สัญชาติสูงสุด',nm(d)+' '+rr(d)+(d.ข้อหาหลัก?' · ข้อหาหลัก '+esc(d.ข้อหาหลัก.ชื่อ):'')+(d.เดือนที่ถูกจับมากสุด?' · สูงสุดเดือน '+esc(d.เดือนที่ถูกจับมากสุด.ชื่อ):'')+(DF.สัญชาติอันดับสอง?' · รองลงมา '+esc(DF.สัญชาติอันดับสอง.ชื่อ)+' '+DF.สัญชาติอันดับสอง.ราย.toLocaleString():'')))}
 if(DF.ข้อหาสูงสุด){const d=DF.ข้อหาสูงสุด;L.push(insRow('ข้อหาสูงสุด',nm(d)+' '+rr(d)+(d.สัญชาติหลัก?' · สัญชาติหลัก '+esc(d.สัญชาติหลัก.ชื่อ):'')+(d.เดือนที่พบมากสุด?' · พบมากเดือน '+esc(d.เดือนที่พบมากสุด.ชื่อ):'')+(DF.ข้อหาอันดับสอง?' · รองลงมา '+esc(DF.ข้อหาอันดับสอง.ชื่อ)+' '+DF.ข้อหาอันดับสอง.ราย.toLocaleString():'')))}
 $('insl').innerHTML=fr+L.join('')}
function aiFacts(R,C){const S=C&&!C.per.auto?C.cur:R,top=(a,n)=>a.slice(0,n).map(([k,v])=>({k,v}));const pmap=C?Object.fromEntries(cntChips(C.prev,'charge')):{};
 return{ช่วงที่วิเคราะห์:C&&!C.per.auto?C.lab:'ข้อมูลทั้งหมดตามตัวกรอง',ตัวกรอง:$('rng').textContent,เปรียบเทียบกับ:C&&C.pp?C.plab:null,ปัจจุบัน:metr(S),ช่วงเปรียบเทียบ:C?C.P:null,สรุปหลายมิติ:dimF(S),เปลี่ยนแปลง:C&&C.pp?Object.fromEntries(['n','self','joint','cases','fine','news'].map(k=>[k,{ส่วนต่าง:Math.round((C.M[k]-C.P[k])*10)/10,เปอร์เซ็นต์:C.P[k]?Math.round((C.M[k]-C.P[k])/C.P[k]*1000)/10:null}])):null,
  รายชุด:TM.map(t=>({ชุด:t,ราย:sm(S.filter(r=>r.team==t)),จับเอง:sm(S.filter(r=>r.team==t&&r.type=='จับเอง'))})),คดี:cntChips(S,'charge').slice(0,12).map(([k,v])=>({คดี:k,ราย:v,ช่วงก่อน:pmap[k]||0})),
  สัญชาติ:top(cnt(S,r=>r.nat),8),จังหวัด:top(cnt(S,r=>r.place),6),การข่าว:top(cnt(S.filter(r=>r.intel&&ck(r.intel)!=ck('ไม่มีข่าว')),r=>r.intel),4),รายเดือน:cnt(S,r=>r.date.slice(0,7)).sort((a,b)=>a[0]<b[0]?-1:1)}}
let _aiT=0,_aiK='';const aiAutoOn=()=>{if(SCR||window.__TV)return false;try{return localStorage.getItem('tm3_aiauto')!=='0'}catch(e){return true}};
function aiAuto(){const cb=$('aiau');if(cb)cb.checked=aiAutoOn();if(!aiAutoOn()||!$('aib')||$('s').classList.contains('hide'))return;const k=aiKey();if(k===AIS.key||k===_aiK)return;clearTimeout(_aiT);{const m=$('aim');if(m)m.textContent='⏳ ข้อมูลเปลี่ยน — กำลังเตรียมวิเคราะห์ใหม่...'}
 _aiT=setTimeout(function go(){if($('s').classList.contains('hide'))return;if(aiKey()!==k)return;if($('aib').disabled){_aiT=setTimeout(go,1500);return}_aiK=k;aiRun()},1400)}
document.addEventListener('change',e=>{if(e.target&&e.target.id=='aiau'){try{localStorage.setItem('tm3_aiauto',e.target.checked?'1':'0')}catch(x){}if(e.target.checked)aiAuto()}});
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{try{aiAuto()}catch(e){}},50)));
async function aiRun(){const sp=await claude.use('sample');if(!sp){$('aim').textContent='ฟีเจอร์นี้ใช้ไม่ได้ในมุมมองนี้';return}
 const R=rows(),C=cmpData(R);$('aib').disabled=true;$('aim').textContent='⏳ Claude กำลังวิเคราะห์...';
 try{const a=await sp.json(`คุณเป็นนักวิเคราะห์สถิติ เขียนสรุปตัวเลขสำหรับผู้บังคับบัญชา จากผลการปฏิบัติของ กก.สส.บก.ตม.3 ด้านล่าง
ตอบเป็น JSON array ของสตริง 4 ข้อ ภาษาไทยทางการ สั้น กระชับ ข้อละไม่เกิน 110 ตัวอักษร เน้นตัวเลขและสัดส่วน ไม่เกริ่นนำ ไม่บรรยาย ไม่ให้ข้อเสนอแนะ แต่ละข้อต้องโยงข้ามมิติ (เดือน × สัญชาติ × ข้อหา) ตามลำดับ:
(1) เดือนที่มีผลมากที่สุด: ชื่อเดือน ยอด % ของยอดรวม พร้อมสัญชาติและข้อหาที่เด่นในเดือนนั้น
(2) สัญชาติที่ถูกจับมากที่สุด: ยอด % ข้อหาหลักของสัญชาตินั้น และเดือนที่ถูกจับมากสุด
(3) ข้อหาที่พบมากที่สุด: ยอด % สัญชาติหลักที่ถูกดำเนินคดีข้อหานั้น และเดือนที่พบมากสุด
(4) เทียบช่วงก่อน: ส่วนต่างและ % ของยอดรวม (ถ้าไม่มีช่วงเปรียบเทียบ ให้เทียบอันดับ 1 กับอันดับ 2 ของข้อ 1-3)
ใช้เฉพาะตัวเลขในข้อมูล (ฟิลด์ สรุปหลายมิติ และ เปลี่ยนแปลง) ห้ามคำนวณเองหรือแต่งข้อเท็จจริง ถ้าข้อมูลน้อยให้ระบุสั้นๆ
ข้อมูล: ${JSON.stringify(aiFacts(R,C))}`,{cache:false});
  const L=(Array.isArray(a)?a:(a.lines||a.summary||[])).map(String).filter(Boolean).slice(0,4);if(!L.length)throw new Error('ไม่ได้รับผลสรุป');
  AIS={key:aiKey(),lines:L};$('aim').textContent='✅ อัปเดตสรุปแล้ว (จะกลับเป็นสรุปอัตโนมัติเมื่อเปลี่ยนตัวกรอง)';renderIns(R,C)}
 catch(e){$('aim').textContent='❌ '+(e.message||e.code||e)}finally{$('aib').disabled=false}}
function teamCmp(){const el=$('tcmp');if(!el)return;if(1){el.innerHTML='';return}
 const C=cmpData(rows()),S=C?C.cur:[],TC={'ชป.1':'#0891b2','ชป.2':'#d97706','ชป.3':'#7c3aed'},tot=sm(S),st=TM.map(t=>{const a=S.filter(r=>r.team==t);return{t,n:sm(a),self:sm(a.filter(r=>r.type=='จับเอง')),fine:a.reduce((x,r)=>x+(+r.fine||0),0),k:a.length}}),mx=Math.max(1,...st.map(x=>x.n)),rk=[...st].sort((a,b)=>b.n-a.n).map(x=>x.t);
 el.innerHTML=st.map(x=>`<div class="tc" style="--ac:${TC[x.t]||'#0891b2'}"><h6><span>${esc(x.t)}</span><span>อันดับ ${rk.indexOf(x.t)+1}</span></h6><b class="big">${x.n.toLocaleString()}</b> ราย<small>${tot?Math.round(x.n/tot*100):0}% ของทั้งหมด · ${x.k} ครั้ง</small><div class="bar"><i style="width:${Math.round(x.n/mx*100)}%"></i></div><small>จับเอง ${x.self.toLocaleString()} · ร่วมจับ ${(x.n-x.self).toLocaleString()} · ค่าปรับ ${x.fine.toLocaleString()} บาท</small></div>`).join('')+`<div class="tn">เทียบในช่วง: ${esc(C?C.lab:'-')} (ใช้ตัวกรองอื่นที่เลือกอยู่ร่วมด้วย)</div>`}
function dash(R){const n=sm(R),self=sm(R.filter(r=>r.type=='จับเอง')),nat=cnt(R,r=>r.nat),fine=R.reduce((t,r)=>t+(+r.fine||0),0);
 $('rng').textContent=(FS.a||FS.b)?((FS.per&&FS.per!='c'?PLd[FS.per]+' : ':'ช่วงเวลา ')+(FS.a?fd(FS.a):'…')+' – '+(FS.b?fd(FS.b):'ปัจจุบัน')):('ข้อมูลวันที่ '+(R.length?fd(R[0].date)+' – '+fd(R[R.length-1].date):'-'));{const d=SEL.filter(([k])=>FS[k]).map(([k,l])=>l+' '+(k=='mon'?mlabel(FS[k]):FS[k]));if(FS.a1||FS.a2)d.push('อายุ '+(FS.a1||'0')+'–'+(FS.a2||'∞'));if(FS.hf)d.push(FS.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(FS.hc)d.push('มีจำนวนคดี');if(FS.hl)d.push(FS.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');if(FS.name)d.push('ชื่อ: '+FS.name);if(FS.pp)d.push('พาสปอร์ต: '+FS.pp);if(FS.q)d.push('ค้นหา: '+FS.q);if(FS.nl)d.push('คำค้น: '+FS.nl);if(d.length)$('rng').innerHTML=esc($('rng').textContent)+'<br><small>ตัวกรอง: '+esc(d.join(' · '))+'</small>'}$('pd').textContent='พิมพ์เมื่อ '+fd(new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10));
 {const C=cmpData(R),CSH={prev:'ก่อน',mom:'ด.ก่อน',qoq:'ไตรมาสก่อน',yoy:'ปีก่อน',avg3:'เฉลี่ย3ด.',custom:'ที่เลือก'},fv=v=>v>=1e6?(v/1e6).toFixed(1)+'M':v>=1e4?Math.round(v/1e3)+'k':(+v).toLocaleString(),TCl={'ชป.1':'#22d3ee','ชป.2':'#fbbf24','ชป.3':'#c4b5fd'},TTm=CMP=='team'&&!TMODE?TM.map(t=>[t,metr(R.filter(r=>r.team==t))]):null,_t=($('kp').classList.toggle('cmpon',!!(TTm||(C&&C.pp))),0),
 dk=(k,sh)=>{if(TTm)return`<u class="tv">${TTm.map(([t,m])=>`<s style="--tc:${TCl[t]||'#fff'}"><q>${t}</q>${fv(m[k])}</s>`).join('')}</u>`;if(!C)return'';const a=C.M[k],b=C.P[k];if(!C.pp)return'';let t,c;if(!b&&!a){t='— ไม่มีทั้งสองช่วง';c='eq'}else if(!b){t='▲ ใหม่ (ช่วงก่อน 0)';c='up'}else{const d=(a-b)/b*100;t=(d>0?'▲ ':d<0?'▼ ':'● ')+Math.abs(d).toFixed(d&&Math.abs(d)<10?1:0)+'%';c=d>0?'up':d<0?'dn':'eq'}
  return`<u class="cb">${C.per.auto&&!sh?'ล่าสุด <s>'+a.toLocaleString()+'</s> · ':''}${CSH[CMP]||'ก่อน'} <s>${fv(b)}</s></u><i class="dl ${c}" title="${C.lab} = ${a.toLocaleString()} · ${C.plab} = ${b.toLocaleString()}">${t}</i>`};
 const KR=([a,b,i,c,k])=>`<p data-kpi="${a}" style="--ac:${c};--ag:${c}88"><b>${b}</b><span>${a.replace(/ \(ราย\)$/,'')}</span><em>${i}</em>${dk(k,1)}</p>`;
 const K=([a,b,i,c,k],sh)=>`<div data-kpi="${a}" style="--ac:${c};--ag:${c}88"><em>${i}</em><b${String(b).length>(sh?4:6)?' class="sm"':''}>${b}</b><span>${a}</span>${dk(k,sh)}</div>`;
 $('kp').innerHTML=K(['ผู้ต้องหารวม (ราย)',n.toLocaleString(),'👥','#22d3ee','n'])+`<div class="pr2" style="--ac:#60a5fa;--ag:#60a5fa88">${KR(['จับเอง (ราย)',self.toLocaleString(),'🛡️','#60a5fa','self'])}${KR(['ร่วมจับ (ราย)',(n-self).toLocaleString(),'🤝','#fbbf24','joint'])}</div>`+K(['จำนวนคดี (คดี)',R.reduce((t,r)=>t+cs(r),0).toLocaleString(),'📁','#2dd4bf','cases'])+K(['สัญชาติ',nat.length,'🌐','#a78bfa','nat'])+K(['ข้อหา (ประเภท)',cntChips(R,'charge').length,'⚖️','#fb923c','chg'])+K(['ค่าปรับรวม (บาท)',fine.toLocaleString(),'💰','#34d399','fine'])+K(['ส่งข่าว (ครั้ง)',R.filter(r=>r.intel=='ส่งข่าว').length,'📰','#f472b6','news'])+(TMODE?'':rvMainCard()+ioMainCard());
 if(C&&C.pp)$('rng').innerHTML+=`<br><small>📊 เทียบ ${esc(C.lab.replace(/^เดือนล่าสุด\s*/,''))} กับ ${esc(C.plab.replace(/^ช่วงก่อนหน้า\s*\((.*)\)$/,'$1'))}</small>`;
 renderIns(R,C);teamCmp()}
 const P=['#22d3ee','#fbbf24','#a78bfa'];
 const T=TM.map(t=>R.filter(r=>r.team==t)),ks=[...new Set(R.map(r=>r.date.slice(0,7)))].sort(),ml=k=>MON[+k.slice(5)-1]+' '+k.slice(2,4);
 const TMd=TMODE?['จับเอง','ร่วมจับ']:TM,TDv=TMODE?[sm(R.filter(r=>r.type=='จับเอง')),sm(R.filter(r=>r.type!='จับเอง'))]:T.map(sm),PD=TMODE?['#22d3ee','#fbbf24']:P;
 make('c1',{type:'doughnut',data:{labels:TMd,datasets:[{data:TDv,backgroundColor:c=>dnFill(c,PD),hoverBackgroundColor:c=>dnFill(c,PD,1),borderWidth:0,borderRadius:7,spacing:5,hoverOffset:0,offset:c=>{const S=c.chart._sp;return S?(c.dataIndex===S.hl?Math.max(S.ho,S.ao||0):(S.ao||0)):0}}]},options:{onClick:(e,el)=>{if(el.length)openDR([TMODE?{k:'type',v:TMd[el[0].index]}:{k:'team',v:TM[el[0].index]}])},cutout:'70%',layout:{padding:18},rotation:SPN.a,plugins:{legend:{display:false},lbl:{on:'arc',ctr:sm(R).toLocaleString(),nv:1},dn:{on:1},spin:{on:1}}}});
 const ym={};R.forEach(r=>{const k=r.date.slice(0,7);ym[k]=ym[k]||[0,0];ym[k][r.type=='จับเอง'?0:1]+=w(r)});
 {const LC=['#22d3ee','#fbbf24'],grd=(c,col)=>{const a=c.chart.chartArea;if(!a)return col+'22';const g=c.chart.ctx.createLinearGradient(0,a.top,0,a.bottom);g.addColorStop(0,col+'40');g.addColorStop(1,col+'00');return g},
  ds=(lab,i)=>({label:lab,data:ks.map(k=>ym[k][i]),borderColor:LC[i],backgroundColor:c=>grd(c,LC[i]),fill:true,tension:.3,borderWidth:2.25,borderCapStyle:'round',pointRadius:c=>c.dataIndex==ks.length-1?4.5:(ks.length<=8?2.5:0),pointHoverRadius:6,pointBackgroundColor:LC[i],pointBorderColor:'#0a1e4a',pointBorderWidth:1.5,glow:LC[i],order:i});
 make('c2',{type:'line',options0:{onClick:(e,el,ch)=>{const n=ch.getElementsAtEventForMode(e,'index',{intersect:false},false);if(n.length)openDR([{k:'mon',v:ks[n[0].index]}])}},data:{labels:ks.map(ml),datasets:[ds('จับเอง',0),ds('ร่วมจับ',1)]},
  options:{layout:{padding:{top:20,bottom:4,left:16,right:20}},interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},lbl:{on:'pts'},runner:{on:1},tooltip:{enabled:true,backgroundColor:'rgba(6,20,52,.95)',borderColor:'rgba(103,232,249,.5)',borderWidth:1,padding:10,cornerRadius:10,titleFont:{weight:'700'},callbacks:{label:c=>' '+c.dataset.label+' '+c.raw+' ราย',footer:a=>'รวม '+a.reduce((t,c)=>t+c.raw,0)+' ราย'}}},scales:{x:{offset:true,grid:{display:false},border:{display:false},ticks:{color:'#a9bfe0',font:{size:12.5,weight:'600'},padding:10}},y:{min:-Math.max(3,Math.ceil(Math.max(1,...ks.map(k=>Math.max(ym[k][0],ym[k][1])))*.34)),grace:'22%',border:{display:false},ticks:{display:false},grid:{color:'rgba(160,190,230,.10)',drawTicks:false,borderDash:[3,5]}}}}})}
 const n6=nat.slice(0,6),NCl=['#f87171','#fbbf24','#34d399','#60a5fa','#c084fc','#f472b6'];
 const PCl=['#22d3ee','#fbbf24','#60a5fa','#f472b6','#34d399','#a78bfa','#fb923c','#f87171'],c6=cntChips(R,'charge').slice(0,8),NT=sm(R)||1;
 const rk=(id,a,cl,k)=>{const mx=Math.max(1,...a.map(x=>x[1]));$(id).innerHTML=a.length?a.map((x,i)=>`<div class="rk" style="--c:${cl[i%cl.length]}"><span class="nm" data-k="${k}" data-v="${esc(x[0])}"><i></i><span>${esc(x[0])}</span></span><span class="tr" data-k="${k}" data-v="${esc(x[0])}"><span style="width:${Math.max(2,x[1]/mx*100)}%"></span></span><span class="vl" data-k="${k}" data-v="${esc(x[0])}"><b>${x[1].toLocaleString()}</b><small>${Math.round(x[1]/NT*100)}%</small></span></div>`).join(''):'<div class="rk0">ไม่มีข้อมูล</div>'};
 rk('c5l',c6,PCl,'chg');rk('c3l',n6,NCl,'nat');
 {const n2=sm(R)||1;if(TMODE){const top=S=>{const c=cntChips(S,'charge');return c.length?c[0][0]:'-'};$('tt').innerHTML=TMd.map((t,i)=>{const S=R.filter(r=>i?r.type!='จับเอง':r.type=='จับเอง'),v=TDv[i],pc=Math.round(v/n2*100);return`<div class="dr" data-ttype="${t}" style="--c:${PD[i]}"><i></i><div class="dn1"><b>${t}</b><small>ข้อหาเด่น ${esc(top(S))}</small></div><div class="dv"><b>${v.toLocaleString()}</b><small>${pc}%</small></div><div class="bar"><span style="width:${pc}%"></span></div></div>`}).join('')}else $('tt').innerHTML=T.map((a,i)=>{const s=sm(a.filter(r=>r.type=='จับเอง')),t=sm(a),pc=Math.round(t/n2*100);return`<div class="dr" data-team="${TM[i]}" style="--c:${P[i]}"><i></i><div class="dn1"><b>ชป.${i+1}</b><small>จับเอง ${s} · ร่วมจับ ${t-s}</small></div><div class="dv"><b>${t}</b><small>${pc}%</small></div><div class="bar"><span style="width:${pc}%"></span></div></div>`}).join('')}}
// export
let PK=null;const EXM={png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',pdf:'application/pdf',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',csv:'text/csv',json:'application/json'};
const askOn=()=>{try{return localStorage.getItem('tm3_ask')!=='0'}catch(e){return true}};
function prePick(name){PK=null;if(!askOn()||!window.showSaveFilePicker||FSA===false)return false;const ext=((name.match(/\.(\w+)$/)||[])[1]||'').toLowerCase(),t=EXM[ext]?[{description:ext.toUpperCase(),accept:{[EXM[ext]]:['.'+ext]}}]:undefined;
 try{PK={name,p:showSaveFilePicker({suggestedName:name,types:t}).then(h=>({h}),e=>({e}))};return true}catch(e){FSA=false;return false}}
let SVH=false;function saveHelp(){if(SVH||!askOn())return;SVH=true;const h=$('xhelp');if(h){h.open=true}const t=document.createElement('div');t.className='svtoast';t.innerHTML='📁 เบราว์เซอร์ส่งไฟล์ไปที่โฟลเดอร์ดาวน์โหลดอัตโนมัติ — หากต้องการเลือกโฟลเดอร์ทุกครั้ง ให้เปิดการตั้งค่า <b>“ถามตำแหน่งที่จะบันทึกไฟล์”</b> ในเบราว์เซอร์ (ดูวิธีในหน้าต่างส่งออก ข้อ 5)<button type="button">✕</button>';t.querySelector('button').onclick=()=>t.remove();document.body.appendChild(t);setTimeout(()=>t.remove(),12000)}
const dl=async(blob,name)=>{if(!expGate())throw 'cancel';if(PK){const k=PK;PK=null;const r=await k.p;if(r.h){try{const w=await r.h.createWritable();await w.write(blob);await w.close();FSA=true;$('msg').textContent='✅ บันทึกแล้ว: '+r.h.name+' (ในโฟลเดอร์ที่เลือก)';return}catch(e){}}else if(r.e&&r.e.name=='AbortError')throw 'cancel';else{FSA=false}}
 if(askOn()&&(FSA===false||!window.showSaveFilePicker))saveHelp();try{const d=await claude.use('downloads');if(!d){uiAlert('ไม่สามารถดาวน์โหลดได้ในมุมมองนี้',false);return}await d.save({filename:name,data:blob});$('msg').textContent='ส่งออกแล้ว: '+name}catch(e){$('msg').textContent='ส่งออกไม่สำเร็จ: '+(e.message||e.code||e)}};
const stamp=()=>new Date().toISOString().slice(0,10);
const XS={a4:{l:'A4 แนวนอน',mm:[297,210]},a3:{l:'A3 แนวนอน',mm:[420,297]},letter:{l:'Letter แนวนอน',mm:[279.4,215.9]},s169:{l:'สไลด์ 16:9',px:[1920,1080]},s43:{l:'สไลด์ 4:3',px:[1600,1200]}};
const XD=[[96,'96 DPI','หน้าจอ / อีเมล'],[150,'150 DPI','ทั่วไป'],[200,'200 DPI','คมชัด'],[300,'300 DPI','งานพิมพ์'],[400,'400 DPI','คมชัดสูง'],[600,'600 DPI','พิมพ์ละเอียด'],[1200,'1200 DPI','สูงสุด · ไฟล์ใหญ่มาก']];
const XF={info:[['png','PNG'],['jpg','JPG'],['pdf','PDF'],['gif','🎞 GIF เคลื่อนไหว']],chart:[['png','PNG'],['jpg','JPG'],['pdf','PDF']],table:[['xlsx','📗 Excel'],['csv','CSV'],['pdf','📕 PDF'],['png','PNG'],['jpg','JPG']]};
let EX={what:'info',fmt:'png',size:'a4',dpi:150};try{Object.assign(EX,JSON.parse(localStorage.getItem('tm3_exp'))||{})}catch(e){}
let XC={stop:false,busy:false};
const xdim=()=>{const z=XS[EX.size];if(z.mm)return[Math.round(z.mm[0]/25.4*EX.dpi),Math.round(z.mm[1]/25.4*EX.dpi)];const f=EX.dpi/96;return[Math.round(z.px[0]*f),Math.round(z.px[1]*f)]};
const XT={info:'infographic',chart:'chart',table:'table'},be2=y=>String(+y+543).slice(2),sdt=d=>+d.slice(8)+MON[+d.slice(5,7)-1]+be2(d.slice(0,4));
function perTag(k){const t=new Date(),y=t.getFullYear(),m=t.getMonth(),fs=fyS();return{today:'วันนี้','7d':'7วันล่าสุด','30d':'30วันล่าสุด',tm:'เดือน'+MON[m]+be2(y),lm:'เดือน'+MON[(m+11)%12]+be2(m?y:y-1),tq:'ไตรมาสนี้',lq:'ไตรมาสที่แล้ว',fy:'ปีงบ'+be2(fs+1),lfy:'ปีงบ'+be2(fs),ty:'ปี'+be2(y),ly:'ปี'+be2(y-1)}[k]||''}
function fltTag(){const p=[];if(FS.nl)p.push(...FS.nl.split(/\s+/));
 if(FS.per&&FS.per!='c')p.push(perTag(FS.per));else if(FS.a||FS.b)p.push((FS.a?sdt(FS.a):'')+'ถึง'+(FS.b?sdt(FS.b):'ปัจจุบัน'));
 if(FS.mon)p.push(MON[+FS.mon.slice(5)-1]+be2(FS.mon.slice(0,4)));
 ['team','type','nat','place','charge','rel','intel','sex'].forEach(k=>{if(FS[k])p.push(k=='team'?FS[k].replace('.',''):FS[k])});
 if(FS.a1||FS.a2)p.push('อายุ'+(FS.a1||0)+'-'+(FS.a2||''));if(FS.hf)p.push(FS.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(FS.hl)p.push(FS.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');['name','pp','q'].forEach(k=>{if(FS[k])p.push(FS[k])});
 const t=[...new Set(p.map(x=>String(x).trim().replace(/[\\/:*?"<>|]+/g,'').replace(/\s+/g,'-')).filter(Boolean))].join('_');return(t||'ทั้งหมด').slice(0,100)}
const xR=()=>RVMODE?rvXRows():rows();
const xname=(ext,extra)=>`${XT[EX.what]}_${RVMODE?rvTag():(TMODE?TMODE.replace(/\./g,'')+'_':'')+fltTag()}${extra?'_'+extra:''}_กกสส.บก.ตม.3.${ext}`;
const xImg=()=>['png','jpg','pdf'].includes(EX.fmt);
const xLabel=()=>({info:'อินโฟกราฟิก',chart:'กราฟ',table:'ตารางข้อมูล'}[EX.what])+' · '+EX.fmt.toUpperCase()+(xImg()?' · '+XS[EX.size].l+' · '+EX.dpi+' DPI':'');
function xRender(){if(!XF[EX.what].some(f=>f[0]==EX.fmt))EX.fmt=XF[EX.what][0][0];
 const g=(n,a)=>{document.querySelector(`#xm [data-g=${n}]`).innerHTML=a};
 g('fmt',XF[EX.what].map(([v,l])=>`<button type="button" data-v="${v}">${l}</button>`).join(''));
 g('size',Object.entries(XS).map(([v,o])=>`<button type="button" data-v="${v}">${o.l}<small>${o.mm?o.mm.join('×')+' มม.':o.px.join('×')}</small></button>`).join(''));
 g('dpi',XD.map(([v,a,b])=>`<button type="button" data-v="${v}">${a}<small>${b}</small></button>`).join(''));
 document.querySelectorAll('#xm [data-g]').forEach(G=>G.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('on',String(EX[G.dataset.g])==b.dataset.v)));
 $('xsz').classList.toggle('hide',!xImg());$('xdp').classList.toggle('hide',!xImg());
 const R=xR(),[W,H]=xdim(),pg=EX.what=='table'?Math.max(1,Math.ceil(R.length/20)):1;
 $('xsum').innerHTML=`<b>สรุป:</b> ${esc(xLabel())}<br>ชื่อไฟล์: <code>${esc(xname(EX.fmt,EX.fmt=='gif'?'เคลื่อนไหว':EX.what=='table'&&xImg()&&EX.fmt!='pdf'?'หน้า1':''))}</code><br>`+(EX.fmt=='gif'?'บันทึกแสงที่วิ่งบนกราฟและโดนัทที่หมุน ประมาณ 6 วินาที (กว้าง 960 พิกเซล)':xImg()?`ขนาดภาพ ${W.toLocaleString()} × ${H.toLocaleString()} พิกเซล${EX.what=='table'?` · ${pg} หน้า (หน้าละ 20 รายการ)`+(EX.fmt=='pdf'?' รวมเป็นไฟล์เดียว':' แยกไฟล์ละหน้า'):''}`:`${R.length} แถวตามตัวกรองปัจจุบัน`)+(W*H>16e6?`<br><span style="color:#c0392b">⚠ ภาพใหญ่ ${(W*H/1e6).toFixed(0)} ล้านพิกเซล — ระบบจะเรนเดอร์ทีละส่วน (tile) อาจใช้เวลาหลายนาที${W*H>64e6&&EX.fmt!='pdf'?' · หากเกินขีดจำกัดภาพเดียวของเบราว์เซอร์ ระบบจะแบ่งเป็นหลายไฟล์ (แนะนำเลือก PDF เพื่อได้ไฟล์เดียว)':''}</span>`:'');
 $('xqlab').textContent='('+xLabel().replace(/ · \d+ DPI$/,'')+(xImg()?' · 400 DPI':'')+')'}
function xOpen(w){if(!expGate())return;if(w)EX.what=w;xRender();$('xform').classList.remove('hide');$('xprog').classList.add('hide');$('xm').classList.remove('hide')}
function xClose(){if(XC.busy)return;$('xm').classList.add('hide')}
$('xm').addEventListener('click',e=>{const b=e.target.closest('[data-g] [data-v]');if(b){const g=b.closest('[data-g]').dataset.g;EX[g]=g=='dpi'?+b.dataset.v:b.dataset.v;xRender()}else if(e.target.id=='xm')xClose()});
/* ===== v196 ส่งออก GIF เคลื่อนไหว ===== */
function gifPal(frames,n){const h=new Map();frames.forEach((f,fi)=>{if(fi%4)return;const d=f.data;for(let i=0;i<d.length;i+=16){const k=(d[i]>>3)<<10|(d[i+1]>>3)<<5|(d[i+2]>>3);h.set(k,(h.get(k)||0)+1)}});
 let bx=[{c:[...h.entries()]}];const rng=b=>{let m=[31,31,31],M=[0,0,0];b.c.forEach(([k])=>{const v=[k>>10,(k>>5)&31,k&31];for(let j=0;j<3;j++){if(v[j]<m[j])m[j]=v[j];if(v[j]>M[j])M[j]=v[j]}});const r=[M[0]-m[0],M[1]-m[1],M[2]-m[2]],ax=r[0]>=r[1]&&r[0]>=r[2]?0:r[1]>=r[2]?1:2;return{ax,r:r[ax]}};
 while(bx.length<n){let bi=-1,bs=0;bx.forEach((b,i)=>{if(b.c.length<2)return;const s=rng(b).r*Math.log2(2+b.c.reduce((a,x)=>a+x[1],0));if(s>bs){bs=s;bi=i}});if(bi<0)break;const b=bx[bi],ax=rng(b).ax,sh=[10,5,0][ax];b.c.sort((p,q)=>((p[0]>>sh)&31)-((q[0]>>sh)&31));const tot=b.c.reduce((a,x)=>a+x[1],0);let acc=0,cut=1;for(let i=0;i<b.c.length-1;i++){acc+=b.c[i][1];cut=i+1;if(acc>=tot/2)break}bx.splice(bi,1,{c:b.c.slice(0,cut)},{c:b.c.slice(cut)})}
 return bx.map(b=>{let r=0,g=0,bl=0,t=0;b.c.forEach(([k,w])=>{r+=(k>>10)*w;g+=((k>>5)&31)*w;bl+=(k&31)*w;t+=w});t=t||1;return[Math.round(r/t*8+4),Math.round(g/t*8+4),Math.round(bl/t*8+4)].map(v=>Math.min(255,v))})}
function gifLzw(ix,out){const MIN=8,CL=256,EOI=257;let bits=0,nb=0,buf=[];const put=(c,w)=>{bits|=c<<nb;nb+=w;while(nb>=8){buf.push(bits&255);bits>>>=8;nb-=8}};
 let dict=new Map(),next=258,w=9;put(CL,w);let p=ix[0];for(let i=1;i<ix.length;i++){const c=ix[i],k=p<<8|c,v=dict.get(k);if(v!==undefined){p=v;continue}put(p,w);if(next<4096){dict.set(k,next++);if(next>(1<<w)&&w<12)w++}else{put(CL,w);dict=new Map();next=258;w=9}p=c}
 put(p,w);put(EOI,w);if(nb>0)buf.push(bits&255);out.push(MIN);for(let i=0;i<buf.length;i+=255){const n=Math.min(255,buf.length-i);out.push(n);for(let j=0;j<n;j++)out.push(buf[i+j])}out.push(0)}
function gifEnc(frames,W,H,delays){const pal=gifPal(frames,255);while(pal.length<256)pal.push([0,0,0]);const TR=255,cache=new Int16Array(32768).fill(-1);
 const q=(r,g,b)=>{const k=(r>>3)<<10|(g>>3)<<5|(b>>3);let v=cache[k];if(v>=0)return v;let bd=1e9;v=0;const R=(r&~7)+4,G=(g&~7)+4,B=(b&~7)+4;for(let i=0;i<255;i++){const p=pal[i],d=(p[0]-R)**2*.3+(p[1]-G)**2*.59+(p[2]-B)**2*.11;if(d<bd){bd=d;v=i}}cache[k]=v;return v};
 const o=[];const s=(t)=>{for(const ch of t)o.push(ch.charCodeAt(0))},u16=v=>o.push(v&255,v>>8&255);
 s('GIF89a');u16(W);u16(H);o.push(0xF7,0,0);pal.forEach(c=>o.push(c[0],c[1],c[2]));
 o.push(0x21,0xFF,11);s('NETSCAPE2.0');o.push(3,1,0,0,0);
 let prev=null;
 frames.forEach((f,fi)=>{const d=f.data,ix=new Uint8Array(W*H);for(let i=0,j=0;j<ix.length;i+=4,j++)ix[j]=q(d[i],d[i+1],d[i+2]);
  let x0=0,y0=0,x1=W-1,y1=H-1;
  if(prev){x0=W;y0=H;x1=-1;y1=-1;for(let y=0;y<H;y++){const r=y*W;for(let x=0;x<W;x++)if(ix[r+x]!==prev[r+x]){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}}if(x1<0){x0=y0=0;x1=y1=0}}
  const w=x1-x0+1,h=y1-y0+1,sub=new Uint8Array(w*h);for(let y=0;y<h;y++)for(let x=0;x<w;x++){const a=ix[(y+y0)*W+x+x0];sub[y*w+x]=prev&&prev[(y+y0)*W+x+x0]===a?TR:a}
  {const dy=Math.max(2,delays[fi]||8);o.push(0x21,0xF9,4,prev?0x05:0x04,dy&255,dy>>8,prev?TR:0,0)}
  o.push(0x2C);u16(x0);u16(y0);u16(w);u16(h);o.push(0);gifLzw(sub,o);prev=ix});
 o.push(0x3B);return new Blob([new Uint8Array(o)],{type:'image/gif'})}
let GIFB=false,GIFSTOP=false;
async function gifRun(){if(GIFB||!expGate())return;
 const el=$('sheet');if(!el||el.offsetParent===null){uiAlert('เปิดหน้าแดชบอร์ดก่อน แล้วจึงกดส่งออก GIF',false);return}
 const mc=Object.values(CH).filter(c=>{try{const p=c.options.plugins;return c.canvas&&c.canvas.isConnected&&c.canvas.offsetParent&&((p.runner&&p.runner.on)||(p.spin&&p.spin.on))}catch(e){return false}});
 if(!mc.length){uiAlert('ไม่พบส่วนที่เคลื่อนไหวในหน้านี้ (เช่น แสงวิ่งบนกราฟเส้น)',false);return}
 const nm=xname('gif','เคลื่อนไหว');prePick(nm);GIFB=true;GIFSTOP=false;
 const tt=document.createElement('div');tt.className='svtoast';tt.style.zIndex=99999;tt.innerHTML='<span>🎞 กำลังบันทึก GIF…</span> <button type="button">ยกเลิก</button>';tt.querySelector('button').onclick=()=>{GIFSTOP=true};document.body.appendChild(tt);const say=t=>{tt.firstChild.textContent=t};
 const tf=el.style.transform;let sv=[];
 try{el.style.transform='';el.classList.add('exporting');document.documentElement.classList.add('xfreeze');window.__noRun=true;
  Object.values(CH).forEach(c=>{try{sv.push([c,c.options.animation]);c.options.animation=false}catch(e){}});
  await new Promise(r=>setTimeout(r,200));
  const ew=el.offsetWidth,eh=el.offsetHeight,GW=Math.min(960,ew),sc=GW/ew,GH=Math.round(eh*sc),bg=RVMODE?'#1a0509':'#071631';
  say('🎞 กำลังถ่ายภาพพื้นหลัง…');const base=await html2canvas(el,{scale:sc,backgroundColor:bg,logging:false});
  const sr=el.getBoundingClientRect(),rc=mc.map(c=>{const r=c.canvas.getBoundingClientRect();return{c:c.canvas,x:(r.left-sr.left)*sc,y:(r.top-sr.top)*sc,w:r.width*sc,h:r.height*sc}});
  window.__noRun=false;document.documentElement.classList.remove('xfreeze');
  const fc=document.createElement('canvas');fc.width=base.width;fc.height=base.height;const fx=fc.getContext('2d',{willReadFrequently:true}),FW=fc.width,FH=fc.height;
  const N=56,gap=100,fr=[],dl=[];let t0=performance.now(),last=t0;
  for(let i=0;i<N;i++){if(GIFSTOP)throw'cancel';await new Promise(r=>setTimeout(r,Math.max(0,gap-(performance.now()-last))));const now=performance.now();
   mc.forEach(c=>{try{c.draw()}catch(e){}});
   fx.drawImage(base,0,0);rc.forEach(r=>fx.drawImage(r.c,r.x,r.y,r.w,r.h));fr.push(fx.getImageData(0,0,FW,FH));dl.push(Math.round((now-last)/10));last=now;say(`🎞 กำลังบันทึกเฟรม ${i+1}/${N}`)}
  dl[0]=dl[1]||10;window.__noRun=true;
  say('🎞 กำลังเข้ารหัสไฟล์ GIF…');await new Promise(r=>setTimeout(r,50));
  const b=gifEnc(fr,FW,FH,dl);if(GIFSTOP)throw'cancel';
  await dl2(b,nm);
 }catch(e){PK=null;if(e!=='cancel'&&e!=='cancel '){$('msg').textContent='ส่งออก GIF ไม่สำเร็จ: '+(e&&e.message||e)}else $('msg').textContent='ยกเลิกการส่งออก GIF'}
 finally{window.__noRun=false;document.documentElement.classList.remove('xfreeze');el.classList.remove('exporting');el.style.transform=tf;sv.forEach(([c,o])=>{try{c.options.animation=o}catch(e){}});tt.remove();GIFB=false}}
const dl2=(b,n)=>dl(b,n);
EXM.gif='image/gif';
document.querySelectorAll('[data-xo]').forEach(b=>b.onclick=()=>xOpen(b.dataset.xo));
$('xclose').onclick=$('xcan').onclick=xClose;$('xstop').onclick=()=>{XC.stop=true;$('xpm').textContent='กำลังยกเลิก...'};
$('xgo').onclick=()=>xRun();$('xask').checked=askOn();$('xask').onchange=e=>{try{localStorage.setItem('tm3_ask',e.target.checked?'1':'0')}catch(x){}};$('xquick').onclick=()=>{const d=EX.dpi;EX.dpi=400;xOpen();xRun().finally(()=>{EX.dpi=d;try{localStorage.setItem('tm3_exp',JSON.stringify(EX))}catch(e){}xRender()})};
const xStep=(t,p,m)=>{$('xpt').textContent=t;$('xpb').style.width=Math.round(p*100)+'%';if(m!=null)$('xpm').textContent=m;if(XC.stop)throw'cancel'};
const tick=()=>new Promise(r=>setTimeout(r,30));
const XT_=4096;
function canvasOK(w,h){try{const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#000';x.fillRect(w-1,h-1,1,1);const ok=x.getImageData(w-1,h-1,1,1).data[3]===255;c.width=c.height=0;return ok}catch(e){return false}}

async function xCanvas(el,ew,eh,bg,lab){const tf=el.style.transform;el.style.transform='';el.classList.add('exporting');document.documentElement.classList.add('xfreeze');window.__noRun=true;
 /* ตรึงทุกการเคลื่อนไหวก่อนจับภาพ: CSS animation/transition + แอนิเมชันของ Chart.js — กันภาพมัว/ค้างระหว่างเฟรม */
 const sv=[];try{Object.values(CH).forEach(c=>{try{sv.push([c,c.options.animation]);c.options.animation=false;c.update('none');c.draw()}catch(e){}})}catch(e){}
 try{(document.getAnimations?document.getAnimations():[]).forEach(an=>{try{an.pause()}catch(e){}})}catch(e){}
 await new Promise(r=>setTimeout(r,160));
 try{return await xCanvas0(el,ew,eh,bg,lab)}finally{el.classList.remove('exporting');document.documentElement.classList.remove('xfreeze');window.__noRun=false;el.style.transform=tf;sv.forEach(([c,o])=>{try{c.options.animation=o}catch(e){}});try{(document.getAnimations?document.getAnimations():[]).forEach(an=>{try{an.play()}catch(e){}})}catch(e){}}}
async function xCanvas0(el,ew,eh,bg,lab){const[W,H]=xdim(),sc=Math.min(W/ew,H/eh),dw=ew*sc,dh=eh*sc,ox=Math.round((W-dw)/2),oy=Math.round((H-dh)/2),cdpr=Math.min(Math.max(3,Math.ceil(sc)),10);
 if(el.id=='sheet'){Object.values(CH).forEach(c=>{c.options.devicePixelRatio=cdpr;c.resize()});await tick()}
 try{const tc=XT_/sc,nx=Math.ceil(ew/tc),ny=Math.ceil(eh/tc),tiles=[];
  for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const n=j*nx+i+1;xStep(`${lab||'กำลังสร้างภาพ'}${nx*ny>1?` — ส่วนที่ ${n}/${nx*ny}`:''}`,.1+.75*(n-1)/(nx*ny),`ขนาด ${W.toLocaleString()}×${H.toLocaleString()} px · ${EX.dpi} DPI`);await tick();
   const tw=Math.min(tc,ew-i*tc),th=Math.min(tc,eh-j*tc);
   const c=nx*ny==1?await html2canvas(el,{scale:sc,backgroundColor:bg,logging:false}):await html2canvas(el,{scale:sc,backgroundColor:bg,logging:false,x:i*tc,y:j*tc,width:tw,height:th});
   tiles.push({c,x:ox+Math.round(i*tc*sc),y:oy+Math.round(j*tc*sc),w:Math.round(tw*sc),h:Math.round(th*sc)});if(XC.stop)throw'cancel'}
  return{W,H,tiles,bg}}
 finally{if(el.id=='sheet'){Object.values(CH).forEach(c=>{c.options.devicePixelRatio=3;c.resize()})}}}
function xCompose(T){if(T.W*T.H>16.7e6&&(T.W>32000||T.H>32000||!canvasOK(T.W,T.H)))return null;const o=document.createElement('canvas');o.width=T.W;o.height=T.H;const x=o.getContext('2d');x.fillStyle=T.bg;x.fillRect(0,0,T.W,T.H);T.tiles.forEach(t=>x.drawImage(t.c,t.x,t.y,t.w,t.h));return o}
const blobOf=(c,t)=>new Promise(r=>c.toBlob(r,t=='jpg'?'image/jpeg':'image/png',.93));
async function xSaveImg(T,base){const big=xCompose(T);if(big){xStep('กำลังเข้ารหัสไฟล์ภาพ...',.9,'ภาพใหญ่อาจใช้เวลาสักครู่');await tick();const b=await blobOf(big,EX.fmt);big.width=big.height=0;if(!b)throw new Error('เบราว์เซอร์สร้างไฟล์ภาพขนาดนี้ไม่ได้ — ลองเลือก PDF หรือลดความละเอียด');await dl(b,base+'.'+EX.fmt);return}
 for(let k=0;k<T.tiles.length;k++){const t=T.tiles[k],o=document.createElement('canvas');o.width=t.w;o.height=t.h;const x=o.getContext('2d');x.drawImage(t.c,0,0,t.w,t.h);xStep(`กำลังบันทึกส่วนที่ ${k+1}/${T.tiles.length}`,.9);await dl(await blobOf(o,EX.fmt),`${base}_ส่วน${k+1}จาก${T.tiles.length}.${EX.fmt}`)}}
function xPdf(pages){const z=XS[EX.size],mm=z.mm||[z.px[0]/96*25.4,z.px[1]/96*25.4],pdf=new jspdf.jsPDF({orientation:'landscape',unit:'mm',format:[mm[0],mm[1]],compress:true});
 pages.forEach((T,pi)=>{if(pi)pdf.addPage([mm[0],mm[1]],'landscape');const k=mm[0]/T.W,c=T.bg.match(/\w\w/g).map(h=>parseInt(h,16));pdf.setFillColor(c[0],c[1],c[2]);pdf.rect(0,0,mm[0],mm[1],'F');
  T.tiles.forEach(t=>pdf.addImage(t.c.toDataURL('image/jpeg',.92),'JPEG',t.x*k,t.y*k,t.w*k,t.h*k,undefined,'FAST'))});return pdf.output('blob')}
async function xRun(){if(XC.busy)return;
 if(EX.fmt=='gif'){try{localStorage.setItem('tm3_exp',JSON.stringify(EX))}catch(e){}$('xm').classList.add('hide');return gifRun()}
 {let nm=null;if(EX.what=='table'){if(EX.fmt=='xlsx')nm=xname('xlsx');else if(EX.fmt=='csv')nm=xname('csv');else if(EX.fmt=='pdf')nm=xname('pdf');else if(xR().length<=20)nm=xname(EX.fmt,'หน้า1')}else nm=xname(EX.fmt);if(nm)prePick(nm);else PK=null}
 XC={stop:false,busy:true};try{localStorage.setItem('tm3_exp',JSON.stringify(EX))}catch(e){}
 $('xform').classList.add('hide');$('xprog').classList.remove('hide');$('xm').classList.remove('hide');const tag=stamp(),sz=EX.size+'-'+EX.dpi+'dpi';
 try{if(PK){xStep('📁 เลือกโฟลเดอร์และชื่อไฟล์ในหน้าต่างที่เปิดขึ้น...',.02,'');const r=await PK.p;if(r.e&&r.e.name=='AbortError'){PK=null;throw 'cancel'}if(r.e){PK=null;FSA=false}}xStep('กำลังเตรียมข้อมูล...',.05,'');await tick();
  if(EX.what=='table'&&EX.fmt=='xlsx'){xStep('กำลังสร้างไฟล์ Excel...',.5);await tick();await (RVMODE?rvXlsx():xlsxOut())}
  else if(EX.what=='table'&&EX.fmt=='csv'){xStep('กำลังสร้างไฟล์ CSV...',.5);await tick();await (RVMODE?rvCsv():csvOut())}
  else if(EX.what=='table'){const R=xR(),per=20,pages=Math.max(1,Math.ceil(R.length/per)),cs=[];
   for(let p=0;p<pages;p++){xStep(`กำลังสร้างหน้า ${p+1} จาก ${pages}`,(p+.2)/(pages+1),'กด "ยกเลิกการส่งออก" เพื่อหยุดได้ทุกเมื่อ');$('off').innerHTML=(RVMODE?rvTpHtml:tpHtml)(R,p,per,pages);await tick();const T=await xCanvas($('tp'),1123,794,'#ffffff',`กำลังสร้างหน้า ${p+1} จาก ${pages}`);
    if(EX.fmt=='pdf')cs.push(T);else await xSaveImg(T,xname(EX.fmt,'หน้า'+(p+1)).replace(/\.\w+$/,''))}
   $('off').innerHTML='';if(EX.fmt=='pdf'){xStep('กำลังรวมเป็นไฟล์ PDF...',.95);await tick();await dl(xPdf(cs),xname('pdf'))}}
  else{const ch=EX.what=='chart';if(ch){$('kp').classList.add('hide');$('ins').classList.add('hide');$('cg').classList.add('big');Object.values(CH).forEach(c=>c.resize())}
   try{xStep('กำลังสร้างภาพ '+(ch?'กราฟ':'อินโฟกราฟิก')+'...',.3,'ภาพความละเอียดสูงอาจใช้เวลาหลายวินาที');await tick();const T=await xCanvas($('sheet'),1123,794,IOMODE?'#1f0918':RVMODE?'#1a0509':'#071631','กำลังสร้างภาพ'+(ch?'กราฟ':'อินโฟกราฟิก'));xStep('กำลังบันทึกไฟล์...',.88);
    if(EX.fmt=='pdf'){xStep('กำลังสร้างไฟล์ PDF...',.9);await tick();await dl(xPdf([T]),xname('pdf'))}else await xSaveImg(T,xname(EX.fmt).replace(/\.\w+$/,''))}
   finally{if(ch){$('kp').classList.remove('hide');$('ins').classList.remove('hide');$('cg').classList.remove('big');Object.values(CH).forEach(c=>c.resize())}}}
  xStep('✅ ส่งออกเสร็จแล้ว',1,$('msg').textContent);XC.busy=false;setTimeout(()=>{if(!XC.busy)$('xm').classList.add('hide')},1200)}
 catch(e){$('off').innerHTML='';XC.busy=false;if(e==='cancel'){$('msg').textContent='ยกเลิกการส่งออกแล้ว';$('xm').classList.add('hide')}else{$('xpt').textContent='❌ ส่งออกไม่สำเร็จ';$('xpm').textContent=String(e&&e.message||e)+' — หากภาพใหญ่เกินหน่วยความจำ ลองเลือก PDF หรือลด DPI';$('xstop').textContent='ปิด';$('xstop').onclick=()=>{$('xm').classList.add('hide');$('xstop').textContent='⛔ ยกเลิกการส่งออก';$('xstop').onclick=()=>{XC.stop=true}}}}}
xRender();
function tpHtml(R,p,per,pages){const S=R.slice(p*per,(p+1)*per);return `<div class="a4" id="tp"><div class="sub"><div class="sh"><img src="${$('sheet').querySelector('.sh img').src}" alt=""><h2>ตารางข้อมูลการจับกุม ${TMODE?tmName(TMODE)+' ':''}กก.สส.บก.ตม.3</h2></div><div>${$('rng').innerHTML}</div></div><table><tr><th>ที่</th><th>วันที่</th><th>ชุด</th><th>รูปแบบ</th><th>ชื่อผู้ต้องหา</th><th>สัญชาติ</th><th>เพศ</th><th>อายุ</th><th>พาสปอร์ต</th><th>คดี</th><th>จังหวัด</th><th>ราย</th><th>การข่าว</th></tr>${S.map((r,i)=>`<tr><td>${p*per+i+1}</td><td>${fd(r.date)}</td><td>${r.team.slice(-1)}</td><td>${r.type}</td><td class="pii">${esc(r.name)||'-'}</td><td>${esc(r.nat)}</td><td>${r.sex||'-'}</td><td>${r.age||'-'}</td><td>${esc(r.pp)||'-'}</td><td>${esc(vc(r,'charge'))}${r.rel&&vc(r,'rel')!=vc(r,'charge')?' / '+esc(vc(r,'rel')):''}</td><td>${esc(r.place)||'-'}</td><td>${w(r)}</td><td>${esc(r.intel)||'-'}</td></tr>`).join('')}</table><div class="ft"><span>เอกสารสรุปเพื่อใช้ในราชการ</span><span>หน้า ${p+1}/${pages}</span></div></div>`}
function xlsxOut(){return xlsxOut2()}
function xlsxOut2(){const R=rows(),H=['ลำดับ','วันที่','ชป.','การปฏิบัติ','หน่วยร่วมจับ','ชื่อผู้ต้องหา','อายุ','สัญชาติ','เพศ','พาสปอร์ต/เลขบัตร','พื้นที่จังหวัด','คดี','คดีที่เกี่ยวข้อง','จำนวนราย','จำนวนคดี','ยอดค่าปรับ (บาท)','การข่าว','ลิงก์ข่าว','หมายเหตุ'];
 const A=[['สถิติผลการปฏิบัติ กก.สส.บก.ตม.3'],[$('rng').textContent],[],H].concat(R.map((r,i)=>[i+1,fd(r.date),r.team,r.type,r.joint,r.name,r.age?+r.age:'',r.nat,r.sex,r.pp,r.place,vc(r,'charge'),vc(r,'rel'),w(r),cs(r)||'',r.fine?+r.fine:'',r.intel,r.link,r.note]));
 A.push([],['','','','','','','','','','','','','รวม',sm(R),'',R.reduce((t,r)=>t+(+r.fine||0),0)]);
 const ws=XLSX.utils.aoa_to_sheet(A);ws['!cols']=[6,18,7,10,14,28,6,14,7,16,16,18,18,9,10,13,12,24,20].map(x=>({wch:x}));ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:8}},{s:{r:1,c:0},e:{r:1,c:8}}];
 if(R.length)ws['!autofilter']={ref:XLSX.utils.encode_range({s:{r:3,c:0},e:{r:3+R.length,c:H.length-1}})};
 const T=TM.map(t=>R.filter(r=>r.team==t)),self=sm(R.filter(r=>r.type=='จับเอง'));
 const S=[['สรุปผลการปฏิบัติ กก.สส.บก.ตม.3'],[$('rng').textContent],[],['สรุปตามชุดปฏิบัติการ'],['ชป.','จับเอง','ร่วมจับ','รวม (ราย)']].concat(T.map((a,i)=>{const s=sm(a.filter(r=>r.type=='จับเอง'));return[TM[i],s,sm(a)-s,sm(a)]}),[['รวม',self,sm(R)-self,sm(R)],[],['สรุปตามคดี'],['คดี','จำนวน (ราย)']],cntChips(R,'charge'),[[],['สรุปตามสัญชาติ'],['สัญชาติ','จำนวน (ราย)']],cnt(R,r=>r.nat),[[],['สรุปตามจังหวัด'],['จังหวัด','จำนวน (ราย)']],cnt(R,r=>r.place));
 const ws2=XLSX.utils.aoa_to_sheet(S);ws2['!cols']=[{wch:30},{wch:14},{wch:12},{wch:12}];
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'ข้อมูลการจับกุม');XLSX.utils.book_append_sheet(wb,ws2,'สรุป');
 return dl(new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),xname('xlsx'))}
function csvOut(){const H=['วันที่','ชป.','การปฏิบัติ','หน่วยร่วมจับ','ชื่อ','สัญชาติ','เพศ','พาสปอร์ต','อายุ','คดี','คดีที่เกี่ยวข้อง','จังหวัด','การข่าว','จำนวนราย','จำนวนคดี','ยอดค่าปรับ','ลิงก์ข่าว','หมายเหตุ'];
 const q=v=>'"'+String(v||'').replace(/"/g,'""')+'"';return dl(new Blob(['\ufeff'+[H.map(q).join(',')].concat(rows().map(r=>F.map(k=>q(k==='date'&&/^\d{4}-\d\d-\d\d$/.test(r.date||'')?(+r.date.slice(8))+'/'+(+r.date.slice(5,7))+'/'+r.date.slice(0,4):r[k])).join(','))).join('\n')],{type:'text/csv'}),xname('csv'))};
/* ===== backup with destinations ===== */
const BKH=['เดือน','วันที่','ชป.','การปฏิบัติ','ชื่อผู้ต้องหา','อายุ','สัญชาติ','เพศ','พาสปอร์ต','พื้นที่จังหวัด','คดี','คดีที่เกี่ยวข้อง','จำนวนราย','จำนวนคดี','ยอดค่าปรับ','การข่าว','ลิงก์ข่าว','หมายเหตุ','หน่วยที่ร่วมจับ'];
const bkRow=r=>[MON[+r.date.slice(5,7)-1]+be2(r.date.slice(0,4)),(+r.date.slice(8))+'/'+(+r.date.slice(5,7))+'/'+r.date.slice(0,4),r.team,r.type,r.name,r.age,r.nat,r.sex,r.pp,r.place,r.charge,r.rel,w(r),r.fine,r.intel,r.link,r.note,r.joint].map(v=>v==null?'':v);
let BK={fmt:'json',scope:'all'};try{Object.assign(BK,JSON.parse(localStorage.getItem('tm3_bk'))||{})}catch(e){}
const bkRows=()=>(BK.scope=='all'?D.slice():rows()).sort((a,b)=>a.date<b.date?-1:1);
const bkName=ext=>`backup_${BK.scope=='all'?'ข้อมูลทั้งหมด':fltTag()}_${stamp()}_กกสส.บก.ตม.3.${ext}`;
const MIME={json:'application/json',xlsx:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',csv:'text/csv'};
function bkBlob(fmt){const R=bkRows();
 if(fmt=='json')return new Blob([JSON.stringify({app:'tm3-arrest-stats',version:1,exported:new Date().toISOString(),scope:BK.scope=='all'?'all':fltTag(),count:R.length,records:R,abbr:ABRu},null,1)],{type:MIME.json});
 const A=[BKH].concat(R.map(bkRow));
 if(fmt=='csv'){const q=v=>'"'+String(v).replace(/"/g,'""')+'"';return new Blob(['﻿'+A.map(r=>r.map(q).join(',')).join('\n')],{type:MIME.csv})}
 const ws=XLSX.utils.aoa_to_sheet(A);ws['!cols']=[8,11,7,10,26,6,12,7,15,15,18,22,8,10,10,22,18,14].map(x=>({wch:x}));const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'ข้อมูลการจับกุม');
 return new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:MIME.xlsx})}
const bkMsg=(t,ok)=>{$('bkm').innerHTML=t;$('bkm').className='bkm '+(ok===false?'err':ok?'ok':'')};
let FSA=null;
async function bkLocal(){const b=bkBlob(BK.fmt),nm=bkName(BK.fmt);
 if(window.showSaveFilePicker&&FSA!==false){try{const h=await showSaveFilePicker({suggestedName:nm,startIn:'documents',types:[{description:BK.fmt.toUpperCase(),accept:{[MIME[BK.fmt]]:['.'+BK.fmt]}}]});const wr=await h.createWritable();await wr.write(b);await wr.close();FSA=true;bkMsg('✅ บันทึกแล้ว: <b>'+esc(h.name)+'</b> ในโฟลเดอร์ที่คุณเลือก',true);return}
  catch(e){if(e&&e.name=='AbortError'){bkMsg('ยกเลิกการบันทึก');return}FSA=false}}
 await dl(b,nm);bkMsg('✅ ส่งไฟล์ <b>'+esc(nm)+'</b> ให้บันทึกแล้ว'+(FSA===false||!window.showSaveFilePicker?'<br>📁 หากไม่มีหน้าต่างให้เลือกโฟลเดอร์ แสดงว่าเบราว์เซอร์ตั้งให้เก็บอัตโนมัติในโฟลเดอร์ดาวน์โหลด — ดูวิธีเปิด "ถามตำแหน่งทุกครั้ง" ด้านล่าง':''),true);if(FSA===false||!window.showSaveFilePicker)$('bkhelp').open=true}
async function bkShare(){const b=bkBlob(BK.fmt),f=new File([b],bkName(BK.fmt),{type:MIME[BK.fmt]});
 try{if(!(navigator.canShare&&navigator.canShare({files:[f]})))throw new Error('อุปกรณ์/เบราว์เซอร์นี้ไม่รองรับการแชร์ไฟล์ — ลองบนมือถือ หรือใช้ "บันทึกลงเครื่อง"');await navigator.share({files:[f],title:'สำรองข้อมูล กก.สส.บก.ตม.3',text:'ไฟล์สำรองข้อมูลสถิติผลการปฏิบัติ'});bkMsg('✅ ส่งไปยังแอปที่เลือกแล้ว',true)}
 catch(e){if(e&&e.name=='AbortError')bkMsg('ยกเลิกการแชร์');else bkMsg('❌ '+esc(e.message||e),false)}}
async function bkCopy(){const R=bkRows(),t=[BKH].concat(R.map(bkRow)).map(r=>r.map(v=>String(v).replace(/[\t\n]+/g,' ')).join('\t')).join('\n');
 try{await navigator.clipboard.writeText(t)}catch(e){const ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0';document.body.append(ta);ta.select();try{document.execCommand('copy')}finally{ta.remove()}}
 bkMsg(`✅ คัดลอก ${R.length} แถว (พร้อมหัวตาราง) แล้ว — เปิด Google Sheets คลิกเซลล์ A1 แล้วกด Ctrl+V`,true)}
async function bkCloud(){const as=await claude.use('assets');if(!as){bkMsg('❌ คลาวด์ของแอปใช้ได้เฉพาะเจ้าของ/ผู้มีสิทธิ์แก้ไขแอปนี้',false);return}
 bkMsg('⏳ กำลังอัปโหลด...');try{const r=await as.upload(bkBlob('json'),{type:'application/json'});bkMsg(`✅ เก็บบนคลาวด์แล้ว (${fsz(r.sizeBytes)}) — เปิดแอปจากเครื่องอื่นแล้วกู้คืนได้จากรายการด้านล่าง`,true);bkList()}catch(e){bkMsg('❌ อัปโหลดไม่สำเร็จ: '+esc(e.message||e.code||e),false)}}
async function bkList(){const box=$('bkl'),as=await claude.use('assets');if(!as){box.innerHTML='<p class="note">ไม่มีสิทธิ์ใช้คลาวด์ของแอปในมุมมองนี้</p>';return}
 try{const{assets:A,usage:u}=await as.list();const L=A.filter(a=>/json|text/.test(a.contentType)).sort((a,b)=>a.createdAt<b.createdAt?1:-1);
  box.innerHTML=(L.length?L.map(a=>{const d=new Date(a.createdAt);return`<div class="bki"><span>☁️ ${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} น.</span><small>${fsz(a.sizeBytes)}</small><button type="button" class="btn sm ok" data-bkr="${a.url}">กู้คืน</button><button type="button" class="btn sm" data-bkd="${a.url}">ดาวน์โหลด</button><button type="button" class="btn sm dg" data-bkx="${a.id}">ลบ</button></div>`}).join(''):'<p class="note">ยังไม่มีข้อมูลสำรองบนคลาวด์</p>')+`<p class="note">พื้นที่ใช้ไป ${fsz(u.bytes)} จาก ${fsz(u.maxBytes)}</p>`}catch(e){box.innerHTML='<p class="note">โหลดรายการไม่สำเร็จ: '+esc(e.message||e.code||e)+'</p>'}}
async function bkRestoreObj(a){const recs=Array.isArray(a)?a:a&&a.records;if(!Array.isArray(recs))throw new Error('ไม่ใช่ไฟล์สำรองของแอปนี้');vSnap('อัตโนมัติ — ก่อนกู้คืนไฟล์สำรอง');
 if(!await uiConfirm('กู้คืนข้อมูลสำรอง?',`แทนที่ข้อมูลปัจจุบัน (${D.length} รายการ) ด้วยข้อมูลสำรอง ${recs.length} รายการ?\nแนะนำให้สำรองข้อมูลปัจจุบันก่อน`,'♻️ แทนที่','ยกเลิก',true))return false;
 D=recs.map(normRec);if(a&&a.abbr&&typeof a.abbr=='object'){ABRu=Object.assign({},a.abbr,ABRu);try{localStorage.setItem('tm3_abbr',JSON.stringify(ABRu))}catch(e){}}persist();render();return true}
function bkRender(){document.querySelectorAll('#bm [data-bg]').forEach(G=>G.querySelectorAll('[data-v]').forEach(b=>b.classList.toggle('on',BK[G.dataset.bg]==b.dataset.v)));
 const n=bkRows().length;$('bkn').textContent=`${n} รายการ`+(BK.scope=='all'?'':' (ตามตัวกรองปัจจุบัน)');$('bkf').textContent=bkName(BK.fmt);
 $('bkshare').classList.toggle('hide',!navigator.share);try{localStorage.setItem('tm3_bk',JSON.stringify(BK))}catch(e){}}
$('bk').onclick=()=>{if(!expGate())return;bkMsg('');bkRender();$('bm').classList.remove('hide');bkList()};
$('bm').addEventListener('click',async e=>{const g=e.target.closest('[data-bg] [data-v]');if(g){BK[g.closest('[data-bg]').dataset.bg]=g.dataset.v;bkRender();return}
 const t=e.target.closest('button');if(!t){if(e.target.id=='bm')$('bm').classList.add('hide');return}
 if(t.id=='bkx')$('bm').classList.add('hide');else if(t.id=='bklocal')bkLocal();else if(t.id=='bkcloud')bkCloud();else if(t.id=='bkshare')bkShare();else if(t.id=='bkcopy')bkCopy();
 else if(t.dataset.bkr){try{const a=await(await fetch(t.dataset.bkr)).json();if(await bkRestoreObj(a))bkMsg('✅ กู้คืนจากคลาวด์แล้ว',true)}catch(x){bkMsg('❌ '+esc(x.message||x),false)}}
 else if(t.dataset.bkd){try{const b=await(await fetch(t.dataset.bkd)).blob();await dl(b,'backup_จากคลาวด์_'+stamp()+'_กกสส.บก.ตม.3.json')}catch(x){bkMsg('❌ '+esc(x.message||x),false)}}
 else if(t.dataset.bkx){if(!await uiConfirm('ลบข้อมูลสำรองชุดนี้?','ลบออกจากคลาวด์ถาวร','🗑 ลบ','ยกเลิก',true))return;try{await(await claude.use('assets')).delete(t.dataset.bkx);bkList()}catch(x){bkMsg('❌ '+esc(x.message||x.code||x),false)}}});
$('rs').onclick=()=>$('fi').click();
$('fi').onchange=async e=>{const f=e.target.files[0];e.target.value='';if(!f)return;try{await bkRestoreObj(JSON.parse(await f.text()))}catch(x){uiAlert('ไฟล์ไม่ถูกต้อง: '+(x.message||x),false)}};
$('imp').onclick=()=>$('ip').classList.toggle('hide');
const MP={'วันที่':'date','ชป.':'team','การปฏิบัติ':'type','ชื่อผู้ต้องหา':'name','อายุ':'age','สัญชาติ':'nat','เพศ':'sex','พาสปอร์ต':'pp','พื้นที่จังหวัด':'place','คดี':'charge','คดีที่เกี่ยวข้อง':'rel','จำนวนราย':'num','จำนวนคดี':'cases','ยอดค่าปรับ':'fine','การข่าว':'intel','ลิงก์ข่าว':'link','หมายเหตุ':'note','หน่วยที่ร่วมจับ':'joint'};
const iso=v=>{const m=String(v).match(/(\d+)\/(\d+)\/(\d+)/);if(!m)return'';let y=+m[3];if(y>2400)y-=543;return y+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0')};
$('go').onclick=async()=>{const L=$('ta').value.replace(/\u200b/g,'').split(/\r?\n/).map(l=>l.split('\t').map(c=>c.trim())),hi=L.findIndex(l=>l.includes('ชื่อผู้ต้องหา')&&l.includes('คดี'));
 if(!$('ta').value.trim()){impFail('ยังไม่ได้วางข้อมูล','คัดลอกตารางจาก Google Sheets (รวมแถวหัวตาราง) แล้ววางในช่องก่อนกดนำเข้า');return}if(hi<0){impFail('ไม่พบแถวหัวตาราง','ต้องคัดลอกรวมแถวหัวตาราง (เดือน, วันที่, ชป. …) มาด้วย');return}
 if(D.length)vSnap('อัตโนมัติ — ก่อนนำเข้าจาก Google Sheets');if(D.length&&await uiConfirm('ล้างข้อมูลเดิมก่อนนำเข้า?','แทนที่ทั้งหมด = ล้างของเดิม\nเพิ่มต่อท้าย = ข้ามรายการที่ซ้ำ','แทนที่ทั้งหมด','เพิ่มต่อท้าย'))D=[];
 const H=L[hi],key=r=>[r.date,r.team,r.name,r.pp,r.place,r.charge,r.num].join('|'),have=new Set(D.map(key));let a=0,k=0;const add=[];
 L.slice(hi+1).forEach((l,j)=>{const r={id:Date.now()+j};F.forEach(f=>r[f]='');H.forEach((h,i)=>{if(MP[h])r[MP[h]]=l[i]||''});r.date=iso(r.date);
  if(!r.date){if(l.some(c=>c))k++;return}r.team=r.team.replace(/\s/g,'');r.num=r.num||'1';r.fine=String(r.fine).replace(/[,\s]/g,'');if(!lkN(r.link))r.link='';
  if(have.has(key(r))){k++;return}add.push(r);a++});
 add.forEach(normRec);D=D.concat(add);persist();render();$('ta').value='';$('ip').classList.add('hide');try{localStorage.setItem('tm3_gsimp',new Date().toISOString())}catch(e){}gsBar();impDone(a,k);$('d').scrollIntoView({behavior:'smooth',block:'start'})};

const PROMPT=`ดึงข้อมูลจากบันทึกการจับกุมต่อไปนี้ ตอบเป็น JSON array เท่านั้น (ไม่มีข้อความอื่น) 1 object ต่อผู้ต้องหา 1 คน (ถ้าเป็นกลุ่มที่ไม่ระบุชื่อให้ใช้ 1 object และใส่ num เป็นจำนวนราย)
คีย์: date (วันที่จับกุม รูปแบบ YYYY-MM-DD แบบ ค.ศ. ถ้าเป็น พ.ศ. ให้ลบ 543), team (ชป.1/ชป.2/ชป.3 เฉพาะถ้าระบุ), type (จับเอง หรือ ร่วมจับ), joint (หน่วยที่ร่วมจับ), name, nat (สัญชาติ), sex (ชาย/หญิง), pp (เลขพาสปอร์ตหรือเลขบัตรประชาชน), age (ตัวเลข), charge (คดีหลัก เลือกจากรายการนี้ถ้าตรง: ${SC.join(' | ')} ถ้ามีหลายข้อหาให้คั่นด้วย ", "), rel (คดีที่เกี่ยวข้อง), place (จังหวัดที่จับกุม), intel (การข่าว เลือกจาก: ไม่มีข่าว | ส่งข่าว | ข่าวซ้ำ | แถลงข่าว), num (จำนวนราย), cases (จำนวนคดีของผู้ต้องหารายนั้น เป็นตัวเลข เช่น "ดำเนินคดี 2 คดี" → 2 หรือนับจากจำนวนข้อหาที่แจ้งถ้าข้อความบอกชัดว่าแยกเป็นกี่คดี ถ้าไม่ระบุให้ใส่ ""), fine (ยอดค่าปรับเป็นตัวเลข), link, note
ห้ามเดา ถ้าไม่มีข้อมูลให้ใส่ "" ชื่อภาษาอังกฤษให้คงตัวสะกดเดิม
--- บันทึก ---
`;
let PN=[];
const blank=()=>{const r={};F.forEach(k=>r[k]='');r.num='1';r.type='จับเอง';r.sex='ไม่ระบุ';return r};
function clean(r){const o=Object.assign(blank(),r);F.forEach(k=>o[k]=o[k]==null?'':String(o[k]).trim());
 let m=o.date.match(/^(\d{4})-(\d\d)-(\d\d)$/);if(m){if(+m[1]>2400)o.date=(m[1]-543)+'-'+m[2]+'-'+m[3]}else o.date='';
 m=o.team.match(/ชป\.?\s*([1-3])/);o.team=m?'ชป.'+m[1]:'';o.type=/ร่วม/.test(o.type)?'ร่วมจับ':'จับเอง';
 if(!IO.includes(o.intel))o.intel='';o.sex=/หญิง/.test(o.sex)?'หญิง':/ชาย/.test(o.sex)?'ชาย':'ไม่ระบุ';o.num=String(+o.num||1);o.cases=String(o.cases||'').replace(/[^\d]/g,'');if(!+o.cases)o.cases=o.num;o.fine=o.fine.replace(/[^\d]/g,'');o.age=o.age.replace(/[^\d]/g,'');if(!lkN(o.link))o.link='';return normRec(o)}
const okRec=r=>r.date&&r.team&&r.nat&&r.charge;
async function txt(f){const b=await f.arrayBuffer();
 if(/\.docx$/i.test(f.name))return(await mammoth.extractRawText({arrayBuffer:b})).value;
 if(/\.pdf$/i.test(f.name)){pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';const d=await pdfjsLib.getDocument({data:b}).promise;let t='';for(let i=1;i<=d.numPages;i++){const c=await(await d.getPage(i)).getTextContent();t+=c.items.map(x=>x.str+(x.hasEOL?'\n':' ')).join('')+'\n'}return t}
 throw new Error('รองรับเฉพาะ .docx และ .pdf')}
$('wb').onclick=()=>$('wf').click();
let STG=[];const fsz=b=>b>1048576?(b/1048576).toFixed(1)+' MB':Math.max(1,Math.round(b/1024))+' KB';
function renderStg(){if(!STG.length){$('stg').innerHTML='';return}
 $('stg').innerHTML='<div class="sth">📥 ไฟล์ที่รอนำเข้า ('+STG.length+') — เพิ่มคำอธิบายเพื่อช่วยให้ระบบอ่านข้อมูลได้แม่นยำขึ้น</div>'+STG.map((x,i)=>`<div class="sti"><div class="stn"><span class="ic">${/\.pdf$/i.test(x.f.name)?'📕':'📘'}</span><span class="nm">${esc(x.f.name)}</span><small>${fsz(x.f.size)}</small><button type="button" class="sx" data-sx="${i}" title="เอาไฟล์นี้ออก">✕</button></div><textarea data-sn="${i}" rows="2" placeholder="รายละเอียดเกี่ยวกับไฟล์นี้ (ไม่บังคับ) เช่น บันทึกจับกุม ชป.3 วันที่ 5 ม.ค. 69 ร่วมกับ สภ.เมืองระยอง / ผู้ต้องหาทั้งหมดสัญชาติจีน / ค่าปรับคนละ 4,000 บาท">${esc(x.note)}</textarea></div>`).join('')
 +`<div class="sta"><button type="button" class="btn ok" id="wgo">⬆ นำเข้า ${STG.length} ไฟล์</button><button type="button" class="btn" id="wadd">➕ เพิ่มไฟล์</button><button type="button" class="btn" id="wclr">ล้างรายการ</button></div>`;
 $('wgo').onclick=runImport;$('wadd').onclick=()=>$('wf').click();$('wclr').onclick=()=>{STG=[];renderStg()}}
$('stg').addEventListener('input',e=>{const t=e.target.closest('[data-sn]');if(t)STG[+t.dataset.sn].note=t.value});
$('stg').addEventListener('click',e=>{const b=e.target.closest('[data-sx]');if(b){STG.splice(+b.dataset.sx,1);renderStg()}});
$('wf').onchange=e=>{const fs=[...e.target.files];e.target.value='';fs.forEach(f=>{if(!STG.some(x=>x.f.name==f.name&&x.f.size==f.size))STG.push({f,note:''})});$('wm').textContent='';renderStg()};
async function runImport(){if(!STG.length)return;const sp=await claude.use('sample');if(!sp){$('wm').textContent='❌ ฟีเจอร์นี้ใช้ไม่ได้ในมุมมองนี้';return}
 const list=STG.slice();$('wgo').disabled=true;$('wgo').textContent='⏳ กำลังนำเข้า...';let ok=0;
 for(const[k,x]of list.entries()){const f=x.f;$('wm').textContent=`กำลังอ่าน ${f.name} (${k+1}/${list.length}) ...`;
  try{const t=(await txt(f)).trim();if(t.length<20)throw new Error('ไม่พบข้อความในไฟล์ (PDF สแกนเป็นภาพยังไม่รองรับ)');
   const ctx=x.note.trim()?`\n--- คำอธิบายเพิ่มเติมจากเจ้าหน้าที่ (ใช้ประกอบการตีความ เช่น ข้อมูลที่ไม่มีในเอกสาร ให้ถือว่าถูกต้อง) ---\n${x.note.trim()}\n`:'';
   const a=await sp.json(PROMPT+t.slice(0,14000)+ctx,{cache:false});const L=Array.isArray(a)?a:(a.records||[a]);
   L.forEach((r,i)=>PN.push(Object.assign(clean(r),{id:Date.now()+PN.length+i,src:f.name})));ok++;STG=STG.filter(y=>y!==x);$('wm').textContent='✅ อ่าน '+f.name+' ได้ '+L.length+' รายการ'}
  catch(e){$('wm').textContent='❌ '+f.name+': '+(e.message||e.code||e)}}
 renderStg();pv();if(ok)$('wm').textContent=`✅ นำเข้าสำเร็จ ${ok}/${list.length} ไฟล์ — กรุณาตรวจสอบรายการด้านล่างก่อนบันทึก`+(STG.length?' (ไฟล์ที่ไม่สำเร็จยังค้างอยู่ในรายการ)':'')}
function pv(){if(!PN.length){$('pv').innerHTML='';return}
 $('pv').innerHTML='<table><tr><th>ไฟล์</th><th>วันที่</th><th>ชป.</th><th>ชื่อ</th><th>สัญชาติ</th><th>คดี</th><th>จังหวัด</th><th>ราย</th><th></th></tr>'+PN.map((r,i)=>`<tr><td>${esc(r.src)}</td><td>${r.date?fd(r.date):'⚠'}</td><td>${r.team||'⚠'}</td><td>${esc(r.name)||'-'}</td><td>${esc(r.nat)||'⚠'}</td><td>${esc(r.charge)||'⚠'}</td><td>${esc(r.place)||'-'}</td><td>${r.num}</td><td style="white-space:nowrap"><button class="btn" onclick="pf(${i})">กรอกฟอร์ม</button> <button class="btn dg" onclick="PN.splice(${i},1);pv()">🗑</button></td></tr>`).join('')+'</table><div style="margin-top:6px;display:flex;gap:8px"><button class="btn pr" id="pa">💾 บันทึกทั้งหมดที่ข้อมูลครบ ('+PN.filter(okRec).length+')</button><button class="btn" onclick="PN=[];pv()">ล้างรายการ</button></div><p style="font-size:12px;color:var(--m);margin:4px 0 0">⚠ = ข้อมูลไม่ครบ กด "กรอกฟอร์ม" เพื่อเติมแล้วบันทึกเอง</p>';
 $('pa').onclick=()=>{const g=PN.filter(okRec);if(!g.length)return;const gn=g.map(({src,...r})=>r);D=D.concat(gn);gn.forEach(r=>gsPush(r,null));PN=PN.filter(r=>!okRec(r));persist();render();pv();$('wm').textContent='✅ บันทึก '+g.length+' รายการแล้ว'}}
window.pf=i=>{const r=PN[i];F.forEach(k=>$(k).value=r[k]||'');if(!$('intel').value)$('intel').value=IO[0];PN.splice(i,1);eid=null;pv();$('ft').textContent='บันทึกการจับกุม (จากไฟล์ — ตรวจสอบแล้วกดบันทึก)';window.scrollTo(0,0)};
// ---- paste text → form ----
const THMON=[['มกราคม','ม.ค.','มค','jan'],['กุมภาพันธ์','ก.พ.','กพ','feb'],['มีนาคม','มี.ค.','มีค','mar'],['เมษายน','เม.ย.','เมย','apr'],['พฤษภาคม','พ.ค.','พค','may'],['มิถุนายน','มิ.ย.','มิย','jun'],['กรกฎาคม','ก.ค.','กค','jul'],['สิงหาคม','ส.ค.','สค','aug'],['กันยายน','ก.ย.','กย','sep'],['ตุลาคม','ต.ค.','ตค','oct'],['พฤศจิกายน','พ.ย.','พย','nov'],['ธันวาคม','ธ.ค.','ธค','dec']];
const rxE=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function pxDate(t){const MI={};THMON.forEach((a,i)=>a.forEach(x=>{MI[x.toLowerCase()]=i+1;MI[x.toLowerCase().replace(/\.$/,'')]=i+1}));const mk=Object.keys(MI).sort((a,b)=>b.length-a.length).map(rxE).join('|');
 const Y=y=>{y=+y;if(y<100)y+=y>=40?2500:2000;if(y>2400)y-=543;return y};const out=[];let m;
 const r1=new RegExp('(\\d{1,2})\\s*(?:'+mk+')[a-z]*\\.?\\s*(?:พ\\.?ศ\\.?|ค\\.?ศ\\.?)?\\s*(\\d{2,4})','gi'),r1m=new RegExp('^(\\d{1,2})\\s*('+mk+')','i');
 while(m=r1.exec(t)){const mm=m[0].match(r1m);out.push({i:m.index,d:+m[1],mo:MI[mm[2].toLowerCase()],y:Y(m[2])})}
 const r2=/(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/g;while(m=r2.exec(t))out.push({i:m.index,d:+m[1],mo:+m[2],y:Y(m[3])});
 const r3=/(\d{4})-(\d{1,2})-(\d{1,2})/g;while(m=r3.exec(t))out.push({i:m.index,d:+m[3],mo:+m[2],y:Y(m[1])});
 const ok=out.filter(o=>o.mo>=1&&o.mo<=12&&o.d>=1&&o.d<=31&&o.y>1990&&o.y<2100&&!/เกิด|หมดอายุ|expir|birth|ออกให้|ออกเมื่อ/i.test(t.slice(Math.max(0,o.i-25),o.i))).sort((a,b)=>a.i-b.i);
 const pick=ok.find(o=>/จับ|วันที่|เมื่อ/.test(t.slice(Math.max(0,o.i-40),o.i)))||ok[0];
 return pick?pick.y+'-'+String(pick.mo).padStart(2,'0')+'-'+String(pick.d).padStart(2,'0'):''}
function pxPre(after,list,alias){const a=after.replace(/^[\s:：]+/,'');let best='';list.forEach(n=>{if(a.startsWith(n)&&n.length>best.length)best=n});
 Object.keys(alias||{}).forEach(k=>{if(a.toLowerCase().startsWith(k)&&k.length>best.length)best=alias[k]});return best}
function pxLocal(raw){const t=raw.replace(/[๐-๙]/g,c=>'๐๑๒๓๔๕๖๗๘๙'.indexOf(c)).replace(/ /g,' '),r=blank(),lo=t.toLowerCase();let m;
 r.date=pxDate(t);
 if(m=t.match(/(?:ชป\.?|ชุดปฏิบัติการ(?:ที่)?|ชุดที่)\s*([1-3])/))r.team='ชป.'+m[1];
 if(/ร่วม(?:กับ|จับ|ปฏิบัติ|กัน)|สนธิกำลัง/.test(t)){r.type='ร่วมจับ';if(m=t.match(/(?:ร่วมกับ|สนธิกำลังกับ)\s*([^\n,;]{2,60}?)(?=\s+(?:จับกุม|ทำการ|ได้|เข้า|ตรวจ|นำ)|[\n,;]|$)/))r.joint=m[1].trim()}
 let ti='';
 if(m=t.match(/\b(MRS|MISS|MS|MR)(?:\.\s*|\s+)([A-Z][A-Z'\-]+(?:\s+[A-Z][A-Z'\-]+){0,4})/)){ti=m[1];r.name=(m[1]+'.'+m[2]).trim()}
 else if(m=t.match(/ชื่อ(?:\s*-?\s*สกุล|ผู้ต้องหา)?\s*[:：]?\s*((?:นาย|นางสาว|นาง|น\.ส\.)?\s*[^\s,;\n]+(?:\s+[^\s,;\n]+)?)/)){r.name=m[1].trim();ti=(r.name.match(/^(นางสาว|นาง|น\.ส\.|นาย)/)||[''])[0]}
 else if(m=t.match(/(นางสาว|นาง|น\.ส\.|นาย)\s*([ก-๙]{2,})\s+([ก-๙]{2,})/)){ti=m[1];r.name=m[1]+m[2]+' '+m[3]}
 if(/^(MR|นาย)$/.test(ti))r.sex='ชาย';else if(ti)r.sex='หญิง';
 if(m=t.match(/เพศ\s*[:：]?\s*(ชาย|หญิง)/))r.sex=m[1];else if(r.sex=='ไม่ระบุ'&&(m=lo.match(/\b(female|male)\b/)))r.sex=m[1]=='male'?'ชาย':'หญิง';
 const NAL={};Object.keys(NA).forEach(k=>NAL[k]=NA[k]);
 for(const mm of t.matchAll(/สัญชาติ/g)){const n=pxPre(t.slice(mm.index+7,mm.index+40),NATS,NAL);if(n){r.nat=n;break}}
 if(!r.nat)for(const mm of t.matchAll(/(?:ชาว|คน)/g)){const n=pxPre(t.slice(mm.index+(t[mm.index]=='ช'?3:2),mm.index+30),NATS.filter(x=>x!='ไทย'),NAL);if(n){r.nat=n;break}}
 if(m=t.match(/(?:หนังสือเดินทาง|พาสปอร์ต|\bpassport|\bpp)\s*(?:เลขที่|no\.?|number|#)?\s*[:：.]?\s*([A-Z]{0,3}\d{5,10}[A-Z0-9]{0,2})/i))r.pp=m[1].toUpperCase();
 else if(m=t.match(/(?:บัตรประ(?:จำตัว)?ชาชน|เลขประจำตัวประชาชน|ปชช\.?)[^\d]{0,20}(\d[\d\s-]{11,20}\d)/)){const d=m[1].replace(/\D/g,'');if(d.length==13)r.pp=d}
 if(m=t.match(/อายุ\s*[:：]?\s*(\d{1,3})/)||lo.match(/\bage\s*[:：]?\s*(\d{1,3})/))r.age=m[1];
 for(const mm of t.matchAll(/(?:จ\.|จังหวัด)\s*/g)){const p=pxPre(t.slice(mm.index+mm[0].length,mm.index+mm[0].length+30),PROVS,PA);if(p){r.place=p;break}}
 if(!r.place){if(/กรุงเทพ|กทม/.test(t))r.place='กทม';else{const c=PROVS.filter(p=>p.length>=5&&t.includes(p)).sort((a,b)=>t.indexOf(a)-t.indexOf(b));if(c[0])r.place=c[0]}}
 const cand=[];[...SC,...SR].forEach(v=>cand.push([ck(v),v]));
 const ALS={'อยู่ในราชอาณาจักรเกินกำหนด':'overstay','อยู่เกินกำหนด':'overstay','เข้าเมืองโดยไม่ได้รับอนุญาต':'หลบหนีเข้าเมือง','ทำงานโดยไม่ได้รับใบอนุญาต':'ทำงานโดยไม่ได้รับอนุญาต','rednotice':'INTERPOLหมายแดง',...ABR0};
 const known=new Set([...SC,...SR]);const BADK=new Set(['หลบหนี','แรงงาน','คอม','ทำงาน','ปืน','ต้องห้าม']);Object.entries(ALS).forEach(([k,v])=>{if(ck(k).length>=4&&!BADK.has(k)&&known.has(v))cand.push([ck(k),v])});
 const T=ck(t),spans=[],hit=[];cand.sort((a,b)=>b[0].length-a[0].length).forEach(([k,v])=>{if(!k)return;let i=T.indexOf(k);while(i>=0){const e=i+k.length;if(!spans.some(s=>i<s[1]&&e>s[0])){spans.push([i,e]);hit.push([i,v]);break}i=T.indexOf(k,i+1)}});
 const seen=new Set(),hs=hit.sort((a,b)=>a[0]-b[0]).map(x=>x[1]).filter(v=>!seen.has(v)&&seen.add(v)),scs=new Set(SC);
 r.charge=joinChips(hs.filter(v=>scs.has(v)));r.rel=joinChips(hs.filter(v=>!scs.has(v)));if(!r.charge&&r.rel){r.charge=r.rel;r.rel=''}
 if(m=t.match(/(?:จำนวน|รวม|ทั้งหมด)\s*(\d{1,3})\s*(?:ราย|คน)/)||t.match(/(\d{1,3})\s*ราย/))r.num=m[1];if(m=t.match(/(?<![\d.\/])(\d{1,3})\s*คดี(?!ที่)/))r.cases=m[1];
 if(m=t.match(/(?:ค่าปรับ|ปรับ(?:เป็นเงิน)?)[^\d\n]{0,25}?([\d,]{3,})\s*(?:บาท|฿|-)/))r.fine=m[1].replace(/,/g,'');
 const iv=IO.filter(o=>o&&o!=IO[0]).sort((a,b)=>b.length-a.length).find(o=>t.includes(o));if(iv)r.intel=iv;
 if(m=t.match(/https?:\/\/[^\s<>"']+/))r.link=m[0];
 return r}
const pxClr=()=>document.querySelectorAll('#f .af').forEach(e=>e.classList.remove('af'));
function pxFill(r){fClear(true);pxClr();let n=0;const miss=[];
 const put=(k,v,mk)=>{const el=$(k);if(el.tagName=='SELECT'&&![...el.options].some(o=>o.value==v||o.text==v))return;el.value=v;if(mk){n++;const sb=el.nextElementSibling,tg=(el.type=='hidden'||el.classList.contains('hide'))&&sb?sb:el;tg.classList.add('af')}};
 F.forEach(k=>{const v=r[k];if(k=='note')return;if(k=='type'){put(k,r._typ?'ร่วมจับ':'จับเอง',r._typ);return}if(k=='sex'){put(k,v||'ไม่ระบุ',v&&v!='ไม่ระบุ');return}
  if(v==null||v==='')return;if(k=='num'&&String(v)=='1'){put(k,'1',false);return}put(k,v,true)});
 if(!$('intel').value)$('intel').value=IO[0];
 ['date','nat','charge'].forEach(k=>{if(!r[k])miss.push({date:'วันที่',nat:'สัญชาติ',charge:'คดี'}[k])});if(!r.team)miss.push('ชุดปฏิบัติการ');
 eid=null;$('ft').textContent='บันทึกการจับกุม (จากข้อความ — ตรวจสอบช่องที่ไฮไลต์แล้วกดบันทึก)';
 autoNote();/* ช่องถูกเติมด้วยโค้ด ไม่มี event — สรุปลงหมายเหตุต่อท้ายข้อความเดิม (เช่น overstay 55 วัน) */
 return{n,miss}}
document.addEventListener('change',e=>{const t=e.target;if(!t.closest||!t.closest('#f'))return;t.classList.remove('af');const d=t.closest('.dsel');d&&d.classList.remove('af');const n=t.nextElementSibling;n&&n.classList.contains('seg')&&n.classList.remove('af')});
document.addEventListener('input',e=>{const t=e.target;if(t.classList&&t.classList.contains('af'))t.classList.remove('af')});
$('save').addEventListener('click',()=>setTimeout(()=>{if($('ft').textContent=='บันทึกการจับกุม')pxClr()},0));$('clr').addEventListener('click',pxClr);
const ptxCnt=()=>{const l=$('ptx').value.trim().length;$('pcnt').textContent=l?l.toLocaleString()+' ตัวอักษร · เก็บไว้จนกว่าจะล้างหรือบันทึก':''};
let _ptxT;$('ptx').addEventListener('input',()=>{ptxCnt();clearTimeout(_ptxT);_ptxT=setTimeout(()=>{try{const v=$('ptx').value;v.trim()?localStorage.setItem('tm3_ptx',v):localStorage.removeItem('tm3_ptx')}catch(e){}},300)});
try{const v=localStorage.getItem('tm3_ptx');if(v&&!$('ptx').value){$('ptx').value=v;ptxCnt()}}catch(e){}
$('pcl').onclick=()=>{pmHide();$('ptx').value='';try{localStorage.removeItem('tm3_ptx')}catch(e){}$('pcnt').textContent='';$('pms').innerHTML='';$('ptx').focus()};
$('pgo').onclick=async()=>{const t=$('ptx').value.trim();if(t.length<8){$('pms').innerHTML='<div class="pm warn">⚠ กรุณาวางข้อความก่อน</div>';return}
 const b=$('pgo');b.disabled=true;const L=pxLocal(t);let recs=[L],how='อ่านด้วยระบบอัตโนมัติ';
 if($('pai').checked){b.textContent='⏳ AI กำลังวิเคราะห์...';$('pms').innerHTML='<div class="pm">🤖 กำลังวิเคราะห์ข้อความ...</div>';
  try{const sp=await claude.use('sample');if(sp){const a=await Promise.race([sp.json(PROMPT+t.slice(0,14000),{cache:false}),new Promise((_,j)=>setTimeout(()=>j(new Error('timeout')),90000))]);
   const A=(Array.isArray(a)?a:(a&&a.records)||[a]).filter(x=>x&&typeof x=='object').map(clean);
   if(A.length){const SH=['date','team','joint','place','intel','link'];A.forEach(x=>{F.forEach(k=>{if((!x[k]||(k=='sex'&&x[k]=='ไม่ระบุ'))&&L[k]&&(A.length==1||SH.includes(k)))x[k]=L[k]});if(x.sex=='ไม่ระบุ'){if(/^(MR\b|MR\.|นาย)/i.test(x.name))x.sex='ชาย';else if(/^(MRS|MS|MISS|นาง|น\.ส\.)/i.test(x.name))x.sex='หญิง'}});if(A.length==1&&!A[0].team&&L.team)A[0].team=L.team;recs=A;how='วิเคราะห์ด้วย AI + ระบบอัตโนมัติ'}}}
  catch(e){how='อ่านด้วยระบบอัตโนมัติ (AI ไม่พร้อมใช้งาน)'}}
 recs=recs.map(x=>Object.assign(normRec(x),{_typ:/ร่วม/.test(t)||x.type=='ร่วมจับ'}));
 if(recs.length>1){pmShow(recs,how);b.disabled=false;b.textContent='⚙️ ประมวลผลและกรอกฟอร์ม';return}
 pmHide();const res=pxFill(recs[0]);let extra='';
 if(recs.length>1){recs.slice(1).forEach((x,i)=>{delete x._typ;PN.push(Object.assign(x,{id:Date.now()+i+1,src:'ข้อความที่วาง'}))});pv();extra=`<div class="pm">👥 พบผู้ต้องหา ${recs.length} ราย — กรอกรายแรกในฟอร์มแล้ว อีก ${recs.length-1} รายอยู่ในรายการรอตรวจสอบ (กด "กรอกฟอร์ม" ทีละราย)</div>`}
 $('pms').innerHTML=`<div class="pm ok">✅ กรอกอัตโนมัติ ${res.n} ช่อง <small>· ${how}</small> — ตรวจสอบช่องที่ไฮไลต์สีเหลือง แล้วกด "บันทึกข้อมูล"</div>`+(res.miss.length?`<div class="pm warn">⚠ ยังไม่พบ: ${res.miss.join(', ')} — กรุณากรอกเพิ่ม</div>`:'')+extra;
 b.disabled=false;b.textContent='⚙️ ประมวลผลและกรอกฟอร์ม';const fc=$('ft').closest('.card');fc&&fc.scrollIntoView({behavior:'smooth',block:'start'})};
/* ===== หลายรายในข้อความเดียว: ตรวจทานในตารางเดียว แล้วบันทึกครั้งเดียว ===== */
let PM=[],PMS={},_pmSync=false;
/* ตารางหลายราย ↔ ช่องกรอก 1-2-3: ส่วนกลางตรงกันสองทาง · ช่องที่ว่างในตารางเติมจากฟอร์ม */
const PM_FB=['nat','charge','rel','fine','note'];
const pmFV=k=>{const el=$(k);if(!el)return'';let v=String(el.value||'');if(k==='note'&&_lastAuto)v=v.replace(_lastAuto,'');return v.trim()};
const pmV=(o,k)=>String(o[k]||'').trim()||(PM_FB.includes(k)?pmFV(k):'');
function pmToForm(){_pmSync=true;try{PM_SH.forEach(([k])=>{const el=$(k);if(!el)return;const v=PMS[k]||'';if(el.value!==v){el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}))}})}finally{_pmSync=false}}
['input','change'].forEach(ev=>document.addEventListener(ev,e=>{if(_pmSync||!PM.length)return;const t=e.target,P=$('pmulti');if(!t||!t.id||(P&&P.contains(t))||!t.closest||!t.closest('#f'))return;
 const sh=PM_SH.some(([k])=>k===t.id);if(!sh&&!PM_FB.includes(t.id))return;if(sh)PMS[t.id]=String(t.value||'').trim();clearTimeout(window._pmFT);window._pmFT=setTimeout(pmRender,250)},true));
const PM_SH=[['date','วันที่','date'],['team','ชป.','sel:ชป.1|ชป.2|ชป.3'],['type','การปฏิบัติ','sel:จับเอง|ร่วมจับ'],['place','จังหวัด','list:pl'],['joint','หน่วยร่วมจับ','text'],['intel','การข่าว','intel'],['link','ลิงก์ข่าว','text']];
const PM_RW=[['name','ชื่อผู้ต้องหา','text',150],['nat','สัญชาติ *','list:nl',96],['sex','เพศ','sel:ชาย|หญิง|ไม่ระบุ',74],['age','อายุ','num',52],['pp','พาสปอร์ต / เลขบัตร','text',120],['charge','คดี *','list:cl',120],['rel','คดีที่เกี่ยวข้อง','list:rl',120],['num','ราย','num',48],['cases','จำนวนคดี','num',62],['fine','ค่าปรับ','num',72],['note','หมายเหตุ','text',150]];
function pmCtl(k,t,v,w){v=v==null?'':String(v);const a=`data-k="${k}"`+(w?` style="width:${w}px"`:'');
 if(t==='date')return`<input type="date" ${a} value="${esc(v)}">`;if(t==='num')return`<input type="number" min="0" ${a} value="${esc(v)}">`;
 if(t==='intel'||t.startsWith('sel:')){const o=t==='intel'?IO:t.slice(4).split('|');return`<select ${a}>${o.map(x=>`<option${x===v?' selected':''}>${esc(x)}</option>`).join('')}</select>`}
 if(t.startsWith('list:'))return`<input ${a} list="${t.slice(5)}" value="${esc(v)}">`;return`<input ${a} value="${esc(v)}">`}
function pmHide(){PM=[];const p=$('pmulti');if(p)p.remove()}
function pmShow(recs,how){const r0=recs[0]||{};PMS={};PM_SH.forEach(([k])=>{PMS[k]=k==='type'?(recs.some(x=>x._typ)?'ร่วมจับ':'จับเอง'):(recs.map(x=>x[k]).find(Boolean)||'')});
 if(!PMS.intel)PMS.intel=IO[0];if(!PMS.date)PMS.date=$('date').value;if(!PMS.team)PMS.team=$('team').value;
 PM=recs.map((x,i)=>{const o={_on:true};PM_RW.forEach(([k])=>o[k]=x[k]==null?'':String(x[k]));if(!o.num||!+o.num)o.num='1';if(!o.sex)o.sex='ไม่ระบุ';return o});
 fClear(true);pmToForm();let P=$('pmulti');if(!P){P=document.createElement('div');P.id='pmulti';P.className='pmulti';$('pms').after(P)}P._how=how;pmRender();$('pms').innerHTML='';P.scrollIntoView({behavior:'smooth',block:'start'})}
const pmOk=o=>!!(pmV(o,'nat')&&pmV(o,'charge')&&PMS.date&&PMS.team);
function pmRender(){const P=$('pmulti');if(!P)return;const n=PM.filter(o=>o._on).length,bad=PM.filter(o=>o._on&&!pmOk(o)).length;
 P.innerHTML=`<div class="pmh"><b>👥 พบผู้ต้องหา ${PM.length} ราย</b><small>${esc(P._how||'')} — ตรวจทานแล้วกดบันทึกครั้งเดียว</small><small class="pmlink">🔗 เชื่อมกับช่องกรอก ① ② ③ ด้านล่าง: ข้อมูลส่วนกลางตรงกับฟอร์มเสมอ (แก้ที่ไหนก็ได้) · ช่องที่ว่างในตาราง (สัญชาติ คดี คดีที่เกี่ยวข้อง ค่าปรับ หมายเหตุ) จะเติมจากฟอร์มให้อัตโนมัติ</small></div>
 <div class="pmsh">${PM_SH.map(([k,l,t])=>`<label><span>${l}</span>${pmCtl(k,t,PMS[k])}</label>`).join('')}</div>
 <div class="pmw"><table class="pmt"><thead><tr><th><input type="checkbox" class="pmall" ${n===PM.length?'checked':''} aria-label="เลือกทั้งหมด"></th><th>#</th>${PM_RW.map(([,l])=>`<th>${l}</th>`).join('')}<th></th></tr></thead><tbody>
 ${PM.map((o,i)=>`<tr data-i="${i}" class="${o._on?'':'off'} ${o._on&&!pmOk(o)?'bad':''}"><td><input type="checkbox" class="pmon" ${o._on?'checked':''} aria-label="เลือกรายที่ ${i+1}"></td><td class="mu">${i+1}</td>${PM_RW.map(([k,,t,w])=>`<td>${pmCtl(k,t,o[k],w)}</td>`).join('')}<td class="pma"><button type="button" class="btn sm" data-a="form" title="ย้ายรายนี้ไปกรอกในฟอร์มด้านล่าง">✏️</button><button type="button" class="btn sm" data-a="del" title="ลบรายนี้ออกจากรายการ">🗑</button></td></tr>`).join('')}
 </tbody></table></div>
 <div class="pmf"><button type="button" class="btn ok" id="pmsave" ${!n||bad?'disabled':''}>💾 บันทึกทั้งหมด ${n} ราย</button><button type="button" class="btn sm" id="pmadd">＋ เพิ่มแถว</button><button type="button" class="btn sm" id="pmcan">✕ ยกเลิกรายการ</button><span class="pmst">${bad?`⚠ มี ${bad} รายข้อมูลไม่ครบ (สัญชาติ / คดี) — เติมในช่องสีแดง หรือเอาเครื่องหมายถูกออก`:(n?'จำนวนคดีที่ว่างจะใช้ตามจำนวนราย':'')}</span></div>`;P.querySelectorAll('.pmsh input[type=date]').forEach(inp=>{const n=YS.length;thDate(inp);YS.length=n});P.querySelectorAll('tr[data-i] [data-k=cases]').forEach(el=>{const o=PM[+el.closest('tr').dataset.i];el.placeholder=o.num||'1';el.title='ว่าง = ใช้ตามจำนวนราย'});P.querySelectorAll('tr[data-i] [data-k]').forEach(el=>{const k=el.dataset.k;if(!PM_FB.includes(k)||el.value)return;const v=pmFV(k);if(v){el.placeholder=v;el.classList.add('pfb');el.title='ว่าง = ใช้ค่าจากฟอร์มด้านล่าง: '+v}})}
document.addEventListener('input',e=>{const P=$('pmulti');if(!P||!P.contains(e.target)||!e.target.dataset.k)return;const k=e.target.dataset.k,v=e.target.value.trim(),tr=e.target.closest('tr[data-i]');
 if(tr)PM[+tr.dataset.i][k]=v;else{PMS[k]=v;pmToForm()}clearTimeout(P._t);P._t=setTimeout(()=>{const f=document.activeElement,fk=f&&f.dataset&&f.dataset.k,fi=f&&f.closest&&f.closest('tr[data-i]'),ss=f&&f.selectionStart;pmRender();if(fk){const q=fi?P.querySelector(`tr[data-i="${fi.dataset.i}"] [data-k="${fk}"]`):P.querySelector(`.pmsh [data-k="${fk}"]`);if(q){q.focus();try{if(ss!=null)q.setSelectionRange(ss,ss)}catch(x){}}}},450)},true);
document.addEventListener('change',e=>{const P=$('pmulti');if(!P||!P.contains(e.target))return;const t=e.target;
 if(t.classList.contains('pmall')){PM.forEach(o=>o._on=t.checked);pmRender();return}
 if(t.classList.contains('pmon')){PM[+t.closest('tr').dataset.i]._on=t.checked;pmRender();return}
 if(t.dataset.k){const tr=t.closest('tr[data-i]');if(tr)PM[+tr.dataset.i][t.dataset.k]=t.value.trim();else{PMS[t.dataset.k]=t.value.trim();pmToForm()}pmRender()}});
document.addEventListener('click',e=>{const P=$('pmulti');if(!P||!P.contains(e.target))return;const b=e.target.closest('button');if(!b)return;
 if(b.id==='pmcan'){pmHide();return}
 if(b.id==='pmadd'){PM.push({_on:true,name:'',nat:'',sex:'ไม่ระบุ',age:'',pp:'',charge:PM[0]?PM[0].charge:'',rel:'',num:'1',cases:'',fine:''});pmRender();return}
 const tr=b.closest('tr[data-i]');if(tr){const i=+tr.dataset.i;
  if(b.dataset.a==='del'){PM.splice(i,1);PM.length?pmRender():pmHide();return}
  if(b.dataset.a==='form'){const o=PM.splice(i,1)[0],fb={};PM_FB.forEach(k=>{fb[k]=pmV(o,k)});_pmSync=true;try{pxFill(Object.assign({},PMS,o,fb,{_typ:PMS.type==='ร่วมจับ'}))}finally{_pmSync=false}PM.length?pmRender():pmHide();const fc=$('ft').closest('.card');fc&&fc.scrollIntoView({behavior:'smooth',block:'start'});return}}
 if(b.id==='pmsave'){const G=PM.filter(o=>o._on&&pmOk(o));if(!G.length)return;const t0=Date.now(),out=[];
  G.forEach((o,i)=>{const r={id:t0+i};F.forEach(k=>r[k]=(k in o?pmV(o,k):String(PMS[k]||'').trim())||(k in PMS?'':pmFV(k)));if(!r.intel)r.intel=IO[0];if(!(+r.num))r.num='1';if(!(+r.cases))r.cases=String(+r.num);normRec(r);if(NOGS())r.pend=1;out.push(r)});
  vSnap('อัตโนมัติ — ก่อนบันทึกหลายรายจากข้อความ');D=D.concat(out);persist();out.forEach(r=>gsPush(r,null));
  PM=PM.filter(o=>!(o._on&&pmOk(o)));if(PM.length)pmRender();else{pmHide();fClear()}
  renderTodayLog();render();impShow(true,'บันทึกแล้ว '+out.length+' ราย',PM.length?'ยังเหลือในรายการ '+PM.length+' ราย':'')}});
const YS=[];
function thDate(inp){const isB=inp.id=='dob',Y=new Date().getFullYear(),init=inp.value,CM=inp.dataset.k=='a'||inp.dataset.k=='b'||inp.id=='cmpa'||inp.id=='cmpb',LIM=CM||inp.id=='date';let v='',auto='';const END=inp.dataset.k=='b'||inp.id=='cmpb',AT=inp.dataset.rk?'rk':inp.dataset.ik?'ik':inp.id?'id':'k';
 const w=document.createElement('span');w.className='dsel';
 const mk=(c,ph,o)=>{const e=document.createElement('select');e.className=c;e.innerHTML='<option value="">'+ph+'</option>'+o;return e};
 const d=mk('d',CM?'ทั้งเดือน':'วัน',Array.from({length:31},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('')),m=mk('m','เดือน',MON.map((x,i)=>`<option value="${i+1}">${x}</option>`).join('')),
  y1=LIM?2030:isB?Y:Y+1,y0=LIM?2025:isB?Y-100:Y-10,y=mk('y','ปี',Array.from({length:y1-y0+1},(_,i)=>`<option value="${y1-i}">${y1-i}</option>`).join(''));
 const ym=mk('ym','เดือน ปี',Array.from({length:60},(_,i)=>{const t=9+i,yy=2025+Math.floor(t/12),mm=t%12+1;return`<option value="${yy}-${String(mm).padStart(2,'0')}">${MON[mm-1]} ${yy}</option>`}).join(''));
 const mAll=m.innerHTML,fixM=()=>{if(!LIM||CM)return;const yy=+y.value,cur=m.value;let lo=1,hi=12;if(yy==2025)lo=10;if(yy==2030)hi=9;m.innerHTML='<option value="">เดือน</option>'+MON.map((x,i)=>i+1>=lo&&i+1<=hi?`<option value="${i+1}">${x}</option>`:'').join('');m.value=(cur&&+cur>=lo&&+cur<=hi)?cur:''};fixM();
 if(CM)w.append(d,ym);else{YS.push(y);eraSel(y);w.append(d,m,y)}inp.type='hidden';inp.after(w);
 let busy=false;Object.defineProperty(inp,'value',{get:()=>v,set:x=>{if(busy&&!x){v='';return}v=x||'';const t=v.match(/^(\d{4})-(\d\d)-(\d\d)$/);if(CM){if(t&&v===auto){ym.value=t[1]+'-'+t[2];if(!ym.value){ym.add(new Option(MON[+t[2]-1]+' '+t[1],t[1]+'-'+t[2]));ym.value=t[1]+'-'+t[2]}d.value='';return}auto='';if(t){const k=t[1]+'-'+t[2];if(![...ym.options].some(o=>o.value==k)){ym.add(new Option(MON[+t[2]-1]+' '+t[1],k));[...ym.options].slice(1).sort((a,b)=>a.value<b.value?-1:1).forEach(o=>ym.add(o))}ym.value=k;d.value=+t[3]}else{d.value=ym.value=''}return}if(t){const yy=+t[1];if(![...y.options].some(o=>+o.value==yy)){y.add(new Option(yy,yy));eraSel(y)}y.value=yy;fixM();m.value=+t[2];d.value=+t[3]}else{d.value=m.value=y.value='';fixM()}}});
 const mo1=k=>{const yy=+k.slice(0,4),mo=+k.slice(5,7);return END?k+'-'+String(new Date(yy,mo,0).getDate()).padStart(2,'0'):k+'-01'};
 inp._mOnly=(k,end)=>{const yy=+k.slice(0,4),mo=+k.slice(5,7);v=end?k+'-'+String(new Date(yy,mo,0).getDate()).padStart(2,'0'):k+'-01';auto=v;ym.value=k;d.value=''};
 const partner=()=>{const pk=AT==='id'?(inp.id=='cmpa'?'cmpb':'cmpa'):null;if(pk)return document.getElementById(pk);const want=END?'a':'b';let n=w.parentNode;for(let i=0;i<6&&n;i++,n=n.parentNode){const q=n.querySelector&&n.querySelector('input[data-'+AT+'="'+want+'"]');if(q)return q}return null};
 const upd=()=>{const was=v;let PP=null;fixM2();if(CM&&!d.value&&ym.value){v=mo1(ym.value);auto=v;const P=partner();if(P&&!P.value&&P._mOnly)PP=P}
 else if(d.value&&(CM?ym.value:(m.value&&y.value))){auto='';const yy=CM?+ym.value.slice(0,4):+y.value,mo=CM?+ym.value.slice(5):+m.value,mx=new Date(yy,mo,0).getDate();let dd=+d.value;if(dd>mx){dd=mx;d.value=dd}v=yy+'-'+String(mo).padStart(2,'0')+'-'+String(dd).padStart(2,'0')}else{v='';if(!was)return}
  busy=true;try{inp.dispatchEvent(new Event('input',{bubbles:true}));inp.dispatchEvent(new Event('change',{bubbles:true}))}finally{busy=false}
  if(PP){const k=ym.value;PP._mOnly(k,!END);PP.dispatchEvent(new Event('input',{bubbles:true}));PP.dispatchEvent(new Event('change',{bubbles:true}))}};
 const fixM2=()=>{if(LIM){fixM()}};y.addEventListener('change',()=>fixM(),true);(CM?[d,ym]:[d,m,y]).forEach(e=>e.onchange=upd);inp.value=init}
function eraSel(y){[...y.options].forEach(o=>o.textContent=o.value?yrIn(o.value):'ปี '+ERL())}
function setEra(e){ERA=e;try{localStorage.setItem('tm3_era',e)}catch(x){}PL=mkPL(yr);document.querySelectorAll('[data-era]').forEach(b=>b.classList.toggle('on',b.dataset.era==ERA));
 YS.forEach(eraSel);fl('flt1');fl('flt2');document.querySelectorAll('#flt1 input[type=date],#flt2 input[type=date]').forEach(thDate);render()}
document.querySelectorAll('[data-era]').forEach(b=>b.onclick=()=>setEra(b.dataset.era));
document.querySelectorAll('input[type=date]').forEach(thDate);
function seg(sel){const w=document.createElement('div');w.className='seg';const os=[...sel.options].map(o=>o.value),pd=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value');
 const sync=()=>{bs.forEach((b,i)=>b.classList.toggle('on',os[i]==pd.get.call(sel)));if(sel.id=='type')$('jw').classList.toggle('hide',pd.get.call(sel)!='ร่วมจับ')};
 const bs=os.map(v=>{const b=document.createElement('button');b.type='button';b.textContent=v;b.onclick=()=>{pd.set.call(sel,v);sync();sel.dispatchEvent(new Event('change',{bubbles:true}))};w.append(b);return b});
 Object.defineProperty(sel,'value',{get:()=>pd.get.call(sel),set:v=>{pd.set.call(sel,v);sync()}});sel.classList.add('hide');sel.after(w);sync()}
['team','type','sex'].forEach(i=>seg($(i)));
if(window.Chart&&Chart.defaults&&Chart.defaults.font){Chart.defaults.font.family='Prompt, Sarabun, Tahoma, sans-serif';Chart.defaults.font.size=11.5;Chart.defaults.font.weight='500';Chart.defaults.devicePixelRatio=3;Chart.defaults.color='#eef5ff';Chart.defaults.borderColor='rgba(120,180,255,.13)';if(Chart.defaults.elements&&Chart.defaults.elements.bar)Chart.defaults.elements.bar.borderRadius=4}
const SI=['ไม่มีข่าว','ส่งข่าว','ข่าวซ้ำ','แถลงข่าว'];let IO=SI.slice();
function fillIntel(){const el=$('intel');if(!el)return;let ex=[];try{ex=[...new Set(D.map(r=>String(r.intel||'').trim()).filter(Boolean))].filter(x=>!SI.some(y=>ck(y)==ck(x)))}catch(e){}const L=SI.concat(ex),sig=L.join('|');if(el.dataset.sig===sig)return;el.dataset.sig=sig;IO=L;const v=el.value;el.innerHTML=IO.map(o=>'<option>'+esc(o)+'</option>').join('');el.value=IO.includes(v)?v:IO[0]}
fillIntel();
/* presentation mode */
const PG=['f','d','s'],PGN={f:'บันทึกข้อมูล',d:'ตารางข้อมูล',s:'แดชบอร์ด'};let PRES=false,pHide;
const curPg=()=>PG.find(i=>!$(i).classList.contains('hide'))||'s';
const chRes=()=>Object.values(CH).forEach(c=>{const p=c.canvas.parentElement;c.resize(p.clientWidth,p.clientHeight)});
function pFit(){const sh=$('sheet');if(typeof SP2!=='undefined'&&SP2&&window.sp2Fit){window.sp2Fit();return}if(!PRES||curPg()!='s'){sh.style.transform='';return}const k=Math.min(innerWidth/1123,innerHeight/794)*.98;sh.style.transform=`scale(${k})`}
function pTitle(){$('ptl').textContent=PGN[curPg()]}
function pbSync(){const b=$('pbtn');if(!b)return;const on=!!(PRES||document.fullscreenElement);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')}document.addEventListener('fullscreenchange',()=>setTimeout(pbSync,0));
function presOn(){PRES=true;setTimeout(pbSync,0);document.body.classList.add('present');const de=document.documentElement;try{(de.requestFullscreen||de.webkitRequestFullscreen||(()=>{})).call(de)?.catch?.(()=>{})}catch(e){}pTitle();setTimeout(()=>{chRes();pFit()},120);pShow()}
function presOff(){if(SCR)return;PRES=false;setTimeout(pbSync,0);document.body.classList.remove('present');$('sheet').style.transform='';try{if(document.fullscreenElement)document.exitFullscreen()}catch(e){}setTimeout(chRes,120)}
const presT=()=>PRES?presOff():presOn();
function pGo(d){const i=(PG.indexOf(curPg())+d+PG.length)%PG.length;document.querySelector(`[data-t=${PG[i]}]`).click();pTitle();setTimeout(pFit,60)}
function pShow(){/* v176: แถบอยู่มุมล่างขวา แสดงเฉพาะตอนเมาส์ชี้ (CSS :hover) */}
$('pbtn').onclick=presT;$('pexit').onclick=presOff;$('pbar').addEventListener('click',e=>{const b=e.target.closest('[data-pn]');if(b)pGo(+b.dataset.pn)});
document.addEventListener('keydown',e=>{if(e.key=='F12'){e.preventDefault();presT();return}if(!PRES)return;if(e.key=='Escape'&&!$('dw').classList.contains('on')&&$('xm').classList.contains('hide')){presOff()}
 const tg=e.target.tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tg))return;if(e.key=='ArrowRight'||e.key=='PageDown')pGo(1);if(e.key=='ArrowLeft'||e.key=='PageUp')pGo(-1)},true);
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&PRES)presOff()});
addEventListener('resize',()=>{if(PRES)pFit()});document.addEventListener('mousemove',()=>{if(PRES)pShow()});
document.querySelectorAll('nav [data-t]').forEach(b=>b.addEventListener('click',()=>{if(PRES){pTitle();setTimeout(pFit,60)}}));
fillDL();{const sel=$('cmps'),ca=$('cmpa'),cb=$('cmpb'),cc=$('cmpc');sel.value=CMP;ca.value=CMA;cb.value=CMB;const vis=()=>cc.classList.toggle('on',CMP=='custom'),sv=()=>{try{localStorage.setItem('tm3_cmp',CMP);localStorage.setItem('tm3_cmpa',CMA);localStorage.setItem('tm3_cmpb',CMB)}catch(e){}};vis();
 const ob=$('cmpoff'),ov=()=>{ob.className='btn sm '+(CMP=='off'?'grn':'red');ob.textContent=CMP=='off'?'✔ เปิดการเปรียบเทียบ':'✖ ปิดการเปรียบเทียบ'};ov();let last=CMP=='off'?'prev':CMP;
 sel.onchange=()=>{CMP=sel.value;if(CMP!='off')last=CMP;ov();if(CMP=='custom'&&!(CMA&&CMB)){const per=periodOf();if(per){const q=(()=>{const c=CMP;CMP='prev';const r=prevOf(per);CMP=c;return r})();if(q){CMA=q.A;CMB=q.B;ca.value=CMA;cb.value=CMB}}}vis();sv();render()};
 ob.onclick=()=>{if(CMP=='off'){CMP=last}else{last=CMP;CMP='off'}sel.value=CMP;vis();ov();sv();render()};
 ca.onchange=cb.onchange=()=>{CMA=ca.value;CMB=cb.value;sv();render()}}$('aib').onclick=aiRun;render();


// ---- Google Sheet sync ----
const GS_DEF='https://docs.google.com/spreadsheets/d/1uNMFDM0d30oymZbRYt1LSxRaVDG2Go7xntsO8eHuT1Q/edit?gid=708164096';
const GS_KEY='tm3_gssrc';
function gsSrcs(){let a=null;try{a=JSON.parse(localStorage.getItem(GS_KEY)||'null')}catch(e){}
 if(!Array.isArray(a)||!a.length){let u=GS_DEF;try{u=localStorage.getItem('tm3_gsurl')||GS_DEF}catch(e){}a=[{id:'s0',name:'ชีตหลัก',url:u,on:true}]}a.forEach(x=>{if(x.mode!=='rv'&&(/เพิกถอน|ใบแดง/.test(x.name||'')||/1xC8TSRiJyO68OSD1169XGD/.test(x.url||'')))x.mode='rv';else if(x.mode!=='io'&&/1AbAY7pccvY1HeW6huvTjEsG1qmvnH8/.test(x.url||''))x.mode='io'});return a}
function gsSrcSave(a){try{localStorage.setItem(GS_KEY,JSON.stringify(a));if(a[0])localStorage.setItem('tm3_gsurl',a[0].url)}catch(e){}}
const gsLink=()=>(gsSrcs()[0]||{}).url||GS_DEF;
function gsParseLink(u){const m=String(u).match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]{20,})/);if(!m)return null;const g=String(u).match(/[#?&]gid=(\d+)/);return{id:m[1],gid:g?g[1]:'0'}}
const gsUrl=u=>{const p=gsParseLink(u||gsLink())||gsParseLink(GS_DEF);return`https://docs.google.com/spreadsheets/d/${p.id}/gviz/tq?tqx=out:csv&gid=${p.gid}`};
function csvRows(t){const R=[];let r=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}else if(c=='"')q=true;else if(c==','){r.push(f);f=''}else if(c=='\n'||c=='\r'){if(c=='\r'&&t[i+1]=='\n')i++;r.push(f);R.push(r);r=[];f=''}else f+=c}if(f!==''||r.length){r.push(f);R.push(r)}return R}
const GSH={'วันที่':'date','ชป.':'team','การปฏิบัติ':'type','ชื่อผู้ต้องหา':'name','อายุ':'age','สัญชาติ':'nat','เพศ':'sex','พาสปอร์ต':'pp','พื้นที่จังหวัด':'place','จังหวัด':'place','คดี':'charge','คดีที่เกี่ยวข้อง':'rel','จำนวนราย':'num','จำนวนคดี':'cases','ยอดค่าปรับ':'fine','ค่าปรับ':'fine','การข่าว':'intel','ลิงก์ข่าว':'link','หมายเหตุ':'note','หน่วยที่ร่วมจับ':'joint'};
const gsKey=r=>[r.date,r.team,r.type,ck(r.name),ck(r.nat),ck(r.pp),ck(r.place),ck(r.charge),ck(r.rel),r.num,r.fine||'',r.intel||''].join('|');
function gsRowRec(H,r){const o={};H.forEach((k,i)=>{if(k)o[k]=String(r[i]==null?'':r[i]).trim()});const m=(o.date||'').match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);if(!m)return null;let y=+m[3];if(y<100)y+=y>=40?2500:2000;if(y>2400)y-=543;o.date=y+'-'+String(m[2]).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0');return clean(o)}
function gsParse(t){const arr=Array.isArray(t),R=arr?t.map(r=>(r||[]).map(x=>x==null?'':String(x))):csvRows(t.replace(/^﻿/,''));const hi=R.findIndex(r=>r.some(x=>String(x).trim()));if(hi<0||R.length<hi+2)throw new Error('ไม่พบข้อมูลในชีต');
 const H=R[hi].map(h=>GSH[String(h).trim()]||null);if(!H.includes('date'))throw new Error('ไม่พบคอลัมน์ "วันที่" — รูปแบบชีตไม่ตรง');
 return R.slice(hi+1).map((r,j)=>{if(!r.some(x=>String(x).trim()))return null;const o=gsRowRec(H,r);if(o&&arr)o.gsRow=hi+2+j;return o}).filter(Boolean)}
/* Google Sheets = ต้นฉบับ: ทำให้ข้อมูลในแอปตรงกับชีตทุกแถว (เพิ่ม/แก้/ลบ) โดยคง id เดิมของแถวที่จับคู่ได้ */
function gsMirror(t,src,quiet,X){const L=gsParse(t);const SR0=gsSrcs()[0],prim=!X||X.id===SR0.id,xid=prim?null:X.id,mine=r=>prim?!r.gsSrc:r.gsSrc===xid,C=D.filter(mine),O=D.filter(r=>!mine(r)),nm=prim?'':' “'+X.name+'”';
 const lk=r=>[r.date,r.team,ck(r.name),ck(r.nat),ck(r.charge)].join('|'),sj=o=>JSON.stringify(Object.keys(o).filter(k=>k!=='id'&&k!=='pend').sort().map(k=>[k,o[k]==null?'':String(o[k])]));
 const byRow=new Map(),byLk=new Map();C.forEach(x=>{if(x.gsRow&&!byRow.has(+x.gsRow))byRow.set(+x.gsRow,x);const k=lk(x);if(!byLk.has(k))byLk.set(k,[]);byLk.get(k).push(x)});
 const used=new Set(),t0=Date.now();let add=0,upd=0;const push=[];
 const out=L.map((r,i)=>{let m=byRow.get(+r.gsRow);if(m&&(used.has(m)||lk(m)!==lk(r)))m=null;if(!m){const a=byLk.get(lk(r))||[];m=a.find(x=>!used.has(x)&&x.pend)||a.find(x=>!used.has(x)&&(!x.gsRow||+x.gsRow===+r.gsRow))||a.find(x=>!used.has(x))||null}
  if(m)used.add(m);
  if(m&&m.pend&&!NOGS()){push.push([m,Object.assign({},r)]);return Object.assign({},m,{gsRow:r.gsRow})}
  const o=Object.assign({},r,{id:m?m.id:t0+i+Math.floor(Math.random()*1e5)});if(xid)o.gsSrc=xid;if(m){['joint','dob'].forEach(k=>{if(!o[k]&&m[k])o[k]=m[k]});if(sj(o)!==sj(m))upd++}else add++;return o});
 const keep=C.filter(x=>!used.has(x)&&x.pend);const del=C.filter(x=>!used.has(x)&&!x.pend).length;
 const next=prim?out.concat(keep,O):O.concat(out,keep);
 try{localStorage.setItem('tm3_gsync',new Date().toISOString())}catch(e){}
 if(add||upd||del||keep.length){if(del||upd)vSnap('อัตโนมัติ — ก่อนซิงค์ให้ตรงกับ Google Sheets'+nm);D=next;persist();render()}
 if(!NOGS()&&gsWriteOn()){keep.forEach(r=>gsPush(r,null));push.forEach(([m,old])=>gsPush(m,old))}
 gsTitle();gsStat();gsBar();if(prim)try{dsSheet(L)}catch(e){}
 const msg=`✅ ข้อมูลตรงกับ Google Sheets${nm} แล้ว — ${L.length.toLocaleString()} แถว`+((add||upd||del)?` (เพิ่ม <b>${add}</b> · แก้ไข <b>${upd}</b> · ลบที่ไม่มีในชีต/ซ้ำ <b>${del}</b>)`:'')+(keep.length?` · รอส่งขึ้นชีต ${keep.length}`:'');
 if(quiet){if(add||upd||del)gsToast(msg,true);return add}gsToast(msg,true);try{impDone(add,L.length-add,src)}catch(e){}return add}
function gsApply(t,src,quiet){if(Array.isArray(t))return gsMirror(t,src,quiet);const L=gsParse(t),have=new Set(D.map(gsKey)),byK={};D.forEach(x=>{byK[gsKey(x)]=x});let add=0,dup=0,mapd=false;const nw=L.filter(r=>!have.has(gsKey(r))).length;if(nw)vSnap('อัตโนมัติ — ก่อนอัปเดตจาก Google Sheets');L.forEach((r,i)=>{const k=gsKey(r);if(have.has(k)){dup++;const x=byK[k];if(x&&r.gsRow&&x.gsRow!==r.gsRow){x.gsRow=r.gsRow;mapd=true}if(x&&r.cases&&x.cases!==r.cases){x.cases=r.cases;mapd=true}return}have.add(k);D.push(Object.assign(r,{id:Date.now()+i}));add++});
 if(add){persist();render()}else if(mapd){persist();render()};try{localStorage.setItem('tm3_gsync',new Date().toISOString())}catch(e){}gsTitle();gsStat();gsBar();
 if(quiet){if(add)gsToast(`✅ อัปเดตอัตโนมัติ — เพิ่มใหม่ <b>${add}</b> รายการ`,true);gsStat();return add}impDone(add,dup,src);return add}
function gsAddOnly(t,x,quiet){const L=gsParse(t),have=new Set(D.map(gsKey));let add=0;const nw=L.filter(r=>!have.has(gsKey(r))).length;if(nw)vSnap('อัตโนมัติ — ก่อนเพิ่มข้อมูลจากลิงก์ “'+x.name+'”');
 L.forEach((r,i)=>{const k=gsKey(r);if(have.has(k))return;have.add(k);delete r.gsRow;D.push(Object.assign(r,{id:Date.now()+i+Math.floor(Math.random()*1e6),gsSrc:x.id}));add++});
 if(add){persist();render()}try{localStorage.setItem('tm3_gsync',new Date().toISOString())}catch(e){}gsStat();gsBar();
 if(quiet){if(add)gsToast(`✅ ลิงก์ “${esc(x.name)}” — เพิ่มใหม่ <b>${add}</b> รายการ`,true);return add}
 gsToast(`✅ ลิงก์ “${esc(x.name)}” — อ่าน ${L.length.toLocaleString()} แถว · เพิ่มใหม่ <b>${add}</b>`,true);return add}
function gsTitle(){const b=$('gsync');if(!b)return;let t='';try{t=localStorage.getItem('tm3_gsync')||''}catch(e){}b.title='ดึงข้อมูลล่าสุดจาก Google Sheets ต้นฉบับ'+(t?'\nอัปเดตล่าสุด: '+new Date(t).toLocaleString('th-TH'):'')}
function gsToast(h,ok){document.querySelectorAll('.gstoast').forEach(e=>e.remove());const t=document.createElement('div');t.className='gstoast'+(ok?'':' err');t.innerHTML=h+'<button type="button">✕</button>';t.querySelector('button').onclick=()=>t.remove();document.body.appendChild(t);setTimeout(()=>t.remove(),ok?6000:15000)}
const GSC='Google Sheets',GSTT={};
const GSE={needs_reauth:'การเชื่อมต่อ Google Sheets หมดอายุ — กรุณาเชื่อมต่อใหม่ที่ claude.ai → Settings → Connectors',server_not_connected:'ยังไม่ได้เชื่อม Google Sheets connector ในบัญชีที่เปิดแอปนี้ — เพิ่มที่ claude.ai → Settings → Connectors',selection_required:'มี Google Sheets connector มากกว่า 1 ตัว — กรุณาเลือกตัวที่จะใช้ในหน้าต่างที่ claude.ai แสดง',not_in_manifest:'ยังไม่ได้อนุญาตให้แอปนี้ใช้ Google Sheets — กดอนุญาตเมื่อมีหน้าต่างขอสิทธิ์ หรือเปิดสิทธิ์ในเมนู Permissions ของหน้านี้',blocked_by_policy:'องค์กรไม่อนุญาตให้ใช้ Google Sheets connector ในแอปนี้',approval_required:'องค์กรกำหนดให้ต้องอนุมัติก่อนใช้ Google Sheets connector',server_unavailable:'Google Sheets ไม่ตอบสนองชั่วคราว — ลองใหม่อีกครั้งในไม่กี่วินาที',tool_error:'Google Sheets แจ้งข้อผิดพลาด (บัญชีที่เชื่อมอาจไม่มีสิทธิ์เปิดชีตนี้)'};
async function gsViaConnector(link){const mcp=await claude.use('mcp').catch(()=>null);if(!mcp)return null;
 const p=gsParseLink(link||gsLink())||gsParseLink(GS_DEF),key=p.id+':'+p.gid;let title=GSTT[key];
 if(!title){const m=(await mcp.callTool(GSC,'get_spreadsheet',{spreadsheetId:p.id,fields:['sheets.properties.sheetId','sheets.properties.title']},{cache:false})).payload||{};const sh=(m.sheets||[]).find(x=>x.properties&&String(x.properties.sheetId)===String(p.gid))||(m.sheets||[])[0];if(!sh)throw{code:'tool_error',message:'ไม่พบแท็บชีต'};title=GSTT[key]=sh.properties.title}
 const v=(await mcp.callTool(GSC,'get_values',{spreadsheetId:p.id,range:"'"+title.replace(/'/g,"''")+"'!A1:Z"},{cache:false})).payload||{};if(!Array.isArray(v.values))throw{code:'tool_error',message:'ไม่มีข้อมูลในชีต'};return v.values}
async function gsSync(quiet){if(SCR||NOGS())return;const b=$('gsync');if(b.classList.contains('busy'))return;b.classList.remove('done','fail');b.classList.add('busy');b.querySelector('.ut').textContent='กำลังอัปเดต...';const t0=Date.now();let ok=false,ce=null;
 const pause=ms=>new Promise(z=>setTimeout(z,Math.max(0,ms-(Date.now()-t0))));
 try{const fetchOne=async link=>{let data=null,src=' Google Sheets',ce=null;
  try{data=await gsViaConnector(link);if(data)src=' Google Sheets (connector)'}catch(e){ce=e;if(e&&e.code==='server_unavailable'&&e.retryable&&!quiet){await new Promise(z=>setTimeout(z,(e.retryAfterMs||1500)+Math.random()*800));try{data=await gsViaConnector(link);ce=null}catch(e2){ce=e2}}}
  if(!data){if(ce&&!['not_granted','capability_disabled','capability_removed'].includes(ce.code))throw ce;
   const c=new AbortController(),to=setTimeout(()=>c.abort(),20000);const r=await fetch(gsUrl(link)+'&t='+Date.now(),{cache:'no-store',signal:c.signal});clearTimeout(to);if(!r.ok)throw new Error('HTTP '+r.status);data=await r.text();if(/<html/i.test(data.slice(0,200)))throw new Error('ชีตไม่ได้เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูได้')}
  return{data,src}};
  const SR=gsSrcs(),act=SR.filter(x=>x.on!==false&&x.mode!=='rv'&&x.mode!=='io');if(!act.length)throw new Error('ไม่มีลิงก์ที่เชื่อมต่ออยู่ — เปิดการเชื่อมต่ออย่างน้อย 1 ลิงก์ที่ไอคอน ⚙️');
  let fe=null,okn=0;const bad=[];
  for(const x of act){try{const {data,src}=await fetchOne(x.url);if(x===SR[0])gsApply(data,src,quiet);else if(x.mode!=='add'&&Array.isArray(data))gsMirror(data,src,quiet,x);else gsAddOnly(data,x,quiet);okn++}catch(e){if(!fe)fe=e;bad.push(x.name)}}
  if(!okn)throw fe;if(bad.length&&!quiet)gsToast('⚠️ ดึงไม่สำเร็จบางลิงก์: '+bad.map(esc).join(', '),false);
  await pause(900);ok=true;GSF=0}
 catch(e){await pause(700);if(quiet&&++GSF<3&&!(e&&['needs_reauth','server_not_connected','not_in_manifest','blocked_by_policy'].includes(e.code))){b.classList.remove('busy');b.querySelector('.ut').textContent='อัปเดตข้อมูล';return}if(quiet){gsAuto(0);$('gsauto')&&($('gsauto').value='0')}
  const msg=e&&e.code&&GSE[e.code]?GSE[e.code]+(e.code==='tool_error'&&e.message?' — '+esc(e.message).slice(0,160):''):(e&&e.code?'('+esc(e.code)+') '+esc(e.message||''):esc(e&&e.name=='AbortError'?'หมดเวลาเชื่อมต่อ':(e&&e.message)||e));
  gsToast('❌ ดึงข้อมูลจาก Google Sheets ไม่สำเร็จ<br><small>'+msg+'</small><br><small>ทางสำรอง: คัดลอกทั้งชีตแล้ววางที่ “นำเข้าจาก Google Sheets” หรือดาวน์โหลด CSV แล้วเลือกไฟล์</small> <button type="button" class="btn sm ok" onclick="$(\'gscsv\').click()">📂 เลือกไฟล์ CSV เพื่ออัปเดต</button>',false)}
 b.classList.remove('busy');b.classList.add(ok?'done':'fail');b.querySelector('.ut').textContent=ok?'อัปเดตแล้ว':'ลองอีกครั้ง';setTimeout(()=>{b.classList.remove('done','fail');b.querySelector('.ut').textContent='อัปเดตข้อมูล'},2200)}
let GSF=0,GST=null;
function gsAuto(sec){if(SCR||NOGS())return;clearInterval(GST);GST=null;try{localStorage.setItem('tm3_gsauto',String(sec||0))}catch(e){}const b=$('gsync');if(b)b.classList.toggle('auto',!!sec);
 if(sec){GST=setInterval(()=>{if(!document.hidden)gsSync(true)},sec*1000)}gsStat()}
function gsStat(){const e=$('gsst');if(!e)return;let t='';try{t=localStorage.getItem('tm3_gsync')||''}catch(x){}const a=+($('gsauto')&&$('gsauto').value||0);
 e.innerHTML=(t?'อัปเดตล่าสุด: <b>'+new Date(t).toLocaleTimeString('th-TH')+'</b> น. ('+new Date(t).toLocaleDateString('th-TH',{day:'numeric',month:'short'})+')':'ยังไม่เคยอัปเดต')+(a?' · <span class="live">● อัปเดตอัตโนมัติทุก '+(a<60?a+' วินาที':a/60+' นาที')+'</span>':'')}
function gsSrcRender(){const box=$('gssrc');if(!box)return;const A=gsSrcs();box.innerHTML='';
 A.forEach((x,i)=>{const n=i?D.filter(r=>r.gsSrc===x.id).length:null,on=x.on!==false,el=document.createElement('div');el.className='gsr'+(on?'':' off');
  el.innerHTML=`<div class="gsh"><span class="gsd ${on?'on':''}" title="${on?'เชื่อมต่ออยู่':'ตัดการเชื่อมต่อแล้ว'}"></span><input class="gsn" value="${esc(x.name)}" maxlength="40" aria-label="ชื่อลิงก์">${i?`<select class="gsm" aria-label="รูปแบบการซิงค์"><option value="sync"${x.mode!=='add'?' selected':''}>🔄 ซิงค์สองทาง</option><option value="add"${x.mode==='add'?' selected':''}>⬇️ ดึงเพิ่มอย่างเดียว</option><option value="rv"${x.mode==='rv'?' selected':''}>📑 แดชบอร์ดเพิกถอน/ใบแดง</option><option value="io"${x.mode==='io'?' selected':''}>🕵️ แดชบอร์ด IO</option></select>`:'<span class="gsb main" title="ซิงค์สองทาง · แถวใหม่ที่บันทึกในแอปจะเขียนลงชีตนี้">⭐ หลัก · ซิงค์สองทาง</span>'}</div>
  <a class="gsu" href="${esc(x.url)}" target="_blank" rel="noopener" title="เปิดชีต">${esc(x.url.replace(/^https?:\/\//,''))}</a>
  <div class="gsa"><small>${on?'🟢 เชื่อมต่ออยู่':'⚪ ตัดการเชื่อมต่อ'}${x.mode==='rv'?' · ใช้กับแดชบอร์ดเพิกถอน/ใบแดง · บันทึกสองทาง ('+((RV&&RV.length)||0).toLocaleString()+' แถว)':x.mode==='io'?' · ใช้กับแดชบอร์ด IO · บันทึกสองทาง ('+((IOR&&IOR.length)||0).toLocaleString()+' แถว)':n!=null?' · ข้อมูลจากลิงก์นี้ '+n.toLocaleString()+' แถว':''}</small><span><button type="button" class="btn sm ${on?'':'ok'}" data-a="tg">${on?'✂️ ตัดการเชื่อมต่อ':'🔌 เชื่อมต่อ'}</button>${i?'<button type="button" class="btn sm" data-a="main">⭐ ตั้งเป็นหลัก</button>':''}<button type="button" class="btn sm" data-a="del">🗑 ลบ</button></span></div>`;
  const ms=el.querySelector('.gsm');if(ms)ms.onchange=async()=>{const B=gsSrcs(),v=ms.value;if(v==='sync'&&!await uiConfirm('เปลี่ยน “'+x.name+'” เป็นซิงค์สองทาง?','แถวที่นำเข้าจากลิงก์นี้จะถูกปรับให้ตรงกับชีตทุกครั้งที่ซิงค์ (แถวที่ไม่มีในชีตแล้วจะถูกลบออกจากแอป — ระบบสำรองข้อมูลให้ก่อนอัตโนมัติ) และการแก้/ลบแถวเหล่านี้ในแอปจะเขียนกลับไปที่ชีตนี้','เปลี่ยนเป็นซิงค์สองทาง','ยกเลิก')){ms.value='add';return}B[i].mode=['add','rv','io'].includes(v)?v:'sync';gsSrcSave(B);gsSrcRender();if(v==='io'){gsToast('🕵️ “'+esc(x.name)+'” ใช้กับแดชบอร์ด IO แล้ว — ไม่นำไปรวมกับข้อมูลจับกุม',true);try{ioSync(true)}catch(e){}return}if(v==='rv'){gsToast('📑 “'+esc(x.name)+'” ใช้กับแดชบอร์ดเพิกถอน/ใบแดงแล้ว — ไม่นำไปรวมกับข้อมูลจับกุม',true);try{rvSync(true)}catch(e){}return}gsToast(v==='add'?'⬇️ “'+esc(x.name)+'” เป็นแบบดึงเพิ่มอย่างเดียวแล้ว':'🔄 “'+esc(x.name)+'” เป็นแบบซิงค์สองทางแล้ว — กำลังซิงค์',true);if(v!=='add'&&B[i].on!==false)gsSync(false)};
  const ni=el.querySelector('.gsn');ni.onchange=()=>{const B=gsSrcs();B[i].name=ni.value.trim()||B[i].name;gsSrcSave(B);gsSrcRender()};
  el.querySelector('[data-a=tg]').onclick=()=>{const B=gsSrcs();B[i].on=B[i].on===false;gsSrcSave(B);gsSrcRender();gsBar();if(B[i].on!==false)gsSync(false);else gsToast('✂️ ตัดการเชื่อมต่อ “'+esc(B[i].name)+'” แล้ว — ข้อมูลที่นำเข้ายังอยู่ แต่จะไม่ดึงเพิ่ม',true)};
  const mb=el.querySelector('[data-a=main]');if(mb)mb.onclick=async()=>{if(!await uiConfirm('ตั้ง “'+x.name+'” เป็นชีตหลัก?','ชีตหลักใช้ซิงค์สองทาง (แก้/ลบ/เขียนกลับ) แถวที่ไม่อยู่ในชีตหลักและไม่ได้มาจากลิงก์เสริมจะถูกลบเมื่อซิงค์ครั้งถัดไป — ระบบสำรองข้อมูลให้อัตโนมัติก่อน','ตั้งเป็นหลัก','ยกเลิก'))return;const B=gsSrcs(),old=B[0],m=B.splice(i,1)[0];m.mode='sync';m.on=true;old.mode=old.mode||'sync';B.unshift(m);
   D.forEach(r=>{if(!r.gsSrc)r.gsSrc=old.id;else if(r.gsSrc===m.id)delete r.gsSrc});persist();gsSrcSave(B);gsSrcRender();gsBar();render();gsToast('⭐ ตั้ง “'+esc(m.name)+'” เป็นชีตหลักแล้ว — ลิงก์เดิมยังซิงค์สองทางต่อ',true)};
  el.querySelector('[data-a=del]').onclick=async()=>{const B=gsSrcs();if(!i){gsToast(B.length<2?'⚠️ ต้องมีอย่างน้อย 1 ลิงก์ — ใช้ปุ่ม “ตัดการเชื่อมต่อ” แทนได้':'⚠️ ลบชีตหลักไม่ได้ — กด “⭐ ตั้งเป็นหลัก” ที่ลิงก์อื่นก่อน แล้วจึงลบลิงก์นี้',false);return}
   const cnt=D.filter(r=>r.gsSrc===x.id).length;let rm=false;
   if(cnt){const r=await uiDlg('ลบลิงก์ “'+x.name+'”','ข้อมูล '+cnt.toLocaleString()+' แถวที่นำเข้าจากลิงก์นี้ — จะเก็บไว้หรือลบด้วย?','ลบลิงก์ + ลบข้อมูลที่นำเข้า','ลบลิงก์ แต่เก็บข้อมูลไว้',true);rm=!!r}
   else if(!await uiConfirm('ลบลิงก์ “'+x.name+'”?','','🗑 ลบ','ยกเลิก',true))return;
   if(rm){vSnap('อัตโนมัติ — ก่อนลบข้อมูลของลิงก์ '+x.name);D=D.filter(r=>r.gsSrc!==x.id);persist();render()}/* kept rows stay tagged with the removed link id: no sheet mirrors or writes them any more */
   B.splice(i,1);gsSrcSave(B);gsSrcRender();gsBar();gsToast('🗑 ลบลิงก์แล้ว',true)};
  box.appendChild(el)})}
function gsPanel(){let P=$('gspanel');if(P){P.classList.toggle('hide');gsStat();return}P=document.createElement('div');P.id='gspanel';P.className='gspanel';
 let au=0;try{au=+(localStorage.getItem('tm3_gsauto')||0)}catch(e){}
 P.innerHTML=`<div class="gph">🔗 แหล่งข้อมูล Google Sheets<button type="button" class="gpx">✕</button></div>
 <label>ลิงก์ Google Sheet <small>(เพิ่มได้ไม่จำกัด · ชีตหลัก = ซิงค์สองทางและรับแถวใหม่ที่บันทึกในแอป · ลิงก์อื่นเลือกได้ว่าจะซิงค์สองทางหรือดึงเพิ่มอย่างเดียว)</small></label>
 <div id="gssrc" class="gssrc"></div>
 <div class="gsadd"><input id="gsnm" placeholder="ชื่อกำกับ เช่น ชีต ชป.2" maxlength="40"><input id="gsurl" placeholder="วางลิงก์ Google Sheet ที่นี่"><select id="gsmode" aria-label="รูปแบบการซิงค์"><option value="sync">🔄 ซิงค์สองทาง</option><option value="add">⬇️ ดึงเพิ่มอย่างเดียว</option><option value="rv">📑 แดชบอร์ดเพิกถอน/ใบแดง</option><option value="io">🕵️ แดชบอร์ด IO</option></select><button type="button" class="btn sm pr" id="gssave">＋ เพิ่มลิงก์</button></div>
 <div class="gsmh"><b>🔄 ซิงค์สองทาง</b> — แถวจากชีตนี้ตรงกับชีตเสมอ (เพิ่ม/แก้/ลบในชีต → แอปเปลี่ยนตาม) และเมื่อแก้หรือลบแถวนั้นในแอป จะเขียนกลับไปที่ชีตนี้ · <b>⬇️ ดึงเพิ่มอย่างเดียว</b> — นำเข้าเฉพาะแถวใหม่ ไม่ลบ ไม่เขียนกลับ</div>
 <label>อัปเดตอัตโนมัติ</label>
 <div class="gpr"><select id="gsauto"><option value="0">ปิด (กดปุ่มเอง)</option><option value="10">ทุก 10 วินาที</option><option value="30">ทุก 30 วินาที</option><option value="60">ทุก 1 นาที</option><option value="300">ทุก 5 นาที</option></select><button type="button" class="btn sm" id="gscsv2">📂 นำเข้าจากไฟล์ CSV</button></div>
 <label class="gpw"><input type="checkbox" id="gswrite"> ✍️ บันทึกกลับไป Google Sheets ทันทีเมื่อเพิ่มหรือแก้ไขข้อมูลในแอป</label>
 <button type="button" class="btn sm" id="gsdebug" style="margin-top:8px">🔬 ทดสอบการเชื่อมต่อ write-back</button><div class="gpst" id="gsst"></div>
 <p class="note">ดึงผ่าน Google Sheets connector ของบัญชี claude.ai ที่เปิดแอป (ครั้งแรกจะมีหน้าต่างขออนุญาต) · ระบบดึงเฉพาะรายการใหม่ ไม่ทับข้อมูลที่บันทึกในแอป · ทำงานเฉพาะตอนเปิดหน้านี้อยู่ · Google อาจใช้เวลาไม่กี่วินาทีถึง 1–2 นาทีกว่าข้อมูลที่แก้ในชีตจะพร้อมให้ดึง</p>`;
 $('d').querySelector('.ch').after(P);$('gsauto').value=String(au);
 P.querySelector('.gpx').onclick=()=>P.classList.add('hide');$('gswrite').checked=gsWriteOn();$('gswrite').onchange=e=>{try{localStorage.setItem('tm3_gswrite',e.target.checked?'1':'0')}catch(x){}};
 gsSrcRender();$('gssave').onclick=()=>{const v=$('gsurl').value.trim(),nm=$('gsnm').value.trim();const p=gsParseLink(v);if(!p){gsToast('❌ ลิงก์ไม่ถูกต้อง — ต้องเป็นลิงก์ docs.google.com/spreadsheets/d/…',false);return}
  const A=gsSrcs();if(A.some(x=>{const q=gsParseLink(x.url);return q&&q.id===p.id&&q.gid===p.gid})){gsToast('⚠️ ลิงก์นี้มีอยู่ในรายการแล้ว',false);return}
  A.push({id:'s'+Date.now().toString(36),name:nm||('ชีต '+(A.length+1)),url:v,on:true,mode:['add','rv','io'].includes($('gsmode').value)?$('gsmode').value:'sync'});gsSrcSave(A);$('gsurl').value='';$('gsnm').value='';gsSrcRender();gsBar();gsToast('✅ เพิ่มลิงก์แล้ว — กำลังดึงข้อมูล',true);gsSync(false)}
 $('gsauto').onchange=e=>{gsAuto(+e.target.value);if(+e.target.value)gsSync(true)};$('gscsv2').onclick=()=>$('gscsv').click();gsStat();
 $('gsdebug').onclick=async()=>{
  const steps=[];
  steps.push('gsWriteOn() = '+gsWriteOn());
  steps.push('D.length = '+D.length);
  const mcp=await claude.use('mcp').catch(e=>{steps.push('claude.use(mcp) ERROR: '+e);return null});
  steps.push('mcp = '+(mcp?'✅ ได้ connector':'❌ null — ไม่มี connector'));
  if(mcp){try{const t=await gsTarget(mcp);steps.push('gsTarget = ✅ sheet: '+t.title+' id:'+t.id.slice(0,12)+'...')
   ;const H=await gsHeader(mcp,t);steps.push('gsHeader = ✅ '+H.length+' คอลัมน์: '+H.slice(0,5).join(', ')+'...')}
   catch(e){steps.push('gsTarget/gsHeader ERROR: '+(e.message||e.code||e))}}
  uiAlert('🔬 ผลการทดสอบ\n\n'+steps.join('\n'),true)};}
setTimeout(()=>{let au=0;try{au=+(localStorage.getItem('tm3_gsauto')||0)}catch(e){}if(au)gsAuto(au)},0);
setTimeout(gsTitle,0);

function gsBar(){const a=$('gslb');if(!a)return;const u=(typeof gsLink=='function'?gsLink():'');a.href=u;const _n=gsSrcs();$('gslu').textContent=(_n[0].name||'')+' · '+u.replace(/^https?:\/\//,'').slice(0,60)+(_n.length>1?'  (+'+(_n.length-1)+' ลิงก์)':'');let t='';try{t=localStorage.getItem('tm3_gsimp')||localStorage.getItem('tm3_gsync')||''}catch(e){}
 $('gsls').textContent=t?'นำเข้าล่าสุด '+new Date(t).toLocaleString('th-TH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' น.':''}
function impShow(ok,title,sub){document.querySelectorAll('.impok').forEach(e=>e.remove());const o=document.createElement('div');o.className='impok'+(ok?'':' bad');
 o.innerHTML=`<div class="iok"><svg viewBox="0 0 52 52"><circle class="c" cx="26" cy="26" r="23"/>${ok?'<path class="k" d="M15 27l7.5 7.5L38 19"/>':'<path class="k" d="M18 18l16 16M34 18L18 34"/>'}</svg><b>${title}</b><span>${sub}</span></div>`;
 o.onclick=()=>o.remove();document.body.appendChild(o);setTimeout(()=>o.classList.add('out'),ok?2600:3600);setTimeout(()=>o.remove(),ok?3000:4000)}
function impDone(a,k,src){impShow(true,'นำเข้าข้อมูลสำเร็จ',(a?`เพิ่มใหม่ <em>${a.toLocaleString()}</em> รายการ`:'ไม่มีรายการใหม่ — ข้อมูลเป็นปัจจุบันแล้ว')+(k?`<br><small>ข้าม ${k.toLocaleString()} แถว (ซ้ำกับข้อมูลเดิม/แถวว่าง)</small>`:'')+(src?`<br><small>จาก${esc(src)}</small>`:''))}
function impFail(t,sub){impShow(false,t,sub)}
$('imp').addEventListener('click',()=>{gsBar();setTimeout(tbFit,0)});$('taclr').onclick=()=>{$('ta').value='';$('ta').focus()};$('tacan').onclick=()=>{$('ta').value='';$('ip').classList.add('hide');tbFit()};setTimeout(gsBar,0);

function tbFit(){const w=document.querySelector('#d .tbw');if(!w||$('d').classList.contains('hide'))return;if(innerWidth<761){w.style.height='';w.style.maxHeight='';return}
 const top=w.getBoundingClientRect().top+scrollY;let h=Math.max(260,innerHeight-top-18);w.style.height=w.style.maxHeight=h+'px';const ov=document.documentElement.scrollHeight-innerHeight;if(ov>0&&h-ov>=260){h-=ov;w.style.height=w.style.maxHeight=h+'px'}}
addEventListener('resize',()=>tbFit());document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{scrollTo(0,0);tbFit()},0)));

// ---- write back to Google Sheets ----
const gsSrcOf=r=>{const A=gsSrcs();return r&&r.gsSrc?A.find(x=>x.id===r.gsSrc):A[0]};
const gsWriteOn=r=>{if(NOGS())return false;const x=gsSrcOf(r);if(!x||x.on===false||(x!==gsSrcs()[0]&&x.mode==='add'))return false;try{return localStorage.getItem('tm3_gswrite')!=='0'}catch(e){return true}};
const qT=t=>"'"+t.replace(/'/g,"''")+"'",colL=n=>{let s='';n=Math.max(1,n);while(n>0){const m=(n-1)%26;s=String.fromCharCode(65+m)+s;n=(n-m-1)/26}return s};
let GSHDR=null,GSQ=Promise.resolve();
async function gsTarget(mcp,link){const p=gsParseLink(link||gsLink())||gsParseLink(GS_DEF),key=p.id+':'+p.gid;let title=GSTT[key];
 if(!title){const m=(await mcp.callTool(GSC,'get_spreadsheet',{spreadsheetId:p.id,fields:['sheets.properties.sheetId','sheets.properties.title']},{cache:false})).payload||{};const sh=(m.sheets||[]).find(x=>x.properties&&String(x.properties.sheetId)===String(p.gid))||(m.sheets||[])[0];if(!sh)throw{code:'tool_error',message:'ไม่พบแท็บชีต'};title=GSTT[key]=sh.properties.title}return{id:p.id,title}}
async function gsHeader(mcp,t){const k=t.id+'|'+t.title;if(GSHDR&&GSHDR.k===k)return GSHDR.h;const v=(await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1:Z1'},{cache:false})).payload||{};const h=((v.values||[])[0]||[]).map(x=>String(x).trim());if(!h.length)throw{code:'tool_error',message:'ไม่พบแถวหัวตารางในชีต'};GSHDR={k,h};return h}
const gsSig=r=>[r.date,r.team,ck(r.name),ck(r.nat),ck(r.charge),String(r.num||1)].join('|');
function gsVal(r,h){if(h==='เดือน')return MON[+r.date.slice(5,7)-1]+be2(r.date.slice(0,4));const k=GSH[h];if(!k)return null;if(k==='date')return(+r.date.slice(8))+'/'+(+r.date.slice(5,7))+'/'+r.date.slice(0,4);if(k==='num')return String(r.num||1);return r[k]==null?'':String(r[k])}
function gsPush(r,old){if(!gsWriteOn(r)){const x=gsSrcOf(r);if(x&&r.gsSrc&&!NOGS()&&gsWriteOn())gsToast('ℹ️ แก้ในแอปแล้ว — ลิงก์ “'+esc(x.name)+'” '+(x.on===false?'ตัดการเชื่อมต่ออยู่':'เป็นแบบดึงอย่างเดียว')+' จึงไม่เขียนกลับชีต',true);else if(r&&r.gsSrc&&!x)gsToast('ℹ️ แก้ในแอปแล้ว — รายการนี้มาจากลิงก์ที่ถูกลบไปแล้ว จึงไม่เขียนกลับชีต',true);return}GSQ=GSQ.then(()=>gsPush1(r,old)).catch(()=>{})}
async function gsPush1(r,old){const mcp=await claude.use('mcp').catch(()=>null);if(!mcp){gsToast('⚠️ บันทึกในแอปแล้ว แต่ส่งไป Google Sheets ไม่ได้ในมุมมองนี้ (ไม่มี connector)',false);return}
 const SX=gsSrcOf(r)||gsSrcs()[0],nmX=SX===gsSrcs()[0]?'':' “'+esc(SX.name)+'”';
 try{const t=await gsTarget(mcp,SX.url),H=await gsHeader(mcp,t),HF=H.map(h=>GSH[h]||null),L=colL(H.length),vals=H.map(h=>gsVal(r,h));let row=null;
  if(old){const so=gsSig(old);row=old.gsRow||null;
   if(row){const cur=(((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row},{cache:false})).payload||{}).values||[])[0]||[];const rr=gsRowRec(HF,cur);if(!rr||gsSig(rr)!==so)row=null}
   if(!row){const all=((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1:'+L},{cache:false})).payload||{}).values||[];for(let i=1;i<all.length;i++){const rr=gsRowRec(HF,all[i]||[]);if(rr&&gsSig(rr)===so){row=i+1;break}}}}
  let how;if(row){await mcp.callTool(GSC,'update_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row,values:[vals]});how='แก้ไขแถว '+row}
  else{/* the sheet has blank pre-formatted rows below the data, so append_values would land far below it — write right after the last filled row instead */
   try{const all=((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1:'+L},{cache:false})).payload||{}).values||[];let n=all.length;while(n>1&&!(all[n-1]||[]).some(c=>String(c).trim()))n--;row=n+1;
    await mcp.callTool(GSC,'update_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row,values:[vals.map(v=>v==null?'':v)]});how='เพิ่มแถวใหม่ (แถว '+row+')'}catch(e2){row=null}}
  if(!row&&!how){const res=(await mcp.callTool(GSC,'append_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1',values:[vals.map(v=>v==null?'':v)]})).payload||{};const ur=(res.updates&&res.updates.updatedRange)||res.updatedRange||res.tableRange||'';const m=String(ur).match(/![A-Z]+(\d+)/);row=m?+m[1]:null;how='เพิ่มแถวใหม่'+(row?' (แถว '+row+')':'')}
  const x=D.find(z=>z.id==r.id);if(x&&row){x.gsRow=row;delete x.pend;persist()}gsToast('↗ บันทึกลง Google Sheets'+nmX+' แล้ว — '+how,true)}
 catch(e){const msg=e&&e.code&&GSE[e.code]?GSE[e.code]+(e.code==='tool_error'&&e.message?' — '+esc(e.message).slice(0,140):''):esc((e&&(e.message||e.code))||e);gsToast('⚠️ บันทึกในแอปแล้ว แต่ส่งไป Google Sheets ไม่สำเร็จ<br><small>'+msg+'</small>',false)}}

// ---- backup vault ----
const VK='tm3_vault';
function vLoad(){try{return JSON.parse(localStorage.getItem(VK)||'[]')}catch(e){return[]}}
function vSave(a){a=a.slice();while(true){try{localStorage.setItem(VK,JSON.stringify(a));return true}catch(e){if(a.length<=1)return false;a.pop()}}}
function vSnap(reason,data){data=data||D;if(!data.length)return;const a=vLoad(),sig=data.length+':'+JSON.stringify(data).length;if(a[0]&&a[0].sig===sig&&/^อัตโนมัติ/.test(reason))return;
 a.unshift({id:Date.now(),t:new Date().toISOString(),reason,n:data.length,p:sm(data),sig,recs:JSON.parse(JSON.stringify(data))});if(a.length>30)a.length=30;vSave(a);if($('vm')&&!$('vm').classList.contains('hide'))vRender()}
function vDaily(){const a=vLoad();if(D.length&&(!a[0]||Date.now()-new Date(a[0].t).getTime()>864e5))vSnap('อัตโนมัติ — รายวัน')}
let VSEL=null;
function vOpen(){$('vm').classList.remove('hide');vRender()}
function vRender(){const a=vLoad();let used=0;try{used=(localStorage.getItem(VK)||'').length}catch(e){}
 $('vsum').innerHTML=`ข้อมูลปัจจุบัน <b>${D.length.toLocaleString()}</b> รายการ · ในถัง <b>${a.length}</b>/30 ชุด · ใช้พื้นที่ ${(used/1048576).toFixed(2)} MB`;
 $('vlist').innerHTML=a.length?a.map(v=>`<div class="vi${VSEL==v.id?' sel':''}" data-vid="${v.id}"><div class="vh"><b>${new Date(v.t).toLocaleString('th-TH',{day:'numeric',month:'short',year:'2-digit',hour:'2-digit',minute:'2-digit'})} น.</b><span class="vr${/^อัตโนมัติ/.test(v.reason)?' au':''}">${esc(v.reason)}</span><span class="vn">${v.n.toLocaleString()} รายการ · ${v.p.toLocaleString()} ราย</span></div>
 <div class="va"><button type="button" data-va="view">👁 ดู</button><button type="button" data-va="use" class="w">♻️ นำมาใช้แทนที่</button><button type="button" data-va="merge">➕ รวมกับปัจจุบัน</button><button type="button" data-va="copy">📋 คัดลอก</button><button type="button" data-va="json">⬇️ JSON</button><button type="button" data-va="xlsx">⬇️ Excel</button><button type="button" data-va="del" class="d">🗑 ลบ</button></div></div>`).join(''):'<p class="note" style="text-align:center;padding:18px 0">ยังไม่มีข้อมูลในถัง — กด “📸 สำรองตอนนี้” เพื่อเก็บชุดแรก</p>';
 const v=a.find(x=>x.id==VSEL);$('vpv').innerHTML=v?`<div class="vph">👁 ตัวอย่างข้อมูลชุด ${new Date(v.t).toLocaleString('th-TH')} (${v.n} รายการ${v.n>100?' — แสดง 100 รายการล่าสุด':''})<button type="button" class="dwx" id="vpx">✕</button></div><div class="vpt"><table><tr><th>วันที่</th><th>ชป.</th><th>การปฏิบัติ</th><th>ชื่อ</th><th>สัญชาติ</th><th>คดี</th><th>ราย</th></tr>${v.recs.slice().sort((x,y)=>x.date<y.date?1:-1).slice(0,100).map(r=>`<tr><td>${fd(r.date)}</td><td>${esc(r.team)}</td><td>${esc(r.type)}</td><td>${esc(r.name)||'-'}</td><td>${esc(r.nat)}</td><td>${esc(r.charge)}</td><td>${w(r)}</td></tr>`).join('')}</table></div>`:'';
 const x=$('vpx');if(x)x.onclick=()=>{VSEL=null;vRender()}}
function vArm(b,label,fn){if(b.dataset.arm){delete b.dataset.arm;b.classList.remove('arm');fn();return}b.dataset.arm=1;b.dataset.l=b.textContent;b.textContent=label;b.classList.add('arm');setTimeout(()=>{if(b.dataset.arm){delete b.dataset.arm;b.classList.remove('arm');b.textContent=b.dataset.l}},3500)}
function vMsg(h,ok){impShow(ok,ok?'สำเร็จ':'ไม่สำเร็จ',h)}
async function vCopy(recs){const t=[BKH].concat(recs.slice().sort((a,b)=>a.date<b.date?-1:1).map(bkRow)).map(r=>r.map(v=>String(v).replace(/[\t\n]+/g,' ')).join('\t')).join('\n');
 try{await navigator.clipboard.writeText(t)}catch(e){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(x){}ta.remove()}vMsg(`คัดลอก ${recs.length} รายการแล้ว — วางใน Google Sheets / Excel ได้ทันที (Ctrl+V)`,true)}
function vExport(v,fmt){const nm=`ถังสำรอง_${v.t.slice(0,16).replace(/[:T]/g,'-')}_${v.n}รายการ_กกสส.บก.ตม.3.${fmt}`;prePick(nm);let b;
 if(fmt==='json')b=new Blob([JSON.stringify({app:'tm3-arrest-stats',version:1,exported:v.t,reason:v.reason,count:v.n,records:v.recs},null,1)],{type:'application/json'});
 else{const A=[BKH].concat(v.recs.slice().sort((a,c)=>a.date<c.date?-1:1).map(bkRow)),ws=XLSX.utils.aoa_to_sheet(A),wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'ข้อมูลสำรอง');b=new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:EXM.xlsx})}
 dl(b,nm).catch(()=>{})}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('#vlist [data-va]');if(!b)return;const id=+b.closest('[data-vid]').dataset.vid,a=vLoad(),v=a.find(x=>x.id==id);if(!v)return;const act=b.dataset.va;
 if(act==='view'){VSEL=VSEL==id?null:id;vRender();$('vpv').scrollIntoView({block:'nearest',behavior:'smooth'})}
 else if(act==='use')vArm(b,'กดอีกครั้งเพื่อยืนยัน',()=>{vSnap('อัตโนมัติ — ก่อนนำชุดสำรองมาใช้');D=v.recs.map(r=>normRec(Object.assign({},r)));persist();render();vRender();vMsg(`นำข้อมูลชุดสำรองมาใช้แล้ว (${v.n} รายการ)<br><small>ข้อมูลก่อนหน้าถูกเก็บไว้ในถังแล้ว</small>`,true)});
 else if(act==='merge'){const have=new Set(D.map(gsKey));let n=0;v.recs.forEach((r,i)=>{if(!have.has(gsKey(r))){have.add(gsKey(r));D.push(normRec(Object.assign({},r,{id:r.id||Date.now()+i})));n++}});if(n){vSnap('อัตโนมัติ — หลังรวมข้อมูลจากถัง');persist();render()}vRender();vMsg(n?`รวมเพิ่ม ${n} รายการที่ยังไม่มีในปัจจุบัน`:'ไม่มีรายการใหม่ — ข้อมูลปัจจุบันมีครบแล้ว',true)}
 else if(act==='copy')vCopy(v.recs);
 else if(act==='json'||act==='xlsx')vExport(v,act);
 else if(act==='del')vArm(b,'ยืนยันลบ?',()=>{vSave(a.filter(x=>x.id!=id));if(VSEL==id)VSEL=null;vRender()})});
$('vsnap').onclick=()=>{if(!D.length){vMsg('ยังไม่มีข้อมูลให้สำรอง',false);return}vSnap('สำรองด้วยตนเอง');vRender();vMsg(`เก็บข้อมูล ${D.length} รายการลงถังแล้ว`,true)};
$('vimp').onclick=()=>$('vfi').click();
$('vfi').onchange=async e=>{const f=e.target.files[0];e.target.value='';if(!f)return;try{const o=JSON.parse(await f.text()),recs=Array.isArray(o)?o:o&&o.records;if(!Array.isArray(recs))throw new Error('ไม่ใช่ไฟล์สำรองของแอปนี้');vSnap('นำเข้าไฟล์ '+f.name,recs.map(r=>normRec(Object.assign({},r))));vRender();vMsg(`นำไฟล์ ${esc(f.name)} (${recs.length} รายการ) เข้าถังแล้ว<br><small>กด “♻️ นำมาใช้แทนที่” หรือ “➕ รวม” เพื่อใช้ข้อมูล</small>`,true)}catch(x){vMsg(esc(x.message||x),false)}};
$('vclr').onclick=e=>vArm(e.currentTarget,'ยืนยันล้างถังทั้งหมด?',()=>{vSave([]);VSEL=null;vRender()});
$('vx').onclick=()=>$('vm').classList.add('hide');$('vm').addEventListener('click',e=>{if(e.target.id==='vm')$('vm').classList.add('hide')});
document.querySelectorAll('[data-vault]').forEach(b=>b.onclick=vOpen);
setTimeout(vDaily,1500);

// ---- AI smart search ----
const AIFOC=['type','team','chg','rel','nat','place','mon','intel','sex','age'];
const aiBoxes=()=>document.querySelectorAll('.aibox'),aiShow=h=>aiBoxes().forEach(b=>b.innerHTML=h||'');
const aiUniq=a=>[...new Set(a.map(x=>String(x==null?'':x).trim()).filter(Boolean))];
function aiCtx(){const nat=aiUniq([...NATS.slice(0,0),...D.map(r=>r.nat)]),pl=aiUniq(D.map(r=>r.place)),chg=aiUniq([...SC,...SR,...D.flatMap(r=>[...chips(r.charge),...chips(r.rel)])]),ds=D.map(r=>r.date).filter(Boolean).sort();
 const ab={...ABR0,...ABRu},abs=Object.entries(ab).slice(0,90).map(([k,v])=>k+'='+v).join(', ');
 const today=ds2(new Date());
 return{nat,pl,chg,abs,today,rng:ds.length?ds[0]+' ถึง '+ds[ds.length-1]:'-',n:D.length}}
const ds2=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function aiPrompt(q){const c=aiCtx();return `คุณเป็นผู้ช่วยค้นหาข้อมูลสถิติการจับกุมของ กก.สส.บก.ตม.3 แปลงคำค้นหรือสิ่งที่ผู้ใช้อยากได้ ให้เป็นเงื่อนไขกรองข้อมูล ตอบเป็น JSON object เท่านั้น ห้ามมีข้อความอื่น
วันนี้ ${c.today} (ปี ค.ศ.) ข้อมูลมี ${c.n} แถว ช่วงวันที่ ${c.rng} · ปีงบประมาณเริ่ม 1 ต.ค. สิ้นสุด 30 ก.ย. · ปี พ.ศ. ลบ 543 = ค.ศ. · เดือนในรูปแบบ YYYY-MM
ค่าที่ใช้ได้ (ต้องเลือกจากรายการนี้ตรงตัวเท่านั้น ถ้าไม่มีที่ตรงให้เว้นว่าง ห้ามเดา):
team: ชป.1 | ชป.2 | ชป.3
type: จับเอง | ร่วมจับ
intel: ${SI.join(' | ')}
sex: ชาย | หญิง
nat (สัญชาติ): ${c.nat.join(' | ')}
place (จังหวัด): ${c.pl.join(' | ')}
charge และ rel (คดี/คดีที่เกี่ยวข้อง): ${c.chg.join(' | ')}
คำย่อที่ระบบรู้จัก: ${c.abs}
รูปแบบผลลัพธ์:
{"filters":{"team":"","type":"","intel":"","sex":"","nat":"","place":"","charge":"","rel":"","mon":"","a":"","b":"","a1":"","a2":"","name":"","pp":"","hf":"","hl":"","q":""},"focus":"","understood":"","tips":[]}
กติกา: a,b = วันที่เริ่ม/สิ้นสุด YYYY-MM-DD (ใช้เมื่อเป็นช่วง เช่น ไตรมาส ปีงบ 7 วันล่าสุด) · mon = เดือนเดียว YYYY-MM · a1,a2 = อายุต่ำสุด/สูงสุด (ตัวเลข) · hf = "1" มีค่าปรับ / "0" ไม่มี · hl = "1" มีลิงก์ข่าว / "0" ไม่มี · name/pp = ชื่อ หรือเลขพาสปอร์ต/บัตรที่ระบุ · q = คำค้นทั่วไปที่ไม่เข้าช่องอื่น
focus = ถ้าผู้ใช้อยากรู้ "การแจกแจง/อันดับ/เปรียบเทียบ" ตามมิติใด ให้ใส่ type|team|chg|rel|nat|place|mon|intel|sex|age ตัวเดียว (เช่น "สัญชาติไหนมากสุด" → nat) ถ้าไม่ใช่ให้ ""
understood = ภาษาไทย 1 ประโยคสั้น บอกว่าเข้าใจว่าผู้ใช้ต้องการอะไร · tips = คำค้นแนะนำต่อยอด 0-3 ข้อ (ภาษาไทยสั้น ๆ)
คำค้น: ${q}`}
function aiApply(o){const f=(o&&o.filters)||{},out={},warn=[],lst=(a)=>v=>a.find(x=>ck(x)==ck(v));
 const C=aiCtx(),pick={team:lst(['ชป.1','ชป.2','ชป.3']),type:lst(['จับเอง','ร่วมจับ']),intel:lst(SI),sex:lst(['ชาย','หญิง']),nat:lst(C.nat),place:lst(C.pl),charge:lst(C.chg),rel:lst(C.chg)};
 const extraQ=[];
 Object.keys(pick).forEach(k=>{const v=String(f[k]==null?'':f[k]).trim();if(!v)return;const m=pick[k](v);if(m)out[k]=m;else warn.push(v)});
 const re=/^\d{4}-\d{2}-\d{2}$/;let a=re.test(f.a)?f.a:'',b=re.test(f.b)?f.b:'';if(a&&b&&a>b)[a,b]=[b,a];if(a)out.a=a;if(b)out.b=b;if(a||b)out.per='c';
 if(/^\d{4}-\d{2}$/.test(f.mon)&&!(a||b))out.mon=f.mon;
 ['a1','a2'].forEach(k=>{const n=parseInt(f[k],10);if(n>=0&&n<=120)out[k]=String(n)});
 ['hf','hl'].forEach(k=>{if(f[k]==='1'||f[k]==='0'||f[k]===1||f[k]===0)out[k]=String(f[k])});
 ['name','pp'].forEach(k=>{const v=String(f[k]==null?'':f[k]).trim();if(v)out[k]=v});
 const q=String(f.q==null?'':f.q).trim();if(q)out.q=q;
 return{out,warn}}
function aiChips(out){const L={team:'ชป.',type:'การปฏิบัติ',sex:'เพศ',nat:'สัญชาติ',place:'จังหวัด',charge:'คดี',rel:'คดีที่เกี่ยวข้อง',intel:'การข่าว',name:'ชื่อ',pp:'พาสปอร์ต/บัตร',q:'ค้นหา'},c=[];
 Object.keys(L).forEach(k=>{if(out[k])c.push(L[k]+': '+out[k])});
 if(out.mon)c.push('เดือน '+mlabel(out.mon));if(out.a||out.b)c.push('วันที่ '+(out.a?fd(out.a):'…')+' – '+(out.b?fd(out.b):'ปัจจุบัน'));
 if(out.a1||out.a2)c.push('อายุ '+(out.a1||'0')+'–'+(out.a2||'∞'));if(out.hf)c.push(out.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(out.hl)c.push(out.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');return c}
function aiMsg(t,ok){aiShow(`<div class="aic" ${ok?'':'style="border-left-color:#d97706"'}><div class="aih"><span>✨ ผู้ช่วย AI</span><button type="button" class="aix" data-aix title="ปิด">✕</button></div><div class="aiu">${t}</div></div>`)}
function aiOn(){try{return localStorage.getItem('tm3_aisearch')==='1'}catch(e){return false}}
function aiSync(){const on=aiOn();document.body.classList.toggle('aion',on);
 document.querySelectorAll('.nlai').forEach(b=>b.setAttribute('aria-pressed',on?'true':'false'));
 document.querySelectorAll('input.nl').forEach(i=>{if(!i.dataset.ph0)i.dataset.ph0=i.placeholder;i.placeholder=on?'✨ พิมพ์สิ่งที่อยากได้เป็นประโยค แล้วกด Enter หรือ ถาม ▶ เช่น ชาวจีนจับเองเดือนตุลา':i.dataset.ph0})}
function aiToggle(){const on=!aiOn();try{localStorage.setItem('tm3_aisearch',on?'1':'0')}catch(e){}aiSync();aiShow('');
 if(on){FS.nl='';render()}else{FS.nl='';document.querySelectorAll('input.nl').forEach(i=>i.value='');render()}}
let AIBUSY=false;
async function aiSearch(q,btn){q=String(q||'').trim();if(AIBUSY)return;
 if(!q){aiMsg('พิมพ์สิ่งที่อยากรู้ก่อน แล้วกด ✨ AI เช่น <i>“ชาวจีนที่จับเองเดือนธันวา ไม่มีข่าว”</i> หรือ <i>“สัญชาติไหนโดนจับมากสุดปีงบนี้”</i>',false);return}
 AIBUSY=true;document.querySelectorAll('.nlgo').forEach(b=>{b.disabled=true;b.textContent='⏳ คิดอยู่...'});aiMsg('🤖 กำลังประมวลคำค้น...',true);
 try{const sp=await claude.use('sample');if(!sp)throw new Error('ไม่มีระบบ AI ในมุมมองนี้ (ใช้ได้เมื่อเปิดผ่านหน้าแอป Claude)');
  const o=await Promise.race([sp.json(aiPrompt(q),{cache:false}),new Promise((_,j)=>setTimeout(()=>j(new Error('AI ตอบช้าเกินไป ลองใหม่อีกครั้ง')),60000))]);
  const{out,warn}=aiApply(Array.isArray(o)?o[0]:o);
  FS=out;FS.nl='';render();
  const R=rows(),n=sm(R),ch=aiChips(out),foc=AIFOC.includes(o&&o.focus)?o.focus:'',tips=Array.isArray(o&&o.tips)?o.tips.map(String).filter(Boolean).slice(0,3):[];
  const esc2=esc;
  aiShow(`<div class="aic"><div class="aih"><span>✨ ผู้ช่วย AI</span><small>คำถาม: “${esc2(q)}”</small><button type="button" class="aix" data-aix title="ปิด">✕</button></div>`+
   (o&&o.understood?`<div class="aiu">${esc2(o.understood)}</div>`:'')+
   (ch.length?`<div class="aich">${ch.map(x=>'<span>'+esc2(x)+'</span>').join('')}</div>`:'<div class="aiu">ไม่พบเงื่อนไขที่กรองได้ — แสดงข้อมูลทั้งหมด ลองระบุให้ชัดขึ้น เช่น สัญชาติ ชป. เดือน หรือคดี</div>')+
   `<div class="aiu"><b>พบ ${R.length.toLocaleString()} แถว (${n.toLocaleString()} ราย)</b></div>`+
   (warn.length?`<div class="aiw">⚠ ไม่พบในข้อมูล จึงไม่ได้ใช้กรอง: ${warn.map(esc2).join(', ')}</div>`:'')+
   `<div class="aiact"><button type="button" class="btn sm" data-aiedit="${esc2(q)}">✏️ แก้คำถาม</button><button type="button" class="btn sm" data-aiclr>✕ ล้างตัวกรอง</button></div>`+
   (tips.length?`<div class="aitips"><small class="note">ลองต่อยอด:</small>${tips.map(t=>`<button type="button" class="aitip" data-aiq="${esc2(t)}">${esc2(t)}</button>`).join('')}</div>`:'')+'</div>');
  if(foc)openDR([],foc)
 }catch(e){aiMsg('⚠️ ใช้ AI ไม่สำเร็จ: '+esc((e&&(e.message||e.code))||e)+'<br><small>ยังค้นแบบปกติได้โดยพิมพ์ในช่องค้นหา (ไม่ต้องกด AI)</small>',false)}
 finally{AIBUSY=false;document.querySelectorAll('.nlgo').forEach(b=>{b.disabled=false;b.textContent='ถาม ▶'})}}
document.querySelectorAll('.nlbar .aibox').forEach(b=>b.closest('.nlbar').after(b));
document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('.nlai,.nlgo,[data-aix],[data-aiq],[data-aiedit],[data-aiclr]');if(!t)return;
 if(t.classList.contains('nlai')){aiToggle();return}
 if(t.classList.contains('nlgo')){const inp=t.closest('.nlw').querySelector('.nl');aiSearch(inp.value,t);return}
 if(t.dataset.aix!==undefined){aiShow('');return}
 if(t.dataset.aiq){aiSearch(t.dataset.aiq);return}
 if(t.dataset.aiclr!==undefined){FS={};aiShow('');render();return}
 if(t.dataset.aiedit!==undefined){const bx=t.closest('.nlbox'),inp=bx&&bx.querySelector('.nl');if(inp){inp.value=t.dataset.aiedit;inp.focus()}}});
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(k&&k!=='nl'&&e.target.closest('#flt1,#flt2,#flt2s,#flt1s'))aiShow('')});
/* AI mode: typing does not filter live (the sentence is sent to AI on Enter) — normal mode is untouched */
document.addEventListener('input',e=>{if(aiOn()&&e.target.classList&&e.target.classList.contains('nl'))e.stopPropagation()},true);
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&aiOn()&&e.target.classList&&e.target.classList.contains('nl')){e.preventDefault();aiSearch(e.target.value,null)}});
aiSync();
/* hover-to-open option popup (filters, entry-form dates, intel/province/nationality/age) */
(()=>{if(!matchMedia('(hover:hover)').matches)return;const P=document.createElement('div');P.id='hpop';P.hidden=true;document.body.appendChild(P);let cur=null,T=0,OP=[];
 const hide=()=>{clearTimeout(T);P.hidden=true;cur=null},later=()=>{clearTimeout(T);T=setTimeout(hide,110)};
 const cfg=e=>{if(!e||e.disabled||e.offsetParent===null)return null;
  if(e.tagName=='SELECT'){if(e.classList.contains('hide')||e.options.length<2)return null;if(!(e.closest('#flt1,#flt2')||e.closest('.dsel')||e.id=='intel'))return null;return[...e.options].map(o=>[o.value,o.textContent])}
  if(e.tagName=='INPUT'){if(e.type=='number'&&(e.id=='age'||e.dataset.k=='a1'||e.dataset.k=='a2'))return Array.from({length:101},(_,i)=>[String(i),String(i)]);
   if((e.id=='num'||e.id=='cases')&&e.closest('#f'))return Array.from({length:50},(_,i)=>[String(i+1),String(i+1)]);
   if(e.id=='joint'&&e.closest('#f')){const c={};D.forEach(r=>String(r.joint||'').split(/[,，]/).map(x=>x.trim()).filter(Boolean).forEach(x=>{c[x]=(c[x]||0)+1}));const a=Object.entries(c).sort((x,y)=>y[1]-x[1]).slice(0,25).map(x=>[x[0],x[0]]);return a.length?a:null}
   if(e.id=='fine'&&e.closest('#f')){const c={};D.forEach(r=>{const f=+r.fine;if(f>0)c[f]=(c[f]||0)+1});const a=Object.entries(c).sort((x,y)=>y[1]-x[1]).slice(0,14).map(x=>+x[0]).sort((x,y)=>x-y);return a.length?a.map(f=>[String(f),f.toLocaleString()+' บาท']):null}
   if((e.id=='nat'||e.id=='place'||e.id=='charge'||e.id=='rel')&&e.list&&e.closest('#f'))return[...e.list.options].map(o=>[o.value,o.value]).filter(x=>x[0])}
  return null};
 const show=el=>{clearTimeout(T);if(cur===el&&!P.hidden)return;const o=cfg(el);if(!o)return;cur=el;OP=o;const r=el.getBoundingClientRect(),v=el.value;
  const mu=el.id=='charge'||el.id=='rel'||el.id=='joint',have=mu?v.split(/[,，]/).map(x=>ck(x.trim())).filter(Boolean):[];P.innerHTML=o.map(([val,t],i)=>`<button type="button" data-i="${i}" class="${(mu?have.includes(ck(val)):val===v)?'on':''}">${esc(t)}</button>`).join('');P.hidden=false;
  const h=Math.min(P.scrollHeight,280),below=innerHeight-r.bottom,up=below<h+12&&r.top>below;P.style.minWidth=Math.max(r.width,110)+'px';P.style.maxHeight=Math.min(280,Math.max(120,(up?r.top:below)-12))+'px';
  P.style.left=Math.max(4,Math.min(r.left,innerWidth-P.offsetWidth-4))+'px';P.style.top=(up?Math.max(4,r.top-P.offsetHeight):r.bottom)+'px';const on=P.querySelector('.on');if(on)P.scrollTop=Math.max(0,on.offsetTop-60)};
 const isT=e=>e&&(e.tagName=='SELECT'||e.tagName=='INPUT')&&cfg(e);
 /* v219 เปิดตัวเลือกเมื่อ "คลิก" เท่านั้น (ไม่เด้งตอนเอาเมาส์ชี้) — เลือกแล้วปิดเอง · คลิกช่องเดิมซ้ำ/คลิกที่อื่น/กด Esc เพื่อปิด */
 document.addEventListener('mousedown',e=>{const t=e.target;if(P.contains(t))return;if(e.button===0&&isT(t)){if(t.tagName=='SELECT')e.preventDefault();if(cur===t&&!P.hidden){hide();return}hide();show(t);if(t.tagName=='SELECT')try{t.focus({preventScroll:true})}catch(x){}return}hide()},true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!P.hidden)hide()},true);
 document.addEventListener('input',e=>{if(cur&&e.target===cur&&e.isTrusted)hide()},true);document.addEventListener('scroll',e=>{if(e.target!==P&&!P.contains(e.target))hide()},true);addEventListener('resize',hide);
 P.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||!cur)return;const el=cur,o=OP[+b.dataset.i];if(!o)return;hide();if(el.id=='charge'||el.id=='rel'||el.id=='joint'){const L=el.value.split(/[,，]/).map(x=>x.trim()).filter(Boolean),k=ck(o[0]),ix=L.findIndex(x=>ck(x)==k);if(ix>=0)L.splice(ix,1);else L.push(o[0]);el.value=L.join(', ')}else el.value=o[0];el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}))});
})();
// cyber reticle on click (compositor-only animation)
(()=>{const SEL='button,a,canvas,select,[data-kpi],[data-team],[data-k],[data-v],[data-t],.rk span,.dr,#tb tbody tr,.seg button,.chip,label';
 const W=document.createElement('div');W.className='rpl';W.innerHTML='<div class="rw">'+'<svg viewBox="-50 -50 100 100"><g fill="none" stroke="rgba(34,211,238,.28)" stroke-width="6"><circle r="40" stroke-dasharray="46 17"/><path d="M-48 0H-27M27 0H48M0 -48V-27M0 27V48"/></g><g fill="none" stroke="#22d3ee" stroke-width="2.4"><circle r="40" stroke-dasharray="46 17"/></g><circle r="22" fill="none" stroke="rgba(103,232,249,.85)" stroke-width="1.3"/><path d="M-48 0H-27M27 0H48M0 -48V-27M0 27V48" stroke="#67e8f9" stroke-width="2" stroke-linecap="round"/><path d="M15.6 -15.6 19 -19M-15.6 -15.6-19 -19M15.6 15.6 19 19M-15.6 15.6-19 19" stroke="rgba(103,232,249,.7)" stroke-width="1.2"/><circle r="8" fill="none" stroke="#ff3b5c" stroke-width="1.4"/><circle r="5" fill="rgba(255,59,92,.3)"/><circle r="2.6" fill="#ff5470"/></svg>'+'</div><i class="pw"></i>';document.body.appendChild(W);
 const R=W.firstChild,P=W.lastChild,ok=!!R.animate;
 document.addEventListener('pointerdown',e=>{if(e.button||!ok)return;const t=e.target.closest&&e.target.closest(SEL);if(!t||t.closest('input,textarea'))return;
  W.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;R.getAnimations().forEach(a=>a.cancel());P.getAnimations().forEach(a=>a.cancel());
  R.animate([{transform:'scale(1.7) rotate(-75deg)',opacity:0,easing:'cubic-bezier(.2,.8,.3,1)'},{transform:'scale(1) rotate(0deg)',opacity:1,offset:.5,easing:'ease-in'},{transform:'scale(.95) rotate(6deg)',opacity:0}],{duration:300});
  P.animate([{transform:'scale(.25)',opacity:0},{transform:'scale(.3)',opacity:1,offset:.45,easing:'cubic-bezier(.2,.7,.3,1)'},{transform:'scale(1.5)',opacity:0}],{duration:300})},{passive:true})})();

/* พรีเซ็นท์ 2 จอ: หน้าต่างที่ 2 แสดงแดชบอร์ดล้วน หน้านี้ใช้ควบคุม — ซิงค์ผ่าน postMessage */
let scrW=null,scrOK=false,scrSig='',scrHB=0;
function scrState(){return{tm3:'state',D,FS,CMP,CMA,CMB,AIS,TMODE,RVMODE,RV:RVMODE&&!IOMODE?RV:null,RVT,RVF,RVAI,RVN,IOMODE,IOR:IOMODE?IOR:null,IOT,IOF,IOAI,ION}}
function scrSend(force){if(!scrW||scrW.closed||!scrOK)return;const sg=JSON.stringify([FS,CMP,CMA,CMB,AIS.key,(AIS.lines||[]).length,D.length,TMODE,RVMODE,RVMODE?RVF:0,RVMODE?RV.length:0,RVMODE?RVT:0,RVAI&&RVAI.key,RVN,IOMODE,IOMODE?IOF:0,IOMODE?IOR.length:0,IOMODE?IOT:0,IOAI&&IOAI.key,ION])+'|'+DVER;if(!force&&sg===scrSig)return;scrSig=sg;try{scrW.postMessage(scrState(),'*')}catch(e){}}
let scrT0=0;function scrUi(){const b=$('p2btn');if(!b)return;const on=scrW&&!scrW.closed&&scrOK;b.classList.toggle('live',!!on);if(on&&!scrT0)scrT0=Date.now();if(!on)scrT0=0;const t=scrT0?Math.floor((Date.now()-scrT0)/1e3):0,mm=String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');b.querySelector('span').textContent=on?'จบการนำเสนอ · '+mm:'พรีเซ็นท์ 2 จอ'}
async function scrPlace(w){let T=null;try{if(window.getScreenDetails){const d=await getScreenDetails(),c=d.currentScreen,o=d.screens.find(x=>x!==c&&(x.left!==c.left||x.top!==c.top));if(o)T={x:o.availLeft,y:o.availTop,w:o.availWidth,h:o.availHeight}}}catch(e){}
 if(!T){try{if(screen.isExtended)T={x:(screen.availLeft||0)+screen.availWidth,y:screen.availTop||0,w:screen.availWidth,h:screen.availHeight}}catch(e){}}
 if(!T){try{T={x:(screen.availLeft||0),y:(screen.availTop||0),w:screen.availWidth,h:screen.availHeight}}catch(e){}}
 if(T&&w&&!w.closed){try{w.moveTo(T.x,T.y);w.resizeTo(T.w,T.h)}catch(e){}}}
if(!SCR){
 $('p2btn').onclick=()=>{if(scrW&&!scrW.closed){try{scrW.close()}catch(e){}scrW=null;scrOK=false;scrUi();return}
  let w=null;try{w=window.open('','tm3screen','popup=yes,width=1280,height=760')}catch(e){}
  if(!w){uiAlert('เบราว์เซอร์ไม่อนุญาตให้เปิดหน้าต่างที่ 2 (ป็อปอัพถูกบล็อก)\nกรุณาอนุญาตป็อปอัพของหน้านี้ที่แถบที่อยู่ แล้วกดปุ่มอีกครั้ง\nหรือใช้โหมด "นำเสนอ" เต็มจอแบบเดิม (F12)',false);return}
  scrW=w;scrOK=false;scrSig='';scrT0=0;scrPlace(w);try{w.document.open();w.document.write(SRC0);w.document.close()}catch(e){try{w.close()}catch(x){}scrW=null;uiAlert('เปิดหน้าต่างที่ 2 ไม่สำเร็จในสภาพแวดล้อมนี้ — ใช้โหมด "นำเสนอ" เต็มจอแบบเดิม (F12)',false);return}
  try{document.querySelector('[data-t=s]').click()}catch(e){}
  setTimeout(()=>{if(scrW&&!scrOK)gsToast('⚠️ จอที่ 2 ยังไม่เชื่อมต่อ — รอสักครู่หรือกดปิดแล้วเปิดใหม่',false)},4000)};
 addEventListener('message',e=>{if(!scrW||e.source!==scrW)return;const m=e.data;if(!m||!m.tm3)return;if(m.tm3==='hello'){scrOK=true;scrHB=Date.now();scrSend(true);scrUi()}else if(m.tm3==='hb'){scrHB=Date.now();if(!scrOK){scrOK=true;scrSend(true)}scrUi()}else if(m.tm3==='bye'){scrOK=false;scrUi()}});
 setInterval(()=>{scrUi();if(scrW&&scrW.closed){scrW=null;scrOK=false;scrUi();return}if(scrW&&scrOK&&Date.now()-scrHB>6000){scrOK=false;scrUi()}scrSend(false)},500);
 addEventListener('beforeunload',()=>{try{if(scrW)scrW.close()}catch(e){}});
}else{
 document.body.classList.add('present','scr');PRES=true;document.title='จอนำเสนอ — '+document.title;
 setTimeout(()=>{try{document.querySelector('[data-t=s]').click()}catch(e){}pFit();chRes();try{opener.postMessage({tm3:'hello'},'*')}catch(e){}},300);
 setInterval(()=>{try{opener.postMessage({tm3:'hb'},'*')}catch(e){}},2000);
 addEventListener('beforeunload',()=>{try{opener.postMessage({tm3:'bye'},'*')}catch(e){}});
 addEventListener('message',e=>{if(e.source!==opener)return;const m=e.data;if(!m||m.tm3!=='state')return;D=m.D||[];Object.keys(FS).forEach(k=>delete FS[k]);Object.assign(FS,m.FS||{});CMP=m.CMP;CMA=m.CMA;CMB=m.CMB;AIS=m.AIS||{key:'',lines:null};try{if(m.IOMODE){if(Array.isArray(m.IOR))IOR=m.IOR;IOT=m.IOT||0;IOF=m.IOF||{};IOAI=m.IOAI||null;ION=m.ION||100;IOERR='';if(TMODE)teamSet('',true);if(!IOMODE)enterIO();else ioRender()}else if(m.RVMODE){if(IOMODE)exitIO(true);if(Array.isArray(m.RV))RV=m.RV;RVT=m.RVT||0;RVF=m.RVF||{};RVAI=m.RVAI||null;RVN=m.RVN||100;RVERR='';if(TMODE)teamSet('',true);if(!RVMODE)enterRV()}else{if(IOMODE)exitIO();else if(RVMODE)exitRV();if((m.TMODE||'')!==TMODE)teamSet(m.TMODE||'',true)}}catch(x){console.error(x)}try{render()}catch(x){console.error(x)}setTimeout(()=>{pFit();chRes()},80)});
 const h=$('scrHint');h.onclick=()=>{try{document.documentElement.requestFullscreen()}catch(e){}h.classList.add('off')};setTimeout(()=>h.classList.add('off'),12000);
 document.addEventListener('contextmenu',e=>e.preventDefault());
 const goFS=()=>{try{if(!document.fullscreenElement)document.documentElement.requestFullscreen().then(()=>h.classList.add('off')).catch(()=>{})}catch(e){}};
 try{document.documentElement.requestFullscreen().then(()=>h.classList.add('off')).catch(()=>{})}catch(e){}
 addEventListener('pointerdown',goFS,{once:true});addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.fullscreenElement)window.close();else if(!document.fullscreenElement&&(e.key==='f'||e.key==='F'||e.key==='Enter'))goFS()});
}

/* ===== ONLINE / REALTIME / ROLES ===== */
(async()=>{
 if(SCR||window.__TV)return;
 const $$=s=>document.querySelector(s),LAB=['ผู้ดู','ผู้ร่วมแก้ไข','ผู้แก้ไข (ผู้ดูแล)'],URL0='https://claude.ai/artifact/CvvL8fLzYshJ9kQB2kntEe';
 const startGs=()=>{if(NOGS())return;setTimeout(()=>{if(!NOGS()&&$('gsync'))gsSync(true)},1500);let au=0;try{au=+(localStorage.getItem('tm3_gsauto')||0)}catch(e){}if(au)gsAuto(au)};
 const esc2=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 let db=null,user=null,room=null;
 try{if(typeof claude!=='undefined'){[db,user]=await Promise.all([claude.use('db'),claude.use('user')])}}catch(e){}
 const btn=$('onbtn');
 if(!db||!user){window.__ONL=null;startGs();if(btn){btn.querySelector('small').textContent='ออฟไลน์';btn.onclick=()=>panel()}return panelInit()}
 let own=false,adm=false,wr=null;
 try{[own,adm,wr]=await Promise.all([user.isOwner(),user.canEdit(),user.can('data.write')])}catch(e){}
 const role=(own||adm)?2:(wr===false?0:1);
 const ON=window.__ONL={role,owner:!!own,exportMin:'view',ready:false,inited:false,peers:[],pend:0,err:''};
 const cl=document.body.classList;cl.add('onl','role-'+['view','edit','admin'][role]);if(role<2)cl.add('nonadm');if(role===0){cl.add('dashonly','blurpii');document.documentElement.classList.add('dashonly')}
 const NEED={view:0,edit:1,admin:2};
 const canExp=()=>role>=(NEED[ON.exportMin]||0);
 const setExpCls=()=>cl.toggle('noexp',!canExp());
 window.__expGate=()=>{if(canExp())return true;gsToast('🚫 สิทธิ์ของคุณ ('+LAB[role]+') ยังไม่สามารถส่งออกไฟล์ได้ — ติดต่อผู้ดูแลเพื่อขอสิทธิ์',false);return false};
 const sj=o=>JSON.stringify(o,(k,v)=>v&&typeof v==='object'&&!Array.isArray(v)?Object.keys(v).sort().reduce((a,x)=>(a[x]=v[x],a),{}):v);
 const REM=new Map(),RREC=new Map();let ST={exportMin:'view',inited:false};
 const stat=()=>{if(!btn)return;const s=btn.querySelector('small');s.textContent=ON.err?'⚠️ '+ON.err:ON.pend?'⏳ ซิงค์ '+ON.pend:ON.ready?('🟢 '+LAB[role].split(' ')[0]+(ON.peers.length>1?' · '+ON.peers.length+' คนออนไลน์':'')):'กำลังเชื่อมต่อ…';btn.classList.toggle('bad',!!ON.err);panelRefresh()};
 let rT=0;const rr=()=>{clearTimeout(rT);rT=setTimeout(()=>{DVER++;try{render()}catch(e){console.error(e)}if(role>=2)try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}},120)};
 const saveLoc=()=>{if(role>=2)try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}};
 const replaceAll=()=>{if(role>=2&&D.length)vSnap('อัตโนมัติ — ก่อนซิงค์กับระบบออนไลน์',D);D=Array.from(RREC.values());rr()};
 // ---- settings
 try{const s=await db.doc('settings/app').get();if(s.exists)ST=Object.assign(ST,s.data())}catch(e){console.warn('settings get',e)}
 ON.exportMin=ST.exportMin||'view';ON.inited=!!ST.inited;setExpCls();
 db.doc('settings/app').onSnapshot(s=>{if(s.exists){ST=Object.assign(ST,s.data());ON.exportMin=ST.exportMin||'view';const wasLive=ON.live;ON.live=ST.liveView!==false;setExpCls();if(!wasLive&&ON.live&&ON.follow&&ON.lastView)applyView(ON.lastView);stat()}},e=>console.warn(e));
 // ---- arrests subscribe
 const banner=()=>{let b=$('onban');const need=role>=2&&ON.ready&&!ON.inited&&D.length;if(!need){b&&b.remove();return}
  if(!b){b=document.createElement('div');b.id='onban';b.className='onban';document.body.prepend(b)}
  b.innerHTML='<span>🌐 ยังไม่มีข้อมูลออนไลน์ — มีข้อมูลในเครื่องนี้ <b>'+D.length+'</b> แถว</span><button type="button" class="btn pr sm" id="onpub">เผยแพร่ขึ้นออนไลน์ให้ทุกคนเห็น</button>';$('onpub').onclick=publish};
 async function publish(){if(role<2)return;const ok=await uiConfirm('เผยแพร่ข้อมูลขึ้นออนไลน์','จะส่งข้อมูล '+D.length+' แถวจากเครื่องนี้ขึ้นระบบออนไลน์ ผู้ที่คุณแชร์ให้จะเห็นและ (ตามสิทธิ์) แก้ไขข้อมูลชุดนี้ได้\n\nข้อมูลมีรายชื่อผู้ต้องหา ควรแชร์เฉพาะผู้ที่เกี่ยวข้อง','เผยแพร่','ยกเลิก');if(!ok)return;
  ON.inited=true;try{await db.doc('settings/app').set(Object.assign({},ST,{inited:true,exportMin:ON.exportMin,t:Date.now()}))}catch(e){ON.inited=false;gsToast('เผยแพร่ไม่สำเร็จ: '+(e&&e.code||e),false);return}
  banner();await flush(true);gsToast('✅ เผยแพร่ข้อมูลออนไลน์แล้ว',true)}
 const incremental=ch=>{const idx=new Map(D.map((r,i)=>[String(r.id),i]));let chg=false;const rm=new Set();
  ch.forEach(c=>{const id=c.doc.id;if(c.type==='removed'){if(idx.has(id)){rm.add(id);chg=true}return}
   const d=c.doc.data(),s=sj(d);if(idx.has(id)){const cur=D[idx.get(id)];const cs=sj(cur);if(cs===s)return;if(cs!==c.prev){/*local edit pending*/ if(pendDirty(id,cur))return}D[idx.get(id)]=d;chg=true}else{D.push(d);idx.set(id,D.length-1);chg=true}});
  if(rm.size)D=D.filter(r=>!rm.has(String(r.id)));if(chg)rr()};
 const pendDirty=(id,cur)=>REM.get(id)!==sj(cur);
 db.collection('arrests').onSnapshot(snap=>{
  const first=!ON.ready,ch=snap.docChanges().map(c=>{const id=c.doc.id,old=REM.get(id);return {type:c.type,doc:c.doc,prev:old}});
  const dirty=new Set(D.filter(r=>REM.get(String(r.id))!==sj(r)).map(r=>String(r.id)));
  ch.forEach(c=>{const id=c.doc.id;if(c.type==='removed'){REM.delete(id);RREC.delete(id)}else{const d=c.doc.data();RREC.set(id,d);REM.set(id,sj(d))}});
  // after REM updated, "dirty" must be computed from before: re-add protection
  if(!ON.inited&&REM.size>0){ON.inited=true;ON.ready=true;replaceAll()}
  else if(first){ON.ready=true;if(ST.inited||REM.size>0){ON.inited=true;replaceAll()}else if(role<2){D=[];rr()}}
  else if(ON.inited){const idx=new Map(D.map((r,i)=>[String(r.id),i]));let chg=false;const rmv=new Set();
   ch.forEach(c=>{const id=c.doc.id;if(c.type==='removed'){if(idx.has(id)){rmv.add(id);chg=true}return}
    const d=c.doc.data();if(dirty.has(id))return;if(idx.has(id)){if(sj(D[idx.get(id)])===sj(d))return;D[idx.get(id)]=d;chg=true}else{D.push(d);idx.set(id,D.length-1);chg=true}});
   if(rmv.size)D=D.filter(r=>!rmv.has(String(r.id)));if(chg){gsPulse();rr()}}
  ON.ready=true;banner();stat();
  if(first){if($('msg'))$('msg').textContent='🌐 ข้อมูลออนไลน์แบบเรียลไทม์ — การเปลี่ยนแปลงของทุกคนจะปรากฏทันที';if(role===0){const b=$$('[data-t="s"]');b&&b.click()}startGs()}
 },e=>{ON.err=(e&&e.code==='revoked')?'สิทธิ์ถูกยกเลิก':'เชื่อมต่อไม่ได้';stat()});
 let pulseT=0;function gsPulse(){if(!btn)return;btn.classList.add('pulse');clearTimeout(pulseT);pulseT=setTimeout(()=>btn.classList.remove('pulse'),1200)}
 // ---- flush local -> remote
 let fT=0,fRun=false,fAgain=false;
 window.__onP=()=>{banner();if(ON.ready&&ON.inited&&role>=1){clearTimeout(fT);fT=setTimeout(()=>flush(),450)}};
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 async function op1(o){for(let t=0;;t++){try{if(o.del)await db.doc('arrests/'+o.id).delete();else await db.doc('arrests/'+o.id).set(o.r);return}catch(e){const c=e&&e.code;if((c==='resource_exhausted'&&t<5)||(c==='unavailable'&&t<1)){await wait(700*(t+1)+Math.random()*400);continue}throw e}}}
 async function flush(force){
  if(fRun){fAgain=true;return}fRun=true;
  try{do{fAgain=false;
   D.forEach(r=>{if(r.id==null||r.id==='')r.id='x'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)});
   const cur=new Map();D.forEach(r=>cur.set(String(r.id),r));const ops=[];
   cur.forEach((r,id)=>{const s=sj(r);if(REM.get(id)!==s)ops.push({id,r,s})});
   REM.forEach((s,id)=>{if(!cur.has(id))ops.push({id,del:1})});
   if(!ops.length)continue;
   const dels=ops.filter(o=>o.del).length;
   if(dels>=10&&dels>REM.size*.4&&!force){const ok=await uiConfirm('ยืนยันการลบจำนวนมาก','การเปลี่ยนแปลงนี้จะลบข้อมูลออนไลน์ '+dels+' แถว (จากทั้งหมด '+REM.size+') ของทุกคน\nต้องการดำเนินการต่อหรือไม่?','ลบออนไลน์','ยกเลิก (กู้คืนจากออนไลน์)',true);if(!ok){D=Array.from(RREC.values());rr();continue}}
   ON.pend=ops.length;stat();let done=0,fail=null;const q=ops.slice();
   await Promise.all(Array.from({length:Math.min(5,q.length)},async()=>{while(q.length){const o=q.shift();try{await op1(o);if(o.del){REM.delete(o.id);RREC.delete(o.id)}else{REM.set(o.id,o.s);RREC.set(o.id,JSON.parse(JSON.stringify(o.r)))}}catch(e){fail=fail||e}done++;ON.pend=ops.length-done;if(done%5===0||!q.length)stat()}}));
   ON.pend=0;
   if(fail){const c=fail&&fail.code;ON.err=c==='quota_exceeded'?'พื้นที่เก็บข้อมูลเต็ม':'บันทึกออนไลน์ไม่สำเร็จ';gsToast('⚠️ '+(c==='quota_exceeded'?'พื้นที่เก็บข้อมูลออนไลน์เต็ม':'บันทึกขึ้นระบบออนไลน์ไม่สำเร็จ (อาจไม่มีสิทธิ์แก้ไข หรือสัญญาณขัดข้อง)')+' — ระบบจะโหลดข้อมูลล่าสุดจากออนไลน์กลับมา',false);D=Array.from(RREC.values());rr();setTimeout(()=>{ON.err='';stat()},6000)}else ON.err=''
  }while(fAgain)}finally{fRun=false;ON.pend=0;stat()}}
 ON.syncOK=()=>{if(!ON.ready||!ON.inited)return null;if(ON.pend||fRun)return null;if(D.length!==REM.size)return false;for(const r of D){if(REM.get(String(r.id))!==sj(r))return false}return true};
 db.doc('settings/check').onSnapshot(s=>{if(s.exists&&window.__dsSetSheet)window.__dsSetSheet(s.data())},()=>{});
 window.__dsWrite=d=>{if(role>=2)db.doc('settings/check').set(d).catch(()=>{})};
 // ---- room presence
 try{room=await claude.use('room');if(room){room.presence({r:role});room.onPeers(ch=>{ON.peers=Array.from(ch.peers||[]);stat()})}}catch(e){}
 // ---- export-level save
 async function saveExp(v){if(role<2)return;const o=ON.exportMin;ON.exportMin=v;setExpCls();try{await db.doc('settings/app').set(Object.assign({},ST,{exportMin:v,inited:ON.inited,t:Date.now()}));ST.exportMin=v;gsToast('✅ บันทึกสิทธิ์การส่งออกแล้ว',true)}catch(e){ON.exportMin=o;setExpCls();gsToast('บันทึกไม่สำเร็จ',false)}panelRefresh()}
 async function saveLive(v){if(role<2)return;const o=ON.live;ON.live=v;try{await db.doc('settings/app').set(Object.assign({},ST,{liveView:v,exportMin:ON.exportMin,inited:ON.inited,t:Date.now()}));ST.liveView=v}catch(e){ON.live=o;gsToast('บันทึกไม่สำเร็จ',false)}panelRefresh()}

 // ---- live view (filters) sync
 let FOL=null;try{FOL=localStorage.getItem('tm3_follow')}catch(e){}
 ON.follow=FOL==null?role===0:FOL==='1';ON.live=ST.liveView!==false;ON.lastView=null;
 let vSig='',vT=0;const vSigNow=()=>JSON.stringify([FS,CMP,CMA,CMB]);
 function applyView(m){if(!m||!m.FS)return;try{Object.keys(FS).forEach(k=>delete FS[k]);Object.assign(FS,m.FS);CMP=m.CMP;CMA=m.CMA;CMB=m.CMB;vSig=vSigNow();render();gsPulse()}catch(e){console.error(e)}}
 db.doc('settings/view').onSnapshot(s=>{if(!s.exists||role>=2)return;const d=s.data();ON.lastView=d.v;if(ON.follow&&ON.live)applyView(d.v)},e=>console.warn(e));
 if(role>=2)setInterval(()=>{if(!ON.live||!ON.ready)return;const g=vSigNow();if(g===vSig)return;vSig=g;clearTimeout(vT);vT=setTimeout(()=>{try{db.doc('settings/view').set({v:JSON.parse(JSON.stringify({FS,CMP,CMA,CMB})),t:Date.now()}).catch(()=>{})}catch(e){}},300)},500);
 // ---- panel
 function panelInit(){}
 function panelRefresh(){const P=$('onpanel');if(!P||P.classList.contains('hide'))return;const h=panelHtml();if(h===P._h)return;if(P.contains(document.activeElement)&&document.activeElement.tagName==='SELECT'){clearTimeout(P._t);P._t=setTimeout(panelRefresh,800);return}P._h=h;P.querySelector('.onbody').innerHTML=h;bindPanel()}
 const rowHtml=(t,a,b,c)=>'<tr><td>'+t+'</td><td>'+a+'</td><td>'+b+'</td><td>'+c+'</td></tr>';
 const TVURL='https://claude.ai/artifact/2j8Ruw9JeYPGUGGy3UoJ7W';
 const r5=(t,a,b,c,d)=>'<tr><td>'+t+'</td><td class="tvc">'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td></tr>';
 function panelHtml(){const O=window.__ONL;
  const dsx=(typeof DS!=='undefined')?DS:null,dst=dsx&&dsx.state,dsl=dst==='ok'?'🟢 ตรงกันทั้งหมด':dst==='bad'?'🔴 ไม่ตรงกัน':'🟡 กำลังตรวจสอบ',dsT=dsx&&dsx.sheet?new Date(dsx.sheet.t).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'})+' น.':'ยังไม่ได้ตรวจ';
  const nR=D.reduce((t,r)=>t+(+r.num||0),0);
  if(!O)return '<p class="note">ตอนนี้เปิดแบบ <b>ออฟไลน์</b> (ข้อมูลเก็บในเบราว์เซอร์เครื่องนี้) — โหมดออนไลน์และระบบสิทธิ์จะทำงานเมื่อเปิดผ่านลิงก์ของ claude.ai ขณะลงชื่อเข้าใช้ และเจ้าของแชร์ลิงก์ให้แล้ว</p><div class="onstat"><div><small>ข้อมูล</small><b>'+D.length.toLocaleString()+' แถว · '+nR.toLocaleString()+' ราย</b></div><div><small>ตรงกับ Google Sheets</small><b>'+dsl+'</b><em>ตรวจล่าสุด '+dsT+'</em></div></div>';
  const exp=O.exportMin,mine=O.owner?'เจ้าของ':LAB[O.role];
  const pc=[0,0,0];O.peers.forEach(p=>{const r=p.presence&&+p.presence.r;if(r>=0&&r<=2)pc[r]++});
  let h='<div class="onstat"><div><small>สถานะ</small><b>'+(O.ready?'🟢 ออนไลน์ เรียลไทม์':'⏳ กำลังเชื่อมต่อ…')+'</b></div><div><small>สิทธิ์ของคุณ</small><b>'+esc2(mine)+'</b></div><div><small>ออนไลน์ตอนนี้</small><b>'+Math.max(O.peers.length,1)+' คน</b>'+(O.peers.length>1?'<em>ดู '+pc[0]+' · แก้ไข '+pc[1]+' · ดูแล '+pc[2]+'</em>':'')+'</div><div><small>ข้อมูล</small><b>'+D.length.toLocaleString()+' แถว · '+nR.toLocaleString()+' ราย</b></div><div><small>ตรงกับ Google Sheets</small><b>'+dsl+'</b><em>ตรวจล่าสุด '+dsT+'</em></div></div>';
  const ex=n=>n>=(NEED[exp]||0)?'✅':'—';
  h+='<h4>สิ่งที่แต่ละกลุ่มทำได้</h4><div class="ontw"><table class="ontb"><thead><tr><th></th><th class="tvc">ผู้ชมผ่านลิงก์<small>ไม่ต้องล็อกอิน</small></th><th>ผู้ดู<small>Viewer / Commenter</small></th><th>ผู้ร่วมแก้ไข<small>Contributor</small></th><th>ผู้แก้ไข<small>Editor / เจ้าของ</small></th></tr></thead><tbody>'+
   r5('ดูแดชบอร์ด','✅ <small>ภาพ ณ เวลาเผยแพร่</small>','✅','✅','✅')+
   r5('ดูตารางข้อมูล','—','✅','✅','✅')+
   r5('ข้อมูลอัปเดตเรียลไทม์','—','✅','✅','✅')+
   r5('กรองข้อมูล / เลือกช่วงเวลา','— <small>กดอะไรไม่ได้</small>','✅','✅','✅')+
   r5('ชื่อผู้ต้องหา / พาสปอร์ต','— <small>ไม่แสดงชื่อ ไม่มีข้อมูลจริงในหน้า</small>','🙈 เบลอ · 🔓 เลิกเบลอได้','🙈 เบลอ · 🔓 เลิกเบลอได้','🙈 เบลอ · 🔓 เลิกเบลอได้')+
   r5('เพิ่ม · แก้ไขข้อมูล','—','—','✅ <small>ส่งขึ้นชีตเมื่อผู้ดูแลซิงค์</small>','✅')+
   r5('ลบข้อมูล','—','—','⚠️ <small>ต้องลบในชีตด้วย</small>','✅')+
   r5('ส่งออกไฟล์ / ภาพนำเสนอ / สำรอง','—',ex(0),ex(1),'✅')+
   r5('ซิงค์ Google Sheets · นำเข้า · ถังสำรอง · ตั้งค่าสิทธิ์','—','—','—','✅')+'</tbody></table></div>';
  h+='<h4>ใครส่งออกไฟล์ได้</h4><div class="onrow"><select id="onexp"'+(O.role<2?' disabled':'')+'><option value="view">ทุกคนที่ล็อกอิน</option><option value="edit">ผู้ร่วมแก้ไขขึ้นไป</option><option value="admin">เฉพาะผู้แก้ไข / เจ้าของ</option></select>'+(O.role<2?'<small>เฉพาะผู้แก้ไข/เจ้าของเปลี่ยนได้</small>':'')+'</div>';
  h+='<h4>การถ่ายทอดตัวกรองแบบเรียลไทม์</h4><div class="onrow">'+(O.role>=2?'<label><input type="checkbox" id="onlive"'+(O.live?' checked':'')+'> ถ่ายทอดตัวกรอง/ช่วงเวลาที่ผู้ดูแลเลือก ไปยังทุกหน้าจอที่ล็อกอิน</label>':'<label><input type="checkbox" id="onfol"'+(O.follow?' checked':'')+(O.live?'':' disabled')+'> ตามตัวกรองของผู้ดูแลแบบเรียลไทม์'+(O.live?'':' (ผู้ดูแลปิดไว้)')+'</label>')+'</div>';
  h+='<h4>ลำดับข้อมูล</h4><div class="onflow"><span>📗 Google Sheets<small>ต้นฉบับ</small></span><b>→</b><span>🛡 ผู้ดูแลซิงค์<small>ตอนเปิดแอป + ทุก 3 นาที</small></span><b>→</b><span>🌐 ระบบออนไลน์</span><b>→</b><span>👥 ทุกหน้าจอที่ล็อกอิน<small>ตาราง · หน้าบันทึก · แดชบอร์ด</small></span></div><p class="note">ไฟสถานะในแถบเมนูบน: 🟢 ตรงกันทั้งหมด · 🟡 กำลังตรวจ/ซิงค์ · 🔴 กะพริบ = ไม่ตรงกัน (กดที่ไฟเพื่อดูรายละเอียด)</p>';
  h+='<h4>กก.สส.บก.ตม.3 โหมดรับชม (ไม่ต้องล็อกอิน สำหรับผู้บังคับบัญชา)</h4><ul class="onhow"><li>ดูได้อย่างเดียว กดอะไรไม่ได้ แสดงเฉพาะแดชบอร์ด ไม่มีตารางข้อมูลและไม่มีชื่อ/พาสปอร์ต — ไม่มีข้อมูลจริงอยู่ในโค้ดของหน้า</li><li>ข้อมูลเป็นภาพ ณ เวลาที่เผยแพร่ — ระบบอัปเดตให้อัตโนมัติทุกชั่วโมง หรือกดปุ่มด้านล่างเพื่อสั่งอัปเดตทันที</li><li>เจ้าของต้องเปิดการแชร์ของหน้านั้นเป็น "ทุกคนที่มีลิงก์" เอง</li></ul><div class="onrow"><button type="button" class="btn sm" id="oncopytv">📋 คัดลอกลิงก์หน้ารับชม</button>'+(O.role>=2&&!window.__TV?'<button type="button" class="btn sm pr" id="ontvup">🔄 อัปเดตหน้ารับชมตอนนี้</button>':'')+'</div><p class="note" id="ontvst"></p>';
  h+='<h4>เชิญคนเข้าใช้ และกำหนดสิทธิ์รายบุคคล</h4><ol class="onhow"><li>กดปุ่ม <b>แชร์ (Share)</b> ของ claude.ai ที่หน้าอาร์ติแฟกต์นี้</li><li>เพิ่มอีเมลผู้ที่จะเชิญ แล้วเลือกระดับ: <b>Viewer / Commenter</b> = ดูและกรอง · <b>Contributor</b> = แก้ไขข้อมูล · <b>Editor</b> = ผู้ดูแลเต็มสิทธิ์</li><li>ผู้ถูกเชิญต้องลงชื่อเข้าใช้ claude.ai จึงจะกรองข้อมูลและเห็นข้อมูลเรียลไทม์</li></ol><div class="onrow"><button type="button" class="btn sm" id="oncopy">📋 คัดลอกลิงก์แอป (ต้องล็อกอิน)</button></div>'+
   '<p class="note">⚠️ ข้อมูลมีชื่อผู้ต้องหา — แชร์เฉพาะผู้ที่เกี่ยวข้อง · สิทธิ์ดู/แก้ไขถูกบังคับที่เซิร์ฟเวอร์ · สิทธิ์ส่งออกและการเบลอเป็นการควบคุมในแอป (ผู้ที่ล็อกอินและมีสิทธิ์ดูยังจับภาพหน้าจอได้)</p>';
  if(O.role>=2&&!O.inited&&D.length)h+='<div class="onrow"><button type="button" class="btn pr" id="onpub2">🌐 เผยแพร่ข้อมูลในเครื่อง ('+D.length+' แถว) ขึ้นออนไลน์</button></div>';
  return h}
 function bindPanel(){const P=$('onpanel');if(!P)return;const s=$('onexp');if(s){s.value=window.__ONL.exportMin;s.onchange=()=>saveExp(s.value)}const lv=$('onlive');if(lv)lv.onchange=()=>saveLive(lv.checked);const fo=$('onfol');if(fo)fo.onchange=()=>{ON.follow=fo.checked;try{localStorage.setItem('tm3_follow',fo.checked?'1':'0')}catch(e){}if(ON.follow&&ON.live&&ON.lastView)applyView(ON.lastView)};const c=$('oncopy');if(c)c.onclick=async()=>{try{await navigator.clipboard.writeText(URL0);gsToast('คัดลอกลิงก์แล้ว',true)}catch(e){uiAlert(URL0)}};const ct=$('oncopytv');if(ct)ct.onclick=async()=>{try{await navigator.clipboard.writeText(TVURL);gsToast('คัดลอกลิงก์หน้ารับชมแล้ว',true)}catch(e){uiAlert(TVURL)}};const p=$('onpub2');if(p)p.onclick=publish;const tu=$('ontvup');if(tu){tvUpState();tu.onclick=tvUpdate}}
 const TVTRIG='trig_01VM3MDDhaE7kUjC3o3otd6p';
 function tvUpState(){const e=$('ontvst');if(!e)return;let t='';try{t=localStorage.getItem('tm3_tvfire')||''}catch(x){}e.innerHTML=t?'สั่งอัปเดตล่าสุด '+new Date(t).toLocaleTimeString('th-TH')+' น. · ใช้เวลาประมาณ 2–5 นาที แล้วรีเฟรชหน้ารับชม':'หน้ารับชมจะอัปเดตภายใน 2–5 นาทีหลังกดปุ่ม'}
 async function tvUpdate(){const b=$('ontvup');if(!b||b.disabled)return;b.disabled=true;const old=b.textContent;b.textContent='⏳ กำลังส่งคำสั่ง…';
  try{const mcp=await claude.use('mcp').catch(()=>null);if(!mcp)throw{code:'capability_disabled'};
   await mcp.callTool('Claude Code Remote','fire_trigger',{trigger_id:TVTRIG,text:'สั่งอัปเดตทันทีจากปุ่มในแอป ('+D.length+' แถวในเครื่องผู้สั่ง) — ให้ซิงค์ข้อมูลล่าสุดจากฐานข้อมูลแล้วเผยแพร่หน้ารับชมใหม่ทันที แม้ข้อมูลไม่เปลี่ยน'},{cache:false});
   try{localStorage.setItem('tm3_tvfire',new Date().toISOString())}catch(x){}tvUpState();gsToast('✅ ส่งคำสั่งอัปเดตหน้ารับชมแล้ว — จะเสร็จภายใน 2–5 นาที',true)}
  catch(e){gsToast('❌ ส่งคำสั่งไม่สำเร็จ'+(e&&e.code?' ('+esc(e.code)+')':'')+'<br><small>'+esc((e&&e.message)||'ต้องอนุญาตสิทธิ์ “Claude Code Remote” เมื่อมีหน้าต่างขอ หรือเปิดสิทธิ์ที่เมนู Permissions ของหน้านี้')+'</small>',false)}
  b.disabled=false;b.textContent=old}
 function panel(){let P=$('onpanel');if(!P){P=document.createElement('div');P.id='onpanel';P.className='onpanel hide';P.innerHTML='<div class="onbox"><div class="onhd"><b>🔐 สิทธิ์การใช้งาน &amp; ออนไลน์</b><button type="button" class="onx" aria-label="ปิด">✕</button></div><div class="onbody"></div></div>';document.body.appendChild(P);P.addEventListener('click',e=>{if(e.target===P||e.target.closest('.onx'))P.classList.add('hide')})}
  P.classList.remove('hide');P._h=panelHtml();P.querySelector('.onbody').innerHTML=P._h;bindPanel()}
 btn&&(btn.onclick=panel);window.__onPanel=panel;
 stat();
})();

/* ===== ENTRY-PAGE TABLE (mirror of #tb, realtime) ===== */
(()=>{const T=$('tb'),F=$('tbF'),C=$('cnt'),CF=$('cntF');if(!T||!F)return;
 try{[...document.styleSheets].forEach(ss=>{let rs;try{rs=ss.cssRules}catch(e){return}const add=(list,host)=>{[...list].forEach(r=>{if(r.cssRules&&r.media)add(r.cssRules,r);else if(r.selectorText&&/#tb(?![\w-])/.test(r.selectorText)){try{host.insertRule(r.cssText.replace(/#tb(?![\w-])/g,'#tbF'),host.cssRules.length)}catch(e){}}})};add(rs,ss)})}catch(e){}
 let q=0;const cp=()=>{q=0;if(CF&&C)CF.textContent=C.textContent;const f=$('f');if(f&&f.classList.contains('hide')){window.__tbfDirty=1;try{dsEval()}catch(e){}return}window.__tbfDirty=0;F.innerHTML=T.innerHTML;try{lazyBind(F,'tbFmore')}catch(e){}try{dsEval()}catch(e){}};document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{if(window.__tbfDirty)cp()},60)));const sch=()=>{clearTimeout(q);q=setTimeout(cp,140)};
 new MutationObserver(sch).observe(T,{childList:true,subtree:true,characterData:true});if(C)new MutationObserver(sch).observe(C,{childList:true,subtree:true,characterData:true});cp()})();

/* ===== DATA-CONSISTENCY STATUS (Google Sheets ↔ app ↔ online ↔ pages) ===== */
const DS={sheet:null,badSince:0,state:'',last:[],gsT:0};
function dsFP(a){const L=a.map(r=>[r.date,r.team,r.type,ck(r.name),ck(r.nat),ck(r.pp),ck(r.charge),+r.num||0,+r.cases||0,+r.fine||0].join('|')).sort();let h=2166136261;for(const s of L){for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}h^=10;h=Math.imul(h,16777619)}return{n:a.length,num:a.reduce((t,r)=>t+(+r.num||0),0),h:(h>>>0).toString(36)}}
function dsSheet(L){const fp=dsFP(L);DS.sheet={fp,t:Date.now()};if(window.__dsWrite)window.__dsWrite({fp,t:DS.sheet.t});dsEval()}
window.__dsSetSheet=d=>{if(d&&d.fp&&(!DS.sheet||d.t>=DS.sheet.t)){DS.sheet={fp:d.fp,t:d.t};dsEval()}};
function dsEval(){const el=$('dsync');if(!el||SCR||window.__TV)return;const C=[];const tm=t=>new Date(t).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'});
 const fd=(DS._c&&DS._c.D===D&&DS._c.v===DVER&&DS._c.n===D.length)?DS._c.f:(DS._c={D,v:DVER,n:D.length,f:dsFP(D.filter(r=>!r.gsSrc))}).f;
 if(!DS.sheet)C.push(['wait','Google Sheets ↔ แอป','ยังไม่ได้ตรวจเทียบกับชีต']);
 else{const s=DS.sheet.fp,ok=s.h===fd.h&&s.n===fd.n;const pend=D.filter(r=>r.pend).length;
  C.push([ok?'ok':'bad','Google Sheets ↔ แอป',ok?`ตรงกัน ${s.n.toLocaleString()} แถว / ${s.num.toLocaleString()} ราย (ตรวจ ${tm(DS.sheet.t)} น.)`:`ไม่ตรงกัน — ชีต ${s.n.toLocaleString()} แถว / ${s.num.toLocaleString()} ราย · แอป ${fd.n.toLocaleString()} แถว / ${fd.num.toLocaleString()} ราย`+(pend?` (รอส่งขึ้นชีต ${pend} รายการ)`:'')]);
  if(!ok&&!NOGS()&&Date.now()-DS.gsT>20000&&$('gsync')){DS.gsT=Date.now();try{gsSync(true)}catch(e){}}}
 const O=window.__ONL;if(O&&O.syncOK){const r=O.syncOK();C.push([r===null?'wait':r?'ok':'bad','ระบบออนไลน์ ↔ เครื่องนี้',r===null?'กำลังซิงค์…':r?'ตรงกัน (ทุกหน้าจอที่ล็อกอินเห็นชุดเดียวกัน)':'ข้อมูลในเครื่องยังไม่ตรงกับระบบออนไลน์'])}
 const T=$('tb'),F=$('tbF'),nT=T&&T.tBodies[0]?T.tBodies[0].rows.length:0,nF=F&&F.tBodies[0]?F.tBodies[0].rows.length:0;
 const kp=RVMODE?null:$('kp'),m=kp&&kp.textContent.match(/\d[\d,]*/),kv=m?+m[0].replace(/,/g,''):null,want=sm(rows());
 const pg=(nT===nF||window.__tbfDirty||nT<TBL.a.length||nF<TBL.a.length)&&(kv===null||kv===want);C.push([pg?'ok':'bad','หน้าบันทึกข้อมูล ↔ ตารางข้อมูล ↔ แดชบอร์ด',pg?`ใช้ข้อมูลชุดเดียวกัน (${D.length.toLocaleString()} แถว)`:`ไม่ตรงกัน — ตาราง ${nT} แถว · หน้าบันทึก ${nF} แถว · แดชบอร์ด ${kv} ราย (ควรเป็น ${want})`]);
 DS.last=C;const bad=C.some(c=>c[0]==='bad'),wait=C.some(c=>c[0]==='wait');
 if(bad){if(!DS.badSince)DS.badSince=Date.now()}else DS.badSince=0;
 const st=bad?(Date.now()-DS.badSince>3000?'bad':'wait'):wait?'wait':'ok';
 if(st!==DS.state){DS.state=st;el.className='dsync '+st;el.querySelector('span').textContent=st==='ok'?'ข้อมูลตรงกันทั้งหมด':st==='bad'?'ข้อมูลไม่ตรงกัน!':'กำลังตรวจสอบ…'}
 el.title=C.map(c=>(c[0]==='ok'?'✅ ':c[0]==='bad'?'❌ ':'⏳ ')+c[1]+': '+c[2]).join('\n')}
(()=>{const el=$('dsync');if(!el)return;if(SCR||window.__TV){el.remove();return}
 el.onclick=()=>uiAlert('สถานะความตรงกันของข้อมูล\n\n'+DS.last.map(c=>(c[0]==='ok'?'✅ ':c[0]==='bad'?'❌ ':'⏳ ')+c[1]+'\n    '+c[2]).join('\n\n')+'\n\nลำดับข้อมูล: Google Sheets → (ผู้ดูแลซิงค์) → ระบบออนไลน์ → ทุกหน้าจอที่ล็อกอิน → ตาราง / หน้าบันทึก / แดชบอร์ด');
 setInterval(()=>{if(!document.hidden)dsEval()},3000);setInterval(()=>{if(!NOGS()&&!document.hidden&&$('gsync')&&Date.now()-DS.gsT>170000){DS.gsT=Date.now();try{gsSync(true)}catch(e){}}},30000);setTimeout(dsEval,800)})();

/* ===== BLUR PII ===== */
(()=>{const BL=document.querySelectorAll('.blbtn');if(!BL.length)return;
 const BL_OFF='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.9 10.9 0 0 1 12 20C5 20 1 12 1 12a18.5 18.5 0 0 1 5.1-5.9M9.9 4.2A10.7 10.7 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.2 3.2M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="M1 1l22 22"/></svg>',BL_ON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
 const set=v=>{document.body.classList.toggle('blurpii',v);document.querySelectorAll('.blbtn').forEach(b=>{b.classList.toggle('on',v);b.setAttribute('aria-pressed',v);const sp=b.querySelector('span');if(sp)sp.textContent='ซ่อนชื่อ';const bi=b.querySelector('.bi');if(bi)bi.innerHTML=BL_OFF;b.title=v?'ตอนนี้ชื่อผู้ต้องหาและเลขพาสปอร์ตถูกซ่อน (เบลอ) — กดเพื่อแสดงชื่อ':'ตอนนี้แสดงชื่อและเลขพาสปอร์ตจริง — กดเพื่อซ่อน (เบลอ)'});try{sessionStorage.setItem('tm3_unl',v?'0':'1')}catch(e){}};
 const tog=()=>set(!document.body.classList.contains('blurpii'));
 BL.forEach(b=>b.onclick=tog);window.__setBlur=set;document.addEventListener('click',e=>{const b=e.target.closest('.blbtn');if(b&&!b.onclick){e.preventDefault();tog()}});
 let un=false;try{un=sessionStorage.getItem('tm3_unl')==='1'}catch(e){}set(!un)})();

/* ===== TEAM: แดชบอร์ดแยกรายชุดปฏิบัติการ (ชป.1 / ชป.2 / ชป.3) — v163 ===== */
var TMC={'ชป.1':'#22d3ee','ชป.2':'#fbbf24','ชป.3':'#a78bfa'},TSAVE=null;
var tmName=t=>'ชุดปฏิบัติการที่ '+String(t||'').replace(/\D/g,'');
var DKI={q:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',tools:'<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',det:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>'};
var dkSvg=k=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+DKI[k]+'</svg>';
function dmBar(){if($('dmbar')||window.__TV||SCR)return;const s=$('s');if(!s||!$('sheet'))return;const b=document.createElement('div');b.id='dmbar';b.className='dmbar dock';
 const L=[['','ภาพรวม','ภาพรวม กก.สส.','#e2e8f0']].concat(TM.map(t=>[t,t,tmName(t),TMC[t]||'#60a5fa']),[['rv','เพิกถอน','เพิกถอน / ฟ้องใบแดง','#e0703a'],['io','IO','IO — NON-B / หอพัก / ข้อมูลท้องถิ่น','#3a8fd8']]);
 b.innerHTML='<div class="dmseg" role="tablist" aria-label="เลือกแดชบอร์ด">'+L.map(([k,s2,l,c])=>`<button type="button" role="tab" data-dm="${k}" title="แดชบอร์ด${esc(l)}" style="--tc:${c}"><i></i><span>${s2}</span></button>`).join('')+'</div><span class="dksep"></span>'
  +'<div class="dks"><button type="button" class="dkb" data-dk="q" title="ค้นหา" aria-label="ค้นหา">'+dkSvg('q')+'</button><input class="dkq" type="search" placeholder="ค้นหา เช่น จีน หมายแดง" aria-label="ค้นหา"><button type="button" class="dkx" title="ยกเลิก — ล้างคำค้นและตัวกรองทั้งหมด" aria-label="ยกเลิกและรีเซ็ต">✕</button></div>'
  +'<button type="button" class="dkb dkrs" data-dk="rs" title="ล้างตัวกรองทั้งหมด" aria-label="ล้างตัวกรองทั้งหมด"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
  +'<button type="button" class="dkb" data-dk="tools" title="ตัวกรอง / ส่งออก / เครื่องมือ" aria-label="ตัวกรองและเครื่องมือ">'+dkSvg('tools')+'</button>'
  +'<button type="button" class="dkb dkrv" data-dk="det" title="สรุปตามหัวตาราง / รายการข้อมูล" aria-label="สรุปตามหัวตารางและรายการข้อมูล">'+dkSvg('det')+'</button>';
 /* ล่องหนจนกว่าจะชี้เมาส์ แล้วหายไปเองใน 3 วินาทีหลังเอาเมาส์ออก */
 let ht=0;const show=()=>{clearTimeout(ht);b.classList.add('show')},hide=d=>{clearTimeout(ht);ht=setTimeout(()=>{if(b.contains(document.activeElement)&&document.activeElement.tagName==='INPUT')return;b.classList.remove('show');b.querySelector('.dks').classList.toggle('open',!!b.querySelector('.dkq').value)},d==null?3000:d)};
 b.addEventListener('mouseenter',show);b.addEventListener('mouseleave',()=>hide());b.addEventListener('focusin',show);b.addEventListener('focusout',()=>hide());
 b.addEventListener('click',e=>{if(!b.classList.contains('show')&&!b.classList.contains('out')){show();hide(4000);e.preventDefault();e.stopPropagation();return}
  e.stopPropagation();const x=e.target.closest('[data-dm]');if(x){dmGo(x.dataset.dm);return}const k=e.target.closest('[data-dk]');
  if(e.target.closest('.dkx')){const q=b.querySelector('.dkq');q.value='';dkReset();q.blur();const w=b.querySelector('.dks');w.classList.remove('open','has');hide(1500);return}
  if(!k)return;const v=k.dataset.dk;
  if(v==='rs'){const q=b.querySelector('.dkq');q.value='';dkReset();const w=b.querySelector('.dks');w.classList.remove('open','has');hide(1500);return}
  if(v==='q'){const w=b.querySelector('.dks');w.classList.toggle('open');if(w.classList.contains('open'))b.querySelector('.dkq').focus()}
  else if(v==='tools'){document.body.classList.toggle('dmtools');dmSync();if(document.body.classList.contains('dmtools'))try{$('s').scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}}
  else if(v==='det'){document.body.classList.toggle('rvdet');dmSync();if(document.body.classList.contains('rvdet'))setTimeout(()=>{try{$(IOMODE?'iox':'rvx').scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}},60)}},true);
 let qt=0;const q=b.querySelector('.dkq');q.addEventListener('input',()=>{clearTimeout(qt);qt=setTimeout(()=>dkSearch(q.value,false),120)});q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();clearTimeout(qt);dkSearch(q.value,true)}else if(e.key==='Escape'){q.blur();hide(0)}});
 dmPlace(b);dmSync();addEventListener('resize',()=>{clearTimeout(window.__dmT);window.__dmT=setTimeout(()=>dmPlace($('dmbar')),150)})}
/* ค้นหาจากแว่นขยาย: แดชบอร์ดเพิกถอนใช้ช่องค้นหาของตัวเอง — แดชบอร์ดอื่นส่งต่อให้ช่องค้นหาอัจฉริยะเดิม (รองรับคำย่อ / AI) */
function dkSearch(v,enter){v=String(v||'').trim();if(IOMODE){if(v)IOF.q=v;else delete IOF.q;ION=100;ioRender();return}if(RVMODE){if(v)RVF.q=v;else delete RVF.q;RVN=100;rvRender();return}
 /* กรองทันทีแบบคำค้น (ไม่ผ่าน AI) — เหมือนแดชบอร์ดเพิกถอน */
 if((FS.nl||'')===v){gqProp();return}if(v)FS.nl=v;else delete FS.nl;document.querySelectorAll('input.nl').forEach(i=>{if(i!==document.activeElement)i.value=v});render()}
/* ช่องค้นหาเดียวใช้ร่วมกันทุกแดชบอร์ด: คำค้นของแดชที่เปิดอยู่ถือเป็นค่ากลาง แล้วคัดลอกไปทุกแดช (หลัก/ชป./RV/IO) */
function gqCur(){return String((IOMODE?IOF.q:RVMODE?RVF.q:FS.nl)||'').trim()}
function gqProp(){const v=gqCur();if(v){FS.nl=v;RVF.q=v;IOF.q=v}else{delete FS.nl;delete RVF.q;delete IOF.q}try{sessionStorage.setItem('tm3_gq',v)}catch(e){}}
/* ปุ่ม ✕ ท้ายช่องค้นหา: ล้างคำค้นในทุกแดช + ตัวกรองของแดชที่เปิดอยู่ */
function dkReset(){delete FS.nl;delete RVF.q;delete IOF.q;try{sessionStorage.removeItem('tm3_gq')}catch(e){}
 if(IOMODE){IOF={};ION=100;ioRender();try{dmSync()}catch(e){}return}if(RVMODE){RVF={};RVN=100;rvRender();try{dmSync()}catch(e){}return}
 FS={};try{aiShow('')}catch(e){}document.querySelectorAll('input.nl').forEach(i=>i.value='');try{syncF()}catch(e){}render()}
/* วางแถบไว้มุมขวาล่างของกรอบ "สรุปสำหรับผู้บังคับบัญชา" — จอแคบย้ายออกมาไว้เหนือแผ่น (แผ่นถูกย่อจนกดไม่ได้) */
function dmPlace(b){if(!b)return;const ins=$('ins');if(ins&&b.parentNode!==ins)ins.appendChild(b);b.classList.remove('out');b.classList.toggle('nar',innerWidth<760)}
function dmSync(){const b=$('dmbar');if(!b)return;try{fbUp()}catch(e){}const cur=IOMODE?'io':RVMODE?'rv':(TMODE||'');b.querySelectorAll('[data-dm]').forEach(x=>{const on=x.dataset.dm===cur;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false')});
 const B=document.body;b.querySelector('[data-dk="tools"]').classList.toggle('on',B.classList.contains('dmtools'));b.querySelector('[data-dk="det"]').classList.toggle('on',B.classList.contains('rvdet'));b.classList.toggle('isrv',!!RVMODE);
 const q=b.querySelector('.dkq'),v=IOMODE?(IOF.q||''):RVMODE?(RVF.q||''):(FS.nl||'');if(q&&document.activeElement!==q)q.value=v;b.querySelector('.dks').classList.toggle('has',!!v);if(v)b.querySelector('.dks').classList.add('open')}
function tmTitles(){const sh=$('sheet');if(!sh)return;const h2=sh.querySelector('.sh h2'),H=sh.querySelectorAll('.cg h4'),h3=document.querySelector('#s .dctl .ch h3');
 if(!TSAVE)TSAVE={h2:h2.textContent,h40:H[0]&&H[0].textContent,h3:h3&&h3.textContent};
 h2.textContent=TMODE?tmName(TMODE):TSAVE.h2;if(H[0])H[0].textContent=TMODE?'สัดส่วนจับเอง / ร่วมจับ (ราย)':TSAVE.h40;if(h3)h3.textContent=TMODE?'แดชบอร์ด '+tmName(TMODE):TSAVE.h3;
 document.body.classList.toggle('tmode',!!TMODE);document.body.style.setProperty('--tmc',TMC[TMODE]||'#22d3ee')}
function teamSet(t,quiet){TMODE=t||'';if(TMODE&&FS.team){FS.team='';try{syncF()}catch(e){}}tmTitles();if(!quiet){render();dmSync()}}
function dmGo(k){if(k==='io'){if(!IOMODE)enterIO();dmSync();return}
 if(k==='rv'){if(IOMODE)exitIO(true);if(TMODE)teamSet('',true);if(!RVMODE)enterRV();dmSync();return}
 if(IOMODE)exitIO();else if(RVMODE)exitRV();teamSet(k);try{$('s').scrollIntoView({block:'start',behavior:'smooth'})}catch(e){}}
/* ในแดชบอร์ดชุด: กดแถว จับเอง/ร่วมจับ ในกรอบสัดส่วน → เปิดรายละเอียดตามการปฏิบัติ */
(()=>{const el=$('tt');if(el)el.addEventListener('click',e=>{if(!TMODE||RVMODE)return;const t=e.target.closest('[data-ttype]');if(!t)return;e.stopImmediatePropagation();e.preventDefault();openDR([{k:'type',v:t.dataset.ttype}])},true);
 try{dmBar()}catch(e){}})();
/* ===== RV: แดชบอร์ดเพิกถอน / ฟ้องใบแดง (ข้อมูลจากชีต “เพิกถอน+ใบแดง” เท่านั้น) — v162 ธีมแดง ===== */
var RV_DEF='https://docs.google.com/spreadsheets/d/1xC8TSRiJyO68OSD1169XGDIuNctdX-sRMNAHJgLEgNM/edit?gid=933036778';
var RVH={'วันที่เพิกถอน':'date','วันที่':'date','เลขหนังสือ':'doc','พงส.เจ้าของคดี':'off','การปฏิบัติ':'type','คดี':'charge','ราย':'grp','ชื่อผู้ต้องหา':'name','จำนวนราย':'num','เลขพาสปอร์ต':'pp','พาสปอร์ต':'pp','สัญชาติ':'nat','เพศ':'sex','อายุ':'age','ตม.จว.ที่ยื่นเรื่อง':'unit','หมายเหตุ':'note'};
var RV=[],RVT=0,RVMODE=false,RVBUSY=false,RVF={},RVERR='',RVSAVE={},RVN=100,RVOPEN={},RVOFF=null,RVAI=null,RVOAI=false;
/* สีประจำการปฏิบัติ = ฟ้า / ส้ม ตามชีตต้นฉบับ (ผ่านตัวตรวจ palette: dark surface #2a1530) */
var RVTC={'เพิกถอน':'#3a86d8','ฟ้องใบแดง':'#e0703a'};
var RVK={n:'#f0abfc',nat:'#5eead4',chg:'#fcd34d',unit:'#a5b4fc',off:'#fda4af'};
var RVPAL=['#60a5fa','#f59e0b','#2dd4bf','#f472b6','#a78bfa','#fb923c','#34d399','#e879f9'];
/* สีชิปตามตารางชีตต้นฉบับ (การปฏิบัติ / คดี) */
var RVCHIP={'เพิกถอน':['#bfe1f6','#0a53a8'],'ฟ้องใบแดง':['#ffcfc9','#b10202'],'คดีอาญา':['#3d3d3d','#e5e5e5'],'วินัย':['#ffe5a0','#473821'],'อุธรณ์เพิก':['#d4edbc','#11734b'],'ประกัน/ถอน':['#e6cff2','#5a3286'],'ไม่มีการบันทึก (ตม.จว.)':['#5a3286','#e6cff2'],'หมายต่างประเทศ':['#b10202','#ffcfc9'],'INTERPOLหมายแดง':['#b10202','#ffcfc9']};
var rvChip=(v,cls)=>{v=String(v||'');let c=RVCHIP[v];if(!c){const k=ck(v);for(const x in RVCHIP)if(ck(x)===k){c=RVCHIP[x];break}}return c?`<span class="rvchip${cls?' '+cls:''}" style="background:${c[0]};color:${c[1]}">${esc(v)}</span>`:esc(v)};
try{const c=JSON.parse(localStorage.getItem('tm3_rvdata')||'null');if(c&&Array.isArray(c.rows)){RV=c.rows;RVT=c.t||0}}catch(e){}
function rvSrc(){let a=[];try{a=gsSrcs()}catch(e){}return a.find(x=>x.mode==='rv')||{id:'rv0',name:'เพิกถอน+ใบแดง',url:RV_DEF,on:true,mode:'rv'}}
var rvNA=v=>{v=String(v==null?'':v).trim();return /^(ไม่ระบุ|-+|—|n\/?a)$/i.test(v)?'':v};
var rvW=r=>+r.num||1,rvS=a=>a.reduce((t,r)=>t+rvW(r),0);
/* ---- ชื่อ พงส.: ทำความสะอาด → แยกยศ/ชื่อ/สกุล → รวมชื่อที่สะกดคลาดเคลื่อนเป็นคนเดียวกัน ---- */
function offClean(s){s=String(s||'').replace(/[​-‍﻿]/g,'').replace(/[\r\n\t]+/g,' ');
 s=s.replace(/([ัิ-ฺ็-๎])\1+/g,'$1');
 s=s.replace(/\s*(รอง\s*สว|รองสว|สว\s*\.?\s*\(|สว\.\s*\(|สว\.(?=\S)|กก\.\s*สส|กก\.3).*$/,'');
 return s.replace(/\s+/g,' ').trim()}
function offParse(s){let t=offClean(s);if(!t||/^ไม่ระบุ$/.test(t))return null;let rank='',acting=false;
 const m0=t.match(/^ว่+า+ที่[ั-๎]*\s*/);if(m0){acting=true;t=t.slice(m0[0].length)}
 const m1=t.match(/^([รพ])\s*\.\s*ต\s*\.\s*([อทตค])?\s*\.?\s*/);if(m1){rank=m1[1]+'.ต.'+(m1[2]?(m1[2]==='ค'?'ท':m1[2])+'.':'');t=t.slice(m1[0].length)}
 let fem=false;const m2=t.match(/^หญิง\s*/);if(m2){fem=true;t=t.slice(m2[0].length)}
 const tok=t.split(' ').filter(Boolean);if(!tok.length)return null;return{raw:s,rank,fem,acting,tok}}
function offLev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m||!n)return m||n;let p=Array(n+1).fill(0).map((_,j)=>j);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function offNear(a,b){const d=offLev(a,b),L=Math.max(a.length,b.length);return d===0||(L>=5&&d<=1)||(L>=8&&d<=2)}
function offGroup(list){
 const P=list.map(([n,c])=>{const p=offParse(n);return p?Object.assign(p,{n,c}):null}).filter(Boolean),G=[];
 const full=P.filter(p=>p.tok.length>=2).sort((a,b)=>b.c-a.c);
 const find=(first,last)=>G.find(g=>offNear(g.first,first)&&(!last||!g.last||offNear(g.last,last)||offLev(g.last,last)<=3));
 const place=(p,first,last)=>{let g=find(first,last);if(!g){g={first,last:last||'',items:[],count:0,fc:{},lc:{}};G.push(g)}g.items.push(p);g.count+=p.c;g.fc[first]=(g.fc[first]||0)+p.c;if(last){g.lc[last]=(g.lc[last]||0)+p.c;if(!g.last)g.last=last}};
 full.forEach(p=>{const a=p.tok[0],b=p.tok.slice(1).join(' '),a2=p.tok[0]+p.tok[1],b2=p.tok.slice(2).join(' ');
  if(p.tok.length>=3&&!find(a,b)&&G.some(g=>offNear(g.first,a2)))place(p,a2,b2);else if(p.tok.length>=3&&!G.some(g=>offNear(g.first,a))&&a.length<=4&&full.some(q=>q!==p&&offNear(q.tok[0],a2)))place(p,a2,b2);else place(p,a,b)});
 P.filter(p=>p.tok.length<2).sort((a,b)=>b.c-a.c).forEach(p=>place(p,p.tok[0],''));
 G.forEach(g=>{const top=o=>Object.entries(o).sort((a,b)=>b[1]-a[1])[0];g.first=(top(g.fc)||[g.first])[0];g.last=(top(g.lc)||[g.last])[0]||'';
  const rk={};g.items.forEach(p=>{if(p.rank){const k=p.rank+(p.fem?'หญิง':'');rk[k]=(rk[k]||0)+p.c}});const r=(top(rk)||[''])[0];g.label=(r?r+' ':'')+g.first+(g.last?' '+g.last:'')});
 const map={};G.forEach(g=>g.items.forEach(p=>map[p.n]=g.label));return{map,groups:G}}
function rvOffSig(names){let h=2166136261;names.slice().sort().forEach(s=>{for(let j=0;j<s.length;j++){h^=s.charCodeAt(j);h=Math.imul(h,16777619)}h^=124});return names.length+':'+(h>>>0).toString(36)}
function rvOffCache(){try{return JSON.parse(localStorage.getItem('tm3_rvoff')||'null')}catch(e){return null}}
function rvOffApply(){if(!Array.isArray(RV))return;const c={};RV.forEach(r=>{if(r.offRaw==null)r.offRaw=r.off||'';const k=r.offRaw;if(k)c[k]=(c[k]||0)+rvW(r)});
 const list=Object.entries(c),names=list.map(x=>x[0]),sig=rvOffSig(names),G=offGroup(list),ai=rvOffCache(),useAI=!!(ai&&ai.sig===sig&&ai.map);
 const map=Object.assign({},G.map,useAI?ai.map:{});RVOFF={sig,list,det:G.map,map,ai:useAI,at:useAI?ai.t:0};
 RV.forEach(r=>{r.off=r.offRaw?(map[r.offRaw]||offClean(r.offRaw)||r.offRaw):''})}
async function rvOffAI(show){if(RVOAI||SCR)return;if(!RVOFF)rvOffApply();const L=RVOFF.list;if(!L.length){if(show)rvOffDlg();return}
 const sp=await claude.use('sample');if(!sp){rvMsg('ระบบ AI ใช้ไม่ได้ในมุมมองนี้ — ใช้การจับคู่ชื่ออัตโนมัติของระบบแทน',false);if(show)rvOffDlg();return}
 RVOAI=true;rvMsg('⏳ Claude กำลังตรวจชื่อ พงส. ที่สะกดคลาดเคลื่อน…');const b=$('rvoffb');if(b)b.disabled=true;
 try{const det={};L.forEach(([n])=>{const l=RVOFF.det[n]||offClean(n);(det[l]=det[l]||[]).push(n)});
  const a=await sp.json(`คุณเป็นผู้ตรวจสอบรายชื่อพนักงานสอบสวน (พงส.) ในตารางเพิกถอน/ฟ้องใบแดงของ กก.สส.บก.ตม.3
รายชื่อด้านล่างพิมพ์ด้วยมือ จึงมีทั้ง สะกดคลาดเคลื่อน (สระ/วรรณยุกต์ซ้ำ ตัวอักษรผิด 1–2 ตัว เว้นวรรคผิด) มี/ไม่มีนามสกุล ยศเปลี่ยน (ร.ต.ท.→ร.ต.อ.) มีคำว่า “ว่าที่” และมีตำแหน่งต่อท้าย
งาน: จัดกลุ่มชื่อที่เป็น "บุคคลเดียวกัน" ให้รอบคอบ
กฎ:
1) ชื่อจริงที่ต่างกันเพียงสะกดคลาดเคลื่อนเล็กน้อย และนามสกุลไม่ขัดกัน = คนเดียวกัน
2) ชื่ออย่างเดียว (ไม่มีนามสกุล) ให้รวมกับคนที่ชื่อตรง/ใกล้เคียงมาก หากมีผู้ที่เข้าได้เพียงคนเดียว
3) ชื่อจริงต่างกันชัดเจน (เช่น ณภัค กับ ณภัทร) หรือนามสกุลต่างกันชัดเจน = คนละคน — ถ้าไม่แน่ใจ ให้แยกไว้
4) ยศหรือตำแหน่งต่างกัน ไม่ใช่เหตุให้แยก
5) label = "ยศ ชื่อ นามสกุล" ที่สะกดถูกต้อง/พบบ่อยที่สุด (ยศใช้ที่พบบ่อยที่สุด หากเป็นหญิงให้ต่อท้ายยศว่า หญิง เช่น ร.ต.อ.หญิง) ไม่ต้องใส่ตำแหน่ง
6) ทุกชื่อในรายการต้องอยู่ใน members ของกลุ่มใดกลุ่มหนึ่งเพียงครั้งเดียว และต้องคัดลอกข้อความให้ตรงทุกตัวอักษร ห้ามแก้ไข
ตอบเป็น JSON เท่านั้น: {"groups":[{"label":"...","members":["..."]}]}
รายชื่อ [ข้อความ, จำนวนราย]: ${JSON.stringify(L)}
ข้อเสนอเบื้องต้นจากระบบ (ตรวจทานได้ อาจผิด): ${JSON.stringify(det)}`,{cache:false,modelTier:'complex'});
  const gs=a&&Array.isArray(a.groups)?a.groups:Array.isArray(a)?a:[],set=new Set(L.map(x=>x[0])),map={};
  gs.forEach(g=>{const lab=String(g&&g.label||'').replace(/\s+/g,' ').trim();if(!lab||!Array.isArray(g.members))return;g.members.forEach(m=>{m=String(m);if(set.has(m)&&!map[m])map[m]=lab})});
  const hit=Object.keys(map).length;if(hit<L.length*.8)throw new Error('ผลตรวจจาก AI ไม่ครบ ('+hit+'/'+L.length+' ชื่อ) — ใช้การจับคู่อัตโนมัติของระบบแทน');
  try{localStorage.setItem('tm3_rvoff',JSON.stringify({sig:RVOFF.sig,map,t:Date.now()}))}catch(e){}
  rvOffApply();const n=new Set(Object.values(RVOFF.map)).size;rvMsg('✅ Claude ตรวจชื่อ พงส. แล้ว — '+L.length+' แบบที่พิมพ์ รวมเป็น '+n+' คน',true);try{localStorage.setItem('tm3_rvdata',JSON.stringify({t:RVT,rows:RV}))}catch(e){}rvRender()}
 catch(e){rvMsg('❌ '+((e&&(e.message||e.code))||e),false)}
 finally{RVOAI=false;if(b)b.disabled=false}if(show)rvOffDlg()}
function rvOffDlg(){if(!RVOFF)rvOffApply();const g={};RVOFF.list.forEach(([n,c])=>{const l=RVOFF.map[n]||offClean(n);(g[l]=g[l]||{n:0,v:[]}).n+=c;g[l].v.push([n,c])});
 const E=Object.entries(g).sort((a,b)=>b[1].n-a[1].n),o=document.createElement('div');o.className='rvdlg';
 o.innerHTML=`<div class="rvdb" role="dialog" aria-label="ชื่อ พงส. ที่ระบบรวมเป็นคนเดียวกัน"><div class="rvdh"><b>👮 ชื่อ พงส.เจ้าของคดี ที่รวมเป็นคนเดียวกัน</b><button type="button" class="rvdx" data-x aria-label="ปิด">✕</button></div>
 <p class="rvdn">${RVOFF.ai?'✅ ตรวจโดย Claude แล้ว ('+new Date(RVOFF.at).toLocaleString('th-TH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' น.)':'⚙️ จับคู่อัตโนมัติด้วยระบบ (ยังไม่ได้ตรวจด้วย Claude)'} · ${RVOFF.list.length} แบบที่พิมพ์ในชีต → <b>${E.length} คน</b> · ตัวเลข = จำนวนราย</p>
 <div class="rvdl">${E.map(([l,x])=>`<div class="rvdg"><div class="rvdgh"><b>${esc(l)}</b><span>${x.n.toLocaleString()} ราย</span></div>${x.v.length>1||x.v[0][0]!==l?`<ul>${x.v.sort((a,b)=>b[1]-a[1]).map(([n,c])=>`<li><span>${esc(n)}</span><small>${c}</small></li>`).join('')}</ul>`:''}</div>`).join('')}</div>
 <div class="rvdf"><button type="button" class="btn sm" data-rr>✨ ให้ Claude ตรวจใหม่</button><button type="button" class="btn pr sm" data-x>ปิด</button></div></div>`;
 const done=()=>{o.remove();document.removeEventListener('keydown',k)},k=e=>{if(e.key==='Escape')done()};
 o.addEventListener('click',e=>{if(e.target===o||e.target.closest('[data-x]'))done();else if(e.target.closest('[data-rr]')){done();rvOffAI(true)}});document.addEventListener('keydown',k);document.body.appendChild(o)}
/* ---- แปลงข้อมูลจากชีต ---- */
function rvParse(V){const R=(V||[]).map(r=>(r||[]).map(x=>x==null?'':String(x)));let hi=-1,H=null;
 for(let i=0;i<Math.min(R.length,15);i++){const h=R[i].map(x=>RVH[String(x).trim()]||null);if(h.filter(Boolean).length>=3&&h.includes('date')){hi=i;H=h;break}}
 if(hi<0)throw new Error('ไม่พบแถวหัวตาราง (ต้องมีคอลัมน์ “วันที่เพิกถอน”)');
 const out=[];for(let i=hi+1;i<R.length;i++){const r=R[i];if(!r.some(x=>String(x).trim()))continue;const o={};H.forEach((k,j)=>{if(k&&!o[k])o[k]=rvNA(r[j])});
  const m=String(o.date||'').match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);if(!m)continue;let y=+m[3];if(y<100)y+=y>=40?2500:2000;if(y>2400)y-=543;
  o.date=y+'-'+String(m[2]).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0');
  const t=o.type||'';o.type=/ใบแดง/.test(t)?'ฟ้องใบแดง':/เพิก/.test(t)?'เพิกถอน':(t||'ไม่ระบุ');
  o.num=String(+String(o.num||'').replace(/[^\d]/g,'')||1);o.age=String(o.age||'').replace(/[^\d]/g,'');
  o.sex=/หญิง/.test(o.sex||'')?'หญิง':/ชาย/.test(o.sex||'')?'ชาย':'ไม่ระบุ';
  try{if(o.nat)o.nat=normNat(o.nat)}catch(e){}try{if(o.charge)o.charge=normChg(o.charge)}catch(e){}
  ['unit','off','doc','name','pp','note','grp'].forEach(k=>o[k]=String(o[k]||'').replace(/\s+/g,' ').trim());
  o.offRaw=o.off;o.row=i+1;o.i=out.length;out.push(o)}
 return out}
function rvStat(t){const e=$('rvst');if(!e)return;if(t){e.textContent=t;return}
 e.textContent=RV.length?('ข้อมูล '+RV.length.toLocaleString()+' แถว · อัปเดต '+(RVT?new Date(RVT).toLocaleString('th-TH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' น.':'-')):(RVERR||'ยังไม่มีข้อมูล — กด “อัปเดตข้อมูลจากชีต”')}
function rvMsg(t,ok){const e=$('rvaim');if(!e)return;e.textContent=t||'';e.className='rvaim'+(ok===false?' er':ok?' ok':'')}
async function rvSync(quiet){if(RVBUSY||SCR)return;RVBUSY=true;rvStat('⏳ กำลังดึงข้อมูลจากชีตเพิกถอน+ใบแดง…');const b=$('rvsync');if(b)b.disabled=true;
 try{const s=rvSrc();if(s.on===false)throw new Error('ลิงก์ “'+s.name+'” ถูกตัดการเชื่อมต่ออยู่ — เปิดได้ที่ปุ่ม ⚙️ ในหน้าตารางข้อมูล');let V=null,ce=null;try{V=await gsViaConnector(s.url)}catch(e){ce=e}
  if(!V){if(ce&&!['not_granted','capability_disabled','capability_removed'].includes(ce.code))throw ce;
   const c=new AbortController(),to=setTimeout(()=>c.abort(),20000);const r=await fetch(gsUrl(s.url)+'&t='+Date.now(),{cache:'no-store',signal:c.signal});clearTimeout(to);if(!r.ok)throw new Error('HTTP '+r.status);
   const t=await r.text();if(/<html/i.test(t.slice(0,200)))throw new Error('ไม่มีสิทธิ์อ่านชีตนี้ (ต้องเชื่อม Google Sheets หรือเปิดสิทธิ์ทุกคนที่มีลิงก์ดูได้)');V=csvRows(t.replace(/^﻿/,''))}
  RV=rvParse(V);RVT=Date.now();RVERR='';rvOffApply();try{localStorage.setItem('tm3_rvdata',JSON.stringify({t:RVT,rows:RV}))}catch(e){}
  if(!quiet)gsToast('✅ ดึงข้อมูลเพิกถอน/ใบแดงแล้ว '+RV.length.toLocaleString()+' แถว',true);
  if(RVMODE&&RVOFF&&!RVOFF.ai&&RVOFF.list.length)setTimeout(()=>rvOffAI(false),300)}
 catch(e){RVERR='ดึงข้อมูลไม่สำเร็จ: '+((e&&(GSE[e.code]||e.message||e.code))||e);if(!quiet)gsToast('❌ ดึงข้อมูลเพิกถอน/ใบแดงไม่สำเร็จ<br><small>'+esc(RVERR)+'</small>',false)}
 RVBUSY=false;if(b)b.disabled=false;rvStat();try{render()}catch(e){}try{xdRefresh('rv')}catch(e){}}
/* ---- กรอง ---- */
var RVAB=[['','ไม่ระบุ'],['0-19','ต่ำกว่า 20'],['20-29','20–29'],['30-39','30–39'],['40-49','40–49'],['50-59','50–59'],['60-200','60 ขึ้นไป']];
var rvAgeB=r=>{const a=+r.age;if(!a)return'ไม่ระบุ';return a<20?'ต่ำกว่า 20':a<30?'20–29':a<40?'30–39':a<50?'40–49':a<60?'50–59':'60 ขึ้นไป'};
var rvVal=(r,k)=>k==='mon'?r.date.slice(0,7):k==='ageb'?rvAgeB(r):(r[k]||'ไม่ระบุ');
function rvRows(skip){const f=RVF,q=String(f.q||'').toLowerCase().trim();return RV.filter(r=>{
 if(skip!=='a'&&f.a&&r.date<f.a)return false;if(skip!=='b'&&f.b&&r.date>f.b)return false;
 if(skip!=='charge'&&f.charge&&!chips(r.charge).some(x=>ck(x)===ck(f.charge))&&!(f.charge==='ไม่ระบุ'&&!r.charge))return false;
 for(const k of ['mon','type','nat','sex','unit','off','ageb'])if(skip!==k&&f[k]&&rvVal(r,k)!==f[k])return false;
 if(skip!=='age'){if(f.a1&&!(+r.age>=+f.a1))return false;if(f.a2&&!(+r.age&&+r.age<=+f.a2))return false}
 if(q&&![r.name,r.pp,r.doc,r.note,r.off,r.offRaw,r.unit,r.charge,r.nat,r.type].join(' ').toLowerCase().includes(q))return false;return true})}
function rvCnt(R,k){const m={},nm={};R.forEach(r=>{const vs=k==='charge'?(chips(r.charge).length?chips(r.charge):['ไม่ระบุ']):[rvVal(r,k)];vs.forEach(v=>{const q=ck(v);m[q]=(m[q]||0)+rvW(r);nm[q]=nm[q]||v})});return Object.keys(m).map(q=>[nm[q],m[q]]).sort((a,b)=>b[1]-a[1])}
var RVFL={per:'ช่วงเวลา',a:'ตั้งแต่',b:'ถึง',mon:'เดือน',type:'การปฏิบัติ',charge:'คดี',nat:'สัญชาติ',sex:'เพศ',unit:'ตม.จว.ที่ยื่น',off:'พงส.',ageb:'ช่วงอายุ',a1:'อายุตั้งแต่',a2:'อายุถึง',q:'ค้นหา'};
var rvMl=k=>MON[+k.slice(5)-1]+' '+yr(k.slice(0,4));
var rvFv=(k,v)=>k==='mon'?rvMl(v):(k==='a'||k==='b')?fd(v):k==='per'?(PLd[v]||PL[v]||v):v;
function rvTime(k,v){if(k==='per'){if(!v){delete RVF.per;delete RVF.a;delete RVF.b}else{RVF.per=v;const r=perRange(v);if(r){RVF.a=r[0];RVF.b=r[1]}}delete RVF.mon}
 else if(k==='a'||k==='b'){if(v)RVF[k]=v;else delete RVF[k];if(RVF.a||RVF.b)RVF.per='c';else delete RVF.per;delete RVF.mon}
 else if(k==='mon'){if(v){RVF.mon=v;delete RVF.a;delete RVF.b;delete RVF.per}else delete RVF.mon}}
function rvSet(k,v){if(['per','a','b','mon'].includes(k)){rvTime(k,RVF[k]===v?'':v)}else if(!v||RVF[k]===v)delete RVF[k];else RVF[k]=v;RVN=100;rvRender()}
/* ---- แผงควบคุม ---- */
function rvPanel(){if($('rvp'))return;const s=$('s');const P=document.createElement('div');P.id='rvp';P.className='card rvp';
 P.innerHTML=`<div class="rvh"><div class="rvt"><b>📑 แดชบอร์ดเพิกถอน / ฟ้องใบแดง</b><small id="rvst"></small></div>
 <div class="rvact" role="toolbar" aria-label="เครื่องมือ"><button type="button" class="rvb" id="rvsync" title="ดึงข้อมูลล่าสุดจากชีต เพิกถอน+ใบแดง">🔄 อัปเดตข้อมูล</button><span class="rvsep"></span><button type="button" class="rvb pr" id="rvxo" title="ส่งออกภาพนำเสนอ / ตารางข้อมูล (PNG · PDF · Excel · CSV)">📤 ส่งออก</button><button type="button" class="rvb gd" id="rvxq" title="ส่งออกด่วนตามค่าที่ใช้ล่าสุด">⚡ ด่วน</button><span class="rvsep"></span><button type="button" class="rvb ai" id="rvaib" title="ให้ Claude วิเคราะห์เชิงลึก">✨ Claude วิเคราะห์</button><button type="button" class="rvb" id="rvoffb" title="ดู/ตรวจรายชื่อ พงส. ที่สะกดคลาดเคลื่อนแต่เป็นคนเดียวกัน">👮 ชื่อ พงส.</button></div></div>
 <span class="rvaim" id="rvaim"></span>
 <div class="rvq4">
  <section class="rvs s0"><h6><i>⏱</i>ช่วงเวลา<button type="button" class="rvx0" data-rclr title="ล้างช่วงเวลา">↺ ล้าง</button></h6>
   <div class="rvrw"><span>ช่วงสำเร็จรูป</span><select class="psel" data-rk="per">${'<option value="">ทั้งหมด</option>'+Object.entries(PL).filter(([k])=>k!='c').map(([k,l])=>`<option value="${k}">${l}</option>`).join('')+'<option value="c">กำหนดเอง</option>'}</select></div>
   <div class="rvrw"><span>เดือน + ปี</span><select class="pmon" data-rk="mon"></select></div>
   <div class="rvrw"><span>ตั้งแต่วันที่</span><input type="date" data-rk="a"></div>
   <div class="rvrw"><span>ถึงวันที่</span><input type="date" data-rk="b"></div>
   <div class="pinfo" id="rvpinfo"></div></section>
  <section class="rvs s1"><h6><i>1</i>การปฏิบัติ / หน่วย</h6>
   <div class="rvrw"><span>การปฏิบัติ</span><div class="rvseg" data-rs="type"></div></div>
   <div class="rvrw"><span>ตม.จว.ที่ยื่น</span><select data-rk="unit"></select></div>
   <div class="rvrw"><span>พงส.</span><select data-rk="off"></select></div></section>
  <section class="rvs s2"><h6><i>2</i>ข้อมูลผู้ต้องหา</h6>
   <div class="rvrw"><span>สัญชาติ</span><select data-rk="nat"></select></div>
   <div class="rvrw"><span>เพศ</span><div class="rvseg" data-rs="sex"></div></div>
   <div class="rvrw"><span>อายุ</span><div class="rvr"><input type="number" min="0" data-rk="a1" placeholder="ตั้งแต่"><i>–</i><input type="number" min="0" data-rk="a2" placeholder="ถึง"></div></div></section>
  <section class="rvs s3"><h6><i>3</i>คดี / ค้นหา</h6>
   <div class="rvrw"><span>คดี</span><select data-rk="charge"></select></div>
   <div class="rvrw"><span>ค้นหา</span><input data-rk="q" placeholder="ชื่อ / พาสปอร์ต / เลขหนังสือ / หมายเหตุ"></div></section>
 </div><div class="rvchips" id="rvchips"></div>`;
 s.insertBefore(P,s.firstChild);
 const X=document.createElement('div');X.id='rvx';X.className='rvx';const sc=$('sheet').closest('.sc');sc.parentNode.insertBefore(X,sc.nextSibling);
 /* ช่องวันที่แบบเดียวกับหน้าหลัก (วัน + เดือน ปี) */
 P.querySelectorAll('input[type=date][data-rk]').forEach(inp=>{inp.dataset.k=inp.dataset.rk;const n=YS.length;thDate(inp);YS.length=n;delete inp.dataset.k});
 $('rvsync').onclick=()=>rvSync(false);
 $('rvxo').onclick=()=>xOpen('info');$('rvxq').onclick=()=>{try{$('xquick').click()}catch(e){}};
 $('rvaib').onclick=rvAIRun;$('rvoffb').onclick=()=>rvOffDlg();
 P.addEventListener('change',e=>{const t=e.target.closest('[data-rk]');if(!t)return;const k=t.dataset.rk,v=String(t.value||'').trim();
  if(['per','a','b','mon'].includes(k)){if(k==='per'&&v==='c'){RVF.per='c';RVN=100;rvRender();return}rvTime(k,v)}else if(v)RVF[k]=v;else delete RVF[k];RVN=100;rvRender()});
 let qt;P.addEventListener('input',e=>{const t=e.target.closest('[data-rk]');if(!t||t.tagName==='SELECT'||t.type==='hidden')return;clearTimeout(qt);qt=setTimeout(()=>{const k=t.dataset.rk,v=String(t.value||'').trim();if(v)RVF[k]=v;else delete RVF[k];RVN=100;rvRender()},220)});
 P.addEventListener('click',e=>{if(e.target.closest('[data-rclr]')){['per','a','b','mon'].forEach(k=>delete RVF[k]);RVN=100;rvRender();return}
  const b=e.target.closest('[data-rsv]');if(b){rvSet(b.closest('[data-rs]').dataset.rs,b.dataset.rsv);return}const c=e.target.closest('[data-rx]');if(c){const k=c.dataset.rx;if(k==='*')RVF={};else if(k==='per'||k==='a'||k==='b')['per','a','b'].forEach(x=>delete RVF[x]);else delete RVF[k];RVN=100;rvRender()}});
 X.addEventListener('click',e=>{const m=e.target.closest('[data-rmore]');if(m){RVOPEN[m.dataset.rmore]=!RVOPEN[m.dataset.rmore];rvRender();return}if(e.target.closest('#rvmore')){RVN+=200;rvRender();return}
  if(e.target.closest('[data-roff]')){rvOffDlg();return}const d=e.target.closest('[data-rdk]');if(d)rvSet(d.dataset.rdk,d.dataset.rdv)})}
function rvFiltersUI(){const P=$('rvp');if(!P)return;try{dmSync()}catch(e){}
 const opt=(k,all)=>{const el=P.querySelector('select[data-rk="'+k+'"]');if(!el||el===document.activeElement)return;const c=rvCnt(rvRows(k),k).filter(x=>x[0]!=='ไม่ระบุ'||k!=='off'),cur=RVF[k]||'';let h='<option value="">'+all+'</option>';
  const seen=new Set();c.forEach(([v,n])=>{seen.add(v);h+=`<option value="${esc(v)}">${esc(v)}  (${n.toLocaleString()})</option>`});if(cur&&!seen.has(cur))h+=`<option value="${esc(cur)}">${esc(cur)}  (0)</option>`;
  el.innerHTML=h;el.value=cur};
 opt('charge','ทุกคดี');opt('nat','ทุกสัญชาติ');opt('unit','ทุกหน่วย');opt('off','ทุกคน');
 {const el=P.querySelector('select[data-rk="mon"]');if(el&&el!==document.activeElement){const c=rvCnt(rvRows('mon'),'mon').sort((a,b)=>a[0]<b[0]?1:-1),cur=RVF.mon||'';
  el.innerHTML='<option value="">ทั้งหมด</option>'+c.map(([v,n])=>`<option value="${esc(v)}">${esc(rvMl(v))}  (${n})</option>`).join('')+(cur&&!c.some(x=>x[0]===cur)?`<option value="${esc(cur)}">${esc(rvMl(cur))}  (0)</option>`:'');el.value=cur}}
 const seg=(k,vals)=>{const el=P.querySelector('[data-rs="'+k+'"]');const c=Object.fromEntries(rvCnt(rvRows(k),k));const cur=RVF[k]||'';el.innerHTML=[['','ทั้งหมด']].concat(vals.map(v=>[v,v])).map(([v,l])=>`<button type="button" data-rsv="${esc(v)}" class="${cur===v?'on':''}">${esc(l)}${v?` <small>${(c[v]||0).toLocaleString()}</small>`:''}</button>`).join('')};
 seg('type',['เพิกถอน','ฟ้องใบแดง']);seg('sex',['ชาย','หญิง','ไม่ระบุ']);
 P.querySelectorAll('[data-rk]').forEach(el=>{const k=el.dataset.rk;if(el===document.activeElement||(el.tagName==='SELECT'&&k!=='per'))return;const v=RVF[k]||'';if(el.value!==v)el.value=v});
 $('rvpinfo').textContent=(RVF.a||RVF.b)?'📅 '+(RVF.per&&RVF.per!=='c'?(PLd[RVF.per]||PL[RVF.per])+' : ':'')+(RVF.a?fd(RVF.a):'…')+' – '+(RVF.b?fd(RVF.b):'ปัจจุบัน'):RVF.mon?'📅 เดือน '+rvMl(RVF.mon):'';
 const ks=Object.keys(RVF).filter(k=>RVF[k]&&!(k==='per')&&!(k==='b'&&RVF.a));
 const lab=k=>k==='a'?['ช่วงเวลา',(RVF.per&&RVF.per!=='c'?(PLd[RVF.per]||PL[RVF.per])+' ':'')+fd(RVF.a)+' – '+(RVF.b?fd(RVF.b):'ปัจจุบัน')]:k==='b'?['ถึง',fd(RVF.b)]:[RVFL[k]||k,rvFv(k,RVF[k])];
 $('rvchips').innerHTML=ks.length?'<b>กำลังกรอง:</b>'+ks.map(k=>{const[a,b]=lab(k);return`<button type="button" data-rx="${k}">${esc(a)}: ${esc(b)} ✕</button>`}).join('')+'<button type="button" class="all" data-rx="*">ล้างทั้งหมด</button>':'<span>ยังไม่ได้กรอง — เลือกจากช่องด้านบน หรือกดที่ตัวเลข/กราฟ/รายการเพื่อกรองย่อย</span>'}
/* ---- โหมด ---- */
function enterRV(){if(RVMODE)return;RVMODE=true;document.body.classList.add('rvmode');rvPanel();
 const sh=$('sheet'),h2=sh.querySelector('.sh h2'),H=sh.querySelectorAll('.cg h4');RVSAVE.h2=h2.textContent;RVSAVE.h4=[...H].map(h=>h.innerHTML);
 h2.textContent='สถิติเพิกถอน / ฟ้องใบแดง';H[0].textContent='สัดส่วนเพิกถอน / ฟ้องใบแดง (ราย)';H[1].textContent='คดี/ข้อหา 8 อันดับแรก (ราย)';H[2].textContent='สัญชาติ 6 อันดับแรก (ราย)';
 H[3].innerHTML=`สถิติรายเดือน (ราย) <span class="lg"><i style="--c:${RVTC['เพิกถอน']}"></i>เพิกถอน <i style="--c:${RVTC['ฟ้องใบแดง']}"></i>ฟ้องใบแดง</span>`;
 rvStat();rvRender();try{dmSync()}catch(e){}if(!SCR)try{$('s').scrollIntoView({block:'start'})}catch(e){}
 if(SCR){}else if(!RV.length||Date.now()-RVT>5*60e3)rvSync(RV.length>0);else if(RVOFF&&!RVOFF.ai&&RVOFF.list.length)setTimeout(()=>rvOffAI(false),600)}
function exitRV(){if(!RVMODE)return;RVMODE=false;document.body.classList.remove('rvmode');const sh=$('sheet');if(RVSAVE.h2)sh.querySelector('.sh h2').textContent=RVSAVE.h2;if(RVSAVE.h4)sh.querySelectorAll('.cg h4').forEach((h,i)=>{if(RVSAVE.h4[i]!=null)h.innerHTML=RVSAVE.h4[i]});
 render();try{dmSync()}catch(e){}try{$('s').scrollIntoView({block:'start'})}catch(e){}}
/* การ์ดบนแดชบอร์ดหลัก */
function rvMainCard(){if(!Array.isArray(RV)||(window.__TV&&!RV.length))return'';if(['team','place','rel','intel','type','hf','hc','hl','q','nl'].some(k=>FS[k]))return'';let R=RV;if(FS.nat)R=R.filter(r=>ck(r.nat)===ck(FS.nat));if(FS.sex)R=R.filter(r=>r.sex===FS.sex);if(FS.charge)R=R.filter(r=>chips(r.charge).some(x=>ck(x)===ck(FS.charge)));if(FS.a1)R=R.filter(r=>+r.age>=+FS.a1);if(FS.a2)R=R.filter(r=>+r.age&&+r.age<=+FS.a2);if(FS.name)R=R.filter(r=>String(r.name||'').toLowerCase().includes(String(FS.name).toLowerCase()));if(FS.pp)R=R.filter(r=>String(r.pp||'').toLowerCase().includes(String(FS.pp).toLowerCase()));if(FS.a||FS.b)R=R.filter(r=>(!FS.a||r.date>=FS.a)&&(!FS.b||r.date<=FS.b));else if(FS.mon)R=R.filter(r=>r.date.slice(0,7)===FS.mon);
 const x=rvS(R.filter(r=>r.type==='เพิกถอน')),y=rvS(R.filter(r=>r.type==='ฟ้องใบแดง')),ok=RV.length>0,c1=RVTC['เพิกถอน'],c2=RVTC['ฟ้องใบแดง'];
 const p=(a,b,i,c)=>`<p data-kpi="${a}" data-rvk="1" style="--ac:${c};--ag:${c}88"><b>${ok?b.toLocaleString():'—'}</b><span>${a.replace(/ \(ราย\)$/,'')}</span><em>${i}</em><u class="cb">${ok?'กดเพื่อดูแดชบอร์ด ›':'กดเพื่อโหลดข้อมูล ›'}</u></p>`;
 return`<div class="pr2 rvk" data-rv="1" style="--ac:${c2};--ag:${c2}88" title="เปิดแดชบอร์ดเพิกถอน / ฟ้องใบแดง">${p('เพิกถอน (ราย)',x,'🚫',c1)}${p('ฟ้องใบแดง (ราย)',y,'🟥',c2)}</div>`}
/* ---- วาดแดชบอร์ด ---- */
function rvKey(){return JSON.stringify(RVF)+'|'+RV.length+'|'+RVT}
function rvRender(){if(IOMODE)return ioRender();if(!RVMODE)return;rvPanel();rvFiltersUI();rvStat();
 const R=rvRows().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:a.i-b.i),N=rvS(R),NT=N||1,pc=x=>Math.round(x/NT*100)+'%';
 const ks=Object.keys(RVF).filter(k=>RVF[k]&&!['a','b','mon','per'].includes(k));
 $('rng').innerHTML=esc(RVF.mon?rvMl(RVF.mon):(RVF.a||RVF.b)?((RVF.per&&RVF.per!=='c'?(PLd[RVF.per]||PL[RVF.per])+' · ':'')+(RVF.a?fd(RVF.a):'…')+' – '+(RVF.b?fd(RVF.b):'ปัจจุบัน')):('ข้อมูลวันที่ '+(R.length?fd(R[0].date)+' – '+fd(R[R.length-1].date):'-')))+(ks.length?'<br><small>ตัวกรอง: '+esc(ks.map(k=>(RVFL[k]||k)+' '+rvFv(k,RVF[k])).join(' · '))+'</small>':'');
 /* KPI — ตัวเลขหลักอย่างเดียว ไม่มีตัวเลขย่อย */
 const A={n:N,x:rvS(R.filter(r=>r.type==='เพิกถอน')),y:rvS(R.filter(r=>r.type==='ฟ้องใบแดง')),nat:new Set(R.map(r=>r.nat).filter(Boolean)).size,chg:new Set(R.flatMap(r=>chips(r.charge).map(ck))).size,unit:new Set(R.map(r=>r.unit).filter(Boolean)).size,off:new Set(R.map(r=>r.off).filter(Boolean)).size};
 const KR=([a,b,i,c,k])=>`<p data-kpi="${a}" data-rkk="${k}" style="--ac:${c};--ag:${c}88"><b>${b}</b><span>${a.replace(/ \(ราย\)$/,'')}</span><em>${i}</em></p>`;
 const K=([a,b,i,c,k])=>`<div data-kpi="${a}" data-rkk="${k}" style="--ac:${c};--ag:${c}88"><em>${i}</em><b>${b}</b><span>${a}</span></div>`;
 const kp=$('kp');kp.classList.remove('cmpon');
 kp.innerHTML=K(['ผู้ต้องหารวม (ราย)',A.n.toLocaleString(),'👥',RVK.n,'n'])+`<div class="pr2" style="--ac:${RVTC['ฟ้องใบแดง']};--ag:${RVTC['ฟ้องใบแดง']}88">${KR(['เพิกถอน (ราย)',A.x.toLocaleString(),'🚫',RVTC['เพิกถอน'],'x'])}${KR(['ฟ้องใบแดง (ราย)',A.y.toLocaleString(),'🟥',RVTC['ฟ้องใบแดง'],'y'])}</div>`
  +K(['สัญชาติ',A.nat,'🌐',RVK.nat,'nat'])+K(['ข้อหา (ประเภท)',A.chg,'⚖️',RVK.chg,'chg'])+K(['ตม.จว.ที่ยื่น (หน่วย)',A.unit,'🏢',RVK.unit,'unit'])+K(['พงส.เจ้าของคดี (คน)',A.off,'👮',RVK.off,'off']);
 /* สรุปสำหรับผู้บังคับบัญชา */
 const top=(S,k)=>rvCnt(S,k).filter(x=>x[0]!=='ไม่ระบุ'),t1=a=>a[0]||null,key=rvKey();
 if(RVAI&&RVAI.key===key){$('insm').textContent='✨ วิเคราะห์โดย Claude';$('insl').innerHTML=RVAI.lines.map(l=>'<li>'+esc(l)+'</li>').join('')}
 else{$('insm').textContent='สรุปอัตโนมัติจากข้อมูลเพิกถอน / ใบแดง';
 if(!N){$('insl').innerHTML=insRow('ผลลัพธ์',RV.length?'ไม่พบข้อมูลตามเงื่อนไขที่เลือก':esc(RVERR||'ยังไม่มีข้อมูล — กด “อัปเดตข้อมูลจากชีต”'))}
 else{const mm=rvCnt(R,'mon'),m1=t1(mm),m2=mm[1],nn=top(R,'nat'),n1=t1(nn),cc=top(R,'charge'),c1=t1(cc),uu=top(R,'unit');
  const sub=(v,k)=>R.filter(r=>k==='charge'?chips(r.charge).some(x=>ck(x)===ck(v)):rvVal(r,k)===v);
  let h=insRow('ภาพรวม',`<b>${N.toLocaleString()} ราย</b> · เพิกถอน ${A.x.toLocaleString()} ราย (${pc(A.x)}) · ฟ้องใบแดง ${A.y.toLocaleString()} ราย (${pc(A.y)})`);
  if(m1){const S=sub(m1[0],'mon');h+=insRow('เดือนสูงสุด',`<b>${esc(rvMl(m1[0]))}</b> ${m1[1].toLocaleString()} ราย (${pc(m1[1])}) · สัญชาติเด่น ${esc((t1(top(S,'nat'))||['-'])[0])} · ข้อหาเด่น ${esc((t1(top(S,'charge'))||['-'])[0])}`+(m2?` · รองลงมา ${esc(rvMl(m2[0]))} ${m2[1]}`:''))}
  if(n1){const S=sub(n1[0],'nat');h+=insRow('สัญชาติสูงสุด',`<b>${esc(n1[0])}</b> ${n1[1].toLocaleString()} ราย (${pc(n1[1])}) · ข้อหาหลัก ${esc((t1(top(S,'charge'))||['-'])[0])} · ยื่นมากสุดจาก ${esc((t1(top(S,'unit'))||['-'])[0])}`+(nn[1]?` · รองลงมา ${esc(nn[1][0])} ${nn[1][1]}`:''))}
  if(c1){const S=sub(c1[0],'charge');h+=insRow('ข้อหาสูงสุด',`<b>${esc(c1[0])}</b> ${c1[1].toLocaleString()} ราย (${pc(c1[1])}) · สัญชาติหลัก ${esc((t1(top(S,'nat'))||['-'])[0])}`+(uu[0]?` · หน่วยยื่นมากสุด ${esc(uu[0][0])} ${uu[0][1]}`:'')+(cc[1]?` · รองลงมา ${esc(cc[1][0])} ${cc[1][1]}`:''))}
  $('insl').innerHTML=h}}
 /* โดนัท — เฉพาะ เพิกถอน / ฟ้องใบแดง */
 const TL=['เพิกถอน','ฟ้องใบแดง'].filter(t=>!RVF.type||RVF.type===t),TV=TL.map(t=>rvS(R.filter(r=>r.type===t))),TS=TV.reduce((a,b)=>a+b,0)||1,TCOL=TL.map(t=>RVTC[t]);
 make('c1',{type:'doughnut',data:{labels:TL,datasets:[{data:TV,backgroundColor:c=>dnFill(c,TCOL),hoverBackgroundColor:c=>dnFill(c,TCOL,1),borderWidth:0,borderRadius:7,spacing:5,hoverOffset:0,offset:c=>{const S=c.chart._sp;return S?(c.dataIndex===S.hl?Math.max(S.ho,S.ao||0):(S.ao||0)):0}}]},options:{onClick:(e,el)=>{if(el.length)rvSet('type',TL[el[0].index])},cutout:'70%',layout:{padding:18},rotation:SPN.a,plugins:{legend:{display:false},lbl:{on:'arc',ctr:TV.reduce((a,b)=>a+b,0).toLocaleString(),nv:1,red:1},dn:{on:1,red:1},spin:{on:1}}}});
 $('tt').innerHTML=TL.map((t,i)=>`<div class="dr rvdr" data-team="${esc(t)}" data-rvt="${esc(t)}" style="--c:${TCOL[i]}"><i></i><div class="dn1"><b>${esc(t)}</b></div><div class="dv"><b>${TV[i].toLocaleString()}</b><small>${Math.round(TV[i]/TS*100)}%</small></div><div class="bar"><span style="width:${Math.round(TV[i]/TS*100)}%"></span></div></div>`).join('');
 /* อันดับ */
 const rk=(id,a,cl,k)=>{const mx=Math.max(1,...a.map(x=>x[1]));$(id).innerHTML=a.length?a.map((x,i)=>`<div class="rk" style="--c:${cl[i%cl.length]}"><span class="nm" data-k="${k}" data-v="${esc(x[0])}"><i></i><span>${esc(x[0])}</span></span><span class="tr" data-k="${k}" data-v="${esc(x[0])}"><span style="width:${Math.max(2,x[1]/mx*100)}%"></span></span><span class="vl" data-k="${k}" data-v="${esc(x[0])}"><b>${x[1].toLocaleString()}</b><small>${Math.round(x[1]/NT*100)}%</small></span></div>`).join(''):'<div class="rk0">ไม่มีข้อมูล</div>'};
 rk('c5l',top(R,'charge').slice(0,8),RVPAL,'charge');
 rk('c3l',top(R,'nat').slice(0,6),RVPAL,'nat');
 /* รายเดือน */
 {const ym={};R.forEach(r=>{const k=r.date.slice(0,7);ym[k]=ym[k]||[0,0];if(r.type==='เพิกถอน')ym[k][0]+=rvW(r);else if(r.type==='ฟ้องใบแดง')ym[k][1]+=rvW(r)});const mk=Object.keys(ym).sort(),ml=k=>MON[+k.slice(5)-1]+' '+k.slice(2,4);
  const LC=[RVTC['เพิกถอน'],RVTC['ฟ้องใบแดง']],grd=(c,col)=>{const a=c.chart.chartArea;if(!a)return col+'22';const g=c.chart.ctx.createLinearGradient(0,a.top,0,a.bottom);g.addColorStop(0,col+'40');g.addColorStop(1,col+'00');return g};
  const ds=(lab,i)=>({label:lab,data:mk.map(k=>ym[k][i]),borderColor:LC[i],backgroundColor:c=>grd(c,LC[i]),fill:true,tension:.3,borderWidth:2.25,borderCapStyle:'round',pointRadius:c=>c.dataIndex==mk.length-1?4.5:(mk.length<=8?2.5:0),pointHoverRadius:6,pointBackgroundColor:LC[i],pointBorderColor:'#241330',pointBorderWidth:1.5,glow:LC[i],order:i});
  make('c2',{type:'line',options0:{onClick:(e,el,ch)=>{const n=ch.getElementsAtEventForMode(e,'index',{intersect:false},false);if(n.length)rvSet('mon',mk[n[0].index])}},data:{labels:mk.map(ml),datasets:[ds('เพิกถอน',0),ds('ฟ้องใบแดง',1)]},
   options:{layout:{padding:{top:20,bottom:4,left:16,right:20}},interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},lbl:{on:'pts'},runner:{on:1},tooltip:{enabled:true,backgroundColor:'rgba(30,16,44,.96)',borderColor:'rgba(167,139,250,.55)',borderWidth:1,padding:10,cornerRadius:10,titleFont:{weight:'700'},callbacks:{label:c=>' '+c.dataset.label+' '+c.raw+' ราย',footer:a=>'รวม '+a.reduce((t,c)=>t+c.raw,0)+' ราย'}}},scales:{x:{offset:true,grid:{display:false},border:{display:false},ticks:{color:'#ddd0f5',font:{size:12.5,weight:'600'},padding:10}},y:{min:-Math.max(3,Math.ceil(Math.max(1,...mk.map(k=>Math.max(ym[k][0],ym[k][1])))*.34)),grace:'22%',border:{display:false},ticks:{display:false},grid:{color:'rgba(200,180,255,.10)',drawTicks:false,borderDash:[3,5]}}}}})}
 rvBelow(R,N);requestAnimationFrame(kpFit)}
/* ---- สรุปตามหัวตาราง + ตารางรายการ ---- */
function rvBelow(R,N){const X=$('rvx');if(!X)return;const NT=N||1;
 const D=[['type','การปฏิบัติ','⚖️'],['mon','เดือน','🗓️'],['charge','คดี','📁'],['nat','สัญชาติ','🌐'],['off','พงส.เจ้าของคดี','👮'],['unit','ตม.จว.ที่ยื่นเรื่อง','🏢'],['sex','เพศ','🚻'],['ageb','ช่วงอายุ','🎂']];
 const card=([k,l,ic])=>{let a=rvCnt(R,k);if(k==='mon')a=a.sort((x,y)=>x[0]<y[0]?1:-1);if(k==='ageb'){const o=RVAB.map(x=>x[1]);a=a.sort((x,y)=>o.indexOf(x[0])-o.indexOf(y[0]))}
  const mx=Math.max(1,...a.map(x=>x[1])),open=RVOPEN[k],show=open?a:a.slice(0,8),cur=RVF[k]||'';
  const extra=k==='off'&&RVOFF?`<button type="button" class="rvmo" data-roff>${RVOFF.ai?'✅ Claude ตรวจชื่อซ้ำแล้ว':'⚙️ รวมชื่อที่สะกดต่างกันแล้ว'} · ดูรายละเอียด</button>`:'';
  return`<div class="rvc" id="rvc-${k}"><h5><span>${ic} ${l}</span><small>${a.length.toLocaleString()} รายการ</small></h5><div class="rvcl">${show.map(([v,n])=>`<button type="button" class="rvi${cur===v?' on':''}" data-rdk="${k}" data-rdv="${esc(v)}"><span class="nm">${esc(k==='mon'?rvMl(v):v)}</span><span class="br"><i style="width:${Math.max(2,n/mx*100)}%"></i></span><b>${n.toLocaleString()}</b><small>${Math.round(n/NT*100)}%</small></button>`).join('')||'<div class="rk0">ไม่มีข้อมูล</div>'}</div>${a.length>8?`<button type="button" class="rvmo" data-rmore="${k}">${open?'ย่อ':'แสดงทั้งหมด '+a.length+' รายการ'}</button>`:''}${extra}</div>`};
 const L=R.slice().sort((a,b)=>a.date<b.date?1:a.date>b.date?-1:b.i-a.i),show=L.slice(0,RVN);
 X.innerHTML=`<div class="card rvsum"><div class="ch"><h3>📊 สรุปตามหัวตาราง</h3><p class="note">ผลรวม (ราย) ตามหัวตารางของชีต — กดรายการใดก็ได้เพื่อกรองย่อย ทุกส่วนของแดชบอร์ดจะเปลี่ยนตาม · กดซ้ำเพื่อยกเลิก</p></div><div class="rvgrid">${D.map(card).join('')}</div></div>
 <div class="card rvtab"><div class="ch"><h3>📋 รายการข้อมูล</h3><p class="note">แสดง ${show.length.toLocaleString()} จาก ${L.length.toLocaleString()} แถว (${N.toLocaleString()} ราย) · ใหม่สุดก่อน</p></div><div class="rvtw"><table class="rvtb"><colgroup><col class="c0"><col class="c1"><col class="c2"><col class="c3"><col class="c4"><col class="c5"><col class="c6"><col class="c7"><col class="c8"></colgroup><thead><tr><th>#</th><th>วันที่ / เลขหนังสือ</th><th>การปฏิบัติ</th><th>ผู้ต้องหา / พาสปอร์ต</th><th>สัญชาติ · เพศ · อายุ</th><th>คดี</th><th>พงส.เจ้าของคดี</th><th>ตม.จว.ที่ยื่นเรื่อง</th><th class="n">ราย</th></tr></thead><tbody>
 ${show.map((r,i)=>`<tr><td class="mu" data-l="#">${i+1}</td><td data-l="วันที่"><span class="nw">${fd(r.date)}</span>${r.doc?`<small>${esc(r.doc)}</small>`:''}</td><td data-l="การปฏิบัติ">${rvChip(r.type,'rvty')}</td><td data-l="ผู้ต้องหา"><b class="pii">${esc(r.name)||'-'}</b>${r.pp?`<small class="pii">${esc(r.pp)}</small>`:''}</td><td data-l="สัญชาติ">${esc(r.nat)||'-'}<small>${esc(r.sex)}${r.age?' · '+esc(r.age)+' ปี':''}</small></td><td data-l="คดี">${r.charge?chips(r.charge).map(x=>rvChip(x)).join(' '):'-'}${r.note?`<small class="rvnt">📝 ${esc(r.note)}</small>`:''}</td><td data-l="พงส.">${esc(r.off)||'-'}</td><td data-l="หน่วยยื่น">${esc(r.unit)||'-'}</td><td class="n" data-l="ราย">${rvW(r)}</td></tr>`).join('')}
 </tbody></table></div>${L.length>show.length?`<button type="button" class="btn sm" id="rvmore">แสดงเพิ่มอีก ${Math.min(200,L.length-show.length)} แถว</button>`:''}</div>`}
/* ---- ✨ Claude วิเคราะห์เชิงลึก ---- */
async function rvAIRun(){if(IOMODE)return ioAIRun();const sp=await claude.use('sample');if(!sp){rvMsg('ฟีเจอร์นี้ใช้ไม่ได้ในมุมมองนี้ (ใช้ได้เมื่อเปิดผ่านหน้าแอป Claude)',false);return}
 const R=rvRows(),N=rvS(R);if(!N){rvMsg('ไม่มีข้อมูลตามตัวกรองนี้',false);return}const b=$('rvaib');b.disabled=true;rvMsg('⏳ Claude กำลังวิเคราะห์ข้อมูลเพิกถอน / ใบแดง…');
 try{const c=(k,n)=>rvCnt(R,k).filter(x=>x[0]!=='ไม่ระบุ').slice(0,n).map(([v,m])=>[k==='mon'?rvMl(v):v,m,Math.round(m/N*1000)/10+'%']);
  const ym={};R.forEach(r=>{const k=rvMl(r.date.slice(0,7));ym[k]=ym[k]||{เพิกถอน:0,ฟ้องใบแดง:0};if(ym[k][r.type]!=null)ym[k][r.type]+=rvW(r)});
  const cross=k=>{const o={};c(k,3).forEach(([v])=>{const S=R.filter(r=>k==='charge'?chips(r.charge).some(x=>ck(x)===ck(v)):(k==='mon'?rvMl(r.date.slice(0,7)):rvVal(r,k))===v);o[v]={สัญชาติ:rvCnt(S,'nat').filter(x=>x[0]!=='ไม่ระบุ').slice(0,2),ข้อหา:rvCnt(S,'charge').filter(x=>x[0]!=='ไม่ระบุ').slice(0,2),หน่วยยื่น:rvCnt(S,'unit').filter(x=>x[0]!=='ไม่ระบุ').slice(0,2)}});return o};
  const F={ช่วงข้อมูล:$('rng').textContent,ยอดรวม_ราย:N,เพิกถอน:rvS(R.filter(r=>r.type==='เพิกถอน')),ฟ้องใบแดง:rvS(R.filter(r=>r.type==='ฟ้องใบแดง')),รายเดือน:ym,สัญชาติ:c('nat',6),ข้อหา:c('charge',6),หน่วยที่ยื่น:c('unit',6),พงส:c('off',5),ช่วงอายุ:c('ageb',6),เพศ:c('sex',3),เชื่อมโยง_สัญชาติ:cross('nat'),เชื่อมโยง_ข้อหา:cross('charge')};
  const a=await sp.json(`คุณเป็นนักวิเคราะห์สถิติ เขียนสรุปสำหรับผู้บังคับบัญชา จากข้อมูลการ "เพิกถอนการอนุญาตให้อยู่ในราชอาณาจักร" และ "ฟ้องใบแดง" ของ กก.สส.บก.ตม.3 ด้านล่าง
ตอบเป็น JSON array ของสตริง 4 ข้อ ภาษาไทยทางการ สั้น กระชับ ข้อละไม่เกิน 120 ตัวอักษร เน้นตัวเลขและสัดส่วน ไม่เกริ่นนำ ไม่ให้ข้อเสนอแนะ ตามลำดับ:
(1) ภาพรวม: ยอดรวม สัดส่วนเพิกถอน/ฟ้องใบแดง และแนวโน้มรายเดือน (เดือนสูงสุด/ต่ำสุด)
(2) สัญชาติเด่น: ยอด % พร้อมข้อหาหลักและหน่วยที่ยื่นมากที่สุดของสัญชาตินั้น
(3) ข้อหาเด่น: ยอด % พร้อมสัญชาติหลักของข้อหานั้น
(4) หน่วยที่ยื่นเรื่องและ พงส. ที่รับผิดชอบมากที่สุด พร้อมยอด
ใช้เฉพาะตัวเลขในข้อมูล ห้ามแต่งข้อเท็จจริง ห้ามเอ่ยชื่อผู้ต้องหา ถ้าข้อมูลน้อยให้ระบุสั้นๆ
ข้อมูล: ${JSON.stringify(F)}`,{cache:false});
  const L=(Array.isArray(a)?a:(a&&(a.lines||a.summary))||[]).map(String).filter(Boolean).slice(0,4);if(!L.length)throw new Error('ไม่ได้รับผลสรุป');
  RVAI={key:rvKey(),lines:L};rvMsg('✅ อัปเดตสรุปแล้ว (กลับเป็นสรุปอัตโนมัติเมื่อเปลี่ยนตัวกรอง)',true);rvRender();try{$('ins').scrollIntoView({behavior:'smooth',block:'center'})}catch(e){}}
 catch(e){rvMsg('❌ '+((e&&(e.message||e.code))||e),false)}finally{b.disabled=false}}
/* ---- ส่งออกไฟล์ในโหมดเพิกถอน ---- */
function rvTag(){if(IOMODE)return ioTag();const p=[];if(RVF.mon)p.push(rvMl(RVF.mon));else if(RVF.a||RVF.b)p.push((RVF.a?sdt(RVF.a):'')+'-'+(RVF.b?sdt(RVF.b):''));['type','nat','charge','unit','off'].forEach(k=>{if(RVF[k])p.push(RVF[k])});return('เพิกถอน-ใบแดง'+(p.length?'_'+p.join('_'):'_ทั้งหมด')).replace(/[\\\/:*?"<>|\s]+/g,'')}
function rvTpHtml(R,p,per,pages){if(IOMODE)return ioTpHtml(R,p,per,pages);const S=R.slice(p*per,(p+1)*per);return `<div class="a4 rvtp" id="tp"><div class="sub"><div class="sh"><img src="${$('sheet').querySelector('.sh img').src}" alt=""><h2>ตารางข้อมูลเพิกถอน / ฟ้องใบแดง กก.สส.บก.ตม.3</h2></div><div>${$('rng').innerHTML}</div></div><table><tr><th>ที่</th><th>วันที่</th><th>การปฏิบัติ</th><th>เลขหนังสือ</th><th>ชื่อผู้ต้องหา</th><th>พาสปอร์ต</th><th>สัญชาติ</th><th>เพศ</th><th>อายุ</th><th>คดี</th><th>พงส.เจ้าของคดี</th><th>ตม.จว.ที่ยื่น</th><th>ราย</th></tr>${S.map((r,i)=>`<tr><td>${p*per+i+1}</td><td>${fd(r.date)}</td><td>${esc(r.type)}</td><td>${esc(r.doc)||'-'}</td><td class="pii">${esc(r.name)||'-'}</td><td class="pii">${esc(r.pp)||'-'}</td><td>${esc(r.nat)||'-'}</td><td>${esc(r.sex)}</td><td>${r.age||'-'}</td><td>${esc(r.charge)||'-'}</td><td>${esc(r.off)||'-'}</td><td>${esc(r.unit)||'-'}</td><td>${rvW(r)}</td></tr>`).join('')}</table><div class="ft"><span>เอกสารสรุปเพื่อใช้ในราชการ</span><span>หน้า ${p+1}/${pages}</span></div></div>`}
var RVXH=['ลำดับ','วันที่','การปฏิบัติ','เลขหนังสือ','พงส.เจ้าของคดี','พงส. (ตามที่พิมพ์ในชีต)','คดี','ชื่อผู้ต้องหา','เลขพาสปอร์ต','สัญชาติ','เพศ','อายุ','ตม.จว.ที่ยื่นเรื่อง','จำนวนราย','หมายเหตุ'];
var rvXRow=(r,i)=>[i+1,fd(r.date),r.type,r.doc,r.off,r.offRaw||r.off,r.charge,r.name,r.pp,r.nat,r.sex,r.age?+r.age:'',r.unit,rvW(r),r.note];
function rvXRows(){if(IOMODE)return ioXRows();return rvRows().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:a.i-b.i)}
function rvXlsx(){if(IOMODE)return ioXlsx();const R=rvXRows(),A=[['สถิติเพิกถอน / ฟ้องใบแดง กก.สส.บก.ตม.3'],[$('rng').textContent],[],RVXH].concat(R.map(rvXRow));A.push([],['','','','','','','','','','','','','รวม',rvS(R)]);
 const ws=XLSX.utils.aoa_to_sheet(A);ws['!cols']=[6,12,11,16,26,30,24,26,14,12,7,6,20,9,24].map(x=>({wch:x}));ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:8}},{s:{r:1,c:0},e:{r:1,c:8}}];
 if(R.length)ws['!autofilter']={ref:XLSX.utils.encode_range({s:{r:3,c:0},e:{r:3+R.length,c:RVXH.length-1}})};
 const sec=(t,k,lab)=>[[],[t],[lab,'จำนวน (ราย)','สัดส่วน']].concat(rvCnt(R,k).map(([v,n])=>[k==='mon'?rvMl(v):v,n,Math.round(n/(rvS(R)||1)*1000)/10+'%']));
 const S=[['สรุปเพิกถอน / ฟ้องใบแดง กก.สส.บก.ตม.3'],[$('rng').textContent],[],['รวมทั้งหมด (ราย)',rvS(R)]].concat(sec('สรุปตามการปฏิบัติ','type','การปฏิบัติ'),sec('สรุปรายเดือน','mon','เดือน'),sec('สรุปตามคดี','charge','คดี'),sec('สรุปตามสัญชาติ','nat','สัญชาติ'),sec('สรุปตามหน่วยที่ยื่นเรื่อง','unit','ตม.จว.ที่ยื่นเรื่อง'),sec('สรุปตาม พงส.เจ้าของคดี','off','พงส.เจ้าของคดี'),sec('สรุปตามเพศ','sex','เพศ'),sec('สรุปตามช่วงอายุ','ageb','ช่วงอายุ'));
 const ws2=XLSX.utils.aoa_to_sheet(S);ws2['!cols']=[{wch:34},{wch:14},{wch:10}];
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'เพิกถอน-ใบแดง');XLSX.utils.book_append_sheet(wb,ws2,'สรุป');
 return dl(new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),xname('xlsx'))}
function rvCsv(){if(IOMODE)return ioCsv();const q=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"',R=rvXRows();return dl(new Blob(['﻿'+[RVXH.map(q).join(',')].concat(R.map((r,i)=>rvXRow(r,i).map(q).join(','))).join('\n')],{type:'text/csv'}),xname('csv'))}
/* ---- ปรับขนาดตัวเลขบนการ์ดไม่ให้ทับไอคอน ---- */
/* ---- ไอคอนการ์ด: แทนอีโมจิด้วยไอคอนเส้นแบบ SVG สีตามการ์ด ---- */
var KPI_SVG={'👥':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 '🛡️':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
 '🤝':'<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
 '📁':'<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M8 13h8"/>',
 '🌐':'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
 '⚖️':'<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
 '💰':'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
 '📰':'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
 '🚫':'<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
 '🟥':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m14.5 12.5-5 5"/><path d="m9.5 12.5 5 5"/>',
 '🏢':'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
 '👮':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/>'};
function kpIcons(){const kp=$('kp');if(!kp)return;kp.querySelectorAll('[data-kpi] em:not(.kic)').forEach(e=>{const k=e.textContent.trim(),p=KPI_SVG[k]||KPI_SVG[k.replace(/️/g,'')+'️'];if(!p)return;e.classList.add('kic');e.setAttribute('aria-hidden','true');{const hx=(e.closest('[style*="--ac"]')||e.parentElement).style.getPropertyValue('--ac').trim(),m=hx.match(/^#([0-9a-f]{6})$/i);if(m){const n=parseInt(m[1],16),c=[n>>16,n>>8&255,n&255].join(',');e.style.background='rgba('+c+',.16)';e.style.borderColor='rgba('+c+',.4)';e.style.boxShadow='0 0 10px rgba('+c+',.22),inset 0 1px 0 rgba(255,255,255,.12)'}}e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'})}
function kpFit(){try{kpIcons()}catch(e){}const kp=$('kp');if(!kp||!kp.offsetParent)return;
 const it=[...kp.querySelectorAll('[data-kpi]')].map(c=>({c,b:c.querySelector(':scope>b'),i:c.querySelector(':scope>em'),l:c.querySelector(':scope>span')})).filter(x=>x.b);
 const rr=el=>{const r=document.createRange();r.selectNodeContents(el);return r.getBoundingClientRect()};
 const bad=()=>it.some(({c,b,i})=>{const C=c.getBoundingClientRect(),T=rr(b);if(!T.width)return false;if(T.right>C.right-4)return true;if(!i||getComputedStyle(i).position!=='absolute')return false;const I=i.getBoundingClientRect();return T.right>I.left-4&&T.left<I.right&&T.bottom>I.top&&T.top<I.bottom});
 const lb=()=>it.some(x=>{if(!x.l)return false;if(x.l.scrollWidth>x.l.clientWidth+1)return true;const C=x.c.getBoundingClientRect(),L=rr(x.l);return L.width>0&&L.right>C.right-6});
 /* ตัวเลขทุกการ์ดขนาดเท่ากัน: ลดพร้อมกันจนไม่มีใบไหนล้น/ทับไอคอน */
 kp.classList.remove('klw');let s=27,n=0;kp.style.setProperty('--kn',s+'px');while(bad()&&s>16&&n++<24){s--;kp.style.setProperty('--kn',s+'px')}
 let l=12.5,m=0;kp.style.setProperty('--kl',l+'px');while(lb()&&l>11&&m++<8){l-=.5;kp.style.setProperty('--kl',l+'px')}kp.classList.toggle('klw',lb())}
addEventListener('resize',()=>{clearTimeout(window.__kpfT);window.__kpfT=setTimeout(kpFit,150)});
/* คลิกบนแผ่นแดชบอร์ด: ในโหมด RV ให้กรองแทนการเปิดหน้าต่างของข้อมูลจับกุม */
(()=>{const cap=(id,fn)=>{const el=$(id);if(el)el.addEventListener('click',e=>{if(fn(e)){e.stopImmediatePropagation();e.preventDefault()}},true)};
 cap('kp',e=>{if(IOMODE)return false;if(!RVMODE){if(e.target.closest('[data-rv]')){enterRV();return true}return false}const d=e.target.closest('[data-rkk]');if(!d)return true;const k=d.dataset.rkk;
  if(k==='x')rvSet('type','เพิกถอน');else if(k==='y')rvSet('type','ฟ้องใบแดง');
  else{document.body.classList.add('rvdet');try{dmSync()}catch(e){}const t=$({nat:'rvc-nat',chg:'rvc-charge',unit:'rvc-unit',off:'rvc-off'}[k]||'rvx');if(t){t.scrollIntoView({behavior:'smooth',block:'center'});t.classList.remove('flash');void t.offsetWidth;t.classList.add('flash')}}return true});
 ['c5l','c3l'].forEach(id=>cap(id,e=>{if(!RVMODE||IOMODE)return false;const t=e.target.closest('[data-k]');if(t)rvSet(t.dataset.k,t.dataset.v);return true}));
 cap('tt',e=>{if(!RVMODE||IOMODE)return false;const t=e.target.closest('[data-rvt]');if(t)rvSet('type',t.dataset.rvt);return true});
 try{rvOffApply()}catch(e){}
 setTimeout(()=>{try{if(!window.__TV&&!SCR&&(!RV.length||Date.now()-RVT>30*60e3))rvSync(true)}catch(e){}},4000)})();
/* ===== IO: แดชบอร์ด IO (สุ่มตรวจ NON-B / หอพัก ม.37/38 / ข้อมูลท้องถิ่น) — v173 =====
   ใช้โครงเดียวกับแดชบอร์ดเพิกถอน (RVMODE=true) + IOMODE=true แต่ใช้ธีมสีเดียวกับแดชบอร์ดหลัก */
var IO_DEF='https://docs.google.com/spreadsheets/d/1AbAY7pccvY1HeW6huvTjEsG1qmvnH8qvXe-TpRmdW3U/edit?gid=1893605362';
var IOHEADS=null,IOR=[],IOT=0,IOMODE=false,IOBUSY=false,IOF={},IOERR='',IOAI=null,ION=100,IOOPEN={},IOVIA='';
/* ชื่อหัวข้อใช้ตามหัวตารางในชีตเสมอ (อ่านใหม่ทุกครั้งที่ดึงข้อมูล) — x[3] = คำค้นที่ใช้แทนกันได้ */
var IOK=[['nonb','สุ่มตรวจขออยู่ต่อ','สุ่มตรวจขออยู่ต่อ','non-b nonb ขออยู่ต่อ'],['dorm','(ม.37/38)','(ม.37/38)','หอพัก ม.37 37/38'],['local','ข้อมูลท้องถิ่น','ข้อมูลท้องถิ่น','ท้องถิ่น']];
var IOC={nonb:'#4a8de0',dorm:'#c4842c',local:'#20a080'};
var IOL={},IOS={};function ioHeads(h){if(h)IOK.forEach(x=>{const v=String(h[x[0]]||'').replace(/\s+/g,' ').trim();if(v){x[1]=v;x[2]=v}});IOL=Object.fromEntries(IOK.map(x=>[x[0],x[1]]));IOS=Object.fromEntries(IOK.map(x=>[x[0],x[2]]))}ioHeads();
var IOFL={per:'ช่วงเวลา',a:'ตั้งแต่',b:'ถึง',mon:'เดือน',team:'ชุดปฏิบัติการ',type:'ประเภทงาน',q:'ค้นหา'};
Object.assign(KPI_SVG,{'📊':'<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>','🛂':'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M6.5 16h11"/>','🏠':'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>','📍':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>','🗓️':'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>','📈':'<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>','🕵️':'<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>'});
/* เพิ่มลิงก์ IO (และเพิกถอน) เข้ารายการแหล่งข้อมูลครั้งแรก — จัดการได้เหมือนลิงก์อื่น */
try{if(!window.__TV&&localStorage.getItem('tm3_srcfix')!=='2'){const A=gsSrcs();if(!A.some(x=>x.mode==='rv'))A.push({id:'rv0',name:'เพิกถอน+ใบแดง',url:RV_DEF,on:true,mode:'rv'});if(!A.some(x=>x.mode==='io'))A.push({id:'io0',name:'IO',url:IO_DEF,on:true,mode:'io'});gsSrcSave(A);localStorage.setItem('tm3_srcfix','2')}}catch(e){}
try{const c=JSON.parse(localStorage.getItem('tm3_iodata')||'null');if(c&&Array.isArray(c.rows)){IOR=c.rows;IOT=c.t||0;ioHeads(c.heads)}}catch(e){}
function ioSrc(){let a=[];try{a=gsSrcs()}catch(e){}return a.find(x=>x.mode==='io')||{id:'io0',name:'IO',url:IO_DEF,on:true,mode:'io'}}
var ioTeam=v=>{const m=String(v||'').match(/(\d)/);return m?'ชป.'+m[1]:''};
var ioNum=v=>{const s=String(v==null?'':v).replace(/[,\s]/g,'');return s===''?null:(+s||0)};
/* แยกคอลัมน์จากหัวตาราง (ทนต่อการสลับคอลัมน์) */
function ioHead(H){const c={};H.forEach((h,j)=>{h=String(h||'').replace(/\s+/g,' ').trim();if(!h)return;
 if(c.mon==null&&/^เดือน/.test(h))c.mon=j;else if(c.date==null&&/^วันที่/.test(h))c.date=j;else if(c.team==null&&/^ชป/.test(h))c.team=j;
 else if(c.nonb==null&&/NON-?B|ขออยู่ต่อ/i.test(h))c.nonb=j;else if(c.dorm==null&&/หอพัก|37\/38/.test(h))c.dorm=j;else if(c.local==null&&/ท้องถิ่น/.test(h))c.local=j;else if(c.tot==null&&j>=6)c.tot=j});return c}
function ioHdrRow(R){for(let i=0;i<Math.min(R.length,12);i++){const c=ioHead(R[i]||[]);if(c.team!=null&&(c.nonb!=null||c.dorm!=null||c.local!=null))return i}return -1}
var ioDate=s=>{const m=String(s||'').match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})/);if(!m)return'';let y=+m[3];if(y<100)y+=y>=40?2500:2000;if(y>2400)y-=543;return y+'-'+String(m[2]).padStart(2,'0')+'-'+String(m[1]).padStart(2,'0')};
/* คอลัมน์ “เดือน”: รองรับทั้งเลขเดือน (1–12) และแบบไทย เช่น “ม.ค.69” / “ต.ค. 2569” */
var IOMF=['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
function ioMonCell(v){const s=String(v==null?'':v).replace(/\s+/g,'');if(!s)return null;if(/^\d{1,2}$/.test(s)){const m=+s;return m>=1&&m<=12?{m,y:0}:null}
 const n=s.replace(/\./g,'');let m=0,rest='';IOMF.forEach((f,i)=>{if(!m&&n.startsWith(f)){m=i+1;rest=n.slice(f.length)}});
 if(!m)MON.forEach((a,i)=>{const k=a.replace(/\./g,'');if(!m&&n.startsWith(k)&&!/^[ก-๙]/.test(n.slice(k.length))){m=i+1;rest=n.slice(k.length)}});if(!m)return null;
 let y=+(rest.match(/\d+/)||[0])[0]||0;if(y&&y<100)y+=2500;if(y>2400)y-=543;return{m,y}}
var ioMonOut=(mon,thai)=>thai?MON[+mon.slice(5)-1]+String(+mon.slice(0,4)+543).slice(2):String(+mon.slice(5));
function ioParse(V){const R=(V||[]).map(r=>(r||[]).map(x=>x==null?'':String(x)));const hi=ioHdrRow(R);if(hi<0)throw new Error('ไม่พบแถวหัวตาราง (ต้องมีคอลัมน์ “ชป.” และ “NON-B / หอพัก / ข้อมูลท้องถิ่น”)');
 const C=ioHead(R[hi]),g=(r,k)=>C[k]==null?'':String(r[C[k]]||'').trim();IOHEADS={};['nonb','dorm','local'].forEach(k=>{if(C[k]!=null)IOHEADS[k]=R[hi][C[k]]});ioHeads(IOHEADS);
 /* ปีของแถวที่ไม่มีวันที่ (ยอดรวมรายเดือน) — อิงปีของแถวที่มีวันที่ล่าสุด */
 let Y=0,YM=0;for(let i=hi+1;i<R.length;i++){const d=ioDate(g(R[i],'date'));if(d){const y=+d.slice(0,4),m=+d.slice(5,7);if(y>Y||(y===Y&&m>YM)){Y=y;YM=m}}}if(!Y){Y=new Date().getFullYear();YM=12}
 const out=[];for(let i=hi+1;i<R.length;i++){const r=R[i];const n=[ioNum(g(r,'nonb')),ioNum(g(r,'dorm')),ioNum(g(r,'local'))];if(n.every(x=>x==null))continue;
  const team=ioTeam(g(r,'team'));let date=ioDate(g(r,'date')),mon='';
  if(date)mon=date.slice(0,7);else{const mc=ioMonCell(g(r,'mon'));if(!mc)continue;mon=(mc.y||(mc.m>YM?Y-1:Y))+'-'+String(mc.m).padStart(2,'0')}
  const o={row:i+1,mon,date,d:date||mon+'-01',agg:!date,team:team||'ไม่ระบุ',nonb:n[0]||0,dorm:n[1]||0,local:n[2]||0};o.tot=o.nonb+o.dorm+o.local;o.i=out.length;out.push(o)}
 return out}
function ioStat(t){const e=$('iost');if(!e)return;if(t){e.textContent=t;return}
 e.textContent=IOR.length?('ข้อมูล '+IOR.length.toLocaleString()+' แถว · อัปเดต '+(IOT?new Date(IOT).toLocaleString('th-TH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' น.':'-')):(IOERR||'ยังไม่มีข้อมูล — กด “อัปเดตข้อมูล”')}
function ioMsg(t,ok){const e=$('ioaim');if(!e)return;e.textContent=t||'';e.className='rvaim'+(ok===false?' er':ok?' ok':'')}
async function ioSync(quiet){if(IOBUSY||SCR)return;IOBUSY=true;ioStat('⏳ กำลังดึงข้อมูลจากชีต IO…');const b=$('iosync');if(b)b.disabled=true;
 try{const s=ioSrc();if(s.on===false)throw new Error('ลิงก์ “'+s.name+'” ถูกตัดการเชื่อมต่ออยู่ — เปิดได้ที่ปุ่ม ⚙️ ในหน้าตารางข้อมูล');let V=null,ce=null,via='connector';try{V=await gsViaConnector(s.url)}catch(e){ce=e}
  if(!V){if(ce&&!['not_granted','capability_disabled','capability_removed'].includes(ce.code))throw ce;via='csv';
   const c=new AbortController(),to=setTimeout(()=>c.abort(),20000);const r=await fetch(gsUrl(s.url)+'&t='+Date.now(),{cache:'no-store',signal:c.signal});clearTimeout(to);if(!r.ok)throw new Error('HTTP '+r.status);
   const t=await r.text();if(/<html/i.test(t.slice(0,200)))throw new Error('ไม่มีสิทธิ์อ่านชีตนี้ (ต้องเชื่อม Google Sheets หรือเปิดสิทธิ์ทุกคนที่มีลิงก์ดูได้)');V=csvRows(t.replace(/^﻿/,''))}
  IOR=ioParse(V);IOT=Date.now();IOERR='';IOVIA=via;try{localStorage.setItem('tm3_iodata',JSON.stringify({t:IOT,rows:IOR,heads:IOHEADS}))}catch(e){}
  if(!quiet)gsToast('✅ ดึงข้อมูล IO แล้ว '+IOR.length.toLocaleString()+' แถว',true)}
 catch(e){IOERR='ดึงข้อมูลไม่สำเร็จ: '+((e&&(GSE[e.code]||e.message||e.code))||e);if(!quiet)gsToast('❌ ดึงข้อมูล IO ไม่สำเร็จ<br><small>'+esc(IOERR)+'</small>',false)}
 IOBUSY=false;if(b)b.disabled=false;ioStat();try{if(IOMODE)ioRender()}catch(e){}try{xdRefresh('io')}catch(e){}}
/* ---- กรอง / นับ ---- */
var ioV=r=>IOF.type?(+r[IOF.type]||0):r.tot,ioS=a=>a.reduce((t,r)=>t+ioV(r),0),ioSK=(a,k)=>a.reduce((t,r)=>t+(+r[k]||0),0);
var ioMl=k=>MON[+k.slice(5)-1]+' '+yr(k.slice(0,4));
var ioFv=(k,v)=>k==='mon'?ioMl(v):(k==='a'||k==='b')?fd(v):k==='per'?(PLd[v]||PL[v]||v):k==='type'?IOL[v]||v:v;
/* แถวสรุปรายเดือนที่เดือนนั้นมีแถวรายวันด้วย = ยอดช่วงต้นเดือน (นับตั้งแต่วันที่ 1) ไม่ซ้ำกับรายวัน — ใช้ตามวันที่ของแถวเมื่อกรองช่วงกลางเดือน ส่วนเดือนที่มีแต่สรุปรายเดือนยังนับทั้งก้อนเมื่อกรองในเดือนนั้น */
var IOHD={n:-1,s:null};function ioHasDaily(r){if(IOHD.n!==IOR.length||IOHD.r!==IOR){IOHD={n:IOR.length,r:IOR,s:new Set(IOR.filter(x=>!x.agg).map(x=>x.team+'|'+x.mon))}}return IOHD.s.has(r.team+'|'+r.mon)}
function ioAggIn(r,a){return !!(r.agg&&r.mon===a.slice(0,7)&&!ioHasDaily(r))}
function ioRows(skip){const f=IOF,q=String(f.q||'').toLowerCase().trim();return IOR.filter(r=>{
 if(skip!=='a'&&f.a&&r.d<f.a&&!ioAggIn(r,f.a))return false;if(skip!=='b'&&f.b&&r.d>f.b)return false;
 if(skip!=='mon'&&f.mon&&r.mon!==f.mon)return false;if(skip!=='team'&&f.team&&r.team!==f.team)return false;
 if(q){const s=[r.team,ioMl(r.mon),r.date?fd(r.date):'สรุปรายเดือน',r.date,r.agg?'รายเดือน':'รายวัน'].join(' ').toLowerCase();
  const tq=IOK.find(x=>(x[1]+' '+x[3]).toLowerCase().includes(q));if(!s.includes(q)&&!(tq&&+r[tq[0]]>0))return false}
 return true})}
function ioCnt(R,k){if(k==='type')return IOK.filter(x=>!IOF.type||IOF.type===x[0]).map(x=>[x[0],ioSK(R,x[0])]).sort((a,b)=>b[1]-a[1]);
 const m={};R.forEach(r=>{const v=k==='mon'?r.mon:k==='kind'?(r.agg?'สรุปรายเดือน':'รายงานรายวัน'):k==='wd'?(r.agg?'ไม่ระบุวัน':['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'][new Date(r.date+'T00:00').getDay()]):r[k]||'ไม่ระบุ';m[v]=(m[v]||0)+ioV(r)});return Object.entries(m).sort((a,b)=>b[1]-a[1])}
function ioTime(k,v){if(k==='per'){if(!v){delete IOF.per;delete IOF.a;delete IOF.b}else{IOF.per=v;const r=perRange(v);if(r){IOF.a=r[0];IOF.b=r[1]}}delete IOF.mon}
 else if(k==='a'||k==='b'){if(v)IOF[k]=v;else delete IOF[k];if(IOF.a||IOF.b)IOF.per='c';else delete IOF.per;delete IOF.mon}
 else if(k==='mon'){if(v){IOF.mon=v;delete IOF.a;delete IOF.b;delete IOF.per}else delete IOF.mon}}
function ioSet(k,v){if(['per','a','b','mon'].includes(k))ioTime(k,IOF[k]===v?'':v);else if(!v||IOF[k]===v)delete IOF[k];else IOF[k]=v;ION=100;ioRender()}
/* ---- แผงควบคุม (ซ่อนหลังปุ่ม ⚙) ---- */
function ioPanel(){if($('iop'))return;const s=$('s');const P=document.createElement('div');P.id='iop';P.className='card rvp iop';
 P.innerHTML=`<div class="rvh"><div class="rvt"><b>🕵️ แดชบอร์ด IO</b><small id="iost"></small></div>
 <div class="rvact" role="toolbar" aria-label="เครื่องมือ"><button type="button" class="rvb" id="iosync" title="ดึงข้อมูลล่าสุดจากชีต IO">🔄 อัปเดตข้อมูล</button><button type="button" class="rvb" id="ioadd" title="ไปหน้าบันทึกข้อมูล IO">✍️ บันทึก IO</button><span class="rvsep"></span><button type="button" class="rvb pr" id="ioxo" title="ส่งออกภาพนำเสนอ / ตารางข้อมูล (PNG · PDF · Excel · CSV)">📤 ส่งออก</button><button type="button" class="rvb gd" id="ioxq" title="ส่งออกด่วนตามค่าที่ใช้ล่าสุด">⚡ ด่วน</button><span class="rvsep"></span><button type="button" class="rvb ai" id="ioaib" title="ให้ Claude วิเคราะห์เชิงลึก">✨ Claude วิเคราะห์</button></div></div>
 <span class="rvaim" id="ioaim"></span>
 <div class="rvq4">
  <section class="rvs s0"><h6><i>⏱</i>ช่วงเวลา<button type="button" class="rvx0" data-iclr title="ล้างช่วงเวลา">↺ ล้าง</button></h6>
   <div class="rvrw"><span>ช่วงสำเร็จรูป</span><select class="psel" data-ik="per">${'<option value="">ทั้งหมด</option>'+Object.entries(PL).filter(([k])=>k!='c').map(([k,l])=>`<option value="${k}">${l}</option>`).join('')+'<option value="c">กำหนดเอง</option>'}</select></div>
   <div class="rvrw"><span>เดือน + ปี</span><select class="pmon" data-ik="mon"></select></div>
   <div class="rvrw"><span>ตั้งแต่วันที่</span><input type="date" data-ik="a"></div>
   <div class="rvrw"><span>ถึงวันที่</span><input type="date" data-ik="b"></div>
   <div class="pinfo" id="iopinfo"></div></section>
  <section class="rvs s1"><h6><i>1</i>ชุดปฏิบัติการ</h6>
   <div class="rvrw"><span>ชป.</span><div class="rvseg" data-is="team"></div></div></section>
  <section class="rvs s2"><h6><i>2</i>ประเภทงาน</h6>
   <div class="rvrw"><span>ประเภท</span><div class="rvseg" data-is="type"></div></div>
   <p class="iohint">เลือกประเภทแล้วตัวเลขทุกส่วนจะนับเฉพาะงานประเภทนั้น</p></section>
  <section class="rvs s3"><h6><i>3</i>ค้นหา</h6>
   <div class="rvrw"><span>ค้นหา</span><input data-ik="q" placeholder="เช่น ชป.2 / ก.ย. / ข้อมูลท้องถิ่น"></div></section>
 </div><div class="rvchips" id="iochips"></div>`;
 s.insertBefore(P,s.firstChild);
 const X=document.createElement('div');X.id='iox';X.className='rvx';const sc=$('sheet').closest('.sc');sc.parentNode.insertBefore(X,sc.nextSibling);
 P.querySelectorAll('input[type=date][data-ik]').forEach(inp=>{inp.dataset.k=inp.dataset.ik;const n=YS.length;thDate(inp);YS.length=n;delete inp.dataset.k});
 $('iosync').onclick=()=>ioSync(false);$('ioadd').onclick=()=>xdGoForm('io');
 $('ioxo').onclick=()=>xOpen('info');$('ioxq').onclick=()=>{try{$('xquick').click()}catch(e){}};$('ioaib').onclick=ioAIRun;
 P.addEventListener('change',e=>{const t=e.target.closest('[data-ik]');if(!t)return;const k=t.dataset.ik,v=String(t.value||'').trim();
  if(['per','a','b','mon'].includes(k)){if(k==='per'&&v==='c'){IOF.per='c';ION=100;ioRender();return}ioTime(k,v)}else if(v)IOF[k]=v;else delete IOF[k];ION=100;ioRender()});
 let qt;P.addEventListener('input',e=>{const t=e.target.closest('[data-ik]');if(!t||t.tagName==='SELECT'||t.type==='hidden')return;clearTimeout(qt);qt=setTimeout(()=>{const k=t.dataset.ik,v=String(t.value||'').trim();if(v)IOF[k]=v;else delete IOF[k];ION=100;ioRender()},150)});
 P.addEventListener('click',e=>{if(e.target.closest('[data-iclr]')){['per','a','b','mon'].forEach(k=>delete IOF[k]);ION=100;ioRender();return}
  const b=e.target.closest('[data-isv]');if(b){ioSet(b.closest('[data-is]').dataset.is,b.dataset.isv);return}const c=e.target.closest('[data-ix]');if(c){const k=c.dataset.ix;if(k==='*')IOF={};else if(k==='per'||k==='a'||k==='b')['per','a','b'].forEach(x=>delete IOF[x]);else delete IOF[k];ION=100;ioRender()}});
 X.addEventListener('click',e=>{const m=e.target.closest('[data-imore]');if(m){IOOPEN[m.dataset.imore]=!IOOPEN[m.dataset.imore];ioRender();return}if(e.target.closest('#iomore')){ION+=200;ioRender();return}
  const ed=e.target.closest('[data-ioed]');if(ed){const r=IOR.find(x=>String(x.row)===ed.dataset.ioed);if(r)xdGoForm('io',r);return}
  const d=e.target.closest('[data-idk]');if(d)ioSet(d.dataset.idk,d.dataset.idv)})}
function ioFiltersUI(){const P=$('iop');if(!P)return;try{dmSync()}catch(e){}
 {const el=P.querySelector('select[data-ik="mon"]');if(el&&el!==document.activeElement){const c=ioCnt(ioRows('mon'),'mon').sort((a,b)=>a[0]<b[0]?1:-1),cur=IOF.mon||'';
  el.innerHTML='<option value="">ทั้งหมด</option>'+c.map(([v,n])=>`<option value="${esc(v)}">${esc(ioMl(v))}  (${n.toLocaleString()})</option>`).join('')+(cur&&!c.some(x=>x[0]===cur)?`<option value="${esc(cur)}">${esc(ioMl(cur))}  (0)</option>`:'');el.value=cur}}
 const seg=(k,vals)=>{const el=P.querySelector('[data-is="'+k+'"]');const c=Object.fromEntries(ioCnt(ioRows(k),k));const cur=IOF[k]||'';el.innerHTML=[['','ทั้งหมด']].concat(vals).map(([v,l])=>`<button type="button" data-isv="${esc(v)}" class="${cur===v?'on':''}">${esc(l)}${v?` <small>${(c[v]||0).toLocaleString()}</small>`:''}</button>`).join('')};
 seg('team',['ชป.1','ชป.2','ชป.3'].map(t=>[t,t]));
 {const el=P.querySelector('[data-is="type"]');const R=ioRows(),cur=IOF.type||'';el.innerHTML=[['','ทั้งหมด']].concat(IOK.map(x=>[x[0],x[2]])).map(([v,l])=>`<button type="button" data-isv="${esc(v)}" class="${cur===v?'on':''}">${esc(l)}${v?` <small>${ioSK(R,v).toLocaleString()}</small>`:''}</button>`).join('')}
 P.querySelectorAll('[data-ik]').forEach(el=>{const k=el.dataset.ik;if(el===document.activeElement||(el.tagName==='SELECT'&&k!=='per'))return;const v=IOF[k]||'';if(el.value!==v)el.value=v});
 $('iopinfo').textContent=(IOF.a||IOF.b)?'📅 '+(IOF.per&&IOF.per!=='c'?(PLd[IOF.per]||PL[IOF.per])+' : ':'')+(IOF.a?fd(IOF.a):'…')+' – '+(IOF.b?fd(IOF.b):'ปัจจุบัน'):IOF.mon?'📅 เดือน '+ioMl(IOF.mon):'';
 const ks=Object.keys(IOF).filter(k=>IOF[k]&&k!=='per'&&!(k==='b'&&IOF.a));
 const lab=k=>k==='a'?['ช่วงเวลา',(IOF.per&&IOF.per!=='c'?(PLd[IOF.per]||PL[IOF.per])+' ':'')+fd(IOF.a)+' – '+(IOF.b?fd(IOF.b):'ปัจจุบัน')]:k==='b'?['ถึง',fd(IOF.b)]:[IOFL[k]||k,ioFv(k,IOF[k])];
 $('iochips').innerHTML=ks.length?'<b>กำลังกรอง:</b>'+ks.map(k=>{const[a,b]=lab(k);return`<button type="button" data-ix="${k}">${esc(a)}: ${esc(b)} ✕</button>`}).join('')+'<button type="button" class="all" data-ix="*">ล้างทั้งหมด</button>':'<span>ยังไม่ได้กรอง — เลือกจากช่องด้านบน หรือกดที่ตัวเลข/กราฟ/รายการเพื่อกรองย่อย</span>'}
/* ---- เข้า / ออก ---- */
function enterIO(){if(IOMODE)return;if(RVMODE)exitRV(true);if(TMODE)teamSet('',true);IOMODE=true;RVMODE=true;document.body.classList.add('rvmode','iomode');ioPanel();
 const sh=$('sheet'),h2=sh.querySelector('.sh h2'),H=sh.querySelectorAll('.cg h4');RVSAVE.h2=h2.textContent;RVSAVE.h4=[...H].map(h=>h.innerHTML);
 h2.textContent='สถิติงาน IO';H[0].textContent='สัดส่วนตามประเภทงาน (ครั้ง)';H[1].textContent='ผลรายชุดปฏิบัติการ (ครั้ง)';H[2].textContent='เดือนที่มีผลสูงสุด (ครั้ง)';

 ioStat();ioRender();try{dmSync()}catch(e){}if(!SCR)try{$('s').scrollIntoView({block:'start'})}catch(e){}
 if(!SCR&&(!IOR.length||Date.now()-IOT>5*60e3))ioSync(IOR.length>0)}
function exitIO(quiet){if(!IOMODE)return;IOMODE=false;document.body.classList.remove('iomode');exitRV(quiet)}
/* ---- วาดแดชบอร์ด ---- */
function ioKey(){return JSON.stringify(IOF)+'|'+IOR.length+'|'+IOT}
function ioRender(){if(!IOMODE)return;ioPanel();ioFiltersUI();ioStat();{const H=$('sheet').querySelectorAll('.cg h4');if(H[3])H[3].innerHTML='สถิติรายเดือน (ครั้ง) <span class="lg">'+IOK.filter(x=>!IOF.type||IOF.type===x[0]).map(x=>`<i style="--c:${IOC[x[0]]}"></i>${esc(x[2])}`).join(' ')+'</span>'}
 const R=ioRows().sort((a,b)=>a.d<b.d?-1:a.d>b.d?1:a.i-b.i),N=ioS(R),NT=N||1,pc=x=>Math.round(x/NT*100)+'%',TL=IOK.filter(x=>!IOF.type||IOF.type===x[0]);
 const ks=Object.keys(IOF).filter(k=>IOF[k]&&!['a','b','mon','per'].includes(k));
 $('rng').innerHTML=esc(IOF.mon?ioMl(IOF.mon):(IOF.a||IOF.b)?((IOF.per&&IOF.per!=='c'?(PLd[IOF.per]||PL[IOF.per])+' · ':'')+(IOF.a?fd(IOF.a):'…')+' – '+(IOF.b?fd(IOF.b):'ปัจจุบัน')):('ข้อมูล '+(R.length?ioMl(R[0].mon)+' – '+(R[R.length-1].date?fd(R[R.length-1].date):ioMl(R[R.length-1].mon)):'-')))+(ks.length?'<br><small>ตัวกรอง: '+esc(ks.map(k=>(IOFL[k]||k)+' '+ioFv(k,IOF[k])).join(' · '))+'</small>':'');
 /* KPI */
 const days=new Set(R.filter(r=>!r.agg).map(r=>r.date)).size,dayTot=ioS(R.filter(r=>!r.agg)),avg=days?Math.round(dayTot/days):0;
 const K=([a,b,i,c,k])=>`<div data-kpi="${a}" data-iok="${k}" style="--ac:${c};--ag:${c}88"><em>${i}</em><b>${b}</b><span>${a}</span></div>`;
 const kp=$('kp');kp.classList.remove('cmpon');
 kp.innerHTML=K([IOF.type?'รวม '+IOS[IOF.type]+' (ครั้ง)':'ผลงาน IO รวม (ครั้ง)',N.toLocaleString(),'📊','#f472b6','n'])
  +IOK.map(x=>K([x[1],ioSK(R,x[0]).toLocaleString(),{nonb:'🛂',dorm:'🏠',local:'📍'}[x[0]],IOC[x[0]],x[0]])).join('')
  +K(['เฉลี่ยต่อวัน (ครั้ง)',avg.toLocaleString(),'📈','#a78bfa','avg']);
 /* สรุปสำหรับผู้บังคับบัญชา */
 const key=ioKey();
 if(IOAI&&IOAI.key===key){$('insm').textContent='✨ วิเคราะห์โดย Claude';$('insl').innerHTML=IOAI.lines.map(l=>'<li>'+esc(l)+'</li>').join('')}
 else{$('insm').textContent='สรุปอัตโนมัติจากข้อมูล IO';
  if(!N){$('insl').innerHTML=insRow('ผลลัพธ์',IOR.length?'ไม่พบข้อมูลตามเงื่อนไขที่เลือก':esc(IOERR||'ยังไม่มีข้อมูล — กด “อัปเดตข้อมูล”'))}
  else{const tt=ioCnt(R,'team').filter(x=>x[0]!=='ไม่ระบุ'),mm=ioCnt(R,'mon'),ty=ioCnt(R,'type');
   let h=insRow('ภาพรวม',`<b>${N.toLocaleString()} ครั้ง</b> · `+IOK.filter(x=>!IOF.type||IOF.type===x[0]).map(x=>`${x[2]} ${ioSK(R,x[0]).toLocaleString()} (${pc(ioSK(R,x[0]))})`).join(' · '));
   if(tt[0])h+=insRow('ชป. สูงสุด',`<b>${esc(tt[0][0])}</b> ${tt[0][1].toLocaleString()} ครั้ง (${pc(tt[0][1])})`+(tt[1]?` · รองลงมา ${esc(tt[1][0])} ${tt[1][1].toLocaleString()}`:'')+(tt[2]?` · ${esc(tt[2][0])} ${tt[2][1].toLocaleString()}`:''));
   if(mm[0])h+=insRow('เดือนสูงสุด',`<b>${esc(ioMl(mm[0][0]))}</b> ${mm[0][1].toLocaleString()} ครั้ง (${pc(mm[0][1])})`+(mm[1]?` · รองลงมา ${esc(ioMl(mm[1][0]))} ${mm[1][1].toLocaleString()}`:''));
   if(!IOF.type&&ty[0])h+=insRow('งานหลัก',`<b>${esc(IOL[ty[0][0]])}</b> ${pc(ty[0][1])} ของทั้งหมด`+(days?` · รายงานรายวัน ${days} วัน เฉลี่ย ${avg.toLocaleString()} ครั้ง/วัน`:''));
   $('insl').innerHTML=h}}
 /* โดนัท — ตามประเภทงาน */
 const TV=TL.map(x=>ioSK(R,x[0])),TS=TV.reduce((a,b)=>a+b,0)||1,TCOL=TL.map(x=>IOC[x[0]]);
 make('c1',{type:'doughnut',data:{labels:TL.map(x=>x[2]),datasets:[{data:TV,backgroundColor:c=>dnFill(c,TCOL),hoverBackgroundColor:c=>dnFill(c,TCOL,1),borderWidth:0,borderRadius:7,spacing:5,hoverOffset:0,offset:c=>{const S=c.chart._sp;return S?(c.dataIndex===S.hl?Math.max(S.ho,S.ao||0):(S.ao||0)):0}}]},options:{onClick:(e,el)=>{if(el.length)ioSet('type',TL[el[0].index][0])},cutout:'70%',layout:{padding:18},rotation:SPN.a,plugins:{legend:{display:false},lbl:{on:'arc',ctr:TV.reduce((a,b)=>a+b,0).toLocaleString(),nv:1,unit:'ครั้ง'},dn:{on:1},spin:{on:1}}}});
 $('tt').innerHTML=TL.map((x,i)=>`<div class="dr rvdr" data-team="${esc(x[2])}" data-iot="${x[0]}" style="--c:${TCOL[i]}"><i></i><div class="dn1"><b>${esc(x[2])}</b></div><div class="dv"><b>${TV[i].toLocaleString()}</b><small>${Math.round(TV[i]/TS*100)}%</small></div><div class="bar"><span style="width:${Math.round(TV[i]/TS*100)}%"></span></div></div>`).join('');
 /* อันดับ */
 const rk=(id,a,cl,k,lab)=>{const mx=Math.max(1,...a.map(x=>x[1]));$(id).innerHTML=a.length?a.map((x,i)=>`<div class="rk" style="--c:${typeof cl==='function'?cl(x[0],i):cl[i%cl.length]}"><span class="nm" data-k="${k}" data-v="${esc(x[0])}"><i></i><span>${esc(lab?lab(x[0]):x[0])}</span></span><span class="tr" data-k="${k}" data-v="${esc(x[0])}"><span style="width:${Math.max(2,x[1]/mx*100)}%"></span></span><span class="vl" data-k="${k}" data-v="${esc(x[0])}"><b>${x[1].toLocaleString()}</b><small>${Math.round(x[1]/NT*100)}%</small></span></div>`).join(''):'<div class="rk0">ไม่มีข้อมูล</div>'};
 rk('c5l',ioCnt(R,'team').sort((a,b)=>a[0]<b[0]?-1:1),v=>TMC[v]||'#94a3b8','team',v=>v==='ไม่ระบุ'?v:tmName(v));
 rk('c3l',ioCnt(R,'mon').slice(0,6),RVPAL,'mon',ioMl);
 /* รายเดือน */
 {const ym={};R.forEach(r=>{const k=r.mon;ym[k]=ym[k]||{nonb:0,dorm:0,local:0};IOK.forEach(x=>ym[k][x[0]]+=+r[x[0]]||0)});const mk=Object.keys(ym).sort(),ml=k=>MON[+k.slice(5)-1]+' '+k.slice(2,4);
  const grd=(c,col)=>{const a=c.chart.chartArea;if(!a)return col+'22';const g=c.chart.ctx.createLinearGradient(0,a.top,0,a.bottom);g.addColorStop(0,col+'38');g.addColorStop(1,col+'00');return g};
  const ds=(x,i)=>({label:x[2],data:mk.map(k=>ym[k][x[0]]),borderColor:IOC[x[0]],backgroundColor:c=>grd(c,IOC[x[0]]),fill:true,tension:.3,borderWidth:2.25,borderCapStyle:'round',pointRadius:c=>c.dataIndex==mk.length-1?4.5:(mk.length<=8?2.5:0),pointHoverRadius:6,pointBackgroundColor:IOC[x[0]],pointBorderColor:'#2e0f27',pointBorderWidth:1.5,glow:IOC[x[0]],order:i});
  const sums=TL.map(x=>mk.reduce((t,k)=>t+ym[k][x[0]],0)),hiS=Math.max(...sums),loS=Math.min(...sums);
  const mxv=Math.max(1,...mk.map(k=>Math.max(...TL.map(x=>ym[k][x[0]]))));
  make('c2',{type:'line',options0:{onClick:(e,el,ch)=>{const n=ch.getElementsAtEventForMode(e,'index',{intersect:false},false);if(n.length)ioSet('mon',mk[n[0].index])}},data:{labels:mk.map(ml),datasets:TL.map((x,i)=>Object.assign(ds(x,i),{nolbl:TL.length>2&&sums[i]!==hiS&&sums[i]!==loS}))},
   options:{layout:{padding:{top:20,bottom:4,left:16,right:20}},interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},lbl:{on:'pts'},runner:{on:1},tooltip:{enabled:true,backgroundColor:'rgba(44,10,34,.96)',borderColor:'rgba(244,114,182,.55)',borderWidth:1,padding:10,cornerRadius:10,titleFont:{weight:'700'},callbacks:{label:c=>' '+c.dataset.label+' '+c.raw.toLocaleString()+' ครั้ง',footer:a=>'รวม '+a.reduce((t,c)=>t+c.raw,0).toLocaleString()+' ครั้ง'}}},scales:{x:{offset:true,grid:{display:false},border:{display:false},ticks:{color:'#f8d9ea',font:{size:12.5,weight:'600'},padding:10}},y:{min:-Math.max(3,Math.ceil(mxv*.34)),grace:'22%',border:{display:false},ticks:{display:false},grid:{color:'rgba(255,180,220,.10)',drawTicks:false,borderDash:[3,5]}}}}})}
 ioBelow(R,N);requestAnimationFrame(kpFit)}
/* ---- สรุปตามหัวตาราง + ตารางรายการ ---- */
function ioBelow(R,N){const X=$('iox');if(!X)return;const NT=N||1;
 const D=[['type','ประเภทงาน','🗂️'],['team','ชุดปฏิบัติการ','👮'],['mon','เดือน','🗓️'],['wd','วันในสัปดาห์','📆'],['kind','รูปแบบการรายงาน','📝']];
 const lab=(k,v)=>k==='mon'?ioMl(v):k==='type'?IOL[v]:k==='team'&&v!=='ไม่ระบุ'?tmName(v):v;
 const card=([k,l,ic])=>{let a=ioCnt(R,k);if(k==='mon')a=a.sort((x,y)=>x[0]<y[0]?1:-1);if(k==='team')a=a.sort((x,y)=>x[0]<y[0]?-1:1);
  const mx=Math.max(1,...a.map(x=>x[1])),open=IOOPEN[k],show=open?a:a.slice(0,8),cur=IOF[k]||'',fk=['type','team','mon'].includes(k);
  return`<div class="rvc" id="ioc-${k}"><h5><span>${ic} ${l}</span><small>${a.length.toLocaleString()} รายการ</small></h5><div class="rvcl">${show.map(([v,n])=>`<button type="button" class="rvi${cur===v?' on':''}"${fk?` data-idk="${k}" data-idv="${esc(v)}"`:' disabled'}><span class="nm">${esc(lab(k,v))}</span><span class="br"><i style="width:${Math.max(2,n/mx*100)}%"></i></span><b>${n.toLocaleString()}</b><small>${Math.round(n/NT*100)}%</small></button>`).join('')||'<div class="rk0">ไม่มีข้อมูล</div>'}</div>${a.length>8?`<button type="button" class="rvmo" data-imore="${k}">${open?'ย่อ':'แสดงทั้งหมด '+a.length+' รายการ'}</button>`:''}</div>`};
 const L=R.slice().sort((a,b)=>a.d<b.d?1:a.d>b.d?-1:(a.team<b.team?-1:1)),show=L.slice(0,ION);
 X.innerHTML=`<div class="card rvsum"><div class="ch"><h3>📊 สรุปตามหัวตาราง</h3><p class="note">ผลรวม (ครั้ง) ตามหัวตารางของชีต IO — กดรายการเพื่อกรองย่อย ทุกส่วนของแดชบอร์ดจะเปลี่ยนตาม · กดซ้ำเพื่อยกเลิก</p></div><div class="rvgrid">${D.map(card).join('')}</div></div>
 <div class="card rvtab"><div class="ch"><h3>📋 รายการข้อมูล</h3><p class="note">แสดง ${show.length.toLocaleString()} จาก ${L.length.toLocaleString()} แถว (${N.toLocaleString()} ครั้ง) · ใหม่สุดก่อน · กด ✏️ เพื่อแก้ไข</p></div><div class="rvtw"><table class="rvtb iotb"><thead><tr><th>#</th><th>วันที่</th><th>ชป.</th>${IOK.map(x=>`<th class="n"><i class="iodt" style="--c:${IOC[x[0]]}"></i>${x[2]}</th>`).join('')}<th class="n">รวม</th><th></th></tr></thead><tbody>
 ${show.map((r,i)=>`<tr><td class="mu" data-l="#">${i+1}</td><td data-l="วันที่"><span class="nw">${r.date?fd(r.date):ioMl(r.mon)}</span>${r.agg?'<small>'+(ioHasDaily(r)?'ยอดต้นเดือน (ก่อนเริ่มรายวัน)':'สรุปรายเดือน')+'</small>':''}</td><td data-l="ชป."><span class="iotm" style="--c:${TMC[r.team]||'#94a3b8'}">${esc(r.team)}</span></td>${IOK.map(x=>`<td class="n" data-l="${x[2]}">${(+r[x[0]]||0).toLocaleString()}</td>`).join('')}<td class="n" data-l="รวม"><b>${r.tot.toLocaleString()}</b></td><td class="n" data-l=""><button type="button" class="ioed" data-ioed="${r.row}" title="แก้ไขแถวนี้">✏️</button></td></tr>`).join('')}
 </tbody></table></div>${L.length>show.length?`<button type="button" class="btn sm" id="iomore">แสดงเพิ่มอีก ${Math.min(200,L.length-show.length)} แถว</button>`:''}</div>`}
/* ---- คลิกบนแผ่นแดชบอร์ด ---- */
function ioKpClick(e){const d=e.target.closest('[data-iok]');if(!d)return true;const k=d.dataset.iok;
 if(IOC[k])ioSet('type',k);else if(k==='n'){if(IOF.type)ioSet('type','')}
 else{document.body.classList.add('rvdet');try{dmSync()}catch(e){}const t=$(k==='days'||k==='avg'?'ioc-wd':'iox');if(t){t.scrollIntoView({behavior:'smooth',block:'center'});t.classList.remove('flash');void t.offsetWidth;t.classList.add('flash')}}return true}
/* ---- ✨ Claude วิเคราะห์ ---- */
async function ioAIRun(){const sp=await claude.use('sample');if(!sp){ioMsg('ฟีเจอร์นี้ใช้ไม่ได้ในมุมมองนี้ (ใช้ได้เมื่อเปิดผ่านหน้าแอป Claude)',false);return}
 const R=ioRows(),N=ioS(R);if(!N){ioMsg('ไม่มีข้อมูลตามตัวกรองนี้',false);return}const b=$('ioaib');b.disabled=true;ioMsg('⏳ Claude กำลังวิเคราะห์ข้อมูล IO…');
 try{const ym={},tm={},nm=k=>IOL[k];R.forEach(r=>{const k=ioMl(r.mon);ym[k]=ym[k]||{};tm[r.team]=tm[r.team]||{รวม:0};IOK.forEach(x=>{ym[k][nm(x[0])]=(ym[k][nm(x[0])]||0)+(+r[x[0]]||0);tm[r.team][nm(x[0])]=(tm[r.team][nm(x[0])]||0)+(+r[x[0]]||0)});tm[r.team].รวม+=r.tot});
  const days=new Set(R.filter(r=>!r.agg).map(r=>r.date)).size;
  const F={ช่วงข้อมูล:$('rng').textContent,ประเภทที่เลือก:IOF.type?IOL[IOF.type]:'ทั้งหมด',ยอดรวม_ครั้ง:N,แยกประเภท:Object.fromEntries(IOK.map(x=>[x[1],ioSK(R,x[0])])),รายเดือน:ym,รายชุด:tm,จำนวนวันที่รายงาน:days};
  const a=await sp.json(`คุณเป็นนักวิเคราะห์สถิติ เขียนสรุปสำหรับผู้บังคับบัญชา จากผลงาน IO ของ กก.สส.บก.ตม.3 ด้านล่าง (3 ประเภทงานตามหัวตารางในชีต: ${IOK.map(x=>x[1]).join(', ')} — เรียกชื่อประเภทตามนี้)
ตอบเป็น JSON array ของสตริง 4 ข้อ ภาษาไทยทางการ สั้น กระชับ ข้อละไม่เกิน 120 ตัวอักษร เน้นตัวเลขและสัดส่วน ไม่เกริ่นนำ ไม่ให้ข้อเสนอแนะ ตามลำดับ:
(1) ภาพรวม: ยอดรวมและสัดส่วน 3 ประเภทงาน
(2) แนวโน้มรายเดือน: เดือนสูงสุด/ต่ำสุด และทิศทางล่าสุด
(3) เปรียบเทียบชุดปฏิบัติการ: ชุดที่ทำได้มากสุด และจุดเด่นของแต่ละชุด
(4) ความสม่ำเสมอของการรายงาน: จำนวนวันที่รายงานและค่าเฉลี่ยต่อวัน
ใช้เฉพาะตัวเลขในข้อมูล ห้ามแต่งข้อเท็จจริง ถ้าข้อมูลน้อยให้ระบุสั้นๆ
ข้อมูล: ${JSON.stringify(F)}`,{cache:false});
  const L=(Array.isArray(a)?a:(a&&(a.lines||a.summary))||[]).map(String).filter(Boolean).slice(0,4);if(!L.length)throw new Error('ไม่ได้รับผลสรุป');
  IOAI={key:ioKey(),lines:L};ioMsg('✅ อัปเดตสรุปแล้ว (กลับเป็นสรุปอัตโนมัติเมื่อเปลี่ยนตัวกรอง)',true);ioRender();try{$('ins').scrollIntoView({behavior:'smooth',block:'center'})}catch(e){}}
 catch(e){ioMsg('❌ '+((e&&(e.message||e.code))||e),false)}finally{b.disabled=false}}
/* ---- ส่งออก ---- */
function ioTag(){const p=[];if(IOF.mon)p.push(ioMl(IOF.mon));else if(IOF.a||IOF.b)p.push((IOF.a?sdt(IOF.a):'')+'-'+(IOF.b?sdt(IOF.b):''));if(IOF.team)p.push(IOF.team);if(IOF.type)p.push(IOS[IOF.type]);if(IOF.q)p.push(IOF.q);return('IO'+(p.length?'_'+p.join('_'):'_ทั้งหมด')).replace(/[\\\/:*?"<>|\s]+/g,'')}
var ioXH=()=>['ลำดับ','เดือน','วันที่','ชป.'].concat(IOK.map(x=>x[1]),['รวม']);
var ioXRow=(r,i)=>[i+1,ioMl(r.mon),r.date?fd(r.date):'สรุปรายเดือน',r.team,r.nonb,r.dorm,r.local,r.tot];
function ioXRows(){return ioRows().sort((a,b)=>a.d<b.d?-1:a.d>b.d?1:(a.team<b.team?-1:1))}
function ioTpHtml(R,p,per,pages){const S=R.slice(p*per,(p+1)*per);return `<div class="a4 rvtp" id="tp"><div class="sub"><div class="sh"><img src="${$('sheet').querySelector('.sh img').src}" alt=""><h2>ตารางข้อมูล IO กก.สส.บก.ตม.3</h2></div><div>${$('rng').innerHTML}</div></div><table><tr><th>ที่</th><th>เดือน</th><th>วันที่</th><th>ชป.</th>${IOK.map(x=>`<th>${esc(x[1])}</th>`).join('')}<th>รวม</th></tr>${S.map((r,i)=>`<tr><td>${p*per+i+1}</td><td>${esc(ioMl(r.mon))}</td><td>${r.date?fd(r.date):'สรุปรายเดือน'}</td><td>${esc(r.team)}</td><td>${r.nonb.toLocaleString()}</td><td>${r.dorm.toLocaleString()}</td><td>${r.local.toLocaleString()}</td><td><b>${r.tot.toLocaleString()}</b></td></tr>`).join('')}${p===pages-1?`<tr><td colspan="4"><b>รวมทั้งหมด</b></td><td><b>${ioSK(R,'nonb').toLocaleString()}</b></td><td><b>${ioSK(R,'dorm').toLocaleString()}</b></td><td><b>${ioSK(R,'local').toLocaleString()}</b></td><td><b>${ioSK(R,'tot').toLocaleString()}</b></td></tr>`:''}</table><div class="ft"><span>เอกสารสรุปเพื่อใช้ในราชการ</span><span>หน้า ${p+1}/${pages}</span></div></div>`}
function ioXlsx(){const R=ioXRows(),A=[['สถิติงาน IO กก.สส.บก.ตม.3'],[$('rng').textContent],[],ioXH()].concat(R.map(ioXRow));A.push([],['','','','รวม',ioSK(R,'nonb'),ioSK(R,'dorm'),ioSK(R,'local'),ioSK(R,'tot')]);
 const ws=XLSX.utils.aoa_to_sheet(A);ws['!cols']=[6,12,14,8,22,16,16,10].map(x=>({wch:x}));ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:7}},{s:{r:1,c:0},e:{r:1,c:7}}];
 if(R.length)ws['!autofilter']={ref:XLSX.utils.encode_range({s:{r:3,c:0},e:{r:3+R.length,c:ioXH().length-1}})};
 const sec=(t,k,lab)=>[[],[t],[lab].concat(IOK.map(x=>x[1]),['รวม'])].concat([...new Set(R.map(r=>r[k]))].sort().map(v=>{const S=R.filter(r=>r[k]===v);return[k==='mon'?ioMl(v):v,ioSK(S,'nonb'),ioSK(S,'dorm'),ioSK(S,'local'),ioSK(S,'tot')]}));
 const S=[['สรุปงาน IO กก.สส.บก.ตม.3'],[$('rng').textContent],[],['รวมทั้งหมด (ครั้ง)',ioSK(R,'tot')]].concat(sec('สรุปรายชุดปฏิบัติการ','team','ชป.'),sec('สรุปรายเดือน','mon','เดือน'));
 const ws2=XLSX.utils.aoa_to_sheet(S);ws2['!cols']=[{wch:22},{wch:16},{wch:12},{wch:14},{wch:10}];
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'IO');XLSX.utils.book_append_sheet(wb,ws2,'สรุป');
 return dl(new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),xname('xlsx'))}
function ioCsv(){const q=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"',R=ioXRows();return dl(new Blob(['﻿'+[ioXH().map(q).join(',')].concat(R.map((r,i)=>ioXRow(r,i).map(q).join(','))).join('\n')],{type:'text/csv'}),xname('csv'))}
/* คลิกบนกราฟอันดับ / แถวโดนัท ในโหมด IO */
(()=>{const cap=(id,fn)=>{const el=$(id);if(el)el.addEventListener('click',e=>{if(!IOMODE)return;if(fn(e)!==false){e.stopImmediatePropagation();e.preventDefault()}},true)};
 cap('kp',ioKpClick);
 ['c5l','c3l'].forEach(id=>cap(id,e=>{const t=e.target.closest('[data-k]');if(t)ioSet(t.dataset.k,t.dataset.v)}));
 cap('tt',e=>{const t=e.target.closest('[data-iot]');if(t)ioSet('type',t.dataset.iot)});
 setTimeout(()=>{try{if(!window.__TV&&!SCR&&(!IOR.length||Date.now()-IOT>30*60e3))ioSync(true)}catch(e){}},5000)})();

/* การ์ด IO บนแดชบอร์ดรวม (ช่องท้ายสุด) */
function ioMainCard(){if(!Array.isArray(IOR)||(window.__TV&&!IOR.length))return'';if(['nat','place','charge','rel','intel','type','sex','a1','a2','hf','hc','hl','name','pp','q','nl'].some(k=>FS[k]))return'';let R=IOR;if(FS.team)R=R.filter(r=>r.team===FS.team);if(FS.a||FS.b)R=R.filter(r=>(!FS.a||r.d>=FS.a||ioAggIn(r,FS.a))&&(!FS.b||r.d<=FS.b));else if(FS.mon)R=R.filter(r=>r.mon===FS.mon);
 const n=R.reduce((t,r)=>t+r.tot,0),ok=IOR.length>0,c='#ec4899';
 return`<div data-kpi="งาน IO (ครั้ง)" data-iom="1" class="iok" style="--ac:${c};--ag:${c}88" title="เปิดแดชบอร์ด IO"><em>🕵️</em><b>${ok?n.toLocaleString():'—'}</b><span>งาน IO (ครั้ง)</span><u class="cb">${ok?'ดูแดชบอร์ด ›':'โหลดข้อมูล ›'}</u></div>`}
(()=>{const el=$('kp');if(el)el.addEventListener('click',e=>{if(RVMODE||!e.target.closest('[data-iom]'))return;e.stopImmediatePropagation();e.preventDefault();dmGo('io')},true)})();
/* ===== XD: หน้าบันทึกข้อมูล / ตารางข้อมูล — เลือกชุดข้อมูล จับกุม · เพิกถอน/ใบแดง · IO (บันทึกสองทางกับ Google Sheets) — v173 ===== */
var XDK=[['ar','จับกุม','👮'],['rv','เพิกถอน / ฟ้องใบแดง','📑'],['io','IO','🕵️']];
var XDS={f:'ar',d:'ar'},XDE={rv:null,io:null},XDF={rv:{},io:{}},XDN={rv:200,io:200},XDBUSY=false;
try{const s=JSON.parse(localStorage.getItem('tm3_xds')||'null');if(s&&s.f)XDS=s}catch(e){}
var xdNm=k=>(XDK.find(x=>x[0]===k)||[])[1]||k;
var xdToday=()=>new Date(Date.now()-new Date().getTimezoneOffset()*60e3).toISOString().slice(0,10);
var xdDmy=d=>d?(+d.slice(8))+'/'+(+d.slice(5,7))+'/'+d.slice(0,4):'';
var XDI={ar:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',rv:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="m9.5 12.5 5 5M14.5 12.5l-5 5"/>',io:'<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>',lab:'<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'};
XDI.clock='<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>';XDI.edit='<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>';
var xdHd=(k,t,s,ic)=>`<div class="xdhd k-${k}"><i>${xdIc(ic||k)}</i><div><h3>${t}</h3>${s?`<small>${s}</small>`:''}</div></div>`;
var xdIc=k=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+XDI[k]+'</svg>';
/* แถบเลือกชุดข้อมูล: แถบเดียวใช้ร่วมกันทั้งหน้าบันทึกและหน้าตาราง — ตำแหน่ง/ขนาดคงที่ ไม่ขยับ (ติดอยู่ใต้แถบเมนูเมื่อเลื่อนจอ) */
function xdBars(){if(window.__TV||SCR||$('xdbar'))return;const F=$('f'),Dd=$('d');if(!F||!Dd)return;
 const b=document.createElement('div');b.id='xdbar';b.className='xdbar';
 b.innerHTML='<div class="xdl" aria-hidden="true">'+xdIc('lab')+'<b>เลือกชุดข้อมูล</b></div><div class="xdsg" role="tablist" aria-label="เลือกชุดข้อมูล">'+XDK.map(([k,l])=>`<button type="button" role="tab" data-xd="${k}">${xdIc(k)}<span>${l}</span></button>`).join('')+'</div><span class="xdpg" id="xdpg"></span>';
 F.parentNode.insertBefore(b,F);
 ['f','d'].forEach(pg=>{const S=$(pg),X=document.createElement('div');X.id='xd'+pg;X.className='xdx';S.prepend(X)});
 b.addEventListener('click',e=>{const t=e.target.closest('[data-xd]');if(t)xdSet(null,t.dataset.xd)});
 const vis=()=>{const pf=!F.classList.contains('hide'),pd=!Dd.classList.contains('hide');b.hidden=!(pf||pd);$('xdpg').textContent=pf?'หน้าบันทึกข้อมูล':pd?'หน้าตารางข้อมูล':'';
  const n=document.querySelector('nav');if(n)document.documentElement.style.setProperty('--navh',n.offsetHeight+'px')};
 [F,Dd].forEach(S=>new MutationObserver(vis).observe(S,{attributes:true,attributeFilter:['class']}));addEventListener('resize',vis);vis();
 xdSet(null,XDS.f||'ar',true)}
function xdSet(pg,k,quiet){XDS={f:k,d:k};try{localStorage.setItem('tm3_xds',JSON.stringify(XDS))}catch(e){}
 const b=$('xdbar');if(b)b.querySelectorAll('[data-xd]').forEach(x=>{const on=x.dataset.xd===k;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false')});
 ['f','d'].forEach(p=>{const S=$(p);if(S)S.classList.toggle('xdon',k!=='ar')});
 if(k==='ar'){['xdf','xdd'].forEach(id=>{const e=$(id);if(e)e.innerHTML=''});return}
 if(k==='rv'&&!RV.length&&!RVBUSY)rvSync(true);if(k==='io'&&!IOR.length&&!IOBUSY)ioSync(true);
 xdForm(k);xdTable(k)}
/* ไปหน้าบันทึก (ใช้จากแดชบอร์ด / ปุ่มแก้ไขในตาราง) */
function xdGoForm(k,rec){XDE[k]=rec?{...rec}:null;const b=document.querySelector('nav [data-t="f"]');if(b&&$('f').classList.contains('hide'))b.click();setTimeout(()=>{xdSet(null,k)},60)}
function xdRefresh(k){['f','d'].forEach(pg=>{if(XDS[pg]===k&&$('xd'+pg)){if(pg==='f'){const st=$('xdlist');if(st)st.innerHTML=xdRecent(k)}else xdTable(k)}})}
/* ---------- รายการ datalist จากข้อมูลเดิม ---------- */
var xdOpts=(k)=>[...new Set(RV.map(r=>r[k]).filter(v=>v&&v!=='ไม่ระบุ'))].sort((a,b)=>a.localeCompare(b,'th')).slice(0,400).map(v=>`<option value="${esc(v)}">`).join('');
/* ---------- ฟอร์ม ---------- */
function xdForm(k){const X=$('xdf');if(!X)return;const E=XDE[k];
 if(k==='rv'){const o=E||{date:xdToday(),type:'เพิกถอน',num:'1',sex:'ไม่ระบุ'};
  X.innerHTML=(E?'':xrPasteCard())+`<div class="card xdc"><div class="ch">${xdHd('rv',E?'แก้ไขข้อมูลเพิกถอน / ฟ้องใบแดง':'บันทึกเพิกถอน / ฟ้องใบแดง',E?'แถว '+E.row+' ในชีต “'+esc(rvSrc().name)+'”':'กรอกแล้วกดบันทึก ระบบเขียนลงชีตทันที',E?'edit':'')}<span class="req"><b>*</b> จำเป็นต้องกรอก</span></div>
  <fieldset class="sec s1"><legend><i>1</i>ข้อมูลการดำเนินการ</legend><div class="fg">
   <div><label>วันที่ <b>*</b></label><input type="date" id="xr_date"></div>
   <div><label>การปฏิบัติ <b>*</b></label><select id="xr_type"><option>เพิกถอน</option><option>ฟ้องใบแดง</option></select></div>
   <div><label>เลขหนังสือ</label><input id="xr_doc" placeholder="เช่น 0029.45/1234"></div>
   <div><label>พงส.เจ้าของคดี</label><input id="xr_off" list="xr_offl" placeholder="พิมพ์เพื่อค้นหา"><datalist id="xr_offl">${xdOpts('off')}</datalist></div>
   <div class="span2"><label>ตม.จว.ที่ยื่นเรื่อง</label><input id="xr_unit" list="xr_unitl" placeholder="เช่น ตม.จว.ชลบุรี"><datalist id="xr_unitl">${xdOpts('unit')}</datalist></div></div></fieldset>
  <fieldset class="sec s2"><legend><i>2</i>ข้อมูลผู้ต้องหา</legend><div class="fg">
   <div class="span2"><label>ชื่อผู้ต้องหา</label><input id="xr_name" class="pii" placeholder="เช่น MR.ZHANG MIN"></div>
   <div><label>สัญชาติ</label><input id="xr_nat" list="xr_natl" placeholder="เช่น จีน"><datalist id="xr_natl">${xdOpts('nat')}</datalist></div>
   <div><label>เพศ</label><select id="xr_sex"><option>ชาย</option><option>หญิง</option><option>ไม่ระบุ</option></select></div>
   <div><label>เลขพาสปอร์ต</label><input id="xr_pp" class="pii"></div>
   <div><label>อายุ</label><input type="number" id="xr_age" min="0"></div>
   <div><label>จำนวนราย</label><input type="number" id="xr_num" min="1"></div></div></fieldset>
  <fieldset class="sec s3"><legend><i>3</i>คดี / หมายเหตุ</legend><div class="fg">
   <div class="span2"><label>คดี</label><input id="xr_charge" list="xr_chgl" placeholder="เช่น Overstay"><datalist id="xr_chgl">${xdOpts('charge')}</datalist></div>
   <div class="span2"><label>หมายเหตุ</label><input id="xr_note"></div></div></fieldset>
  ${xdActs(k,E)}</div>${xdListCard(k)}`;
  thDate($('xr_date'));['date','type','doc','off','unit','name','nat','sex','pp','age','num','charge','note'].forEach(f=>{const el=$('xr_'+f);if(el)el.value=o[f]==null?'':String(o[f])});if(!$('xr_num').value)$('xr_num').value='1';try{xrPasteBind()}catch(e){}}
 else{const one=!!E,o=E||{date:xdToday()};
  X.innerHTML=(E?'':xiPasteCard())+`<div class="card xdc"><div class="ch">${xdHd('io',E?'แก้ไขข้อมูล IO':'บันทึกผลงาน IO',E?'แถว '+E.row+' ในชีต “'+esc(ioSrc().name)+'”':'กรอกตัวเลขของแต่ละชุด แล้วกดบันทึก',E?'edit':'')}<span class="req"><b>*</b> จำเป็นต้องกรอก</span></div>
  <fieldset class="sec s1"><legend><i>1</i>วันที่รายงาน</legend><div class="fg">
   <div>${E&&E.agg?`<label>เดือน</label><input value="${esc(ioMl(E.mon))} (สรุปรายเดือน)" disabled>`:'<label>วันที่ <b>*</b></label><input type="date" id="xi_date">'}</div>
   <div><label>เดือน (คอลัมน์ “เดือน” ในชีต)</label><input id="xi_mon" disabled></div></div></fieldset>
  <fieldset class="sec s2"><legend><i>2</i>ผลการปฏิบัติ (ครั้ง)</legend>
   <p class="note xdn">${one?'แก้ตัวเลขแล้วกดบันทึก':'กรอกเฉพาะชุดที่มีผล — ชุดที่เว้นว่างทั้งแถวจะไม่ถูกบันทึก · ถ้าวันนั้นมีข้อมูลของชุดนั้นอยู่แล้ว ระบบจะถามก่อนแทนที่'}</p>
   <div class="xdio"><div class="xih"><span>ชป.</span>${IOK.map(x=>`<span><i style="--c:${IOC[x[0]]}"></i>${x[2]}</span>`).join('')}<span>รวม</span></div>
   ${(one?[o.team]:['ชป.1','ชป.2','ชป.3']).map(t=>`<div class="xir" data-tm="${esc(t)}"><b style="--c:${TMC[t]||'#94a3b8'}">${esc(t)}</b>${IOK.map(x=>`<input type="number" min="0" inputmode="numeric" data-f="${x[0]}" aria-label="${esc(t)} ${x[1]}" value="${one?(+o[x[0]]||0):''}">`).join('')}<em>0</em></div>`).join('')}</div></fieldset>
  ${xdActs(k,E)}</div>${xdListCard(k)}`;
  if($('xi_date')){thDate($('xi_date'));$('xi_date').value=o.date||xdToday()}
  const sm=()=>{X.querySelectorAll('.xdio .xir').forEach(r=>{let s=0;r.querySelectorAll('input').forEach(i=>s+=+i.value||0);r.querySelector('em').textContent=s.toLocaleString()});const d=E&&E.agg?E.mon+'-01':($('xi_date')&&$('xi_date').value)||'';$('xi_mon').value=d?ioMl(d.slice(0,7))+' ('+(+d.slice(5,7))+')':''};
  X.querySelector('.xdio').addEventListener('input',sm);if($('xi_date'))$('xi_date').addEventListener('change',sm);sm();try{xiPasteBind(sm)}catch(e){}}
 xdWire(k)}
function xdActs(k,E){return`<div class="xdact"><button type="button" class="btn pr" id="xdsave">💾 ${E?'บันทึกการแก้ไข':'บันทึกลง Google Sheets'}</button>${E?'<button type="button" class="btn" id="xdcan">✕ ยกเลิกการแก้ไข</button><button type="button" class="btn dg" id="xddel">🗑 ลบแถวนี้</button>':'<button type="button" class="btn" id="xdclr">↺ ล้างฟอร์ม</button>'}<span class="xdst" id="xdst" role="status"></span></div>
 <p class="note">บันทึกสองทาง: กดบันทึกแล้วระบบเขียนลงชีต “${esc((k==='rv'?rvSrc():ioSrc()).name)}” ทันที แล้วดึงข้อมูลกลับมาแสดงในแดชบอร์ดและตาราง · แก้ไขที่ชีตโดยตรงก็จะเห็นในแอปเมื่อกด “อัปเดตข้อมูล”</p>`}
function xdListCard(k){return`<div class="card xdc"><div class="ch">${xdHd('clock','รายการล่าสุด','8 แถวล่าสุดในชีต · กด ✏️ เพื่อแก้ไข')}<span class="xdhb"><button type="button" class="btn sm" data-xgo="d">📋 ดูตารางทั้งหมด</button> <button type="button" class="btn sm" data-xgo="s">📊 เปิดแดชบอร์ด</button></span></div><div id="xdlist">${xdRecent(k)}</div></div>`}
function xdRecent(k){const A=(k==='rv'?RV:IOR).slice().sort((a,b)=>(b.row||0)-(a.row||0)).slice(0,8);if(!A.length)return'<p class="note">'+((k==='rv'?RVBUSY:IOBUSY)?'⏳ กำลังโหลดข้อมูล…':'ยังไม่มีข้อมูล')+'</p>';
 return'<div class="xdrl">'+A.map(r=>k==='rv'?`<div class="xdri" style="--xc:${RVTC[r.type]||'#94a3b8'}"><div class="xd1"><b>${fd(r.date)}</b><small>แถว ${r.row}</small></div><div class="xd2"><span>${rvChip(r.type,'rvty')} <b class="pii">${esc(r.name)||'-'}</b></span><small>${esc([r.nat,r.charge,r.unit].filter(Boolean).join(' · '))||'-'}</small></div><button type="button" class="xab" data-xed="${r.row}" title="แก้ไข">✏️</button></div>`
  :`<div class="xdri" style="--xc:${TMC[r.team]||'#94a3b8'}"><div class="xd1"><b>${r.date?fd(r.date):ioMl(r.mon)}</b><small>แถว ${r.row}</small></div><div class="xd2"><span><b>${esc(r.team)}</b> · รวม <b>${r.tot.toLocaleString()}</b> ครั้ง</span><small>${IOK.map(x=>x[2]+' '+(+r[x[0]]||0).toLocaleString()).join(' · ')}</small></div><button type="button" class="xab" data-xed="${r.row}" title="แก้ไข">✏️</button></div>`).join('')+'</div>'}
function xdWire(k){const X=$('xdf'),st=$('xdst');
 X.querySelectorAll('[data-xgo]').forEach(b=>b.onclick=()=>{const g=b.dataset.xgo;if(g==='d'){document.querySelector('nav [data-t="d"]').click();setTimeout(()=>xdSet(null,k),60)}else{document.querySelector('nav [data-t="s"]').click();setTimeout(()=>dmGo(k),120)}});
 X.addEventListener('click',e=>{const ed=e.target.closest('[data-xed]');if(ed){const r=(k==='rv'?RV:IOR).find(x=>String(x.row)===ed.dataset.xed);if(r){XDE[k]={...r};xdForm(k);try{X.scrollIntoView({block:'start',behavior:'smooth'})}catch(x){}}}});
 const c=$('xdclr');if(c)c.onclick=()=>{XDE[k]=null;xdForm(k)};const cn=$('xdcan');if(cn)cn.onclick=()=>{XDE[k]=null;xdForm(k)};
 const dl0=$('xddel');if(dl0)dl0.onclick=async()=>{const E=XDE[k];if(!await uiConfirm('ลบแถวนี้ออกจากชีต?',(k==='rv'?fd(E.date)+' · '+E.type+(E.name?' · '+E.name:''):(E.date?fd(E.date):ioMl(E.mon))+' · '+E.team)+' — ระบบจะล้างค่าในแถว '+E.row+' ของชีต','🗑 ลบ','ยกเลิก',true))return;await xdRun(st,()=>k==='rv'?xdRvWrite(null,E):xdIoDel(E),'🗑 ลบแล้ว');XDE[k]=null;xdForm(k)};
 $('xdsave').onclick=async()=>{const E=XDE[k];
  if(k==='rv'){const g=f=>{const el=$('xr_'+f);return el?String(el.value||'').trim():''};const o={date:g('date'),type:g('type'),doc:g('doc'),off:g('off'),unit:g('unit'),name:g('name'),nat:g('nat'),sex:g('sex'),pp:g('pp'),age:g('age'),num:g('num')||'1',charge:g('charge'),note:g('note'),grp:E?E.grp||'':''};
   if(!o.date){xdMsg(st,'⚠️ กรุณาเลือกวันที่',false);return}
   const ok=await xdRun(st,()=>xdRvWrite(o,E),E?'✅ แก้ไขแล้ว':'✅ บันทึกลงชีตแล้ว');if(ok){XDE[k]=null;xdForm(k);xdMsg($('xdst'),E?'✅ แก้ไขแถวในชีตแล้ว':'✅ บันทึกลงชีตแล้ว — '+o.type+' '+fd(o.date),true)}}
  else{const date=E&&E.agg?'':($('xi_date')&&$('xi_date').value)||'';if(!(E&&E.agg)&&!date){xdMsg(st,'⚠️ กรุณาเลือกวันที่',false);return}
   const L=[...X.querySelectorAll('.xdio .xir')].map(r=>{const o={team:r.dataset.tm};let any=false;r.querySelectorAll('input').forEach(i=>{if(String(i.value).trim()!=='')any=true;o[i.dataset.f]=+i.value||0});return any?o:null}).filter(Boolean);
   if(!L.length){xdMsg(st,'⚠️ กรอกตัวเลขอย่างน้อย 1 ช่อง',false);return}
   if(!E){const dup=L.filter(o=>IOR.some(r=>r.date===date&&r.team===o.team));if(dup.length&&!await uiConfirm('มีข้อมูลวันที่ '+fd(date)+' อยู่แล้ว','ของ '+dup.map(o=>o.team).join(', ')+' — ต้องการแทนที่ด้วยตัวเลขใหม่หรือไม่?','แทนที่','ยกเลิก'))return}
   const ok=await xdRun(st,()=>xdIoWrite(date,L,E),E?'✅ แก้ไขแล้ว':'✅ บันทึกลงชีตแล้ว');if(ok){XDE[k]=null;xdForm(k);xdMsg($('xdst'),(E?'✅ แก้ไขแถวในชีตแล้ว':'✅ บันทึกลงชีตแล้ว — '+L.map(o=>o.team).join(', '))+(date?' วันที่ '+fd(date):''),true)}}}}
function xdMsg(el,t,ok){if(!el)return;el.textContent=t||'';el.className='xdst'+(ok===false?' er':ok?' ok':'')}
async function xdRun(st,fn,done){if(XDBUSY)return false;XDBUSY=true;document.querySelectorAll('#xdsave,#xddel').forEach(b=>b.disabled=true);xdMsg(st,'⏳ กำลังเขียนลง Google Sheets…');
 try{await fn();xdMsg(st,done+' — กำลังดึงข้อมูลล่าสุด…',true);return true}
 catch(e){const m=e&&e.code&&GSE[e.code]?GSE[e.code]+(e.message?' — '+e.message:''):((e&&(e.message||e.code))||String(e));xdMsg(st,'❌ บันทึกไม่สำเร็จ: '+m,false);gsToast('❌ บันทึกลง Google Sheets ไม่สำเร็จ<br><small>'+esc(m).slice(0,200)+'</small>',false);return false}
 finally{XDBUSY=false;document.querySelectorAll('#xdsave,#xddel').forEach(b=>b.disabled=false)}}
/* ---------- เขียนลงชีต ---------- */
async function xdMcp(){const m=await claude.use('mcp').catch(()=>null);if(!m)throw new Error('มุมมองนี้เขียนลงชีตไม่ได้ — ต้องเปิดผ่านแอป Claude และอนุญาต Google Sheets');return m}
async function xdAll(mcp,t,L){return(((await mcp.callTool(GSC,'get_values',{spreadsheetId:t.id,range:qT(t.title)+'!A1:'+L},{cache:false})).payload||{}).values)||[]}
var xdPut=(mcp,t,row,L,vals)=>mcp.callTool(GSC,'update_values',{spreadsheetId:t.id,range:qT(t.title)+'!A'+row+':'+L+row,values:[vals]});
var xdRvSig=o=>[o.date,o.type,ck(o.name||''),ck(o.pp||''),ck(o.doc||''),ck(o.off||'')].join('|');
async function xdRvWrite(o,old){const s=rvSrc();if(s.on===false)throw new Error('ลิงก์ “'+s.name+'” ถูกตัดการเชื่อมต่ออยู่');const mcp=await xdMcp(),t=await gsTarget(mcp,s.url),all=await xdAll(mcp,t,'Z');
 let hi=-1;for(let i=0;i<Math.min(all.length,15);i++){const h=(all[i]||[]).map(x=>RVH[String(x).trim()]||null);if(h.filter(Boolean).length>=3&&h.includes('date')){hi=i;break}}if(hi<0)throw new Error('ไม่พบแถวหัวตารางในชีตเพิกถอน');
 const H=all[hi].map(x=>String(x).trim()),L=colL(H.length),rec=r=>{try{return rvParse([H,r||[]])[0]||null}catch(e){return null}};
 let row=null;if(old){const so=xdRvSig(old);if(old.row&&old.row>hi+1){const c=rec(all[old.row-1]);if(c&&xdRvSig(c)===so)row=old.row}
  if(!row)for(let i=hi+1;i<all.length;i++){const c=rec(all[i]);if(c&&xdRvSig(c)===so){row=i+1;break}}if(!row)throw new Error('หาแถวเดิมในชีตไม่พบ (อาจถูกแก้ไขที่ชีตแล้ว) — กดอัปเดตข้อมูลแล้วลองใหม่')}
 else{let n=all.length;while(n>hi+1&&!(all[n-1]||[]).some(c=>String(c).trim()))n--;row=n+1}
 const vals=o?H.map(h=>{const k=RVH[h];if(!k)return null;if(k==='date')return xdDmy(o.date);const v=String(o[k]==null?'':o[k]).trim();if(k==='num')return v||'1';return v||'ไม่ระบุ'}):H.map(()=>'');
 await xdPut(mcp,t,row,L,vals);await rvSync(true)}
async function xdIoTarget(){const s=ioSrc();if(s.on===false)throw new Error('ลิงก์ “'+s.name+'” ถูกตัดการเชื่อมต่ออยู่');const mcp=await xdMcp(),t=await gsTarget(mcp,s.url),all=await xdAll(mcp,t,'Z');
 const hi=ioHdrRow(all);if(hi<0)throw new Error('ไม่พบแถวหัวตารางในชีต IO');const C=ioHead(all[hi]),W=Math.max(...Object.values(C))+1;
 const thai=C.mon!=null&&all.slice(hi+1).some(r=>/[ก-๙]/.test(String((r||[])[C.mon]||'')));return{mcp,t,all,hi,C,W,L:colL(W),thai}}
function xdIoRec(T,i){const r=T.all[i]||[],g=k=>T.C[k]==null?'':String(r[T.C[k]]||'').trim();return{date:ioDate(g('date')),team:ioTeam(g('team')),mc:ioMonCell(g('mon')),empty:['nonb','dorm','local'].every(k=>g(k)===''),blank:!g('date')&&['nonb','dorm','local'].every(k=>g(k)==='')}}
var xdMonEq=(c,old)=>!!c.mc&&c.mc.m===+old.mon.slice(5)&&(!c.mc.y||c.mc.y===+old.mon.slice(0,4));
function xdIoFind(T,old){if(old.row&&old.row>T.hi+1){const c=xdIoRec(T,old.row-1);if(!c.empty&&c.team===old.team&&(old.agg?!c.date&&xdMonEq(c,old):c.date===old.date))return old.row}
 for(let i=T.hi+1;i<T.all.length;i++){const c=xdIoRec(T,i);if(!c.empty&&c.team===old.team&&(old.agg?!c.date&&xdMonEq(c,old):c.date===old.date))return i+1}return null}
async function xdIoWrite(date,L,old){const T=await xdIoTarget(),used=new Set();
 let last=T.hi;for(let i=T.hi+1;i<T.all.length;i++)if(!xdIoRec(T,i).blank)last=i;
 for(const o of L){let row=null;
  if(old){row=xdIoFind(T,old);if(!row)throw new Error('หาแถวเดิมในชีตไม่พบ (อาจถูกแก้ไขที่ชีตแล้ว) — กดอัปเดตข้อมูลแล้วลองใหม่')}
  else{for(let i=T.hi+1;i<T.all.length;i++){const c=xdIoRec(T,i);if(!c.empty&&c.date===date&&c.team===o.team){row=i+1;break}}
   if(!row)for(let i=last+1;i<T.all.length;i++){if(used.has(i+1))continue;const c=xdIoRec(T,i);if(c.blank&&(!c.team||c.team===o.team)){row=i+1;break}}
   if(!row){row=Math.max(T.all.length,last+1)+1;while(used.has(row))row++}}
  used.add(row);const cur=T.all[row-1]||[],v=Array(T.W).fill(null),mon=old&&old.agg?old.mon:date.slice(0,7),put=(k,x)=>{if(T.C[k]!=null)v[T.C[k]]=x};
  put('mon',ioMonOut(mon,T.thai));if(!(old&&old.agg))put('date',xdDmy(date));put('team',o.team);put('nonb',o.nonb);put('dorm',o.dorm);put('local',o.local);
  if(T.C.tot!=null&&!String(cur[T.C.tot]==null?'':cur[T.C.tot]).trim())v[T.C.tot]=o.nonb+o.dorm+o.local;
  await xdPut(T.mcp,T.t,row,T.L,v);T.all[row-1]=v.map((x,j)=>x==null?(cur[j]||''):String(x));if(row-1>last)last=row-1}
 await ioSync(true)}
async function xdIoDel(old){const T=await xdIoTarget(),row=xdIoFind(T,old);if(!row)throw new Error('หาแถวเดิมในชีตไม่พบ — กดอัปเดตข้อมูลแล้วลองใหม่');
 const v=Array(T.W).fill(null);['date','nonb','dorm','local'].forEach(k=>{if(T.C[k]!=null)v[T.C[k]]=''});await xdPut(T.mcp,T.t,row,T.L,v);await ioSync(true)}
/* ---------- ตาราง ---------- */
function xdRowsOf(k){const f=XDF[k],q=String(f.q||'').toLowerCase().trim(),lc=v=>String(v||'').toLowerCase();
 if(k==='rv')return RV.filter(r=>{if(f.mon&&r.date.slice(0,7)!==f.mon)return false;if(f.a&&r.date<f.a)return false;if(f.b&&r.date>f.b)return false;if(f.type&&r.type!==f.type)return false;
  if(f.nat&&ck(r.nat)!==ck(f.nat))return false;if(f.sex&&r.sex!==f.sex)return false;if(f.unit&&r.unit!==f.unit)return false;if(f.off&&r.off!==f.off)return false;
  if(f.charge&&!chips(r.charge).some(x=>ck(x)===ck(f.charge)))return false;if(f.a1&&!(+r.age>=+f.a1))return false;if(f.a2&&!(+r.age&&+r.age<=+f.a2))return false;
  if(f.name&&!lc(r.name).includes(lc(f.name)))return false;if(f.pp&&!lc(r.pp).includes(lc(f.pp)))return false;if(f.doc&&!lc(r.doc).includes(lc(f.doc)))return false;
  if(f.nt&&(f.nt==='1')!==!!String(r.note||'').trim())return false;
  return !q||[r.name,r.pp,r.doc,r.note,r.off,r.unit,r.charge,r.nat,r.type,fd(r.date)].join(' ').toLowerCase().includes(q)}).sort((a,b)=>a.date<b.date?1:a.date>b.date?-1:(b.row||0)-(a.row||0));
 return IOR.filter(r=>{if(f.mon&&r.mon!==f.mon)return false;if(f.team&&r.team!==f.team)return false;
  if(f.a&&r.d<f.a&&!ioAggIn(r,f.a))return false;if(f.b&&r.d>f.b)return false;
  if(f.kind&&(f.kind==='agg')!==!!r.agg)return false;if(f.work&&!(+r[f.work]>0))return false;
  if(f.t1&&!(+r.tot>=+f.t1))return false;if(f.t2&&!(+r.tot<=+f.t2))return false;
  return !q||[r.team,ioMl(r.mon),r.date?fd(r.date):'สรุปรายเดือน'].join(' ').toLowerCase().includes(q)}).sort((a,b)=>a.d<b.d?1:a.d>b.d?-1:(a.team<b.team?-1:1))}
/* v199 แผงกรองละเอียดของตารางเพิกถอน / IO */
function xdFltHtml(k){const f=XDF[k],e=esc;
 const opt=(arr,cur,key)=>'<option value="">ทั้งหมด</option>'+arr.map(([v,n])=>`<option value="${e(v)}"${cur===v?' selected':''}>${e(key==='mon'?ioMl(v):v)}${n!=null?' ('+n+')':''}</option>`).join('');
 const sel=(key,lab,arr)=>`<div class="pc"><label>${lab}</label><select data-xf="${key}">${opt(arr,f[key],key)}</select></div>`;
 const inp=(key,lab,t,ph)=>`<div class="pc"><label>${lab}</label><input data-xf="${key}" type="${t||'text'}" value="${e(f[key]||'')}"${ph?` placeholder="${ph}"`:''}${t==='number'?' min="0" inputmode="numeric"':''}></div>`;
 const seg=(key,lab,arr)=>`<div class="pc"><label>${lab}</label><div class="rvseg xdseg">${[['','ทั้งหมด']].concat(arr).map(([v,l])=>`<button type="button" data-xg="${key}" data-v="${e(v)}" class="${(f[key]||'')===v?'on':''}">${e(l)}</button>`).join('')}</div></div>`;
 const cnt=(arr)=>{const m={};arr.forEach(v=>{if(v)m[v]=(m[v]||0)+1});return Object.entries(m).sort((a,b)=>b[1]-a[1])};
 let mons,h;
 if(k==='rv'){mons=[...new Set(RV.map(r=>r.date.slice(0,7)))].sort().reverse();
  const nat=cnt(RV.map(r=>r.nat)),unit=cnt(RV.map(r=>r.unit)),off=cnt(RV.map(r=>r.off)),chg=rvCnt(RV,'charge').map(x=>[x[0],x[1]]);
  h=`<div class="xfq"><div class="xfs c1"><div class="xft"><i>1</i>ช่วงเวลา</div>${sel('mon','เดือน + ปี',mons.map(m=>[m,null]).map(([m])=>[m,null]))}${inp('a','ตั้งแต่วันที่','date')}${inp('b','ถึงวันที่','date')}</div>
  <div class="xfs c2"><div class="xft"><i>2</i>ข้อมูลการปฏิบัติ</div>${seg('type','การปฏิบัติ',[['เพิกถอน','เพิกถอน'],['ฟ้องใบแดง','ฟ้องใบแดง']])}${sel('charge','คดี',chg)}${sel('off','พงส.เจ้าของคดี',off)}${sel('unit','ตม.จว.ที่ยื่นเรื่อง',unit)}${inp('doc','เลขหนังสือ')}</div>
  <div class="xfs c3"><div class="xft"><i>3</i>ข้อมูลผู้ต้องหา</div>${sel('nat','สัญชาติ',nat)}${seg('sex','เพศ',[['ชาย','ชาย'],['หญิง','หญิง'],['ไม่ระบุ','ไม่ระบุ']])}${inp('a1','อายุตั้งแต่','number')}${inp('a2','อายุถึง','number')}${inp('name','ชื่อผู้ต้องหา')}${inp('pp','พาสปอร์ต / เลขบัตร')}${seg('nt','หมายเหตุ',[['1','มี'],['0','ไม่มี']])}</div></div>
  <div class="xfq2"><input data-xf="q" type="search" placeholder="🔎 ค้นหาทั่วไป ชื่อ / พาสปอร์ต / เลขหนังสือ / คดี / พงส." value="${e(f.q||'')}" aria-label="ค้นหา"></div>`}
 else{mons=[...new Set(IOR.map(r=>r.mon))].sort().reverse();
  h=`<div class="xfq"><div class="xfs c1"><div class="xft"><i>1</i>ช่วงเวลา</div>${sel('mon','เดือน + ปี',mons.map(m=>[m,null]))}${inp('a','ตั้งแต่วันที่','date')}${inp('b','ถึงวันที่','date')}</div>
  <div class="xfs c2"><div class="xft"><i>2</i>ข้อมูลรายงาน</div>${seg('team','ชุดปฏิบัติการ',['ชป.1','ชป.2','ชป.3'].map(t=>[t,t]))}${seg('kind','ชนิดแถว',[['day','รายวัน'],['agg','สรุปรายเดือน']])}${`<div class="pc"><label>ประเภทงาน (มียอด)</label><select data-xf="work"><option value="">ทั้งหมด</option>${IOK.map(x=>`<option value="${x[0]}"${f.work===x[0]?' selected':''}>${e(x[1])}</option>`).join('')}</select></div>`}</div>
  <div class="xfs c3"><div class="xft"><i>3</i>ยอดรวม (ครั้ง)</div>${inp('t1','ตั้งแต่','number')}${inp('t2','ถึง','number')}</div></div>
  <div class="xfq2"><input data-xf="q" type="search" placeholder="🔎 ค้นหา เช่น ชป.2 / ก.ย." value="${e(f.q||'')}" aria-label="ค้นหา"></div>`}
 const hasF=Object.keys(f).some(x=>f[x]);
 return`<div class="xdfx">${h}${hasF?'<div class="xfc"><button type="button" class="btn sm" data-xt="clr">✕ ล้างตัวกรองทั้งหมด</button></div>':''}</div>`}
function xdTbl(k,A,act){if(k==='rv')return`<div class="rvtw"><table class="rvtb xdtb"><colgroup><col style="width:4%"><col style="width:11%"><col style="width:9%"><col style="width:14%"><col style="width:10%"><col style="width:14%"><col style="width:15%"><col style="width:11%"><col style="width:5%"><col style="width:7%"></colgroup><thead><tr><th class="c0">#</th><th>วันที่ / เลขหนังสือ</th><th>การปฏิบัติ</th><th>ผู้ต้องหา / พาสปอร์ต</th><th>สัญชาติ · เพศ · อายุ</th><th>คดี</th><th>พงส.เจ้าของคดี</th><th>ตม.จว.ที่ยื่นเรื่อง</th><th class="n">ราย</th><th class="xa"></th></tr></thead><tbody>${A.map((r,i)=>`<tr><td class="mu" data-l="#">${i+1}</td><td data-l="วันที่"><span class="nw">${fd(r.date)}</span>${r.doc?`<small>${esc(r.doc)}</small>`:''}</td><td data-l="การปฏิบัติ">${rvChip(r.type,'rvty')}</td><td data-l="ผู้ต้องหา"><b class="pii">${esc(r.name)||'-'}</b>${r.pp?`<small class="pii">${esc(r.pp)}</small>`:''}</td><td data-l="สัญชาติ">${esc(r.nat)||'-'}<small>${esc(r.sex)}${r.age?' · '+esc(r.age)+' ปี':''}</small></td><td data-l="คดี">${r.charge?chips(r.charge).map(x=>rvChip(x)).join(' '):'-'}${r.note?`<small class="rvnt">📝 ${esc(r.note)}</small>`:''}</td><td data-l="พงส.">${esc(r.off)||'-'}</td><td data-l="หน่วยยื่น">${esc(r.unit)||'-'}</td><td class="n" data-l="ราย">${rvW(r)}</td><td class="xa" data-l="">${r.row?`<button type="button" class="xab" data-xed="${r.row}" title="แก้ไข">✏️</button>${act?`<button type="button" class="xab" data-xdel="${r.row}" title="ลบ">🗑</button>`:''}`:''}</td></tr>`).join('')}</tbody></table></div>`;
 return`<div class="rvtw"><table class="rvtb xdtb iotb"><colgroup><col style="width:5%"><col style="width:16%"><col style="width:10%"><col style="width:15%"><col style="width:15%"><col style="width:15%"><col style="width:10%"><col style="width:14%"></colgroup><thead><tr><th class="c0">#</th><th>วันที่</th><th>ชป.</th>${IOK.map(x=>`<th class="n"><i class="iodt" style="--c:${IOC[x[0]]}"></i>${x[1]}</th>`).join('')}<th class="n">รวม</th><th class="xa"></th></tr></thead><tbody>${A.map((r,i)=>`<tr><td class="mu" data-l="#">${i+1}</td><td data-l="วันที่"><span class="nw">${r.date?fd(r.date):ioMl(r.mon)}</span>${r.agg?'<small>'+(ioHasDaily(r)?'ยอดต้นเดือน (ก่อนเริ่มรายวัน)':'สรุปรายเดือน')+'</small>':''}</td><td data-l="ชป."><span class="iotm" style="--c:${TMC[r.team]||'#94a3b8'}">${esc(r.team)}</span></td>${IOK.map(x=>`<td class="n" data-l="${x[2]}">${(+r[x[0]]||0).toLocaleString()}</td>`).join('')}<td class="n" data-l="รวม"><b>${r.tot.toLocaleString()}</b></td><td class="xa" data-l="">${r.row?`<button type="button" class="xab" data-xed="${r.row}" title="แก้ไข">✏️</button>${act?`<button type="button" class="xab" data-xdel="${r.row}" title="ลบ">🗑</button>`:''}`:''}</td></tr>`).join('')}</tbody></table></div>`}
function xdTable(k){const X=$('xdd');if(!X)return;const f=XDF[k],src=k==='rv'?rvSrc():ioSrc(),busy=k==='rv'?RVBUSY:IOBUSY,err=k==='rv'?RVERR:IOERR,T=k==='rv'?RVT:IOT;
 const A=xdRowsOf(k),show=A.slice(0,XDN[k]),mons=[...new Set((k==='rv'?RV.map(r=>r.date.slice(0,7)):IOR.map(r=>r.mon)))].sort().reverse();
 const tot=k==='rv'?rvS(A):A.reduce((t,r)=>t+r.tot,0),seg=k==='rv'?['type',['เพิกถอน','ฟ้องใบแดง']]:['team',['ชป.1','ชป.2','ชป.3']];
 const ae=document.activeElement,hadFocus=!!(ae&&ae.dataset&&ae.dataset.xf&&X.contains(ae)),fkey=hadFocus?ae.dataset.xf:'',caret=hadFocus?ae.selectionStart:0;
 X.innerHTML=`<div class="ch xdh">${xdHd(k,'ตารางข้อมูล'+(k==='rv'?'เพิกถอน / ฟ้องใบแดง':' IO'),'ซิงค์สองทางกับชีต “'+esc(src.name)+'”')}<div class="xdtools">${k==='rv'?`<button type="button" class="btn sm blbtn blb2${document.body.classList.contains('blurpii')?' on':''}" aria-pressed="${document.body.classList.contains('blurpii')}"><i class="bi"></i><span>ซ่อนชื่อ</span></button>`:''}<button type="button" class="btn sm" data-xt="sync">🔄 อัปเดตจากชีต</button><button type="button" class="btn sm ok" data-xt="add">＋ เพิ่มข้อมูล</button><button type="button" class="btn sm" data-xt="dash">📊 แดชบอร์ด</button><button type="button" class="btn sm" data-xt="xlsx">📗 Excel</button><button type="button" class="btn sm" data-xt="csv">📄 CSV</button><a class="btn sm" href="${esc(src.url)}" target="_blank" rel="noopener">🔗 เปิดชีต</a></div></div>
 ${xdFltHtml(k)}
 <p class="note">${busy?'⏳ กำลังดึงข้อมูลจากชีต… · ':''}${err&&!A.length?esc(err)+' · ':''}แสดง ${show.length.toLocaleString()} จาก ${A.length.toLocaleString()} แถว (${tot.toLocaleString()} ${k==='rv'?'ราย':'ครั้ง'})${T?' · อัปเดต '+new Date(T).toLocaleString('th-TH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' น.':''}</p>
 ${A.length?xdTbl(k,show,1):'<p class="note">ไม่พบข้อมูล</p>'}${A.length>show.length?`<button type="button" class="btn sm" data-xt="more">แสดงเพิ่มอีก ${Math.min(200,A.length-show.length)} แถว</button>`:''}`;
 X.querySelectorAll('input[type=date][data-xf]').forEach(i=>{try{thDate(i)}catch(e){}});/* v221 วันที่แบบ วัน เดือน ปี */
 if(hadFocus){const q=X.querySelector('[data-xf="'+fkey+'"]');if(q){q.focus();try{q.setSelectionRange(caret,caret)}catch(e){}}}
 if(!X.dataset.w){X.dataset.w=1;let qt;
  X.addEventListener('input',e=>{const xf=e.target.dataset&&e.target.dataset.xf;if(!xf||e.target.tagName==='SELECT'||e.target.type==='date'||xf==='a'||xf==='b')return;const kk=XDS.d;clearTimeout(qt);qt=setTimeout(()=>{const v=e.target.value.trim();if(v)XDF[kk][xf]=v;else delete XDF[kk][xf];XDN[kk]=200;xdTable(kk)},180)});
  X.addEventListener('change',e=>{const xf=e.target.dataset&&e.target.dataset.xf;if(!xf||!(e.target.tagName==='SELECT'||e.target.type==='date'||xf==='a'||xf==='b'))return;const kk=XDS.d,v=e.target.value;if(v)XDF[kk][xf]=v;else delete XDF[kk][xf];if(xf==='mon'){delete XDF[kk].a;delete XDF[kk].b}else if(xf==='a'||xf==='b')delete XDF[kk].mon;XDN[kk]=200;xdTable(kk)});
  X.addEventListener('click',async e=>{const kk=XDS.d,gb=e.target.closest('[data-xg]');if(gb){const gk=gb.dataset.xg,v=gb.dataset.v;if(!v||XDF[kk][gk]===v)delete XDF[kk][gk];else XDF[kk][gk]=v;XDN[kk]=200;xdTable(kk);return}
   const ed=e.target.closest('[data-xed]');if(ed){const r=(kk==='rv'?RV:IOR).find(x=>String(x.row)===ed.dataset.xed);if(r)xdGoForm(kk,r);return}
   const de=e.target.closest('[data-xdel]');if(de){const r=(kk==='rv'?RV:IOR).find(x=>String(x.row)===de.dataset.xdel);if(!r)return;
    if(!await uiConfirm('ลบแถวนี้ออกจากชีต?',(kk==='rv'?fd(r.date)+' · '+r.type:(r.date?fd(r.date):ioMl(r.mon))+' · '+r.team)+' — ระบบจะล้างค่าในแถว '+r.row+' ของชีต','🗑 ลบ','ยกเลิก',true))return;
    de.disabled=true;try{await(kk==='rv'?xdRvWrite(null,r):xdIoDel(r));gsToast('🗑 ลบออกจากชีตแล้ว (แถว '+r.row+')',true)}catch(x){gsToast('❌ ลบไม่สำเร็จ<br><small>'+esc((x&&(x.message||x.code))||x)+'</small>',false);de.disabled=false}return}
   const t=e.target.closest('[data-xt]');if(!t)return;const a=t.dataset.xt;
   if(a==='sync')kk==='rv'?rvSync(false):ioSync(false);else if(a==='add')xdGoForm(kk);else if(a==='more'){XDN[kk]+=200;xdTable(kk)}else if(a==='clr'){XDF[kk]={};xdTable(kk)}
   else if(a==='dash'){document.querySelector('nav [data-t="s"]').click();setTimeout(()=>dmGo(kk),120)}
   else if(a==='csv'||a==='xlsx')xdExport(kk,a)})}}
function xdExport(k,fmt){const A=xdRowsOf(k).slice().reverse(),H=k==='rv'?RVXH:ioXH(),row=k==='rv'?rvXRow:ioXRow,nm=(k==='rv'?'ตารางเพิกถอน-ใบแดง':'ตารางIO')+'_'+xdToday()+'_กกสส.บก.ตม.3.'+fmt;
 if(fmt==='csv'){const q=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';return dl(new Blob(['﻿'+[H.map(q).join(',')].concat(A.map((r,i)=>row(r,i).map(q).join(','))).join('\n')],{type:'text/csv'}),nm)}
 const ws=XLSX.utils.aoa_to_sheet([H].concat(A.map(row)));ws['!cols']=H.map(h=>({wch:Math.max(8,Math.min(30,h.length+4))}));const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,k==='rv'?'เพิกถอน-ใบแดง':'IO');
 return dl(new Blob([XLSX.write(wb,{bookType:'xlsx',type:'array'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),nm)}
/* เปลี่ยนแท็บแล้วอัปเดตหน้าที่เลือกชุดข้อมูลไว้ */
(()=>{try{xdBars()}catch(e){console.error(e)}document.querySelectorAll('nav [data-t]').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{const t=b.dataset.t;if((t==='f'||t==='d')&&XDS[t]!=='ar'){if(t==='d')xdTable(XDS.d)}},30)))})();

/* ช่องค้นหากลาง: ทุกครั้งที่แดชใดแสดงผล ให้คัดลอกคำค้นไปแดชอื่นด้วย */
(()=>{['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){try{gqProp()}catch(e){}return f.apply(this,arguments)}});})();

/* v180 ปุ่ม ✕ แดง ฝังในแดชบอร์ด (dock) ต่อท้ายแว่นขยาย: ล่องหนเหมือน dock, โผล่เมื่อมีตัวกรองทำงานอยู่ — กดแล้วล้างคำค้น+ตัวกรอง */
window.fbUp=function(){try{const F=IOMODE?IOF:RVMODE?RVF:FS,on=Object.keys(F).some(k=>F[k]&&String(F[k]).length&&!(k==='per'&&F[k]==='c')),b=$('dmbar');if(b)b.classList.toggle('hasf',on)}catch(e){}};
(()=>{['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const r=f.apply(this,arguments);fbUp();return r}});fbUp()})();

/* ===== v182 พรีเซ็นท์ 2 จอ: จอหลักแบ่งครึ่งเท่ากัน — ซ้าย = หน้ากรอง/ตั้งค่า (ใช้ชุดตัวกรองและปุ่มเดิมทั้งหมด), ขวา = แดชบอร์ดล้วน ===== */
var SP2=false,SP2S={};
(()=>{if(window.__TV||SCR)return;const s=$('s'),btn=$('p2btn');if(!s||!btn)return;
 const MV=['dctl','flt2s','rvp','iop','aibox'];/* ชิ้นส่วนแผงควบคุมที่ย้ายมาไว้ซ้าย */
 const sp2m=()=>{const a=[];(IOMODE?IOR.map(r=>r.mon):RVMODE?RV.map(r=>r.date.slice(0,7)):D.map(r=>String(r.date||'').slice(0,7))).forEach(m=>{if(m&&/^\d{4}-\d{2}$/.test(m))a.push(m)});return[...new Set(a)].sort().reverse()};
 const curMon=()=>IOMODE?IOF.mon:RVMODE?RVF.mon:FS.mon;
 function head(){let h=$('sp2h');if(h)return h;h=document.createElement('div');h.id='sp2h';
  const L=[['','ภาพรวม'],...TM.map(t=>[t,t]),['rv','เพิกถอน'],['io','IO']];
  h.innerHTML='<div class="sp2t"><b>🎛 แผงกรองข้อมูล</b><small>ปรับค่าที่นี่ — แดชบอร์ดฝั่งขวา (และจอที่ 2) เปลี่ยนตามทันที</small><button type="button" class="btn sm" data-sp="exit">✕ ออกจากโหมด 2 จอ</button></div>'
   +'<div class="rvseg xdseg sp2seg">'+L.map(([k,l])=>`<button type="button" data-spd="${esc(k)}">${esc(l)}</button>`).join('')+'</div>'
   +'<div class="xdflt sp2f"><input id="sp2q" type="search" placeholder="🔎 ค้นหา เช่น จีน หมายแดง ชป.2" aria-label="ค้นหา"><select id="sp2m" aria-label="เดือน"></select><button type="button" class="sp2x" data-sp="rs" title="ล้างคำค้นและตัวกรองทั้งหมด" aria-label="ล้างตัวกรอง">✕</button></div>';
  h.addEventListener('click',e=>{const d=e.target.closest('[data-spd]');if(d){dmGo(d.dataset.spd);setTimeout(sp2Sync,60);return}
   const a=e.target.closest('[data-sp]');if(!a)return;if(a.dataset.sp==='exit')btn.click();else if(a.dataset.sp==='rs'){dkReset();setTimeout(sp2Sync,60)}});
  let qt;h.addEventListener('input',e=>{if(e.target.id!=='sp2q')return;clearTimeout(qt);qt=setTimeout(()=>dkSearch(e.target.value,false),120)});
  h.addEventListener('change',e=>{if(e.target.id!=='sp2m')return;const v=e.target.value;if(IOMODE)ioSet('mon',v);else if(RVMODE)rvSet('mon',v);else{FS.mon=v;if(v){FS.per='';FS.a='';FS.b=''}render()}setTimeout(sp2Sync,60)});
  return h}
 window.sp2Sync=function(){if(!SP2)return;const h=$('sp2h');if(!h)return;{const solo=document.body.classList.contains('sp2solo'),v=document.body.classList.contains('sp2v'),x=h.querySelector('[data-sp=exit]'),sm=h.querySelector('.sp2t small');if(x)x.textContent=solo?'✕ ปิดแผงกรอง':'✕ ออกจากโหมด 2 จอ';if(sm)sm.textContent='ปรับค่าที่นี่ — แดชบอร์ด'+(v?'ด้านล่าง':'ฝั่งขวา')+(solo?'':' (และจอที่ 2)')+' เปลี่ยนตามทันที'}const cur=IOMODE?'io':RVMODE?'rv':(TMODE||'');
  h.querySelectorAll('[data-spd]').forEach(b=>b.classList.toggle('on',b.dataset.spd===cur));
  const q=h.querySelector('#sp2q'),v=gqCur();if(document.activeElement!==q)q.value=v;
  const m=h.querySelector('#sp2m'),ms=sp2m(),sig=ms.join(',');if(m.dataset.sig!==sig){m.dataset.sig=sig;m.innerHTML='<option value="">ทุกเดือน</option>'+ms.map(x=>`<option value="${x}">${esc(ioMl(x))}</option>`).join('')}m.value=curMon()||'';
  const on=Object.values(IOMODE?IOF:RVMODE?RVF:FS).some(x=>x&&String(x).length);h.querySelector('.sp2x').classList.toggle('on',on);
  MV.forEach(i=>{const n=$(i)||s.querySelector('.'+i);if(n){const w=$('sp2');if(w&&n.parentNode!==w)w.appendChild(n)}})};
 window.sp2Fit=function(){if(!SP2)return;const sh=$('sheet'),sc=s.querySelector('.sc');if(!sh||!sc)return;
  if(document.body.classList.contains('sp2v')){sh.style.transform='';sh.style.transformOrigin='';sc.style.width='';sc.style.height='';try{window.__fitSheet&&window.__fitSheet()}catch(e){}try{chRes()}catch(e){}return}
  const w2=$('sp2'),r=s.getBoundingClientRect(),colW=r.width-(w2?w2.getBoundingClientRect().width:(r.width-12)/2)-12,colH=r.height,k=Math.min(colW/1123,colH/794)*.99;
  sh.style.transformOrigin='0 0';sh.style.transform=`scale(${k})`;sc.style.width=Math.round(1123*k)+'px';sc.style.height=Math.round(794*k)+'px';try{chRes()}catch(e){}};
 function lay(){const v=innerWidth<900||(innerWidth<innerHeight&&innerWidth<1100);document.body.classList.toggle('sp2v',v);const hd=document.querySelector('header'),nv=document.querySelector('nav');const top=(nv?nv.getBoundingClientRect().bottom:0)+8;s.style.setProperty('--sp2top',Math.max(0,top)+'px');sp2Fit()}
 function on(){if(SP2)return;SP2=true;SP2S={tools:document.body.classList.contains('dmtools'),det:document.body.classList.contains('rvdet')};
  const sc=s.querySelector('.sc');const w=document.createElement('div');w.id='sp2';w.appendChild(head());s.insertBefore(w,s.firstChild);
  document.body.classList.add('dmtools','split2');
  /* แผงที่สร้างทีหลัง (rvp/iop) ให้ย้ายเข้าฝั่งซ้ายเอง */
  window.__sp2mo=new MutationObserver(()=>{MV.forEach(i=>{const n=$(i);if(n&&n.parentNode===s)w.appendChild(n)});s.querySelectorAll(':scope>.dctl,:scope>.aibox').forEach(n=>w.appendChild(n))});window.__sp2mo.observe(s,{childList:true});
  s.querySelectorAll(':scope>.dctl,:scope>.aibox,:scope>#flt2s,:scope>#rvp,:scope>#iop').forEach(n=>w.appendChild(n));
  const hdr=document.querySelector('header');if(hdr)hdr.classList.add('sp2hid');
  sp2Sync();lay();setTimeout(lay,200)}
 function off(){if(!SP2)return;SP2=false;try{window.__sp2mo.disconnect()}catch(e){}
  const w=$('sp2'),sc=s.querySelector('.sc');if(w){[...w.children].forEach(n=>{if(n.id!=='sp2h')s.insertBefore(n,sc)});w.remove()}
  document.body.classList.remove('split2','sp2solo','sp2v');{const f=$('fpbtn');if(f){f.classList.remove('on');f.setAttribute('aria-pressed','false')}}document.body.classList.toggle('dmtools',!!SP2S.tools);document.body.classList.toggle('rvdet',!!SP2S.det);
  const hdr=document.querySelector('header');if(hdr)hdr.classList.remove('sp2hid');
  const sh=$('sheet');sh.style.transform='';sh.style.transformOrigin='';sc.style.width='';sc.style.height='';try{chRes()}catch(e){}try{dmSync()}catch(e){}}
 window.sp2On=on;window.sp2Off=off;
 /* v216 ปุ่ม "แผงกรอง" ข้างปุ่มเต็มจอ: เปิดแผงเครื่องมือกรองแบบเดียวกับโหมด 2 จอ แต่ไม่เปิดหน้าต่างที่ 2
    คอม/แท็บเล็ตแนวนอน = แผงอยู่ข้างแดชบอร์ด · มือถือ/แนวตั้ง = แผงกรองบน แดชบอร์ดกลาง ตาราง+ข้อความสรุปล่าง */
 {const pb=$('pbtn');if(pb&&!$('fpbtn')){const f=document.createElement('button');f.type='button';f.id='fpbtn';f.className='pbtn fpb';f.setAttribute('aria-pressed','false');f.title='เปิด/ปิดแผงเครื่องมือกรองข้อมูล';
   f.innerHTML='<svg class="pic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h18l-7 8.5V19l-4 2v-7.5z"/></svg><span>แผงกรอง</span>';
   pb.parentNode.insertBefore(f,pb.nextSibling);
   f.addEventListener('click',()=>{if(SP2){btn.click();return}document.body.classList.add('sp2solo');on();f.classList.add('on');f.setAttribute('aria-pressed','true');sp2Sync();if(document.body.classList.contains('sp2v'))scrollTo({top:0})})}}
 const orig=btn.onclick;btn.onclick=function(ev){if(SP2){off();if(typeof scrW!=='undefined'&&scrW&&!scrW.closed)orig.call(this,ev);return}on();orig.call(this,ev)};
 ['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const r=f.apply(this,arguments);if(SP2){sp2Sync();clearTimeout(window.__sp2t);window.__sp2t=setTimeout(sp2Fit,30)}return r}});
 addEventListener('resize',()=>{if(SP2){lay()}});
 document.querySelectorAll('nav [data-t]').forEach(b=>b.addEventListener('click',()=>{if(SP2&&b.dataset.t!=='s')off()}))})();

/* ===== v183 สรุปสำหรับผู้บังคับบัญชา: เมื่อมีการกรอง ให้สรุปเฉพาะสถิติของข้อมูลที่กรอง เรียบเรียงเป็นภาษาอ่านง่าย ===== */
(()=>{const nf=x=>(+x||0).toLocaleString(),E=s=>esc(String(s));
 const lst=(a,n,u)=>{a=a.filter(x=>x[0]&&x[0]!=='ไม่ระบุ');if(!a.length)return'';const t=a.slice(0,n).map(([k,v])=>E(k)+' <b>'+nf(v)+'</b> '+u).join(' · ');return t+(a.length>n?' <small>และอีก '+(a.length-n)+' รายการ</small>':'')};
 const chipsH=a=>'<span class="fch">'+a.map(x=>'<em class="p">'+E(x)+'</em>').join('')+'</span>';
 const pct=(x,N)=>N?Math.round(x/N*100)+'%':'0%';
 const row=(l,h)=>insRow(l,h);
 const curKey=()=>IOMODE?ioKey():RVMODE?rvKey():aiKey();
 const aiOn=()=>/^(✨|วิเคราะห์โดย)/.test(($('insm')&&$('insm').textContent)||'')&&window.__aiMan&&window.__aiMan===curKey();
 document.addEventListener('click',e=>{const b=e.target.closest('button');if(b&&/Claude/.test(b.textContent)&&/วิเคราะห์/.test(b.textContent)){const k0=curKey();window.__aiMan=k0;setTimeout(()=>{try{insFlt()}catch(x){}},0)}},true);
 const act=F=>Object.keys(F).some(k=>F[k]&&String(F[k]).length&&!(k==='per'&&F[k]==='c'));
 function when(F,lab){if(F.mon)return[lab(F.mon)];if(F.a||F.b)return[(F.per&&F.per!=='c'&&(PLd[F.per]||PL[F.per])?(PLd[F.per]||PL[F.per])+' (':'ช่วงวันที่ ')+(F.a?fd(F.a):'…')+' – '+(F.b?fd(F.b):'ปัจจุบัน')+((F.per&&F.per!=='c'&&(PLd[F.per]||PL[F.per]))?')':'')];return[]}
 function pick(rows,max){return rows.filter(r=>r&&r[1]).slice(0,max)}
 /* ----- แดชหลัก / ชป. ----- */
 function mainSum(){const F=FS,R=rows();if(!insFilt().length)return null;const N=sm(R);
  const P=[];if(TMODE)P.push(tmName(TMODE));if(F.team)P.push(F.team);P.push(...when(F,v=>mlabel(v)));
  if(F.type)P.push('การปฏิบัติ '+F.type);if(F.nat)P.push('สัญชาติ '+F.nat);if(F.place)P.push('จังหวัด '+F.place);if(F.charge)P.push('ข้อหา '+F.charge);if(F.rel)P.push('คดีที่เกี่ยวข้อง '+F.rel);if(F.sex)P.push('เพศ'+F.sex);
  if(F.a1||F.a2)P.push('อายุ '+(F.a1||'0')+'–'+(F.a2||'ขึ้นไป')+' ปี');if(F.intel)P.push('การข่าว '+F.intel);if(F.hf)P.push(F.hf=='1'?'มีค่าปรับ':'ไม่มีค่าปรับ');if(F.hc)P.push('มีจำนวนคดี');if(F.hl)P.push(F.hl=='1'?'มีลิงก์ข่าว':'ไม่มีลิงก์ข่าว');
  if(F.name)P.push('ชื่อ “'+F.name+'”');if(F.pp)P.push('พาสปอร์ต “'+F.pp+'”');if(F.q)P.push('ค้นหา “'+F.q+'”');if(F.nl)P.push('ค้นหา “'+F.nl+'”');
  let h=row('ที่กรอง',chipsH(P));
  if(!N)return h+row('ผลลัพธ์','ไม่พบข้อมูลตามเงื่อนไขที่กรอง');
  const self=sm(R.filter(r=>r.type=='จับเอง')),fine=R.reduce((t,r)=>t+(+r.fine||0),0),news=R.filter(r=>r.intel=='ส่งข่าว').length;
  h+=row('สรุปผล','พบ <b>'+nf(N)+' ราย</b> ('+nf(R.length)+' ครั้ง) · จับเอง '+nf(self)+' ราย ('+pct(self,N)+') · ร่วมจับ '+nf(N-self)+' ราย ('+pct(N-self,N)+')'+(fine?' · ค่าปรับรวม '+nf(fine)+' บาท':'')+(news?' · ส่งข่าว '+nf(news)+' ครั้ง':''));
  const D=[];if(!TMODE&&!F.team)D.push(['ชุดปฏิบัติการ',lst(cnt(R,r=>r.team),3,'ราย')]);if(!F.place)D.push(['จังหวัดที่จับ',lst(cnt(R,r=>r.place),6,'ราย')]);if(!F.nat)D.push(['สัญชาติ',lst(cnt(R,r=>r.nat),5,'ราย')]);
  if(!F.charge)D.push(['ข้อหา',lst(cntChips(R,'charge'),5,'ราย')]);if(!F.mon&&!F.a&&!F.b)D.push(['เดือนที่จับ',lst(cnt(R,r=>r.date.slice(0,7)).map(([k,v])=>[mlabel(k),v]),4,'ราย')]);
  D.filter(x=>x[1]).slice(0,3).forEach(([l,v])=>h+=row(l,v));return h}
 /* ----- เพิกถอน / ฟ้องใบแดง ----- */
 function rvSum(){const F=RVF;if(!act(F))return null;const R=rvRows();const N=rvCnt(R,'type').reduce((t,x)=>t+x[1],0);
  const P=when(F,rvMl);if(F.type)P.push(F.type);if(F.unit)P.push('ตม.จว.'+String(F.unit).replace(/^ตม\.?จว\.?/,''));if(F.off)P.push('พงส. '+F.off);if(F.nat)P.push('สัญชาติ '+F.nat);if(F.charge)P.push('ข้อหา '+F.charge);if(F.sex)P.push('เพศ'+F.sex);if(F.ageb)P.push('อายุ '+F.ageb);if(F.a1||F.a2)P.push('อายุ '+(F.a1||'0')+'–'+(F.a2||'ขึ้นไป')+' ปี');if(F.q)P.push('ค้นหา “'+F.q+'”');
  let h=row('ที่กรอง',chipsH(P));if(!N)return h+row('ผลลัพธ์','ไม่พบข้อมูลตามเงื่อนไขที่กรอง');
  const T=rvCnt(R,'type');h+=row('สรุปผล','พบ <b>'+nf(N)+' ราย</b> ('+nf(R.length)+' แถว)'+(T.length?' · '+T.map(([k,v])=>E(k)+' '+nf(v)+' ราย ('+pct(v,N)+')').join(' · '):''));
  const D=[];if(!F.unit)D.push(['ตม.จว.ที่ยื่นเรื่อง',lst(rvCnt(R,'unit'),8,'ราย')]);if(!F.nat)D.push(['สัญชาติ',lst(rvCnt(R,'nat'),5,'ราย')]);if(!F.charge)D.push(['ข้อหา',lst(rvCnt(R,'charge'),5,'ราย')]);
  if(!F.off)D.push(['พงส.เจ้าของคดี',lst(rvCnt(R,'off'),3,'ราย')]);if(!F.mon&&!F.a&&!F.b)D.push(['เดือน',lst(rvCnt(R,'mon').map(([k,v])=>[rvMl(k),v]),4,'ราย')]);
  D.filter(x=>x[1]).slice(0,3).forEach(([l,v])=>h+=row(l,v));return h}
 /* ----- IO ----- */
 function ioSum(){const F=IOF;if(!act(F))return null;const R=ioRows();const N=R.reduce((t,r)=>t+ioV(r),0);
  const P=when(F,ioMl);if(F.team)P.push(F.team);if(F.type&&IOL[F.type])P.push(IOL[F.type]);if(F.q)P.push('ค้นหา “'+F.q+'”');
  let h=row('ที่กรอง',chipsH(P));if(!N)return h+row('ผลลัพธ์','ไม่พบข้อมูลตามเงื่อนไขที่กรอง');
  h+=row('สรุปผล','รวม <b>'+nf(N)+' ครั้ง</b> · '+IOK.filter(x=>!F.type||F.type===x[0]).map(x=>E(x[2])+' '+nf(ioSK(R,x[0]))+' ('+pct(ioSK(R,x[0]),N)+')').join(' · '));
  const D=[];if(!F.team)D.push(['แยกตามชุด',lst(ioCnt(R,'team'),3,'ครั้ง')]);if(!F.mon&&!F.a&&!F.b)D.push(['เดือน',lst(ioCnt(R,'mon').map(([k,v])=>[ioMl(k),v]),4,'ครั้ง')]);
  D.filter(x=>x[1]).slice(0,3).forEach(([l,v])=>h+=row(l,v));return h}
 window.insFlt=function(){try{if(aiOn())return;const h=IOMODE?ioSum():RVMODE?rvSum():mainSum();if(h==null)return;$('insl').innerHTML=h;$('insm').textContent='สรุปเฉพาะข้อมูลที่กรอง'}catch(e){console.error('insFlt',e)}};
 ['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const r=f.apply(this,arguments);insFlt();return r}})})();

/* v184 กรองโดยไม่มีช่วงเวลา → ใส่คลาส fcomp ให้แผ่นสรุป (ยุบกราฟเส้น ขยายช่องอื่น) */
(()=>{const TIME=['per','a','b','mon'];
 const has=F=>Object.keys(F).some(k=>F[k]&&String(F[k]).length&&!TIME.includes(k));
 const timed=F=>!!(F.mon||F.a||F.b);
 window.fcUp=function(){const sh=$('sheet');if(!sh)return;const F=IOMODE?IOF:RVMODE?RVF:FS,on=has(F)&&!timed(F);if(sh.classList.contains('fcomp')===on)return;sh.classList.toggle('fcomp',on);try{kpFit&&kpFit()}catch(e){}setTimeout(()=>{try{chRes()}catch(e){}},60)};
 ['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const r=f.apply(this,arguments);try{fcUp()}catch(e){}return r}});fcUp()})();

/* ===== v185 โหมด 2 จอ: ใต้แผงกรอง = ตารางข้อมูล (ตามตัวกรอง) + กล่องข้อความสรุปรายงาน คัดลอกได้ ===== */
(()=>{if(window.__TV||SCR||typeof window.sp2Sync!=='function')return;
 const nf=x=>(+x||0).toLocaleString('en-US'),E=s=>esc(String(s==null?'':s));
 const MONF=MON,thY=d=>(+d.slice(0,4)>2400?+d.slice(0,4):+d.slice(0,4)+543);
 const dTh=d=>d?(+d.slice(8))+' '+MONF[+d.slice(5,7)-1]+' '+thY(d):'';
 const mTh=m=>m?MONF[+m.slice(5,7)-1]+' '+thY(m):'';
 const KEY='tm3_sp2rep';
 const DEF={mode:'short',sec:{arr:1,nat:1,chg:1,place:1,fine:1,io:1,rv:1},pf:{name:1,nat:1,pp:1,sx:1,chg:1,jt:1},iof:{},rvf:{}};
 let ST;try{ST=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}ST=Object.assign({},DEF,ST||{});['sec','pf','iof','rvf'].forEach(k=>ST[k]=Object.assign({},DEF[k],ST[k]||{}));
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(ST))}catch(e){}};
 const PFL=[['dt','วันที่'],['name','ชื่อ-สกุล'],['nat','สัญชาติ'],['pp','พาสปอร์ต'],['sx','เพศ/อายุ'],['chg','ข้อหา+ค่าปรับ'],['pl','จังหวัดที่จับ'],['jt','ระบุร่วมจับ']];
 const IOFL=[['kind','แยกประเภทในแต่ละชุด']];
 const RVFL=[['name','ชื่อ-สกุล'],['nat','สัญชาติ'],['pp','พาสปอร์ต'],['sx','เพศ/อายุ'],['chg','คดี'],['off','พงส.'],['unit','ตม.จว.ที่ยื่น'],['ty','ประเภท']];
 const SECL=[['arr','ผลการจับกุม/ร่วมจับ',PFL,'pf'],['nat','สัญชาติ (ราย/คดี)',[['cs','แสดงจำนวนคดี']],'natf'],['chg','ข้อหา',[],''],['place','สถานที่',[],''],['fine','ค่าปรับ',[],''],['io','IO',IOFL,'iof'],['rv','เพิกถอน/ฟ้องใบแดง',RVFL,'rvf']];
 ST.natf=Object.assign({cs:1},ST.natf||{});
 /* ---------- เวลา: ใช้ช่วงเวลาของแดชบอร์ดที่เปิดอยู่กับทุกชุดข้อมูล ---------- */
 const curF=()=>IOMODE?IOF:RVMODE?RVF:FS;
 function curTime(){const F=curF();return F.mon?{mon:F.mon,a:'',b:''}:{mon:'',a:F.a||'',b:F.b||''}}
 function withTime(F,t,fn){const o={mon:F.mon,a:F.a,b:F.b};F.mon=t.mon;F.a=t.a;F.b=t.b;try{return fn()}finally{F.mon=o.mon;F.a=o.a;F.b=o.b}}
 function dateTxt(t){if(t.mon)return'ประจำเดือน '+mTh(t.mon);if(t.a&&t.b&&t.a===t.b)return'ประจำวันที่ '+dTh(t.a);if(t.a||t.b)return'ระหว่างวันที่ '+(t.a?dTh(t.a):'…')+' – '+(t.b?dTh(t.b):'ปัจจุบัน');return'(ข้อมูลทั้งหมดในระบบ)'}
 /* ---------- ชุดข้อมูลตามตัวกรอง ---------- */
 const mainR=()=>rows(),rvR=()=>rvRows(),ioR=()=>ioRows();
 const tOf=F=>F.mon?{mon:F.mon,a:'',b:''}:{mon:'',a:F.a||'',b:F.b||''};
 const tlab=t=>t.mon?mTh(t.mon):(t.a&&t.b&&t.a===t.b)?dTh(t.a):(t.a||t.b)?(t.a?dTh(t.a):'…')+' – '+(t.b?dTh(t.b):'ปัจจุบัน'):'ข้อมูลทั้งหมด';
 const sfx=(F,h)=>{const x=tOf(F);if(!x.mon&&!x.a&&!x.b)return'';return dateTxt(x)===dateTxt(h)?'':' ['+tlab(x)+']'};
 const byDate=(a,b)=>a.date<b.date?1:a.date>b.date?-1:(+b.id||0)-(+a.id||0);
 /* ---------- ตาราง ---------- */
 const LIM=100;
 function tblMain(R){const TC={'ชป.1':'#0891b2','ชป.2':'#d97706','ชป.3':'#7c3aed'},S=R.slice().sort(byDate).slice(0,LIM);
  return`<table class="rvtb xdtb sp2tb"><colgroup><col style="width:4%"><col style="width:10%"><col style="width:7%"><col style="width:9%"><col style="width:17%"><col style="width:8%"><col style="width:9%"><col style="width:9%"><col style="width:17%"><col style="width:5%"><col style="width:5%"></colgroup><thead><tr><th class="c0">#</th><th>วันที่</th><th>ชป.</th><th>การปฏิบัติ</th><th>ผู้ต้องหา / พาสปอร์ต</th><th>สัญชาติ</th><th>เพศ / อายุ</th><th>จังหวัด</th><th>คดี / คดีที่เกี่ยวข้อง</th><th class="n">ราย</th><th class="n">ปรับ</th></tr></thead><tbody>${S.map((r,i)=>{const c=vc(r,'charge'),rl=vc(r,'rel');return`<tr><td class="mu" data-l="#">${i+1}</td><td data-l="วันที่"><span class="nw">${fd(r.date)}</span></td><td data-l="ชป."><span class="tmc" style="--tc:${TC[r.team]||'#64748b'}">${E(r.team)}</span></td><td data-l="การปฏิบัติ"><span class="pil ${r.type=='จับเอง'?'pa':'pb'}">${E(r.type)}</span></td><td data-l="ผู้ต้องหา"><b class="pii">${E(r.name)||'-'}</b>${r.pp?`<small class="pii">${E(r.pp)}</small>`:''}</td><td data-l="สัญชาติ">${E(r.nat)||'-'}</td><td data-l="เพศ/อายุ">${E(r.sex)||'-'}${r.age?' · '+E(r.age):''}</td><td data-l="จังหวัด">${E(r.place)||'-'}</td><td data-l="คดี"><span class="cg1">${E(c)}</span>${rl&&ck(rl)!=ck(c)?`<small>↳ ${E(rl)}</small>`:''}</td><td class="n" data-l="ราย"><b>${w(r)}</b></td><td class="n" data-l="ค่าปรับ">${r.fine?nf(r.fine):'-'}</td></tr>`}).join('')}</tbody></table>`}
 function tblHtml(){
  if(IOMODE){const R=ioR().slice().sort((a,b)=>a.d<b.d?1:a.d>b.d?-1:(a.team<b.team?-1:1));return{n:R.length,tot:'รวม '+nf(R.reduce((t,r)=>t+ioV(r),0))+' ราย',html:R.length?xdTbl('io',R.slice(0,LIM),0):'',more:R.length>LIM?R.length:0,lab:'IO'}}
  if(RVMODE){const R=rvR().slice().sort((a,b)=>a.date<b.date?1:a.date>b.date?-1:(b.row||0)-(a.row||0));return{n:R.length,tot:'รวม '+nf(rvS(R))+' ราย',html:R.length?xdTbl('rv',R.slice(0,LIM),0):'',more:R.length>LIM?R.length:0,lab:'เพิกถอน / ฟ้องใบแดง'}}
  const R=rows();return{n:R.length,tot:'รวม '+nf(sm(R))+' ราย',html:R.length?'<div class="rvtw">'+tblMain(R)+'</div>':'',more:R.length>LIM?R.length:0,lab:'การจับกุม'}}
 /* ---------- ข้อความรายงาน ---------- */
 const lines=(h,items,fmt)=>{items=items.filter(Boolean);if(!items.length)return h+' -';if(items.length===1)return h+' '+items[0];return h+'\n'+items.map(x=>'    • '+x).join('\n')};
 const blurOn=()=>document.body.classList.contains('blurpii');
 const msk=s=>blurOn()?String(s||'').replace(/\S/g,'●'):String(s||'');
 const todayISO=()=>new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
 const d2=d=>d?(+d.slice(8))+' '+MONF[+d.slice(5,7)-1]+String(thY(d)).slice(-2):'';
 const m2=m=>MONF[+m.slice(5,7)-1]+String(thY(m)).slice(-2);
 const fullM=(a,b)=>!!(a&&b&&a.slice(8)==='01'&&+b.slice(8)===new Date(+b.slice(0,4),+b.slice(5,7),0).getDate());
 function perTxt(F,dates){if(F.mon)return'ประจำเดือน '+m2(F.mon);let a=F.a,b=F.b,rng=!!(a||b);
  if(!rng){const ds=dates.filter(x=>x&&/^\d{4}-\d{2}-\d{2}/.test(x)).sort();a=ds[0];b=ds[ds.length-1];if(!a)return'ประจำวันที่ — (ไม่มีข้อมูล)';if(a.slice(0,7)===b.slice(0,7))return'ประจำเดือน '+m2(a.slice(0,7))}
  if(a&&b&&a===b)return'ประจำวันที่ '+d2(a);if(fullM(a,b))return a.slice(0,7)===b.slice(0,7)?'ประจำเดือน '+m2(a.slice(0,7)):'ประจำเดือน '+m2(a.slice(0,7))+' ถึง '+m2(b.slice(0,7));return'ประจำวันที่ '+(a?d2(a):'…')+' ถึง '+d2(b||todayISO())}
 const plc=p=>/^(จ\.|จังหวัด|กรุงเทพ|กทม)/.test(p)?p:'จ.'+p;
 const keys=A=>A.filter(x=>x[0]&&x[0]!=='ไม่ระบุ');
 function curSet(){if(IOMODE){const R=ioR();return{k:'io',R,dates:R.map(r=>r.date||r.d||''),team:IOF.team||''}}
  if(RVMODE){const R=rvR();return{k:'rv',R,dates:R.map(r=>r.date),team:''}}
  const R=mainR();return{k:'ar',R,dates:R.map(r=>r.date),team:TMODE||FS.team||''}}
 function head(pre,team,per){return[pre+'เรียนผู้บังคับบัญชา',pre+'กก.สส.บก.ตม.3'+(team?' ('+team+')':''),pre+'ขอรายงานผลการปฏิบัติ',pre+per+' ดังนี้']}
 function repStd(full){const pre=full?'-':'',X=curSet(),F=curF(),out=head(pre,X.team,perTxt(F,X.dates)),R=X.R;
  const oneDay=/^-?ประจำวันที่/.test(out[3]);
  if(X.k==='ar'){const N=sm(R);
   if(!N)out.push(pre+'ไม่มีผลการจับกุมตามเงื่อนไขที่เลือก');
   else{const vb=FS.type==='จับเอง'?'จับกุม':FS.type&&FS.type!=='จับเอง'?'ร่วมจับกุม':'จับกุมหรือร่วมจับกุม',C=R.reduce((a,r)=>a+cs(r),0);
    if(!full){const sub=(h,A,fm)=>{A=keys(A);if(A.length){out.push(h);A.forEach(([k,v],i)=>out.push('   '+(i+1)+'. '+fm(k)+' '+nf(v)+' ราย'))}};
     out.push(vb+' ผู้ต้องหา '+nf(N)+' ราย');sub('สัญชาติ',cnt(R,r=>r.nat),k=>k);sub('ข้อหา',cntChips(R,'charge'),k=>k);sub('สถานที่',cnt(R,r=>r.place),plc)}
    else{out.push(pre+vb+' '+nf(N)+' ราย '+nf(C)+' คดี');
     R.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:(+a.id||0)-(+b.id||0)).forEach((r,i)=>{const p=[];if(!oneDay&&r.date)p.push('วันที่ '+d2(r.date));
      p.push(msk(r.name)||'(ไม่ระบุชื่อ)');if(w(r)>1)p.push('('+w(r)+' ราย)');if(r.nat)p.push('สัญชาติ'+r.nat);if(r.pp)p.push('หนังสือเดินทางเลขที่ '+msk(r.pp));if(r.age)p.push('อายุ '+r.age+' ปี');
      const c=vc(r,'charge');if(c)p.push('ข้อหา '+c);if(+r.fine)p.push('ปรับ '+nf(r.fine)+' บาท');if(r.place)p.push('สถานที่ '+plc(r.place));if(r.type&&r.type!=='จับเอง')p.push('(ร่วมจับ'+(r.joint?' '+r.joint:'')+')');
      out.push(pre+(i+1)+'. '+p.join(' '))});
     const fine=R.reduce((a,r)=>a+(+r.fine||0),0);if(fine)out.push(pre+'รวมค่าปรับ '+nf(fine)+' บาท')}}}
  else if(X.k==='rv'){const N=rvS(R),T=rvCnt(R,'type'),ts=T.map(([k,v])=>k+' '+nf(v)+' ราย').join(', ');
   if(!N)out.push(pre+'ไม่มีรายการเพิกถอน/ฟ้องใบแดงตามเงื่อนไขที่เลือก');
   else if(!full){const sub=(h,A)=>{A=keys(A);if(A.length){out.push(h);A.forEach(([k,v],i)=>out.push('   '+(i+1)+'. '+k+' '+nf(v)+' ราย'))}};
    out.push('เพิกถอน/ฟ้องใบแดง ผู้ต้องหา '+nf(N)+' ราย');sub('ประเภท',T);sub('สัญชาติ',rvCnt(R,'nat'));sub('คดี',rvCnt(R,'charge'));sub('หน่วยที่ยื่นเรื่อง',rvCnt(R,'unit'))}
   else{out.push(pre+'เพิกถอน/ฟ้องใบแดง '+nf(N)+' ราย ('+ts+')');
    R.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:(a.row||0)-(b.row||0)).forEach((r,i)=>{const p=[];if(!oneDay&&r.date)p.push('วันที่ '+d2(r.date));p.push(msk(r.name)||'(ไม่ระบุชื่อ)');if(rvW(r)>1)p.push('('+rvW(r)+' ราย)');
     if(r.nat)p.push('สัญชาติ'+r.nat);if(r.pp)p.push('หนังสือเดินทางเลขที่ '+msk(r.pp));if(r.age)p.push('อายุ '+r.age+' ปี');if(r.charge)p.push('คดี '+chips(r.charge).join(', '));if(r.off)p.push('พงส. '+r.off);if(r.unit)p.push(r.unit);if(r.type)p.push('('+r.type+')');
     out.push(pre+(i+1)+'. '+p.join(' '))})}}
  else{const m={};R.forEach(r=>{(m[r.team]=m[r.team]||[]).push(r)});const tot=R.reduce((a,r)=>a+ioV(r),0),tk=Object.keys(m).sort();
   const kd=A=>IOK.filter(q=>!IOF.type||IOF.type===q[0]).map(q=>{const v=ioSK(A,q[0]);return v?q[2]+' '+nf(v)+' ครั้ง':''}).filter(Boolean);
   if(!full){out.push('งาน IO '+nf(tot)+' ครั้ง');if(tk.length>1){out.push('แยกตามชุด');tk.forEach((k,i)=>out.push('   '+(i+1)+'. '+k+' '+nf(m[k].reduce((a,r)=>a+ioV(r),0))+' ครั้ง'))}const x=kd(R);if(x.length){out.push('แยกตามประเภท');x.forEach((y,i)=>out.push('   '+(i+1)+'. '+y))}}
   else{out.push(pre+'งาน IO จำนวน '+nf(tot)+' ครั้ง');if(tk.length>1)tk.forEach(k=>{const x=kd(m[k]);out.push(pre+k+' '+nf(m[k].reduce((a,r)=>a+ioV(r),0))+' ครั้ง'+(x.length?' ('+x.join(', ')+')':''))});else{const x=kd(R);if(x.length)out.push(pre+x.join(', '))}}}
  out.push('');out.push(pre+'จึงเรียนมาเพื่อโปรดทราบ');return out.join('\n')}
 function repText(){return ST.mode==='full'?repStd(true):ST.mode==='custom'?repCustom():repStd(false)}
 function repCustom(){
  const t=curTime(),Fm=FS,out=[];
  const tms=[...new Set([TMODE||FS.team,IOF.team].filter(Boolean))],team=tms.length===1?tms[0]:'';
  out.push('เรียนผู้บังคับบัญชา');
  out.push('กก.สส.บก.ตม.3'+(team?' ('+team+')':''));
  {const X=curSet();out.push('ขอรายงานผลการปฏิบัติ');out.push(perTxt(curF(),X.dates)+' ดังนี้')}
  const S=ST.sec,P=ST.pf;
  const M=mainR(),N=sm(M),self=sm(M.filter(r=>r.type=='จับเอง'));
  const perNat=S.arr&&P.nat,perChg=S.arr&&P.chg;
  const tmT=TMODE||FS.team||'';
  const blk=(r,i,o)=>{const q=[];const n=o.cnt(r);q.push((i+1)+'. '+(o.name?(msk(r.name)||'(ไม่ระบุชื่อ)'):'')+(n>1?' ('+n+' ราย)':''));o.lines(r).forEach(x=>{if(x)q.push(x)});return q.join('\n')};
  if(S.arr){let h='- ผลการจับกุม/ร่วมจับ '+nf(N)+' ราย'+sfx(FS,t)+(N?' (จับเอง '+nf(self)+' ราย, ร่วมจับ '+nf(N-self)+' ราย)':'');
   const f=PFL.filter(x=>x[0]!=='jt'&&P[x[0]]).map(x=>x[0]);
   if(f.length&&M.length){h+='\n'+M.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:(+a.id||0)-(+b.id||0)).map((r,i)=>blk(r,i,{name:P.name,cnt:w,lines:r=>{const x=[];
     if(P.dt&&r.date)x.push('วันที่ '+d2(r.date));if(P.nat&&r.nat)x.push('สัญชาติ'+r.nat);if(P.pp&&r.pp)x.push('หนังสือเดินทางเลขที่ '+msk(r.pp));
     if(P.sx){if(r.sex)x.push('เพศ'+r.sex);if(r.age)x.push('อายุ '+r.age+' ปี')}
     if(P.chg){const c=vc(r,'charge'),fn=+r.fine||0;if(c||fn)x.push((c?'ข้อหา '+c:'')+(fn?(c?' ':'')+'ปรับ '+nf(fn)+' บาท':''))}
     if(P.pl&&r.place)x.push('สถานที่ '+plc(r.place));if(ST.pf.jt!==0&&r.type!=='จับเอง')x.push('(ร่วมจับ'+(r.joint?' '+r.joint:'')+')');return x}})).join('\n\n')}
   out.push(h)}
  if(S.nat&&!perNat){const m={};M.forEach(r=>{const k=r.nat||'ไม่ระบุ';const o=m[k]||(m[k]={n:0,c:0});o.n+=w(r);o.c+=cs(r)});
   const A=Object.entries(m).sort((a,b)=>b[1].n-a[1].n);out.push(lines('- สัญชาติ',A.map(([k,o])=>k+' '+nf(o.n)+' ราย'+(ST.natf.cs?' '+nf(o.c)+' คดี':''))))}
  if(S.chg&&!perChg){const m={},nm={};M.forEach(r=>visChips(r,'charge',true).forEach(x=>{const q=ck(x);const o=m[q]||(m[q]={n:0,c:0});nm[q]=nm[q]||x;o.n+=w(r);o.c+=cs(r)}));
   out.push(lines('- ข้อหา',Object.keys(m).sort((a,b)=>m[b].n-m[a].n).filter(q=>nm[q]&&nm[q]!=='ไม่ระบุ').map(q=>nm[q]+' '+nf(m[q].n)+' ราย '+nf(m[q].c)+' คดี')))}
  if(S.place&&!(S.arr&&P.pl)){out.push(lines('- สถานที่',keys(cnt(M,r=>r.place)).map(([k,v])=>plc(k)+' '+nf(v)+' ราย')))}
  if(S.fine){const fine=M.reduce((a,r)=>a+(+r.fine||0),0);out.push('ค่าปรับ '+nf(fine)+' บาท')}
  if(S.io){let R=ioR();if(tmT&&!IOF.team)R=R.filter(r=>r.team===tmT);const m={};R.forEach(r=>{(m[r.team]=m[r.team]||[]).push(r)});const tot=R.reduce((a,r)=>a+ioV(r),0);
   const tk=Object.keys(m).sort(),one=tmT||IOF.team;let h='IO '+nf(tot)+' ครั้ง'+sfx(IOF,t);
   const kd=A=>ST.iof.kind?IOK.filter(q=>!IOF.type||IOF.type===q[0]).map(q=>{const v=ioSK(A,q[0]);return v?q[2]+' '+nf(v):''}).filter(Boolean):[];
   if(one){const x=kd(R);if(x.length)h+=' ('+x.join(', ')+')'}
   else if(tk.length)h+='\n'+tk.map(k=>{const A=m[k];let l='    • '+k+' '+nf(A.reduce((a,r)=>a+ioV(r),0))+' ครั้ง';const x=kd(A);if(x.length)l+=' ('+x.join(', ')+')';return l}).join('\n');
   out.push(h)}
  if(S.rv&&!tmT){const R=rvR(),n=rvS(R),T=rvCnt(R,'type');let h='- เพิกถอน/ฟ้องใบแดง '+nf(n)+' ราย'+sfx(RVF,t)+(T.length&&n?' ('+T.map(([k,v])=>k+' '+nf(v)+' ราย').join(', ')+')':'');const f=ST.rvf;
   if((f.name||f.nat||f.pp||f.sx||f.chg||f.off||f.unit||f.ty)&&R.length){h+='\n'+R.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:(a.row||0)-(b.row||0)).map((r,i)=>blk(r,i,{name:f.name,cnt:rvW,lines:r=>{const x=[];if(f.nat&&r.nat)x.push('สัญชาติ'+r.nat);if(f.pp&&r.pp)x.push('หนังสือเดินทางเลขที่ '+msk(r.pp));if(f.sx){if(r.sex)x.push('เพศ'+r.sex);if(r.age)x.push('อายุ '+r.age+' ปี')}if(f.chg&&r.charge)x.push('คดี '+chips(r.charge).join(', '));if(f.off&&r.off)x.push('พงส. '+r.off);if(f.unit&&r.unit)x.push(r.unit);if(f.ty&&r.type)x.push(r.type);return x}})).join('\n\n')}
   out.push(h)}
  out.push('');out.push('จึงเรียนมาเพื่อโปรดทราบ');
  return out.join('\n')}
 /* ---------- โครงการ์ด ---------- */
 const host=()=>SP2?$('sp2'):$('s');const vis=()=>SP2||(document.body.classList.contains('dmtools')&&!$('s').classList.contains('hide'));
 function build(){const w0=host();if(!w0)return;
  if(!$('sp2d')){const d=document.createElement('div');d.id='sp2d';d.className='card sp2c';d.innerHTML='<div class="ch"><h4>📋 ตารางข้อมูล <small id="sp2dn"></small></h4></div><div id="sp2db"></div>';w0.appendChild(d)}
  if(!$('sp2r')){const r=document.createElement('div');r.id='sp2r';r.className='card sp2c';
   r.innerHTML='<div class="ch"><h4>📝 ข้อความสรุปรายงาน <small>ตามตัวกรองของแดชบอร์ดที่เปิดอยู่</small></h4><div class="rvseg sp2md" role="group" aria-label="รูปแบบข้อความ"><button type="button" data-md="short">แบบย่อ</button><button type="button" data-md="full">แบบเต็ม</button><button type="button" data-md="custom">เลือกเอง</button></div><div class="sp2rb"><button type="button" class="btn sm" data-rp="gen" title="สร้างข้อความใหม่จากตัวกรองปัจจุบัน">↻ สร้างใหม่</button><button type="button" class="btn sm ok" data-rp="copy">📋 คัดลอก</button></div></div>'
    +'<div class="sp2o" id="sp2o">'+SECL.map(([k,l,fs,g])=>`<div class="sp2or" data-s="${k}"><label class="sp2sc"><input type="checkbox" data-sec="${k}"><b>${E(l)}</b></label>${fs.length?`<div class="sp2fl">${fs.map(([a,b])=>`<button type="button" class="sp2fc" data-g="${g}" data-f="${a}">${E(b)}</button>`).join('')}</div>`:''}</div>`).join('')+'</div>'
    +'<small class="sp2hint" id="sp2hint"></small><textarea id="sp2ta" rows="14" spellcheck="false" aria-label="ข้อความสรุปรายงาน"></textarea><div class="sp2st" id="sp2st"></div>';
   w0.appendChild(r);
   r.addEventListener('change',e=>{const c=e.target.closest('[data-sec]');if(!c)return;ST.sec[c.dataset.sec]=c.checked?1:0;save();gen(true)});
   r.addEventListener('click',e=>{const md=e.target.closest('[data-md]');if(md){ST.mode=md.dataset.md;save();gen(true);return}const f=e.target.closest('.sp2fc');if(f){const g=f.dataset.g;ST[g]=ST[g]||{};ST[g][f.dataset.f]=ST[g][f.dataset.f]?0:1;save();gen(true);return}
    const b=e.target.closest('[data-rp]');if(!b)return;if(b.dataset.rp==='gen'){try{paintTbl()}catch(x){}gen(true);const n=new Date(),p2=v=>String(v).padStart(2,'0');st('↻ สร้างข้อความใหม่แล้ว ('+p2(n.getHours())+':'+p2(n.getMinutes())+':'+p2(n.getSeconds())+') ตามตัวกรองปัจจุบัน');setTimeout(()=>st(''),3000);const t=$('sp2ta');if(t){t.classList.remove('flash');void t.offsetWidth;t.classList.add('flash')}}else if(b.dataset.rp==='copy')copy()});
   r.addEventListener('input',e=>{if(e.target.id==='sp2ta'){e.target.dataset.dirty='1';st('แก้ไขข้อความเอง — กด ↻ สร้างใหม่ เพื่อดึงข้อมูลตามตัวกรองล่าสุด')}})}
  /* ให้การ์ดอยู่ท้ายแผงเสมอ */
  if(!$('sp2bar')){const b=document.createElement('div');b.id='sp2bar';b.className='sp2bar';b.innerHTML='<span>แสดง/ซ่อน:</span><button type="button" data-hv="d" aria-pressed="true">📋 ตารางข้อมูล</button><button type="button" data-hv="r" aria-pressed="true">📝 ข้อความสรุปรายงาน</button>';
   b.addEventListener('click',e=>{const t=e.target.closest('[data-hv]');if(!t)return;HV[t.dataset.hv]=!HV[t.dataset.hv];try{localStorage.setItem('tm3_sp2hv',JSON.stringify(HV))}catch(x){}hvPaint();if(HV[t.dataset.hv])sp2Cards()});w0.appendChild(b)}
  const bb=$('sp2bar'),d=$('sp2d'),r=$('sp2r');
  if(SP2){if(bb.parentNode!==w0||bb.nextSibling!==d||d.nextSibling!==r||r.nextSibling){w0.appendChild(bb);w0.appendChild(d);w0.appendChild(r)}}
  else{const sc=w0.querySelector(':scope>.sc');if(sc&&(bb.parentNode!==w0||bb.nextSibling!==d||d.nextSibling!==r||r.nextSibling!==sc)){w0.insertBefore(bb,sc);w0.insertBefore(d,sc);w0.insertBefore(r,sc)}}hvPaint()}
 let HV={d:true,r:true};try{HV=Object.assign(HV,JSON.parse(localStorage.getItem('tm3_sp2hv')||'{}'))}catch(e){}
 function hvPaint(){document.body.classList.toggle('hv-d',!HV.d);document.body.classList.toggle('hv-r',!HV.r);document.querySelectorAll('#sp2bar [data-hv]').forEach(b=>{const on=!!HV[b.dataset.hv];b.setAttribute('aria-pressed',on);b.classList.toggle('on',on)})}
 function st(t){const e=$('sp2st');if(e)e.textContent=t||''}
 function hints(){const S=ST.sec,P=ST.pf,h=[],cu=ST.mode==='custom';if(ST.mode!=='custom'){const e=$('sp2hint');if(e)e.textContent=ST.mode==='full'&&blurOn()&&!IOMODE?'โหมดซ่อนชื่อเปิดอยู่ — ชื่อ/พาสปอร์ตในข้อความจะถูกปิดเป็น ● (ปิดซ่อนชื่อเพื่อได้ข้อความจริง)':'';return}if(S.rv&&(TMODE||FS.team))h.push('เพิกถอน/ฟ้องใบแดงไม่แยกตามชป. จึงไม่แสดงในรายงานของชุดที่เลือก');if(S.arr&&P.nat&&S.nat)h.push('สัญชาติซ้ำกับรายคน → ใช้ข้อมูลรายคนแทน');if(S.arr&&P.chg&&S.chg)h.push('ข้อหาซ้ำกับรายคน → ใช้ข้อมูลรายคนแทน');if(blurOn()&&(P.name||P.pp||ST.rvf.name))h.push('โหมดเบลอชื่อเปิดอยู่ — ชื่อ/พาสปอร์ตในข้อความจะถูกปิดเป็น ● (ปิดเบลอเพื่อได้ข้อความจริง)');const e=$('sp2hint');if(e)e.textContent=h.join(' · ')}
 function paintOpts(){const r=$('sp2r');if(!r)return;r.dataset.m=ST.mode||'short';r.querySelectorAll('[data-md]').forEach(b=>b.classList.toggle('on',b.dataset.md===(ST.mode||'short')));r.querySelectorAll('[data-sec]').forEach(c=>{c.checked=!!ST.sec[c.dataset.sec];c.closest('.sp2or').classList.toggle('off',!c.checked)});
  r.querySelectorAll('.sp2fc').forEach(b=>{const g=ST[b.dataset.g]||{};b.classList.toggle('on',!!g[b.dataset.f])});
  /* ซ่อนตัวเลือกที่ไม่ใช้ได้ในโหมดนั้น ๆ ไม่ต้อง — ใช้ได้ทุกแดช */ }
 function gen(force){const ta=$('sp2ta');if(!ta)return;if(!force&&ta.dataset.dirty==='1')return;if(document.activeElement===ta&&!force)return;
  let t='';try{t=repText()}catch(e){t='สร้างข้อความไม่สำเร็จ: '+e.message;console.error('sp2 rep',e)}
  ta.value=t;ta.dataset.dirty='';paintOpts();hints();ta.style.height='auto';ta.style.height=Math.min(Math.max(ta.scrollHeight+4,200),520)+'px';st('')}
 async function copy(){const ta=$('sp2ta');if(!ta)return;let ok=false;try{await navigator.clipboard.writeText(ta.value);ok=true}catch(e){try{ta.focus();ta.select();ok=document.execCommand('copy');ta.setSelectionRange(0,0)}catch(x){}}
  st(ok?'✅ คัดลอกข้อความแล้ว — วางในไลน์/เอกสารได้เลย':'⚠️ คัดลอกอัตโนมัติไม่ได้ — กดเลือกข้อความแล้ว Ctrl+C');if(ok)setTimeout(()=>st(''),2500)}
 function paintTbl(){const b=$('sp2db');if(!b)return;const T=tblHtml();$('sp2dn').textContent='· '+T.lab+' · '+nf(T.n)+' แถว · '+T.tot;
  b.innerHTML=(T.html?T.html:'<p class="note" style="margin:10px 4px">ไม่พบข้อมูลตามเงื่อนไขที่กรอง</p>')+(T.more?`<p class="note" style="margin:6px 4px 2px">แสดง ${LIM} แถวแรก จากทั้งหมด ${nf(T.more)} แถว — ดูทั้งหมดได้ที่แท็บ “ตารางข้อมูล”</p>`:'')}
 let tm=0;window.sp2Cards=function(){if(!vis())return;clearTimeout(tm);tm=setTimeout(()=>{try{build();paintTbl();gen(false)}catch(e){console.error('sp2Cards',e)}},90)};
 const o=window.sp2Sync;window.sp2Sync=function(){const r=o.apply(this,arguments);if(SP2){const w0=$('sp2');if(w0&&$('sp2r')&&$('sp2r').nextSibling){if($('sp2bar'))w0.appendChild($('sp2bar'));w0.appendChild($('sp2d'));w0.appendChild($('sp2r'))}sp2Cards()}return r};
 const p=$('p2btn');if(p)p.addEventListener('click',()=>setTimeout(()=>{sp2Cards()},50));
 ['render','rvRender','ioRender'].forEach(n=>{const f=window[n];if(typeof f!=='function')return;window[n]=function(){const r=f.apply(this,arguments);if(!SP2)sp2Cards();return r}});
 new MutationObserver(()=>sp2Cards()).observe(document.body,{attributes:true,attributeFilter:['class']});
 document.querySelectorAll('nav [data-t]').forEach(b=>b.addEventListener('click',()=>setTimeout(sp2Cards,80)));
 const bp=document.querySelector('.blbtn');document.addEventListener('click',e=>{if(SP2&&e.target.closest('.blbtn'))setTimeout(()=>gen(true),50)});
})();

/* v188 (1) สรุปผู้บังคับบัญชา: เมื่อกรอง ให้สรุปตามค่ากรองเสมอ — กันการวิเคราะห์อัตโนมัติของ Claude เขียนทับ (เว้นแต่กดวิเคราะห์เอง)
   (2) ช่องช่วงข้อมูลมุมขวาบน → “ห้วงเวลาการกรอง” */
(()=>{if(typeof window.renderIns==='function'){const o=window.renderIns;window.renderIns=function(){const r=o.apply(this,arguments);try{insFlt()}catch(e){}return r}}
 const curF=()=>IOMODE?IOF:RVMODE?RVF:FS;
 window.rngUp=function(){const e=$('rng');if(!e)return;const n=e.firstChild;if(!n||n.nodeType!==3)return;const t=n.nodeValue||'';if(/^ห้วงเวลาการกรอง/.test(t))return;const F=curF();let p;
  if(F.mon)p=(IOMODE?ioMl:RVMODE?rvMl:mlabel)(F.mon);
  else if(F.a&&F.b&&F.a.slice(8)==='01'&&+F.b.slice(8)===new Date(+F.b.slice(0,4),+F.b.slice(5,7),0).getDate()&&(!F.per||F.per==='c')){const L=IOMODE?ioMl:RVMODE?rvMl:mlabel;p=F.a.slice(0,7)===F.b.slice(0,7)?L(F.a.slice(0,7)):L(F.a.slice(0,7))+' – '+L(F.b.slice(0,7))}
  else if(F.a||F.b){const pl=F.per&&F.per!=='c'?(PLd[F.per]||PL[F.per]):'';p=(pl?pl+' · ':'')+(F.a&&F.a===F.b?fd(F.a):(F.a?fd(F.a):'…')+' – '+(F.b?fd(F.b):'ปัจจุบัน'))}
  else{const rg=t.replace(/^ข้อมูล(วันที่)?\s*/,'').trim();p='ทั้งหมด'+(rg&&rg!=='-'?' ('+rg+')':'')}
  n.nodeValue='ห้วงเวลาการกรอง : '+p};
 ['render','rvRender','ioRender'].forEach(k=>{const f=window[k];if(typeof f!=='function')return;window[k]=function(){const r=f.apply(this,arguments);try{rngUp()}catch(e){}return r}});try{rngUp()}catch(e){}})();
/* v218 การข่าว: ตัวเลือกตามค่าที่มีในชีต (นอกจาก 4 ค่าหลัก) — อัปเดตเมื่อข้อมูลเปลี่ยน */
(()=>{const f=window.render;if(typeof f!=='function'||typeof fillIntel!=='function')return;window.render=function(){const r=f.apply(this,arguments);try{fillIntel()}catch(e){}return r}})();

/* ===== v220 บันทึกเพิกถอน/ฟ้องใบแดง: ช่องวางข้อความ → ประมวลผลแล้วกรอกฟอร์มอัตโนมัติ ===== */
function xrPasteCard(){return `<div class="card pst xrp"><div class="psh"><div><b>📝 วางข้อความหนังสือ / รายงานเพิกถอน–ฟ้องใบแดง</b><p>วางข้อความ (จาก LINE, หนังสือขอเพิกถอน, รายงานผล ฯลฯ) แก้ข้อความได้ตามต้องการ แล้วกด “ประมวลผล” ระบบจึงจะแยกข้อมูลลงช่องในฟอร์มด้านล่าง (ช่องที่กรอกให้จะมีกรอบสีเหลือง) ตรวจสอบก่อนกดบันทึก</p></div></div>
<textarea id="xrptx" rows="16" placeholder="ตัวอย่าง: ที่ ตช 0029.45/1084 ลงวันที่ 30 ก.ย. 2569 ตม.จว.นนทบุรี ขอเพิกถอนการอนุญาตให้อยู่ในราชอาณาจักร MR.RAJ KUMAR สัญชาติอินเดีย เพศชาย อายุ 41 ปี หนังสือเดินทาง Z1234567 กรณีทำงานโดยไม่ได้รับอนุญาต พงส. ร.ต.อ.หญิง จารุมน อัตบุตร">${esc(window.__xrtx||'')}</textarea>
<div class="psa"><button type="button" class="btn pr" id="xrpgo">⚙️ ประมวลผลและกรอกฟอร์ม</button><button type="button" class="btn" id="xrpcl">ล้างข้อความ</button></div><div id="xrpms"></div></div>`}
function xrUniq(k){return[...new Set(RV.map(r=>String(r[k]||'').trim()).filter(v=>v&&v!=='ไม่ระบุ'))]}
function xrBest(t,list){const T=ck(t);let best='';list.forEach(v=>{const k=ck(v);if(k.length>=3&&T.includes(k)&&k.length>ck(best).length)best=v});return best}
function xrParse(raw){const t=String(raw||'').replace(/[๐-๙]/g,c=>'๐๑๒๓๔๕๖๗๘๙'.indexOf(c)).replace(/ /g,' ').replace(/\r/g,'');const o={};let m;
 let b={};try{b=pxLocal(t)}catch(e){}
 /* ส่วนท้ายหนังสือ (หลัง "จึงเรียนมาเพื่อโปรดพิจารณา") = ผู้เสนอ/พงส. + วันที่ประมวลเรื่อง */
 const ei=t.search(/จึงเรียน(?:มา)?เพื่อ/),tail=ei>=0?t.slice(ei):'',body=ei>=0?t.slice(0,ei):t;
 /* วันที่: ใช้วันที่ท้ายหนังสือ (วันที่ประมวลเรื่อง) ก่อน ถ้าไม่มีจึงใช้วันที่แรกในข้อความ */
 o.date=(tail&&pxDate(tail))||pxDate(t)||'';
 /* การปฏิบัติ */
 const nP=(t.match(/เพิกถอน/g)||[]).length;if(/ใบแดง/.test(t)&&!(nP>1&&!/ฟ้องใบแดง/.test(t)))o.type='ฟ้องใบแดง';else if(nP)o.type='เพิกถอน';else if(/ฟ้อง/.test(t))o.type='ฟ้องใบแดง';
 /* เลขหนังสือ: บรรทัด "ที่ ..." บนสุด */
 const DOC=/(\d{4}\.\d{1,3}(?:\.\d{1,3})?(?:\(\d+\))?\s*\/\s*\d{1,6})/;
 if((m=t.match(new RegExp('^\\s*ที่\\s*(?:ตช\\.?\\s*)?'+DOC.source,'m')))||(m=t.match(DOC)))o.doc=m[1].replace(/\s+/g,'');
 /* พงส. = ผู้ลงนามท้ายหนังสือ (ยศ + ชื่อในวงเล็บ) — เทียบกับรายชื่อในชีตเพื่อสะกดให้ตรง */
 const RK='(?:ว่าที่\\s*)?(?:พล\\.?\\s*ต\\.?\\s*[อทต]\\.?|พ\\.?\\s*ต\\.?\\s*[อทต]\\.?|ร\\.?\\s*ต\\.?\\s*[อทต]\\.?|ด\\.?\\s*ต\\.?|จ\\.?\\s*ส\\.?\\s*ต\\.?|ส\\.?\\s*ต\\.?\\s*[อทต]\\.?)(?:\\s*หญิง)?';
 const offs=xrUniq('off');let ov='';
 const fixOff=(rk,nm)=>{rk=String(rk||'').replace(/\s+/g,'');nm=String(nm||'').replace(/[()（）]/g,' ').replace(/\s+/g,' ').trim();if(!nm)return'';const full=(rk?rk:'')+nm,kf=ck(full);const hit=offs.find(x=>ck(x)===kf);return hit||full};
 if(tail&&(m=tail.match(new RegExp('('+RK+')[\\s\\n]*\\(?\\s*([ก-๙]{2,}\\s+[ก-๙]{2,})\\s*\\)?'))))ov=fixOff(m[1],m[2]);
 if(!ov&&(m=t.match(new RegExp('(?:พงส\\.?|พนักงานสอบสวน)(?:เจ้าของ(?:คดี|สำนวน))?\\s*[:：]?\\s*('+RK+')\\s*([ก-๙]{2,}\\s+[ก-๙]{2,})'))))ov=fixOff(m[1],m[2]);
 if(!ov)ov=xrBest(tail||t,offs);
 if(!ov&&(m=t.match(new RegExp('('+RK+')\\s*([ก-๙]{2,}\\s+[ก-๙]{2,})'))))ov=fixOff(m[1],m[2]);
 if(ov)o.off=ov;
 /* ตม.จว.ที่ยื่นเรื่อง = หน่วยที่ "มีหนังสือ" มา (ข้อ 1) ไม่ใช่หน่วยอื่นที่ถูกอ้างถึงในเนื้อหา */
 const units=xrUniq('unit'),fixU=x=>{x=String(x||'').replace(/\s+/g,'');const k=ck(x.replace(/^ตม\.?จว\.?/,''));const hit=units.find(u=>ck(u.replace(/^ตม\.?จว\.?/,''))===k);if(hit)return hit;let p='';try{p=pxPre(x.replace(/^ตม\.?จว\.?/,''),PROVS,PA)}catch(e){}return /^ตม\.?จว/.test(x)?'ตม.จว.'+(p||x.replace(/^ตม\.?จว\.?/,'')):x};
 let uv='';
 if(m=t.match(/(ตม\.?\s*จว\.?\s*[ก-๙]{2,}|ตม\.?\s*(?:ทสภ|ทภ|ดม)\.?|กก\.?\s*[ก-๙]{2,4}\.?\s*บก\.?\s*ตม\.?\s*\d)\s*(?:ได้)?มีหนังสือ/))uv=fixU(m[1]);
 if(!uv&&(m=t.match(/ตาม(?:ที่)?\s*(ตม\.?\s*จว\.?\s*[ก-๙]{2,})\s*เสนอ/)))uv=fixU(m[1]);
 if(!uv&&(m=t.match(/ตม\.?\s*จว\.?\s*([ก-๙]{2,})/)))uv=fixU('ตม.จว.'+m[1]);
 if(uv)o.unit=uv;
 ['name','nat','sex','age'].forEach(k=>{const v=b[k];if(v&&!(k==='sex'&&v==='ไม่ระบุ'))o[k]=v});
 if(m=body.match(/\b(MRS|MISS|MS|MR)\s*\.?\s*([A-Z][A-Z'\-]+(?:\s+[A-Z][A-Z'\-]+){0,5})/)){o.name=m[1]+'.'+m[2].replace(/\s+/g,' ').trim();if(!o.sex)o.sex=m[1]==='MR'?'ชาย':'หญิง'}
 /* เลขพาสปอร์ต = เลขเอกสารประจำตัวของผู้ต้องหา (พาสปอร์ต / CI / บัตร / เลขประชาชน) */
 let pp='';if(m=body.match(/(?:หนังสือเดินทาง|พาสปอร์ต|passport)\s*(?:เลขที่|เลข|no\.?|number)?\s*[:：.]?\s*([A-Z]{0,3})\s?(\d{5,10}[A-Z0-9]{0,2})(?![\d\/])/i))pp=m[1]+m[2];if(!pp)pp=b.pp||'';
 if(!pp&&(m=body.match(/(?:หนังสือเดินทาง|พาสปอร์ต|passport|หนังสือรับรอง[^\n]{0,80}?|เอกสาร[^\n]{0,60}?|บัตร[^\n]{0,30}?|เลขประจำตัว[^\n]{0,20}?)\s*(?:เลขที่|เลข|no\.?|number)\s*[:：.]?\s*([A-Z]{0,3}\d{5,10}[A-Z0-9]{0,2})(?![\d\/])/i)))pp=m[1];
 if(!pp&&(m=body.match(/\b([A-Z]{1,3}\d{6,9})\b(?!\s*\/)/)))pp=m[1];
 if(!pp&&(m=body.match(/(?<!\d)(\d[\d\s-]{11,16}\d)(?!\d)/))){const d=m[1].replace(/\D/g,'');if(d.length===13)pp=d}
 if(pp)o.pp=pp.toUpperCase();
 /* กฎ: ผู้ต้องหา 1 คน = 1 ราย (1 แถวในชีต) เสมอ — ไม่นับจาก "ข้อ 2.1-2.3" หรือ "กับพวก" */
 o.num='1';
 /* คดี: ตีความจากข้อ 3 (ข้อสรุปของ กก.สก. — มาตรา/เหตุที่เพิกถอน) ก่อน ถ้าไม่ชัดจึงดูความผิดในข้อ 2 */
 const s3=body.search(/\n\s*3\s*[.)]|พิจารณาแล้ว/),det=s3>0?body.slice(0,s3):body,con=s3>0?body.slice(s3):'';
 const chs=xrUniq('charge'),pick=v=>chs.find(x=>ck(x)===ck(v))||v;
 const RULE=[[/12\s*\(\s*3\s*\)|ใบอนุญาตทำงาน|ทำงานโดยไม่|ทำงานที่ห้าม|การทำงานของคนต่างด้าว|ทำงานนอกเหนือ/,'ทำงานโดยไม่ได้รับอนุญาต'],
  [/ยาเสพติด|เมทแอมเฟตามีน|ยาบ้า|ไอซ์|กัญชา|เฮโรอีน/,'ยาเสพติด'],
  [/อยู่(?:ใน(?:ราช)?อาณาจักร)?เกินกำหนด|overstay/i,'overstay'],
  [/หลบหนีเข้าเมือง|เข้าเมืองโดยไม่ได้รับอนุญาต|เข้ามาในราชอาณาจักรโดยไม่ได้รับอนุญาต/,'หลบหนีเข้าเมือง'],
  [/หมายแดง|red\s*notice|interpol/i,'INTERPOLหมายแดง']];
 let cv='';if(con){for(const [rx,v] of RULE){if(rx.test(con)){cv=pick(v);break}}if(!cv)cv=xrBest(con.replace(/มาตรา|พ\.ร\.บ\.|ประกอบ/g,' '),chs.filter(x=>ck(x).length>=4))}
 let seg='';if(m=det.match(/(?:ความผิดฐาน|ข้อหา|กรณี|ฐานความผิด)([\s\S]{0,260})/))seg=m[1];
 if(!cv&&seg){for(const [rx,v] of RULE){if(rx.test(seg)){cv=pick(v);break}}if(!cv)cv=xrBest(seg,chs)}
 if(!cv)cv=xrBest(det,chs);
 if(!cv&&b.charge)cv=String(b.charge).split(/,\s*/)[0];
 if(cv)o.charge=cv;
 return o}
function xrPasteBind(){const go=$('xrpgo'),ta=$('xrptx');if(!go||!ta||go.__b)return;go.__b=1;
 const run=()=>{window.__xrtx=ta.value;const v=ta.value.trim(),ms=$('xrpms');document.querySelectorAll('#xdf .af').forEach(e=>e.classList.remove('af'));if(!v){ms.innerHTML='<span class="mu">วางข้อความก่อน แล้วกดประมวลผล</span>';ta.focus();return}
  const o=xrParse(v),LB={date:'วันที่',type:'การปฏิบัติ',doc:'เลขหนังสือ',off:'พงส.',unit:'ตม.จว.',name:'ชื่อ',nat:'สัญชาติ',sex:'เพศ',pp:'พาสปอร์ต',age:'อายุ',num:'จำนวนราย',charge:'คดี'};const got=[],miss=[];
  Object.keys(LB).forEach(k=>{const el=$('xr_'+k);if(!el)return;const v=o[k];if(v!=null&&v!==''){if(el.tagName==='SELECT'&&![...el.options].some(x=>x.value===v))return;el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));(el.type==='hidden'&&el.nextElementSibling?el.nextElementSibling:el).classList.add('af');got.push(LB[k])}else if(['date','name','nat','unit','charge'].includes(k))miss.push(LB[k])});
  ms.innerHTML=got.length?'✅ กรอกให้แล้ว '+got.length+' ช่อง: '+got.map(esc).join(' · ')+(miss.length?'<br><small>⚠️ ไม่พบ: '+miss.map(esc).join(' · ')+' — กรอกเองได้</small>':''):'⚠️ ไม่พบข้อมูลที่แยกได้ — ลองวางข้อความที่มี วันที่ / ชื่อ / สัญชาติ / ตม.จว.';
  const f=document.querySelector('#xdf .xdc');if(f)try{f.scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}};
 go.onclick=run;$('xrpcl').onclick=()=>{ta.value='';window.__xrtx='';$('xrpms').innerHTML='';document.querySelectorAll('#xdf .af').forEach(e=>e.classList.remove('af'));ta.focus()};
 /* v226 ข้อความที่วางคงอยู่หลังบันทึก/วาดฟอร์มใหม่ จนกว่าจะกดล้าง */
 ta.value=window.__xrtx||'';ta.addEventListener('input',()=>{window.__xrtx=ta.value});
 /* v224 ไม่ประมวลผลอัตโนมัติตอนวาง — ให้แก้ข้อความได้ก่อน แล้วกดปุ่ม "ประมวลผล" เอง */
 ta.addEventListener('paste',()=>setTimeout(()=>{window.__xrtx=ta.value;const ms=$('xrpms');if(ms)ms.innerHTML='<span class="mu">📋 วางข้อความแล้ว — ตรวจ/แก้ข้อความได้ แล้วกด “⚙️ ประมวลผลและกรอกฟอร์ม”</span>'},30));
 ta.addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();run()}})}
/* v221 วันที่ในตารางผู้ต้องหาหลายราย (จากข้อความ) ใช้ตัวเลือก วัน เดือน ปี แทนช่องวันที่ของเบราว์เซอร์ (ซึ่งอาจแสดงเดือนก่อน) */
(()=>{if(typeof pmRender!=='function')return;const _r=pmRender;pmRender=function(){const r=_r.apply(this,arguments);try{const P=$('pmulti');P&&P.querySelectorAll('input[type=date]').forEach(i=>thDate(i))}catch(e){}return r}})();

/* v228 IO: วางข้อความรายงานเพื่อวิเคราะห์/กรอกอัตโนมัติ (กดประมวลผลเอง, ข้อความคงอยู่จนกดล้าง) */
function xiPasteCard(){return `<div class="card pst xrp xip"><div class="psh"><div><b>📝 วางข้อความรายงาน IO เพื่อวิเคราะห์</b><p>วางข้อความรายงานผล (จาก LINE ฯลฯ) แก้ไขได้ แล้วกด “ประมวลผล” ระบบจะแยกวันที่ และตัวเลข สุ่มตรวจขออยู่ต่อ · (ม.37/38) · ข้อมูลท้องถิ่น ของแต่ละ ชป. ลงตารางด้านล่าง (ช่องที่กรอกให้จะมีกรอบสีเหลือง) ตรวจก่อนกดบันทึก</p></div></div>
<textarea id="xiptx" rows="16" placeholder="ตัวอย่าง: ผลการปฏิบัติ ชป.1 วันที่ 14 ต.ค. 69 สุ่มตรวจขออยู่ต่อ 5 ครั้ง การดำเนินการตามมาตรา 38 12 ครั้ง การจัดทำข้อมูลท้องถิ่น 40 ครั้ง ชป.2 ...">${esc(window.__xitx||'')}</textarea>
<div class="psa"><button type="button" class="btn pr" id="xipgo">⚙️ ประมวลผลและกรอกฟอร์ม</button><button type="button" class="btn" id="xipcl">ล้างข้อความ</button></div><div id="xipms"></div></div>`}
function xiParse(raw){const t=String(raw||'').replace(/[\u0e50-\u0e59]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x0e50+48)).replace(/\r/g,''),o={date:'',teams:{}};
 try{o.date=pxDate(t)||''}catch(e){}
 const num=s=>+String(s).replace(/,/g,'')||0;
 /* แบ่งตามชุด: ชป.1 / ชป 2 / ชุดปฏิบัติที่ 3 */
 const re=/(?:ชป\.?|ชุด(?:ปฏิบัติ)?(?:ที่)?)\s*([123])(?!\d)/g,ms=[...t.matchAll(re)];
 const segs=ms.length?ms.map((m,i)=>({team:'ชป.'+m[1],txt:t.slice(m.index,i+1<ms.length?ms[i+1].index:t.length)})):[{team:'',txt:t}];
 segs.forEach(g=>{const x=g.txt,r={};
  let m=x.match(/(?:สุ่มตรวจ|ขออยู่ต่อ|non[\s-]?b)[^\d\n]{0,40}?(\d[\d,]*)/i);if(m)r.nonb=num(m[1]);
  /* (ม.37/38): ใช้ยอด “ตามมาตรา 38 N ครั้ง” ถ้ามี ไม่งั้นรวม ม.37 + ม.38 */
  m=x.match(/(?:ตาม)?มาตรา\s*38[^\d\n]{0,15}?(\d[\d,]*)\s*ครั้ง/)||x.match(/(?:ตาม)?มาตรา\s*37\/38[^\d\n]{0,15}?(\d[\d,]*)/);
  if(m)r.dorm=num(m[1]);else{const a=x.match(/ม\.?\s*37[^\d\n]{0,10}?(\d[\d,]*)\s*(?:ราย|ครั้ง)/),b=x.match(/ม\.?\s*38[^\d\n]{0,10}?(\d[\d,]*)\s*(?:ราย|ครั้ง)/);if(a||b)r.dorm=(a?num(a[1]):0)+(b?num(b[1]):0)}
  m=x.match(/(?:ข้อมูลท้องถิ่น|ท้องถิ่น)[^\d\n]{0,40}?(\d[\d,]*)/);if(m)r.local=num(m[1]);
  if(Object.keys(r).length){const k=g.team||'ชป.1';o.teams[k]=Object.assign(o.teams[k]||{},r);if(!g.team)o.noTeam=true}});
 return o}
function xiPasteBind(sm){const go=$('xipgo'),ta=$('xiptx');if(!go||!ta||go.__b)return;go.__b=1;
 const clr=()=>document.querySelectorAll('#xdf .af').forEach(e=>e.classList.remove('af'));
 const run=()=>{window.__xitx=ta.value;const v=ta.value.trim(),ms=$('xipms');clr();if(!v){ms.innerHTML='<span class="mu">วางข้อความก่อน แล้วกดประมวลผล</span>';ta.focus();return}
  const o=xiParse(v),got=[];
  if(o.date&&$('xi_date')){$('xi_date').value=o.date;$('xi_date').dispatchEvent(new Event('change',{bubbles:true}));const w=$('xi_date').nextElementSibling;(w&&w.classList.contains('dsel')?w:$('xi_date')).classList.add('af');got.push('วันที่')}
  Object.keys(o.teams).forEach(tm=>{const row=document.querySelector('#xdf .xir[data-tm="'+tm+'"]');if(!row)return;Object.keys(o.teams[tm]).forEach(f=>{const i=row.querySelector('input[data-f="'+f+'"]');if(!i)return;i.value=o.teams[tm][f];i.classList.add('af');got.push(tm+' '+(IOK.find(x=>x[0]===f)||[,f])[2]+' '+o.teams[tm][f])})});
  sm&&sm();
  ms.innerHTML=got.length?'✅ กรอกให้แล้ว '+got.length+' ช่อง: '+got.map(esc).join(' · ')+(o.date?'':'<br><small>⚠️ ไม่พบวันที่ — เลือกเอง</small>')+(o.noTeam?'<br><small>⚠️ ไม่พบ ชป. ในข้อความ — ใส่ไว้ที่ ชป.1 ย้ายได้เอง</small>':''):'⚠️ ไม่พบตัวเลขที่แยกได้ — ลองวางข้อความที่มีคำว่า สุ่มตรวจขออยู่ต่อ / มาตรา 38 / ข้อมูลท้องถิ่น';
  const f=document.querySelector('#xdf .xdc');if(f)try{f.scrollIntoView({behavior:'smooth',block:'start'})}catch(e){}};
 go.onclick=run;$('xipcl').onclick=()=>{ta.value='';window.__xitx='';$('xipms').innerHTML='';clr();ta.focus()};
 ta.addEventListener('input',()=>{window.__xitx=ta.value});
 ta.addEventListener('paste',()=>setTimeout(()=>{window.__xitx=ta.value;const ms=$('xipms');if(ms)ms.innerHTML='<span class="mu">📋 วางข้อความแล้ว — ตรวจ/แก้ข้อความได้ แล้วกด “⚙️ ประมวลผลและกรอกฟอร์ม”</span>'},30));
 ta.addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();run()}})}
/*VP-START*/
/* ===== VIEWPORT PICKER · PAGE STATE · FILTER STATE · MOTION ===== */
(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)');const COARSE=matchMedia('(pointer:coarse)');
 const nw=document.querySelector('nav .nw');const de=document.documentElement;
 /* ---- current page → body[data-pg] (header hidden on dashboard) ---- */
 const secs=['f','d','s'].map(i=>document.getElementById(i)).filter(Boolean);
 const pg=()=>{const v=secs.find(s=>!s.classList.contains('hide'));return v?v.id:''};
 let lastPg='';const syncPg=()=>{const p=window.__TV?'s':pg();if(p===lastPg)return;const prev=lastPg;lastPg=p;document.body.dataset.pg=p;
  if(prev&&!RM.matches&&!window.__vtRun){const s=document.getElementById(p);if(s){s.classList.remove('pgin');void s.offsetWidth;s.classList.add('pgin')}}moveBar()};
 secs.forEach(s=>new MutationObserver(syncPg).observe(s,{attributes:true,attributeFilter:['class']}));

 /* ---- sliding tab indicator (a pill behind the active tab) ---- */
 let bar=null;
 function moveBar(){if(window.__TV)return;const nt=document.querySelector('nav .ntabs');if(!nt)return;if(!bar||bar.parentNode!==nt){bar=document.createElement('i');bar.id='tabbar';bar.setAttribute('aria-hidden','true');nt.prepend(bar)}
  const cp=pg()||lastPg;const b=nt.querySelector('button[data-t="'+cp+'"]')||nt.querySelector('button[data-t].on');if(!b||!b.offsetWidth){bar.style.opacity='0';return}
  bar.style.opacity='1';bar.style.width=b.offsetWidth+'px';bar.style.height=b.offsetHeight+'px';bar.style.transform='translate('+b.offsetLeft+'px,'+b.offsetTop+'px)'}
 addEventListener('resize',()=>requestAnimationFrame(moveBar));
 if(nw){nw.addEventListener('click',e=>{const tb=e.target.closest('button[data-t]');if(tb){setTimeout(moveBar,30);setTimeout(moveBar,380);if(tb.dataset.t!=='s')setTimeout(()=>{try{window.scrollTo(0,0)}catch(x){}},60)}})}

 /* tab switch wrapped in a view transition (continuity) */
 if(nw)nw.addEventListener('click',e=>{const b=e.target.closest('button[data-t]');if(!b||!document.startViewTransition||RM.matches||COARSE.matches||window.__vtRun)return;
  if(b.classList.contains('on'))return;e.stopImmediatePropagation();e.preventDefault();window.__vtRun=1;
  try{const t=document.startViewTransition(()=>{b.onclick&&b.onclick.call(b,e)});t.finished.finally(()=>{window.__vtRun=0;moveBar()})}catch(x){window.__vtRun=0;b.onclick&&b.onclick.call(b,e)}},true);


 /* ---- TV mode: full-screen, no scroll, no white: the sheet is stretched to the chosen screen and fitted exactly ---- */
 const layoutTV=()=>{if(!window.__TV)return;const sh=document.getElementById('sheet');if(!sh)return;
  if(document.body.classList.contains('rflow')){const q=sh.style;q.position=q.margin=q.flex=q.width=q.height=q.transform=q.transformOrigin=q.left=q.top=q.maxWidth='';document.documentElement.style.overflow='';document.body.style.overflow='';document.body.classList.remove('tvdev');return}
  const ww=innerWidth,wh=innerHeight;let VW=W[mode]||ww,VH=HH[mode]||wh;const s=Math.min(ww/VW,wh/VH),DW=VW*s,DH=VH*s;document.body.classList.toggle('tvdev',!!HH[mode]&&(Math.abs(DW-ww)>1||Math.abs(DH-wh)>1));
  const z=Math.min(DW/1123,DH/794),sw=DW/z,shh=Math.min(DH/z,1270);
  const st=sh.style;st.position='fixed';st.margin='0';st.flex='none';st.width=sw+'px';st.height=shh+'px';st.transformOrigin='0 0';st.transform='scale('+z+')';st.zoom='';
  st.left=((ww-DW)/2)+'px';st.top=((wh-shh*z)/2)+'px';st.maxWidth='none';
  document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden'};
 if(window.__TV){addEventListener('resize',()=>requestAnimationFrame(layoutTV));setTimeout(layoutTV,120);setTimeout(layoutTV,700);setTimeout(layoutTV,1600)}
 /* ---- device picker ---- */
 const IC={auto:'<svg viewBox="0 0 24 24"><rect x="2.5" y="4" width="13" height="10" rx="1.5"/><rect x="16.5" y="8" width="5" height="10" rx="1.2"/><path d="M6 18h6M9 14v4"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg>',
  tablet:'<svg viewBox="0 0 24 24"><rect x="4.5" y="2.5" width="15" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg>',
  tabletL:'<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="2.2"/><path d="M18.5 11v2"/></svg>',
  laptop:'<svg viewBox="0 0 24 24"><rect x="4.5" y="5" width="15" height="10" rx="1.4"/><path d="M2.5 19h19l-1.6-4H4.1z"/></svg>',
  desktop:'<svg viewBox="0 0 24 24"><rect x="2.5" y="3.5" width="19" height="13" rx="1.6"/><path d="M8 20.5h8M12 16.5v4"/></svg>',
  wide:'<svg viewBox="0 0 24 24"><rect x="1.5" y="4.5" width="21" height="12" rx="1.6"/><path d="M8 20h8M12 16.5V20"/></svg>'};
 const OPT=[['auto','อัตโนมัติ (ตามหน้าจอ)','เต็มจอ',0,0,'auto',''],
  ['se','iPhone SE','375×667',375,667,'phone','โทรศัพท์'],['i15','iPhone 15 / 16','393×852',393,852,'phone','โทรศัพท์'],['i15pm','iPhone Pro Max','430×932',430,932,'phone','โทรศัพท์'],['gs','Galaxy S','360×800',360,800,'phone','โทรศัพท์'],['px','Pixel','412×915',412,915,'phone','โทรศัพท์'],['fold','มือถือพับ (กางออก)','884×1104',884,1104,'tablet','โทรศัพท์'],
  ['ipm','iPad mini แนวตั้ง','744×1133',744,1133,'tablet','แท็บเล็ต'],['ip','iPad แนวตั้ง','820×1180',820,1180,'tablet','แท็บเล็ต'],['ipl','iPad แนวนอน','1180×820',1180,820,'tabletL','แท็บเล็ต'],['ipp','iPad Pro 12.9" แนวตั้ง','1024×1366',1024,1366,'tablet','แท็บเล็ต'],['ippl','iPad Pro 12.9" แนวนอน','1366×1024',1366,1024,'tabletL','แท็บเล็ต'],['tab','Galaxy Tab แนวนอน','1280×800',1280,800,'tabletL','แท็บเล็ต'],
  ['l720','HD','1280×720',1280,720,'laptop','โน้ตบุ๊ก / คอมพิวเตอร์'],['l768','โน้ตบุ๊ก','1366×768',1366,768,'laptop','โน้ตบุ๊ก / คอมพิวเตอร์'],['l900','MacBook Air 13"','1440×900',1440,900,'laptop','โน้ตบุ๊ก / คอมพิวเตอร์'],['l864','Windows 125%','1536×864',1536,864,'laptop','โน้ตบุ๊ก / คอมพิวเตอร์'],['l1050','จอ 16:10','1680×1050',1680,1050,'desktop','โน้ตบุ๊ก / คอมพิวเตอร์'],['fhd','Full HD','1920×1080',1920,1080,'desktop','โน้ตบุ๊ก / คอมพิวเตอร์'],
  ['qhd','QHD','2560×1440',2560,1440,'wide','จอใหญ่ / ทีวี'],['uw','Ultrawide 21:9','3440×1440',3440,1440,'wide','จอใหญ่ / ทีวี'],['uhd','4K ทีวี','3840×2160',3840,2160,'wide','จอใหญ่ / ทีวี'],['s43','โปรเจคเตอร์ 4:3','1024×768',1024,768,'desktop','จอใหญ่ / ทีวี']];
 const W=Object.fromEntries(OPT.map(o=>[o[0],o[3]])),HH=Object.fromEntries(OPT.map(o=>[o[0],o[4]]));
 const DSIG=(()=>{try{return [Math.min(screen.width,screen.height),Math.max(screen.width,screen.height),COARSE.matches?1:0].join('x')}catch(e){return ''}})();
 let mode='auto';try{const s=localStorage.getItem('tm3_vp'),sg=localStorage.getItem('tm3_vpsig');if(s&&s in W){if(sg===DSIG)mode=s;else{localStorage.removeItem('tm3_vp');localStorage.setItem('tm3_vpsig',DSIG)}}else localStorage.setItem('tm3_vpsig',DSIG)}catch(e){}

 /* media-query re-evaluation against the chosen layout width */
 const ORIG=new WeakMap();
 const evalQ=(q,w)=>{q=q.trim().toLowerCase();if(!q)return null;if(/\bprint\b/.test(q))return null;
  const f=q.match(/\([^)]*\)/g)||[];if(!f.length)return null;let ok=true;
  for(const x of f){const m=x.match(/^\(\s*(min|max)-width\s*:\s*([\d.]+)px\s*\)$/);if(!m)return null;ok=ok&&(m[1]==='min'?w>=+m[2]:w<=+m[2])}
  if(/^not\s/.test(q))return null;return ok};
 const walk=(rules,fn)=>{for(const r of rules){if(r.media&&r.cssRules&&r.type===4)fn(r);if(r.cssRules)try{walk(r.cssRules,fn)}catch(e){}}};
 const applyMQ=w=>{for(const ss of document.styleSheets){let rl;try{rl=ss.cssRules}catch(e){continue}if(!rl)continue;
  walk(rl,r=>{if(!ORIG.has(r))ORIG.set(r,r.media.mediaText);const o=ORIG.get(r);
   if(!w){if(r.media.mediaText!==o)r.media.mediaText=o;return}
   const qs=o.split(',');const res=qs.map(q=>evalQ(q,w));if(res.some(v=>v===null)){if(r.media.mediaText!==o)r.media.mediaText=o;return}
   const t=res.some(Boolean)?'all':'not all';if(r.media.mediaText!==t)r.media.mediaText=t})}};

 let badgeT;const badge=t=>{let b=document.getElementById('vpbadge');if(!b){b=document.createElement('div');b.id='vpbadge';b.setAttribute('role','status');document.body.appendChild(b)}
  b.textContent=t;b.classList.add('show');clearTimeout(badgeT);badgeT=setTimeout(()=>b.classList.remove('show'),1800)};
 const fit=()=>{if(window.__TV){layoutTV();return}const w=W[mode];const vw=de.clientWidth/(parseFloat(de.style.zoom)||1);
  if(!w){de.style.zoom='';de.classList.remove('vpf');document.body.style.maxWidth='';applyMQ(0);return}
  applyMQ(w);
  const real=window.visualViewport?Math.round(innerWidth):innerWidth;
  if(w>real){de.style.zoom=String(Math.max(.2,real/w));de.classList.remove('vpf');document.body.style.maxWidth=''}
  else{de.style.zoom='';if(w<real-8){de.classList.add('vpf');document.body.style.maxWidth=w+'px'}else{de.classList.remove('vpf');document.body.style.maxWidth=''}}};
 const setMode=(m,announce)=>{mode=m;try{localStorage.setItem('tm3_vp',m);localStorage.setItem('tm3_vpsig',DSIG)}catch(e){}
  const run=()=>{fit();renderBtn();window.__applyRflow&&window.__applyRflow();fitSheet&&fitSheet();window.dispatchEvent(new Event('resize'))};
  if(announce&&document.startViewTransition&&!RM.matches&&!COARSE.matches){window.__vtRun=1;const t=document.startViewTransition(run);t.finished.finally(()=>{window.__vtRun=0;moveBar()})}else run();
  if(announce){const o=OPT.find(x=>x[0]===m);badge('มุมมอง: '+o[1]+(o[3]?' · '+o[2]:''))}
  setTimeout(moveBar,60)};

 let box,btn,menu;
 const renderBtn=()=>{if(!btn)return;const o=OPT.find(x=>x[0]===mode);btn.innerHTML=IC[o[5]]+'<span>'+(o[0]==='auto'?'อัตโนมัติ':o[1])+'</span><svg class="chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
  btn.setAttribute('aria-label','เลือกขนาดหน้าจอ: '+o[1]);menu.querySelectorAll('button[data-vp]').forEach(b=>b.setAttribute('aria-checked',b.dataset.vp===mode?'true':'false'))};
 const close=()=>{box.classList.remove('open');btn.setAttribute('aria-expanded','false')};
 if(nw){box=document.createElement('div');box.id='vpsel';
  let grp='';const items=OPT.map(o=>{let h='';if(o[6]&&o[6]!==grp){grp=o[6];h='<li class="vph" role="presentation">'+o[6]+'</li>'}return h+'<li role="none"><button type="button" role="menuitemradio" data-vp="'+o[0]+'">'+IC[o[5]]+'<span>'+o[1]+'</span><small>'+o[2]+'</small></button></li>'}).join('');
  box.innerHTML='<button type="button" aria-haspopup="menu" aria-expanded="false" title="เลือกขนาดหน้าจอ / อุปกรณ์"></button><ul id="vpmenu" role="menu">'+items+'</ul>';
  if(!window.__TV){const SUN='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',MOON='<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
   const root=document.documentElement,cur=()=>{const d=root.dataset.theme;return d==='dark'||d==='light'?d:(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')};
   try{const sv=localStorage.getItem('tm3_theme');if(sv==='dark'||sv==='light')root.dataset.theme=sv}catch(e){}
   const tb=document.createElement('button');tb.id='thbtn';tb.type='button';
   const paint=()=>{const t=cur();tb.innerHTML=t==='dark'?SUN:MOON;tb.title=t==='dark'?'เปลี่ยนเป็นธีมสว่าง':'เปลี่ยนเป็นธีมมืด';tb.setAttribute('aria-label',tb.title);tb.setAttribute('aria-pressed',t==='dark')};
   tb.onclick=e=>{e.stopPropagation();const n=cur()==='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('tm3_theme',n)}catch(x){}paint();badge('ธีม: '+(n==='dark'?'มืด':'สว่าง'))};
   paint();nw.appendChild(tb)}
  nw.appendChild(box);btn=box.firstChild;menu=box.querySelector('#vpmenu');
  const place=()=>{const z=parseFloat(de.style.zoom)||1;const r=btn.getBoundingClientRect();const mw=menu.offsetWidth||240;const vw=innerWidth/z;let l=r.right/z-mw;l=Math.max(8,Math.min(l,vw-mw-8));const vh=innerHeight/z;let tp=r.bottom/z+6;menu.style.maxHeight='none';const full=menu.scrollHeight||menu.offsetHeight;if(tp+full>vh-8){const above=r.top/z-6;if(above>vh-tp&&above>200){tp=Math.max(8,above-Math.min(full,above-8));menu.style.maxHeight=Math.min(full,above-8)+'px'}else menu.style.maxHeight=Math.max(160,vh-tp-8)+'px'}menu.style.left=l+'px';menu.style.top=tp+'px'};
  addEventListener('scroll',()=>{if(box.classList.contains('open'))place()},{passive:true});
  btn.onclick=e=>{e.stopPropagation();place();const op=!box.classList.contains('open');box.classList.toggle('open',op);btn.setAttribute('aria-expanded',op);if(op){const c=menu.querySelector('[aria-checked="true"]');c&&setTimeout(()=>c.focus(),30)}};
  menu.addEventListener('click',e=>{const b=e.target.closest('button[data-vp]');if(!b)return;e.stopPropagation();close();if(b.dataset.vp!==mode)setMode(b.dataset.vp,true);btn.focus()});
  menu.addEventListener('keydown',e=>{const it=[...menu.querySelectorAll('button[data-vp]')];const i=it.indexOf(document.activeElement);
   if(e.key==='ArrowDown'){e.preventDefault();it[(i+1)%it.length].focus()}else if(e.key==='ArrowUp'){e.preventDefault();it[(i-1+it.length)%it.length].focus()}else if(e.key==='Escape'){close();btn.focus()}});
  document.addEventListener('click',e=>{if(box.classList.contains('open')&&!box.contains(e.target))close()});
  renderBtn()}

 if(window.__TV&&nw&&document.fullscreenEnabled){const fb=document.createElement('button');fb.id='tvfs';fb.type='button';fb.title='เต็มจอ (F11)';fb.setAttribute('aria-label','เต็มจอ');fb.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
  fb.onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(e){}};nw.appendChild(fb)}
 let rT;addEventListener('resize',()=>{if(window.__vpBusy)return;clearTimeout(rT);rT=setTimeout(()=>{if(mode!=='auto'){window.__vpBusy=1;fit();window.__vpBusy=0}moveBar()},120)});
 window.__vp={set:m=>setMode(m,false),get:()=>mode,W};
 /* แถบเมนูติดขอบบนแล้วหรือยัง → เปิดแผ่นปิดช่อง safe-area เฉพาะตอนติด (กันทับแถบหัวข้อบน iPad) */
 const navEl=document.querySelector('nav');let stkR=0;
 const stk=()=>{stkR=0;if(!navEl)return;const t=parseFloat(getComputedStyle(navEl).top)||0;const on=scrollY>0&&navEl.getBoundingClientRect().top<=t+0.5;if(navEl.classList.contains('stk')!==on)navEl.classList.toggle('stk',on)};
 const stkL=()=>{if(!stkR)stkR=requestAnimationFrame(stk)};
 addEventListener('scroll',stkL,{passive:true});addEventListener('resize',stkL);setTimeout(stk,200);

 /* ---- filter state: mark chosen fields, count per section, summary line ---- */
 const lab=el=>{const p=el.closest('.pc,.frow>div,div');let l=p&&p.querySelector('label');if(!l||l.contains(el)){const pr=el.previousElementSibling;if(pr&&pr.tagName==='LABEL')l=pr}return l?l.textContent.replace(/[*:]/g,'').trim():''};
 const valTxt=el=>(el.tagName==='SELECT'?(el.selectedOptions[0]?el.selectedOptions[0].textContent.trim():el.value):el.value.trim()).replace(/\s*\(\s*[\d,]+\s*\)\s*$/,'');
 const shown=el=>el.getClientRects().length>0;
 const isDef=el=>{if(el.tagName==='SELECT'){const v=el.value;if(v===''||v==null)return true;const f=el.options[0];return !!(f&&f.value===v&&(/ทั้งหมด|^วัน$|^เดือน|^ปี/.test(f.textContent.trim())))}return !el.value.trim()};
 const scan=()=>{document.querySelectorAll('.fbox').forEach(fb=>{const fq=fb.querySelector('.fq');if(!fq)return;const items=[];
   fq.querySelectorAll('.sec,.fsec').forEach(sec=>{let n=0;
    sec.querySelectorAll('select,input:not([type=checkbox]):not([type=radio]):not([type=hidden])').forEach(el=>{const on=!isDef(el)&&shown(el);el.classList.toggle('fv',on);if(on){n++;items.push([lab(el),valTxt(el)])}});
    sec.querySelectorAll('.fseg').forEach(sg=>{if(!shown(sg))return;const b=sg.querySelector('button.on');if(b&&b.dataset.v!==''&&!/^ทั้งหมด$/.test(b.textContent.trim())){n++;const row=sg.parentElement;const l=row&&row.querySelector('label');items.push([l?l.textContent.replace(/[*:]/g,'').trim():'',b.textContent.trim()])}});
    sec.classList.toggle('fact',n>0);const st=sec.querySelector('.st');if(st){let c=st.querySelector('.fcnt');if(n){if(!c){c=document.createElement('span');c.className='fcnt';c.title='ตัวกรองที่เลือกในกลุ่มนี้';const cb=st.querySelector('button');cb?st.insertBefore(c,cb):st.appendChild(c)}if(c.textContent!==String(n))c.textContent=n}else if(c)c.remove()}});
   const q=fb.parentElement&&fb.parentElement.querySelector('input.nl');if(q){const on=!!q.value.trim();q.classList.toggle('fv',on);if(on)items.push(['ค้นหา',q.value.trim()])}
   let sv=fb.querySelector(':scope>.factv');if(!sv){sv=document.createElement('div');sv.className='factv';sv.setAttribute('aria-live','polite');fq.after(sv)}
   const html=items.length?'<b>กำลังกรอง ('+items.length+'):</b>'+items.map(([l,v])=>'<span>'+(l?'<i>'+esc(l)+'</i> ':'')+esc(v)+'</span>').join(''):'';
   if(sv.__h!==html){sv.__h=html;sv.innerHTML=html}})};
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 let sT;const later=()=>{clearTimeout(sT);sT=setTimeout(scan,40)};
 ['input','change','click'].forEach(ev=>document.addEventListener(ev,later,true));setInterval(()=>{if(!document.hidden)scan()},2500);


 /* ---- dashboard sheet: scale to fit its column on narrow screens (no sideways scroll) ---- */
 const sheet=document.getElementById('sheet');
 /* Safari/iPad: CSS zoom ทำให้ตัวหนังสือ/กราฟซ้อนกัน → ใช้ transform: scale แทน (Chrome ใช้ zoom เหมือนเดิม) */
 const WK=/[?&]wk=1/.test(location.search)||/Apple/.test(navigator.vendor||'')||(window.CSS&&CSS.supports&&CSS.supports('-webkit-touch-callout','none'));
 const clrT=sc=>{if(!sheet.__wk)return;sheet.__wk=0;sheet.style.transform='';sheet.style.transformOrigin='';sheet.style.marginLeft='';sheet.style.marginRight='';if(sc){sc.style.height='';sc.style.overflow=''}};
 window.__fitSheet=()=>fitSheet();
 const fitSheet=()=>{if(!sheet||window.__TV)return;const sc=sheet.parentElement;if(!sc)return;
  if(document.body.classList.contains('rflow')){if(sheet.style.zoom)sheet.style.zoom='';clrT(sc);return}
  if(document.body.classList.contains('present')||sheet.classList.contains('exporting')){if(sheet.style.zoom)sheet.style.zoom='';clrT(sc);return}
  if(document.body.classList.contains('split2')&&!document.body.classList.contains('sp2v')){if(sheet.__wk){sheet.__wk=0;sheet.style.marginLeft='';sheet.style.marginRight='';sc.style.overflow=''}return}
  const av=sc.clientWidth-2;if(av<=0)return;const z=Math.min(1,av/1123);
  if(WK){if(sheet.style.zoom)sheet.style.zoom='';
   if(z>=.995){clrT(sc);return}
   const k=Math.round(z*1000)/1000,h=Math.ceil(sheet.offsetHeight*k);sheet.__wk=1;
   const t='scale('+k+')';if(sheet.style.transform!==t){sheet.style.transformOrigin='0 0';sheet.style.transform=t}
   sheet.style.marginLeft=Math.max(0,Math.floor((av-1123*k)/2))+'px';sheet.style.marginRight='0';
   if(sc.style.height!==h+'px')sc.style.height=h+'px';sc.style.overflow='hidden';return}
  const v=z<.995?String(Math.round(z*1000)/1000):'';if(sheet.style.zoom!==v)sheet.style.zoom=v};
 if(sheet&&window.ResizeObserver&&WK)new ResizeObserver(()=>requestAnimationFrame(fitSheet)).observe(sheet);
 if(sheet&&window.ResizeObserver)new ResizeObserver(()=>requestAnimationFrame(fitSheet)).observe(sheet.parentElement);
 if(sheet)new MutationObserver(fitSheet).observe(sheet,{attributes:true,attributeFilter:['class']});
 new MutationObserver(fitSheet).observe(document.body,{attributes:true,attributeFilter:['class']});
 /* ---- narrow windows (e.g. the Claude app side panel): reflow the dashboard instead of shrinking it ---- */
 const applyRflow=()=>{const on=document.body.classList.contains('dashonly')&&!window.__TV&&mode==='auto'&&innerWidth<1000;if(document.body.classList.contains('rflow')!==on){document.body.classList.toggle('rflow',on);if(on)document.documentElement.style.zoom='';setTimeout(()=>{try{layoutTV();fitSheet();window.dispatchEvent(new Event('resize'))}catch(e){}},30)}};
 addEventListener('resize',applyRflow);new MutationObserver(applyRflow).observe(document.body,{attributes:true,attributeFilter:['class']});window.__applyRflow=applyRflow;
 /* ---- shine travel: always reach beyond both screen edges, whatever zoom/scale the sheet has ---- */
 const setShx=()=>{const sh=document.getElementById('sheet');if(!sh)return;const el=sh.querySelector('.shine');if(!el)return;const r=sh.getBoundingClientRect(),ow=sh.offsetWidth||1123;const z=r.width&&ow?r.width/ow:1;const need=Math.ceil((innerWidth+260)/(z||1)+ow*.25);if(sh.__shx!==need){sh.__shx=need;sh.style.setProperty('--shx',need+'px')}};
 addEventListener('resize',()=>requestAnimationFrame(setShx));setInterval(()=>{if(!document.hidden)setShx()},5000);setTimeout(setShx,200);setTimeout(setShx,900);
 /* ---- nav: tabs as a segmented control + grouped actions ---- */
 const ICON={f:'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 11v6M9 14h6"/></svg>',d:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/></svg>',s:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'};
 const regroup=()=>{if(window.__TV||!nw||nw.querySelector('.ntabs'))return;
  const nt=document.createElement('div');nt.className='ntabs';nt.setAttribute('role','tablist');
  nw.querySelectorAll(':scope>button[data-t]').forEach(b=>{const lab=b.textContent.replace(/^[^\p{L}\p{N}]+/u,'').trim();b.innerHTML=(ICON[b.dataset.t]||'')+'<span>'+lab+'</span>';b.setAttribute('role','tab');nt.appendChild(b)});
  const na=document.createElement('div');na.className='nact';
  const grp=(c,ids)=>{const g=document.createElement('div');g.className='ng '+c;ids.forEach(i=>{const e=document.getElementById(i);if(e)g.appendChild(e)});if(g.children.length)na.appendChild(g)};
  grp('g1',['dsync']);grp('g2',['blurbtn','onbtn']);grp('g3',['pbtn','fpbtn','p2btn']);grp('g4',['vpsel','thbtn']);
  const tag=nw.querySelector('#tvtag');nw.textContent='';if(tag)nw.appendChild(tag);nw.appendChild(nt);nw.appendChild(na);moveBar();setTimeout(moveBar,200);setTimeout(moveBar,800)};
 regroup();
 /* boot */
 syncPg();fit();applyRflow();fitSheet();setTimeout(()=>{scan();moveBar();fitSheet()},300);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(moveBar);
})();
/*VP-END*/

/* ===== TM3 WEB v2 — อ่านชีตผ่าน Apps Script + อัปเดตสดทุก POLL วินาที ===== */
(function(){var B=window.__WEB;if(!B)return;
 /* หน้าต่างจอนำเสนอ (2 จอ) รับข้อมูลจากจอแรก — ไม่ต้องเชื่อม Apps Script */
 var isScr=false;try{isScr=!!SCR}catch(e){}if(isScr||(window.opener&&!window.google)){document.body.classList.add('web');return}
 var run=function(fn){var a=[].slice.call(arguments,1);return new Promise(function(ok,no){if(!window.google||!google.script||!google.script.run)return no(new Error('no google.script.run'));var r=google.script.run.withSuccessHandler(ok).withFailureHandler(no);r[fn].apply(r,a)})};
 var INIT=B.init||{},ST=Object.assign({},B.stamp||{});
 var same=function(a,b){var x=gsParseLink(a),y=gsParseLink(b);return !!(x&&y&&x.id===y.id&&x.gid===y.gid)};
 /* แหล่งข้อมูลกลางของแอป → Apps Script (ค่าชุดแรกฝังมากับหน้าเว็บแล้ว) */
 /* แคชข้อมูลตามรหัสชีต: ถ้าชีตไม่เปลี่ยน ไม่ต้องดึงจากเซิร์ฟเวอร์ซ้ำ (กดเปลี่ยนหน้า/แดชบอร์ดแล้วไม่ต้องรอ ไม่กระตุก) */
 var CACHE={},GOT={},APPLIED={};
 var keyOf=function(link){var ks=Object.keys(ST).concat(Object.keys(INIT));for(var i=0;i<ks.length;i++)if(ks[i]!=='__ui'&&same(ks[i],link))return ks[i];return null};
 window.gsViaConnector=async function(link){var u=keyOf(link);
  for(var x in INIT){if(same(x,link)){var v=INIT[x];delete INIT[x];if(u){CACHE[u]={h:ST[u],v:v};GOT[u]=ST[u]}return v}}
  if(u&&CACHE[u]&&CACHE[u].h===ST[u]){GOT[u]=ST[u];return CACHE[u].v}
  var h=u?ST[u]:null,r=await run('getValues',link,B.k);if(u){CACHE[u]={h:h,v:r};GOT[u]=h}return r};
 /* ข้ามการคำนวณ/วาดใหม่ เมื่อข้อมูลชุดนั้นไม่ได้เปลี่ยนจากที่แสดงอยู่ */
 var urlsOf=function(m){return B.src.filter(function(x){return m==='gs'?(x.mode!=='rv'&&x.mode!=='io'):x.mode===m}).map(function(x){return keyOf(x.url)}).filter(Boolean)};
 var sig=function(m,T){return urlsOf(m).map(function(u){return T[u]||''}).join('|')};
 ['gs','rv','io'].forEach(function(m){var n=m+'Sync',f=window[n];if(typeof f!=='function')return;
  window[n]=async function(){var cur=sig(m,ST);if(APPLIED[m]&&APPLIED[m]===cur)return;urlsOf(m).forEach(function(u){delete GOT[u]});
   var r=await f.apply(this,arguments);var g=sig(m,GOT);if(g.split('|').every(Boolean))APPLIED[m]=g;return r}});
 var gsSync=window.gsSync,rvSync=window.rvSync,ioSync=window.ioSync;
 /* ไม่อัปเดตข้อมูลขณะผู้ใช้กำลังแตะ/เลื่อนจอ — รอให้หยุดก่อน */
 var LASTIN=0;['touchstart','touchmove','pointerdown','wheel','scroll','keydown'].forEach(function(e){addEventListener(e,function(){LASTIN=Date.now()},{passive:true,capture:true})});
 window.vSnap=function(){};window.gsAuto=function(){};window.rvOffAI=function(){};window.aiAuto=function(){};
 var cl=document.body.classList;cl.add('web','dashonly','blurpii');document.documentElement.classList.add('dashonly');
 try{window.__setBlur&&window.__setBlur(true)}catch(e){}
 /* ป้ายสถานะมุมล่างซ้าย */
 var st=document.createElement('div');st.id='webst';st.setAttribute('role','status');st.innerHTML='<i></i><span>กำลังโหลดข้อมูล…</span>';document.body.appendChild(st);
 var tf=function(){return new Date().toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit',second:'2-digit'})};
 var show=function(cls,t){st.className=cls||'';st.querySelector('span').textContent=t};
 var last=tf();
 /* โหลดครั้งแรก */
 var sync=function(s){try{if(s.mode==='rv')return rvSync(true);if(s.mode==='io')return ioSync(true);return gsSync(true)}catch(e){}};
 setTimeout(function(){try{document.querySelector('nav [data-t="s"]').click()}catch(e){}
  Promise.all([gsSync(true),rvSync(true),ioSync(true)].map(function(p){return Promise.resolve(p).catch(function(){})})).then(function(){last=tf();show('','ข้อมูลสด · อัปเดต '+last);try{render()}catch(e){}})},300);
 /* เช็กการเปลี่ยนแปลง */
 var fails=0,busy=false;
 var tick=async function(){if(busy)return;if(document.hidden){return}busy=true;
  try{if(Date.now()-LASTIN<1500){busy=false;return}var s=await run('stamp',B.k);fails=0;var ch=[];
   B.src.forEach(function(x){var u=Object.keys(s).filter(function(k){return same(k,x.url)})[0];if(u&&ST[u]!==s[u]){ST[u]=s[u];ch.push(x)}});
   if(ch.length){show('busy','พบข้อมูลใหม่ — กำลังอัปเดต…');for(var i=0;i<ch.length;i++){await sync(ch[i])}last=tf()}
   if(s.__ui&&B.uiv&&s.__ui!=='none'&&s.__ui!==B.uiv&&!document.getElementById('webnew')){var a=document.createElement('a');a.id='webnew';a.href=B.url||'#';a.target='_top';a.textContent='🔄 มีหน้าตาเว็บเวอร์ชันใหม่ — แตะเพื่อโหลด';a.style.cssText='position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:100040;background:#0037af;color:#fff;font:600 14px Prompt,Tahoma,sans-serif;padding:10px 18px;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.35);text-decoration:none';document.body.appendChild(a)}
   show('','ข้อมูลสด · อัปเดต '+last)}
  catch(e){fails++;show('err','เชื่อมต่อขัดข้อง — กำลังลองใหม่ ('+fails+')')}
  busy=false};
 var loop=function(){setTimeout(function(){tick().then(loop,loop)},Math.max(2,+B.poll||3)*1000*(fails>3?3:1))};loop();
 document.addEventListener('visibilitychange',function(){if(!document.hidden)tick()});
})();
