import {
    Card,
    Title,
    TextInput,
    Button,
    Badge
  } from "@tremor/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/store"
import { useUserActions } from "../hooks/useUserAction";
import { useState } from "react";

export default function EditUser () {
    const { id } = useParams()
    const users = useAppSelector((state) => state.users)
    const { editUser } = useUserActions()
    const navigate = useNavigate()
    
    const currentUser = users.filter(user => user.id === id)
    const { name, email, github } = currentUser[0]
    
    const [result, setResult] = useState(null)
    const [ values, setValues ] = useState({
        id: id,
        name: '',
        email: '',
        github: ''
    })

    const handleSubmit = (event) => {
		event.preventDefault()

		setResult(null)

		const form = event.target
		const formData = new FormData(form)

		const name = formData.get("name")
		const email = formData.get("email")
		const github = formData.get("github")

		if (!name || !email || !github) {
			// validaciones que tu quieras
			return setResult("ko")
		}

		setResult("ok")
		setValues({ id, name, email, github })
        editUser(values)
        navigate('/')
	}

    return ( 
        <Card className="flex flex-col gap-4">
            <Title>Edit user</Title>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput 
                    name="name"
                    type="text"
                    onChange={(e) => {
                        setValues({ ...values, name: e.target.value})
                    }}
                    placeholder={name}
                />
                <TextInput 
                    name="email" 
                    onChange={(e) => {
                        setValues({ ...values, email: e.target.value})
                    }}
                    placeholder={email}
                />
                <TextInput 
                    name="github" 
                    onChange={(e) => {
                        setValues({ ...values, github: e.target.value})
                    }} 
                    placeholder={github} />

                <Button type="submit">
				    Save
				</Button>
				<span>
                    {result === "ok" && (<Badge color='green'>Saved correctly</Badge>
                    )}
                    {result === "ko" && <Badge color='red'>Field error</Badge>}
                </span>
            </form>
        </Card>
    )
}