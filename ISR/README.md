## 验证 ISR
### 未开启 ISR
1. 将 `pages/index.js` 和 `posts/[id].js` 中 `getStaticProps` 方法的 `revalidate` 属性注释掉。
2. 运行 `yarn build && yarn start`。
3. 往 `posts` 文件夹中追加一个新的 markdown 文件 xxx。
4. 访问 `http://localhost:3000/` 及 `http://localhost:3000/posts/xxx`，可以发现无论怎么刷新都没有数据。

### 开启 ISR
1. 将 `pages/index.js` 和 `posts/[id].js` 中 `getStaticProps` 方法的 `revalidate` 设置为 10，`posts/[id].js` 的 fallback 设置为 `'blocking'`。
2. 运行 `yarn build && yarn start`。
3. 往 `posts` 文件夹中追加一个新的 markdown 文件 xxx。
4. 访问 `http://localhost:3000/`（旧页面，有缓存，需要 10S） 及 `http://localhost:3000/posts/xxx`，可以看到新添加的页面。
