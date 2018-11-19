// utils modules
const Utils = {

    error: (err, statusCode) => {
        let json = {
            status: false,
            error: {
                msg: err
            }
        };
        
        console.error(err);
        return json;
    },

    success: (data) => {
        return {
            status: true,
            data
        }
    },

    responseSuccess: (res, data, status = 200) => {
        return res.json(Utils.success(data, status));
    },

    responseError: (res, err) => {
        res.status(500);
        return res.json(Utils.error(err || 'Internal Server Error.', 500));
    },

    responseErrorNotFound: (res, err) => {
        res.status(404);
        return res.json(Utils.error(err || 'Resource Not Found.', 404));
    },

    responseErrorUnauthorized: (res, err) => {
        res.status(401);
        return res.json(Utils.error(err || 'Un-Authorised Access.', 401));
    },

    responseErrorForbidden: (res, err) => {
        res.status(403);
        return res.json(Utils.error(err || 'Forbidden.', 403));
    },

    responseErrorBadRequest: (res, err) => {
        res.status(400);
        return res.json(Utils.error(err || 'Bad Request', 400));
    },

    responseErrorConflict: (res, err) => {
        res.status(409);
        return res.json(Utils.error(err || 'conflict', 409));
    }
};

module.exports = Utils;
