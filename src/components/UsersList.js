import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => doCreateUser();

  const renderedUsers = data?.map((user) => {
    return <UsersListItem key={user.id} user={user} />;
  });

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user"}
      </div>
      {isLoadingUsers ? (
        <Skeleton times={4} className="h-10 w-full" />
      ) : loadingUsersError ? (
        <div>Error fetching data...</div>
      ) : (
        renderedUsers
      )}
    </div>
  );
}

export default UsersList;
