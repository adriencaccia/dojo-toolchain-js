import isOdd from "is-odd";
export const callback = ({foo}: TestInterface) => alert(`Hello: 7 is odd ? ${isOdd(foo)}`);

export interface TestInterface {
    foo: number;
    bar: string;
}

export enum TestEnum {
    A,
    B
}
