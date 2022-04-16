console.clear();
let dur = 1.2;
// const tl = gsap.timeline();
document.querySelector("#masterTextPath").textContent = "「探してたｘ見つけた」"
document.querySelector("#masterTextPath2").textContent = "が"
document.querySelector("#masterTextPath3").textContent = "ココにある"
gsap.from("#masterTextPath,#masterTextPath2,#masterTextPath3", {
  duration: dur,
  // opacity: 0,
  attr: { startOffset: "-120%" },
  ease: "power1.inOut"
});
