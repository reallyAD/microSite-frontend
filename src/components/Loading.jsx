import { CircularProgress } from "@mui/material"
import Lottie from "lottie-react"
import loadingAnimation from "../assets/loading-animation-orange.json"


const LoadingPage = ({message= 'Processing'}) => {
    return (
        <div className="text-white flex flex-col items-center justify-center h-screen bg-black">
            {/* <CircularProgress
                sx={{
                    color: 'white'
                }}
                size={82}
            /> */}
            <Lottie animationData={loadingAnimation} loop={true} className="w-100 h-100 -mt-24 -mb-24" />
            <span className="mt-4 text-xl font-medium">{message}</span>
        </div>
    )
}

export default LoadingPage