## next.config.js 中直接或间接依赖需要写到 dependencies 中
1. 执行 `yarn && yarn build`
2. 执行 `yarn start`，发现没有报错。
3. 终止程序，执行 `rm -rf node_modules`
4. 执行 `yarn install --production --frozen-lockfile`
5. 执行 `yarn start`，报错。
6. 删掉 `next.config.js`，执行 `yarn start`，不报错。

结论：如果指定了 next.config.js，production 环境下也会运行，需要保证所有的依赖都安装。
