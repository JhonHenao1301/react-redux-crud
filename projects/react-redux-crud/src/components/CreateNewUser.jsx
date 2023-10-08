import { Card, Title, TextInput, Badge, Button } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserAction";
import { useValidation } from "../hooks/useValidation";

export function CreateNewUser () {
    const { addUser } = useUserActions()
	const [ nameCheck, setNameCheck ] = useState(null)
	const [ emailCheck, setEmailCheck ] = useState(null)
	const [ gitCheck, setGitCheck ] = useState(null)
	const [ result, setResult ] = useState(null)

	const handleChange = (event) => {
		useValidation(event, { setNameCheck, setEmailCheck, setGitCheck })
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
		addUser({ name, email, github })
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
					emailCheck === "false" && (<Badge size="sm" color='red'>This field must contain @ and finish . something</Badge>)
				}
                <TextInput 
					name="github" 
					placeholder="Github"
					onBlur={handleChange} 
				/>
				{
					gitCheck === "false" && (<Badge size="sm" color='red'>This field just must contain  alphanumerics values</Badge>)
				}

                <Button type="submit">
				    Save
				</Button>
				<span>
                    {
						result === "ko" && 
						<Badge size="sm" color='red'>Field error</Badge>
					}
                </span>
            </form>
        </Card>
    )
}