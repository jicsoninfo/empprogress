"use client"
import { useEffect } from "react"
//import { Chart } from "chart.js";
import Chart from 'chart.js/auto';
function Example() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
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
            {/* Doughnut chart */}
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1>
            <div className="max-w-80 h-80 flex mx-auto my-auto"> */}
            {/* <div className="w-[1100px] h-screen flex mx-auto my-auto"> */}
                {/* <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas id='myChart'></canvas>
                </div>
            </div> */}


            <h1 class="text-center mt-5 text-xl">Doughnut Chart</h1>
            <div class="container mt-5 w-50 h-50">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
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