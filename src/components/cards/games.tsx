import Image from "next/image";

const Games = () => {
    const caro = "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg";
    return (
      <div className="bg-secondary  rounded-2xl m-5">
        <div className="card-body p-5">
          <h1 className="card-title text-xl">Games</h1>
          <div className="carousel rounded-box">
            <div className="carousel-item mr-2">
              <Image
                loader={() => caro}
                src={caro}
                alt="Burger"
                className="carousel-item"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="carousel-item mr-2">
              <Image
                loader={() => caro}
                src={caro}
                alt="Burger"
                className="carousel-item"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="carousel-item mr-2">
              <Image
                loader={() => caro}
                src={caro}
                alt="Burger"
                className="carousel-item"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="carousel-item mr-2">
              <Image
                loader={() => caro}
                src={caro}
                alt="Burger"
                className="carousel-item"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Games;