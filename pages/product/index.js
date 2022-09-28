import React, { useState } from 'react'
import { useColorMode, Heading, Flex, Stack, Button } from '@chakra-ui/core'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allProjectsData = [
    {
      title: 'Newwit',
      description:
        'Installed and run sidechain which has 4 validator nodes for staging. Developed and deployed smart contracts for utility tokens and in-game NFTs and NFT marketplace using Solidity and Hardhat. Write typescript code for Unit test. Built bridge connecing EVM chains for transfering tokens using ChainBridge.',
      href: 'https://newwit.com/',
      github: 'https://github.com/yukiwadana/gamelFi',
      thumbnail: '/images/newwit.png',
      tags: [
        'Sidechain',
        'Solidity',
        'Typescript',
        'EthersJs',
        'Hardhat',
        'Smart contract',
        'NFT',
        'ERC20',
        'ERC721A',
        'EVM',
        'ChainBridge',
      ],
    },
    {
      title: 'Whenstaking',
      description:
        'Developed NFT platform which implements NFT staking protocol in Wax blockchain. Update frontend from react.js to next.js for SSR and optimizing. Compressed high dimension NFT assets using Node.js, AWS lambda, S3, API gateway',
      href: 'https://whenstaking.com/',
      thumbnail: '/images/whenstaking.png',
      tags: [
        'ReactJs',
        'NextJs',
        'Typescript',
        'Wax.js',
        'Node.js',
        'AWS',
        'Lambda',
        'S3',
        'API Gateway',
        'Wax blockchain',
      ],
    },
    {
      title: 'Kodadot',
      description:
        'Involved in the frontend development of NFT marketplace which is operating on Kusama network. Developed collection, gallery and detail pages and updated filter functions. Visualized the history of floor and sold price of collection',
      href: 'https://kodadot.com/',
      thumbnail: '/images/kodadot.png',
      tags: ['Vue', 'Vuex', 'Typescript', 'Chart.js', 'GraphQL', 'Kusama'],
      github: 'https://github.com/kodadot/nft-gallery',
    },
    {
      title: 'Maryoku',
      description:
        'Developed planner and vendor system of event planning platform. Designed and developed API backend using Grooy & Grails and MongoDB. Engaged in developing frontend development using Vue and Vuex. Developed bitbucket pipelines, and infra using AWS Lightsail instances with Nginx. Assigned tasks to junior developers and review code.',
      href: 'https://maryoku.com/',
      thumbnail: '/images/maryoku.png',
      tags: [
        'Vue',
        'Vuex',
        'Chart.js',
        'RESTful API',
        'Groovy',
        'Grails',
        'MongoDB',
        'AWS',
        'CI/CD',
        'Agile',
      ],
    },
    {
      title: 'Amazon Integration APP',
      description:
        'Developed Shopify APP for integrating products and orders from Amazon marketplace to Shoify Store. ',
      href: 'https://apps.shopify.com/amazon-3',
      thumbnail: '/images/amazon.png',
      tags: [
        'React.js',
        'Redux',
        'Shopify Polaris',
        'PHP',
        'Laravel',
        'Amazon MWS',
        'Shopify API',
      ],
    },
  ]

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allProjectsData,
    },
  }
}

const Product = ({ allProjectsData }) => {
  const { colorMode } = useColorMode()
  const [searchValue, setSearchValue] = useState('')
  const [expanded, setExpanded] = useState(false)

  const redTextColor = {
    light: 'gray.700',
    dark: 'red.100',
  }
  const filteredProjects = allProjectsData
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Layout>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          width="100%"
          maxWidth="800px"
        >
          <Flex
            spacing={8}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            maxWidth="800px"
          >
            <Heading
              color={redTextColor[colorMode]}
              letterSpacing="tight"
              mb={2}
              as="h1"
              size="2xl"
            >
              👀 Products
            </Heading>
          </Flex>
          <Stack width="100%" spacing={8} mt={8}>
            {!filteredProjects.length && 'No projects found.'}
            {filteredProjects.map((frontMatter, index) => {
              if (index < 3 || expanded)
                return <ProjectCard key={frontMatter.title} {...frontMatter} />
            })}
          </Stack>
          {filteredProjects.length > 3 && (
            <Button
              fontWeight="medium"
              mx="auto"
              rightIcon={expanded ? 'chevron-up' : 'chevron-down'}
              onClick={() => setExpanded(!expanded)}
              variant="ghost"
            >
              See {expanded ? 'Less' : 'More'}
            </Button>
          )}
        </Stack>
      </Layout>
    </>
  )
}

export default Product
