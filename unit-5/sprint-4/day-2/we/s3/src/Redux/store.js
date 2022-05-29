import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import { counterReducer } from "./Counter/reducer"
import { todoReducer } from "./Todo/reducer"
import { loggerMid } from "./Middlewares/loggerMid"
const rootReducer = combineReducers({
    count:counterReducer,
    todo:todoReducer
})
// 
export const store = createStore(
    rootReducer,
    compose( applyMiddleware(loggerMid),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
   
     )