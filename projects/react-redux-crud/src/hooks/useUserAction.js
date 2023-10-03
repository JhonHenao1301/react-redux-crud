import { addNewUser, editUserById, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }))
	}

	const editUser = (id) => {  
		dispatch(editUserById(id))
	}

	const removeUser = (id) => {
		dispatch(deleteUserById(id))
	};

	return { addUser, editUser, removeUser }
}