export default function Table(props) {
    return (                        //for the Table function
        <table border={1}>
            <thead>
                <tr>
                    {props.columns.map((column) => (<th>{column.name}</th>))}
                </tr>
            </thead>
            <tbody>
                {props.data.map((data) => {
                    return(        //for the map function
                        <tr>
                            {props.columns.map((column) => (<td>{data[column.name]}</td>))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}