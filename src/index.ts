import { Command } from "commander";
import { initProject } from "./init";

const program = new Command();

//introduce
program
  .name("后台管理生成器")
  .description(
    "一个由 Vite + React18 + Redux + Pro components + React-Router6 搭建的后台管理框架"
  )
  .version("0.0.1");

//init project
program.command("init <name>").description("init project").action(initProject);

program.parse();
