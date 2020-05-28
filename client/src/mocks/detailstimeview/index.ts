export let mock_detailstimeview = {
    entries_comments: async function entries_comments(params) {
        await this.go("detailstimecomments");
    },
    reject: async function reject(params) {
        await this.go("detailstimeview");
    },
    approve: async function approve(params) {
        await this.go("detailstimeview");
    },
    back: async function back(params) {
        await this.go('home');
    },
    home: async function home(params) {
        await this.go('home');
    }
};
