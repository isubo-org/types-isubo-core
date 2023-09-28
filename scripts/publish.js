import { getPublishCmdBy, getPkgData } from '@isubo-org/publish';

async function main() {
  const { version } = getPkgData();
  const cmd = await getPublishCmdBy({ version });
  console.info(cmd);
}

main();
