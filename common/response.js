// Response modules
const Response = {

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

    success: (res, data, status = 200) => {
        res.status(status);
        return res.json({
            status: true,
            data
        });
    },

    serverError: (res, err) => {
        res.status(500);
        return res.json(Response.error(err || 'Internal Server Error.', 500));
    },

    notFound: (res, err) => {
        res.status(404);
        return res.json(Response.error(err || 'Resource Not Found.', 404));
    },

    unauthorized: (res, err) => {
        res.status(401);
        return res.json(Response.error(err || 'Un-Authorised Access.', 401));
    },

    forbidden: (res, err) => {
        res.status(403);
        return res.json(Response.error(err || 'Forbidden.', 403));
    },

    badRequest: (res, err) => {
        res.status(400);
        return res.json(Response.error(err || 'Bad Request', 400));
    },

    conflict: (res, err) => {
        res.status(409);
        return res.json(Response.error(err || 'conflict', 409));
    }
};

module.exports = Response;
