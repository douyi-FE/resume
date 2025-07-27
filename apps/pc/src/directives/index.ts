import type { App } from 'vue';
import focus from './focus';
import highlight from './hightlight';
import clickOut from './click-out';
import permission from './permission';
import lazy from './lazy';

export default function registerDirectives(app: App) {
  app.directive('focus', focus);
  app.directive('highlight', highlight);
  app.directive('click-out', clickOut);
  app.directive('permission', permission);
  app.directive('lazy', lazy);
};