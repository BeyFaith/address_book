import { Router } from "express";
import contactController from "../controllers";
import contactValidation from "../middlewares";

const contactRouter = new Router();

contactRouter
  .post("/create", contactValidation, contactController.createContact)
  .get("/contacts/:id", contactController.getOneContact)
  .get("/contacts", contactController.getAllContacts)
  .delete("/contacts/:id", contactController.deleteContact)
  .put("/contacts/:id", contactValidation, contactController.editContact)
  .get('/', (req, res) => {
    res.status(200).send({message: 'welcome to my api :)'})
  })

export default contactRouter;
