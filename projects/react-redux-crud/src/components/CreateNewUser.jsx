import { Card, Title, TextInput, Badge, Button } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserAction";

export default function CreateNewUser () {
    const { addUser } = useUserActions()
	const [result, setResult] = useState(null)

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

		addUser({ name, email, github })
		setResult("ok")
		form.reset()
	}
    return ( 
        <Card className="flex flex-col gap-2">
            <Title>New user</Title>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput name="name" placeholder="Name" />
                <TextInput name="email" placeholder="Email" />
                <TextInput name="github" placeholder="Github" />

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