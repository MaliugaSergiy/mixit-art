import {TimelineMax} from 'gsap'
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

export default function animate() {
  const controller = new ScrollMagic.Controller();

  // build tween
  const tl = new TimelineMax();
  tl.fromTo(".main-hero-head-fuck", 4, {top: 300}, {top: 0})
    .fromTo(".main-hero-head-makeup", 2, {x: -400}, {x: 0}, '-=3.5')
    .fromTo(".main-hero-head-makeup", 4, {top: 700}, {top: 0}, '-=4')
    .fromTo(".main-hero-head-standards", 4, {top: 700}, {top: 0}, '-=4')
  // build scene
  const scene = new ScrollMagic.Scene({
    triggerElement: ".main-hero", 
    triggerHook: 0, 
    duration: '80%'
  })
  .setPin(".main-hero-head")
  .setTween(tl)
  .addTo(controller);


  
  const tlNav = new TimelineMax();
  tlNav.fromTo(".main-hero-nav-list", 2, {y: 200}, {y: 0})
       .fromTo(".main-hero-bottom-first", 2, {y: 100}, {y: 0}, '-=1.5')
       .fromTo(".main-hero-bottom-middle", 2, {y: 300}, {y: 0}, '-=1.5')

  // build scene
  const sceneNav = new ScrollMagic.Scene({
    triggerElement: ".main-hero-nav", 
    triggerHook: 1, 
    duration: '100%'
  })
  .setTween(tlNav)
  .addTo(controller);

  const tlBundle = new TimelineMax();
  tlBundle.fromTo(".h2-multiple", 2, {x: -300, opacity: 0}, {x: 0, opacity: 1})
       .fromTo(".h2-multiple .h2-outline", 2, {x: 600, opacity: 0}, {x: 0, opacity: 1}, '-=2')

  // build scene
  const sceneBundle = new ScrollMagic.Scene({
    triggerElement: ".main-bundle-title", 
    triggerHook: 0.9, 
    duration: '50%'
  })
  .setTween(tlBundle)
  .addTo(controller);

$('.main-product-title, .main-visagiste-head').each(function() {
  const tlTrigger = new TimelineMax();
  const $this = $(this)[0]
  tlTrigger.fromTo($(this), 1, {x: -300, opacity: 0}, {x: 0, opacity: 1})
  // build scene
  const sceneTrigger = new ScrollMagic.Scene({
    triggerElement: $this, 
    triggerHook: 0.9, 
    duration: '50%'
  })
  .setTween(tlTrigger)
  .addTo(controller);  
})

$('.main-product .main-product-list-item, .main-visagiste-stories-list, .main-visagiste-girls-item, .main-bundle .main-bundle-list-item').each(function() {
  const tlStagger = new TimelineMax();
  const $this = $(this)[0]

  tlStagger.fromTo($(this), 0.3, {opacity: 0}, {opacity: 1})
  // build scene
  const sceneStagger = new ScrollMagic.Scene({
    triggerElement: $this, 
    triggerHook: 0.7
  })
  .setTween(tlStagger)
  .addTo(controller);  
})





  
}