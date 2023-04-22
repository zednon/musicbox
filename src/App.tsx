// App.tsx

import { AudioPlayer } from "./components/AudioPlayer";

const audio = {
  url: "https://cdn.discordapp.com/attachments/1015854891312365590/1046528112051093574/Kiki_Rockwell_-_Madeline_Official_Video_01.mp3",
  title: "Madeline",
  author: "Kiki Rockwell",
  thumbnail:
    "https://cdn.discordapp.com/attachments/1015854891312365590/1099034581010759790/katherine-mccormack-j1egA73qp7c-unsplash.jpg",
};

const App = ()=> {
  return (
   
    <div className="container mx-auto text-center">
      
      <div className="md:w-1/2 lg:w-1/3 mx-auto">
        <AudioPlayer
          url={audio.url}
          title={audio.title}
          author={audio.author}
          thumbnail={audio.thumbnail}
        />
      </div>
    </div>
  );
}

export default App;
