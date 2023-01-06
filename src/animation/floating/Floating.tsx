import gsap from "gsap";

// loop through all the dots and feed each to RandomFloat()
gsap.utils.toArray(".dot").forEach(RandomFloat);

export function RandomFloat(element: any) {
  gsap.to(element, {
    x: 'random(-20, 20, 5)',
    y: 'random(-20, 10, 3)',
    ease: "sine.inOut",
    duration: gsap.utils.random([2, 4]),
    onComplete: () => RandomFloat(element)
  });
}