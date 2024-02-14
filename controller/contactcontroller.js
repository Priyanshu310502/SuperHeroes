import contactModel from "../modules/contactschema.js";
class contactController {
    static contactDoc = async (req, res,) => {
        try {
            const { name, email, message } = req.body
            const newuser = new contactModel({
                name: name,
                email: email,
                message: message
            });
            await newuser.save();
            res.redirect("/index")
        } catch (error) {
            console.log(error)
        }
    }
}

export { contactController };