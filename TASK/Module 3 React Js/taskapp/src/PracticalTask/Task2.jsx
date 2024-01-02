//  How to Create a List View in React Js?
import { Table } from 'reactstrap';

export default function Task2() {
    const data = [
        {
            name: "python",
            framework: "django",
        },
        {
            name: "java",
            framework: "spring",
        },
    ]
    const display = data.map((e, i) => {
        return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.framework}</td>
        </tr>
    });
    return (
        <>
            <Table bordered borderless dark hover responsive striped>
                <thead>
                    <tr>
                        <td>Sr. No</td>
                        <th>Technology</th>
                        <th>Framework</th>
                    </tr>
                </thead>
                <tbody>
                    {display}
                </tbody>
            </Table>
                        {/* <table>

                            data.map(element => {
                            <td>{e}</td>
                        });

                            {display}

                        </table> */}
        </>
    )
}
