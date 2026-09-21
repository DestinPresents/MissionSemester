/* Mission Semester — complete client-side study app */
const subjects = {
  math: {
    name:'Applied Mathematics-I', short:'गणित-I', emoji:'∑', weight:'20% / 25% / 20% / 10% / 25%',
    desc:'गणित के सभी पाँच इकाइयों को आसान भाषा में समझें और परीक्षा के लिए प्रश्नों का अभ्यास करें।',
    units:[
      {title:'त्रिकोणमिति', weight:'20%', topics:['त्रिकोणमितीय अनुपात और उनके सम्बन्ध','त्रिकोणमितीय सर्वसमिकाएँ (Identities)','Allied Angles','Compound Angles','Multiple और Sub-multiple Angles','Inverse Trigonometric Functions','त्रिभुजों के गुण (Properties of Triangles)'], focus:'पहले सभी मुख्य identities और angle formulas याद करें, फिर उदाहरणों से अभ्यास करें।'},
      {title:'अवकल कलन', weight:'25%', topics:['Function और उसका मूल विचार','Limit और Continuity','Differentiation का अर्थ','Standard Derivatives','Product Rule','Quotient Rule','Chain Rule','Logarithmic Differentiation','Derivatives के Applications'], focus:'Standard derivatives की सूची बनाकर रोज़ 10–15 छोटे प्रश्न हल करें।'},
      {title:'आंशिक भिन्न', weight:'20%', topics:['Proper और Improper Fraction','Linear अलग-अलग factors','Repeated Factors','Quadratic Factors','Partial Fraction में constants निकालना','Expression को सरल रूप में बदलना'], focus:'हर प्रकार के factor का एक solved example और फिर बिना देखे 3 प्रश्न करें।'},
      {title:'द्विपद प्रमेय', weight:'10%', topics:['Binomial Theorem का मूल रूप','Positive Integral Index','General Term','Middle Term','Binomial Coefficients','सरल numerical applications'], focus:'General term और middle term के formula को बार-बार लिखकर अभ्यास करें।'},
      {title:'सम्मिश्र संख्याएँ', weight:'25%', topics:['Complex Number का परिचय','Real और Imaginary Part','Complex Numbers का Algebra','Conjugate','Modulus','Argument','Polar Form','De Moivre Theorem','सरल applications'], focus:'a+ib रूप, conjugate, modulus और argument से शुरुआत करें; फिर polar form व De Moivre करें।'}
    ],
    important:['Trigonometric identities और compound angles','Limits और standard derivatives','Product, quotient और chain rule','Partial fraction decomposition','Binomial general term और middle term','Complex number का modulus और argument','Polar form तथा De Moivre theorem'],
    five:['त्रिकोणमितीय identity को उचित steps के साथ सिद्ध कीजिए।','Limit तथा differentiation के standard results उदाहरण सहित समझाइए।','Partial fractions के प्रमुख cases उदाहरण सहित समझाइए।','Binomial theorem का general term और middle term समझाइए।','Complex number का polar form तथा De Moivre theorem समझाइए।']
  },
  physics: {
    name:'Applied Physics-I', short:'भौतिक विज्ञान-I', emoji:'⚛', weight:'14% / 14% / 15% / 15% / 14% / 14% / 14%',
    desc:'इकाइयों, बल, ऊर्जा, गति, पदार्थ और ऊष्मा के सिद्धान्तों को सूत्र और numerical के साथ पढ़ें।',
    units:[
      {title:'इकाइयाँ एवं विमाएँ',weight:'14%',topics:['SI Units','Fundamental और Derived Units','Dimensions','Dimensional Formula','Dimensional Analysis','Significant Figures','Measurement और Errors'],focus:'हर physical quantity की SI unit और dimensional formula की छोटी सूची बनाएं।'},
      {title:'बल एवं गति',weight:'14%',topics:['Scalar और Vector का मूल विचार','Motion के मूल समीकरण','Newton के गति के नियम','Momentum','Impulse','Friction','Force के सरल numerical'],focus:'Newton laws को परिभाषा + सूत्र + उदाहरण के साथ तैयार करें।'},
      {title:'कार्य, शक्ति एवं ऊर्जा',weight:'15%',topics:['Work','Power','Kinetic Energy','Potential Energy','Work-Energy सम्बन्ध','Law of Conservation of Energy','Efficiency','Numerical Problems'],focus:'Work, power और energy के सूत्रों को units सहित लिखें और numerical करें।'},
      {title:'वृत्तीय गति',weight:'15%',topics:['Angular Motion का मूल विचार','Angular Velocity','Centripetal Acceleration','Centripetal Force','Banking of Roads','Vertical Circular Motion की basic concepts'],focus:'Centripetal force और acceleration के सूत्र तथा units पक्के करें।'},
      {title:'घूर्णन गति',weight:'14%',topics:['Torque','Angular Momentum','Moment of Inertia','Radius of Gyration','Rotational Dynamics','घूर्णन से जुड़े सरल numerical'],focus:'Torque और moment of inertia के बीच सम्बन्ध समझकर numerical करें।'},
      {title:'द्रव्य के गुण',weight:'14%',topics:['Elasticity','Stress और Strain','Elastic Moduli का परिचय','Viscosity','Surface Tension','Engineering applications'],focus:'परिभाषाएँ, units और रोज़मर्रा के applications साथ-साथ याद करें।'},
      {title:'ऊष्मा एवं तापमिति',weight:'14%',topics:['Temperature और Temperature Scales','Heat','Specific Heat','Thermal Expansion','Calorimetry','Heat Transfer की basic concepts','Temperature conversion'],focus:'Temperature conversion और calorimetry के numerical जरूर करें।'}
    ],
    important:['SI units और dimensional analysis','Newton laws + friction numericals','Work-energy theorem','Power और efficiency','Centripetal force तथा banking','Torque और moment of inertia','Stress-strain तथा elasticity','Calorimetry और temperature conversion'],
    five:['Newton के गति के नियम उदाहरण सहित समझाइए।','Work, power और energy में सम्बन्ध समझाइए।','Centripetal force का सिद्धान्त और उसके applications समझाइए।','Moment of inertia और radius of gyration समझाइए।','Calorimetry क्या है? Specific heat के साथ समझाइए।']
  },
  chem: {
    name:'Applied Chemistry', short:'रसायन विज्ञान', emoji:'🧪', weight:'20% प्रत्येक इकाई',
    desc:'परमाणु, बंधन, जल, engineering materials, fuels, lubricants और electrochemistry को सरल तरीके से पढ़ें।',
    units:[
      {title:'परमाणु संरचना, रासायनिक बंधन एवं विलयन',weight:'20%',topics:['Atomic Structure','Electronic Configuration','Periodic Ideas','Ionic Bond','Covalent Bond','Hydrogen Bond','Solutions का परिचय','Concentration के मूल concepts','सरल numerical'],focus:'Atomic structure और bonding की परिभाषा, उदाहरण और मुख्य अन्तर तैयार करें।'},
      {title:'जल',weight:'20%',topics:['Water के sources और uses','Hardness of Water','Temporary और Permanent Hardness','Hardness की units','Water Softening Methods','Boiler Troubles','Potable Water','Water Treatment'],focus:'Hardness के प्रकार और softening methods को comparison table में पढ़ें।'},
      {title:'Engineering Materials',weight:'20%',topics:['Metals और Alloys','मुख्य physical/chemical properties','Engineering materials का उपयोग','Corrosion','Corrosion के प्रकार','Corrosion Prevention','Material selection का basic idea'],focus:'हर material के गुण + उपयोग + corrosion protection के points लिखें।'},
      {title:'ईंधन एवं स्नेहक',weight:'20%',topics:['Solid Fuels','Liquid Fuels','Gaseous Fuels','Calorific Value','Good Fuel की Characteristics','Knocking का basic concept','Lubricants','Lubrication','Good Lubricant के गुण'],focus:'Fuel types और good fuel characteristics के short notes बनाएं।'},
      {title:'Electro Chemistry',weight:'20%',topics:['Electrolytes','Ionisation','Electrolysis','Faraday’s Laws','Electrochemical Cells','Electrode Potential का basic idea','Corrosion और electrochemistry का सम्बन्ध'],focus:'Faraday laws को statement, formula और example के साथ तैयार करें।'}
    ],
    important:['Atomic structure और electronic configuration','Ionic/covalent bonding','Hardness of water और softening methods','Boiler troubles','Corrosion और prevention','Calorific value और good fuel characteristics','Lubricants के गुण','Faraday laws और electrolysis'],
    five:['जल की hardness क्या है? इसे दूर करने की विधियाँ समझाइए।','Corrosion क्या है? इसे रोकने के उपाय लिखिए।','अच्छे ईंधन के गुण तथा calorific value समझाइए।','Faraday के electrolysis laws समझाइए।','Chemical bonding के मुख्य प्रकार उदाहरण सहित समझाइए।']
  },
  comm: {
    name:'Communication Skills in English', short:'संचार कौशल-I', emoji:'✍', weight:'20% / 10% / 20% / 20% / 30%',
    desc:'Communication, soft skills, reading comprehension, grammar और professional writing को परीक्षा के हिसाब से तैयार करें।',
    units:[
      {title:'Communication Theory & Practice',weight:'20%',topics:['Communication का अर्थ','Communication Process','Sender, Message, Channel, Receiver और Feedback','Verbal Communication','Non-verbal Communication','Formal और Informal Communication','Communication Barriers','Effective Communication','Listening और Speaking basics'],focus:'Communication process का diagram बनाना और barriers के उपाय लिखना सीखें।'},
      {title:'Soft Skills',weight:'10%',topics:['Self-confidence','Teamwork','Time Management','Presentation Skills','Interview Behaviour','Workplace Etiquette','Positive Professional Attitude'],focus:'Definitions के साथ छोटे real-life examples तैयार करें।'},
      {title:'Reading Comprehension',weight:'20%',topics:['Passage को ध्यान से पढ़ना','Main Idea पहचानना','Specific Information ढूँढना','Vocabulary in Context','Inference','Factual Questions','Short Summary'],focus:'पहले questions पढ़ें, फिर passage में keywords ढूँढें और answer अपने शब्दों में दें।'},
      {title:'Functional Grammar',weight:'20%',topics:['Parts of Speech','Tenses','Articles','Prepositions','Subject-Verb Agreement','Active और Passive Voice','Direct और Indirect Speech / Narration','Sentence Correction'],focus:'Rules को examples के साथ पढ़ें और रोज़ 10 grammar questions करें।'},
      {title:'Professional Writing',weight:'30%',topics:['Formal Letter','Application','Email Writing','Notice Writing','Report Writing','Resume / CV','Professional Writing का format','Language और presentation के नियम'],focus:'हर format को heading, date, subject, body और closing सहित एक बार पूरा लिखें।'}
    ],
    important:['Communication process और barriers','Non-verbal communication','Soft skills और interview etiquette','Reading comprehension strategy','Tenses, articles और prepositions','Active-passive voice','Narration','Formal letter/email/report/resume'],
    five:['Communication process का diagram और उसके elements समझाइए।','Communication barriers और उन्हें दूर करने के उपाय लिखिए।','Reading comprehension हल करने की सही विधि समझाइए।','Active/Passive या Narration को examples सहित समझाइए।','Formal letter, email, report या resume का professional format लिखिए।']
  },
  graphics: {
    name:'Engineering Graphics', short:'इंजीनियरिंग ग्राफिक्स-I', emoji:'📐', weight:'60 बाह्य अंक; unit-wise fixed % नहीं',
    desc:'Drawing standards, lettering, line types, dimensioning, scales, projection, sections और isometric drawing की परीक्षा-केंद्रित तैयारी।',
    units:[
      {title:'Basic Drawing & Conventions',weight:'—',topics:['Drawing instruments','Sheet layout और border','Lettering','Line types','Symbols और conventions','Drawing sheet की साफ-सुथरी presentation'],focus:'Single-stroke lettering और line types को बार-बार sheet पर अभ्यास करें।'},
      {title:'Dimensioning & Scales',weight:'—',topics:['Dimensioning का उद्देश्य','Dimension lines और extension lines','Dimensioning methods','Scale का concept','Representative Fraction (RF)','Plain Scale','Diagonal Scale'],focus:'Scale में construction steps और dimensions की placement साफ रखें।'},
      {title:'Orthographic Projection',weight:'—',topics:['Orthographic projection का अर्थ','Reference planes','First-angle projection','Third-angle projection','Points/lines के basic projections','Orthographic views'],focus:'First-angle और third-angle के symbols तथा view placement को पक्का करें।'},
      {title:'Projection of Solids',weight:'—',topics:['Prism','Pyramid','Cylinder','Cone','Axis और position का basic concept','Standard projection procedure'],focus:'पहले reference line और simple position बनाकर projection steps follow करें।'},
      {title:'Sections',weight:'—',topics:['Sectional view का अर्थ','Cutting plane','Section lines / hatching','Sectioned solids','True shape का basic idea'],focus:'Cutting plane और section lines को standard तरीके से दिखाने का अभ्यास करें।'},
      {title:'Isometric Drawing',weight:'—',topics:['Isometric axes','Isometric scale का basic idea','Isometric view','Simple solids की isometric representation','Circles/arcs की basic representation'],focus:'30° axes, proportions और clean construction lines पर ध्यान दें।'},
      {title:'AutoCAD / CAD Basics',weight:'—',topics:['CAD interface का basic परिचय','Basic drawing commands','Editing commands','Object selection और simple drafting'],focus:'यह भाग practical/internal assessment में उपयोग हो सकता है; अपने institute के current assessment निर्देश भी देखें।'}
    ],
    important:['Lettering और line types','Dimensioning के मुख्य नियम','Plain और diagonal scale','First-angle vs third-angle projection','Orthographic views','Projection of solids','Sectional views','Isometric drawing'],
    five:['Dimensioning के मुख्य नियम समझाइए।','First-angle और third-angle projection में अंतर drawing सहित समझाइए।','Plain/diagonal scale बनाने की विधि लिखिए।','Orthographic projection का उद्देश्य और views समझाइए।','Isometric drawing के मुख्य नियम समझाइए।']
  }
};

