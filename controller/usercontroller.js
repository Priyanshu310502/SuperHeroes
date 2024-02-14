import userModel from "../modules/userschema.js";

class usercontroller {
    static index = (req, res) => {
        const options = {
            title: 'Home'
        }
        res.render("index", options);
    };
    static registration = (req, res) => {
        const options = {
            title: 'registration'
        }
        res.render("registration", options);
    };
    static login = (req, res) => {
        const options = {
            title: 'Login'
        }
        res.render("login", options);
    };
    static about = (req, res) => {
        const options = {
            title: 'About'
        }
        res.render("about", options);
    };
    static next = (req, res) => {
        const options = {
            title: 'Next'
        }
        res.render("index", options);
    };
    static contact = (req, res) => {
        const options = {
            title: 'Contact'
        }
        res.render("contact", options);
    };
    static createDoc = async (req, res) => {
        try {
            const { name, email, password, adress } = req.body;
            const stuDoc = new userModel({
                name: name,
                email: email,
                password: password,
                adress: adress
            });
            await stuDoc.save();

            res.redirect("/login")

        } catch (error) {
            console.log(error)
        }


    }
    static verifylogin = (req, res, next) => {
        try {
            const { email, password } = req.body;
            const result = userModel.findOne({ email: email });
            if (result != null) {
                if (email == result.email && password === result.password) {
                    res.send(`succuss submit data${result}`)
                } else {
                    res.status(401).json('User not found')
                }

            } else {
                res.send("email or passwors not found")
            }
            // res.redirect('/index');
        } catch (error) {
            console.log(error)
        }

    }
}
export default usercontroller;