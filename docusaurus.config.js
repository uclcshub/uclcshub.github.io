// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UCL CS Hub",
  tagline: "Useful UCL CS resources and more!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://therootof3.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ucl-cs-hub/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "therootof3", // Usually your GitHub org/user name.
  projectName: "ucl-cs-hub", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TheRootOf3/ucl-cs-hub/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TheRootOf3/ucl-cs-hub/blob/main/",
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
      // Replace with your project's social card
      // image: "",
      navbar: {
        title: "UCL CS Hub",
        logo: {
          alt: "My Site Logo",
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
          {
            href: "https://enghub.io/",
            label: "Engineering Hub",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "left" },
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
                to: "/docs/dummy-page",
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
              // {
              //   label: "UCL CS Discord",
              //   href: "",
              // },
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
