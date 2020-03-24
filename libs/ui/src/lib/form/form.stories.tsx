import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import {
  Flex,
  Box,
  Label,
  Radio,
  Input,
  FormItem,
  FormSectionTitle,
  FormText,
  Select,
} from '../..';

import README from './README.md';

storiesOf('Components / Form', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Input', () => <InputExample />)
  .add('Radio', () => <RadioExample />)
  .add('Select', () => <SelectExample />)
  .add('FormItem', () => <FormItemExample />);

function InputExample() {
  const [value, setValue] = useState('error');
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <>
      <h1>Input</h1>
      <Input width="50%" placeholder="请输入点什么~~" />
      <br />
      <Input width="50%" placeholder="ffffff" />
      <br />
      <Input width="50%" placeholder="ggggg" />
      <br />
      <Input
        value={value}
        onChange={onChange}
        placeholder="请输入点什么~~"
        hasError={value === 'error'}
      />
      <FormText variant="error">错了</FormText>
      <Input hasError placeholder="请输入点什么~~" />
      <FormText variant="error">必填项</FormText>
      <h1>Edge Cases</h1>
      <h3>Chrome AutoComplete Background Color</h3>
      <Input name="email" type="email" placeholder="请输入邮箱" />
    </>
  );
}

function RadioExample() {
  const [value, setValue] = useState('left');
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <>
      <h1>Radio</h1>
      <Label>
        <Radio
          name="name"
          value="left"
          checked={value === 'left'}
          onChange={onChange}
        />
        Left
      </Label>
      <Label>
        <Radio
          name="name"
          value="right"
          checked={value === 'right'}
          onChange={onChange}
        />
        Right
      </Label>
    </>
  );
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function SelectExample() {
  return (
    <>
      <h1>Select</h1>
      <Select options={options} />
      <h1>MultiSelect</h1>
      <Select isMulti options={options} />
      <h1>Error</h1>
      <Select hasError options={options} />
    </>
  );
}

function FormItemExample() {
  return (
    <>
      <h1>FormItem</h1>

      <Box width="70%">
        <FormSectionTitle>First Section</FormSectionTitle>
        <Box fontSize={0} marginBottom={12}>
          <FormItem label="Normal">
            <Input placeholder="请输入姓名" />
          </FormItem>
          <FormItem label="Error">
            <Input hasError placeholder="请输入姓名" />
            <FormText variant="error">必填项</FormText>
          </FormItem>
          <FormItem label="Special Text">
            <Input placeholder="请输入电话" />
            <FormText>Some other text</FormText>
          </FormItem>
        </Box>

        <FormSectionTitle>Second Section</FormSectionTitle>
        <Box fontSize={0} marginBottom={12}>
          <FormItem label="Additional Info">
            <Flex width="100%" alignItems="center">
              <Input width="50%" placeholder="请输入隐私信息" />
              <Box marginLeft={30}>正在加密隐私信息...</Box>
            </Flex>
          </FormItem>
          <FormItem label="Textarea">
            <Input as="textarea" height={100} placeholder="请输入一长段信息" />
          </FormItem>
          <FormItem label="Textarea Error">
            <Input
              hasError
              as="textarea"
              height={100}
              placeholder="请输入一长段信息"
            />
            <FormText variant="error">必填项</FormText>
          </FormItem>
        </Box>
      </Box>
    </>
  );
}
