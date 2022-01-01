# 準備

## NestJS プロジェクトの作成

[ドキュメント](https://docs.nestjs.com/first-steps)の手順で行います。

```
$ npm i -g @nestjs/cli
$ nest new nest-typeorm
```

```
⚡  We will scaffold your app in a few seconds..

CREATE tutorial/.eslintrc.js (631 bytes)
CREATE tutorial/.prettierrc (51 bytes)
CREATE tutorial/README.md (3339 bytes)
CREATE tutorial/nest-cli.json (64 bytes)
CREATE tutorial/package.json (1964 bytes)
CREATE tutorial/tsconfig.build.json (97 bytes)
CREATE tutorial/tsconfig.json (546 bytes)
CREATE tutorial/src/app.controller.spec.ts (617 bytes)
CREATE tutorial/src/app.controller.ts (274 bytes)
CREATE tutorial/src/app.module.ts (249 bytes)
CREATE tutorial/src/app.service.ts (142 bytes)
CREATE tutorial/src/main.ts (208 bytes)
CREATE tutorial/test/app.e2e-spec.ts (630 bytes)
CREATE tutorial/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? (Use arrow keys)
❯ npm
  yarn
  pnpm
```

ここでは npm を選択します。

```
? Which package manager would you ❤️  to use? npm
✔ Installation in progress... ☕

🚀  Successfully created project tutorial
👉  Get started with the following commands:

$ cd nest-typeorm
$ npm run start
```

ディレクトリを移動して、nestjs を起動してみましょう。

```
Hello World!
```

が表示されたら NestJS の準備は完了です。

## MySQL の準備

MySQL は Docker で起動します。

### docker-compose.yml を用意する。

[公式イメージ](https://hub.docker.com/_/mysql)を使用する。

```yml
# Use root/example as user/password credentials
version: '3.1'

services:
  db:
    image: mysql
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: example

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

docker compose を起動する。

```
$ docker compose up
```

[localhost:8080](http://localhost:8080/)にアクセスする。

```
サーバ: db
ユーザ名: root
パスワード: example
```

でログインする。

#### データベースを作成

`develop` と入力し保存する。

これで MySQL の準備ができました。
