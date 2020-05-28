export let mock_settings = {
    home: async function home(params) {
        await this.go('home');
    },
    login1: async function login1(params) {
        await this.go("loginexpensify");
    },
    login2: async function login2(params) {
        await this.go("loginsap");
    },
    login3: async function login3(params) {
        await this.go("loginsap");
    },
    login4: async function login4(params) {
        await this.go("loginpeoplesoft");
    },
    expensify_login: async function expensify_login(params) {
        await this.go("detailsexpensify1");
    }
};
