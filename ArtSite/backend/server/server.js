import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";
import { User, Item, Episode } from "../database/model";

//create express instance
const app = express();

//set up middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "myPrecious",
    saveUninitialized: false,
    resave: false,
  })
);

//Routes
// function loginRequired(req, res) => {
//   if (!req.session.userId) {
//     res.status(401).json({ error: 'Must log in'})
//   } else {
//     next()
//   }
// }

app.get("items", handlerFunctions.getAllItems);

app.post("/auth", async (req, res) => {
  const { email, password } = res.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && user.password === password) {
    req.session.userId = user.userId;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

//Run the server
ViteExpress.listen(app, 8000, () =>
  console.log("We are live at http://localhost:8000")
);
