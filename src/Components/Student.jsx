import propTypes from "prop-types"


export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Runs Scored</th>
                    <td>{props.runs}</td>
                </tr>
                <tr>
                    <th>Wicket</th>
                    <td>{props.wicket ? "NOT OUT" : "OUT"}</td>
                </tr>
                <tr>
                    <th>Team</th>
                    <td>{props.team}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}


Student.propTypes ={
    name: propTypes.string,
    runs: propTypes.number,
    wicket: propTypes.bool,
    team: propTypes.string

}