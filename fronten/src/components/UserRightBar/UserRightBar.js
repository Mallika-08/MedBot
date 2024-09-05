import React from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import {Bar, Line} from "react-chartjs-2";
import "./userrightbar.css";
import Navbar from '../Navbar.jsx';
import data1 from '../../data/data1.json';
import data2 from '../../data/data2.json';
import yearData from '../../data/yearData.json';

function UserRightBar(){
    return(
        <div className='mainHomerightbar'>
            <Navbar/>
            <div>
                <div className='itemContainer'>
                    <div className='itemContainer1'>
                        <div>
                            <p className='taskProgress'>BP level</p>
                            <p className='taskCounter'>120</p>
                            <p className='currentMonth1'>Current Month</p>
                        </div>
                    <div>
                       <Bar
                        data={
                            {
                                labels: data1.map((data) => data.label),
                                datasets: [
                                    {
                                        label: "Avg. BP",
                                        data: data1.map((data)=>data.value),
                                        backgroundColor: [
                                            "rgba(245, 147, 39, 0.8)",
                                            "rgba(129, 245, 39, 0.8)",
                                            "rgba(164, 253, 221, 0.8)"
                                        ]
                                    }
                                ]
                            }
                        }
                       />
                    </div>
                 </div>
                    <div className='itemContainer2'>
                    <div>
                            <p className='taskProgress'>Sugar level</p>
                            <p className='taskCounter'>90</p>
                            <p className='currentMonth1'>Current Month</p>
                        </div>
                    <div>
                       <Bar
                        data={
                            {
                                labels: data2.map((data)=>data.label),
                                datasets: [
                                    {
                                        label: "Avg. Sugar",
                                        data: data2.map((data)=>data.value),
                                        backgroundColor: [
                                            "rgba(164, 253, 221, 0.8)",
                                            "rgba(245, 147, 39, 0.8)",
                                            "rgba(129, 245, 39, 0.8)"

                                        ]
                                    }
                                ]
                            }
                        }
                       />
                    </div>
                    </div>
                    <div className='itemContainer3'>
                    <div>
                            <p className='taskProgress'>Oxygen rates</p>
                            <p className='taskCounter'>162</p>
                            <p className='currentMonth1'>Current Month</p>
                        </div>
                    <div>
                       <Bar
                        data={
                            {
                                labels: ["Day-1","Day-15","Day-30"],
                                datasets: [
                                    {
                                        label: "Oxy-meter",
                                        data: [500,100,400]
                                    }
                                ]
                            }
                        }
                       />
                    </div>
                    </div>
                </div>
                <div className='middleTaskChart'>
                    <p>Yearly Health Stats </p>
                    <div className='lineChart'>
                        <Line
                            data={{
                                labels: yearData.map((data)=>data.label),
                                datasets: [
                                    {
                                        label: "BP",
                                        data: yearData.map((data) => data.BP),
                                        backgroundColor: "#95f5f2",
                                        borderColor: "#95f5f2"
                                    },
                                    {
                                        label: "Sugar",
                                        data: yearData.map((data) => data.Sugar),
                                        backgroundColor: "#fa415d",
                                        borderColor: "#fa415d"
                                    }
                                ]
                            }}
                        />
                    </div>
                </div>

                <div className='lastRow'>
                    <div className='conditions'>
                            <p className='progress'>Progress</p>
                            <p className='rate'>80%</p>
                            <p className='status'>Good</p>
                    </div>
                    <div className='time'>
                            <p className='visits'>Hospital Visits</p>
                            <p className='date'>12 September, 2024</p>
                            <p className='pending'>Appointment is due</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserRightBar;