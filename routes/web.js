import Express from "express";
const router = Express.Router();
import StudentController from "../controller/usercontroller.js";
import { contactController } from "../controller/contactcontroller.js";


router.post('/SignUp', StudentController.createDoc);
router.get('/', StudentController.index);
router.get('/SignUp', StudentController.registration);
router.get('/login', StudentController.login);
router.get('/about', StudentController.about);
router.post('/login', StudentController.verifylogin);


router.get('/contact', StudentController.contact);
router.post('/contact', contactController.contactDoc)
router.get('/index', StudentController.index);
router.get('/', StudentController.next);








export default router;