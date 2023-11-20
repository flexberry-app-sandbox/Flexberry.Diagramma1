import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDiagrammaГрафикLForm from './forms/i-i-s-diagramma-график-l';
import IISDiagrammaДолжностиLForm from './forms/i-i-s-diagramma-должности-l';
import IISDiagrammaОрганизацияLForm from './forms/i-i-s-diagramma-организация-l';
import IISDiagrammaПодразделенияLForm from './forms/i-i-s-diagramma-подразделения-l';
import IISDiagrammaПриемLForm from './forms/i-i-s-diagramma-прием-l';
import IISDiagrammaРасчетLForm from './forms/i-i-s-diagramma-расчет-l';
import IISDiagrammaСотрудникLForm from './forms/i-i-s-diagramma-сотрудник-l';
import IISDiagrammaУвольнениеLForm from './forms/i-i-s-diagramma-увольнение-l';
import IISDiagrammaГрафикEForm from './forms/i-i-s-diagramma-график-e';
import IISDiagrammaДолжностиEForm from './forms/i-i-s-diagramma-должности-e';
import IISDiagrammaОрганизацияEForm from './forms/i-i-s-diagramma-организация-e';
import IISDiagrammaПодразделенияEForm from './forms/i-i-s-diagramma-подразделения-e';
import IISDiagrammaПриемEForm from './forms/i-i-s-diagramma-прием-e';
import IISDiagrammaРасчетEForm from './forms/i-i-s-diagramma-расчет-e';
import IISDiagrammaСотрудникEForm from './forms/i-i-s-diagramma-сотрудник-e';
import IISDiagrammaУвольнениеEForm from './forms/i-i-s-diagramma-увольнение-e';
import IISDiagrammaГрафикModel from './models/i-i-s-diagramma-график';
import IISDiagrammaДолжностиModel from './models/i-i-s-diagramma-должности';
import IISDiagrammaОрганизацияModel from './models/i-i-s-diagramma-организация';
import IISDiagrammaПодразделенияModel from './models/i-i-s-diagramma-подразделения';
import IISDiagrammaПриемModel from './models/i-i-s-diagramma-прием';
import IISDiagrammaРасчетModel from './models/i-i-s-diagramma-расчет';
import IISDiagrammaСотрудникModel from './models/i-i-s-diagramma-сотрудник';
import IISDiagrammaТаблицаModel from './models/i-i-s-diagramma-таблица';
import IISDiagrammaУвольнениеModel from './models/i-i-s-diagramma-увольнение';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-diagramma-график': IISDiagrammaГрафикModel,
    'i-i-s-diagramma-должности': IISDiagrammaДолжностиModel,
    'i-i-s-diagramma-организация': IISDiagrammaОрганизацияModel,
    'i-i-s-diagramma-подразделения': IISDiagrammaПодразделенияModel,
    'i-i-s-diagramma-прием': IISDiagrammaПриемModel,
    'i-i-s-diagramma-расчет': IISDiagrammaРасчетModel,
    'i-i-s-diagramma-сотрудник': IISDiagrammaСотрудникModel,
    'i-i-s-diagramma-таблица': IISDiagrammaТаблицаModel,
    'i-i-s-diagramma-увольнение': IISDiagrammaУвольнениеModel
  },

  'application-name': 'Diagramma',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Diagramma',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Diagramma',
          title: 'Diagramma'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        diagramma: {
          caption: 'Diagramma',
          title: 'Diagramma',
          'i-i-s-diagramma-прием-l': {
            caption: 'Прием',
            title: ''
          },
          'i-i-s-diagramma-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-diagramma-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-diagramma-график-l': {
            caption: 'График',
            title: ''
          },
          'i-i-s-diagramma-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-diagramma-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-diagramma-увольнение-l': {
            caption: 'Увольнение',
            title: ''
          },
          'i-i-s-diagramma-расчет-l': {
            caption: 'Расчет',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-diagramma-график-l': IISDiagrammaГрафикLForm,
    'i-i-s-diagramma-должности-l': IISDiagrammaДолжностиLForm,
    'i-i-s-diagramma-организация-l': IISDiagrammaОрганизацияLForm,
    'i-i-s-diagramma-подразделения-l': IISDiagrammaПодразделенияLForm,
    'i-i-s-diagramma-прием-l': IISDiagrammaПриемLForm,
    'i-i-s-diagramma-расчет-l': IISDiagrammaРасчетLForm,
    'i-i-s-diagramma-сотрудник-l': IISDiagrammaСотрудникLForm,
    'i-i-s-diagramma-увольнение-l': IISDiagrammaУвольнениеLForm,
    'i-i-s-diagramma-график-e': IISDiagrammaГрафикEForm,
    'i-i-s-diagramma-должности-e': IISDiagrammaДолжностиEForm,
    'i-i-s-diagramma-организация-e': IISDiagrammaОрганизацияEForm,
    'i-i-s-diagramma-подразделения-e': IISDiagrammaПодразделенияEForm,
    'i-i-s-diagramma-прием-e': IISDiagrammaПриемEForm,
    'i-i-s-diagramma-расчет-e': IISDiagrammaРасчетEForm,
    'i-i-s-diagramma-сотрудник-e': IISDiagrammaСотрудникEForm,
    'i-i-s-diagramma-увольнение-e': IISDiagrammaУвольнениеEForm
  },

});

export default translations;
