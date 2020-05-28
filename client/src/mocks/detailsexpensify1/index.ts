export let mock_detailsexpensify1 = {
    categoryOne_details: async function categoryOne_details(params) {
        await this.go("detailsexpensify2");
    },
    reject: async function reject(params) {
        await this.go("commentsmodal");
    },
    approve: async function approve(params) {
        await this.go("detailsexpensify1");
    },
    back: async function back(params) {
        await this.go('home');
    }
};
