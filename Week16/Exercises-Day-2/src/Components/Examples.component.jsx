import React from "react";
import posts from "../data/data2.json";

export class Example1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("posts:", posts);
  }
  render() {
    const media = posts.SocialMedias.map((media) => <li>{media}</li>);
    return media;
  }
}
export class Example2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("posts:", posts);
  }
  render() {
    return posts.Skills.map((skill) => {
      const area = skill.Area;
      const skillSet = skill.SkillSet;
      return (
        <>
          <p>{area}</p>
          {skillSet.map((set) => (
            <li>{set.Name}</li>
          ))}
        </>
      );
    });
  }
}
export class Example3 extends React.Component {
  constructor(props) {
    super(props);
    console.log("posts:", posts);
  }
  render() {
    let id = 0;
    return posts.Experiences.map((experience) => {
        id += 1;
        return (
            <>
            <div id={id}>
            <img src={experience.logo}></img>
            <p><a href={experience.url}>{experience.companyName}</a></p>
            <p><b>{experience.roles[0].title}</b></p>
            <p>{experience.roles[0].startDate}{experience.roles[0].location}</p>
            <p>{experience.roles[0].description}</p>
            </div>
            </>
        )
    });
  }
}
