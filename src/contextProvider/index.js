import { createContext, useContext } from 'react';
import RootStore from '../stores';

export const RootStoreContext = createContext(RootStore || null);

export const useStores = () => {
    const context = useContext(RootStoreContext);

    if (context === null) {
        throw Error('Вы не обернули приложение в провайдер');
    }

    return context;
};
