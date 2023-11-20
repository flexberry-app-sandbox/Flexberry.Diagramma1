import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  дата: DS.attr('date'),
  ставка: DS.attr('number'),
  организация: DS.belongsTo('i-i-s-diagramma-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-diagramma-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  ставка: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.ставка.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-diagramma-прием.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриемE', 'i-i-s-diagramma-прием', {
    дата: attr('Дата', { index: 0 }),
    ставка: attr('Ставка', { index: 1 })
  });

  modelClass.defineProjection('ПриемL', 'i-i-s-diagramma-прием', {
    
  });
};
