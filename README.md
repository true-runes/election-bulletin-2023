# 幻水総選挙公報2023
- 公報
- フォームのサンクスページ

# .tpl 復元方法

#### 1. 原則

```bash
$ op inject -i .env.tpl -o .env.output
```

#### 2. 具体例

```bash
$ eval $(echo $ONE_PASSWORD_MY_PASSWORD | op signin --account my)
$ op inject -i config/google_creds.json.tpl -o config/google_creds.json
```
