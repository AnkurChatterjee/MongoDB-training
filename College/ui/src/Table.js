export default function Table(props) {
    return (                        //for the Table function
        <table border={1}>
            <thead>
                <tr>
                    {props.columns.map((column,index) => (<th key={index+1000}>{column.name}</th>))}
                </tr>
            </thead>
            <tbody>
                {props.data.map((data,index) => {
                    return(        //for the map function
                        <tr key = {index+2000}>
                            {props.columns.map((column,index) => (<td key = {index}>{data[column.name]}</td>))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}