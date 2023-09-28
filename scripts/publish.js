import { execSync } from 'child_process';
import { getPublishCmdBy, getPkgData } from '@isubo-org/publish';

async function main() {
  const { version } = getPkgData();
  const cmd = await getPublishCmdBy({ version });
  console.info(cmd);
  execSync(cmd, {
    shell: true,
    stdio: 'inherit',
  });
}

main();
