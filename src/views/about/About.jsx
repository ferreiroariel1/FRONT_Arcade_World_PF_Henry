import style from "./about.module.css"

function About() {
  return (
    <div className={style.container}>
      <div className={style.descrip} >
        <h3>Description of Arcade World</h3>
        <p>Welcome to Arcade World!
            <br />
            Arcade World is a virtual paradise for all video game lovers. Upon entering the site, you are met with a vibrant and dynamic design that captures the essence of the fun and excitement of video games.

            The homepage features a variety of featured games, from retro classics to the latest releases. Each game comes with a detailed description, screenshots and user reviews to help you make an informed decision.

            At Arcade World, you can search for games by genre, platform or even by developer. We also offer an "Upcoming Releases" section where you can view the most anticipated games and pre-order them.

            Arcade World prides itself on excellent customer service. If you have any questions or problems, our support team is always ready to help.

            So whether you're a casual gamer or a video game enthusiast, Arcade World has something for you. Come and immerse yourself in the exciting world of video games with Arcade World!
        </p>
      </div>
        <div>
        <div className={style.mission}>
          <h3>Mission of Arcade World</h3>
          <p>Operation Retro Game Rescue

              At Arcade World, we have discovered that some of our treasured retro games have mysteriously disappeared from our library. Your mission, should you choose to accept it, is to help us recover these games.

              To achieve this, you will have to navigate through the vast world of Arcade World, exploring different genres and platforms. You'll have to interact with other users and review their reviews to gather clues about the whereabouts of the lost games.

              Once you have gathered enough clues, you can start searching for the missing games. But be careful, some games may be protected by challenges and riddles that you will have to solve!

              If you manage to recover all the retro games, you will be rewarded with a place in our Arcade World Hall of Fame and receive a pack of gaming accessories.

              Good luck on your mission, gamer, the world of Arcade World is counting on you!</p>  
        </div>
        <div className={style.vision}>
          <h3>Vision of Arcade World</h3>
          <p>
          Imagine a digital universe, a cosmos of codes and pixels, where every star is a video game waiting to be discovered. This is Arcade World, an ever-expanding universe of interactive adventures.

          At the center of this universe, you will find the home page, a kaleidoscope of colors and shapes that constantly changes to reflect the most popular games and the latest releases. Here, classic retro games coexist with the latest innovations in the world of gaming.

          Arcade World's galaxies are organized by genre, platform and developer, making it easy to navigate this vast universe. Each game is like a planet to be discovered, with its own story, characters and challenges.

          In addition to games, Arcade World also houses a variety of accessories to enhance your gaming experience. From controllers to headsets, each item is like a tool to help you on your journey through the gaming universe.

          In short, Arcade World is not just an online video game store. It's an ever-expanding universe of interactive adventures, a community of gamers and a resource for all things gaming - come join the fun!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;