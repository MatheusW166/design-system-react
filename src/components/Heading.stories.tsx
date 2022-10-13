import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
    }
} as Meta<HeadingProps>

export const Small = {
    args: {
        size: 'sm',
    }
} as StoryObj<HeadingProps>

export const Medium = {
    args: {
        size: 'md',
    }
} as StoryObj<HeadingProps>

export const Large = {
    args: {
        size: 'lg',
    }
} as StoryObj<HeadingProps>
