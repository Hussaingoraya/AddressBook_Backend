const addressBookModel = require("../Models/addressbook_models");

const getAddressBook = async (req, res) => {
  try {
    const getbook = await addressBookModel.find();
    res.json(getbook);
  } catch (error) {
    res.status(400).json("Error while getting books", error);
  }
};

const postAddressBook = async (req, res) => {
  try {
    const postBook = new addressBookModel(req.body);
    const saveaddress = await postBook.save();
    res.status(200).json(saveaddress);
  } catch (error) {
    console.log(error);
  }
};

const updateAddressBook = async (req, res) => {
  try {
    const updateAddress = await addressBookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateAddress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteAddressBook = async (req, res) => {
  try {
    const deleteBook = await addressBookModel.findByIdAndDelete(req.params.id);
    res.json(deleteBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAddressBook,
  postAddressBook,
  updateAddressBook,
  deleteAddressBook,
};
