import path from "path";
import { readFile, writeFile } from "fs/promises";

/**
 * The updated configuration only changed the package.json file temporarily
 */
const updateConfig = async (projectName: String, options: any) => {
  const { author, description } = options;
  const packjsonPath = path.resolve(`${projectName}`, "package.json");

  const readRes = await readFile(packjsonPath, { encoding: "utf-8" }).catch(
    (err) => err
  );

  if (typeof readRes !== "string") {
    console.log(readRes.toString());
    return;
  }

  const jsonText = JSON.parse(readRes);
  jsonText.author = author;
  jsonText.description = description;
  jsonText.name = projectName;

  await writeFile(packjsonPath, JSON.stringify(jsonText, null, 2), {
    encoding: "utf-8",
  });
};

export default updateConfig;
