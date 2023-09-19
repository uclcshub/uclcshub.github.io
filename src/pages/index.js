import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin--md"
            to="/docs/labs-availability/MPEB105"
          >
            MPEB 1.05 🟠
          </Link>
          <Link
            className="button button--secondary button--lg margin--md"
            to="/docs/labs-availability/MPEB121"
          >
            MPEB 1.21 🖥️
          </Link>
          <Link
            className="button button--secondary button--lg margin--md"
            to="/docs/labs-availability/MPEB406"
          >
            MPEB 4.06 ⚡️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Resources and more!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
