import inquirer from "inquirer";
import downloadTemplate from "./downloadTemplate";
import updateConfig from "./updateConfig";
import { access, rm } from "fs/promises";
import path from "path";
import { DirExistPrompts, ProjectPrompts } from "./prompts";

const initProject = async (name: string) => {
  const accessRes = await access(path.resolve(name)).catch((err) => err);
  if (accessRes) {
    continueGenerate(name);
    return;
  }

  const { isRemove } = await inquirer.prompt(DirExistPrompts);

  if (isRemove == "n") {
    process.exit();
  }

  if (isRemove == "y") {
    await rm(path.resolve(name), { recursive: true }).catch(() =>
      Promise.reject()
    );
    continueGenerate(name);
  }
};

const continueGenerate = async (name: string) => {
  const options = await inquirer.prompt(ProjectPrompts);
  await downloadTemplate(
    "https://github.com/hcjlxl/react-admin.git",
    `./${name}`
  );

  updateConfig(name, options);
};

export { initProject };
