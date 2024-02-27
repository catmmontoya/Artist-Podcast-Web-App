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
app.get("/api/items", handlerFunctions.getAllItems);
app.post("/login", handlerFunctions.logIn);
app.post("/addItem", handlerFunctions.addItem);
app.delete("/delete", handlerFunctions.deleteItem);
app.get("/logout", handlerFunctions.logOut);
app.get("/api/session-check", handlerFunctions.sessionCheck);
app.get("/blog", handlerFunctions.getAllBlogPosts);
app.get("/podcast", handlerFunctions.getAllEpisodes);
app.post("/user/create", handlerFunctions.createUser);

//Run the server
ViteExpress.listen(app, 8000, () =>
  console.log("We are live at http://localhost:8000")
);
