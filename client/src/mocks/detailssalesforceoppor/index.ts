export let mock_detailssalesforceoppor = {
    reject: async function reject(params) {
        await this.go("detailssalesforceoppor");
    },
    approve: async function approve(params) {
        await this.go("detailssalesforceoppor");
    },
    back: async function back(params) {
        await this.go('home');
    }
};
