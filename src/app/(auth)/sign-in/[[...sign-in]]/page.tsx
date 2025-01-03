import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='flex items-center justify-center h-screen w-full  text-white bg-gradient-to-tr from-emerald-900 via-slate-900 to-emerald-900 bg-fixed  '>
       <SignIn />
    </div>
  )
}