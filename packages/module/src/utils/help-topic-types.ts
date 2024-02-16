export interface HelpTopicLink {
  href: string;
  text?: string;
  // open link in new tab
  newTab?: boolean;
  // add PF icon indicating link is external
  isExternal?: boolean;
}

export interface HelpTopic {
  name: string;
  title: string;
  tags: string[];
  content: string;
  links?: HelpTopicLink[];
}
