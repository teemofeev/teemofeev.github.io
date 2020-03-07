export class StackItem {
  icon?: string;
  tech: string;
  color: string;
}

export class ProjectLink {
  href: string;
  text: string;
  color: string;
}

export class Project {
  title: string;
  subTitle?: string;
  role: string;
  slug: string;
  image: string;
  description: string;
  icon?: string;
  stack?: Array<StackItem>;
  links?: Array<ProjectLink>;
}
