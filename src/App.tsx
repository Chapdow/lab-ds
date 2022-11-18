import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Logo } from './logo';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo/>

        <Heading size='lg' className='mt-1'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400'>
            Faça login e começe a usar!
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm mt-5 gap-4'>
        <label htmlFor="email" className=' flex flex-col gap-3 '>
          <Text className='font-semibold'>Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input typeof='email' id='email' placeholder='Digite seu e-mail'/>
          </TextInput.Root>

        </label>

        <label htmlFor="password" className=' flex flex-col gap-3 '>
          <Text className='font-semibold'>Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>

            <TextInput.Input typeof='password' id='password' placeholder='********'/>
          </TextInput.Root>

        </label>

        <div className='flex flex-col justify-center items-center text-gray-100 mt-1'>
          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember'/>

            <Text className='text-sm text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>
        </div>

        <Button type='submit' className='mt-2'>Entrar na plataforma</Button>

        <footer className='flex flex-col items-center gap-4 mt-2'>
          <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta ? Crie uma agora!</a>
          </Text>
        </footer>
      </form>

    </div>
  )
}