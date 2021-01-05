import { Contact } from "../models";

class contactController {
  static async createContact(req, res) {
    const { name, number } = req.body;
    const addContact = await Contact.create({
      name,
      number,
    });
    console.log("successful");
    res
      .status(201)
      .json({ message: "Your contact has been created", addContact });
  }

  static async getAllContacts(req, res) {
    const getAllContacts = await Contact.findAll();

    res.status(201).json({
      message: "Successful",
      contacts: getAllContacts,
    });
  }

  static async getOneContact(req, res) {
    const { id } = req.params;
    const getOneContact = await Contact.findOne({
      where: {
        id,
      },
    });
    if (!getOneContact) {
      return res.status(409).json({ message: "Contact does not exist" });
    }
    res.status(200).json({
      message: "Success",
      comment: getOneContact,
    });
  }

  static async deleteContact(req, res) {
    const { id } = req.params;
    await Contact.destroy({
      where: { id },
    });

    res.status(200).json({
      message: "Successfully deleted a contact",
    });
  }

  static async editContact(req, res) {
    const { contact } = req.body;
    const { id } = req.params;
    await Contact.update({ contact }, { where: { id } });

    res.status(200).json({
      message: "Successfully updated a contact",
    });
  }
}

export default contactController;
