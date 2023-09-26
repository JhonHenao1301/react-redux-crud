import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
  } from "@tremor/react";
  
  const salesPeople: {
    id: string;
    name: string;
    email: string;
    github: string;
  }[] = [
    {
      id: "1",
      name: "Jose Rodriguez",
      email: "j.rodriguez@gmail.com",
      github: "JRODRIGUEZ",
    },
    {
      id: "2",
      name: "Mario Rodriguez",
      email: "m.rodriguez@gmail.com",
      github: "MRODRIGUEZ",
    },
    {
      id: "3",
      name: "Isabella Henao",
      email: "i.henao@gmail.com",
      github: "IHENAO",
    },
    {
      id: "4",
      name: "Mario Araujo",
      email: "m.araujo@gamail.com",
      github: "MARAUJO",
    },
    {
      id: "5",
      name: "Sebastian Tamayo",
      email: "s.tamayo@gmail.com",
      github: "STAMAYO",
    },
    {
      id: "6",
      name: "James Londono",
      email: "j.londono@gmail.com",
      github: "JLONDONO",
    },
    {
      id: "7",
      name: "Jhon Henao",
      email: "henao1301@gmail.com",
      github: "JHONHENAO1301",
    },
  ];
  
  export default function ListOfUsers() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Acciones</TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="flex gap-4 items-center">
                    <img src={`https://unavatar.io/github/${item.github}`} className="rounded-full" alt={item.name} width={40} height={40} />
                    {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                    Actions
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }