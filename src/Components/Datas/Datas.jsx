import { useState } from "react";
import { useEffect } from "react";
import Data from "../Data/Data";
import PropTypes from "prop-types";

const Datas = ({handleCook}) => {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(datas => setDatas(datas))
    },[])
    return (
        <div className="grid grid-cols-2 gap-5">
            {
                datas.map((data,ind)=> <Data data={data} key={ind} handleCook={handleCook}></Data>)
            }
        </div>
    );
};
Datas.propTypes = {
    
    handleCook: PropTypes.func.isRequired
}
export default Datas;