const weekly = [
 ['सोमवार','गणित-I','भौतिक विज्ञान-I','रसायन विज्ञान'],
 ['मंगलवार','गणित-I','संचार कौशल-I','इंजीनियरिंग ग्राफिक्स-I'],
 ['बुधवार','भौतिक विज्ञान-I','रसायन विज्ञान','गणित-I'],
 ['गुरुवार','संचार कौशल-I','इंजीनियरिंग ग्राफिक्स-I','भौतिक विज्ञान-I'],
 ['शुक्रवार','गणित-I','रसायन विज्ञान','संचार कौशल-I'],
 ['शनिवार','भौतिक विज्ञान-I','इंजीनियरिंग ग्राफिक्स-I','साप्ताहिक Revision'],
 ['रविवार','Full Mock Test','गलतियों की Revision','अगले सप्ताह की Planning']
];

const daily = [
 ['5:45–6:00','उठना + पानी + fresh होना'],
 ['6:00–7:15','मुख्य Study Session — गणित / सबसे कठिन topic'],
 ['7:15–7:40','कल पढ़े हुए का Quick Revision'],
 ['7:40–8:00','तैयार होना + नाश्ता'],
 ['8:00–4:30','College'],
 ['4:30–5:15','घर पहुँचना + आराम + snack'],
 ['5:15–6:30','Physics / Chemistry'],
 ['6:30–6:50','Break'],
 ['6:50–7:50','Communication / Graphics'],
 ['7:50–8:30','Dinner + आराम'],
 ['8:30–9:45','Maths practice / numerical / drawing'],
 ['9:45–10:05','आज कितना पढ़ा — Study Log में save करें'],
 ['10:05–10:30','आज की गलतियाँ + 15–20 min revision'],
 ['10:30–11:00','कल की तैयारी + Sleep routine']
];

