import { Card } from "antd";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { callPostDashboard } from "../../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// export const fetchRevenue = () => {
//   return fetch("https://dummyjson.com/carts").then((res) => res.json());
// };

const DashboardChart = () => {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    callPostDashboard().then((res) => {
      const labels = res.map((cart) => {
        return `Tháng-${cart.month}`;
      });
      const data = res.map((cart) => {
        return cart.noOfUsers;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Số lượng người dùng",
            data: data,
            backgroundColor: "#bc3d52",
          },
        ],
      };
      setReveneuData(dataSource);
    });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Lượt truy cập",
      },
    },
  };

  return (
    <Card
      style={{
        width: 790,
        height: 400,
        justifyContent: "center",
        boxShadow: "2px 0.8rem 20px 5px rgba(0, 0, 0, .08)",
      }}
    >
      <Bar options={options} data={reveneuData} />
    </Card>
  );
};

const Chart = () => {
  return <DashboardChart />;
};

export default Chart;
