import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="block mb-1 font-medium">Email</Label>
            <Input type="email" id="email" placeholder="Your Email" className="w-full" />
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <Input type="password" id="password" placeholder="Your Password" className="w-full" />
            <Button type="submit" className="w-full mt-4">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
