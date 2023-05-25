import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jbrr.dev",
  author: "Jeff Ruane",
  desc: "Seemed like a good idea at the time.",
  title: "Jeff Ruane",
  ogImage: "bison-og.png",
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/jefbrr",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Flickr",
    href: "https://flickr.com/photos/eioua",
    linkTitle: "Jeff Ruane on Flickr",
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.sdf.org/@jbrr",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/linkedin",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yo@jbrr.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const ALT_TITLES = [
  "A Fate Worse Than Jeff",
  "Nothing is Certain but Jeff and Taxes",
  "Jeff is More",
  "Hot off the Jeff",
  "Bored to Jeff",
  "30 Minutes or Jeff",
  "Jeff Metal",
  "Jeff Leppard",
  "Jeff Than Jake",
  "The Jeff You Know, The Better",
  "We Have the Facts and We're Voting Jeff",
  "The Road Jeff Traveled",
  "James S. Brady Jeff Briefing Room",
  "Nothing Jeff Nothing More",
  "Jeff Cab for Cutie",
  "Blue Screen of Jeff",
  "Every Jeff You Take",
];
