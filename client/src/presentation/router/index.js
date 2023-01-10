import {
    Route, 
    Outlet,
    createBrowserRouter,
    createRoutesFromElements} from "react-router-dom"
import authRoute from "./authRouter"
import driverRouter from "./driverRouter"
import vehicleRouter from "./vehicleRouter"
import feedRouter from "./feedRouter"
import { Home, Error } from "../views/pages"
import { AuthProvider } from '../state'

const router = createRoutesFromElements(
    <Route
        path="/"
        element={<AuthProvider><Outlet/></AuthProvider>}
        errorElement={<Error/>}>

        <Route
            index
            element={<Home/>} />

        {authRoute()}
        {feedRouter()}
        {driverRouter()}
        {vehicleRouter()}
    </Route>
)
export default createBrowserRouter(router)