import {callback, TestEnum, TestInterface} from 'shared';

const foobar: TestInterface = {
    foo: 5,
    bar: 'useless'
}

const testFun = () => {
    if (TestEnum.A === 0) {
        console.log('Hello, World!')
    }
}

document.getElementById("button-id").addEventListener("click", () => {callback(foobar); testFun()});
