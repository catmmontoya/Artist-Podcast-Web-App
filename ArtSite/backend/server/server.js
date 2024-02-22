import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";
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

app.get("/items", handlerFunctions.getAllItems);
app.post("/auth", handlerFunctions.logIn);
app.post("/addItem", handlerFunctions.addItem);
app.post("/delete", handlerFunctions.deleteItem);

//Run the server
ViteExpress.listen(app, 8000, () =>
  console.log("We are live at http://localhost:8000")
);
