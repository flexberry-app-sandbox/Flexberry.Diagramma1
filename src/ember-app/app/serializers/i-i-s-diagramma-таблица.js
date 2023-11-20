import { Serializer as ТаблицаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-diagramma-таблица';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТаблицаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
