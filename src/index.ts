import { Elysia } from "elysia";
import helmet from "helmet";
import selectedConfig from "@/configs/config.app";

//* CONFIGS
const {app: { port }} = selectedConfig

const app = new Elysia().get("/", () => "Hello Elysia").listen(port);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
