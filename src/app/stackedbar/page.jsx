"use client"
import { useEffect } from "react"
//import { Chart } from "chart.js";
import Chart from 'chart.js/auto';
function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    borderWidth: 2
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    borderWidth: 2
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    borderWidth: 2
                }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }],
                }
            },
        });
        // Optionally, if you want to destroy the chart under certain conditions
        return () => {
            myChart.destroy();
         };
    }, [])


    return (
        <>
            {/* Stacked chart */}
            {/* <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">Stacked-Bar Chart</h1>
            <div className="max-w-80 h-80 flex mx-auto my-auto"> */}
            {/* <div className="w-[1100px] h-screen flex mx-auto my-auto"> */}
                {/* <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div> */}

            <h1 className="text-center mt-5 text-xl">Stacked-Bar Chart</h1>
            <div className="container mt-5 w-50 h-50">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example;