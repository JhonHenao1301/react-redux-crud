import { Card, Title, TextInput, Badge, Button } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserAction";
import { expression } from '../assets/constants'

export default function CreateNewUser () {
    const { addUser } = useUserActions()
	const [ nameCheck, setNameCheck ] = useState(null)
	const [ emailCheck, setEmailCheck ] = useState(null)
	const [ gitCheck, setGitCheck ] = useState(null)
	const [ result, setResult ] = useState(null)

	const handleChange = (event) => {
		const typeData = event.target.name
		const text = event.target.value

		switch(typeData) {
			case 'name':
				if (expression.name.test(text)) {
					return setNameCheck('true');
				}
				return setNameCheck('false');
			case 'email':
				if (expression.email.test(text)) {
					return setEmailCheck('true')
				}
				// console.log(expression.email.test(text))
				return setEmailCheck('false')
			case "github":
				if (expression.github.test(text)) {
					return setGitCheck("true")
				}
				return setGitCheck("false")
		}
	}

    const handleSubmit = (event) => {
		event.preventDefault()

		setResult(null)

		if (nameCheck === 'false' || emailCheck === 'false' || gitCheck === 'false') {
			return setResult("ko")
		}

		const form = event.target
		const formData = new FormData(form)

		const name = formData.get("name")
		const email = formData.get("email")
		const github = formData.get("github")

		addUser({ name, email, github })
		setResult("ok")
		form.reset()
	}

    return ( 
        <Card className="flex flex-col gap-2 mb-6">
            <Title>Create new user</Title>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput 
					name="name" 
					placeholder="Name"
					onBlur={handleChange}
				/>
				{
					nameCheck === "false" && (<Badge size="sm" color='red'>This field may contain just letters</Badge>)
				}
                <TextInput 
					name="email" 
					placeholder="Email" 
					onBlur={handleChange}
				/>
				{
					emailCheck === "false" && (<Badge size="sm" color='red'>This field may contain just letters</Badge>)
				}
                <TextInput 
					name="github" 
					placeholder="Github"
					onBlur={handleChange} 
				/>
				{
					gitCheck === "false" && (<Badge size="sm" color='red'>This field must contain alphanumerics values</Badge>)
				}

                <Button type="submit">
				    Save
				</Button>
				<span>
                    {
						result === "ok" && <Badge size="xl" color='green'> Saved correctly </Badge>
					}
                    {
						result === "ko" && <Badge size="xl" color='red'>Field error</Badge>
					}
                </span>
            </form>
        </Card>
    )
}