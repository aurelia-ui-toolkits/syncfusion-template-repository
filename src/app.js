export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Syncfusion';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router',                         nav: true, title: 'Child Router' },
      { route: 'button',        name: 'button',       moduleId: 'samples/button/button',                nav: true, title: 'Button' }
    ]);

    this.router = router;
  }
}
