import template from './ih-faq-detail.html.twig';

const { Component, Mixin } = Shopware;

Component.register('ih-faq-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('notification')
    ],

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    data() {
        return {
            question: null,
            isLoading: false,
            processSuccess: false,
            repository: null,
        };
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('ih_faq');
            this.getQuestion();
        },

        getQuestion() {
            this.repository.get(this.$route.params.id, Shopware.Context.api).then((entity) => {
                this.question = entity;
            });
        },

        onClickSave() {
            this.isLoading = true;

            this.repository.save(this.question, Shopware.Context.api).then(() => {
                this.getQuestion();
                this.isLoading = false;
                this.processSuccess = true;
            }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('ih-faq.detail.errorTitle'),
                    message: exception
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        }
    }
});