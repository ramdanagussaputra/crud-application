const axios = require("axios");

exports.homeRoute = async function (req, res) {
  try {
    const responseAPI = await axios.get("http://localhost:3000/api/users/");

    res.render("index", { user: responseAPI.data });
  } catch (err) {
    res.send(err);
  }
};

exports.addUserRoute = function (req, res) {
  res.render("add_user");
};

exports.updateRoute = async function (req, res) {
  try {
    const responseAPI = await axios.get(`http://localhost:3000/api/users/`, {
      params: { id: req.query.id },
    });

    console.log(responseAPI.data);
    res.render("update_user", { user: responseAPI.data });
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
};
