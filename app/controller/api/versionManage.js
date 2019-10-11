/*
 * @Author: doramart 
 * @Date: 2019-09-23 14:44:21 
 * @Last Modified by: doramart
 * @Last Modified time: 2019-09-23 14:55:52
 */



let VersionManageController = {

    async list(ctx) {

        try {

            let client = ctx.query.client;
            let queryObj = {};

            if (client) {
                if (client != '0' && client != '1') {
                    throw new Error(ctx.__('validate_error_params'));
                } else {
                    queryObj.client = client;
                }
            }


            let versionManageList = await ctx.service.versionManage.find({
                isPaging: '0'
            }, {
                query: queryObj
            });

            ctx.helper.renderSuccess(ctx, {
                data: versionManageList[0]
            });

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }
    },


    async getOne(ctx) {

        try {
            let _id = ctx.query.id;

            let targetUser = await ctx.service.versionManage.item(ctx, {
                query: {
                    _id: _id
                }
            });

            ctx.helper.renderSuccess(ctx, {
                data: targetUser
            });

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }

    }


}

module.exports = VersionManageController;