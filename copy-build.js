const fs = require("fs-extra");

(async () => {
  const src = "./build";
  const target = "./www";

  await fs.remove(target);
  await fs.copy(src, target);
})();
