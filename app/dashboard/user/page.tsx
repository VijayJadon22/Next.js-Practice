const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(res, sec * 1000));
const UserPage = async () => {
  await waitFor(3);
  //   console.log(message);
  return <h1 className="text-2xl font-bold">This is UserPage</h1>;
};

export default UserPage;
