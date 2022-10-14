import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Design System React
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a utilizar
        </Text>
      </header>

      <form className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-[10px]'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon useTag>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="usuario@email.com" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon useTag>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" placeholder="******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center mt-4">
          <Checkbox id='remember' />
          <Text size="sm" className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className='mt-4' type='submit'>Entrar na platforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text useTag size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text useTag size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}