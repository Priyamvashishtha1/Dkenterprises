import { Button } from "./ui/button";
import pilot from "../assets/S24Ultra.png";
//import { buttonVariants } from "./ui/button";
//import { HeroCards } from "./HeroCards";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Welcome,
            </span>{" "}
            
          </h1>{" "}
          <br></br>
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            DK Enterprises
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Now, DK Enterprises is going to start something new...
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Coming Soon</Button>

        </div>
      </div>

      {/* Hero cards sections */}
      
          <img
            src={pilot}
            alt=""
            className="w-[2000px] object-contain rounded-lg"
          />
     
    
    </section>
  );
};
