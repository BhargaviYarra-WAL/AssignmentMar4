import { useEffect, useState } from "react";
import axios from "axios";
const Employe = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        axios.get("EmployeOb.json").then((res) => {
            setEmployee(res.data);
        })
    }, []);
    return (
           <div className="ShowEmp">
                <h2>All Employee Details</h2>
                <table>
                    <tr style={{background:"lightyellow"}}>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {
                    employee.map((val) => {
                        return (
                            <tr style={{background:"lightyellow"}}>
                                <td>{val.name}</td>
                                <td>{val.loc}</td>
                            </tr>

                        )
                    })
                }
                </table>
               
            </div>
    )
}
export default Employe;
