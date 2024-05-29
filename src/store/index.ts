import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dayTaskReducer from "./features/task/dayTask";
import themeReducer from "./features/theme/theme";
// 导入持久化所需要的插件
import { persistStore, persistReducer } from "redux-persist";
// 导入本地存储插件，可选storage，cookie，session等
import storage from "redux-persist/lib/storage";

// 创建reducer(合并拆分的reducer)
const rootReduce = combineReducers({
    dayTask:dayTaskReducer,
    theme:themeReducer
})

//持久化配置
const persistConfig = {
    key: "root",
    storage,
    // whitelist: [users], // 需要持久化保存的模块，默认保存所有模块（语义：白名单）
    // blacklist: [], // 不需要持久化保存的模块，默认不排除任何模块（语义：黑名单）
}
// 创建持久化之后的reducer
const persistedReducer = persistReducer(persistConfig, rootReduce)


const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    // 配置中间件：如果使用redux-persist，则需要设置为false，否则控制台报错（非序列化数据）
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
//  创建持久化后的store
const persistor  = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export {
    store,
    persistor
}