const { Component } = Shopware;

Component.extend('ih-faq-create', 'ih-faq-detail', {
    methods: {
        getQuestion() {
            this.question = this.repository.create(Shopware.Context.api);
        },

        onClickSave() {
            this.isLoading = true;
            this.repository.save(this.question, Shopware.Context.api).then(() => {
                this.isLoading = false;
                this.$router.push({ name: 'ih.faq.detail', params: { id: this.question.id } });
            }).catch((exception) => {
                this.isLoading = false;
                this.createNotificationError({
                    title: this.$tc('ih-faq.detail.errorTitle'),
                    message: exception
                });
            });
        }
    }
});