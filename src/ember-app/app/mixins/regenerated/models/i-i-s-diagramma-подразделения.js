import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDподразделения: DS.attr('number'),
  наименование: DS.attr('number')
});

export let ValidationRules = {
  iDподразделения: {
    descriptionKey: 'models.i-i-s-diagramma-подразделения.validations.iDподразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-diagramma-подразделения.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПодразделенияE', 'i-i-s-diagramma-подразделения', {
    
  });

  modelClass.defineProjection('ПодразделенияL', 'i-i-s-diagramma-подразделения', {
    
  });
};
