import React from "react";
import Topbar from "@/components/Dashboard/SideBar/index";
import LowerCharts from "./chartsData/lowerCharts";
import UpperCharts from "./chartsData/upperCharts";
import NumericData from "./numericData/numericData";

const Dashboard = () => {
    return (
        <>
            <div className="bg-white w-full h-full px-1 md:px-2  rounded-2xl">
                <Topbar />
                <div className=" rounded-2xl border-t-2 border-solid border-dashboardFormBorder">
                    <NumericData />
                    <UpperCharts />
                    <LowerCharts />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
