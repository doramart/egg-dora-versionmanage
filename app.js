const path = require('path');
class AppBootHook {


    constructor(app) {
        this.app = app;
    }

    beforeStart() {

    }

    configWillLoad() {

        this.app.config.middleware.push('versionManageRouter');

    }

    async didLoad() {
        // 数据模型初始化
        var modelsPath = path.resolve(__dirname, './app/model');
        this.app.initExtendModel(modelsPath);
    }

    async willReady() {

    }
}

module.exports = AppBootHook;