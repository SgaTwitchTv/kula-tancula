import {readFileSync,writeFileSync} from 'node:fs';
const root='C:/Users/konra/OneDrive/Dokumenty/ChatGPT/Strona JuliogollaDens/ballin-studios/';
const candidates=JSON.parse(readFileSync(root+'../licensed-photo-candidates.json','utf8'));
const replacements={
 'crew-sway.png':'licensed/rehearsal-clean.png',
 'dance-world-sway.png':'licensed/together-clean.png',
 'hip-hop.jpg':'licensed/hip-hop-clean.png',
 'choreo.jpg':'licensed/flow.jpg',
 'sway-kids.jpg':'licensed/kids.jpg',
 'program.jpg':'licensed/practice-clean.png',
 'people-sway.png':'licensed/street-crew.jpg',
 'stage.jpg':'licensed/studio-sway.png'
};
let s=readFileSync(root+'src/main.ts','utf8');
for(const [old,replacement] of Object.entries(replacements))s=s.replaceAll('/photos/'+old,'/photos/'+replacement).replaceAll('data-photo="'+old+'"','data-photo="'+replacement+'"');
const alts={
 'Wizualizacja AI: logo SWAY Studio na scenie; zdjęcie bazowe Egurrola':'Grupa tancerzy podczas próby choreografii — zdjęcie ilustracyjne z Pexels',
 'Wizualizacja AI brandingu SWAY Studio na strojach tancerzy':'Dorośli podczas wspólnej próby tanecznej — zdjęcie ilustracyjne z Pexels',
 'Tancerz hip-hopu — fotografia Egurrola Dance Studio':'Tancerz w strojach streetwear — zdjęcie ilustracyjne z Pexels',
 'Tancerz commercial w ruchu — fotografia Egurrola Dance Studio':'Tancerka w przestronnym industrialnym studiu — zdjęcie ilustracyjne z Pexels',
 'Młoda tancerka hip-hopu — fotografia Egurrola Dance Studio':'Dzieci w sali tanecznej — zdjęcie ilustracyjne z Pexels',
 'Zajęcia taneczne w Egurrola Dance Studio — zdjęcie referencyjne':'Tancerze ćwiczący wspólnie w sali — zdjęcie ilustracyjne z Pexels',
 'Formacja hip-hopowa Swagg 2 podczas występu':'Grupa dorosłych podczas próby choreografii',
 'Tancerz commercial w ruchu':'Tancerka wykonująca ruch w industrialnym studiu',
 'Zespół tancerzy podczas choreografii scenicznej':'Grupa dorosłych ćwicząca choreografię w studiu',
 'Młoda tancerka hip-hopu':'Dzieci ćwiczące w sali tanecznej',
 'Uczestnicy tanecznego wydarzenia wspólnie kibicujący':'Trzy osoby w stylizacjach streetwear',
 'Finał spektaklu tanecznego Boxality':'Pusta sala z logo SWAY Studio — wizualizacja brandingu na zdjęciu stockowym'
};
for(const [old,replacement] of Object.entries(alts))s=s.replaceAll(old,replacement);
s=s.replace('data-gallery-category="stage" data-photo="licensed/studio-sway.png"','data-gallery-category="studio" data-photo="licensed/studio-sway.png"');
s=s.replace('data-gallery-category="studio" data-photo="licensed/street-crew.jpg"','data-gallery-category="street" data-photo="licensed/street-crew.jpg"');
s=s.replace('08 / FEEL THE STAGE','08 / SPACE TO MOVE');
s=s.replace('07 / FIND YOUR PEOPLE','07 / STREET ENERGY');
s=s.replace('<button class="text-button" id="privacy">Prywatność dema ↗</button>','<div class="footer-actions"><button class="text-button" id="photo-sources">Źródła zdjęć ↗</button><button class="text-button" id="privacy">Prywatność dema ↗</button></div>');
const links=candidates.map(p=>`<li><a href="${p.page}" target="_blank" rel="noopener noreferrer">${p.author} · Pexels #${p.id} ↗</a></li>`).join('');
const sources=`<dialog id="photo-sources-dialog" class="photo-sources-dialog"><button class="dialog-close" aria-label="Zamknij źródła zdjęć">×</button><p class="eyebrow">FOTOGRAFIE</p><h2>Źródła zdjęć.</h2><p>Zdjęcia ilustracyjne pochodzą z Pexels i nie przedstawiają kadry ani zajęć SWAY Studio. Logo w pustej sali jest wizualizacją wykonaną przy użyciu AI.</p><p><a href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">Licencja Pexels ↗</a> pozwala na bezpłatne użycie komercyjne i modyfikacje. Nie oznacza przeniesienia praw do zdjęć ani zgody modeli na reklamowanie szkoły.</p><ul>${links}</ul></dialog>\n`;
s=s.replace('<dialog id="photo-dialog"',sources+'<dialog id="photo-dialog"');
s += "\ndocument.querySelector('#photo-sources')!.addEventListener('click', () => document.querySelector<HTMLDialogElement>('#photo-sources-dialog')!.showModal());\n";
writeFileSync(root+'src/main.ts',s);
