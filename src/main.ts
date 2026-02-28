import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { Widget } from './app/widget/widget';

(async () => {
  const appRef = await createApplication();
  const widgetElement = createCustomElement(Widget, { injector: appRef.injector });
  customElements.define('app-widget', widgetElement);
})();
