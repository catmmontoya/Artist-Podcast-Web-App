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
app.post("/api/login", handlerFunctions.logIn);
app.post("/api/addItem", handlerFunctions.addItem);
app.delete("/api/delete/:itemId", handlerFunctions.deleteItem);
app.get("/api/logout", handlerFunctions.logOut);
app.get("/api/session-check", handlerFunctions.sessionCheck);
app.get("/api/blog", handlerFunctions.getAllBlogPosts);
app.get("/api/podcast", handlerFunctions.getAllEpisodes);
app.post("/api/user/create", handlerFunctions.createUser);
app.post("/api/login/admin", handlerFunctions.adminLogin);
app.put("/api/update/:itemId", handlerFunctions.updateItem);
app.post("/api/addComment", handlerFunctions.addComment);

//Run the server
ViteExpress.listen(app, 8000, () =>
  console.log("We are live at http://localhost:8000")
);
