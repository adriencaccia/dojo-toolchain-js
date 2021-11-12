import { callback, TestInterface } from 'shared';

const foobar: TestInterface = {
    foo: 5,
    bar: 'useless'
}

document.getElementById("button-id").addEventListener("click", () => callback(foobar));
