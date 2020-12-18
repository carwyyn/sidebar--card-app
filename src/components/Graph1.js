import React, { PureComponent, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

const data = [
  {
    name: 'Dec 1', Hospitalisations: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Dec 2', Hospitalisations: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Dec 3', Hospitalisations: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Dec 4', Hospitalisations: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Dec 5', Hospitalisations: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Dec 6', Hospitalisations: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Dec 7', Hospitalisations: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Dec 8', Hospitalisations: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Dec 9', Hospitalisations: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Dec 10', Hospitalisations: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Dec 11', Hospitalisations: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Dec 12', Hospitalisations: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Dec 13', Hospitalisations: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Dec 14', Hospitalisations: 3490, pv: 4300, amt: 2100,
  },
];

const getData = () => {
  axios.get('http://open.statswales.gov.wales/en-gb/dataset/hlth0092?$orderby=Date_code').then(res => console.log(res));
};

const Graph1 = (props) => {
  // const jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  useEffect(()=> {
    getData();
  }, [])

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Hospitalisations" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  )
};

export default Graph1;
