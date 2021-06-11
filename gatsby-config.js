module.exports = {
  siteMetadata: {
    author: "@ebbo",
    description: "Wir kümmern uns. Um sie.",
    repository_url: "https://github.com/bernhardrode/rodereisen-website",
    title: "Reisebüro Rode GmbH",
    bank: [
      {
        bic: "GENODES1VBK",
        iban: "DE52 6029 1120 0660 2660 08",
        name: "Volksbank Backnang",
      },
    ],
    contact: {
      email: "info@rodereisen.de",
      facebook_handle: "ReisebueroRode",
      instagram_handle: "rodereisen",
      twitter_handle: "rodereisen",
      website: "www.rodereisen.de",
      bookings:
        "https://outlook.office365.com/owa/calendar/ReisebroRode@rode.io/bookings/",
    },
    locations: [
      {
        city: "Beilstein",
        phone: "+49 (0)7062 94990",
        street: "Hauptstrasse 44",
        zip: "71717",
      },
      {
        city: "Steinheim",
        phone: "+49 (0)7144 81550",
        street: "Friedrichstraße 8",
        zip: "71711",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: process.env.FACEBOOK_TOKEN,
        instagram_id: "17841405466170091",
        paginate: 100,
        maxPosts: 20,
        hashtags: true,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rr-flugzeug.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
