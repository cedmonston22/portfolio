export const DRONE_INTRO_SEEN_KEY = "drone-intro-seen";
export const DRONE_INTRO_ATTR = "droneIntro";
export const DRONE_INTRO_FALLBACK_MS = 10000;

export const DRONE_INTRO_GATE = `(function(){try{
var d=document.documentElement;
if(location.pathname!=="/")return;
if(!matchMedia("(min-width: 1024px)").matches)return;
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
if(localStorage.getItem("${DRONE_INTRO_SEEN_KEY}"))return;
d.dataset.${DRONE_INTRO_ATTR}="pending";
setTimeout(function(){if(d.dataset.${DRONE_INTRO_ATTR}==="pending")delete d.dataset.${DRONE_INTRO_ATTR};},${DRONE_INTRO_FALLBACK_MS});
}catch(e){}})();`;
