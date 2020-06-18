import { createSlice } from "redux-starter-kit";
import faker from "faker";

const users = [...new Array(1000)].map(() => ({
  id: faker.random.uuid(),
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

const { actions, reducer } = createSlice({
  initialState: {
    users,
    selected: null,
  },
  reducers: {
    selectUser(state, { payload: user }) {
      state.selected = user || null;
    },
  },
});

export const { selectUser } = actions;

export default reducer;
