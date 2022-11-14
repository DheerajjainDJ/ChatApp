const users = [];

export const addUser = ({ id, name, room }) => {
  let userName = name.trim().toLowerCase();
  let userRoom = room.trim().toLowerCase();

  let existingUser = users.find(
    (user) => user.userName === userName && user.userRoom === userRoom
  );

  if (existingUser) {
    return { error: "username already taken" };
  }
  
  let user = { id, userName, userRoom };
  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id) => {
  let user = users.find((user) => user.id === id);
  return user;
};

export const usersInARoom = (room) => {
  return users.filter((user) => user.userRoom === room);
};
