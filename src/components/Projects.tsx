import 'bootstrap/dist/css/bootstrap.css';

const projects = [
  {
    name: 'nba-history-d3',
    description: 'D3 visualization of NBA History',
    github: 'https://github.com/abcmer/nba-history-d3',
    link: 'https://nba-history.abcmer.com',
    imgSrc: '/static/project-thumbnails/nba-history.png',
    imgAlt: 'nba history d3 app',
  },
  {
    name: 'snake',
    description: 'Simple snake game',
    github: 'https://github.com/abcmer/snake',
    link: 'https://snake.abcmer.com/',
    imgSrc: '/static/project-thumbnails/snake.png',
    imgAlt: 'snake game',
  },
  {
    name: 'allwork-noplay',
    description: 'All work and no play makes Adam a dull boy',
    github: 'https://github.com/abcmer/allwork-noplay',
    link: 'https://allwork-noplay.abcmer.com/?name=Adam&gender=boy',
    imgSrc: '/static/project-thumbnails/allwork-noplay.png',
    imgAlt: 'all work, no play app',
  },
  {
    name: 'Red Carpet Challenge',
    description: 'Film watching social media site on Kubernetes',
    github: 'https://github.com/abcmer/RCC',
    link: 'https://github.com/abcmer/RCC',
    imgSrc: '/static/project-thumbnails/red-carpet-challenge.png',
    imgAlt: 'red carpet challenge app',
  },
  {
    name: 'phish-stats',
    description: 'Python project for generating Phish Stats',
    github: 'https://github.com/abcmer/phish-stats',
    link: 'https://github.com/abcmer/phish-stats',
    imgSrc: '/static/project-thumbnails/phish-stats.png',
    imgAlt: 'phish stats line graph',
  },
  {
    name: 'fortunes',
    description: 'All the fortune cookies you desire, without getting full',
    github: 'https://github.com/abcmer/fortunes',
    link: 'https://fortunes.abcmer.com/',
    imgSrc: '/static/project-thumbnails/fortunes.png',
    imgAlt: 'fortunes app',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects fade-in">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div key={project.name} className="col-md-5 offset-md-1 project">
              <a href={project.link}>
                <div>
                  <h3 className="project-title">{project.name}</h3>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.imgSrc} alt={project.imgAlt} />
                </div>
                <div className="row">
                  <div className="col" />
                  <div className="col">
                    <a href={project.github}>Github</a>
                  </div>
                  <div className="col" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
