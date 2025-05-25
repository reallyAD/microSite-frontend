import { CircularProgress } from "@mui/material"

const LoadingPage = ({message= 'Processing'}) => {
    return (
        <div className="text-white flex flex-col items-center justify-center h-screen bg-black">
            <CircularProgress
                sx={{
                    color: 'white'
                }}
                size={82}
            />
            <span className="mt-4 text-xl font-medium">{message}</span>
        </div>
    )
}

export default LoadingPage