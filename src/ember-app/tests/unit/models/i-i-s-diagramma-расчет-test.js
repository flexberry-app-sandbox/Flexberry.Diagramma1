import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-diagramma-расчет', 'Unit | Model | i-i-s-diagramma-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-diagramma-график',
    'model:i-i-s-diagramma-должности',
    'model:i-i-s-diagramma-организация',
    'model:i-i-s-diagramma-подразделения',
    'model:i-i-s-diagramma-прием',
    'model:i-i-s-diagramma-расчет',
    'model:i-i-s-diagramma-сотрудник',
    'model:i-i-s-diagramma-таблица',
    'model:i-i-s-diagramma-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
