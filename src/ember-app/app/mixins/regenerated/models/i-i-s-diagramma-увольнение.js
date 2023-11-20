import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDсотрдника: DS.attr('number'),
  дата: DS.attr('date'),
  основание: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-diagramma-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-diagramma-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  основание: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.основание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-diagramma-увольнение.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-diagramma-увольнение', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-diagramma-увольнение', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });
};
