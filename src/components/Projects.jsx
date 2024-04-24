import data from "../mock/data.json";

const Projects = () => {
  return (
    <div id='proyectos'>
      <h2 className='subtitle title-gradient'>{data["section-four"].title}</h2>
      <div className=' mt-10 gap-10 grid grid-cols-1 md:grid-cols-2'>
        {data["section-four"].projects.map((project) => (
          <div key={project.id} className='shadow-md rounded-md'>
            <img
              src={project.img.url}
              alt={project.img.alt}
              className='
            rounded-md
            w-full h-[350px] object-cover
            '
            />
            <div className='text-center mt-5 py-10'>
              <h3 className='font-semibold text-[18px] mb-4'>
                {project.title}
              </h3>
              <p className='text-pretty text-[14px] mx-auto max-w-[600px]'>
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
