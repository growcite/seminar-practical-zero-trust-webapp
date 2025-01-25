# Sample Simple Web Application (Node.js)

テスト用のNode.jsアプリ。

# 利用方法

1. クローン

    ```
    git clone https://github.com/growcite/seminar-practical-zero-trust-webapp.git
    ```

1. 初期化

    ```
    npm install
    ```

1. 実行

    ```
    npm start
    ```

# サービス登録/削除 (Windows)

以下の実行には管理権限で起動したシェルで実行する必要がある。

- サービスへの登録

    ```
    npm run install-service
    ```

- サービスから削除

    ```
    npm run uninstall-service
    ```

# Docker コンテナ利用

1. コンテナビルド

    ```
    docker build -t webapp:0.0.1 .
    ```

1. コンテナ実行

    ```
    docker run \
        -d \
        -p 8080:3000 \
        --name webapp \
        webapp:0.0.1
    ```