import Frame from "@/src/components/layout/frame";
import Grid from "@/src/components/layout/grid";
import UserProfile from "@/src/components/cards/userCardSmall";
import User from "@/src/components/cards/user";
import Desktop from "@/src/components/layout/desktop";
import Mobile from "@/src/components/layout/mobile";
import SearchBar from "@/src/components/search";

//Sample Data
const users = [
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 100,
    username: "user1",
    nickname: "User One",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 200,
    username: "user2",
    nickname: "User Two",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 300,
    username: "user3",
    nickname: "User Three",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 100,
    username: "user1",
    nickname: "User One",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 200,
    username: "user2",
    nickname: "User Two",
  },
  {
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvJ_fTuGojlhWGEDF18duOJxGADfO1g1YdA&usqp=CAU",
    reputation: 300,
    username: "user3",
    nickname: "User Three",
  },
];

interface TextLargeCenteredProps {
  text: string;
  className?: string;
}

const TextLargeCentered: React.FC<TextLargeCenteredProps> = ({ text, className }) => {
  return (
    <div className={className}>
      {text}
    </div>
  );
};

export default function Browse() {
  return (
    <Frame navMode="dark" className="pt-[4rem] bg-neutral min-h-screen">
      <TextLargeCentered text="RACETREE Users" className="text-6xl font-bold text-center text-yellow-500 m-5" />
      <TextLargeCentered text="Search By Steam ID, RaceTree ID, or Team" className="text-lg font-bold text-center text-white m-5" />
      <SearchBar className="px-4 py-2 m-5 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300" />
      <Desktop>
      <Grid columns={4} gap={3} className="p-5 max-w-7xl ">
        {users.map((user) => (
          <UserProfile key={user.username} {...user} />
        ))}
      </Grid>
      </Desktop>
      <Mobile>
        <Grid columns={1} gap={3} className="p-5 max-w-7xl ">
          {users.map((user) => (
            <UserProfile key={user.username} {...user} />
          ))}
        </Grid>
      </Mobile>
    </Frame>
  );
}
