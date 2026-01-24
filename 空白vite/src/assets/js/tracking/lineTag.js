function trackWorksClickEvent() {
  _lt('send', 'cv', {
    type: 'worksClickEvent'
  }, ['37785e3e-a9bd-41f4-ad55-be9fb5721b99']);

  devConsole('Works click event tracked');
};

function trackConversionEvent() {
  _lt('send', 'cv', {
    type: 'Conversion'
  }, ['37785e3e-a9bd-41f4-ad55-be9fb5721b99']);

  devConsole(`conversion event tracked`);
}

function worksClickTracking() {
  document.addEventListener('click', function (event) {
    const thumbBtnMore = event.target.closest('[data-btn-name="thumbBtnMore"]');
    const carouselBtnLink = event.target.closest('[data-btn-name="carouselBtnMore"]');

    devConsole('[STRT]事件追蹤與觀察===================');
    devConsole("event.type", event.type);
    devConsole("event.target", event.target);
    devConsole('[END]事件追蹤與觀察===================');

    if (thumbBtnMore) {
      trackWorksClickEvent();
    }

    if (carouselBtnLink) {
      trackWorksClickEvent();
    }
  });
}
export { trackConversionEvent, worksClickTracking };