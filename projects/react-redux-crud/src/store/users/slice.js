
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "sonner"

const DEFAULT_STATE = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        github: "jdoe"
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        github: "janesmith"
    },
    {
        id: "3",
        "name": "Michael Johnson",
        email: "michael.johnson@example.com",
        "github": "michaeljohnson"
    },
    {
        id: "4",
        name: "Sara Davis",
        email: "sara.davis@example.com",
        github: "saradavis"
    },
    {
        id: "5",
        name: "Jhon Henao",
        email: "henao1301@gmail.com",
        github: "jhonhenao1301"
    }
]

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux__state__")
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
          const id = crypto.randomUUID()
          state.push({ id, ...action.payload })
          toast.success(`User created`)
        },
        editUserById: (state, action) => {
          const { id, name, email, github }= action.payload
          const userToEdit = state.find((user) => user.id === id)

          if(userToEdit) {
            userToEdit.id = id
            userToEdit.name = name
            userToEdit.email = email
            userToEdit.github = github
          }
        },
        deleteUserById: (state, action) => {
            const id = action.payload
            toast.success('User deleted')
            return state.filter((user) => user.id !== id)
        }
    }
})

export default usersSlice.reducer
export const { addNewUser, editUserById, deleteUserById } = usersSlice.actions