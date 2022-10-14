import { Root, Indicator } from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ReactNode } from 'react'

export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {
    return (
        <Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
            <Indicator>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </Indicator>
        </Root>
    )
}