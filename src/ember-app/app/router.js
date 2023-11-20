import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-diagramma-график-l');
  this.route('i-i-s-diagramma-график-e',
  { path: 'i-i-s-diagramma-график-e/:id' });
  this.route('i-i-s-diagramma-график-e.new',
  { path: 'i-i-s-diagramma-график-e/new' });
  this.route('i-i-s-diagramma-должности-l');
  this.route('i-i-s-diagramma-должности-e',
  { path: 'i-i-s-diagramma-должности-e/:id' });
  this.route('i-i-s-diagramma-должности-e.new',
  { path: 'i-i-s-diagramma-должности-e/new' });
  this.route('i-i-s-diagramma-организация-l');
  this.route('i-i-s-diagramma-организация-e',
  { path: 'i-i-s-diagramma-организация-e/:id' });
  this.route('i-i-s-diagramma-организация-e.new',
  { path: 'i-i-s-diagramma-организация-e/new' });
  this.route('i-i-s-diagramma-подразделения-l');
  this.route('i-i-s-diagramma-подразделения-e',
  { path: 'i-i-s-diagramma-подразделения-e/:id' });
  this.route('i-i-s-diagramma-подразделения-e.new',
  { path: 'i-i-s-diagramma-подразделения-e/new' });
  this.route('i-i-s-diagramma-прием-l');
  this.route('i-i-s-diagramma-прием-e',
  { path: 'i-i-s-diagramma-прием-e/:id' });
  this.route('i-i-s-diagramma-прием-e.new',
  { path: 'i-i-s-diagramma-прием-e/new' });
  this.route('i-i-s-diagramma-расчет-l');
  this.route('i-i-s-diagramma-расчет-e',
  { path: 'i-i-s-diagramma-расчет-e/:id' });
  this.route('i-i-s-diagramma-расчет-e.new',
  { path: 'i-i-s-diagramma-расчет-e/new' });
  this.route('i-i-s-diagramma-сотрудник-l');
  this.route('i-i-s-diagramma-сотрудник-e',
  { path: 'i-i-s-diagramma-сотрудник-e/:id' });
  this.route('i-i-s-diagramma-сотрудник-e.new',
  { path: 'i-i-s-diagramma-сотрудник-e/new' });
  this.route('i-i-s-diagramma-увольнение-l');
  this.route('i-i-s-diagramma-увольнение-e',
  { path: 'i-i-s-diagramma-увольнение-e/:id' });
  this.route('i-i-s-diagramma-увольнение-e.new',
  { path: 'i-i-s-diagramma-увольнение-e/new' });
});

export default Router;
