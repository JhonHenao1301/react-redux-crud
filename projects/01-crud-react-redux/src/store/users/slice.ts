import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Jose Rodriguez",
        email: "j.rodriguez@gmail.com",
        github: "JRODRIGUEZ",
    },
    {
        id: "2",
        name: "Mario Rodriguez",
        email: "m.rodriguez@gmail.com",
        github: "MRODRIGUEZ",
    },
    {
        id: "3",
        name: "Isabella Henao",
        email: "i.henao@gmail.com",
        github: "IHENAO",
    },
    {
        id: "4",
        name: "Mario Araujo",
        email: "m.araujo@gamail.com",
        github: "MARAUJO",
    },
    {
        id: "5",
        name: "Sebastian Tamayo",
        email: "s.tamayo@gmail.com",
        github: "STAMAYO",
    },
    {
        id: "6",
        name: "James Londono",
        email: "j.londono@gmail.com",
        github: "JLONDONO",
    },
    {
        id: "7",
        name: "Jhon Henao",
        email: "henao1301@gmail.com",
        github: "JHONHENAO1301",
    },
];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
         
    }
})

export default usersSlice.reducer;