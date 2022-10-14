import { TextInput, TextInputRootProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon useTag={true}>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='email@example.com' />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>

export const WithIcon: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='email@example.com' />,
    }
}