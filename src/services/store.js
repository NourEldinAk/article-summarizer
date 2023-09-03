import { configureStore} from "@reduxjs/toolkit";
import { articleApi } from "./article";
// we are making our entire state "store"
export const store = configureStore({
    // the reducer allows u to take a slice of the store 
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer
    }, 
    // the middleware allows u to do something with that slice before sending it
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})