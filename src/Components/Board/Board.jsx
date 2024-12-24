
import PropTypes from "prop-types";
import BoardSingleData from "../BoardSingleData/BoardSingleData";
const Board = ({wantCook}) => {
    // const {recipe_name,  preparing_time, calories } = wantCook;
    return (
        <div className="border border-gray-400 p-5 rounded-2xl ">
            <div className="w-full">
                <p>Want to Cook: {wantCook.length}</p>

                <div>
                    {/* <p>{recipe_name}</p>
                    <p>{preparing_time}</p>
                    <p>{calories}</p> */}
                    {
                        wantCook.map((singleItem, indx)=><BoardSingleData key={indx} singleItem={singleItem}></BoardSingleData>)
                    }
                </div>
            </div>
        </div>
    );
};
Board.propTypes ={
    wantCook: PropTypes.array.isRequired
}
export default Board;