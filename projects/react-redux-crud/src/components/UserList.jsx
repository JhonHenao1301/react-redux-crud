import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    Title,
    Badge
  } from "@tremor/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserAction";

export function UserList () {
  const users = useAppSelector((state) => state.users)
  const { removeUser } = useUserActions()

  return (
    <Card>
      <Title className="flex gap-2 content-center">
        Users
        <Badge size="sm">{users.length}</Badge>
      </Title>  
      <Table className="mt-4">
        <TableHead>
          <TableRow>
          <TableHeaderCell>
                Id
            </TableHeaderCell>
            <TableHeaderCell>
                Name
            </TableHeaderCell>
            <TableHeaderCell className="text-center">
                Email
            </TableHeaderCell>
            <TableHeaderCell className="text-center">
                Github 
            </TableHeaderCell>
            <TableHeaderCell className="text-center">
                Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            users?.map((item) => (
              <TableRow key={item.name} className="">
                  <TableCell className="">
                      {item.id}
                  </TableCell>
                  <TableCell className="flex items-center gap-4">
                      <img
                          src={`https://unavatar.io/github/${item.github}`}
                          className="w-10 rounded-full" 
                          alt={item.name} />
                      {item.name}
                  </TableCell>
                  <TableCell className="text-center">{item.email}</TableCell>
                  <TableCell className="text-center">
                      {item.github}
                  </TableCell>
                  <TableCell className="flex items-center gap-2 text-right">
                    <Link to={`edit/${item.id}`}>
                      <button type="button" >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                          </svg>
                      </button>
                    </Link>
                      <button
                        onClick={() => removeUser(item.id)}
                        type="button"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                      </button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </Card>
  );
}