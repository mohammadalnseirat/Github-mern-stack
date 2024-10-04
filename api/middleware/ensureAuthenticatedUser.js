export async function ensureAuthenticatedUser(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(process.env.CLIENT_BASE_URI + "/login");
  }
}
