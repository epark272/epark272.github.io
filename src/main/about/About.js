import { Page } from "../../common/page/Page";

function About() {
  return (
    <Page
      contentMain={
        <div className="space-y-8">
          <section className="card bg-base-100 border border-base-300 shadow-xl">
            <div className="card-body space-y-3">
              <p className="badge badge-outline w-fit">About</p>
              <h1 className="card-title text-3xl">Teacher, builder, collaborator</h1>
              <p className="text-base-content/80 leading-relaxed">
                I enjoy making complex ideas feel simple—whether it’s guiding students through
                algorithms, refining a service interface, or crafting documentation that people
                actually want to read. My recent work has been split between teaching computer
                science at UC Berkeley and engineering projects that value clarity, reliability,
                and accessibility.
              </p>
              <p className="text-base-content/70 leading-relaxed">
                Outside of code, you’ll find me reading about systems thinking, exploring cities on
                foot, and experimenting with minimalist product design. I believe technology should
                support calm, focused work—not get in the way of it.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <div className="card-body space-y-2">
                <h2 className="card-title">What I value</h2>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 text-sm">
                  <li>Kindness and clarity in teams</li>
                  <li>Accessible, maintainable systems</li>
                  <li>Teaching as a way to learn deeply</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300 shadow-md">
              <div className="card-body space-y-2">
                <h2 className="card-title">Now exploring</h2>
                <ul className="list-disc list-inside space-y-2 text-base-content/80 text-sm">
                  <li>Better tooling for educators</li>
                  <li>Calm interfaces for productivity</li>
                  <li>Teaching and learning with AI responsibly</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}

export default About;
