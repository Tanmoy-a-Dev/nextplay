import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	plugins: {
		title: {
			display: false,
			text: "Chart.js Bar Chart - Stacked",
		},
	},
	responsive: true,

	maintainAspectRatio: false,
	scales: {
		x: {
			stacked: true,
			// grid: {
			// 	drawBorder: false,
			// 	color: "#94a3b8",
			// },
			ticks: {
				beginAtZero: true,
				color: "green",
				fontSize: 12,
			},
		},
		y: {
			stacked: false,
			// grid: {
			// 	drawBorder: false,
			// 	color: "#94a3b8",
			// },
			ticks: {
				beginAtZero: true,
				color: "green",
				fontSize: 12,
			},
		},
	},
};

function daysInThisMonth() {
	var now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

const labels = Array.from({ length: daysInThisMonth() }, (_, i) => i + 1);

export const data = {
	labels,
	datasets: [
		{
			label: "Unique Visits",
			data: [1000, 950, 900, 1050, 1330],
			backgroundColor: "#fdba74",
		},
		{
			label: "Non-unique Visits",
			data: [3000, 3950, 3900, 3050, 3330],
			backgroundColor: "#f97316",
		},
	],
};

function BarChart() {
	return <Bar options={options} data={data} />;
}

export default BarChart;
