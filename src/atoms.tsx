import { atom } from "recoil";

// ๐ ์ง์ ๋ ํ์์ ์ฌ์ฉํ  ๋ enum ํ์ฉ
// enum์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ซ์์ ๋งค์นญ๋๋ฉฐ, ๊ฐ์ ์ถ๊ฐ๋ก ์ ์ด์ค์ผ ๊ฐ๊ณผ ๋งค์นญ๋๋ค.
export enum Categories {
    To_Do = "To_Do",
    Doing = "Doing",
    Done = "Done",
}

export interface ITodo {
    id: number;
    text: string;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.To_Do,
});

interface IToDoState {
    [key: string]: ITodo[]; // ๐
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        To_Do: [],
        Doing: [],
        Done: [],
    },
});
