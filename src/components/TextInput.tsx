import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface TextInputRootProps {
    children: ReactNode;
}

export function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center h-12 py-4 px-3 gap-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-400'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <slot className="w-6 h-6 text-gray-400">
            {props.children}
        </slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends HtmlHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {

    return (
            <input className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
          />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}