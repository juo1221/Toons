import { createContext, useContext } from "react";
import RootStore from "../store/RootStore";

export const StoreContext = createContext(RootStore);
export const StoreProvider = StoreContext.Provider;
export const useStores = () => useContext(StoreContext);
