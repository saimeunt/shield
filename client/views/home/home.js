Template.home.onRendered(function homeRendered() {
  Tracker.afterFlush(() => {
    Meteor.setTimeout(() => {
      this.autorun(() => {
        const section = FlowRouter.getQueryParam('section');
        if (section) {
          FlowRouter.scrollToHash(`#${section}`);
        }
      });
    }, 200);
  });
});
