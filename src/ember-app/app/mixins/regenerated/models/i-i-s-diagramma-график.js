import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDсотрдника: DS.attr('number'),
  дата: DS.attr('date'),
  кол_часов: DS.attr('number'),
  причина: DS.attr('string'),
  явка: DS.attr('boolean'),
  сотрудник: DS.belongsTo('i-i-s-diagramma-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кол_часов: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.кол_часов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  явка: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.явка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-diagramma-график.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-diagramma-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });

  modelClass.defineProjection('ГрафикL', 'i-i-s-diagramma-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });
};
