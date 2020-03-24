# Form Components

- [Input](#input)
- [Radio](#radio)
- [FormItem](#formitem)
- [FormSectionTitle](#formsectiontitle)

## Input

```js
import { Input } from './components';

function InputExample() {
  const [value, setValue] = useState('error');
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder="请输入点什么~~"
      hasError={value === 'error'}
    />
  );
}
```

## Radio

```js
import { Label, Radio } from './components';

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
```

## Select

```js
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
```

## FormItem

```js
import { FormItem } from './components';

<FormItem label="姓名">
  <Input placeholder="请输入姓名" />
</FormItem>;
```

A more complex example:

```js
function FormItemExample() {
  return (
    <>
      <h1>FormItem</h1>

      <Box width="70%">
        <Box marginBottom={50}>
          <FormSectionTitle>First Section</FormSectionTitle>
          <FormItem label="姓名">
            <Input placeholder="请输入姓名" />
          </FormItem>
          <FormItem label="电话">
            <Input placeholder="请输入电话" />
          </FormItem>
        </Box>

        <Box marginBottom={50}>
          <FormSectionTitle>Second Section</FormSectionTitle>
          <FormItem label="隐私信息">
            <Flex width="100%" alignItems="center">
              <Input width="50%" placeholder="请输入隐私信息" />
              <Box marginLeft={30}>正在加密隐私信息...</Box>
            </Flex>
          </FormItem>
        </Box>
      </Box>
    </>
  );
}
```

## FormSectionTitle

Use with [FormItem](#formitem) normally.

```js
import { FormSectionTitle } from './components';

<FormSectionTitle>First Section</FormSectionTitle>;
```
