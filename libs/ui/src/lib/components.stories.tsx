import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Flex, Box, Link } from '..';

import README from './README.md';

storiesOf('Components / Basic', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Button', () => (
    <>
      <h1>Primary Button</h1>
      <Button variant="primary">Save</Button>
      <Button variant="primary" marginLeft={3}>
        Save
      </Button>
      <h1>Outline Button</h1>
      <Button variant="outline">Cancel</Button>
      <h1>Disabled Button</h1>
      <Button variant="primary" disabled>
        Save
      </Button>
      <Button variant="outline" marginLeft={3} disabled>
        Save
      </Button>
    </>
  ))
  .add('Link', () => (
    <>
      <h1>Link</h1>
      <Link href="//baidu.com" target="_blank">
        百度首页
      </Link>
    </>
  ))
  .add('FlexBox', () => (
    <>
      <h1>FlexBox</h1>
      <Flex width="100%">
        <Flex flex={1} flexDirection="column">
          <Box bg="red30" p={20}>
            Column 1
          </Box>
          <Box bg="red40" p={20}>
            Column 1
          </Box>
          <Box bg="red50" p={20}>
            Column 1
          </Box>
        </Flex>
        <Box flex={1} bg="bgGray">
          Column 2
        </Box>
        <Box flex={1} bg="blue50" color="white">
          Column 2
        </Box>
      </Flex>
    </>
  ));
