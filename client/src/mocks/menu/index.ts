export let mock_menu = { home: async function home(params) {
        await this.go('home');
    }, settings: async function settings(params) {
        await this.go("settings");
    } };
