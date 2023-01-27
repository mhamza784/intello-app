import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";

ChartJS.register(CategoryScale);

function AreaChart({ chartData, width, height }: any): JSX.Element {
    const userData = {
        labels: chartData.map((data: { year: any }) => data.year),
        datasets: [
            {
                fill: true,
                label: "Users Gained",
                data: chartData.map((data: { userGain: any }) => data.userGain),
                backgroundColor: ["#073170"],
                borderColor: "#0b5dd9",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div>
            <Line
                data={userData}
                width={width}
                height={height}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}

export default AreaChart;
