import PropTypes from "prop-types";

const BoardSingleData = ({singleItem}) => {
    const {recipe_name,  preparing_time, calories } = singleItem;
    return (
        <div>
            {/* {recipe_name} {preparing_time} {calories} */}
            <table>
                <tr>
                    <td>{recipe_name} </td>
                    <td>{preparing_time} </td>
                    <td>{calories}</td>
                </tr>
            </table>
        </div>
    );
};
BoardSingleData.propTypes = {
    singleItem: PropTypes.object.isRequired
}
export default BoardSingleData;