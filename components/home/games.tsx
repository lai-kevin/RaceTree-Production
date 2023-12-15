import Image from "next/image"
import car from "../../images/interior.jpg"
const Games = () => {
    return(
        <div className="bg-neutral p-5">
            <Image src={car} alt="car" className="wfull rounded-3xl" />
        </div>
    )
}

export default Games;