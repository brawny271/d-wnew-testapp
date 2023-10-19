import { createStore } from 'redux';
import rootReducer from './Redux/reducers';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer);

export const persistedStore = persistStore(store)

export default store;