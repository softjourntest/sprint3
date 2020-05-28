export let mock_home = {
    approvals_details: async function approvals_details(params) {
        let regex = new RegExp("\\[(.*?)\\]");
        let match = params.action.match(regex);
        let index = parseInt(match[1]);
        if (index === 0) {
            await this.go("detailssalesforceoppor");
        }
        else if (index === 1) {
            await this.go("detailssap");
        }
        else if (index === 2) {
            await this.go("detailsexpensify1");
        }
        else if (index === 3) {
            await this.go("detailstimeview");
        }
    },
    approvals_approve: async function approvals_approve(params) {
        let regex = new RegExp("\\[(.*?)\\]");
        let match = params.action.match(regex);
        let index = parseInt(match[1]);
        this.data.approvals[index].resolved = true;
        this.data.approvals[index].approved = true;
        this.data.approvals[index].rejected = false;
    },
    approvals_reject: async function approvals_reject(params) {
        let regex = new RegExp("\\[(.*?)\\]");
        let match = params.action.match(regex);
        let index = parseInt(match[1]);
        await this.go("commentsmodal");
        setTimeout(() => this.dataService.savedIndex = index);
    }
};
