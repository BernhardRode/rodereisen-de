require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env)

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `rodereisen`,
    //     short_name: `rodereisen`,
    //     description: `wir kümmern uns. um sie`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#b75e09`,
    //     display: `standalone`,
    //     icons: [
    //       {
    //         src: `/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}
