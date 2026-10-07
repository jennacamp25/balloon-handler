import { Compass, Users, Wind, HeartHandshake } from 'lucide-react'

const skills = [
  {
    icon: Users,
    title: 'Teamwork in action',
    body: 'Every giant balloon moves as one, with dozens of handlers working in sync under the direction of a balloon pilot.',
  },
  {
    icon: Wind,
    title: 'Reading the wind',
    body: 'Keeping lines steady and responding instantly to gusts as the balloon navigates between skyscrapers.',
  },
  {
    icon: Compass,
    title: 'Navigating the route',
    body: 'Guiding the balloon block by block down the parade route, through tight turns and past cheering crowds.',
  },
  {
    icon: HeartHandshake,
    title: 'Part of a tradition',
    body: 'Contributing to a beloved New York holiday tradition enjoyed by millions of families in person and at home.',
  },
]

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <p className="font-bold uppercase tracking-[0.2em] text-primary">My experience</p>
          <h2 id="experience-heading" className="font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Seven balloons. One unforgettable team.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {
              "As a volunteer balloon handler in the Macy's Thanksgiving Day Parade, I've helped guide Curious George, Super Grover, Dora the Explorer, Kermit the Frog, Hello Kitty, Boss Baby, and SpongeBob SquarePants through the streets of New York City."
            }
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            It has been a memorable way to put teamwork into action — and to help bring a little wonder to Thanksgiving morning.
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-night p-5 text-night-foreground">
              <dt className="text-sm font-semibold uppercase tracking-wider text-night-foreground/75">Balloons guided</dt>
              <dd className="font-display text-5xl font-extrabold text-gold">7</dd>
            </div>
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <dt className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Next parade</dt>
              <dd className="font-display text-5xl font-extrabold">100th</dd>
            </div>
          </dl>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-3 rounded-3xl border-2 border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
