// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UCL Computer Science Hub 💅",
  tagline: "Useful UCL CS resources and more!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://uclcshub.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uclcshub", // Usually your GitHub org/user name.
  projectName: "uclcshub.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/uclcshub/uclcshub.github.io/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/uclcshub/uclcshub.github.io/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "announcementBar",
        content: "Check out our <a href='/blog/'>latest blog post</a>! 🧑‍💻",
      },
      // Replace with your project's social card
      // image: "",
      navbar: {
        title: "UCL CS Hub",
        logo: {
          alt: "UCL CS Hub Logo",
          src: "img/co_working.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/docs/labs-availability",
            label: "CS Labs Availability",
            position: "left",
          },
          {
            to: "/docs/set-up-environment",
            label: "Set Up Your Environment",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.gg/x6jsEKcZd5",
            label: "UCL CS Discord",
            position: "right",
          },
          {
            href: "https://enghub.io/",
            label: "Engineering Hub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "All Docs",
                to: "/docs/welcome",
              },
              {
                label: "CS Labs Availability",
                to: "/docs/labs-availability",
              },
              {
                label: "Set Up Your Environment",
                to: "/docs/set-up-environment",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "UCL CS Discord",
                href: "https://discord.gg/x6jsEKcZd5",
              },
              {
                label: "Engineering Hub",
                href: "https://enghub.io/",
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()}. Senior Programming Tutors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
