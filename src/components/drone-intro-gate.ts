export const DRONE_INTRO_SEEN_KEY = "drone-intro-seen";
export const DRONE_INTRO_ATTR = "droneIntro";
export const DRONE_INTRO_SKIP_ATTR = "droneIntroSkip";
export const DRONE_INTRO_FALLBACK_MS = 10000;

export const DRONE_INTRO_GATE = `(function(){try{
var d=document.documentElement;
function skip(r){d.dataset.${DRONE_INTRO_SKIP_ATTR}=r;}
if(location.pathname!=="/")return skip("not the home page");
if(!matchMedia("(min-width: 1024px)").matches)return skip("window narrower than 1024px ("+innerWidth+"px)");
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return skip("reduced motion is on");
if(localStorage.getItem("${DRONE_INTRO_SEEN_KEY}"))return skip("already seen (localStorage ${DRONE_INTRO_SEEN_KEY})");
d.dataset.${DRONE_INTRO_ATTR}="pending";
setTimeout(function(){if(d.dataset.${DRONE_INTRO_ATTR}==="pending")delete d.dataset.${DRONE_INTRO_ATTR};},${DRONE_INTRO_FALLBACK_MS});
}catch(e){}})();`;
