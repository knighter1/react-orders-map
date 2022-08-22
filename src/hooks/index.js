import { useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux";

export const useSelector = selectorHook;

export const useDispatch = () => dispatchHook();