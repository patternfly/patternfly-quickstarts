module.exports = {
  '/extensions/community-extensions/extensions': {
    id: "Community extensions",
    title: "Community extensions",
    toc: [{"text":"Contributing extensions"},{"text":"Available components"}],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/community-extensions/extensions/index" */ './extensions/community-extensions/extensions')
  },
  '/extensions/quick-starts/extensions': {
    id: "Quick starts",
    title: "Quick starts",
    toc: [{"text":"Coming soon"}],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/extensions/index" */ './extensions/quick-starts/extensions')
  },
  '/extensions/quick-starts/Design-Guidlines': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"Elements"},[{"text":"Card"},{"text":"Catalog"},{"text":"Side panel"}],{"text":"Content guidelines"},{"text":"Quick starts in context"}],
    section: "Extensions",
    source: "Design-Guidlines",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/Design-Guidlines/index" */ './extensions/quick-starts/Design-Guidlines')
  },
  '/extensions/quick-starts/In-App-Documentation': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"In App Documentation"},[{"text":"Basic Example"}]],
    fullscreenExamples: ["Basic Example"],
    section: "Extensions",
    source: "In-App-Documentation",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/In-App-Documentation/index" */ './extensions/quick-starts/In-App-Documentation')
  },
  '/extensions/quick-starts/Basic-Quick-Starts': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"Basic Quick Starts Usage EDIT"},[{"text":"Catalog Page"},{"text":"Fullscreen Example"}]],
    examples: ["Catalog Page"],
    fullscreenExamples: ["Fullscreen Example"],
    section: "Extensions",
    source: "Basic-Quick-Starts",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/Basic-Quick-Starts/index" */ './extensions/quick-starts/Basic-Quick-Starts')
  },
  '/developer-resources/global-css-variables': {
    id: "Global CSS variables",
    title: "Global CSS variables",
    toc: [{"text":"About CSS variables"},[{"text":"Global variables"},{"text":"Component variables"},{"text":"Breakpoint variables and class suffixes"},{"text":"Using the variable system"}],{"text":"Global CSS variables"},{"text":"Chart CSS variables"}],
    section: "developer-resources",
    source: "pages-overview",
    Component: () => import(/* webpackChunkName: "developer-resources/global-css-variables/index" */ './developer-resources/global-css-variables')
  },
  '/developer-resources/red-hat-font': {
    id: "Red Hat font",
    title: "Red Hat font",
    toc: [{"text":"Overview"},[{"text":"Available Opt-ins"},{"text":"Using opt-in classes"}]],
    section: "developer-resources",
    source: "pages-overview",
    Component: () => import(/* webpackChunkName: "developer-resources/red-hat-font/index" */ './developer-resources/red-hat-font')
  }
};