Template.registerHelper('queryParams', section => {
  return {
    section,
  };
});

const offsetAdjust = 30;

Template.navbar.onRendered(function navbarRendered() {
  const $navbar = this.$('.navbar');
  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: $navbar.outerHeight() + offsetAdjust,
  });
  //
  $('body').on('activate.bs.scrollspy', event => {
    const hash = $(event.target).find('.hidden').attr('href');
    const hashValue = hash.substring(1);
    //
    if (hashValue !== FlowRouter.getQueryParam('section')) {
      FlowRouter.cancelScrolling();
      FlowRouter.go('home', {}, {
        section: hashValue,
      });
    }
  });
});

Template.navbar.events({
  'shown.bs.collapse'(event, template) {
    const $navbar = template.$('.navbar');
    $('body').data('bs.scrollspy').options.offset = $navbar.outerHeight() + offsetAdjust;
  },
  'hidden.bs.collapse'(event, template) {
    const $navbar = template.$('.navbar');
    $('body').data('bs.scrollspy').options.offset = $navbar.outerHeight() + offsetAdjust;
    //
    if (template.scrollTo) {
      FlowRouter.go('home', {}, {
        section: template.scrollTo,
      });
      template.scrollTo = false;
    }
  },
  'click .navbar-header a'(event, template) {
    if (template.$('.navbar-collapse').hasClass('in')) {
      template.$('.navbar-collapse').collapse('hide');
    }
  },
  'click .navbar-collapse.in a'(event, template) {
    const hash = $(event.target).closest('li').find('.hidden').attr('href');
    if (hash) {
      event.preventDefault();
      const hashValue = hash.substring(1);
      template.scrollTo = hashValue;
      template.$('.navbar-collapse').collapse('hide');
    }
  },
});
