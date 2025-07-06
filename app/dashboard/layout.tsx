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
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Payments</li>
            <li>Profile</li>
          </ul>
        </aside>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
