
import PropTypes from 'prop-types';

const Data = ({ data,handleCook }) => {
    
    
    const { recipe_name, recipe_id, recipe_image, short_description, ingredients, preparing_time, calories } = data
    return (
        <div className='border border-gray-400 p-5 rounded-2xl flex flex-col gap-5'>
            <div>
                <img className='w-full h-52 rounded-2xl' src={recipe_image} alt="" />
            </div>
            <h3 className='text-xl font-bold'>{recipe_name}</h3>
            <p >{short_description}</p>
            <hr />
            <p className='font-medium text-lg'>Ingredients: {ingredients.length}</p>
            <ul>
                {
                    ingredients.slice(0, 3).map((ingredient, indx) =>  <li key={indx}>-- {ingredient}</li>)
                }
            </ul>
            <div className='flex gap-4'>
                <div className='flex gap-2'>
                    <svg width="19.500000" height="19.500000" viewBox="0 0 19.5 19.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M1.43 13.19C1.88 14.28 2.55 15.27 3.38 16.11C4.22 16.94 5.21 17.61 6.3 18.06C7.39 18.51 8.56 18.75 9.75 18.75C10.93 18.75 12.1 18.51 13.19 18.06C14.28 17.61 15.27 16.94 16.11 16.11C16.94 15.27 17.61 14.28 18.06 13.19C18.51 12.1 18.75 10.93 18.75 9.75C18.75 8.56 18.51 7.39 18.06 6.3C17.61 5.21 16.94 4.22 16.11 3.38C15.27 2.55 14.28 1.88 13.19 1.43C12.1 0.98 10.93 0.75 9.75 0.75C8.56 0.75 7.39 0.98 6.3 1.43C5.21 1.88 4.22 2.55 3.38 3.38C2.55 4.22 1.88 5.21 1.43 6.3C0.98 7.39 0.75 8.56 0.75 9.75C0.75 10.93 0.98 12.1 1.43 13.19Z" stroke="#282828" strokeOpacity="0.800000" strokeWidth="1.500000" strokeLinejoin="round" />
                    </svg>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex gap-2'>
                    <svg width="13.500000" height="18.500000" viewBox="0 0 13.5 18.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M5.75 0.75C5.75 3.78 3.97 5.49 2.75 6.75C1.52 8 0.75 9.99 0.75 11.75C0.75 13.34 1.38 14.86 2.5 15.99C3.63 17.11 5.15 17.75 6.75 17.75C8.34 17.75 9.86 17.11 10.99 15.99C12.11 14.86 12.75 13.34 12.75 11.75C12.75 10.21 11.69 7.81 10.75 6.75C8.96 9.75 7.95 9.75 6.75 8.75C8.75 5.79 6.75 1.75 5.75 0.75Z" stroke="#282828" strokeOpacity="0.800000" strokeWidth="1.500000" strokeLinejoin="round" />
                    </svg>
                    <p>{calories}</p>
                </div>
            </div>
            <button className='px-3 py-4 bg-[#0BE58A] rounded-lg font-medium text-lg' onClick={()=>handleCook(data)}>Want to Cook</button>

        </div>
    );
};
Data.propTypes = {
    data: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
}
export default Data;