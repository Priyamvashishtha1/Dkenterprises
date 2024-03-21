import { Statistics } from "./Statistics";
import pilot from "../assets/Dk.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              𝘼𝙡𝙡 𝙡𝙚𝙖𝙙𝙞𝙣𝙜 𝙢𝙤𝙗𝙞𝙡𝙚 📲 𝙗𝙧𝙖𝙣𝙙𝙨 𝙖𝙪𝙩𝙝𝙤𝙧𝙞𝙨𝙚𝙙 𝘿𝙚𝙖𝙡𝙚𝙧 
𝙎𝙮𝙢𝙗𝙤𝙡 𝙤𝙛 𝙦𝙪𝙖𝙡𝙞𝙩𝙮 𝙣𝙙 𝙩𝙧𝙪𝙨𝙩 𝙮𝙤𝙪𝙧 𝙨𝙚𝙧𝙫𝙞𝙘𝙚 𝙞𝙨 𝙤𝙪𝙧 𝙥𝙡𝙚𝙖𝙨𝙪𝙧𝙚.....🙂🙏

𝐃𝐤 
𝐄𝐧𝐭𝐞𝐫𝐩𝐫𝐢𝐬𝐞𝐬.........👍🙂
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
