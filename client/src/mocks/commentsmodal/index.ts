export let mock_commentsmodal = {
    cancel: async function cancel(params) {
        await this.go('home');
    },
    submit: async function submit(params) {
        await this.go('home');
    }
};
