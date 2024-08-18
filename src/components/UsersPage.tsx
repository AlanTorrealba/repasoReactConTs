import { useUser } from "../hooks/useUser";
import UsersRow from "./userRows";

export const UsersPage = () => {
  const { nextPage, prevPage, users } = useUser();

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
          {users.map((user) => (
            <UsersRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default UsersPage;
