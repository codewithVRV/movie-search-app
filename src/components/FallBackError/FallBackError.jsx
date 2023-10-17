import './FallBackError.css'

function FallBackError ({ resetErrorBoundary }) {
    return (
        <>
            <div className='error-wrapper'>
                <h1>Something Went Wrong...</h1>
                <button onClick={resetErrorBoundary}>Try Again</button>
            </div>
        </>
    )
}

export default FallBackError;