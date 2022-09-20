import dotenv from "dotenv"
dotenv.config()
import main from "./main"
import { connectPromise } from "./db"

async function index() {
  await connectPromise
  await main()
}
index()
