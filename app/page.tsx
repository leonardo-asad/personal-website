import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-viaoda-libre)]">
      <main className="flex flex-col">
        <section
          id="presentation"
          className="text-center h-dvh flex flex-col justify-center gap-4 my-4 bg-(--background)"
        >
          <div className="max-w-[896px] mx-auto px-4 flex flex-col gap-4">
            <h1 className="text-4xl mb-1">HEY, I&apos;M LEONARDO ASAD</h1>
            <h3 className="text-xl mb-3">
              A Full Stack Developer based in Auckland, New Zealand, building
              Web Applications that lead to the success of the overall product
            </h3>
            <div className="flex flex-row gap-3 justify-center items-center">
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
                href="#experience"
              >
                Experience
              </Link>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="about-me" className="py-4 ">
          <h1 className="text-4xl text-center mb-4">About Me</h1>
          <div className="grid grid-cols-1 my-4">
            <div>
              <p className="mb-2">
                Experienced Full Stack Developer with over two years as a
                Software Engineer. Currently working at Arrowhead Alarm
                Products, developing software solutions for Alarm Systems.
              </p>
              <p className="mb-2">
                Passionate about technology, with a broad range of interests
                spanning Computer Science, Data Science, and Mechanical
                Engineering.
              </p>
              <p className="mb-2">
                Previously worked for seven years as a Field Engineer in the oil
                and gas industry before transitioning to Software Development.
              </p>
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} max-w-fit my-4`}
                href="mailto:leonardo.daniel.asad@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                  />
                </svg>
                Contact
              </Link>
            </div>
            {/* <div>
              <h2 className="text-2xl mb-4">My Skills</h2>
              <div className="flex flex-row flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "React",
                  "Python",
                  "Django",
                  "Typescript",
                ].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="experience" className="my-4">
          <h1 className="text-4xl text-center mb-4">Experience</h1>
          <h2 className="text-2xl">Arrowhead Alarm Products</h2>
          <h3>02-2023 - Present</h3>
          <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/80 mt-4">
            <li>
              Created the front end of a web application used by alarm
              installers to program and manage their alarm systems.
            </li>
            <li>
              Successfully led the migration of a complex front-end codebase
              from JavaScript to TypeScript, resulting in improved code
              reliability and fewer bugs.
            </li>
            <li>
              Created a private UI library with reusable components, improving
              code consistency and eliminating duplicate code.
            </li>
            <li>
              Improved performance and user experience by caching API requests,
              prefetching, reducing bundle size, and using optimistic updates.
            </li>
            <li>Used Terraform to manage the AWS resources.</li>
            <li>
              Collaborated with the back-end team, implementing architectural
              changes to improve the scalability, performance, and security of
              the Cloud Services.
            </li>
          </ul>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="projects" className="py-4">
          <h1 className="text-4xl text-center mb-4">Projects</h1>
          <div className="grid grid-rows-2 my-4 gap-4">
            <div>
              <h2 className="text-2xl">E-Commerce</h2>
              <p>
                This is a sample application that demostrates an E-Commerce
                website using the PERN stack (PostgreSQL, Express.js, React.js,
                Node.js)
              </p>
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} max-w-fit my-4`}
                href="https://github.com/leonardo-asad/E-Commerce"
                target="_blank"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="size-4"
                >
                  <path
                    fill="#fff"
                    d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"
                  ></path>
                </svg>
                More Info
              </Link>
            </div>

            <div>
              <h2 className="text-2xl">Finance Website</h2>
              <p>
                This web app keeps track of your investments in Stocks and ETFs.
                It presents to the user a detailed description of the
                composition of their portfolio/s and how much weight each asset
                has in relation to the total worth of their portfolio.
              </p>
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} max-w-fit my-4`}
                href="https://github.com/leonardo-asad/Portfolio-App"
                target="_blank"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="size-4"
                >
                  <path
                    fill="#fff"
                    d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"
                  ></path>
                </svg>
                More Info
              </Link>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-(--divider) w-16 mx-auto" />
        <section id="contact" className="text-center py-4 flex flex-col">
          <h1 className="text-4xl mb-4">Contact</h1>
          <h3 className="mb-8">
            Feel free to Contact me by sending me a message to the following
            email address and I will get back to you as soon as possible
          </h3>
          <Link
            href="mailto:leonardo.daniel.asad@gmail.com"
            className="font-semibold inline-flex gap-2 justify-center items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
            leonardo.daniel.asad@gmail.com
          </Link>
          <Link
            href="https://github.com/leonardo-asad"
            target="_blank"
            className="font-semibold inline-flex gap-2 justify-center items-center mb-2"
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              width="32"
              data-view-component="true"
              className="size-4"
            >
              <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
            </svg>
            Github Profile
          </Link>
          <Link
            href="https://www.linkedin.com/in/leonardo-asad/"
            target="_blank"
            className="font-semibold inline-flex gap-2 justify-center items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="size-4"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            LinkedIn Profile
          </Link>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
