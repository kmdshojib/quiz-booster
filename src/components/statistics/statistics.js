import React from 'react'
import { BarChart, Bar,XAxis } from "recharts";
import { useLoaderData } from 'react-router-dom';


 const Statistics =() => {
    const dataBfromApi = useLoaderData()
    const getData = dataBfromApi.data.map(dataValue =>{
        let newData =[]
        newData.push({name:dataValue.name,uv:dataValue.total})
        return newData
    })
    // made array of objets
    const simplifiedData = (getData = []) => {
        const res = [];
        getData.forEach(element => {
           element.forEach(el => {
              res.push(el);
           });
        });
        return res;
     };
    return (
        <div className='container mt-5'>
            <BarChart width={450} height={450} data={simplifiedData(getData)}>
                <Bar dataKey="uv" fill="#8884d8" />
                <XAxis dataKey="name"/>
            </BarChart>
        </div>
    );
}


export default Statistics