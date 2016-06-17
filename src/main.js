import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-syncfusion-bridge', (syncfusion) => syncfusion.useAll());

  aurelia.start().then(() => aurelia.setRoot());
}
