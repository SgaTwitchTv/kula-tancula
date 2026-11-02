# SWAY Motion

Zmiana outfitu używa teraz animowanej maski SVG z falującym brzegiem, turkusowym rantem i kroplami (`src/liquid-outfit.ts`). Maska ma bezwładność kursora, rozszerza się po kliknięciu i kurczy przy powrocie. Animacja zatrzymuje się poza ekranem, w tle oraz po zakończeniu przejścia. Ograniczenie ruchu daje natychmiastowy przełącznik bez falowania.

Aktualizacja: przezroczysty logotyp w obu wariantach, powiększony opis Julii oraz dwa zgodne kadrowo wycięcia tancerza. Na komputerze kursor odsłania drugi outfit falującą maską cieczy, przycisk przełącza całą postać. Na dotyku dostępny jest przycisk; ograniczenie animacji wyłącza podgląd kursorem i przejścia maski. Styl dodatków: `src/outfit.css`. Prompty i grafiki: `LOGO-OUTFIT-PROMPTS.md`.

Osobny wariant pod `/motion/`. Wariant klasyczny pozostaje pod `/`.

TypeScript: `src/motion.ts`. Styl: `src/motion.css`. Punkt wejścia: `motion/index.html`. Vite buduje oba warianty przez `vite.config.ts`.

Efekty: plakatowy hero z paralaksą, zapętlony pasek, odsłanianie nagłówka, przypięty poziomy przejazd przez trzy kierunki, kolaż zdjęć z różnymi prędkościami, animacje przycisków i pasek postępu strony. Pozioma sekcja używa `position: sticky` i przesunięcia na podstawie rzeczywistego przewinięcia dokumentu; nie blokuje kółka ani nie zamienia zdarzeń dotykowych. Na ekranach do 760px zajęcia układają się pionowo. Preferencja ograniczenia ruchu i przycisk w stopce wyłączają paralaksę i przypinanie.

Te same fotografie i dane koncepcyjne co w wariancie klasycznym. Brak nowych nagrań wideo; animacje działają na istniejących zdjęciach. Formularz demonstracyjny niczego nie wysyła ani nie zapisuje.
