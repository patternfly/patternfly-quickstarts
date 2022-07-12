interface NavInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string;
  /** The name of the demo */
  name: string;
  /** href */
  to: string;
  /** Demo component associated with the demo  */
  componentType?: any;
}
/** Add the name of the demo and it's component here to have them show up in the demo app */
export const Nav: NavInterface[] = [
  {
    id: 'custom-catalog',
    name: 'Resources (custom catalog)',
    to: '/',
  },
  {
    id: 'quickstarts-localized',
    name: 'Quick starts localized',
    to: '/quickstarts-localized',
  },
  {
    id: 'quickstarts-props',
    name: 'Quick starts (props)',
    to: '/quickstarts-props',
  },
  {
    id: 'quickstarts',
    name: 'Quick starts (context)',
    to: '/quickstarts-context',
  },
  {
    id: 'in-app-documentation',
    name: 'In-app Documentation',
    to: '/in-app-documentation',
  },
];

export default Nav;
