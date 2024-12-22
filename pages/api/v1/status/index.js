import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT NOW()");
  console.log({ result });
  response.json({ status: "ok" });
}

export default status;
