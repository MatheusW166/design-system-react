import { Checkbox, CheckboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const WithLabel: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => (
            <div className='flex gap-2 items-center'>
                <Story />
                <Text size='sm'>Agree with something</Text>
            </div>
        )
    ],
}
