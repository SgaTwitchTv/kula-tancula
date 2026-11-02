import './motion.css';
import './outfit.css';
import { installLiquidOutfit } from './liquid-outfit';

const photo = (name: string) => `/photos/fictional/${name}.png`;
const logo = '<span class="logo-crop"><img src="/branding/sway-marker-transparent.png" alt="SWAY Studio" width="1536" height="1024"></span>';
const courses = [
  { title: 'HIP-HOP', sub: 'BASICS', image: 'hip-hop', tag: 'OD PODSTAW', desc: 'Złap bounce. Poznaj groove. Pierwszy krok nie musi być idealny — ma być Twój.', name: 'Hip-hop Basics' },
  { title: 'CHOREO', sub: '& FLOW', image: 'choreo', tag: 'OPEN LEVEL', desc: 'Muzyka na full. Emocje w ruch. Choreografie, do których chce się wracać.', name: 'Choreo & Flow' },
  { title: 'SWAY', sub: 'KIDS', image: 'kids', tag: 'MŁODA ENERGIA', desc: 'Małe kroki, wielka zajawka. Ruch, zabawa i przestrzeń na własny styl.', name: 'SWAY Kids' },
];
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<a class="skip-link" href="#main">Przejdź do treści</a>
<header class="nav"><a class="brand" href="#top" aria-label="SWAY Studio — początek">${logo}</a><span class="nav-label">DANCE STUDIO / OWN YOUR RHYTHM</span><nav aria-label="Menu główne"><a href="#energia">Energia</a><a href="#zajecia">Zajęcia</a><a href="#grafik">Grafik</a><button class="nav-join" data-join>Wbijaj <span>↗</span></button></nav></header>
<main id="main">
<section class="hero" id="top" aria-labelledby="hero-title"><div class="hero-topline"><span>HIP-HOP W SERCU.</span><span>SWOBODA W RUCHU.</span><span>EST. / SOON</span></div><h1 id="hero-title" aria-label="SWAY Studio — Twój ruch, Twój rytm"><span class="hero-word" aria-hidden="true">SWAY</span></h1><div class="hero-performer" aria-hidden="true"><img class="hero-street" src="${photo('hero-street')}" alt="" fetchpriority="high" width="1254" height="1254"><img class="hero-outfit" src="${photo('hero-turquoise')}" alt="" width="1254" height="1254"></div><div class="outfit-control"><span class="outfit-hint">RUSZ KURSOREM. ZMIEŃ KLIMAT.</span><button class="outfit-toggle" id="outfit-toggle" aria-pressed="false" aria-label="Włącz turkusowy outfit tancerza" disabled><span id="outfit-name">01 / STREET</span><span aria-hidden="true">↔</span></button><span class="outfit-touch-hint">DOTKNIJ, ŻEBY ZMIENIĆ OUTFIT</span></div><div class="hero-circle" aria-hidden="true">✳</div><div class="hero-aside"><span class="micro">BE YOU. FEEL THE SWAY.</span><p>Twój ruch.<br>Twoje zasady.</p><a class="pill dark" href="#zajecia">Znajdź swój flow <span>↗</span></a></div><div class="hero-sideword" aria-hidden="true">NO PRESSURE.</div><div class="hero-bottom"><a href="#energia">PRZEWIŃ. POCZUJ. <span>↓</span></a><span>SCROLL TO FIND YOUR GROOVE</span><span class="hero-count">001 — ∞</span></div></section>
<div class="ribbon" aria-hidden="true"><div>NO PRESSURE. <span>✳</span> JUST GROOVE. <span>✳</span> GOOD PEOPLE. <span>✳</span> GOOD ENERGY. <span>✳</span> NO PRESSURE. <span>✳</span> JUST GROOVE. <span>✳</span> GOOD PEOPLE. <span>✳</span> GOOD ENERGY. <span>✳</span></div></div>
<section class="energy" id="energia"><div class="section-meta"><span>01 / THE FEELING</span><span>FROM THE HEART. TO THE FLOOR.</span></div><div class="energy-copy"><h2><span data-reveal>NIE MUSISZ</span><span data-reveal>ZNAĆ <i>KROKÓW.</i></span><span data-reveal>WYSTARCZY, ŻE</span><span data-reveal>CZUJESZ <i>BEAT.</i></span></h2><span class="energy-star" aria-hidden="true">✳</span></div><div class="energy-bottom"><p><span class="story-brand">SWAY Studio</span> to pomysł <em>Julii Brejnak</em> na miejsce, w którym <strong>hip-hop łączy ludzi.</strong> Bez spiny, bez porównywania się. Z przestrzenią na pierwszy krok i <em>własny styl.</em></p><a class="text-link" href="#zajecia">WEJDŹ W TEN RYTM <span>↘</span></a></div><figure class="energy-photo" data-reveal><img src="${photo('crew')}" alt="Grupa tancerzy na scenie — wizualizacja AI" loading="lazy"><figcaption>ONE CREW. A THOUSAND WAYS TO MOVE.</figcaption></figure></section>
<section class="horizontal" id="zajecia" aria-label="Kierunki zajęć"><div class="horizontal-pin"><div class="horizontal-header"><span>02 / FIND YOUR FLOW</span><a href="#po-zajeciach">DALEJ DO GALERII ↓</a><span class="flow-count">01 / 04</span></div><div class="horizontal-track"><article class="flow-intro"><span class="micro">JEDEN PARKIET. WIELE MOŻLIWOŚCI.</span><h2>MAKE<br>YOUR<br><i>MOVE.</i></h2><div class="flow-arrow" aria-hidden="true">→</div><p>Każdy zaczyna gdzieś.<br>Znajdź swój pierwszy krok.</p><a href="#grafik" class="text-link">SPRAWDŹ GRAFIK ↗</a></article>${courses.map((c, i) => `<article class="flow-card" aria-labelledby="course-${i}"><div class="flow-card-top"><span>0${i + 1}</span><span>${c.tag}</span><span>↗</span></div><h3 id="course-${i}">${c.title}<br><i>${c.sub}</i></h3><div class="flow-person"><img src="${photo(c.image)}" alt="${c.name} — wygenerowana postać w pozie tanecznej" loading="lazy" width="1254" height="1254"></div><div class="flow-card-bottom"><p>${c.desc}</p><button class="circle-button" data-course="${c.name}" aria-label="Poznaj ${c.name}">↗</button></div></article>`).join('')}</div><div class="horizontal-footer"><span>KEEP SCROLLING <span class="scroll-arrow">→</span></span><div class="flow-progress"><span></span></div><span>MOVE YOUR WAY.</span></div></div></section>
<section class="collage" id="po-zajeciach"><div class="section-meta"><span>03 / THE PEOPLE. THE ENERGY.</span><span>TURN IT UP.</span></div><div class="collage-title"><h2>GOOD<br><i>ENERGY.</i><br>ONLY.</h2></div><button class="photo-card photo-one" data-photo="dance-world" aria-label="Powiększ zdjęcie zespołu na scenie"><img src="${photo('dance-world')}" alt="Tancerze w strojach SWAY na scenie — wizualizacja AI" loading="lazy"><span>01 / OWN THE STAGE <b>↗</b></span></button><button class="photo-card photo-two" data-photo="people" aria-label="Powiększ zdjęcie wspólnych oklasków"><img src="${photo('people')}" alt="Grupa klaszczących tancerzy — wizualizacja AI" loading="lazy"><span>02 / FIND YOUR PEOPLE <b>↗</b></span></button><button class="photo-card photo-three" data-photo="program" aria-label="Powiększ zdjęcie z sali"><img src="${photo('program')}" alt="Tancerze na sali — wizualizacja AI" loading="lazy"><span>03 / ONE MORE TRY <b>↗</b></span></button><div class="collage-note">Nie musisz pasować<br>do schematu.<br><strong>Po prostu bądź sobą.</strong></div><div class="collage-orbit" aria-hidden="true">✳</div></section>
<section class="schedule" id="grafik"><div class="section-meta"><span>04 / SEE YOU ON THE FLOOR</span><span>PRZYKŁADOWY GRAFIK / DEMO</span></div><div class="schedule-title"><h2>ZNAJDŹ<br>SWÓJ <i>CZAS.</i></h2><p>Godzina dla siebie.<br>Energia na resztę dnia.</p></div><div class="schedule-list">${courses.map((c, i) => `<button data-course="${c.name}"><span class="day">${['PON','CZW','ŚR'][i]}<small>${['17:30 — 18:30','18:30 — 19:30','16:30 — 17:30'][i]}</small></span><span class="class-name">${c.name}</span><span class="schedule-tag">${c.tag}</span><span class="schedule-arrow">↗</span></button>`).join('')}</div><details><summary>Pierwszy raz? <span>+</span></summary><p>Wygodne ubranie, czyste buty i woda — to wystarczy na start. Docelowe poziomy, adres i termin otwarcia ogłosimy po potwierdzeniu.</p></details></section>
<section class="join"><span class="micro">PIERWSZY RUCH NALEŻY DO CIEBIE.</span><button class="join-huge" data-join>LET’S<br><i>SWAY.</i><span>↗</span></button><div class="join-bottom"><span>COME AS YOU ARE.</span><span>LEAVE WITH A GROOVE.</span></div></section>
</main><footer><a href="#top" aria-label="SWAY Studio — wróć na górę">${logo}</a><span>© ${new Date().getFullYear()} SWAY STUDIO</span><div><a href="/">Wariant klasyczny ↗</a><button id="sources">Źródła zdjęć</button><button id="motion-toggle" aria-pressed="false">Ogranicz animacje</button></div></footer>
<dialog id="join-dialog" aria-labelledby="join-title"><button class="close" aria-label="Zamknij">×</button><span class="micro">OWN YOUR RHYTHM.</span><h2 id="join-title">LET’S<br><i>SWAY.</i></h2><p>To demo zapisów. Formularz nie wysyła ani nie zapisuje danych.</p><form id="join-form"><label>Twoje imię<input name="name" required autocomplete="given-name" maxlength="80" placeholder="Jak masz na imię?"></label><label>E-mail<input name="email" type="email" required autocomplete="email" maxlength="150" placeholder="ty@przyklad.pl"></label><label>Twój kierunek<select name="course"><option>Jeszcze szukam swojego flow</option>${courses.map(c=>`<option>${c.name}</option>`).join('')}</select></label><button class="pill dark">Sprawdź zapis ↗</button></form><p id="form-result" role="status" hidden></p></dialog>
<dialog id="photo-dialog" class="photo-dialog" aria-label="Podgląd zdjęcia"><button class="close" aria-label="Zamknij zdjęcie">×</button><img id="expanded" alt=""></dialog>
<dialog id="sources-dialog" aria-labelledby="sources-title"><button class="close" aria-label="Zamknij źródła">×</button><h2 id="sources-title">Źródła<br><i>zdjęć.</i></h2><p>Materiały bazowe: <a href="https://egurrola.com/" target="_blank" rel="noopener noreferrer">egurrola.com ↗</a>. Postacie, stroje i oznaczenia SWAY Studio zmodyfikowano przy użyciu AI. To wizualizacje — nie dokumentacja kadry, zajęć ani wydarzeń SWAY Studio.</p></dialog>
<div class="page-progress" aria-hidden="true"></div>`;

const q = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector)!;
const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
let reduceMotion = reducedQuery.matches;
const horizontal = q<HTMLElement>('.horizontal');
const track = q<HTMLElement>('.horizontal-track');
const progress = q<HTMLElement>('.flow-progress span');
const count = q<HTMLElement>('.flow-count');
let horizontalTop = 0, travel = 0, frame = 0;
const clamp = (n: number, min=0, max=1) => Math.min(max, Math.max(min,n));
function measure() {
  horizontal.style.height = '';
  travel = Math.max(0, track.scrollWidth - innerWidth);
  if(!reduceMotion && innerWidth > 760) horizontal.style.height = `${innerHeight + travel + innerHeight * .3}px`;
  horizontalTop = horizontal.getBoundingClientRect().top + scrollY;
  update();
}
function update() {
  frame = 0;
  const y=scrollY, height=innerHeight;
  const heroProgress=clamp(y/height);
  if(!reduceMotion) {
    q<HTMLElement>('.hero-word').style.transform=`translate3d(${-heroProgress*90}px,${heroProgress*100}px,0) rotate(${-heroProgress*3}deg)`;
    q<HTMLElement>('.hero-performer').style.transform=`translate3d(0,${heroProgress*110}px,0) rotate(${heroProgress*6}deg)`;
    q<HTMLElement>('.hero-circle').style.transform=`rotate(${y*.09}deg)`;
  }
  const p=clamp((y-horizontalTop)/(travel+height*.3));
  const desktop=!reduceMotion && innerWidth>760;
  track.style.transform=desktop?`translate3d(${-p*travel}px,0,0)`:'';
  progress.style.transform=`scaleX(${desktop?p:1})`;
  count.textContent=`0${Math.min(4,Math.floor(p*4)+1)} / 04`;
  q<HTMLElement>('.page-progress').style.transform=`scaleX(${clamp(y/Math.max(1,document.documentElement.scrollHeight-height))})`;
  if(!reduceMotion) {
    const rect=q<HTMLElement>('.collage').getBoundingClientRect();
    if(rect.bottom>0 && rect.top<height) {
      const offset=clamp((height-rect.top)/(height+rect.height),0,1)-.5;
      document.querySelectorAll<HTMLElement>('.photo-card').forEach((el,i)=>el.style.setProperty('--drift',`${offset*[120,-170,100][i]}px`));
      q<HTMLElement>('.collage-orbit').style.transform=`rotate(${offset*100}deg)`;
    }
  }
}
addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});
addEventListener('resize',measure);
const observer=new ResizeObserver(measure);observer.observe(track);
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('revealed');}),{threshold:.15});
document.querySelectorAll('[data-reveal]').forEach(el=>reveal.observe(el));
function setMotion(reduce: boolean) {
  reduceMotion=reduce;document.documentElement.classList.toggle('reduced-motion',reduce);
  q<HTMLButtonElement>('#motion-toggle').setAttribute('aria-pressed',String(reduce));
  q<HTMLButtonElement>('#motion-toggle').textContent=reduce?'Włącz animacje':'Ogranicz animacje';
  if(reduce)document.querySelectorAll<HTMLElement>('.hero-word,.hero-performer,.hero-circle,.collage-orbit').forEach(el=>el.style.transform='');
  measure();
}
q<HTMLButtonElement>('#motion-toggle').addEventListener('click',()=>setMotion(!reduceMotion));
reducedQuery.addEventListener('change',e=>setMotion(e.matches));
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(d=>{
  d.querySelector('.close')!.addEventListener('click',()=>d.close());
  d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});
});
const join=q<HTMLDialogElement>('#join-dialog'), form=q<HTMLFormElement>('#join-form'), result=q<HTMLElement>('#form-result');
document.querySelectorAll<HTMLElement>('[data-join],[data-course]').forEach(b=>b.addEventListener('click',()=>{
  form.reset();form.hidden=false;result.hidden=true;
  if(b.dataset.course)form.querySelector<HTMLSelectElement>('select')!.value=b.dataset.course;
  join.showModal();
}));
form.addEventListener('submit',e=>{e.preventDefault();form.hidden=true;result.hidden=false;result.textContent='To był próbny zapis. Dane pozostają w tej przeglądarce i nie są nigdzie wysyłane. Do zobaczenia na parkiecie!';form.reset();});
join.addEventListener('close',()=>form.reset());
q('#sources').addEventListener('click',()=>q<HTMLDialogElement>('#sources-dialog').showModal());
document.querySelectorAll<HTMLElement>('[data-photo]').forEach(b=>b.addEventListener('click',()=>{const img=q<HTMLImageElement>('#expanded');img.src=photo(b.dataset.photo!);img.alt=b.querySelector('img')!.alt;q<HTMLDialogElement>('#photo-dialog').showModal();}));
// On desktop the horizontal story is positioned by document scroll, never by a wheel lock.
// Move keyboard focus to the matching panel before the browser tries to reveal a clipped control.
track.addEventListener('focusin',e=>{
  if(reduceMotion||innerWidth<=760)return;
  const panel=(e.target as HTMLElement).closest<HTMLElement>('.flow-card,.flow-intro');
  if(panel)scrollTo({top:horizontalTop+clamp(panel.offsetLeft/Math.max(1,travel))*(travel+innerHeight*.3),behavior:'instant'});
});
const hero=q<HTMLElement>('.hero');
const performer=q<HTMLElement>('.hero-performer');
const outfitButton=q<HTMLButtonElement>('#outfit-toggle');
const liquidOutfit=installLiquidOutfit({hero,performer,button:outfitButton,isReduced:()=>reduceMotion});
reducedQuery.addEventListener('change',liquidOutfit.refreshMotion);
q('#motion-toggle').addEventListener('click',liquidOutfit.refreshMotion);
setMotion(reduceMotion);
document.fonts.ready.then(measure);
