import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDдолжности: DS.attr('number'),
  iDПодразделения: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  иНН: DS.attr('number'),
  номер_телефона: DS.attr('number'),
  снилс: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-diagramma-должности', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-diagramma-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDдолжности: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDПодразделения: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.iDПодразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер_телефона: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.номер_телефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снилс: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.снилс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-diagramma-сотрудник.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-diagramma-сотрудник', {
    iDдолжности: attr('I dдолжности', { index: 0 }),
    iDПодразделения: attr('I d подразделения', { index: 1 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-diagramma-сотрудник', {
    iDсотрудника: attr('IDсотрудника', { index: 0 }),
    iDдолжности: attr('I dдолжности', { index: 1 }),
    iDПодразделения: attr('I d подразделения', { index: 2 }),
    фИО: attr('ФИО', { index: 3 })
  });
};
