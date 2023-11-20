import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  заработок_год: DS.attr('number'),
  пособие: DS.attr('number'),
  срзаработок: DS.attr('number'),
  empty: DS.belongsTo('i-i-s-diagramma-расчет', { inverse: 'empty', async: false })
});

export let ValidationRules = {
  заработок_год: {
    descriptionKey: 'models.i-i-s-diagramma-таблица.validations.заработок_год.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пособие: {
    descriptionKey: 'models.i-i-s-diagramma-таблица.validations.пособие.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срзаработок: {
    descriptionKey: 'models.i-i-s-diagramma-таблица.validations.срзаработок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-diagramma-таблица.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблицаE', 'i-i-s-diagramma-таблица', {
    пособие: attr('Пособие', { index: 0 })
  });

  modelClass.defineProjection('ТаблицаL', 'i-i-s-diagramma-таблица', {
    пособие: attr('Пособие', { index: 0 })
  });
};
