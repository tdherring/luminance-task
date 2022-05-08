import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="tile about">
      <span className="title">
        <FontAwesomeIcon icon={faUser} />
        &nbsp; About
      </span>
      <span className="text-justified">
        <p>
          John Christopher Depp II (born June 9, 1963) is an American actor, producer, musician and painter. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen
          Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTAs.
        </p>
        <p>
          In the 2000s, Depp became one of the most commercially successful film stars by playing Captain Jack Sparrow in the Walt Disney swashbuckler film series Pirates of the Caribbean (2003-2017).
          He received critical praise for Finding Neverland (2004), and continued his commercially successful collaboration with Tim Burton with the films Charlie and the Chocolate Factory (2005),
          where he portrayed Willy Wonka, Corpse Bride (2005), Sweeney Todd: The Demon Barber of Fleet Street (2007), and Alice in Wonderland (2010). In 2012, Depp was one of the world's biggest film
          stars, and was listed by the Guinness World Records as the world's highest-paid actor, with earnings of US$75 million. During the 2010s Depp began producing films through his company,
          Infinitum Nihil, and formed the rock supergroup Hollywood Vampires with Alice Cooper and Joe Perry, before starring as Gellert Grindelwald in the Warner Bros. Wizarding World films Fantastic
          Beasts and Where to Find Them (2016) and Fantastic Beasts: The Crimes of Grindelwald (2018).
        </p>
        <p>
          From 2015 to 2017, Depp was married to actress Amber Heard. Their divorce drew media attention as Heard alleged that Depp had been abusive throughout their relationship. In 2018, Depp
          claimed that Heard had abused him before he unsuccessfully sued the publishers of British tabloid The Sun for defamation under English law. Depp later sued Heard for defamation in Virginia
          after she wrote an op-ed saying she was a public victim of domestic violence. The trial Depp v. Heard began in 2022. Depp describes himself as a victim of cancel culture. He is the father of
          French-American actress and model Lily-Rose Depp.
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Johnny_Depp">Read more on Wikipedia...</a>
        </p>
      </span>
    </div>
  );
};

export default About;
