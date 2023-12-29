"use strict";

const tl = gsap.timeline();
tl.from(".average", { scale: 0 })
  .from(".average-number", {
    opacity: 0,
    scale: 0,
    ease: "bounce",
    duration: 1,
    stagger: 0.5,
  })
  .from(".result", { scale: 0, stagger: 0.2 });
