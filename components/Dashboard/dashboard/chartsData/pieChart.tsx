import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";

ChartJS.register(CategoryScale);

interface PiChartProps {
    chartData: any;
    width: any;
    height: any;
}

function PieChart({ chartData, width, height }: PiChartProps) {
    const userData = {
        labels: chartData.map((data: { year: any }) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: chartData.map((data: { userGain: any }) => data.userGain),
                backgroundColor: ["#073170", "#0a53c2", "#031b40", "#458bf5"],
                borderColor: "#041a3b",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div>
            <Doughnut
                data={userData}
                width={width}
                height={height}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}

export default PieChart;
