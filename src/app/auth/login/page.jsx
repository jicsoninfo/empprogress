'use client';

import Link from "next/link";
//import React from "react";
import { signIn, useSession } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";
import React, {useEffect, useState} from "react";



const Login = (url) => {


const session = useSession()
const router = useRouter();
const params = useSearchParams();
const [error, setError] = useState("");
const [success, setSuccess] = useState("");


useEffect(()=>{
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);


if(session.status === "loading"){
    return <p>Loading..............</p>
}

if(session.status === "authenticated"){
    router?.push("/dashboard");
}

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        //console.log(email);
        signIn("credentials",{
            email:email,
            password:password,
            
          });
      };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="p-4 bg-body-secondary col-lg-4">
                <h1 className="text-3xl font-bold text-center mb-4">Info Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" autoComplete="on" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" autoComplete="off" placeholder="Passowrd"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary w-100">Login</button>
                    </div>
                    {error && error}
                </form>
                <Link href="/auth/register">Create new account</Link>
            </div>
        </div>
    );
};

export default Login;


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