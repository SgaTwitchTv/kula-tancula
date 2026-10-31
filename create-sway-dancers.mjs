import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const workspace='C:/Users/konra/OneDrive/Dokumenty/ChatGPT/Strona JuliogollaDens/';
const root=workspace+'sway-branding-dancer';
mkdirSync(root,{recursive:true});
const marks=[
  {id:'01',name:'SWAY',caption:'Najpierw litera. Po chwili — tancerz.',detail:'Płynna litera S z dyskretną głową i gestem ręki. Najbliżej prostoty poprzedniego logo.',svg:'<circle cx="86" cy="39" r="10" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"><path d="M106 20C81 2 43 7 30 28C15 51 38 62 64 68C91 74 70 88 71 98C72 110 108 106 103 125C97 149 50 154 21 139"/><path d="M73 66L81 53M60 68Q40 83 18 80"/></g>'},
  {id:'02',name:'DANCER',caption:'Sylwetka, która układa się w S.',detail:'Ręka nad głową, wygięty tułów i ugięta noga. Najczytelniejsze połączenie tańca z literą.',svg:'<circle cx="100" cy="33" r="11" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M92 14C66 0 34 7 29 29C24 50 51 59 76 65C92 69 53 86 66 100L102 116Q115 123 100 133L64 150"/><path d="M79 64L94 49M78 67Q104 82 124 61M66 100L45 122L17 134"/></g>'},
  {id:'03',name:'GROOVE',caption:'S w bardziej ulicznej pozie.',detail:'Mocniejszy przechył, kanciaste gesty i szerszy krok. Wariant z największą energią hip-hopu.',svg:'<circle cx="98" cy="34" r="11" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"><path d="M119 17L88 9C62 3 41 18 38 36C35 52 57 58 77 65C95 71 62 87 60 101Q56 112 72 118L106 130L85 150"/><path d="M80 64L93 49M79 67L113 72L126 53M61 104L30 123L13 108"/></g>'}
];
let generator=readFileSync(workspace+'create-sway-concepts.mjs','utf8');
generator=generator.replace("/sway-branding'","/sway-branding-dancer'");
const a=generator.indexOf('const marks=['),b=generator.indexOf('\nconst mark=',a);
generator=generator.slice(0,a)+'const marks='+JSON.stringify(marks)+';'+generator.slice(b);
generator=generator.replaceAll("item.id==='01'","item.id==='02'");
generator=generator.replaceAll('Ruch zapisany<br>w <em>jednej literze.</em>','Litera S.<br><em>W tanecznej pozie.</em>');
generator=generator.replaceAll('Trzy interpretacje płynnego S.<br>Turkus, czerń i znak, który działa także<br>na bluzie, szyldzie i w małym avatarze.','Trzy sposoby połączenia S i sylwetki.<br>Od subtelnego gestu do mocniejszej pozy.<br>Ten sam turkus. Więcej ruchu.');
generator=generator.replaceAll('IDENTYFIKACJA / KONCEPCJE 01—03','SWAY STUDIO / S + TANCERZ');
generator=generator.replaceAll('SWAY Studio — trzy kierunki logo','SWAY Studio — S w tanecznej pozie');
generator=generator.replaceAll('sway-logo-propozycje','sway-dancer-propozycje');
writeFileSync(workspace+'render-sway-dancers.mjs',generator);
await import('./render-sway-dancers.mjs?new=1');
writeFileSync(root+'/README.md','# SWAY Studio — S + tancerz\n\n01 SWAY: subtelna litera S z głową i gestem ręki.\n02 DANCER: czytelniejsza taneczna sylwetka z ugiętą nogą.\n03 GROOVE: dynamiczna hip-hopowa poza.\n\nAutorskie, edytowalne znaki wektorowe. Turkus #2BD1EB. Każdy wariant w SVG: sam znak oraz znak z logotypem na jasne tło. Plansza pokazuje też użycie na ciemnym tle, avatar i wersję jednokolorową. Napisy Arial/Helvetica wymagają zamiany na krzywe przed finalnym drukiem. Są to propozycje do wyboru; nie zmieniają opublikowanej strony.\n');
const server=readFileSync(workspace+'sway-branding/preview.mjs','utf8');
writeFileSync(root+'/preview.mjs',server);
