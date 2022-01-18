interface DemoInterface {
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
export const Demos: DemoInterface[] = [
  {
    id: 'quickstarts',
    name: 'Quick starts',
    to: '/',
  },
  {
    id: 'custom-catalog',
    name: 'Custom catalog',
    to: '/custom-catalog',
  },
  {
    id: 'quickstarts-props',
    name: 'Quick starts prop based',
    to: '/quickstarts-props',
  },
  {
    id: 'learning-path-demo',
    name: 'Learning Path Demo',
    to: '/learning-path-demo',
  },
];

export default Demos;
