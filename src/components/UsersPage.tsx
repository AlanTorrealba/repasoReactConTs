import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUser = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users"
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUser().then(setUsers);

    // axios.get<ReqResUserListResponse>("https://reqres.in/api/users?page=2")
    // .then(res => console.log(res.data.data.at(1)))

    //   fetch("https://reqres.in/api/users?page=2").then(resp => resp.json()).then(data => console.log(data))
  }, []);

  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map( user => (
           <UsersRow key={user.id} user={user}/>
          )
            
          )}
        </tbody>
      </table>
    </>
  );
};

interface Props {
    user: User;
}


const UsersRow = ({user} : Props) => {
    const {avatar, first_name, email} = user;
  return (
    <tr >
            <td><img style={{width : '50px'}} src={avatar} alt="..." /></td>
            <td>{first_name}</td>
            <td>{email}</td>
          </tr>
  )
}

export default UsersPage