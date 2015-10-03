/*

Améliorations

- Modifier les textes et les images (HD)
- Optimisation SEO
- Implémenter la newsletter
- Utiliser un script JSON-LD pour stocker les méta données ?

*/

_.extend(FlowRouter, {
  cancelScrolling() {
    this.scrollingCancelled = true;
  },
  scrollToHash(hash) {
    if (this.scrollingCancelled) {
      this.scrollingCancelled = false;
      return;
    }
    const $section = $(hash);
    if ($section.length) {
      const sectionTop = $section.offset().top - $('.navbar').outerHeight();
      $('html, body').animate({
        scrollTop: sectionTop,
      }, 'slow');
    }
  },
});
