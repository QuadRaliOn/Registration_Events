import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useGetRegistrationsByDate } from "../hooks/participant/useGetRegistrationsByDate";

const RegistrationChart = ({ eventId }) => {
  const { days } = useGetRegistrationsByDate(eventId);
  let chartData = {};

  if (days) {
    const registrations = days.map((item) => item.registrations);
    const labels = days.map((item) => item.date);
    chartData = {
      labels,
      datasets: [
        {
          label: "Registrations per Day",
          data: registrations,
          backgroundColor: "#93c5fd",
          borderColor: "#38bdf8 ",
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <div>
      <h2>Registrations per Day</h2>
      {days && (
        <Bar
          data={chartData}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Number of Registrations",
                },
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default RegistrationChart;
