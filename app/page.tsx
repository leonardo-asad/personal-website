import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-viaoda-libre)]">
      <main className="flex flex-col">
        <section
          id="presentation"
          className="text-center h-dvh flex flex-col justify-center gap-4 my-4"
        >
          <h1 className="text-4xl">HEY, I&apos;M LEONARDO ASAD</h1>
          <h3>
            A Full Stack Developer building Web Applications that leads to the
            success of the overall product
          </h3>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Link
              className={`${buttonVariants({
                variant: "default",
              })} max-w-fit`}
              href="#about-me"
            >
              About Me
            </Link>
            <Link
              className={`${buttonVariants({
                variant: "default",
              })} max-w-fit`}
              href="#projects"
            >
              Projects
            </Link>
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="about-me" className="py-4 ">
          <h1 className="text-4xl text-center mb-4">About Me</h1>
          <h3 className="text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div>
              <h2 className="text-2xl mb-4">Get to know me!</h2>
              <p className="mb-2">
                Experienced Full Stack Developer with over two years as a
                Software Engineer, specializing in web applications for alarm
                systems.
              </p>
              <p className="mb-2">
                Passionate about technology, with a broad range of interests
                spanning Computer Science and Mechanical Engineering.
              </p>
              <p className="mb-2">
                Previously worked for seven years as a Field Engineer in the oil
                and gas industry before transitioning to Software Development.
              </p>
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} max-w-fit`}
                href="#contact"
              >
                Contact
              </Link>
            </div>
            <div>
              <h2 className="text-2xl mb-4">My Skills</h2>
              <div className="flex flex-row flex-wrap gap-2">
                {["HTML", "CSS", "Javascript", "React", "Python", "Django"].map(
                  (skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="projects" className="py-4">
          <h1 className="text-4xl text-center mb-4">Projects</h1>
          <h3 className="text-center">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </h3>
          <div className="grid grid-rows-2 my-4 gap-4">
            <div className="flex flex-row flex-wrap">
              <Image
                src="/e-commerce-image.png"
                alt="e-commerce image"
                className="w-full md:w-2/5 rounded-2xl"
                width={1000}
                height={1000}
              />
              <div className="w-full md:w-3/5 pt-4 md:pt-0 md:pl-4">
                <h2 className="text-2xl mb-4">E-Commerce</h2>
                <p>
                  This is a sample application that demostrates an E-Commerce
                  website using the PERN stack (PostgreSQL, Express.js,
                  React.js, Node.js)
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap">
              <Image
                src="/finance-website-image.png"
                alt="e-commerce image"
                width={1000}
                height={1000}
                className="w-full md:w-2/5 rounded-2xl"
              />
              <div className="w-full md:w-3/5 pt-4 md:pt-0 md:pl-4">
                <h2 className="text-2xl mb-4">Finance Website</h2>
                <p>
                  This web app keeps track of your investments in Stocks and
                  ETFs. It presents to the user a detailed description of the
                  composition of their portfolio/s and how much weight each
                  asset has in relation to the total worth of their portfolio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="contact" className="text-center py-4">
          <h1 className="text-4xl mb-4">Contact</h1>
          <h3 className="mb-2">
            Feel free to Contact me by sending me a message to the following
            email address and I will get back to you as soon as possible
          </h3>
          <Link
            href="mailto:leonardo.daniel.asad@gmail.com"
            className="font-semibold"
          >
            leonardo.daniel.asad@gmail.com
          </Link>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
