import React from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Link,
} from '@chakra-ui/core'

import Timeline from '../components/timeline'
import Layout from '../components/layout'

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  const redTextColor = {
    light: 'black',
    dark: 'red.100',
  }
  // const yellowTextColor = {
  //   light: 'black',
  //   dark: 'yellow.100',
  // }
  const greenTextColor = {
    light: 'black',
    dark: 'green.100',
  }

  // const purpleColor = {
  //   light: 'purple.600',
  //   dark: 'purple.400',
  // }
  // const grayColor = {
  //   light: 'gray.400',
  //   dark: 'gray.400',
  // }
  return (
    <Layout>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
        >
          <Heading
            color={redTextColor[colorMode]}
            letterSpacing="tight"
            mb={2}
            as="h1"
            size="2xl"
          >
            👋 Hello, I’m Yuki!
          </Heading>
          <Text mb={4} color={secondaryTextColor[colorMode]}>
            I enjoy feature development and working on products that matter! Now
            that I've been curious about the blockchain technology and training
            my skills for web3 aspect. I wish I knew while working in this
            industry.
            <Box as="ul" pt={2} pl={4} ml={2}>
              <Box as="li" pb={1}>
                Soft skills
              </Box>
              <Box as="li" pb={1}>
                Technology and trends
              </Box>
              <Box as="li" pb={1}>
                Product Development
              </Box>
            </Box>
          </Text>
          <Text color={secondaryTextColor[colorMode]}>
            Feel free to{' '}
            <Link
              color={'blue.400'}
              href="mailto:solomon226@hotmail.com"
              title="Email"
              isExternal
            >
              reach out
            </Link>
            ; I enjoy chatting with folk.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="800px"
          w="100%"
        >
          <Heading
            color={greenTextColor[colorMode]}
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
          >
            Timeline
          </Heading>
          <Timeline
            activitiesByYear={{
              '2022': [
                {
                  title: 'Freelancing for Newwit',
                  description:
                    'I jumped into smart contracts development which was my short-term desire and developed Utility tokens and in-game NFTs for socialFi and gamefi and built bridge connecting EVM chains.',
                  tags: {
                    warehouse_tab: 'https://twitter.com/NewwitApp',
                  },
                },
                {
                  title: 'Freelancing for Solchicks',
                  description:
                    'Developed Solana programs for NFT protocols like breeding, staking and marketplace. Brought bridge to transfer governance tokens and NFTs from Solana to EVM chain',
                  tags: {
                    warehouse_tab: 'https://twitter.com/NewwitApp',
                  },
                },
              ],
              '2021': [
                {
                  title: 'Joined Onessus',
                  description:
                    'In the end of 2021, I joined World Class dAPP Development Stuido; brought full-stack engineering for NFT staking platform. Here I got to transfer novel concept to reality.',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCyZaZqRgYFdrgVFoB-qT-ag',
                  },
                },
                {
                  title: 'Joined KodaDot',
                  description:
                    'Took my first frontend engineering to blockchain space; Here I got to develop the frontend of interoperable NFT marketplace on Kusama network.',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/channel/UCEULduld5NrqOL49k1KVjoA',
                  },
                },
              ],
              '2020': [
                {
                  title: 'Joined Maryoku',
                  description:
                    'Worked as a full stack engineer and developed large-scale and ambitious project which makes a marketplace for in-house administrative professionals who plan corporate events from sratch.',
                  tags: {
                    warehouse_tab: 'https://www.linkedin.com/company/262days/',
                  },
                },
              ],
              '2019': [
                {
                  title: 'Joined Common-Services',
                  description:
                    'Brought much competitive product into Shopify App marketplace which enables Shopify vendors to integrate their products and orders to Amazon marketplace',
                  tags: {
                    warehouse_tab: 'https://apps.shopify.com/amazon-3',
                  },
                },
              ],
              '2016': [
                {
                  title: 'Joined Style Inc',
                  description:
                    'Engaged in developing in-house CV matching program for Agency ',
                },
              ],
            }}
          />
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Index
