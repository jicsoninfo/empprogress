"use client"
import { useEffect } from "react"
//import { Chart } from "chart.js";
import Chart from 'chart.js/auto';
function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: [
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
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
            {/* Pie chart */}
            {/* <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">Pie Chart</h1>
            <div className="max-w-80 h-80 flex mx-auto my-auto"> */}
            {/* <div className="w-[1100px] h-screen flex mx-auto my-auto"> */}
                {/* <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas id='myChart'></canvas>
                </div>
            </div> */}
          
          <h1 className="text-center mt-5 text-xl">Pie Chart</h1>
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