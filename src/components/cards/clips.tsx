const Clips = () => {
  return (
    <div className="bg-base-100 rounded-2xl m-5">
      <div className="card-body p-5">
        <h1 className="card-title text-xl">Clips</h1>
        <div className="w-full border-opacity-50 h-[500px]">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider" />
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider" />
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider" />
          <div className="flex justify-center">
            <button className="btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clips;
