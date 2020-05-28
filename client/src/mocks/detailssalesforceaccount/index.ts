export let mock_detailssalesforceaccount = {
    approve: async function approve(params) {
        await this.go("detailssalesforceoppor");
    },
    reject: async function reject(params) {
        await this.go("detailssalesforceoppor");
    },
    home: async function home(params) {
        await this.go('home');
    },
    back: async function back(params) {
        await this.go('home');
    }
};
