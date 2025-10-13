import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'


export default function Register() {  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Sign up for an Account</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <Input type="email" id="email" placeholder="Your Email" className="mt-1 w-full" />
            <label htmlFor="password" className="mt-4 block text-sm font-medium text-gray-700">Password</label>
            <Input type="password" id="password" placeholder="Your Password" className="mt-1 w-full" />
            <label htmlFor="repeatpassword" className="mt-4 block text-sm font-medium text-gray-700">Repeat Password</label>
            <Input type="password" id="repeatpassword" placeholder="Repeat Password" className="mt-1 w-full" />
            <Button type="submit" className="mt-6 w-full bg-blue-600 text-black hover:bg-blue-700">Register</Button>
            </div>
        </form>
      </div>
    </div>
  )
}
    