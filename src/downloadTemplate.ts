import gitclone from "git-clone/promise";
import fs from "fs-extra";
import ora from "ora";
import path from "path";
/** Download templates from the cloud  */
const downloadTemplate = (templateGitUrl: string, downloadPath: string) => {
  const loading = ora("download template");
  return new Promise(async (resolve, reject) => {
    try {
      loading.start("start download template");
      await gitclone(templateGitUrl, downloadPath, {
        checkout: "master",
        shallow: true,
      });
      loading.stop();
      loading.succeed("download success");
      fs.removeSync(path.join(downloadPath, ".git"));
      resolve("download success");
    } catch (error) {
      reject(error);
      loading.stop();
      loading.fail("download fail");
    }
  });
};

export default downloadTemplate;
