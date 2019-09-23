const _ = require('lodash');
const versionManageManageController = require('../controller/manage/versionManage')
const versionManageApiController = require('../controller/api/versionManage')

module.exports = (options, app) => {

    return async function versionManageRouter(ctx, next) {

        let pluginConfig = app.config.doraVersionManage;
        await ctx.initPluginRouter(pluginConfig, versionManageManageController, versionManageApiController);
        await next();

    }

}