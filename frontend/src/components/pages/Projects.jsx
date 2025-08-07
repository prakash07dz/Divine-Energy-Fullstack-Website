import { useTranslation } from "react-i18next";

const projectsData = [
  {
    id: 1,
    image: "/images/projects/residential-solar.avif",
    key: 0,
    slug: "residential-solar",
  },
  {
    id: 2,
    image: "/images/projects/commercial-solar.avif",
    key: 1,
    slug: "commercial-solar",
  },
  {
    id: 3,
    image: "/images/projects/industrial-solar.avif",
    key: 2,
    slug: "industrial-solar",
  },
  {
    id: 4,
    image: "/images/projects/solar-farm.avif",
    key: 3,
    slug: "solar-farm",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2
          id="projects-title"
          className="text-4xl font-bold text-green-700 text-center"
        >
          {t("projects.heading")}
        </h2>

        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("projects.subheading")}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              aria-labelledby={`project-${project.slug}`}
            >
              <img
                src={project.image}
                loading="lazy"
                width="400"
                height="300"
                alt={t(`projects.list.${project.key}.title`)}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3
                id={`project-${project.slug}`}
                className="text-2xl font-semibold mt-4 text-green-700"
              >
                {t(`projects.list.${project.key}.title`)}
              </h3>

              <p className="text-gray-600 mt-2">
                {t(`projects.list.${project.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
