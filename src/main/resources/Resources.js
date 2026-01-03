import { Page } from "../../common/page/Page";

const resources = [
  {
    title: "CS 61B Resources",
    description: "Labs, projects, and study material for Berkeley's data structures course.",
    link: "https://cs61b.edwardpark.org",
    action: "Open resources",
  },
  {
    title: "GitHub",
    description: "Open-source projects, experiments, and course tooling I've worked on.",
    link: "https://github.com/epark272",
    action: "View GitHub",
  },
  {
    title: "Teaching notes",
    description: "In-progress notes on teaching methods, course infrastructure, and lesson design.",
    link: "mailto:epark2@berkeley.edu",
    action: "Request notes",
  },
];

function Resources() {
  return (
    <Page
      contentMain={
        <div className="space-y-8">
          <section className="card bg-base-100 border border-base-300 shadow-xl">
            <div className="card-body space-y-2">
              <p className="badge badge-outline w-fit">Resources</p>
              <h1 className="card-title text-3xl">Tools and links</h1>
              <p className="text-base-content/80 leading-relaxed">
                A handful of things I maintain or reach for often. If you’re looking for something
                specific, feel free to reach out.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((item) => (
              <div
                key={item.title}
                className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="card-title text-xl">{item.title}</h2>
                    <span className="badge badge-secondary badge-outline">Live</span>
                  </div>
                  <p className="text-sm text-base-content/80 leading-relaxed">{item.description}</p>
                  <div className="card-actions justify-start">
                    <a
                      className="btn btn-primary btn-sm"
                      href={item.link}
                      target={item.link.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={item.link.startsWith("mailto:") ? undefined : "noreferrer"}
                    >
                      {item.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      }
    />
  );
}

export default Resources;
