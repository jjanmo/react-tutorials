# Make TicTacToe using React 💥

> Just tutorials 💨 for beginner 👶 as me

## 리액트 프로젝트 설치

1. 최신버전의 Node.js를 설치한다.
2. `Create React App`를 설치한다.

    > 리액트 공식사이트에 따르면 목적에 따라서 4가지 `툴체인`이 존재

    > > 툴체인이란 소프트웨어 개발에 사용되는 프로그래밍 도구들을 모아놓은 집합

    1. **리액트를 배우고** 있거나 **새로운 싱글페이지앱(SPA)을 만들고** 싶으면 `Create React App` **✅ 나같은 초보자**
    2. **서버랜더링 Node.js 웹사이트**를 만들고 싶다면 `Next.js`
    3. **고정적인 콘텐츠 지향적 웹사이트**를 만들고 싶다면 `Gatsby`
    4. 컴퍼넌트 라이브러리 혹은 이미 있는 코드베이스 통합을 한다면 `Neutrino, Parcel, Razzle` **👈 숙련자**

> 프로젝트 설치자체는 어렵지 않았다. 그런데 `Create React App`이 무엇이길래 저것만 깔면 리액트 프로젝트를 진행할 수 있는 것일까? `Create React App`이 무엇인지 찾아보았다.

### What is Create React App

-   리액트 개발환경(앱웹을 만들수 있는 환경)을 `한 줄`의 커맨드라인으로 완성시켜주는 `툴(보일러플레이드)`
    > `npx create React App <프로젝트를 시작할 폴더이름>` (적어준 이름의 프로젝트 폴더를 생성하면서 설치함)
-   백앤드로직이나 데이터베이스는 제어할 수 없고 프런트엔드 빌드 파이프라인만을 제공한다. 백엔드까지 제어하고 싶다면 다른 툴체인을 찾아야한다.
-   여러가지 모듈(Babel, Webpack, ESLint, Autoprefixer, Jest 등)이 기본적으로 포함되어서 설치된다.

> `Create React App`를 설치 후 순수한 상태의 package.json

```
{
    "name": "tictactoe",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "react": "^16.13.1",
        "react-dom": "^16.13.1",
        "react-scripts": "3.4.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}
```
