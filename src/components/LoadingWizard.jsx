import { CircularProgress } from "@mui/material"

const LoadingPage = ({message= 'Processing'}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <CircularProgress
                sx={{
                    color: 'white'
                }}
                size={82}
            />
            <p className="mt-4 text-lg font-medium">{message}</p>
        </div>
    )
}

export default LoadingPage