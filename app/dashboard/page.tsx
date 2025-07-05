// "use client";
const DashboardPage = () => {
  async function sayHello(params: any) {
    "use server";
    console.log("Hello");
    console.log(params);
  }

  console.log("Hey there");
  return (
    <>
      <h1>This is Dashboard Page</h1>
      <form action={sayHello}>
        <input type="text" placeholder="text" name="name"/>
        <button>Submit</button>
      </form>
    </>
  );
};

export default DashboardPage;
