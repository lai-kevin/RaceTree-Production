interface AboutMeProps {
  aboutMe: string;
}
const AboutMe = ({aboutMe} : AboutMeProps) => {
  return (
    <div className="bg-base-100 rounded-2xl m-5">
      <div className="card-body p-5">
        <h1 className="card-title text-xl">About Me</h1>
        <p className="font-mono">
          {aboutMe}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
