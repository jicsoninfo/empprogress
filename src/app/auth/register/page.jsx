'use client';

import Link from "next/link";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";


const Register = () => {
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try{
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "applicaation/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/auth/login?success=Account has been created");

        }catch(err){
            setError(err);
            //console.log(err);
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="p-4 bg-body-secondary col-lg-4">
                <h1 className="text-3xl font-bold text-center mb-4">Info Registration</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input type="username" className="form-control" id="username" placeholder="User Name" autoComplete="on" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" autoComplete="on" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" required className="form-control" id="password" placeholder="Passowrd" autoComplete="off"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary w-100">Register</button>
                    </div>
                    {error && "Something went wrong"}
                </form>
                <Link href="/auth/login"> Login with an existing account </Link>
            </div>
        </div>
    );
};

export default Register;


// const Login =() => {
//     return (
//         <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
//             <div className="w-full p-6 bg-cyan-500 rounded-md shadow-md lg:max-w-xl">
//                 <h1 className="text-3xl font-bold text-center text-gray-700">Info</h1>
//                 <form className="mt-6">
//                     <div className="mb-4">
//                         <label
//                             htmlFor="email"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label
//                             htmlFor="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
                    
//                     <div className="mt-2">
//                         <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
//                             Login
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login