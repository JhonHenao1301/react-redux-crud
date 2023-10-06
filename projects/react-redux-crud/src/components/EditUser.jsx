
import { Card, Title, TextInput, Button, Badge } from "@tremor/react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
    
    const [ result, setResult ] = useState(null)
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
			// Validations here
			return setResult("ko")
		}

		setResult("ok")
		setValues({ id, name, email, github })
        editUser(values)
        navigate('/')
	}

    return (
        <div className="flex flex-col gap-6 py-6 px-8 h-screen">
            <Link to='/' className="flex gap-2 items-center">
                <button type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </button>
                <span>Back</span>
            </Link>
            <Card className="flex flex-col gap-4">
                <Title>Edit user</Title>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextInput 
                        name="name"
                        type="text"
                        onBlur={(e) => {
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

                    <Button type="submit" onSubmit={handleSubmit}>
                        Save
                    </Button>
                    <span>
                        {result === "ok" && (<Badge color='green'>Saved correctly</Badge>
                        )}
                        {result === "ko" && <Badge color='red'>Field error</Badge>}
                    </span>
                </form>
            </Card>
        </div>
    )
}