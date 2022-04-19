import axios from "axios";

const postNote = async ({ note, userId }) => {
  const url = "https://60b793ec17d1dc0017b8a6bc.mockapi.io/users/";
  await axios
    .post(`${url}${userId}`, {
      note: note,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const getNote = async ({ note, userId }) => {
  const url = "https://60b793ec17d1dc0017b8a6bc.mockapi.io/users/";
  return await axios
    .get(`${url}${userId}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { postNote, getNote };
