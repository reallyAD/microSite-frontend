const LoadingPage = ({gif, message= 'Processing'}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <img
                src={gif}
                alt="Loading..."
                className="w-40 h-40"
            />
            <p className="mt-4 text-lg font-medium">{message}</p>
        </div>
    )
}

export default LoadingPage