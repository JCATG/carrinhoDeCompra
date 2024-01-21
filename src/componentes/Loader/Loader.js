
import loading from '../../img/loader.svg'
function Loading() {
    return (
        <div className='flex w-full text-center justify-center items-center mx-auto'>
            <img src={loading} alt="loading" className='mt-1/2'/>
        </div>
    )
}

export default Loading

