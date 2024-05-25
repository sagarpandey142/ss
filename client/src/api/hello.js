"use client"

import { useSession, signIn } from "next-auth/react"; 

export default function Homes ( ) {
    const session  = useSession();
    console.log("session",session)
    if(session.data == null){
        return <button onClick={signIn}>Login</button>
    }
    return (
        <div>
            <h1>Auth</h1>
        </div>
    )
}