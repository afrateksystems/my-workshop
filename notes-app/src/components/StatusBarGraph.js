import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function StatusBarChart({ notes }) {
  // count open & closed notes
  const openCount = notes.filter((note) => note.status === "open").length;
  const closedCount = notes.filter((note) => note.status === "closed").length;

  const data = [
    { status: "Open", count: openCount },
    { status: "Closed", count: closedCount },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 600, height: 300, margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 5  }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatusBarChart;