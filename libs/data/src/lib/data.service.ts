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
      ],
      links: [
        { href: 'https://brainhub.co', color: '#1772F1', text: 'Website' },
        { href: 'https://www.facebook.com/brainhublab', color: '#1772F1', text: 'Facebook' },
        { href: 'https://github.com/brainhublab', color: '#1772F1', text: 'Github' },
        { href: 'https://medium.com/@brainhublab', color: '#1772F1', text: 'Medium' },
      ]
    },
    {
      title: 'GR',
      subTitle: '@brainhub',
      slug: 'gr',
      role: 'Software engineer',
      image: 'assets/patterns/gr_back.jpg',
      description: `
      I and my team are working on a gesture recognition bracelet, a universal gesture capturing device with its open-source platform.
      We made our PCB, wrote a complete SDK for a real-time sensor data analysis and implemented algorithms for extracting phalanges position using accelerometer, magnetometer, and gyroscope data.
      Time invested: > 2 years.
      `,
      stack: [
        { tech: 'Gestures', color: '#FE9E76' },
        { tech: 'C/C++', color: '#FE9E76' },
        { tech: 'OpenGL', color: '#FE9E76' },
        { tech: 'ML', color: '#1771F1' },
        { tech: 'VR', color: '#00CF91' },
        { tech: 'Research', color: '#00CF91' }
      ],
      links: [
        { href: 'https://brainhub.co/projects/gr', color: '#1772F1', text: 'Website' },
      ]
    },
    {
      title: 'Tinusaur',
      subTitle: '@brainhub',
      slug: 'tinusaur',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/radiant.svg',
      description: `
      “Tinusaur” is an educational platform aimed at students and teachers, and a set of tools for programming, mathematics, and physics – all open-source.
      It was started in 2013 and offered the hardware, software, and methodology necessary to learn these sciences in a fun and practical way.
      The Tinusaur is already used by universities and schools in Bulgaria, Western Europe, and North America.
      We with @tinusaur work on the Blocktinu - a web-based platform for teachers and students who are learning to write low and high-level code for IoT platforms like Arduino or Tinusaur.
      We believe that kids can code so we implemented both code editor and visual block-based editor for them in our web interface.
      The V2.0 prototype was written in one month.
      `,
      icon: 'assets/logos/tinusaur.svg',
      stack: [
        { tech: 'Python', color: '#FE9E76' },
        { tech: 'Django', color: '#FE9E76' },
        { tech: 'WebSockets', color: '#00CF91' },
        { tech: 'Angular', color: '#1771F1' },
      ],
      links: [
        { href: 'https://tinusaur.com/', color: '#1772F1', text: 'Website' },
        { href: 'https://www.facebook.com/tinusaur/', color: '#1772F1', text: 'Facebook' },
        { href: 'https://www.instagram.com/tinusaur/', color: '#1772F1', text: 'Instagram' },
      ]
    },
    {
      title: 'The Knob',
      subTitle: '@brainhub',
      slug: 'theknob',
      role: 'Web developer',
      image: 'assets/patterns/knob.jpg',
      description: `
      A work desk accessory that allows a convenient way to control audio volume, made of concrete and some additive technologies.
      It supports scrolling mode and fantastic light effects.
      `,
      links: [
        { href: 'https://brainhub.co/projects/theknob', color: '#1772F1', text: 'Website' },
        { href: 'https://www.instagram.com/theknob_/', color: '#1772F1', text: 'Instagram' },
      ],
      stack: [
        { tech: 'HCI', color: '#00CF91' },
        { tech: 'Audio', color: '#1771F1' },
        { tech: 'Concrete', color: '#FE9E76' },
      ],
    },
    {
      title: 'GetMaker',
      subTitle: '@brainhub',
      slug: 'getmaker',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/boxes.svg',
      description: `
      A marketplace for service providers written from scratch using Django, Angular, WebSockets & Redis for built-in messenger.
      The goal is to make it easier and more effective for people like layers, builders,
      seamstresses to promote their services online using completely new approach &  modern social channels.
      Time invested: > 10 months
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
      title: 'DIANA',
      subTitle: '@brainhub',
      slug: 'diana',
      role: 'Full Stack Engineer',
      image: 'assets/patterns/liquid.svg',
      description: `
      Wireless health platform that aims to simplify medical measurement analysis.
      Mobile and web applications allow doctors to visualize and analyze real-time measured data from ECG, temperature, glucose, SpO2 and EEG sensors.
      The main goal is to allow professionals to analyze patients' data remotely.
      The prototype was written in ~4 months.
      `,
      icon: 'assets/logos/diana_web.jpg',
      links: [
        { href: 'https://brainhub.co/projects/diana', color: '#1772f1', text: 'Website' }
      ],
      stack: [
        { tech: 'React', color: '#FE9E76' },
        { tech: 'Django', color: '#1771F1' },
        { tech: 'Node.js', color: '#00CF91' },
        { tech: 'WebSockets', color: '#00CF91' },
        { tech: 'Streaming', color: '#00CF91' }
      ],
    },
    {
      title: 'T5MTOKYFOtFv',
      subTitle: '@brainhub',
      slug: 'T5MTOKYFOtFv',
      role: 'Software engineer',
      image: 'assets/patterns/triangles.svg',
      description: `
      Raspberry Pi information stations for an innovation space.
      Prototyping time: ~1 month.
      `,
      links: [
      ],
      stack: [
        { tech: 'React', color: '#FE9E76' },
        { tech: 'react-spring', color: '#FE9E76' },
        { tech: 'Node.js (Nest.js)', color: '#1771F1' },
        { tech: 'Electron', color: '#1771F1' },
        { tech: 'Prototyping', color: '#1771F1' },
      ],
    },
    {
      title: 'Tavle',
      slug: 'tavle',
      role: 'Schoolboy',
      image: 'assets/patterns/stingrays.svg',
      description: `
      A platform for sharing ideas, finding jobs and business partners in a tech field.
      It was written back in 2014, I was 17 y.o., I thought it's gonna be big and I tried to participate in a Microsoft BizSpark Program.
      I won, but in 2015 I graduated from school and started my university degree.
      `,
      stack: [
        { tech: 'Ideas', color: '#FE9E76' },
        { tech: 'Social', color: '#1771F1' },
        { tech: 'Node.js', color: '#1771F1' },
      ],
    },
    {
      title: 'Elixir file content search lib',
      slug: 'fcs',
      role: 'Student',
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
      role: 'Student',
      image: 'assets/patterns/sfml_game.png',
      description: `
      A simple game, written using Simple and Fast Multimedia Library.
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