const examPlan = [
 ['सुबह','गणित के formula + 8–10 numerical','दिमाग fresh होने पर कठिन काम पहले।'],
 ['कॉलेज के बाद','Physics/Chemistry','एक दिन concept, अगले दिन numerical/short answers।'],
 ['शाम','Communication/Graphics','Writing formats या drawing practice।'],
 ['रात','Maths + Revision','दिन में पढ़ी चीज़ों को recall करके सोएँ।'],
 ['रविवार','Full Mock + Error Revision','समय बाँधकर पूरा paper-style practice करें।']
];

const storageKey='missionSemesterLogsV2';
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function shell(content){return `${content}<div class="footer">Made with Love • Destin Studio</div>`;}
function subjectCard(k,s){return `<button class="card click subjectCard" data-sub="${k}"><div class="subject"><div class="emoji">${s.emoji}</div><div><h4>${s.short}</h4><p>${s.name}</p></div></div><span class="mini">${s.units.length} इकाइयाँ</span></button>`;}
function home(){
 const today=localDate(); const total=getLogs()[today]?.total||0;
 return shell(`<section class="hero"><div class="pill">95%+ लक्ष्य • Consistency Mode</div><h2>आज का मिशन क्या है?</h2><p>College के बाद focused study, रोज़ का पढ़ाई रिकॉर्ड और exam-oriented preparation — सब एक जगह।</p></section>
 <div class="quickgrid">
  <button class="card click" data-go="plan"><b>🎯 95%+ Study Plan</b><span>साप्ताहिक पढ़ाई की strategy</span></button>
  <button class="card click" data-go="revision"><b>↻ Revision Planner</b><span>क्या और कब दोहराना है</span></button>
  <button class="card click" data-go="tips"><b>✓ Exam Tips</b><span>Paper में marks बचाने के practical rules</span></button>
 <div class="sectiontitle"><h3>आज की पढ़ाई</h3><span>${today}</span></div>
 <div class="card stat"><div><small>Total Study Time</small><strong id="todayTotal">${fmt(total)}</strong></div><button class="btn small" data-go="log">समय जोड़ें</button></div>

<div class="grid">${Object.entries(subjects).map(([k,s])=>subjectCard(k,s)).join('')}</div>`);
}
function timetable(){return shell(`<div class="sectiontitle"><h3>Daily Timetable</h3><span>College: 8:00 AM – 4:30 PM</span></div><div class="card timeline">${daily.map(a=>`<div class="slot"><div class="time">${a[0]}</div><div class="activity">${a[1]}</div></div>`).join('')}</div><div class="sectiontitle"><h3>Weekly Timetable</h3><span>Balanced rotation</span></div><div class="weekgrid">${weekly.map(d=>`<div class="card daycard"><div class="dayhead"><h4>${d[0]}</h4><span class="mini">3 sessions</span></div><div class="session"><b>01</b><span>${d[1]}</span></div><div class="session"><b>02</b><span>${d[2]}</span></div><div class="session"><b>03</b><span>${d[3]}</span></div></div>`).join('')}</div>`);}
function syllabus(){return shell(`<div class="sectiontitle"><h3>Complete Syllabus</h3><span>Simple + detailed</span></div><div class="grid">${Object.entries(subjects).map(([k,s])=>subjectCard(k,s)).join('')}</div><div class="noteBox"><b>अंक सम्बन्धी नोट:</b> Maths, Physics, Chemistry और Communication में नीचे दिए गए प्रतिशत official syllabus के unit weightage पर आधारित study planning हैं। Engineering Graphics के लिए fixed unit-wise percentage नहीं दिया गया है, इसलिए यहाँ कृत्रिम chapter marks नहीं लगाए गए हैं।</div>`);}
function subject(k,from='syllabus'){const s=subjects[k];if(!s)return home();return shell(`<button class="back" data-go="${from}">← वापस</button><div class="detail"><div class="pill">BTEUP First Semester</div><h2>${s.name}</h2><p class="lead">${s.desc}</p><div class="card overview"><b>Unit weightage</b><span>${s.weight}</span></div>${s.units.map((u,i)=>`<article class="card unit"><div class="unithead"><div><small>इकाई ${i+1}</small><h4>${u.title}</h4></div><span class="pill">${u.weight}</span></div><h5>क्या-क्या पढ़ना है</h5><ul>${u.topics.map(t=>`<li>${t}</li>`).join('')}</ul><div class="focus"><b>Study Focus:</b> ${u.focus}</div></article>`).join('')}</div>`);}
function importantPage(){return shell(`<div class="sectiontitle"><h3>Most Important Topics</h3><span>Priority + 5 Marks</span></div><div class="grid">${Object.entries(subjects).map(([k,s])=>`<button class="card click subjectCard" data-important="${k}"><div class="subject"><div class="emoji">${s.emoji}</div><div><h4>${s.short}</h4><p>${s.important.length} priority topics</p></div></div></button>`).join('')}</div><div class="noteBox">ये topics exam-oriented priority list हैं; इन्हें guaranteed questions न मानें। पूरा syllabus भी जरूर पढ़ें।</div>`);}
function importantDetail(k){const s=subjects[k];return shell(`<button class="back" data-go="important">← वापस</button><div class="detail"><div class="pill">Most Important • ${s.short}</div><h2>पहले इन्हें मजबूत करें</h2><div class="card"><h4>★ High Priority Topics</h4><ol>${s.important.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="card gap"><h4>✦ 5 Marks Practice Questions</h4><ol>${s.five.map(x=>`<li>${x}</li>`).join('')}</ol></div></div>`);}
function plan(){return shell(`<div class="sectiontitle"><h3>95%+ Study Plan</h3><span>Target plan • guarantee नहीं</span></div><div class="card"><p class="lead">95%+ एक लक्ष्य है, guarantee नहीं। Strategy का उद्देश्य रोज़ consistent preparation, practice और revision बनाना है।</p>${examPlan.map((x,i)=>`<div class="planrow"><div class="num">${i+1}</div><div><b>${x[0]}</b><h4>${x[1]}</h4><p>${x[2]}</p></div></div>`).join('')}</div><div class="sectiontitle"><h3>3-Revision Rule</h3><span>हर chapter के लिए</span></div><div class="grid"><div class="card"><b>Revision 1</b><p>Chapter पढ़ने के उसी दिन 10–15 मिनट recall.</p></div><div class="card"><b>Revision 2</b><p>2–3 दिन बाद बिना notes देखे formulas/answers.</p></div><div class="card"><b>Revision 3</b><p>Exam से पहले mock + mistakes के साथ final revision.</p></div></div>`);}
function revision(){return shell(`<div class="sectiontitle"><h3>Revision Planner</h3><span>Simple cycle</span></div><div class="grid">${[['Day 0','आज पढ़ा','Concept + short notes'],['Day 1','अगले दिन','5–10 मिनट recall'],['Day 3','तीन दिन बाद','Questions + formulas'],['Day 7','एक सप्ताह बाद','Chapter test'],['Day 14','दो सप्ताह बाद','Mixed revision + mistakes']].map(x=>`<div class="card"><span class="mini">${x[0]}</span><h4>${x[1]}</h4><p>${x[2]}</p></div>`).join('')}</div><div class="noteBox">Revision करते समय सिर्फ पढ़ें नहीं — किताब बंद करके खुद से बोलकर, लिखकर या question solve करके याद करें।</div>`);}
function tips(){return shell(`<div class="sectiontitle"><h3>Exam Tips</h3><span>Marks बचाने वाले rules</span></div><div class="grid">${['Question पूरा पढ़कर ही answer शुरू करें।','जहाँ formula है, formula पहले और substitution बाद में करें।','Numerical में unit जरूर लिखें।','Long answer को heading और points में रखें।','Drawing में border, lettering, dimensions और line types साफ रखें।','Communication answers में format और presentation न भूलें।','अंत के 10–15 मिनट केवल checking के लिए रखें।','जो answer आता है उसे पहले करें; एक प्रश्न पर जरूरत से ज्यादा समय न दें।'].map((x,i)=>`<div class="card tip"><span class="num">${i+1}</span><p>${x}</p></div>`).join('')}</div>`);}
function getLogs(){try{return JSON.parse(localStorage.getItem(storageKey)||'{}')}catch{return {}}}
function saveLogs(x){localStorage.setItem(storageKey,JSON.stringify(x));}
function localDate(d=new Date()){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function fmt(m){m=Number(m)||0;return `${Math.floor(m/60)}h ${m%60}m`;}
function log(){const data=getLogs(),today=localDate(),dates=Object.keys(data).sort((a,b)=>b.localeCompare(a));return shell(`<div class="sectiontitle"><h3>आज की पढ़ाई</h3><span>हर entry save होती रहेगी</span></div><div class="card"><form class="form" id="logForm"><label>Subject<select id="logSub">${Object.entries(subjects).map(([k,s])=>`<option value="${k}">${s.short}</option>`).join('')}</select></label><label>आज कितने मिनट पढ़े?<input id="mins" type="number" min="1" max="1440" inputmode="numeric" placeholder="जैसे 90" required></label><button class="btn">आज की पढ़ाई Save करें</button></form></div><div class="sectiontitle"><h3>आज का Total</h3><span>${today}</span></div><div class="card"><div class="total">${fmt(data[today]?.total||0)}</div>${data[today]?.items?.length?data[today].items.map(i=>`<div class="logrow"><span>${subjects[i.sub]?.short||i.sub}</span><strong>${fmt(i.mins)}</strong></div>`).join(''):'<div class="empty">आज की कोई entry अभी नहीं है।</div>'}</div><div class="sectiontitle"><h3>Date-wise History</h3><span>पुराना record अपने आप रहेगा</span></div><div class="card">${dates.length?dates.map(date=>`<div class="history"><div><b>${date}</b><small>${data[date].items?.length||0} entries</small></div><strong>${fmt(data[date].total)}</strong></div>`).join(''):'<div class="empty">अभी कोई पुराना record नहीं है।</div>'}</div>`);}
function bind(){document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>render(b.dataset.go));document.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>render('subject:'+b.dataset.sub));document.querySelectorAll('[data-important]').forEach(b=>b.onclick=()=>render('importantDetail:'+b.dataset.important));document.querySelectorAll('.bottomnav button').forEach(b=>b.classList.toggle('active',b.dataset.route===currentRoute||(currentRoute.startsWith('subject')&&b.dataset.route==='syllabus')||(currentRoute.startsWith('importantDetail')&&b.dataset.route==='important')));const form=$('#logForm');if(form){form.onsubmit=e=>{e.preventDefault();const mins=Number($('#mins').value),sub=$('#logSub').value,date=localDate(),data=getLogs();if(!Number.isFinite(mins)||mins<1)return;data[date]??={total:0,items:[]};data[date].total+=mins;data[date].items.push({sub,mins,at:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})});saveLogs(data);render('log');};}}
let currentRoute='home';
function render(route='home'){currentRoute=route;const [r,k]=route.split(':');let html=r==='home'?home():r==='timetable'?timetable():r==='syllabus'?syllabus():r==='important'?importantPage():r==='log'?log():r==='subject'?subject(k):r==='importantDetail'?importantDetail(k):r==='plan'?plan():r==='revision'?revision():r==='tips'?tips():home();$('#screen').innerHTML=html;bind();window.scrollTo({top:0,behavior:'instant'});}

document.querySelectorAll('.bottomnav button').forEach(b=>b.onclick=()=>render(b.dataset.route));
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('missionDark',document.body.classList.contains('dark')?'1':'0');};
if(localStorage.getItem('missionDark')==='1')document.body.classList.add('dark');
render('home');
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
