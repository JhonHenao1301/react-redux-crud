//This hook adds an abstraction layer between my components and the redux toolkit, which allows better scalability and maintainability of my app.

import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;