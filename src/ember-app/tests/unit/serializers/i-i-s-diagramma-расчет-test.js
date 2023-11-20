import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-diagramma-расчет', 'Unit | Serializer | i-i-s-diagramma-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-diagramma-расчет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
