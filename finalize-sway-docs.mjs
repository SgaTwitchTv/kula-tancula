import {readFileSync,writeFileSync} from 'node:fs';
const root='C:/Users/konra/OneDrive/Dokumenty/ChatGPT/Strona JuliogollaDens/ballin-studios/';
for(const file of ['src/main.ts','PHOTO-SOURCES.md']){
 let s=readFileSync(root+file,'utf8').replaceAll('young-ballers.jpg','sway-kids.jpg');
 if(file==='PHOTO-SOURCES.md'){
  s=s.replaceAll('Ballin’ Studios','SWAY Studio').replaceAll('Ballin’','SWAY Studio');
  s=s.replace('Oznaczenia na oryginalnych zdjęciach pozostawiono bez zmian.','Na zdjęciach crew, people i dance-world oznaczenia marki źródłowej zastąpiono logo SWAY Studio przy użyciu AI. Są to wizualizacje, nie dokumentacja działalności SWAY Studio. Pozostałe zdjęcia pozostają niezmienione.');
  s=s.replaceAll('photos/crew.jpg','photos/crew-sway.png').replaceAll('photos/people.jpg','photos/people-sway.png').replaceAll('photos/dance-world.jpg','photos/dance-world-sway.png');
 }
 writeFileSync(root+file,s);
}
