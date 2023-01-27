import React from "react";
import { useTranslation } from "react-i18next";
import AreaChart from "./areaChart";
import BubbleChart from "./bubbleChart";

const LowerCharts = (): JSX.Element => {
    const { t: translations } = useTranslation();
    return (
        <div className="grid grid-flow-col h-[16rem] md:px-5 md:mt-10 py-5 max-md:gap-10 max-md:justify-center place-content-evenly">
            <div className="border-grey border-solid border-2 p-2">
                <AreaChart
                    chartData={translations("dashboard.chartsData", {
                        returnObjects: true,
                    })}
                    width="850"
                    height="250"
                />
            </div>
            <div className="border-grey border-solid border-2 p-2">
                <BubbleChart
                    chartData={translations("dashboard.chartsData", {
                        returnObjects: true,
                    })}
                    width="500"
                    height="250"
                />
            </div>
        </div>
    );
};

export default LowerCharts;
