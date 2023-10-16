import './page/ih-faq-list';
import './page/ih-faq-detail';
import './page/ih-faq-create';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

Module.register('ih-faq', {
    type: 'plugin',
    name: 'FAQ',
    title: 'ih-faq.general.mainMenuItemGeneral',
    description: 'ih-faq.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'regular-question-circle',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'ih-faq-list',
            path: 'index'
        },
        detail: {
            component: 'ih-faq-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'ih.faq.index'
            }
        },
        create: {
            component: 'ih-faq-create',
            path: 'create',
            meta: {
                parentPath: 'ih.faq.index'
            }
        }
    },

    navigation: [{
        label: 'ih-faq.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'ih.faq.index',
        icon: 'default-shopping-paper-bag-product',
        parent: 'sw-content',
        position: 100
    }]
});
