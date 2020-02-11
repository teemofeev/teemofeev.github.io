import { Injectable } from '@angular/core';
import { Project } from './models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projects: Array<Project> = [
    {
      title: 'Brainhub',
      slug: 'brainhub',
      role: 'Co-founder, software engineer',
      image: 'assets/patterns/mountains.svg',
      description: `
      Based in Sofia, Brainhub is a place there I have a chance to work with extremely positive human beings no matter how sad the external environment is.

      We're the team of eccentrics developing the future using tech according to our ideas.
      We believe that the future is the result of the today's hard work.
      `,
      icon: 'assets/logos/brainhub.svg',
      stack: [
        { tech: 'Prototyping', color: '#1771F1' },
        { tech: 'R&D', color: '#FE9E76' },
        { tech: 'Software', color: '#00CF91' },
        { tech: 'Hardware', color: '#1771F1' },
        { tech: 'PCBs', color: '#00CF91' }
      ],
      links: [
        { href: 'https://brainhub.co', color: '#1772F1', text: 'Website' },
        { href: 'https://www.facebook.com/brainhublab', color: '#1772F1', text: 'Facebook' },
        { href: 'https://github.com/brainhublab', color: '#1772F1', text: 'Github' },
        { href: 'https://medium.com/@brainhublab', color: '#1772F1', text: 'Medium' },
      ]
    },
    {
      title: 'Tinusaur',
      slug: 'tinusaur',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/radiant.svg',
      description: `
      “Tinusaur” is an educational platform aimed at students and teachers, and a set of tools for programming, mathematics, and physics – all open-source.
      It was started in 2013 and offered the hardware, software, and methodology necessary to learn these sciences in a fun and practical way.
      The Tinusaur is already used by universities and schools in Bulgaria, Western Europe, and North America.
      `,
      icon: 'assets/logos/tinusaur.svg',
      stack: [
        { tech: 'Python', color: '#FE9E76' },
        { tech: 'WebSockets', color: '#00CF91' },
        { tech: 'Angular', color: '#1771F1' },
        { tech: 'UI', color: '#00CF91' }
      ],
      links: [
        { href: 'https://tinusaur.com/', color: '#1772F1', text: 'Website' },
        { href: 'https://www.facebook.com/tinusaur/', color: '#1772F1', text: 'Facebook' },
        { href: 'https://www.instagram.com/tinusaur/', color: '#1772F1', text: 'Instagram' },
      ]
    },
    {
      title: 'GR',
      slug: 'gr',
      role: 'Software engineer',
      image: 'assets/patterns/gr_back.jpg',
      description: `
      GR is a gesture tracking palm-bracelet, an universal gesture capturing device with its own open-source platform.

      The main application is a real time translation of sign languages.
      `,
      stack: [
        { tech: 'Gestures', color: '#FE9E76' },
        { tech: 'ML', color: '#1771F1' },
        { tech: 'VR', color: '#00CF91' },
        { tech: 'Research', color: '#00CF91' }
      ],
      links: [
        { href: 'https://brainhub.co/projects/gr', color: '#1772F1', text: 'Website' },
      ]
    },
    {
      title: 'GetMaker',
      slug: 'getmaker',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/boxes.svg',
      description: `
      A platform for buying and selling services for Bulgaria region.
      `,
      links: [
        { href: 'https://brainhub.co/projects/getmaker', color: '#1772F1', text: 'Website' },
        { href: 'https://www.facebook.com/getmaker', color: '#1772F1', text: 'Facebook' },
      ],
      stack: [
        { tech: 'Angular', color: '#FE9E76' },
        { tech: 'WebSockets', color: '#1771F1' },
        { tech: 'Django', color: '#00CF91' },
        { tech: 'APIs', color: '#00CF91' },
        { tech: 'Payments', color: '#00CF91' },
      ],
    },
    {
      title: 'The Knob',
      slug: 'theknob',
      role: 'Web developer',
      image: 'assets/patterns/knob.jpg',
      description: `
      A work desk accessory that allows a convenient way to control audio volume, made of concrete and some additive technologies.
      Supports scrolling mode and fantastic light effects.
      `,
      links: [
        { href: 'https://brainhub.co/projects/theknob', color: '#1772F1', text: 'Website' },
        { href: 'https://www.instagram.com/theknob_/', color: '#1772F1', text: 'Instagram' },
      ],
      stack: [
        { tech: 'Concrete', color: '#FE9E76' },
        { tech: 'Audio', color: '#1771F1' },
        { tech: 'Interaction', color: '#00CF91' },
        { tech: 'HCI', color: '#00CF91' },
      ],
    },
    {
      title: 'DIANA',
      slug: 'diana',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/liquid.svg',
      description: `
      Wireless health platform that aims to simplify medical measurements analysis.
      Contains a wireless IoT sensor set that allows to measure health data and stream it in real-time to the mobile app and web-based platform.
      Mobile and web applications allow to visualize and analyze real-time measured data.
      `,
      icon: 'assets/logos/diana_web.jpg',
      stack: [
        { tech: 'React', color: '#FE9E76' },
        { tech: 'Django', color: '#1771F1' },
        { tech: 'Node.js', color: '#00CF91' },
        { tech: 'WebSockets', color: '#00CF91' },
        { tech: 'Streaming', color: '#00CF91' }
      ],
    },
    {
      title: 'Elixir file content search lib',
      slug: 'fcs',
      role: 'Developer',
      image: 'assets/patterns/elixir.svg',
      description: `
      Elixir library for file contents search
      `,
      links: [
        { href: 'https://github.com/timadevelop/fcs', color: '#1772F1', text: 'Github' },
      ],
      stack: [
        { tech: 'Elixir', color: '#FE9E76' },
        { tech: 'Functional Programming', color: '#1771F1' },
      ],
    },
    {
      title: 'SFML graphics',
      slug: 'sfml',
      role: 'Software engineer',
      image: 'assets/patterns/sfml_game.png',
      description: `
      A simple game written using Simple and Fast Multimedia Library.
      `,
      links: [
        { href: 'https://github.com/timadevelop/SFMLPractice', color: '#1772F1', text: 'Github' },
      ],
      stack: [
        { tech: 'Graphics', color: '#FE9E76' },
        { tech: 'Game design', color: '#1771F1' },
      ],
    },
    {
      title: 'Tavle',
      slug: 'tavle',
      role: 'Software engineer',
      image: 'assets/patterns/stingrays.svg',
      description: `
      A platform for sharing ideas, finding jobs and business partners in a tech field.
      It was written back in 2014, I was 17 y.o., I thought it's gonna be big and I tried to participate in a Microsoft BizSpark Program.
      I won, but in 2015 I graduated from school and started my university degree.
      `,
      links: [
        { href: 'https://github.com/timadevelop/tavle', color: '#1772F1', text: 'Github' },
      ],
      stack: [
        { tech: 'Ideas', color: '#FE9E76' },
        { tech: 'Social', color: '#1771F1' },
        { tech: 'Backend', color: '#1771F1' },
      ],
    },
    {
      title: 'More on Github',
      slug: 'https://github.com/timadevelop',
      role: '',
      image: 'assets/patterns/squares.svg',
      description: ``,
    },

  ];

  constructor() { }


  public getProjectBySlug(slug): Observable<Project | null> {
    return of(this.projects.find(v => v.slug === slug));
  }

  public getProjects(): Observable<Array<Project>> {
    return of(this.projects);
  }
}
