import {PropagateLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-145px)]'>
            <PropagateLoader size={100} color='#F92FD3'></PropagateLoader>
            
        </div>
    );
};

export default Loader;