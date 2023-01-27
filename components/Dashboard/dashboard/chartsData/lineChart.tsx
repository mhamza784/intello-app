import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";

ChartJS.register(CategoryScale);

function LineChart({ chartData, width, height }: any) {
    const userData = {
        labels: chartData.map((data: { year: any }) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: chartData.map((data: { userGain: any }) => data.userGain),
                backgroundColor: ["#073170"],
                borderColor: "#041a3b",
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

export default LineChart;
