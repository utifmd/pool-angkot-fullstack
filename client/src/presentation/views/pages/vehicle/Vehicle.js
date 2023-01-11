import { useState } from "react"
import { VehicleItem, SubNavbar } from "../../components"
import { useLoaderData } from "react-router-dom"

const Vehicles = () => {
    const vehicles = useLoaderData()
    const [regex, setRegex] = useState("")
    const [sortToggle, setSortToggle] = useState(false)

    const onSearchValueChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        setRegex(value)
    }
    return (<>
        <div className="container py-5">
            <SubNavbar 
                sortToggle={sortToggle}
                setSortToggle={setSortToggle}
                onSearchValueChange={onSearchValueChange} />

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Angkot kami</h1>
                    <p className="col-md-8 fs-4">Silahkan pilih angkot dibawah untuk digunakan.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { vehicles
                    ?.sort((a, b) => sortToggle
                        ? a.createdAt - b.createdAt
                        : b.createdAt - a.createdAt
                    )
                    ?.filter(({ name, route, policeNumber }) => 
                        name.includes(regex) || 
                        route.includes(regex) || 
                        policeNumber.includes(regex)
                    )
                    ?.map(vehicle => <VehicleItem vehicle={vehicle} />)
                }
            </div>
        </div>
    </>)
}
export default Vehicles