export enum JobConcept {
  backend,
  frontend,
  fullstack,
}

export const resume = {
  jobs: [
    {
      company: `OneClick.chat`,
      location: `Remote`,
      title: `Front End Developer (Angular)`,
      website: `https://oneclick.chat`,
      dateStart: `April 2020`,
      dateEnd: `September 2020`,
      concept: JobConcept.frontend,
      tags: ['Angular', 'Typescript', 'WebRTC'],
      projects: [],
      description: `Web application development.`,
    },
    {
      company: `Cislink`,
      location: `Moscow`,
      title: `Front End Developer (Angular)`,
      website: `https://www.cislink.com`,
      dateStart: `September 2019`,
      dateEnd: `December 2019`,
      concept: JobConcept.frontend,
      tags: ['Angular', 'Typescript'],
      projects: [],
      description: `Web application development.`,
    },
    {
      company: `Ofd.ru`,
      location: `Moscow`,
      title: `Web Developer (Angular)`,
      website: `https://ofd.ru`,
      dateStart: `November 2018`,
      dateEnd: `August 2019`,
      concept: JobConcept.frontend,
      tags: ['Angular', 'Typescript'],
      projects: [],
      description: `Document automation system development. - Web-based digital signature
          plugin integration.`,
    },
    {
      company: `Competentum`,
      location: `Moscow`,
      title: `Web Developer (.NET/Full Stack)`,
      website: `https://competentum.ru`,
      dateStart: `March 2018 `,
      dateEnd: `October 2018`,
      concept: JobConcept.fullstack,
      tags: ['.NET C#', 'ASP.NET MVC', 'Devexpress'],
      projects: [],
      description: `KPI application development and support.`,
    },
    {
      company: `WCH Service Bureau`,
      location: `Tashkent`,
      title: `Web Developer (Full Stack)`,
      website: `https://wchsb.com`,
      dateStart: `November 2016 `,
      dateEnd: `December 2017`,
      concept: JobConcept.frontend,
      tags: ['Angular', 'Typescript', 'ASP.NET MVC', 'ASP.NET Web Pages'],
      projects: [],
      description: `Single-page application development.`,
    },
    {
      company: `Zamonaviy Kommunikatsiyalar (Modern Communications)`,
      location: `Tashkent`,
      title: `Web Developer (.NET/Full Stack)`,
      website: `http://zk.uz`,
      dateStart: `January 2015 `,
      dateEnd: `January 2016`,
      concept: JobConcept.fullstack,
      tags: ['AngularJS', 'KnockoutJS', 'BackboneJS', 'ASP.NET MVC'],
      projects: [],
      description: `Web application development and support.`,
    },
    {
      company: `Metrafor`,
      location: `Tashkent`,
      title: `.NET Developer`,
      website: `https://metrafor.ru`,
      dateStart: `August 2013 `,
      dateEnd: `November 2014`,
      concept: JobConcept.fullstack,
      tags: [
        'jQuery',
        '.NET C#',
        'ASP.NET',
        'ASP.NET MVC',
        'ASP.NET Web Pages',
        'Windows Forms',
      ],
      projects: [],
      description: `Web and desktop application development and support.`,
    },
  ],
};
