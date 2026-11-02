type LiquidOptions = {
  hero: HTMLElement;
  performer: HTMLElement;
  button: HTMLButtonElement;
  isReduced: () => boolean;
};

/** A moving SVG aperture reveals an aligned photograph, without distorting the model. */
export function installLiquidOutfit({ hero, performer, button, isReduced }: LiquidOptions) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.classList.add('outfit-liquid-effects');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.innerHTML = `<defs><clipPath id="outfit-liquid-clip" clipPathUnits="userSpaceOnUse"><path id="outfit-liquid-aperture" d="M0 0Z"/></clipPath></defs><path class="liquid-rim"/><path class="liquid-sheen"/><g class="liquid-droplets">${Array.from({length:5},()=>'<circle/>').join('')}</g>`;
  performer.append(svg);
  const aperture = svg.querySelector<SVGPathElement>('#outfit-liquid-aperture')!;
  const rim = svg.querySelector<SVGPathElement>('.liquid-rim')!;
  const sheen = svg.querySelector<SVGPathElement>('.liquid-sheen')!;
  const drops = [...svg.querySelectorAll<SVGCircleElement>('circle')];
  const name = document.querySelector<HTMLElement>('#outfit-name')!;
  let ready = false, locked = false, preview = false, visible = true;
  let width = 1, height = 1, x = 0, y = 0, targetX = 0, targetY = 0;
  let radius = 0, targetRadius = 0, frame = 0, lastTime = 0, phase = 0;
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  const clamp = (n: number, a=0, b=1) => Math.min(b,Math.max(a,n));
  const fullRadius = () => Math.hypot(Math.max(x,width-x), Math.max(y,height-y))*1.4 + 50;

  function shape(r: number, time: number, strength: number) {
    if(r < .3) return 'M0 0Z';
    const speed = Math.min(1, Math.hypot(targetX-x,targetY-y)/100);
    const direction = Math.atan2(targetY-y,targetX-x);
    const points = Array.from({ length: 72 }, (_,i) => {
      const a = i/72*Math.PI*2;
      const wave = Math.sin(a*3+time*1.5)*.075 + Math.sin(a*5-time*1.8)*.045 + Math.sin(a*9+time*2.1)*.018;
      const stretch = Math.cos(a-direction)*speed*.13;
      const rr = r*(1+(wave+stretch)*strength);
      return [x+Math.cos(a)*rr, y+Math.sin(a)*rr];
    });
    const mid = (a: number[], b: number[]) => `${((a[0]+b[0])/2).toFixed(2)} ${((a[1]+b[1])/2).toFixed(2)}`;
    return `M${mid(points[71],points[0])}` + points.map((p,i)=>`Q${p[0].toFixed(2)} ${p[1].toFixed(2)} ${mid(p,points[(i+1)%72])}`).join('')+'Z';
  }

  function paint() {
    const strength = isReduced()?0:1;
    const d = shape(radius,phase,strength);
    aperture.setAttribute('d',d);
    rim.setAttribute('d',d);
    sheen.setAttribute('d',shape(Math.max(0,radius-5),phase+.07,strength));
    const edgeOpacity = isReduced()?0:clamp(radius/35)*(1-clamp((radius/Math.max(width,height)-.4)/.6));
    svg.style.opacity = String(edgeOpacity);
    drops.forEach((drop,i)=>{
      const a = i*2.4+phase*.2;
      const distance = radius*(1.08 + Math.sin(phase*1.4+i)*.035);
      drop.setAttribute('cx',String(x+Math.cos(a)*distance));
      drop.setAttribute('cy',String(y+Math.sin(a)*distance));
      drop.setAttribute('r',String(clamp(radius/40)*(.9+(Math.sin(phase*2+i)+1)*1.5)));
    });
  }

  function tick(time: number) {
    frame=0;
    if(!visible || document.hidden) { lastTime=0; return; }
    const dt = Math.min(40, lastTime?time-lastTime:16.67);
    lastTime=time; phase+=dt/1000;
    const movement = 1-Math.exp(-dt/75);
    x+=(targetX-x)*movement; y+=(targetY-y)*movement;
    if(locked)targetRadius=fullRadius();
    radius+=(targetRadius-radius)*(1-Math.exp(-dt/(locked?180:130)));
    if(Math.abs(targetRadius-radius)<.2)radius=targetRadius;
    paint();
    // Ripple only while the pointer previews the outfit; settle both endpoints completely.
    if((preview && radius>.2)||Math.abs(targetRadius-radius)>.2||Math.hypot(targetX-x,targetY-y)>.2) frame=requestAnimationFrame(tick);
    else lastTime=0;
  }

  function wake() {
    if(isReduced()) {
      if(frame)cancelAnimationFrame(frame);
      frame=0; lastTime=0; preview=false;
      x=targetX; y=targetY; radius=locked?fullRadius():0;targetRadius=radius;paint();
    } else if(!frame && visible && !document.hidden) frame=requestAnimationFrame(tick);
  }

  function measure() {
    width=performer.clientWidth; height=performer.clientHeight;
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    // A touch/keyboard transition starts near the torso, not at the control's location.
    if(!preview){x=targetX=width*.56;y=targetY=height*.5;}
    if(locked)radius=targetRadius=fullRadius();
    paint();wake();
  }

  function clearPreview() { preview=false;targetRadius=locked?fullRadius():0;wake(); }

  hero.addEventListener('pointermove',e=>{
    if(!ready||locked||isReduced()||e.pointerType!=='mouse'||!hover.matches)return;
    if((e.target as HTMLElement).closest('a,button')){clearPreview();return;}
    const rect=performer.getBoundingClientRect();
    targetX=e.clientX-rect.left;targetY=e.clientY-rect.top;
    if(!preview && radius<1){x=targetX;y=targetY;}
    preview=true;targetRadius=clamp(innerWidth*.17,140,235);wake();
  });
  hero.addEventListener('pointerleave',clearPreview);
  hero.addEventListener('pointercancel',clearPreview);
  button.addEventListener('click',()=>{
    locked=!locked;preview=false;
    if(radius<1){x=targetX=width*.56;y=targetY=height*.5;}
    targetRadius=locked?fullRadius():0;
    performer.classList.toggle('outfit-full',locked);
    button.setAttribute('aria-pressed',String(locked));
    button.setAttribute('aria-label',locked?'Włącz podstawowy outfit tancerza':'Włącz turkusowy outfit tancerza');
    name.textContent=locked?'02 / TURQUOISE':'01 / STREET';
    wake();
  });
  new ResizeObserver(measure).observe(performer);
  new IntersectionObserver(([entry])=>{
    visible=entry.isIntersecting;
    if(!visible){if(frame)cancelAnimationFrame(frame);frame=0;lastTime=0;}
    else wake();
  }).observe(hero);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)wake();});
  Promise.all([...performer.querySelectorAll<HTMLImageElement>('img')].map(img=>img.decode())).then(()=>{
    ready=true;button.disabled=false;
  }).catch(()=>{name.textContent='OUTFIT NIEDOSTĘPNY';});
  measure();
  return { clearPreview, refreshMotion: ()=>{clearPreview();wake();} };
}
