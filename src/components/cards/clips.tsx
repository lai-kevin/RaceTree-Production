import Link from "next/link";

const sampleClips = [
  {
    video:
      "https://www.youtube.com/watch?v=CRW2nQAYs2Q",
    title: "Assetto Corsa Competizion Porsche",
    description: "This is a sample clip",
  },
  {
    video: "https://www.youtube.com/watch?v=bG5S_yNws7k",
    title: "Bad Racing in iRacing",
    description: "This is a sample clip",
  },
  {
    video:
      "https://www.youtube.com/watch?v=GtC6sPS6eNY",
    title: "Ferrari ACC Race",
    description: "This is a sample clip",
  },
  {
    video: "https://www.youtube.com/watch?v=BwdbuuI3v3A",
    title: "AMS2 Web Racing",
    description: "This is a sample clip",
  },
];

const Clip = ({
  video,
  title,
  description,
}: {
  video: string;
  title: string;
  description: string;
}) => {
  const videoId = video.split("v=")[1];
  return (
    <>
      <div className="grid h-20 bg-base-300 rounded-box p-3">
        <div className="flex items-center">
          <div className="text-md flex-grow">{title}</div>
          <div className="flex items-center align-middle justify-end">
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="w-16 h-16 mt-[-5px] rounded-md"
          />
        </div>
        </div>
      </div>
      <div className="divider" />
    </>
  );
};

const Clips = () => {
  return (
    <div className="bg-base-100 rounded-2xl m-5">
      <div className="card-body p-5">
        <h1 className="card-title text-xl">Clips</h1>
        <div className="w-full border-opacity-50 h-[500px]">
          {sampleClips.slice(0, 3).map((clip) => (
            <Clip
              key={clip.title}
              video={clip.video}
              title={clip.title}
              description={clip.description}
            />
          ))}
          <div className="flex justify-center">
            <Link href="/sign-in">
              <button className="btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clips;
