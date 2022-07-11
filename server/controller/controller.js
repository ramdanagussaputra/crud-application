const UserDB = require("../model/model.js");

exports.create = async function (req, res) {
  try {
    console.log("OK");
    if (!req.body)
      return res.status(400).send({
        message: "Cannot receive empty data. Please fill all the data",
      });

    const user = new UserDB({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });

    const data = await user.save(user);

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

exports.find = async function (req, res) {
  try {
    if (!req.body)
      return res.status(400).send({
        message: "Cannot receive empty data. Please fill all the data",
      });

    const id = req.query.id;

    if (id) {
      const data = await UserDB.findById(id);
      if (!data) return res.status(400).send({ message: "Account not found" });

      return res.send(data);
    }

    const data = await UserDB.find();
    if (!data) return res.status(400).send({ message: "Account not found" });

    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async function (req, res) {
  try {
    if (!req.body)
      return res.status(400).send({
        message: "Cannot receive empty data. Please fill all the data",
      });

    const id = req.params.id;

    const data = await UserDB.findByIdAndUpdate(id, req.body);
    if (!data) return res.status(400).send({ message: "Account not found" });

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async function (req, res) {
  if (!req.body)
    return res.status(400).send({
      message: "Cannot receive empty data. Please fill all the data",
    });

  const id = req.params.id;

  const data = await UserDB.findByIdAndDelete(id);
  if (!data) return res.send({ message: "Account not found" });

  res.send({ message: `Account with id: ${id} successfully delete` });
};
