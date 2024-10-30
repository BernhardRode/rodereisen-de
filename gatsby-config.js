require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: "@ebbo",
    description: "Wir kümmern uns. Um sie.",
    repository_url: "https://github.com/bernhardrode/rodereisen-website",
    title: "Reisebüro Rode GmbH",
    bank: [
      {
        bic: "COBADEFFXXX",
        iban: "DE11 5004 0000 0584 6787 03",
        name: "Commerzbank",
      },
    ],
    contact: {
      email: "info@rodereisen.de",
      facebook_handle: "ReisebueroRode",
      instagram_handle: "rodereisen",
      twitter_handle: "rodereisen",
      website: "www.rodereisen.de",
      bookings:
        "https://outlook.office365.com/owa/calendar/ReisebroRodeGmbH2@rodereisen.de/bookings/",
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
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     access_token: process.env.FACEBOOK_TOKEN,
    //     instagram_id: "17841405466170091",
    //     paginate: 100,
    //     maxPosts: 20,
    //     hashtags: true,
    //   },
    // },
    "gatsby-transformer-yaml",
    `gatsby-plugin-image`,
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "blog",
    //     path: `${__dirname}/content/blog`,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mitarbeiter",
        path: `${__dirname}/content/mitarbeiter`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "tiles",
        path: `${__dirname}/src/images/tiles`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "logos",
        path: `${__dirname}/src/images/logos`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locations`,
        path: `${__dirname}/src/images/locations`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `provider`,
        path: `${__dirname}/src/images/provider`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portraits`,
        path: `${__dirname}/src/images/portraits`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portraits-funny`,
        path: `${__dirname}/src/images/portraits-funny`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portraits-square`,
        path: `${__dirname}/src/images/portraits-square`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banner`,
        path: `${__dirname}/src/images/banner`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
        defaults: {
          formats: [`auto`, `webp`],
          breakpoints: [640, 1024, 1536],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reisebüro Rode GmbH`,
        short_name: `rodereisen`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#1e3a8a`,
        display: `minimal-ui`,
        icon: `src/images/logos/rr-flugzeug.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1536,
            },
          },
          "gatsby-remark-classes",
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                link: "text-pink-500 hover:text-blue-900",
                paragraph: "text-lg mb-2",
                "heading[depth=0]": "text text-blue-900 pt-6 pb-6-5xl",
                "heading[depth=1]": "text-4xl text-blue-900 pt-6 pb-6",
                "heading[depth=2]": "text-3xl text-blue-900 pt-6 pb-6",
                "heading[depth=3]": "text-2xl text-blue-900 pt-6 pb-6",
                "heading[depth=4]": "text-2xl text-blue-900 pt-6 pb-6",
                "heading[depth=5]": "text-2xl text-blue-900 pt-6 pb-6",
                "list[ordered=false]": "list-disc list-inside pt-6 pb-6",
                "list[ordered=true]": "list-decimal list-inside pt-6 pb-6",
                listItem: "",
              },
            },
          },
        ],
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        whitelist: ["mx-8", "my-6", "pl-4"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
