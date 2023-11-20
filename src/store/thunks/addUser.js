import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("https://tcxzdw-3500.csb.app/users", {
    name: faker.person.fullName(),
  });
  return response.data;
});

export { addUser };
