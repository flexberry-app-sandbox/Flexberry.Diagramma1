import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Diagramma',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Diagramma',
          title: 'Diagramma'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
