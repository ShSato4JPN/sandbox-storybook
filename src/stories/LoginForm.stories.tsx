import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import LoginForm from '../components/login/LoginForm'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (
  args
) => <LoginForm {...args} />

export const Hello = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hello.args = {
  title: 'Hello',
}

export const GoodBye = Template.bind({})
GoodBye.args = {
  title: 'GoodBye',
}

export const Sample = Template.bind({})
Sample.args = {
  title: 'Sample',
}
