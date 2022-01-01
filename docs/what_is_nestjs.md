# NestJS について

NestJS は Typescript をサポートし、オブジェクト指向プログラミング、関数型プログラミング、Functional Reactive Programming を兼ね備える Node.js サーバサイドアプリケーションを構築するためのフレームワークです。
(詳細は[ドキュメント](https://docs.nestjs.com/)をご参照ください。)

## NestJS を構成する三要素

1. Controllers
2. Providers
3. Modules

### Controllers

リクエストに対してレスポンスを返す責務を持った要素。

#### sample コントローラの作成

```
$ nest g controller sample --no-spec
```

`--no-spec`フラグをつけることで spec を生成しません。(spec に関しての説明は致しません。)

<br>
生成されたファイル

```js
// sample/sample.controller.ts
import { Controller } from '@nestjs/common';

@Controller('sample')
export class SampleController {}
```

変更が加わったファイル

```js
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';

@Module({
  imports: [],
  controllers: [AppController, SampleController], // この部分が追加された
  providers: [AppService],
})
export class AppModule {}
```

試しに`/sample`の get リクエストにレスポンスを返すようにしてみましょう。
まずは、`sample.controller.ts`に変更を加えていきます。

```js
import { Controller, Get } from '@nestjs/common';

@Controller('sample')
export class SampleController {
  @Get() // getリクエストに答えるメソッドに使用するデコレータ
  index() {
    return 'Sample Controller returns this.';
  }
}
```

これで、[localhost:3000/sample](http://localhost:3000/sample)にアクセスしてみましょう。

```
Sample Controller returns this.
```

と返ってくると思います。

### Providers
