import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import TestComp from '../components/TestComp'

export default {
  title: 'Example/TestComp',
  component: TestComp,
} as ComponentMeta<typeof TestComp>

const Template: ComponentStory<typeof TestComp> = (
  args
) => <TestComp {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
  label: 'large',
}

export const Small = Template.bind({})
Small.args = {
  label: 'small',
}
