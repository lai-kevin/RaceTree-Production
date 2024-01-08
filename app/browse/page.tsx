import Frame from "@/src/components/layout/frame";
import Grid from "@/src/components/layout/grid";
import UserProfile from "@/src/components/cards/userCardSmall";
import User from "@/src/components/cards/user";
import Desktop from "@/src/components/layout/desktop";
import Mobile from "@/src/components/layout/mobile";
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

export default function Browse() {
  return (
    <Frame className="pt-[4rem] bg-neutral min-h-screen">
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
