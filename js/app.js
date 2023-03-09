let tl = gsap.timeline({ defaults: { duration: 0.75, ease: Power3.easeOut } });

tl.fromTo(".image-container", { scale: 1.35, borderRadius: "0rem" }, { scale: 1, borderRadius: "2rem", duration: 2.5, ease: Elastic.easeOut.config(1.5, 1) });

tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta4", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");

// text to letter
const waveTextField = document.getElementById("wave-text");
const waveText = waveTextField.innerText;
waveTextField.innerText = "";

for (const letter of waveText) {
  waveTextField.innerHTML += `<span class="letter d-inline-block">${letter}</span>`;
}

// wave animation
gsap.fromTo(".letter", { y: "100%" }, { y: 0, delay: 2, stagger: 0.08, ease: Back.easeOut.config(3) });
