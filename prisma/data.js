const { Prisma } = require('@prisma/client');

const products = [
    {
        title: 'Newwit',
        description:
          'Installed and run sidechain which has 4 validator nodes for staging. Developed and deployed smart contracts for utility tokens and in-game NFTs and NFT marketplace using Solidity and Hardhat. Write typescript code for Unit test. Built bridge connecing EVM chains for transfering tokens using ChainBridge.',
        website: 'https://newwit.com/',
        github: 'https://github.com/yukiwadana/gamelFi',
        thumbnail: '/images/newwit.png',
        tags: "Sidechain,Solidity,Typescript,EthersJs,Hardhat,Smart contract,NFT,ERC20,ERC721A,EVM,ChainBridge"
      },      
      {
        title: 'Whenstaking',
        description:
          'Developed NFT platform which implements NFT staking protocol in Wax blockchain. Update frontend from react.js to next.js for SSR and optimizing. Compressed high dimension NFT assets using Node.js, AWS lambda, S3, API gateway',
        website: 'https://whenstaking.com/',
        thumbnail: '/images/whenstaking.png',
        tags: 'ReactJs,NextJs,Typescript,WaxJs,NodeJs,AWS,Lambda,S3,API Gateway,Wax blockchain'},
      {
        title: 'Kodadot',
        description:
          'Involved in the frontend development of NFT marketplace which is operating on Kusama network. Developed collection, gallery and detail pages and updated filter functions. Visualized the history of floor and sold price of collection',
        website: 'https://kodadot.com/',
        thumbnail: '/images/kodadot.png',
        tags: 'Vue,Vuex,Typescript,Chart.js,GraphQL,Kusama',
        github: 'https://github.com/kodadot/nft-gallery',
      },
      {
        title: 'Maryoku',
        description:
          'Developed planner and vendor system of event planning platform. Designed and developed API backend using Grooy & Grails and MongoDB. Engaged in developing frontend development using Vue and Vuex. Developed bitbucket pipelines, and infra using AWS Lightsail instances with Nginx. Assigned tasks to junior developers and review code.',
        website: 'https://maryoku.com/',
        thumbnail: '/images/maryoku.png',
        tags: 'Vue,Vuex,Chart.js,RESTful API,Groovy,Grails,MongoDB,AWS,CI/CD,Agile',
      },
      {
        title: 'Amazon Integration APP',
        description:
          'Developed Shopify APP for integrating products and orders from Amazon marketplace to Shoify Store. ',
        website: 'https://apps.shopify.com/amazon-3',
        thumbnail: '/images/amazon.png',
        tags: 'React.js,Redux,Shopify Polaris,PHP,Laravel,Amazon MWS,Shopify API'
      },
];

module.exports = {
  products,  
};