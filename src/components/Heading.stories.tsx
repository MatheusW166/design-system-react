import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        useTag: {
            table: {
                disable: true,
            }
        },
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

export const CustomComponent = {
    args: {
        useTag: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },

} as StoryObj<HeadingProps>
