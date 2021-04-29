module.exports = {
    ensureAuth: function (request, respond, next) {
        if (request.isAuthenticated()) {
            return next();
        } else {
            respond.redirect("/");
        }
    },
    ensureGuest: function (request, respond, next) {
        if (!request.isAuthenticated()) {
            return next();
        } else {
            respond.redirect("/dashboard");
        }
    },
};