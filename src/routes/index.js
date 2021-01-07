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
  

export default contactRouter;
