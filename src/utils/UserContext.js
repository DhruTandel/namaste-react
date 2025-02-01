import { createContext } from "react";

const UserContext=createContext({
    loggeddInUser:"Deafault user",
})

export default UserContext;