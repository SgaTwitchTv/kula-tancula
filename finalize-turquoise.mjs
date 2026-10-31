import {readFileSync,writeFileSync} from 'node:fs';
const root='C:/Users/konra/OneDrive/Dokumenty/ChatGPT/Strona JuliogollaDens/ballin-studios/';
for(const file of ['public/mark.svg','public/logo.svg'])writeFileSync(root+file,readFileSync(root+file,'utf8').replaceAll('stroke="#ffffff"','stroke="#08090c"'));
let brand=readFileSync(root+'BRANDING.md','utf8');
brand=brand.replace('Zdjęcie: public/hero.png. Nowy materiał demonstracyjny, wygenerowany wbudowanym narzędziem Imagegen. Nie wykorzystuje zdjęć ani oznaczeń Egurroli. Nie przedstawia prawdziwej założycielki ani lokalu.','Aktualnie wyświetlane zdjęcia: osiem fotografii referencyjnych z egurrola.com. Zestawienie: PHOTO-SOURCES.md. Dawne hero.png z Imagegen nie jest już wykorzystywane w interfejsie.');
writeFileSync(root+'BRANDING.md',brand);
let readme=readFileSync(root+'README.md','utf8');
readme=readme.replace('Fotografia hero jest wygenerowaną ilustracją koncepcji, nie zdjęciem prawdziwej kadry ani sali.','Fotografie pochodzą z egurrola.com i są oznaczonym materiałem referencyjnym. Nie przedstawiają kadry ani lokalu Ballin’ Studios. Galeria ma filtry i podgląd zdjęć. Lista źródeł: PHOTO-SOURCES.md.');
writeFileSync(root+'README.md',readme);
