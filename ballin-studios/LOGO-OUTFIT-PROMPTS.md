# Przezroczyste logo i zmiana outfitu

Wbudowany Imagegen. Wyniki: `public/branding/sway-marker-transparent.png`, `public/photos/fictional/hero-street.png`, `public/photos/fictional/hero-turquoise.png`. Zachowano dotychczasowe pliki źródłowe. Oba wycięcia tancerza są kwadratowe i używają tego samego `object-fit`, aby efekt odsłaniania nakładał dwa stroje w jednej pozie.

## heroAlpha

Use case: background-extraction. Remove ONLY the white background and ground shadow from this full-body dancer, producing a crisp genuine transparent alpha cutout. Preserve the entire dancer EXACTLY: same face and identity, hair bun, arms, hands holding jacket, white tank top, black jacket with turquoise lining, black loose trousers and SWAY logo, shoes, fabric texture, lighting, body outline, position and scale. Keep the original square canvas, same pixel positions of face, hands, feet. No retouching, no new pose, no crop, no rim glow, no checkerboard pattern. Return a transparent PNG of only the dancer.

## logoAlphaFinal

Background removal only. Preserve this exact SWAY STUDIO turquoise marker logo, including typography and drips, on the same 1536x1024 canvas. The turquoise ink must remain FULLY OPAQUE, flat solid turquoise (#2BD1EB), crisp and highly legible. Remove the black background, make it true alpha=0, including all negative spaces inside letters. No glow, no halo, no blur, no translucency in turquoise ink, no gradient, no shadows, no black rectangles. Do not redesign. Return a clean solid turquoise lettering cutout with transparent background.

## heroOutfit

Use case: identity-preserve. Image 1 is a transparent PNG cutout edit target for an aligned outfit-swap animation. Change ONLY clothing colors/materials, preserving pixel-perfect alignment and the entire silhouette. Keep the EXACT same man, face, expression, skin, hair bun, arms, fingers, body proportions, low dance pose, jacket held open, feet, full canvas size 1254x1254, scale and coordinates. New outfit: the jacket outer fabric becomes bright turquoise satin, its inner lining pale cool grey; the white tank top becomes matte black; the loose black cargo trousers become cool light grey with turquoise SWAY STUDIO graffiti logo in the same thigh location; shoes stay black with small turquoise trim. Clothing geometry, folds and outline must stay exactly in the same positions. Keep photo realism, skin texture and original light. Preserve real transparent alpha background. No backdrop, no checkerboard, no floor, no ground shadow. Do not crop, move, resize, rotate or re-pose the dancer. Return one full transparent cutout with only the garment appearance changed.

