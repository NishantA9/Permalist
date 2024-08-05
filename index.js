import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "290109",
  port: 5432,
});

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const listResult = await db.query("SELECT DISTINCT list_name FROM items");
    const lists = listResult.rows.map((row) => row.list_name);

    const itemResult = await db.query("SELECT * FROM items ORDER BY list_name, created_at ASC");
    const items = itemResult.rows;

    console.log("Lists:", lists);
    console.log("Items:", items);

    res.render("index", {
      lists,
      items
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  const listName = req.body.listName || "Default";
  console.log("Adding Item:", item, "to List:", listName);

  try {
    await db.query("INSERT INTO items (title, list_name) VALUES ($1, $2)", [item, listName]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  const listName = req.body.listName;
  console.log("Editing Item ID:", id, "New Title:", item, "in List:", listName);

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  console.log("Deleting Item ID:", id);

  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/createList", async (req, res) => {
  const listName = req.body.newList;
  console.log("Creating New List:", listName);

  // Create a placeholder item to ensure the list name is captured in the database
  try {
    await db.query("INSERT INTO items (title, list_name) VALUES ($1, $2)", ['placeholder', listName]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
