import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplementsController } from "./controllers/ListUserSendComplementsController";
import { ListUserReceiveComplementsController } from "./controllers/ListUserReceiveComplementsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplementsController = new ListUserSendComplementsController();
const listUserReceiveComplementsController = new ListUserReceiveComplementsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplementsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplementsController.handle);

export { router }