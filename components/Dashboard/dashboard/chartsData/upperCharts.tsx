/* eslint-disable sonarjs/no-duplicate-string */
import React from "react";
import { useTranslation } from "react-i18next";
import BarChart from "./barChart";
import PieChart from "./pieChart";
import LineChart from "./lineChart";

const UpperCharts = () => {
    const { t: translations } = useTranslation();
    return (
        <div className="grid grid-flow-col h-[16rem] md:px-5 md:mt-6 gap-6 py-5 max-md:gap-10 max-md:justify-center place-content-evenly">
            <div className="border-grey border-solid border-2 p-2">
                <LineChart
                    chartData={translations("dashboard.chartsData", {
                        returnObjects: true,
                    })}
                    width="550"
                    height="250"
                />
            </div>
            <div className="border-grey border-solid border-2 p-2">
                <PieChart
                    chartData={translations("dashboard.chartsData", {
                        returnObjects: true,
                    })}
                    width="400"
                    height="250"
                />
            </div>
            <div className="border-grey border-solid border-2 p-2">
                <BarChart
                    chartData={translations("dashboard.chartsData", {
                        returnObjects: true,
                    })}
                    width="400"
                    height="250"
                />
            </div>
        </div>
    );
};

export default UpperCharts;
