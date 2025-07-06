import { NextPage } from "next";
import { preLoad } from "./todo/page";

const DashboardPage: NextPage = () => {
  preLoad();
  return (
    <div>
      <h1 className="text-2xl font-bold">I am a Dashboard Page</h1>
    </div>
  );
};
export default DashboardPage;
