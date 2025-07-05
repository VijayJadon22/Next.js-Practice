const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <h1>NAVBAR</h1>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
