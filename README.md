# React tutorials

> 본 학습은 [리액트 공식사이트](https://reactjs.org/)를 통해서 2가지를 할 예정입니다.

> 첫번째는 [단계별 가이드](https://ko.reactjs.org/docs/hello-world.html)를 통한 `내용을 정리`이고 두번째는 공식사이트에서 [자습서](<(https://ko.reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial)>)로 제공하는 `틱택토`를 만들어보는 것이다.

> [Go to TicTacToe](tictactoe/tictactoe.md) 🚀

## JSX(JavaScript XML)

-   `const ele = <h1>Hello<h1>;` 처럼 자바스크립트을 확장한 문법
-   JSX가 필수는 아니지만 UI관련 작업을 할때 더 직관적이기에 도움이 될 수 있다.

    ```javascript
    const name = 'jjanmo';
    const ele = <h1>Hello, {name}</h1>; //JSX : { } 안에 모든 표현식(값을 도출할 수 있는 것들)이 들어갈수있다

    ReactDOM.render(element, document.getElementById('root')); //자동세미콜론 삽입을 피하고자 괄호로 묶는 것을 권장
    ```

-   JSX도 표현식이다. 변수에 할당하고 인자로 받아들이고 함수로부터 반환될수도 있다.
-   JSX 속성 정의
    -   `const ele = <div tabIndex="0"></div>;` 속성따옴표사용가능
    -   `const ele = <img src={user.avatarURL}></img>;` {}안 자바스크립트 표현식을 사용가능
    -   속성을 정의할 때는 두가지 중에 한가지만 사용해야 한다.
    -   JSX는 HTML보다는 자바스크립트에 가깝기 때문에 속성을 명명할 때 camelCase 프로퍼티 명명법을 사용한다.
-   JSX의 자식 정의
    ```javascript
    const ele = (
        <div>
            <h2>Dark Knight</h2>
            <div>Action</div>
        </div>
    );
    ```
-   JSX는 객체로 표현한다
    ```javascript
    const ele = <div className='title'>Zootopia</div>;
    ```
    > Babel은 `React.creatElement()` 호출로 컴파일한다
    ```
    //아래와 같은 객체를 생성
    const ele = {
        type : 'div',
        props :{
            className : 'title',
            children : Zootopia
        }
    };
    ```

## Element Rendering

-   리액트 엘리먼트는 리액트앱의 가장 작은 단위로서 화면에 표시할 내용을 나타낸다

👁‍🗨 **알아보기**

> `DOM Element` vs `React Element` vs `React Component`

-   리액트 엘리먼트는 일반객체(plain object)
-   React DOM은 리액트 엘리먼트와 일치하도록 DOM을 업데이트한다

-   모든 리액트 엘리먼트는 React DOM에서 관리하는데 이것이 루트(root)DOM 노드이다. 리액트앱은 일반적으로 1개의 루트 DOM노드가 존재한다.(단, 기존앱을 통합하는경우에 원하는 수만큼의 많은 수의 루트 DOM노드가 존재할 수 있다)

-   리액트 엘리먼트를 루트DOM노드에 랜더링하려면 ReactDOM.render()라는 메소드에 리액트 엘리먼트를 전달한다.

    > `ReactDOM.render(element, container [,callback]);

-   리액트 엘리먼트는 불변객체이다(immutable object)

-   ReactDOM.render()를 통한 변경된 부분 업데이트
    > 보통 `ReactDOM.render()`를 한 번만 호출하지만 시계예시에서는 1000ms마다 계속 호출하였다. 이 부분은 `유상태 컴퍼넌트`와 연결된다.

## Components and Props

-   컴퍼넌트는 `자바스크립트의 함수`와 유사하다. UI를 재사용 가능한 개별적인 여러 조각으로 나누고 각 조각별로 컴퍼넌트를 만들어서 함수처럼 반복적으로 활용할 수 있다
-   **컴퍼넌트**는 `props`라는 *임의의 입력*을 받은 후 *화면에 어떻게 표시되는지를 기술*하는 `리액트 엘리먼트`를 반환한다.

    > props : `객체 인자`로서 `속성`을 나타내는 데이터

-   함수 컴퍼넌트와 클래스 컴퍼넌트

    > 컴퍼넌트의 정의 방법

    ```javascript
    //함수컴퍼넌트
    function greeting(props) {
        //props : 임의의 입력
        return <h1>Hello My name is {props.name} 😎</h1>; //리액트 엘리먼트 : 화면에 표시
    }
    ```

    ```javascript
    //클래스 컴퍼넌트
    class Greeting extends React.Component {
        render() {
            return <h1>Hello My name is {this.props.name} 😎</h1>;
        }
    }
    ```

-   컴퍼넌트 랜더링

    -   리액트 엘리먼트를 (위 예시들)`DOM태그`를 나타낼 수 도 있지만 `사용자 정의 컴퍼넌트`로도 나타낼 수 있다.

        ```
        //DOM태그로 작성한 엘리먼트
        const ele = <div> Hello jjanmo <div>;

        //사용자 정의 컴퍼넌트로 작성한 앨리먼트
        const ele = <Greeting name="jjanmo" />;
        ```

    -   사용자 정의 컴퍼넌트 엘리먼트의 작동방식

        ```javascript
        function Movie(props){
            return <div>
                        <div>{props.title}</div>
                        <div>{props.genre}</div>
                </div>;
        }

        const ele = <Movie title="The Greatest Showman" genre="Drama">;

        ReactDOM.render(
            ele,
            document.getElementById('root');
        );
        ```

    1. 사용자 정의 컴퍼넌트 엘리먼트를 인수로 ReactDOM.render()이 호출된다
    2. 사용자 정의 컴퍼넌트 엘리먼트의 어트리뷰트들을 담은 `props 객체 인자`로하여 `Movie 컴퍼넌트`를 호출한다.
    3. `Movie 컴퍼넌트`는 `div로 된 엘리먼트`를 반환한다.
    4. React DOM은 컴퍼넌트에서 반환된 엘리먼트와 일치하도록 DOM을 업데이트한다.

    > 사용자 정의 컴퍼넌트 엘리먼트에서 `컴퍼넌트 이름`은 항상 **대문자**로 작성해야 리액트가 그것이 컴퍼넌트인지 인식할 수 있다. 소문자이면 그것을 태그로 인식한다.

-   컴퍼넌트 합성

    ```javascript
    //위의 Movie 컴퍼넌트를 사용한다고 가정

    function App(){
        return (
            <Movie title="The Greatest Showman" genre="Drama">
            <Movie title="Zootopia" genre="Animation">
            <Movie title="Dark Knight" genre="Action">
            <Movie title="Interstellar" genre="SF">
        );
    }

    //이하 생략
    ```

    > 위의 코드처럼 `Movie`를 여러번 랜더링할 수 있다

-   컴퍼넌트 추출 : 큰 컴퍼넌트를 `여러 개의 작은 컴퍼넌트`로 분리하여 컴퍼넌트 안에 사용자 정의 컴퍼넌트 엘리먼트를 넣어서 계층구조를 형성할수도 있다.

    > UI일부가 여러번 사용되거나 UI일부가 자체적으로 복잡한 경우에는 재사용 가능한 컴퍼넌트를 만들어서 사용하는 것이 좋다.

    > props의 이름은 사용될 context가 아닌 props가 전달되는 `컴퍼넌트 관점`에 이름을 짓는 것을 권장한다.

*   props는 읽기 전용
    -   함수컴퍼넌트나 클래스컴퍼넌트 모두 자체 props를 수정할 수 없다.
    -   리액트의 엄격한 규칙 : **모든 리액트 컴퍼넌트는 자신의 props를 다룰 때 반드시 `순수함수`처럼 작동해한다.**
        > 순수함수란 : 함수에게 인자를 주었을 때 항상 같은 인자를 리턴하는 함수
    -   하지만 어플리케이션 UI는 동적이기때문에 시간에 따라서 변할 수 있다. 여기서 `state`라는 개념이 들어간다. 리액트는 `state`통해 위 규칙을 위반하지않으면서 사용자의 액션, 네트워크 응답 및 다른 요소에 대한 응답으로 시간에 따라서 출력값을 변경시킬 수 있다.

## State and Life Cycle
