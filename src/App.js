
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
const data = [
    {month:"Jan", amount:15000},
    {month:"FEb", amount:90000},
    {month:"Mar", amount:36000},
    {month:"Apr", amount:65000},
    {month:"May", amount:22000},
];
export default class Example extends PureComponent {
  static demoUrl = 'https:///www.hoora.in';
  render() {
    return (
      <div  style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={100}
            height={50}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
