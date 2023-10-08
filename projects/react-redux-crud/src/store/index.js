import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceMiddleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [ persistanceMiddleware ],
})