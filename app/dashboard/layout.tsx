import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-black flex items-center justify-between text-white font-semibold py-4 px-5 ">
        <h1 className="text-xl ">LOGO</h1>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex flex-grow">
        <aside className=" border-r border-r-gray-400 w-[15vw]">
          <ul className="flex flex-col gap-6 text-md font-semibold text-gray-600 px-10 pt-8 w-full">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/todo"}>Todos</Link>
            </li>
            <li>
              <Link href={"/dashboard/user"}>User</Link>
            </li>
            <li>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
          </ul>
        </aside>
        <div className="p-4 max-h-screen overflow-x-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
