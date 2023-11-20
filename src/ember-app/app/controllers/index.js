import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.diagramma.caption'),
          title: i18n.t('forms.application.sitemap.diagramma.title'),
          children: [{
            link: 'i-i-s-diagramma-прием-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-прием-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-прием-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-diagramma-должности-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-должности-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-diagramma-подразделения-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-подразделения-l.title'),
            children: null
          }, {
            link: 'i-i-s-diagramma-график-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-график-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-график-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-diagramma-организация-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-организация-l.title'),
            children: null
          }, {
            link: 'i-i-s-diagramma-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-сотрудник-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-diagramma-увольнение-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-увольнение-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-увольнение-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-diagramma-расчет-l',
            caption: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.diagramma.i-i-s-diagramma-расчет-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})