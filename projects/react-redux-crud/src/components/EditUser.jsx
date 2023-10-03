
export default function EditUser ({ name, email, github }) {
    return ( 
        <Card className="flex flex-col gap-2">
            <Title>Edit user</Title>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput name="name" value={name} placeholder="Name" />
                <TextInput name="email" value={email} placeholder="Email" />
                <TextInput name="github" value={github} placeholder="Github" />

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