import connect from "@/utils/db";
import User from "@/models/User";

import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
//import  CredentialsProvider from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            // id:"credentials",
            // name: "Credentials",
            async authorize(credentials){
                //console.log(credentials);
                await connect();
                try{
                    const user = await User.findOne({
                        email: credentials.email,
                    });
                    if(user){
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password, user.password
                        );
                        if(isPasswordCorrect){
                            return user;
                        }else{
                            throw new Error("Wrong Credentials");
                        }
                    }else{
                        throw new Error("User not found!");
                    }

                }catch(err){
                    throw new Error(err);
                }
            }
        }),
    ],
    pages: {
        error: "/auth/login",
      },
      

    // callbacks: {
    //     async jwt({ token, account }) {
    //       // Persist the OAuth access_token to the token right after signin
    //       if (account) {
    //         token.accessToken = account.access_token
    //       }
    //       return token
    //     },
    //     async session({ session, token, user }) {
    //       // Send properties to the client, like an access_token from a provider.
    //       session.accessToken = token.accessToken
    //       return session
    //     }
    //   },



});

export {handler as GET, handler as POST};