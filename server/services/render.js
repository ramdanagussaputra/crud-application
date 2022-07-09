exports.homeRoute = function (req, res) {
  res.render("index");
};

exports.addUserRoute = function (req, res) {
  res.render("add_user");
};

exports.updateRoute = function (req, res) {
  res.render("update_user");
};
