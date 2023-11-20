/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { GoTrashcan } from "react-icons/go";
import { removeUsers } from "../store/thunks/removeUsers";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUsers);

  const handleDeleteUser = () => doRemoveUser(user);
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
