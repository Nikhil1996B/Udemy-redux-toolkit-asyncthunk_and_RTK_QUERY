import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUsers = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`https://tcxzdw-3500.csb.app/users/${user.id}`);
  return user;
});

export { removeUsers };
