const { exec } = require('shelljs');

const tagReg = /tag=(.+)/;
const tag = process.argv[2].match(tagReg)[1];

exec(
  `docker build -t wangliang4468/qiankun:vue-sub-${tag} .`
);
exec(`docker push wangliang4468/qiankun:vue-sub-${tag}`);
