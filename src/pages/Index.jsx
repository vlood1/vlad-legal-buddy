import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation/Lookup tab */}
      <header className="border-b border-gray-200 flex items-center justify-between p-4 container-2xl">
        <img src="" alt="Logo" className = "logo"/>
        <div className="flex gap-4">
          <a href = "#About">About us</a>
          <a href = "#Whyus">Why choose us?</a>
          <a href = "#Development">Development</a>
          <a href = "#Lawyers">Lawyers</a>
        </div>

        <div className = "flex gap-4">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      


      </header>


      <section className="container mx-auto px-4 space-y-16 mt-16 pb-24">
      {/* Hero Section */}
      <div className="text-left text-xl"> Legal Assistant

      </div>
      </section>
    </div> 

    
  );
};

export default Index;

