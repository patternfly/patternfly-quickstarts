module.exports = {
  '/extensions/quick-starts/extensions': {
    id: "Quick starts",
    title: "Quick starts",
    toc: [],
    section: "extensions",
    source: "extensions",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/extensions/index" */ './extensions/quick-starts/extensions')
  },
  '/extensions/quick-starts/Basic-Quick-Starts': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"Basic Quick Starts Usage"},[{"text":"Catalog Page"},{"text":"Fullscreen Example"}]],
    examples: ["Catalog Page"],
    fullscreenExamples: ["Fullscreen Example"],
    section: "Extensions",
    source: "Basic-Quick-Starts",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/Basic-Quick-Starts/index" */ './extensions/quick-starts/Basic-Quick-Starts')
  },
  '/extensions/quick-starts/Design-Guidelines': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"Elements"},[{"text":"Card"},{"text":"Catalog"},{"text":"Side panel"}],{"text":"Content guidelines"},{"text":"Quick starts in context"}],
    section: "Extensions",
    source: "Design-Guidelines",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/Design-Guidelines/index" */ './extensions/quick-starts/Design-Guidelines')
  },
  '/extensions/quick-starts/In-App-Documentation': {
    id: "Quick Starts",
    title: "Quick Starts",
    toc: [{"text":"In App Documentation"},[{"text":"Basic Example"}]],
    fullscreenExamples: ["Basic Example"],
    section: "Extensions",
    source: "In-App-Documentation",
    Component: () => import(/* webpackChunkName: "extensions/quick-starts/In-App-Documentation/index" */ './extensions/quick-starts/In-App-Documentation')
  }
};