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

## WIL(What I Learned)

1. 공식페이지에서 제공하는 초기코드 분석

> index.js에는 `3가지 클래스 컴퍼넌트` 가 제공된다

-   Square : 틱택토 보드판안에 각각의 사각형 1개에 해당(버튼의 역할)
-   Board : Square 컴퍼넌트를 이용해서 틱택토 보드판을 생성
-   Game : Board 컴퍼넌트가 다시 이 안에서 작동하여 Game 컴퍼넌트 구성한다. ReactDOM.render() 에서는 Game만을 엘리먼트로 호출하면 결국 3가지의 컴퍼넌트를 모두 활용하게 된다.

-   구조

2. 화살표함수의 this

3. 컴퍼넌트가 무언가를 기억하기 위해서 state를 사용한다.

    > 생성자를 만들고 그 안에 this.state를 설정함으로서 컴퍼넌트는 state를 가질 수 있다.

4. super()
   https://velog.io/@honeysuckle/%EB%B2%88%EC%97%AD-Dan-Abramov-%EC%99%9C-superprops-%EB%A5%BC-%EC%9E%91%EC%84%B1%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80

5. 그런데 render()는 어디서 온거지??

6. setState()는 무엇인가??

    > setState() 호출하면 자동으로 내부의 자식 컴퍼넌트 역시 업데이트를 한다

    props와 state에 대해서
    https://trustyoo86.github.io/react/2017/11/18/props-state-react.html

7. 부모컨퍼넌트와 자식컨퍼넌트의 동기화
    > 경기의 승자를 확인하기 위해선 각 Square의 state가 한곳에 모여 있는 것이 좋다. 그래서 Square가 아닌 부모 Board 컴포넌트에 게임의 상태를 저장하는 것이 좋은 방법이다. How?
    >
    > > 무엇(어떤 정보)을 Board 컴퍼넌트로 보내줘야 할까?
    > >
    > > > 공유 state 설정 : _공유 state??_
    > > > state를 부모 컨테이너로 끌어올리기
8. 불변성
    > `const squares = this.state.squares.slice()`

-   데이터를 변경하는 방법

    1. 데이터를 직접 변경
    2. 원하는 변경 값을 가진 새로운 사본으로 데이터 교체

-   직접 데이터를 변경하지 않는 이점(2번)

    1. `이전버전의 기록`을 남겨둘수있다. 특정행동을 취소하고 이전행동으로 되돌리리는 기능은 기본적인 기능으로서 이를 구현하는데 용이하게 해준다. 즉 `이전 버전을 재사용이 가능`하게 해준다.
    2. 변화감지가 쉽다. 객체를 직접 변경하게 되면 이전버전의 객체와 현재버전의 객체를 비교할 때 객체 내부를 모두 비교해야 변경을 유무를 알수있다. 하지만 새로운 사본으로 데이터를 교체하면 그냥 객체를 비교해서 다르면 달라진 것이다.(새로운 객체이기 때문에 참조값이 다르다)

    > 순수컴퍼넌트 : React.PureComponent 의 shouldComponentUpdate() 사용법

9. 함수컴퍼넌트

    > 클래스 컴퍼넌트에 비해 더 간단하게 컴퍼넌트를 작성하는 방법
    > state없이 render()만을 갖는다.
    > React.Component를 상속받는 대신 props를 입력받아서 랜더링할 대상을 반환하는 함수를 작성한다.

10. 시간여행 추가하기

    > 이전 동작으로 되돌리기
    > 현재는 Board 컨퍼넌트에 있는 props를 Game 컨퍼넌트로 끌어올려서 squares에 대한 정보를 Game 컴퍼넌트에서 관리한다.
    > props에 history라는 객체를 만들어서 그 안에 클릭할 때마다 동작을 저장시켜놓는다

11. push() vs concat()

> push()는 기준배열을 변경시킨다 vs concat()은 기존배열을 변경시키지 않고 변경된(추가된)새로운 배열을 반환한다.
> `불변성`이라는 점에선 push()보다는 concat()을 추천한다.

12. 키 : 리스트를 뿌릴 때는 키가 필요하다
    > 키를 어떻게 설정할 것인지 어떤 키를 설정할 것인지

## 추가과제

> 공식페이지에서 주어진 추가 과제들 😵

-   [ ] 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시해주세요.
-   [ ] 이동 목록에서 현재 선택된 아이템을 굵게 표시해주세요.
-   [ ] 사각형들을 만들 때 하드코딩 대신에 두 개의 반복문을 사용하도록 Board를 다시 작성해주세요.
-   [ ] 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요.
-   [ ] 승자가 정해지면 승부의 원인이 된 세 개의 사각형을 강조해주세요.
-   [x] 승자가 없는 경우 무승부라는 메시지를 표시해주세요.
