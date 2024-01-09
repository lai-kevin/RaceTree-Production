import Image from "next/image";
const User = () => {
  const src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU";
  return (
    <div className="bg-base-100 rounded-2xl p-5 m-5">
      <figure className="px-10 pt-10">
        <Image
          loader={() => src}
          src={src}
          alt="Profile Picture"
          className="rounded-xl mx-auto" // Add mx-auto class to center the image
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body p-0 items-center">
        <h1 className="card-title text-3xl mt-3">KEVIN_AMG</h1>
        <div className="text-center">
          <h2 className="text-sm text-gray-600">&quot;The Falcon&quot;</h2>
        </div>

        {/* Stats Section */}
        <div className="my-2">
          <div className="stats stats-horizontal bg-secondary">
            <div className="stat p-3">
              <div className="stat-title">Profile Views</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat p-3">
              <div className="stat-title">Reputation</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="card-actions justify-center">
          <button className="btn btn-primary w-full bg-accent">
            Highlights
          </button>
          <button className="btn btn-primary w-full bg-accent">
            Driving Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
