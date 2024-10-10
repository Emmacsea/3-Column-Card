import sedan from "../assets/images/icon-sedans.svg";
import suv from "../assets/images/icon-suvs.svg";
import luxury from "../assets/images/icon-luxury.svg";

export default function Columncard () {
    return(
        <div className="bg-neutral-vlightgray flex justify-center items-center h-screen w-full px-80">
            <div className="flex justify-center items-center rounded-lg ">
                <div className="bg-primary-brightorange py-6 px-12 w-1/3 rounded-s-lg">
                    <div><img className="w-12" src={sedan} alt="" /></div>
                    <h3 className="text-neutral-vlightgray mt-6 text-2xl uppercase font-bold">Sedans</h3>
                    <p className="text-neutral-transwhite mt-6 text-base font-light">
                        Choose a sedan for its affordability and excellent 
                        fuel economy. Ideal for cruising in the city or 
                        on your next road trip.
                    </p>

                    <button type="click" className="btn text-primary-brightorange capitalize text-lg rounded-full bg-neutral-vlightgray py-2 px-6 mt-10">Learn more </button>

                </div>

                <div className="bg-primary-darkcyan py-6 px-12 w-1/3">
                    <div><img className="w-12" src={suv} alt="" /></div>
                    <h3 className="text-neutral-vlightgray mt-6 text-2xl uppercase font-bold">Suvs</h3>
                    <p className="text-neutral-transwhite mt-6 mb-6 text-base font-light">
                        Take an SUV for its spacious interior, power, and 
                        versatility. Perfect for your next family vacation and 
                        off-road adventures.
                    </p>

                    <button type="click" className="btn text-primary-darkcyan capitalize text-lg rounded-full bg-neutral-vlightgray py-2 px-6 mt-10">Learn more </button>

                </div>

                <div className="bg-primary-vdarkcyan py-6 px-12 w-1/3 rounded-e-lg">
                    <div><img className="w-12" src={luxury} alt="" /></div>
                    <h3 className="text-neutral-vlightgray mt-6 text-2xl uppercase font-bold">Luxury</h3>
                    <p className="text-neutral-transwhite  mt-6 text-base font-light">
                        Cruise in the car brands without the bloated prices. 
                        Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>

                    <button type="click" className="btn text-primary-vdarkcyan capitalize text-lg rounded-full bg-neutral-vlightgray py-2 px-6 mt-10">Learn more </button>

                </div>

            </div>
        </div>

    )
}