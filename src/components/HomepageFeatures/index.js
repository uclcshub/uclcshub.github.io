import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Come whenever available and enjoy the labs! 🥳",
    Svg: require("@site/static/img/co_working.svg").default,
    description: (
      <>
        Whether you want to switch your workplace 🏙️, use better hardware 🖥️, or
        just hang out with fellow students 🧑‍💻.
      </>
    ),
  },
  {
    title: "See how you can set up your own computer! 💻",
    Svg: require("@site/static/img/setup.svg").default,
    description: (
      <>
        In the beginning of the academic year, when switching to a new OS, or
        just for fun! ⚙️
      </>
    ),
  },
  {
    title: "Have a look at our blog! 📚",
    Svg: require("@site/static/img/blog.svg").default,
    description: (
      <>
        We *plan* to post here some useful content, like tips and event
        announcements! ⚡️
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
