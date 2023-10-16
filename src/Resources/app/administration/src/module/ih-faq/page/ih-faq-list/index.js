import template from './ih-faq-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('ih-faq-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            repository: null,
            questions: null
        };
    },

    metaInfo(){
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return this.getColumns();
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('ih_faq');

            this.repository.search(new Criteria(), Shopware.Context.api).then((result) => {
                this.questions = result;
            });

            console.log(this.repository);
        },

        getColumns() {
            return [{
                property: 'question',
                label: this.$tc('ih-faq.list.columnQuestion'),
                routerLink: 'ih.faq.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true,
            }, {
                property: 'answer',
                label: this.$tc('ih-faq.list.columnAnswer'),
                inlineEdit: 'string',
                allowResize: true,
            }];
        }
    }
});
