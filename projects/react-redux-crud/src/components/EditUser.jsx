
import { Card, Title, TextInput, Button, Badge } from "@tremor/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAppSelector } from "../hooks/store"
import { useUserActions } from "../hooks/useUserAction";
import { useValidation } from "../hooks/useValidation";
import { useState } from "react";

export default function EditUser () {
    const { id } = useParams()
    const users = useAppSelector((state) => state.users)
    const { editUser } = useUserActions()
    const navigate = useNavigate()
    
    const currentUser = users.filter(user => user.id === id)
    const { name, email, github } = currentUser[0]

    const [ nameCheck, setNameCheck ] = useState(null)
    const [ emailCheck, setEmailCheck ] = useState(null)
	const [ gitCheck, setGitCheck ] = useState(null)

    const [ result, setResult ] = useState(null)
    const [ values, setValues ] = useState({
        id: id,
        name: '',
        email: '',
        github: ''
    })

    const handleChange = (event) => {
		useValidation(event, { setNameCheck, setEmailCheck, setGitCheck })

        if(!nameCheck || !emailCheck || !gitCheck) {
            return
        }
	}

    const handleSubmit = (event) => {
		event.preventDefault()

		setResult(null)

        if(!nameCheck || !emailCheck || !gitCheck ) {
			return setResult("ko")
        }
            else if (nameCheck === 'false' || emailCheck === 'false' || gitCheck === 'false') {
                return setResult("ko")
            }

		const form = event.target
		const formData = new FormData(form)

		const name = formData.get("name")
		const email = formData.get("email")
		const github = formData.get("github")

		setResult("ok")
        
		setValues({ id, name, email, github })
        editUser(values)
        navigate('/')
	}

    return (
        <div className="flex flex-col gap-6 py-6 px-8 h-screen">
            <Link to='/' className="flex gap-2 items-center">
                <button type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
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
                        placeholder={name}
                        onBlur={(event) => {
                            handleChange(event)
                            setValues({ ...values, name: event.target.value})
                        }}
                    />
                    {
					    nameCheck === "false" && (<Badge size="sm" color='red'>This field may contain just letters</Badge>)
				    }
                    <TextInput 
                        name="email" 
                        placeholder={email}
                        onChange={(event) => {
                            handleChange(event)
                            setValues({ ...values, email: event.target.value})
                        }}
                    />
                    {
					    emailCheck === "false" && (<Badge size="sm" color='red'>This field must contain @ and finish . something</Badge>)
				    }
                    <TextInput 
                        name="github" 
                        placeholder={github} 
                        onChange={(event) => {
                            handleChange(event)
                            setValues({ ...values, github: event.target.value})
                        }} 
                    />
                    {
                        gitCheck === "false" && (<Badge size="sm" color='red'>This field just must contain  alphanumerics values</Badge>)
                    }

                    <Button type="submit" onSubmit={handleSubmit}>
                        Save
                    </Button>
                    <span>
                        {
                            result === "ok" && <Badge color='green'>Saved correctly</Badge>
                        }
                        {
                            result === "ko" && <Badge color='red'>Field error</Badge>
                        }
                    </span>
                </form>
            </Card>
        </div>
    )
}