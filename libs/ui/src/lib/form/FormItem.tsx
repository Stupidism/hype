import React from 'react';
import { Flex, Box } from '../FlexBox';
import FormText from './FormText';

const FormItem = ({ label, children, ...rest }) => (
  <Flex
    alignItems="flex-start"
    pb={React.Children.count(children) > 1 ? 0 : 24}
    {...rest}
  >
    <FormText width={150} pr={40} textAlign="right">
      {label}
    </FormText>
    <Box flex={1} height="100%">
      {children}
    </Box>
  </Flex>
);

export default FormItem;
