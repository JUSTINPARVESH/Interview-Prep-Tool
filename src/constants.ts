import { Question } from './types';

export const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
  'Node.js', 'Express.js', 'Python', 'Django', 'Flask',
  'SQL', 'PostgreSQL', 'MongoDB', 'NoSQL',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git',
  'GraphQL', 'REST API', 'Security'
];

export const ROLES = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps'
];

export const ALL_FILTERS = [...ROLES, ...SKILLS];

export const QUESTIONS: Question[] = [
  // Frontend Fundamentals
  {
    id: 'f1',
    text: 'What is React?',
    answer: 'React is a popular **JavaScript library** developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.\n\nKey features include:\n- **Component-Based Architecture**: Build encapsulated components that manage their own state.\n- **Virtual DOM**: React uses a virtual representation of the DOM to optimize rendering performance.\n- **Declarative UI**: You describe how your UI should look for different states, and React updates the DOM efficiently.\n\n**Example:**\n```jsx\nfunction Welcome() {\n  return <h1>Hello, World!</h1>;\n}\n```',
    options: ['A JavaScript library for building user interfaces', 'A CSS framework', 'A backend programming language', 'A database management system'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f2',
    text: 'Explain the useState hook.',
    answer: 'The `useState` hook is a fundamental React Hook that allows you to add **state** to functional components. Before hooks, state was only available in class components.\n\nIt returns an array with two elements:\n1. The **current state value**.\n2. A **function** that lets you update it.\n\n**Example:**\n```jsx\nimport { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```',
    options: ['A Hook for side effects', 'A Hook that lets you add React state to function components', 'A way to navigate between pages', 'A method to fetch data'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f3',
    text: 'What is the Virtual DOM?',
    answer: 'The **Virtual DOM (VDOM)** is a programming concept where an "ideal" or "virtual" representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called **reconciliation**.\n\n**How it works:**\n1. When state changes, a new Virtual DOM tree is created.\n2. React compares (diffs) the new VDOM with the previous one.\n3. React calculates the most efficient way to update the real DOM.\n4. Only the changed parts of the real DOM are updated, which is much faster than re-rendering the entire page.',
    options: ['A direct reference to the browser DOM', 'An in-memory representation of the real DOM', 'A CSS styling engine', 'A backend server architecture'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f4',
    text: 'What are the differences between functional and class components?',
    answer: 'Functional components use Hooks for state, class components use this.state',
    options: ['Functional components are faster', 'Class components are deprecated', 'Functional components use Hooks for state, class components use this.state', 'There is no difference'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f5',
    text: 'Explain the concept of lifting state up in React.',
    answer: 'Moving shared state to the closest common ancestor',
    options: ['Moving shared state to the closest common ancestor', 'Deleting state from a component', 'Passing state from parent to child only', 'Using Redux for everything'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f6',
    text: 'What is JSX?',
    answer: 'A syntax extension for JavaScript that looks like HTML',
    options: ['A new programming language', 'A styling library', 'A syntax extension for JavaScript that looks like HTML', 'A database query language'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },

  // HTML & CSS Fundamentals
  {
    id: 'html1',
    text: 'What is the difference between HTML and HTML5?',
    answer: 'HTML5 is the latest version with new semantic elements and APIs',
    options: ['HTML5 is the latest version with new semantic elements and APIs', 'They are identical', 'HTML5 is only for mobile', 'HTML5 is deprecated'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'css1',
    text: 'What is CSS?',
    answer: 'Cascading Style Sheets - used for styling web pages',
    options: ['Cascading Style Sheets - used for styling web pages', 'Programming language', 'Database system', 'Server technology'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css2',
    text: 'What is the CSS Box Model?',
    answer: 'Content, padding, border, margin',
    options: ['Content, padding, border, margin', 'Width, height, color', 'Display, position, float', 'Flex, grid, block'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },

  // JavaScript Fundamentals
  {
    id: 'js1',
    text: 'What is the difference between == and === in JavaScript?',
    answer: '== does type coercion, === does strict equality check',
    options: ['== does type coercion, === does strict equality check', 'They are identical', '=== does type coercion, == does strict equality', 'Both do type coercion'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js2',
    text: 'What is a closure in JavaScript?',
    answer: 'Function with access to outer function scope',
    options: ['Function with access to outer function scope', 'Function without access to outer scope', 'Object-oriented concept', 'Array method'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js3',
    text: 'What is hoisting in JavaScript?',
    answer: 'Moving declarations to top of scope',
    options: ['Moving declarations to top of scope', 'Moving code to bottom', 'Code optimization', 'Error handling'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },

  // Vue.js Questions (50 questions)
  {
    id: 'vue1',
    text: 'What is Vue.js?',
    answer: 'Vue.js is a progressive JavaScript framework for building UI.',
    options: ['A progressive JavaScript framework for building UI', 'A CSS framework', 'A backend programming language', 'A database management system'],
    role: 'Frontend Developer',
    skills: ['Vue', 'JavaScript']
  },
  {
    id: 'vue2',
    text: 'Why Vue.js?',
    answer: 'Simple, reactive, easy to learn.',
    options: ['Simple, reactive, easy to learn', 'Complex and powerful', 'Only for large apps', 'Deprecated framework'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue3',
    text: 'What is v-model?',
    answer: 'Two-way data binding.',
    options: ['Two-way data binding', 'One-way binding', 'No binding', 'CSS binding'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue4',
    text: 'What is Vue instance?',
    answer: 'Root of Vue application.',
    options: ['Root of Vue application', 'Root of CSS application', 'Root of database application', 'Root of server application'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue5',
    text: 'What is component?',
    answer: 'Reusable Vue instance.',
    options: ['Reusable Vue instance', 'Single Vue instance', 'No Vue instance', 'Random Vue instance'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue6',
    text: 'What is props?',
    answer: 'Pass data from parent to child.',
    options: ['Pass data from parent to child', 'Pass data from child to parent', 'No data passing', 'Random data passing'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue7',
    text: 'What is $emit?',
    answer: 'Send event from child to parent.',
    options: ['Send event from child to parent', 'Send event from parent to child', 'No event sending', 'Random event sending'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue8',
    text: 'What is computed property?',
    answer: 'Derived data.',
    options: ['Derived data', 'Static data', 'Random data', 'No data'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue9',
    text: 'What is watcher?',
    answer: 'Watch data changes.',
    options: ['Watch data changes', 'Ignore data changes', 'Create data changes', 'Delete data changes'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue10',
    text: 'What is lifecycle hook?',
    answer: 'Component lifecycle events.',
    options: ['Component lifecycle events', 'Database events', 'Server events', 'Random events'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue11',
    text: 'What is created()?',
    answer: 'Instance created hook.',
    options: ['Instance created hook', 'Instance deleted hook', 'Instance updated hook', 'Instance mounted hook'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue12',
    text: 'What is mounted()?',
    answer: 'DOM mounted hook.',
    options: ['DOM mounted hook', 'DOM deleted hook', 'DOM created hook', 'DOM updated hook'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue13',
    text: 'What is directive?',
    answer: 'Special HTML attributes.',
    options: ['Special HTML attributes', 'Normal HTML attributes', 'CSS attributes', 'JavaScript attributes'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue14',
    text: 'What is v-if?',
    answer: 'Conditional rendering.',
    options: ['Conditional rendering', 'Conditional styling', 'Conditional data', 'Conditional events'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue15',
    text: 'What is v-for?',
    answer: 'List rendering.',
    options: ['List rendering', 'List styling', 'List data', 'List events'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue16',
    text: 'What is v-bind?',
    answer: 'Bind HTML attributes.',
    options: ['Bind HTML attributes', 'Bind CSS attributes', 'Bind JavaScript attributes', 'Bind database attributes'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue17',
    text: 'What is v-on?',
    answer: 'Event handling.',
    options: ['Event handling', 'Data handling', 'Style handling', 'Component handling'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue18',
    text: 'What is Vue Router?',
    answer: 'Official routing library.',
    options: ['Official routing library', 'Official styling library', 'Official database library', 'Official server library'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue19',
    text: 'What is Vuex?',
    answer: 'State management library.',
    options: ['State management library', 'Style management library', 'Database management library', 'Server management library'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue20',
    text: 'What is template?',
    answer: 'HTML structure.',
    options: ['HTML structure', 'CSS structure', 'JavaScript structure', 'Database structure'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue21',
    text: 'What is script?',
    answer: 'JavaScript logic.',
    options: ['JavaScript logic', 'CSS logic', 'HTML logic', 'Database logic'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue22',
    text: 'What is style?',
    answer: 'CSS styling.',
    options: ['CSS styling', 'JavaScript styling', 'HTML styling', 'Database styling'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue23',
    text: 'What is single file component?',
    answer: '.vue file with template, script, style.',
    options: ['.vue file with template, script, style', '.js file with logic', '.css file with styles', '.html file with structure'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue24',
    text: 'What is reactivity?',
    answer: 'Auto update when data changes.',
    options: ['Auto update when data changes', 'Manual update when data changes', 'No update when data changes', 'Random update when data changes'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue25',
    text: 'What is ref?',
    answer: 'Reference to DOM element.',
    options: ['Reference to DOM element', 'Reference to CSS element', 'Reference to JavaScript element', 'Reference to database element'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue26',
    text: 'What is reactive()?',
    answer: 'Make object reactive.',
    options: ['Make object reactive', 'Make object static', 'Make object random', 'Make object deleted'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue27',
    text: 'What is Composition API?',
    answer: 'Alternative to Options API.',
    options: ['Alternative to Options API', 'Same as Options API', 'No relation to Options API', 'Extension of Options API'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue28',
    text: 'What is setup()?',
    answer: 'Composition API entry point.',
    options: ['Composition API entry point', 'Options API entry point', 'No API entry point', 'Random API entry point'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue29',
    text: 'What is provide/inject?',
    answer: 'Dependency injection.',
    options: ['Dependency injection', 'Dependency creation', 'Dependency deletion', 'Dependency ignoring'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue30',
    text: 'What is transition?',
    answer: 'Animation effects.',
    options: ['Animation effects', 'Static effects', 'No effects', 'Random effects'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue31',
    text: 'What is plugin?',
    answer: 'Add global functionality.',
    options: ['Add global functionality', 'Add local functionality', 'Remove functionality', 'Ignore functionality'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue32',
    text: 'What is filter?',
    answer: 'Format text display.',
    options: ['Format text display', 'Format data display', 'Format style display', 'Format script display'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue33',
    text: 'What is mixin?',
    answer: 'Reusable component options.',
    options: ['Reusable component options', 'Single component options', 'No component options', 'Random component options'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue34',
    text: 'What is slot?',
    answer: 'Content distribution.',
    options: ['Content distribution', 'Data distribution', 'Style distribution', 'Script distribution'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue35',
    text: 'What is dynamic component?',
    answer: 'Switch between components.',
    options: ['Switch between components', 'Switch between styles', 'Switch between data', 'Switch between scripts'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue36',
    text: 'What is async component?',
    answer: 'Load component on demand.',
    options: ['Load component on demand', 'Load component immediately', 'No component loading', 'Random component loading'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue37',
    text: 'What is custom directive?',
    answer: 'Create custom directives.',
    options: ['Create custom directives', 'Create built-in directives', 'Delete directives', 'Ignore directives'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  // TypeScript Questions
  {
    id: 'ts1',
    text: 'What is TypeScript?',
    answer: 'Typed superset of JavaScript.',
    options: ['Typed superset of JavaScript', 'JavaScript subset', 'New programming language', 'Database language'],
    role: 'Frontend Developer',
    skills: ['TypeScript', 'JavaScript']
  },
  {
    id: 'ts2',
    text: 'What is interface in TypeScript?',
    answer: 'Define object shape.',
    options: ['Define object shape', 'Define class shape', 'Define function shape', 'Define array shape'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts3',
    text: 'What is generic in TypeScript?',
    answer: 'Reusable type.',
    options: ['Reusable type', 'Single type', 'No type', 'Random type'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts4',
    text: 'What is type annotation?',
    answer: 'Specify variable type.',
    options: ['Specify variable type', 'Ignore variable type', 'Create variable type', 'Delete variable type'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue42',
    text: 'What is server-side rendering?',
    answer: 'Render on server.',
    options: ['Render on server', 'Render on client', 'No rendering', 'Random rendering'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue43',
    text: 'What is Nuxt.js?',
    answer: 'Vue framework for SSR.',
    options: ['Vue framework for SSR', 'Vue framework for CSS', 'Vue framework for data', 'Vue framework for scripts'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue44',
    text: 'What is Vue Test Utils?',
    answer: 'Testing library.',
    options: ['Testing library', 'Styling library', 'Data library', 'Script library'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue45',
    text: 'What is performance optimization?',
    answer: 'Improve app speed.',
    options: ['Improve app speed', 'Decrease app speed', 'No app speed', 'Random app speed'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue46',
    text: 'What is lazy loading?',
    answer: 'Load components when needed.',
    options: ['Load components when needed', 'Load all components immediately', 'No component loading', 'Random component loading'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue47',
    text: 'What is tree shaking?',
    answer: 'Remove unused code.',
    options: ['Remove unused code', 'Add unused code', 'Ignore unused code', 'Create unused code'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue48',
    text: 'What is code splitting?',
    answer: 'Split code into chunks.',
    options: ['Split code into chunks', 'Combine code into chunks', 'No code splitting', 'Random code splitting'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue49',
    text: 'What is virtual scrolling?',
    answer: 'Render only visible items.',
    options: ['Render only visible items', 'Render all items', 'No rendering', 'Random rendering'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },
  {
    id: 'vue50',
    text: 'Why Vue.js?',
    answer: 'Easy to learn, flexible, performant.',
    options: ['Easy to learn, flexible, performant', 'Hard to learn, rigid, slow', 'Only for experts', 'Deprecated framework'],
    role: 'Frontend Developer',
    skills: ['Vue']
  },

  // Angular Questions (50 questions)
  {
    id: 'angular1',
    text: 'What is Angular?',
    answer: 'Angular is a TypeScript-based frontend framework by Google.',
    options: ['A TypeScript-based frontend framework by Google', 'A CSS framework', 'A backend programming language', 'A database management system'],
    role: 'Frontend Developer',
    skills: ['Angular', 'TypeScript']
  },
  {
    id: 'angular2',
    text: 'What is dependency injection in Angular?',
    answer: 'Inject service into component.',
    options: ['Inject service into component', 'Inject CSS into component', 'Inject database into component', 'Inject file into component'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular3',
    text: 'What is ngFor?',
    answer: 'Loop.',
    options: ['Loop', 'Condition', 'Event', 'Style'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular4',
    text: 'What is component?',
    answer: 'Building block of Angular app.',
    options: ['Building block of Angular app', 'Building block of CSS app', 'Building block of database app', 'Building block of server app'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular5',
    text: 'What is module?',
    answer: 'Container for components.',
    options: ['Container for components', 'Container for styles', 'Container for data', 'Container for scripts'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular6',
    text: 'What is service?',
    answer: 'Reusable business logic.',
    options: ['Reusable business logic', 'Single business logic', 'No business logic', 'Random business logic'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular7',
    text: 'What is directive?',
    answer: 'Modify DOM behavior.',
    options: ['Modify DOM behavior', 'Modify CSS behavior', 'Modify data behavior', 'Modify script behavior'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular8',
    text: 'What is pipe?',
    answer: 'Transform data.',
    options: ['Transform data', 'Transform styles', 'Transform scripts', 'Transform components'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular9',
    text: 'What is interceptor?',
    answer: 'Modify HTTP requests.',
    options: ['Modify HTTP requests', 'Modify HTTP responses', 'Modify HTTP headers', 'Modify HTTP methods'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular10',
    text: 'What is guard?',
    answer: 'Protect routes.',
    options: ['Protect routes', 'Protect components', 'Protect services', 'Protect modules'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular11',
    text: 'What is resolver?',
    answer: 'Pre-fetch data.',
    options: ['Pre-fetch data', 'Post-fetch data', 'No data fetching', 'Random data fetching'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular12',
    text: 'What is router?',
    answer: 'Navigation.',
    options: ['Navigation', 'Styling', 'Data binding', 'Event handling'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular13',
    text: 'What is lazy loading?',
    answer: 'Load modules on demand.',
    options: ['Load modules on demand', 'Load all modules immediately', 'No module loading', 'Random module loading'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular14',
    text: 'What is observable?',
    answer: 'Stream of data.',
    options: ['Stream of data', 'Single data', 'No data', 'Random data'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular15',
    text: 'What is subject?',
    answer: 'Observable that can multicast.',
    options: ['Observable that can multicast', 'Observable that can unicast', 'No observable', 'Random observable'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular16',
    text: 'What is BehaviorSubject?',
    answer: 'Observable with current value.',
    options: ['Observable with current value', 'Observable without current value', 'No observable', 'Random observable'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular17',
    text: 'What is async pipe?',
    answer: 'Subscribe to observable.',
    options: ['Subscribe to observable', 'Unsubscribe from observable', 'Create observable', 'Delete observable'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular18',
    text: 'What is two-way binding?',
    answer: '[(ngModel)].',
    options: ['[(ngModel)]', '(ngModel)', '[ngModel]', 'ngModel'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular19',
    text: 'What is @Input()?',
    answer: 'Receive data from parent.',
    options: ['Receive data from parent', 'Send data to parent', 'No data transfer', 'Random data transfer'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular20',
    text: 'What is @Output()?',
    answer: 'Send data to parent.',
    options: ['Send data to parent', 'Receive data from parent', 'No data transfer', 'Random data transfer'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular21',
    text: 'What is @ViewChild?',
    answer: 'Access child component.',
    options: ['Access child component', 'Access parent component', 'No component access', 'Random component access'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular22',
    text: 'What is @ContentChild?',
    answer: 'Access content child.',
    options: ['Access content child', 'Access view child', 'No child access', 'Random child access'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular23',
    text: 'What is lifecycle hook?',
    answer: 'Component lifecycle events.',
    options: ['Component lifecycle events', 'Module lifecycle events', 'Service lifecycle events', 'Random lifecycle events'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular24',
    text: 'What is ngOnInit?',
    answer: 'Initialize component.',
    options: ['Initialize component', 'Destroy component', 'Update component', 'Create component'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular25',
    text: 'What is ngOnDestroy?',
    answer: 'Cleanup component.',
    options: ['Cleanup component', 'Create component', 'Update component', 'Initialize component'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular26',
    text: 'What is ngOnChanges?',
    answer: 'Detect input changes.',
    options: ['Detect input changes', 'Detect output changes', 'No change detection', 'Random change detection'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular27',
    text: 'What is ChangeDetectionStrategy?',
    answer: 'Control change detection.',
    options: ['Control change detection', 'Ignore change detection', 'Create change detection', 'Delete change detection'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular28',
    text: 'What is OnPush?',
    answer: 'Check only when inputs change.',
    options: ['Check only when inputs change', 'Check always', 'No checking', 'Random checking'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular29',
    text: 'What is Default?',
    answer: 'Check always.',
    options: ['Check always', 'Check never', 'Check sometimes', 'Check randomly'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular30',
    text: 'What is template reference variable?',
    answer: 'Reference DOM element.',
    options: ['Reference DOM element', 'Reference CSS element', 'Reference script element', 'Reference component element'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular31',
    text: 'What is structural directive?',
    answer: 'Change DOM structure.',
    options: ['Change DOM structure', 'Change DOM style', 'Change DOM data', 'Change DOM events'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular32',
    text: 'What is attribute directive?',
    answer: 'Change DOM appearance.',
    options: ['Change DOM appearance', 'Change DOM structure', 'Change DOM data', 'Change DOM events'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular33',
    text: 'What is ngIf?',
    answer: 'Conditional rendering.',
    options: ['Conditional rendering', 'Conditional styling', 'Conditional data', 'Conditional events'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular34',
    text: 'What is ngSwitch?',
    answer: 'Multiple conditions.',
    options: ['Multiple conditions', 'Single condition', 'No conditions', 'Random conditions'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular35',
    text: 'What is ngClass?',
    answer: 'Conditional CSS classes.',
    options: ['Conditional CSS classes', 'Conditional data classes', 'Conditional script classes', 'Random CSS classes'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular36',
    text: 'What is ngStyle?',
    answer: 'Conditional CSS styles.',
    options: ['Conditional CSS styles', 'Conditional data styles', 'Conditional script styles', 'Random CSS styles'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular37',
    text: 'What is form control?',
    answer: 'Track form value.',
    options: ['Track form value', 'Track form style', 'Track form data', 'Track form events'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular38',
    text: 'What is FormGroup?',
    answer: 'Group form controls.',
    options: ['Group form controls', 'Single form control', 'No form control', 'Random form control'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular39',
    text: 'What is FormControl?',
    answer: 'Single form control.',
    options: ['Single form control', 'Group form controls', 'No form control', 'Random form control'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular40',
    text: 'What is FormBuilder?',
    answer: 'Simplify form creation.',
    options: ['Simplify form creation', 'Complex form creation', 'No form creation', 'Random form creation'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular41',
    text: 'What is validators?',
    answer: 'Validate form input.',
    options: ['Validate form input', 'Ignore form input', 'Create form input', 'Delete form input'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular42',
    text: 'What is async validators?',
    answer: 'Async form validation.',
    options: ['Async form validation', 'Sync form validation', 'No form validation', 'Random form validation'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular43',
    text: 'What is HTTP client?',
    answer: 'Make HTTP requests.',
    options: ['Make HTTP requests', 'Make HTTP responses', 'No HTTP requests', 'Random HTTP requests'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular44',
    text: 'What is HttpClient?',
    answer: 'HTTP client with features.',
    options: ['HTTP client with features', 'Basic HTTP client', 'No HTTP client', 'Random HTTP client'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular45',
    text: 'What is RxJS?',
    answer: 'Reactive programming library.',
    options: ['Reactive programming library', 'Non-reactive programming library', 'No programming library', 'Random programming library'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular46',
    text: 'What is operator?',
    answer: 'Transform observable data.',
    options: ['Transform observable data', 'Transform static data', 'No data transformation', 'Random data transformation'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular47',
    text: 'What is map operator?',
    answer: 'Transform each value.',
    options: ['Transform each value', 'Transform all values', 'No value transformation', 'Random value transformation'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular48',
    text: 'What is filter operator?',
    answer: 'Filter values.',
    options: ['Filter values', 'Create values', 'Delete values', 'Random values'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular49',
    text: 'What is tap operator?',
    answer: 'Side effects.',
    options: ['Side effects', 'No effects', 'Random effects', 'Delete effects'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },
  {
    id: 'angular50',
    text: 'Why Angular?',
    answer: 'Full-featured, TypeScript, enterprise-ready.',
    options: ['Full-featured, TypeScript, enterprise-ready', 'Basic, JavaScript, small-scale', 'No features, no TypeScript, not enterprise-ready', 'Random features'],
    role: 'Frontend Developer',
    skills: ['Angular']
  },

  // Python Questions
  {
    id: 'python1',
    text: 'What is Python?',
    answer: 'High-level programming language known for simplicity',
    options: ['High-level programming language known for simplicity', 'Low-level language', 'Database language', 'Markup language'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python2',
    text: 'What is Django?',
    answer: 'High-level Python web framework',
    options: ['High-level Python web framework', 'JavaScript framework', 'CSS framework', 'Database system'],
    role: 'Backend Developer',
    skills: ['Django', 'Python']
  },
  {
    id: 'python3',
    text: 'What is Flask?',
    answer: 'Lightweight Python web framework',
    options: ['Lightweight Python web framework', 'Heavy Python framework', 'Database system', 'Frontend framework'],
    role: 'Backend Developer',
    skills: ['Flask', 'Python']
  },
  {
    id: 'python4',
    text: 'What is list in Python?',
    answer: 'Ordered collection.',
    options: ['Ordered collection', 'Unordered collection', 'No collection', 'Random collection'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python5',
    text: 'What is tuple in Python?',
    answer: 'Immutable ordered collection.',
    options: ['Immutable ordered collection', 'Mutable ordered collection', 'Immutable unordered collection', 'Mutable unordered collection'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python6',
    text: 'What is dictionary in Python?',
    answer: 'Key-value pairs.',
    options: ['Key-value pairs', 'Value-key pairs', 'No pairs', 'Random pairs'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python7',
    text: 'What is set in Python?',
    answer: 'Unique elements.',
    options: ['Unique elements', 'Duplicate elements', 'No elements', 'Random elements'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python8',
    text: 'What is function in Python?',
    answer: 'Reusable code block.',
    options: ['Reusable code block', 'Single use code block', 'No code block', 'Random code block'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python9',
    text: 'What is class in Python?',
    answer: 'Blueprint for objects.',
    options: ['Blueprint for objects', 'Completed objects', 'No objects', 'Random objects'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python10',
    text: 'What is __init__ in Python?',
    answer: 'Constructor.',
    options: ['Constructor', 'Destructor', 'Regular method', 'Static method'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python11',
    text: 'What is self in Python?',
    answer: 'Instance reference.',
    options: ['Instance reference', 'Class reference', 'No reference', 'Random reference'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python12',
    text: 'What is inheritance in Python?',
    answer: 'Inherit from parent class.',
    options: ['Inherit from parent class', 'Inherit from child class', 'No inheritance', 'Random inheritance'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python13',
    text: 'What is polymorphism in Python?',
    answer: 'Different forms of same method.',
    options: ['Different forms of same method', 'Same form of different methods', 'No methods', 'Random methods'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python14',
    text: 'What is encapsulation in Python?',
    answer: 'Bundle data and methods.',
    options: ['Bundle data and methods', 'Separate data and methods', 'No bundling', 'Random bundling'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python15',
    text: 'What is module in Python?',
    answer: 'Python file with code.',
    options: ['Python file with code', 'Python class with code', 'Python function with code', 'No Python file'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python16',
    text: 'What is import in Python?',
    answer: 'Use module code.',
    options: ['Use module code', 'Create module code', 'Delete module code', 'Ignore module code'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python17',
    text: 'What is pip in Python?',
    answer: 'Package manager.',
    options: ['Package manager', 'Code manager', 'File manager', 'Database manager'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python18',
    text: 'What is virtual environment in Python?',
    answer: 'Isolated Python environment.',
    options: ['Isolated Python environment', 'Shared Python environment', 'No Python environment', 'Random Python environment'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python19',
    text: 'What is requirements.txt in Python?',
    answer: 'List of dependencies.',
    options: ['List of dependencies', 'List of code', 'List of files', 'List of databases'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python20',
    text: 'What is exception in Python?',
    answer: 'Error handling.',
    options: ['Error handling', 'Error creation', 'Error ignoring', 'Random error handling'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python21',
    text: 'What is try-except in Python?',
    answer: 'Handle exceptions.',
    options: ['Handle exceptions', 'Create exceptions', 'Ignore exceptions', 'Random exceptions'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python22',
    text: 'What is file handling in Python?',
    answer: 'Read/write files.',
    options: ['Read/write files', 'Only read files', 'Only write files', 'No file handling'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python23',
    text: 'What is open() in Python?',
    answer: 'Open file.',
    options: ['Open file', 'Close file', 'Create file', 'Delete file'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python24',
    text: 'What is with statement in Python?',
    answer: 'Auto close resources.',
    options: ['Auto close resources', 'Manual close resources', 'No resource closing', 'Random resource closing'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python25',
    text: 'What is list comprehension in Python?',
    answer: 'Create list from expression.',
    options: ['Create list from expression', 'Create list from loop', 'No list creation', 'Random list creation'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python26',
    text: 'What is lambda in Python?',
    answer: 'Anonymous function.',
    options: ['Anonymous function', 'Named function', 'No function', 'Random function'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python27',
    text: 'What is decorator in Python?',
    answer: 'Modify function behavior.',
    options: ['Modify function behavior', 'Modify class behavior', 'No modification', 'Random modification'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python28',
    text: 'What is generator in Python?',
    answer: 'Yield values.',
    options: ['Yield values', 'Return values', 'No values', 'Random values'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python29',
    text: 'What is yield in Python?',
    answer: 'Return from generator.',
    options: ['Return from generator', 'Return from function', 'No return', 'Random return'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python30',
    text: 'What is __name__ in Python?',
    answer: 'Module name.',
    options: ['Module name', 'Class name', 'Function name', 'Variable name'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python31',
    text: 'What is __main__ in Python?',
    answer: 'Entry point.',
    options: ['Entry point', 'Exit point', 'No point', 'Random point'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python32',
    text: 'What is JSON in Python?',
    answer: 'Data exchange format.',
    options: ['Data exchange format', 'Database format', 'File format only', 'Image format'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python33',
    text: 'What is json module in Python?',
    answer: 'Handle JSON data.',
    options: ['Handle JSON data', 'Handle XML data', 'Handle CSV data', 'Handle SQL data'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python34',
    text: 'What is os module in Python?',
    answer: 'Interact with OS.',
    options: ['Interact with OS', 'Interact with database', 'Interact with network', 'No interaction'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python35',
    text: 'What is sys module in Python?',
    answer: 'System-specific parameters.',
    options: ['System-specific parameters', 'Database-specific parameters', 'Network-specific parameters', 'No parameters'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python36',
    text: 'What is datetime module in Python?',
    answer: 'Handle dates and times.',
    options: ['Handle dates and times', 'Handle only dates', 'Handle only times', 'No date/time handling'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python37',
    text: 'What is re module in Python?',
    answer: 'Regular expressions.',
    options: ['Regular expressions', 'Random expressions', 'No expressions', 'Pattern matching'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python38',
    text: 'What is threading in Python?',
    answer: 'Run multiple threads.',
    options: ['Run multiple threads', 'Run single thread', 'No threads', 'Random threads'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python39',
    text: 'What is multiprocessing in Python?',
    answer: 'Run multiple processes.',
    options: ['Run multiple processes', 'Run single process', 'No processes', 'Random processes'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python40',
    text: 'What is GIL in Python?',
    answer: 'Global Interpreter Lock.',
    options: ['Global Interpreter Lock', 'Local Interpreter Lock', 'No lock', 'Random lock'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python41',
    text: 'What is asyncio in Python?',
    answer: 'Async programming.',
    options: ['Async programming', 'Sync programming', 'No programming', 'Random programming'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python42',
    text: 'What is async/await in Python?',
    answer: 'Write async code.',
    options: ['Write async code', 'Write sync code', 'No code writing', 'Random code writing'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python43',
    text: 'What is logging in Python?',
    answer: 'Record events.',
    options: ['Record events', 'Ignore events', 'Create events', 'Delete events'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python44',
    text: 'What is unittest in Python?',
    answer: 'Testing framework.',
    options: ['Testing framework', 'Development framework', 'Debugging framework', 'No framework'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python45',
    text: 'What is pytest in Python?',
    answer: 'Testing library.',
    options: ['Testing library', 'Development library', 'Debugging library', 'No library'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python46',
    text: 'What is docstring in Python?',
    answer: 'Documentation string.',
    options: ['Documentation string', 'Comment string', 'Code string', 'Random string'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python47',
    text: 'What is type hinting in Python?',
    answer: 'Specify variable types.',
    options: ['Specify variable types', 'Ignore variable types', 'Create variable types', 'Delete variable types'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python48',
    text: 'What is dataclass in Python?',
    answer: 'Class with data.',
    options: ['Class with data', 'Class without data', 'No class', 'Random class'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python49',
    text: 'What is enum in Python?',
    answer: 'Named constants.',
    options: ['Named constants', 'Random constants', 'No constants', 'Delete constants'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'python50',
    text: 'Why Python?',
    answer: 'Simple, readable, large ecosystem.',
    options: ['Simple, readable, large ecosystem', 'Complex, unreadable, small ecosystem', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['Python']
  },

  // Django Questions
  {
    id: 'django1',
    text: 'What is Django?',
    answer: 'Django is a high-level Python web framework.',
    options: ['A high-level Python web framework', 'A JavaScript framework', 'A CSS framework', 'A database system'],
    role: 'Backend Developer',
    skills: ['Django', 'Python']
  },
  {
    id: 'django2',
    text: 'What is MVT in Django?',
    answer: 'Model, View, Template architecture.',
    options: ['Model, View, Template architecture', 'Module, View, Template architecture', 'Model, View, Component architecture', 'Module, View, Component architecture'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django3',
    text: 'What is Django ORM?',
    answer: 'Object Relational Mapping.',
    options: ['Object Relational Mapping', 'Object Relational Model', 'Object Relational Manager', 'Object Relational Method'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django4',
    text: 'What is model in Django?',
    answer: 'Database table.',
    options: ['Database table', 'Database view', 'No database', 'Random database'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django5',
    text: 'What is migration in Django?',
    answer: 'Database schema changes.',
    options: ['Database schema changes', 'Database data changes', 'No database changes', 'Random database changes'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django6',
    text: 'What is view in Django?',
    answer: 'Handle request/response.',
    options: ['Handle request/response', 'Handle only request', 'Handle only response', 'No handling'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django7',
    text: 'What is template in Django?',
    answer: 'HTML with Django tags.',
    options: ['HTML with Django tags', 'CSS with Django tags', 'JavaScript with Django tags', 'No Django tags'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django8',
    text: 'What is Django admin?',
    answer: 'Auto admin interface.',
    options: ['Auto admin interface', 'Manual admin interface', 'No admin interface', 'Random admin interface'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django9',
    text: 'What is URL routing in Django?',
    answer: 'Map URLs to views.',
    options: ['Map URLs to views', 'Map views to URLs', 'No mapping', 'Random mapping'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django10',
    text: 'What is Django forms?',
    answer: 'Handle form data.',
    options: ['Handle form data', 'Handle API data', 'Handle database data', 'No data handling'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django11',
    text: 'What is ModelForm in Django?',
    answer: 'Form from model.',
    options: ['Form from model', 'Form from view', 'Form from template', 'No form'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django12',
    text: 'What is Django settings?',
    answer: 'Configuration file.',
    options: ['Configuration file', 'Code file', 'Template file', 'Static file'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django13',
    text: 'What is Django middleware?',
    answer: 'Process request/response.',
    options: ['Process request/response', 'Process only request', 'Process only response', 'No processing'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django14',
    text: 'What is Django signals?',
    answer: 'Decoupled notifications.',
    options: ['Decoupled notifications', 'Coupled notifications', 'No notifications', 'Random notifications'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django15',
    text: 'What is Django context processors?',
    answer: 'Add variables to all templates.',
    options: ['Add variables to all templates', 'Add variables to single template', 'No variables', 'Random variables'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django16',
    text: 'What is Django static files?',
    answer: 'Serve CSS, JS, images.',
    options: ['Serve CSS, JS, images', 'Serve only CSS', 'Serve only JS', 'Serve only images'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django17',
    text: 'What is Django media files?',
    answer: 'Serve user uploads.',
    options: ['Serve user uploads', 'Serve system files', 'No file serving', 'Random file serving'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django18',
    text: 'What is Django test framework?',
    answer: 'Built-in testing.',
    options: ['Built-in testing', 'External testing', 'No testing', 'Random testing'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django19',
    text: 'What is Django REST framework?',
    answer: 'Build APIs.',
    options: ['Build APIs', 'Build websites', 'Build databases', 'Build templates'],
    role: 'Backend Developer',
    skills: ['Django', 'REST API']
  },
  {
    id: 'django20',
    text: 'What is Django shell?',
    answer: 'Interactive Django environment.',
    options: ['Interactive Django environment', 'Non-interactive Django environment', 'No Django environment', 'Random Django environment'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django21',
    text: 'What is Django manage.py?',
    answer: 'Command-line utility.',
    options: ['Command-line utility', 'GUI utility', 'Web utility', 'Mobile utility'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django22',
    text: 'What is Django fixtures?',
    answer: 'Test data.',
    options: ['Test data', 'Production data', 'No data', 'Random data'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django23',
    text: 'What is Django serializers?',
    answer: 'Convert data types.',
    options: ['Convert data types', 'Keep data types', 'No data conversion', 'Random data conversion'],
    role: 'Backend Developer',
    skills: ['Django', 'REST API']
  },
  {
    id: 'django24',
    text: 'What is Django permissions?',
    answer: 'Control user access.',
    options: ['Control user access', 'Ignore user access', 'Create user access', 'Delete user access'],
    role: 'Backend Developer',
    skills: ['Django', 'Security']
  },
  {
    id: 'django25',
    text: 'What is Django authentication?',
    answer: 'User login system.',
    options: ['User login system', 'User logout system', 'No user system', 'Random user system'],
    role: 'Backend Developer',
    skills: ['Django', 'Security']
  },
  {
    id: 'django26',
    text: 'What is Django sessions?',
    answer: 'Store user data.',
    options: ['Store user data', 'Delete user data', 'Create user data', 'Ignore user data'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django27',
    text: 'What is Django cache framework?',
    answer: 'Improve performance.',
    options: ['Improve performance', 'Decrease performance', 'No performance', 'Random performance'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django28',
    text: 'What is Django internationalization?',
    answer: 'Multiple languages.',
    options: ['Multiple languages', 'Single language', 'No language', 'Random language'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django29',
    text: 'What is Django templates inheritance?',
    answer: 'Reuse templates.',
    options: ['Reuse templates', 'Single use templates', 'No templates', 'Random templates'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django30',
    text: 'What is Django custom commands?',
    answer: 'Custom manage.py commands.',
    options: ['Custom manage.py commands', 'Built-in manage.py commands', 'No commands', 'Random commands'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django31',
    text: 'What is Django QuerySet?',
    answer: 'Database query results.',
    options: ['Database query results', 'Database query input', 'No database query', 'Random database query'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django32',
    text: 'What is Django aggregate?',
    answer: 'Calculate values from QuerySet.',
    options: ['Calculate values from QuerySet', 'Calculate values from model', 'No calculation', 'Random calculation'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django33',
    text: 'What is Django annotate?',
    answer: 'Add fields to QuerySet.',
    options: ['Add fields to QuerySet', 'Remove fields from QuerySet', 'No field modification', 'Random field modification'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django34',
    text: 'What is Django filter?',
    answer: 'Filter QuerySet.',
    options: ['Filter QuerySet', 'Sort QuerySet', 'No QuerySet modification', 'Random QuerySet modification'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django35',
    text: 'What is Django Q objects?',
    answer: 'Complex queries.',
    options: ['Complex queries', 'Simple queries', 'No queries', 'Random queries'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django36',
    text: 'What is Django F objects?',
    answer: 'Field queries.',
    options: ['Field queries', 'Model queries', 'No queries', 'Random queries'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django37',
    text: 'What is Django select_related?',
    answer: 'Optimize foreign key queries.',
    options: ['Optimize foreign key queries', 'Optimize primary key queries', 'No query optimization', 'Random query optimization'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django38',
    text: 'What is Django prefetch_related?',
    answer: 'Optimize reverse foreign key queries.',
    options: ['Optimize reverse foreign key queries', 'Optimize forward foreign key queries', 'No query optimization', 'Random query optimization'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django39',
    text: 'What is Django bulk operations?',
    answer: 'Efficient database operations.',
    options: ['Efficient database operations', 'Inefficient database operations', 'No database operations', 'Random database operations'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django40',
    text: 'What is Django transaction?',
    answer: 'Atomic database operations.',
    options: ['Atomic database operations', 'Non-atomic database operations', 'No database operations', 'Random database operations'],
    role: 'Backend Developer',
    skills: ['Django', 'SQL']
  },
  {
    id: 'django41',
    text: 'What is Django context?',
    answer: 'Template context.',
    options: ['Template context', 'View context', 'Model context', 'No context'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django42',
    text: 'What is Django template tags?',
    answer: 'Custom template logic.',
    options: ['Custom template logic', 'Built-in template logic', 'No template logic', 'Random template logic'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django43',
    text: 'What is Django template filters?',
    answer: 'Modify template variables.',
    options: ['Modify template variables', 'Create template variables', 'Delete template variables', 'Ignore template variables'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django44',
    text: 'What is Django CSRF protection?',
    answer: 'Prevent cross-site attacks.',
    options: ['Prevent cross-site attacks', 'Enable cross-site attacks', 'No protection', 'Random protection'],
    role: 'Backend Developer',
    skills: ['Django', 'Security']
  },
  {
    id: 'django45',
    text: 'What is Django security?',
    answer: 'Protection against common attacks.',
    options: ['Protection against common attacks', 'Vulnerability to attacks', 'No protection', 'Random protection'],
    role: 'Backend Developer',
    skills: ['Django', 'Security']
  },
  {
    id: 'django46',
    text: 'What is Django deployment?',
    answer: 'Production setup.',
    options: ['Production setup', 'Development setup', 'No setup', 'Random setup'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django47',
    text: 'What is Django WSGI?',
    answer: 'Web server interface.',
    options: ['Web server interface', 'Database interface', 'Template interface', 'No interface'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django48',
    text: 'What is Django ASGI?',
    answer: 'Async web server interface.',
    options: ['Async web server interface', 'Sync web server interface', 'No interface', 'Random interface'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django49',
    text: 'What is Django channels?',
    answer: 'WebSockets support.',
    options: ['WebSockets support', 'HTTP support', 'No protocol support', 'Random protocol support'],
    role: 'Backend Developer',
    skills: ['Django']
  },
  {
    id: 'django50',
    text: 'Why Django?',
    answer: 'Batteries included, secure, scalable.',
    options: ['Batteries included, secure, scalable', 'Batteries excluded, insecure, not scalable', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['Django']
  },

  // Flask Questions
  {
    id: 'flask1',
    text: 'What is Flask?',
    answer: 'Flask is a lightweight Python web framework used to build web apps and APIs.',
    options: ['A lightweight Python web framework', 'A heavy Python framework', 'A JavaScript framework', 'A database system'],
    role: 'Backend Developer',
    skills: ['Flask', 'Python']
  },
  {
    id: 'flask2',
    text: 'Why use Flask?',
    answer: 'Simple, flexible, minimal configuration.',
    options: ['Simple, flexible, minimal configuration', 'Complex, rigid, heavy configuration', 'Only for large apps', 'Only for frontend'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask3',
    text: 'What is Flask route?',
    answer: 'Defines URL endpoint.',
    options: ['Defines URL endpoint', 'Defines database endpoint', 'Defines API endpoint', 'Defines client endpoint'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask4',
    text: 'What is Flask template?',
    answer: 'Jinja2 template.',
    options: ['Jinja2 template', 'Django template', 'Mako template', 'No template'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask5',
    text: 'What is Flask request object?',
    answer: 'Handle incoming request.',
    options: ['Handle incoming request', 'Handle outgoing response', 'No request handling', 'Random request handling'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask6',
    text: 'What is Flask response object?',
    answer: 'Create outgoing response.',
    options: ['Create outgoing response', 'Create incoming request', 'No response creation', 'Random response creation'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask7',
    text: 'What is Flask context?',
    answer: 'Request-bound objects.',
    options: ['Request-bound objects', 'Response-bound objects', 'No bound objects', 'Random bound objects'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask8',
    text: 'What is Flask Blueprint?',
    answer: 'Organize routes.',
    options: ['Organize routes', 'Organize templates', 'Organize models', 'No organization'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask9',
    text: 'What is Flask config?',
    answer: 'Application configuration.',
    options: ['Application configuration', 'Database configuration', 'Server configuration', 'No configuration'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask10',
    text: 'What is Flask extensions?',
    answer: 'Add functionality.',
    options: ['Add functionality', 'Remove functionality', 'No functionality', 'Random functionality'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask11',
    text: 'What is Flask-SQLAlchemy?',
    answer: 'Database ORM.',
    options: ['Database ORM', 'Database API', 'No database', 'Random database'],
    role: 'Backend Developer',
    skills: ['Flask', 'SQL']
  },
  {
    id: 'flask12',
    text: 'What is Flask-Migrate?',
    answer: 'Database migrations.',
    options: ['Database migrations', 'Database backups', 'No database operations', 'Random database operations'],
    role: 'Backend Developer',
    skills: ['Flask', 'SQL']
  },
  {
    id: 'flask13',
    text: 'What is Flask-Login?',
    answer: 'User authentication.',
    options: ['User authentication', 'User authorization', 'No user management', 'Random user management'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask14',
    text: 'What is Flask-WTF?',
    answer: 'Form handling.',
    options: ['Form handling', 'File handling', 'API handling', 'No handling'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask15',
    text: 'What is Flask-RESTful?',
    answer: 'REST API extension.',
    options: ['REST API extension', 'GraphQL API extension', 'No API extension', 'Random API extension'],
    role: 'Backend Developer',
    skills: ['Flask', 'REST API']
  },
  {
    id: 'flask16',
    text: 'What is Flask-CORS?',
    answer: 'Handle cross-origin requests.',
    options: ['Handle cross-origin requests', 'Handle same-origin requests', 'No request handling', 'Random request handling'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask17',
    text: 'What is Flask-Mail?',
    answer: 'Send emails.',
    options: ['Send emails', 'Receive emails', 'No email handling', 'Random email handling'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask18',
    text: 'What is Flask-Caching?',
    answer: 'Improve performance.',
    options: ['Improve performance', 'Decrease performance', 'No performance', 'Random performance'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask19',
    text: 'What is Flask-Testing?',
    answer: 'Test Flask apps.',
    options: ['Test Flask apps', 'Develop Flask apps', 'No Flask apps', 'Random Flask apps'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask20',
    text: 'What is Flask-Debug?',
    answer: 'Debug toolbar.',
    options: ['Debug toolbar', 'Production toolbar', 'No toolbar', 'Random toolbar'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask21',
    text: 'What is Flask-Assets?',
    answer: 'Manage static files.',
    options: ['Manage static files', 'Manage dynamic files', 'No file management', 'Random file management'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask22',
    text: 'What is Flask-Babel?',
    answer: 'Internationalization.',
    options: ['Internationalization', 'Localization', 'No language support', 'Random language support'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask23',
    text: 'What is Flask-Session?',
    answer: 'User session management.',
    options: ['User session management', 'User cache management', 'No user management', 'Random user management'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask24',
    text: 'What is Flask-JWT?',
    answer: 'JWT authentication.',
    options: ['JWT authentication', 'Basic authentication', 'No authentication', 'Random authentication'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask25',
    text: 'What is Flask-OAuthlib?',
    answer: 'OAuth authentication.',
    options: ['OAuth authentication', 'Basic authentication', 'No authentication', 'Random authentication'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask26',
    text: 'What is Flask-RESTX?',
    answer: 'Build REST APIs.',
    options: ['Build REST APIs', 'Build GraphQL APIs', 'No API building', 'Random API building'],
    role: 'Backend Developer',
    skills: ['Flask', 'REST API']
  },
  {
    id: 'flask27',
    text: 'What is Flask-Marshmallow?',
    answer: 'Data serialization.',
    options: ['Data serialization', 'Data deserialization', 'No data handling', 'Random data handling'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask28',
    text: 'What is Flask-HTTPAuth?',
    answer: 'HTTP authentication.',
    options: ['HTTP authentication', 'HTTPS authentication', 'No authentication', 'Random authentication'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask29',
    text: 'What is Flask-Limiter?',
    answer: 'Rate limiting.',
    options: ['Rate limiting', 'Rate increasing', 'No rate control', 'Random rate control'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask30',
    text: 'What is Flask-Talisman?',
    answer: 'API documentation.',
    options: ['API documentation', 'Code documentation', 'No documentation', 'Random documentation'],
    role: 'Backend Developer',
    skills: ['Flask', 'REST API']
  },
  {
    id: 'flask31',
    text: 'What is Flask-Admin?',
    answer: 'Admin interface.',
    options: ['Admin interface', 'User interface', 'No interface', 'Random interface'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask32',
    text: 'What is Flask-User?',
    answer: 'User management.',
    options: ['User management', 'Admin management', 'No management', 'Random management'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask33',
    text: 'What is Flask-Principal?',
    answer: 'Identity management.',
    options: ['Identity management', 'User management', 'No management', 'Random management'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask34',
    text: 'What is Flask-SocketIO?',
    answer: 'Real-time communication.',
    options: ['Real-time communication', 'Delayed communication', 'No communication', 'Random communication'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask35',
    text: 'What is Flask-Celery?',
    answer: 'Background tasks.',
    options: ['Background tasks', 'Foreground tasks', 'No tasks', 'Random tasks'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask36',
    text: 'What is Flask-Redis?',
    answer: 'Redis caching.',
    options: ['Redis caching', 'Database caching', 'No caching', 'Random caching'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask37',
    text: 'What is Flask-MongoEngine?',
    answer: 'MongoDB integration.',
    options: ['MongoDB integration', 'SQL integration', 'No database integration', 'Random database integration'],
    role: 'Backend Developer',
    skills: ['Flask', 'MongoDB']
  },
  {
    id: 'flask38',
    text: 'What is Flask-Elasticsearch?',
    answer: 'Search integration.',
    options: ['Search integration', 'Database integration', 'No integration', 'Random integration'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask39',
    text: 'What is Flask-Dance?',
    answer: 'OAuth consumer.',
    options: ['OAuth consumer', 'OAuth provider', 'No OAuth', 'Random OAuth'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask40',
    text: 'What is Flask-RESTPlus?',
    answer: 'API documentation and validation.',
    options: ['API documentation and validation', 'API documentation only', 'API validation only', 'No API features'],
    role: 'Backend Developer',
    skills: ['Flask', 'REST API']
  },
  {
    id: 'flask41',
    text: 'What is Flask-AppBuilder?',
    answer: 'Application factory pattern.',
    options: ['Application factory pattern', 'Singleton pattern', 'No pattern', 'Random pattern'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask42',
    text: 'What is Flask-Testing?',
    answer: 'Test client.',
    options: ['Test client', 'Production client', 'No client', 'Random client'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask43',
    text: 'What is Flask-JSONRPC?',
    answer: 'RPC support.',
    options: ['RPC support', 'REST support', 'No protocol support', 'Random protocol support'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask44',
    text: 'What is Flask-GraphQL?',
    answer: 'GraphQL integration.',
    options: ['GraphQL integration', 'REST integration', 'No API integration', 'Random API integration'],
    role: 'Backend Developer',
    skills: ['Flask', 'GraphQL']
  },
  {
    id: 'flask45',
    text: 'What is Flask-HTTPAuth2?',
    answer: 'Advanced HTTP authentication.',
    options: ['Advanced HTTP authentication', 'Basic HTTP authentication', 'No authentication', 'Random authentication'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask46',
    text: 'What is Flask-Security?',
    answer: 'Security headers.',
    options: ['Security headers', 'Insecure headers', 'No headers', 'Random headers'],
    role: 'Backend Developer',
    skills: ['Flask', 'Security']
  },
  {
    id: 'flask47',
    text: 'What is Flask-Compress?',
    answer: 'Response compression.',
    options: ['Response compression', 'Response decompression', 'No compression', 'Random compression'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask48',
    text: 'What is Flask-Talisman?',
    answer: 'OpenAPI documentation.',
    options: ['OpenAPI documentation', 'Swagger documentation', 'No documentation', 'Random documentation'],
    role: 'Backend Developer',
    skills: ['Flask', 'REST API']
  },
  {
    id: 'flask49',
    text: 'What is Flask-Injector?',
    answer: 'Dependency injection.',
    options: ['Dependency injection', 'Dependency creation', 'No dependency management', 'Random dependency management'],
    role: 'Backend Developer',
    skills: ['Flask']
  },
  {
    id: 'flask50',
    text: 'Why Flask?',
    answer: 'Lightweight, flexible, large ecosystem.',
    options: ['Lightweight, flexible, large ecosystem', 'Heavy, rigid, small ecosystem', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['Flask']
  },

  // SQL Questions
  {
    id: 'sql1',
    text: 'What is SQL?',
    answer: 'SQL is used to interact with relational databases.',
    options: ['Used to interact with relational databases', 'Used for frontend development', 'Used for styling', 'Used for file management'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql2',
    text: 'What is primary key?',
    answer: 'Unique identifier for each row.',
    options: ['Unique identifier for each row', 'Duplicate identifier', 'Optional identifier', 'Random identifier'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql3',
    text: 'What is foreign key?',
    answer: 'Reference to another table.',
    options: ['Reference to another table', 'Reference to same table', 'Primary reference', 'Unique reference'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql4',
    text: 'What is JOIN?',
    answer: 'Combine rows from multiple tables.',
    options: ['Combine rows from multiple tables', 'Delete rows from multiple tables', 'Create rows from multiple tables', 'Ignore multiple tables'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql5',
    text: 'What is INNER JOIN?',
    answer: 'Return matching rows.',
    options: ['Return matching rows', 'Return all rows', 'Return non-matching rows', 'Return random rows'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql6',
    text: 'What is LEFT JOIN?',
    answer: 'Return all left table rows.',
    options: ['Return all left table rows', 'Return all right table rows', 'Return matching rows only', 'Return no rows'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql7',
    text: 'What is RIGHT JOIN?',
    answer: 'Return all right table rows.',
    options: ['Return all right table rows', 'Return all left table rows', 'Return matching rows only', 'Return no rows'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql8',
    text: 'What is FULL OUTER JOIN?',
    answer: 'Return all rows from both tables.',
    options: ['Return all rows from both tables', 'Return matching rows only', 'Return left table rows only', 'Return right table rows only'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql9',
    text: 'What is GROUP BY?',
    answer: 'Group rows with same values.',
    options: ['Group rows with same values', 'Sort rows with same values', 'Filter rows with same values', 'Delete rows with same values'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql10',
    text: 'What is HAVING?',
    answer: 'Filter groups.',
    options: ['Filter groups', 'Filter rows', 'Filter columns', 'Filter tables'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql11',
    text: 'What is aggregate function?',
    answer: 'Calculate on multiple rows.',
    options: ['Calculate on multiple rows', 'Calculate on single row', 'No calculation', 'Random calculation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql12',
    text: 'What is COUNT()?',
    answer: 'Count rows.',
    options: ['Count rows', 'Count columns', 'Count tables', 'No counting'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql13',
    text: 'What is SUM()?',
    answer: 'Sum values.',
    options: ['Sum values', 'Average values', 'Count values', 'No calculation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql14',
    text: 'What is AVG()?',
    answer: 'Average values.',
    options: ['Average values', 'Sum values', 'Count values', 'No calculation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql15',
    text: 'What is MIN()?',
    answer: 'Minimum value.',
    options: ['Minimum value', 'Maximum value', 'Average value', 'No value'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql16',
    text: 'What is MAX()?',
    answer: 'Maximum value.',
    options: ['Maximum value', 'Minimum value', 'Average value', 'No value'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql17',
    text: 'What is subquery?',
    answer: 'Query within query.',
    options: ['Query within query', 'Query within table', 'Query within database', 'No query'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql18',
    text: 'What is EXISTS?',
    answer: 'Check subquery returns rows.',
    options: ['Check subquery returns rows', 'Check subquery returns no rows', 'No subquery check', 'Random subquery check'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql19',
    text: 'What is UNION?',
    answer: 'Combine result sets.',
    options: ['Combine result sets', 'Combine tables', 'Combine databases', 'No combination'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql20',
    text: 'What is transaction?',
    answer: 'Atomic operations.',
    options: ['Atomic operations', 'Non-atomic operations', 'No operations', 'Random operations'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql21',
    text: 'What is COMMIT?',
    answer: 'Save transaction.',
    options: ['Save transaction', 'Undo transaction', 'No transaction', 'Random transaction'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql22',
    text: 'What is ROLLBACK?',
    answer: 'Undo transaction.',
    options: ['Undo transaction', 'Redo transaction', 'No transaction', 'Random transaction'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql23',
    text: 'What is index?',
    answer: 'Improve query performance.',
    options: ['Improve query performance', 'Decrease query performance', 'No performance effect', 'Random performance'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql24',
    text: 'What is view?',
    answer: 'Virtual table.',
    options: ['Virtual table', 'Physical table', 'No table', 'Random table'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql25',
    text: 'What is stored procedure?',
    answer: 'Reusable SQL code.',
    options: ['Reusable SQL code', 'Single use SQL code', 'No SQL code', 'Random SQL code'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql26',
    text: 'What is trigger?',
    answer: 'Automatic SQL execution.',
    options: ['Automatic SQL execution', 'Manual SQL execution', 'No SQL execution', 'Random SQL execution'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql27',
    text: 'What is constraint?',
    answer: 'Data validation rules.',
    options: ['Data validation rules', 'Data ignoring rules', 'No data rules', 'Random data rules'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql28',
    text: 'What is NOT NULL?',
    answer: 'Require value.',
    options: ['Require value', 'Allow null value', 'Ignore value', 'Random value'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql29',
    text: 'What is UNIQUE constraint?',
    answer: 'Unique values only.',
    options: ['Unique values only', 'Duplicate values allowed', 'No constraint', 'Random constraint'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql30',
    text: 'What is CHECK constraint?',
    answer: 'Validate data condition.',
    options: ['Validate data condition', 'Ignore data condition', 'No data validation', 'Random data validation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql31',
    text: 'What is FOREIGN KEY constraint?',
    answer: 'Referential integrity.',
    options: ['Referential integrity', 'No integrity', 'Random integrity', 'Delete integrity'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql32',
    text: 'What is normalization?',
    answer: 'Organize data efficiently.',
    options: ['Organize data efficiently', 'Organize data inefficiently', 'No data organization', 'Random data organization'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql33',
    text: 'What is first normal form (1NF)?',
    answer: 'Atomic values.',
    options: ['Atomic values', 'Non-atomic values', 'No values', 'Random values'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql34',
    text: 'What is second normal form (2NF)?',
    answer: 'No partial dependencies.',
    options: ['No partial dependencies', 'Partial dependencies allowed', 'No dependencies', 'Random dependencies'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql35',
    text: 'What is third normal form (3NF)?',
    answer: 'No transitive dependencies.',
    options: ['No transitive dependencies', 'Transitive dependencies allowed', 'No dependencies', 'Random dependencies'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql36',
    text: 'What is denormalization?',
    answer: 'Optimize for read performance.',
    options: ['Optimize for read performance', 'Optimize for write performance', 'No optimization', 'Random optimization'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql37',
    text: 'What is cursor?',
    answer: 'Iterate over query results.',
    options: ['Iterate over query results', 'Modify query results', 'Create query results', 'Delete query results'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql38',
    text: 'What is LIKE operator?',
    answer: 'Pattern matching.',
    options: ['Pattern matching', 'Exact matching', 'No matching', 'Random matching'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql39',
    text: 'What is IN operator?',
    answer: 'Match any value in list.',
    options: ['Match any value in list', 'Match all values in list', 'No matching', 'Random matching'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql40',
    text: 'What is BETWEEN operator?',
    answer: 'Range selection.',
    options: ['Range selection', 'Single value selection', 'No selection', 'Random selection'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql41',
    text: 'What is CASE statement?',
    answer: 'Conditional logic.',
    options: ['Conditional logic', 'Unconditional logic', 'No logic', 'Random logic'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql42',
    text: 'What is COALESCE?',
    answer: 'Return first non-null value.',
    options: ['Return first non-null value', 'Return first null value', 'Return last non-null value', 'Return random value'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql43',
    text: 'What is window function?',
    answer: 'Calculate over set of rows.',
    options: ['Calculate over set of rows', 'Calculate over single row', 'No calculation', 'Random calculation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql44',
    text: 'What is ROW_NUMBER()?',
    answer: 'Number rows in result set.',
    options: ['Number rows in result set', 'Number rows in table', 'No numbering', 'Random numbering'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql45',
    text: 'What is RANK()?',
    answer: 'Rank rows with gaps.',
    options: ['Rank rows with gaps', 'Rank rows without gaps', 'No ranking', 'Random ranking'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql46',
    text: 'What is DENSE_RANK()?',
    answer: 'Rank rows without gaps.',
    options: ['Rank rows without gaps', 'Rank rows with gaps', 'No ranking', 'Random ranking'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql47',
    text: 'What is partition by?',
    answer: 'Group for window functions.',
    options: ['Group for window functions', 'Group for aggregate functions', 'No grouping', 'Random grouping'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql48',
    text: 'What is CTE?',
    answer: 'Common Table Expression.',
    options: ['Common Table Expression', 'Common Table Procedure', 'Common Table Function', 'No common table'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql49',
    text: 'What is pivot table?',
    answer: 'Rotate rows to columns.',
    options: ['Rotate rows to columns', 'Rotate columns to rows', 'No rotation', 'Random rotation'],
    role: 'Backend Developer',
    skills: ['SQL']
  },
  {
    id: 'sql50',
    text: 'Why SQL?',
    answer: 'Standardized, powerful, declarative.',
    options: ['Standardized, powerful, declarative', 'Non-standard, weak, imperative', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['SQL']
  },

  // PostgreSQL Questions
  {
    id: 'postgres1',
    text: 'What is PostgreSQL?',
    answer: 'Advanced open-source relational database.',
    options: ['Advanced open-source relational database', 'NoSQL database', 'File system', 'Cache system'],
    role: 'Backend Developer',
    skills: ['PostgreSQL', 'SQL']
  },
  {
    id: 'postgres2',
    text: 'What is JSONB in PostgreSQL?',
    answer: 'Binary JSON (faster).',
    options: ['Binary JSON (faster)', 'Text JSON (slower)', 'XML data', 'Binary data'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres3',
    text: 'What is indexing in PostgreSQL?',
    answer: 'Improve performance.',
    options: ['Improve performance', 'Decrease performance', 'No performance effect', 'Random performance'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres4',
    text: 'What is B-tree index?',
    answer: 'Default index type.',
    options: ['Default index type', 'Special index type', 'No index type', 'Random index type'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres5',
    text: 'What is GiST index?',
    answer: 'Generalized Search Tree.',
    options: ['Generalized Search Tree', 'Binary Tree', 'Hash Tree', 'No Tree'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres6',
    text: 'What is GIN index?',
    answer: 'Generalized Inverted Index.',
    options: ['Generalized Inverted Index', 'Generalized Search Tree', 'Binary Tree', 'No Index'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres7',
    text: 'What is partial index?',
    answer: 'Index on subset of columns.',
    options: ['Index on subset of columns', 'Index on all columns', 'No index', 'Random index'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres8',
    text: 'What is expression index?',
    answer: 'Index on function result.',
    options: ['Index on function result', 'Index on column value', 'No index', 'Random index'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres9',
    text: 'What is concurrent index?',
    answer: 'Handle concurrent writes.',
    options: ['Handle concurrent writes', 'Handle concurrent reads', 'No concurrency', 'Random concurrency'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres10',
    text: 'What is VACUUM?',
    answer: 'Reclaim storage.',
    options: ['Reclaim storage', 'Allocate storage', 'No storage operation', 'Random storage operation'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres11',
    text: 'What is autovacuum?',
    answer: 'Automatic VACUUM.',
    options: ['Automatic VACUUM', 'Manual VACUUM', 'No VACUUM', 'Random VACUUM'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres12',
    text: 'What is WAL?',
    answer: 'Write-Ahead Logging.',
    options: ['Write-Ahead Logging', 'Read-Ahead Logging', 'No logging', 'Random logging'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres13',
    text: 'What is checkpoint?',
    answer: 'Sync WAL to data files.',
    options: ['Sync WAL to data files', 'Sync data files to WAL', 'No sync', 'Random sync'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres14',
    text: 'What is replication?',
    answer: 'Copy data to another server.',
    options: ['Copy data to another server', 'Move data to another server', 'No data copying', 'Random data operation'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres15',
    text: 'What is streaming replication?',
    answer: 'Continuous replication.',
    options: ['Continuous replication', 'Batch replication', 'No replication', 'Random replication'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres16',
    text: 'What is logical replication?',
    answer: 'Replicate SQL commands.',
    options: ['Replicate SQL commands', 'Replicate data changes', 'No replication', 'Random replication'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres17',
    text: 'What is physical replication?',
    answer: 'Replicate data files.',
    options: ['Replicate data files', 'Replicate SQL commands', 'No replication', 'Random replication'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres18',
    text: 'What is partitioning?',
    answer: 'Divide large tables.',
    options: ['Divide large tables', 'Combine small tables', 'No table operation', 'Random table operation'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres19',
    text: 'What is table inheritance?',
    answer: 'Share columns between tables.',
    options: ['Share columns between tables', 'Share rows between tables', 'No sharing', 'Random sharing'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres20',
    text: 'What is rule?',
    answer: 'Advanced query rewrite.',
    options: ['Advanced query rewrite', 'Basic query rewrite', 'No query rewrite', 'Random query rewrite'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres21',
    text: 'What is foreign data wrapper?',
    answer: 'Access external data.',
    options: ['Access external data', 'Access internal data only', 'No external access', 'Random access'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres22',
    text: 'What is dblink?',
    answer: 'Connect to other databases.',
    options: ['Connect to other databases', 'Connect to same database', 'No database connection', 'Random database connection'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres23',
    text: 'What is array type?',
    answer: 'Store multiple values.',
    options: ['Store multiple values', 'Store single value', 'No values', 'Random values'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres24',
    text: 'What is hstore?',
    answer: 'Key-value store.',
    options: ['Key-value store', 'Value-key store', 'No store', 'Random store'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres25',
    text: 'What is range type?',
    answer: 'Range of values.',
    options: ['Range of values', 'Single value', 'No values', 'Random values'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres26',
    text: 'What is tsquery?',
    answer: 'Search text documents.',
    options: ['Search text documents', 'Search numeric documents', 'No searching', 'Random searching'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres27',
    text: 'What is pg_trgm?',
    answer: 'Trigram matching.',
    options: ['Trigram matching', 'Exact matching', 'No matching', 'Random matching'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres28',
    text: 'What is pg_full_text?',
    answer: 'Full text search.',
    options: ['Full text search', 'Partial text search', 'No text search', 'Random text search'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres29',
    text: 'What is extension?',
    answer: 'Add functionality.',
    options: ['Add functionality', 'Remove functionality', 'No functionality', 'Random functionality'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres30',
    text: 'What is contrib?',
    answer: 'Additional extensions.',
    options: ['Additional extensions', 'Core extensions', 'No extensions', 'Random extensions'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres31',
    text: 'What is pg_stat_statements?',
    answer: 'Track query statistics.',
    options: ['Track query statistics', 'Track table statistics', 'No statistics', 'Random statistics'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres32',
    text: 'What is pg_stat_activity?',
    answer: 'Monitor server activity.',
    options: ['Monitor server activity', 'Monitor client activity', 'No monitoring', 'Random monitoring'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres33',
    text: 'What is connection pooling?',
    answer: 'Reuse database connections.',
    options: ['Reuse database connections', 'Create new connections', 'No connection management', 'Random connection management'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres34',
    text: 'What is pgbouncer?',
    answer: 'Connection pooler.',
    options: ['Connection pooler', 'Connection creator', 'Connection destroyer', 'No connection tool'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres35',
    text: 'What is pgAdmin?',
    answer: 'Web administration tool.',
    options: ['Web administration tool', 'Command line tool', 'No administration tool', 'Random tool'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres36',
    text: 'What is pg_dump?',
    answer: 'Backup database.',
    options: ['Backup database', 'Restore database', 'Delete database', 'Create database'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres37',
    text: 'What is pg_restore?',
    answer: 'Restore database.',
    options: ['Restore database', 'Backup database', 'Delete database', 'Create database'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres38',
    text: 'What is point-in-time recovery (PITR)?',
    answer: 'Restore to specific time.',
    options: ['Restore to specific time', 'Restore to current time', 'No time-based restore', 'Random restore'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres39',
    text: 'What is role?',
    answer: 'Database user permissions.',
    options: ['Database user permissions', 'Database user restrictions', 'No permissions', 'Random permissions'],
    role: 'Backend Developer',
    skills: ['PostgreSQL', 'Security']
  },
  {
    id: 'postgres40',
    text: 'What is schema?',
    answer: 'Namespace for database objects.',
    options: ['Namespace for database objects', 'Container for database objects', 'No namespace', 'Random namespace'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres41',
    text: 'What is tablespace?',
    answer: 'Storage location.',
    options: ['Storage location', 'Memory location', 'No location', 'Random location'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres42',
    text: 'What is temporary table?',
    answer: 'Session-specific table.',
    options: ['Session-specific table', 'Permanent table', 'No table', 'Random table'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres43',
    text: 'What is unlogged table?',
    answer: 'Faster inserts, no WAL.',
    options: ['Faster inserts, no WAL', 'Slower inserts, with WAL', 'No WAL effect', 'Random WAL effect'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres44',
    text: 'What is WITH query?',
    answer: 'Recursive query.',
    options: ['Recursive query', 'Iterative query', 'No query recursion', 'Random query'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres45',
    text: 'What is materialized view?',
    answer: 'Cached view result.',
    options: ['Cached view result', 'Live view result', 'No view caching', 'Random view caching'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres46',
    text: 'What is NOTIFY/LISTEN?',
    answer: 'Inter-process communication.',
    options: ['Inter-process communication', 'Intra-process communication', 'No communication', 'Random communication'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres47',
    text: 'What is cursor stability?',
    answer: 'Keep cursor open across transactions.',
    options: ['Keep cursor open across transactions', 'Close cursor after each transaction', 'No cursor management', 'Random cursor management'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres48',
    text: 'What is parallel query?',
    answer: 'Execute query parts simultaneously.',
    options: ['Execute query parts simultaneously', 'Execute query parts sequentially', 'No parallel execution', 'Random execution'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres49',
    text: 'What is EXPLAIN?',
    answer: 'Query execution plan.',
    options: ['Query execution plan', 'Query result plan', 'No query plan', 'Random query plan'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },
  {
    id: 'postgres50',
    text: 'Why PostgreSQL?',
    answer: 'Extensible, reliable, feature-rich.',
    options: ['Extensible, reliable, feature-rich', 'Limited, unreliable, basic', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['PostgreSQL']
  },

  // NoSQL Questions
  {
    id: 'nosql1',
    text: 'What is NoSQL?',
    answer: 'Non-relational database.',
    options: ['Non-relational database', 'Relational database', 'SQL database', 'File system'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql2',
    text: 'Types of NoSQL?',
    answer: 'Document, Key-Value, Column, Graph.',
    options: ['Document, Key-Value, Column, Graph', 'Only Document', 'Only Key-Value', 'Only Column', 'Only Graph'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql3',
    text: 'What is horizontal scaling in NoSQL?',
    answer: 'Add more servers.',
    options: ['Add more servers', 'Increase server power', 'Reduce servers', 'Keep servers same'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql4',
    text: 'What is CAP theorem?',
    answer: 'Consistency, Availability, Partition tolerance.',
    options: ['Consistency, Availability, Partition tolerance', 'No CAP theorem', 'Random theorem'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql5',
    text: 'What is eventual consistency?',
    answer: 'Data converges over time.',
    options: ['Data converges over time', 'Data is always consistent', 'No consistency', 'Random consistency'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql6',
    text: 'What is strong consistency?',
    answer: 'Data is always consistent.',
    options: ['Data is always consistent', 'Data converges over time', 'No consistency', 'Random consistency'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql7',
    text: 'What is BASE principle?',
    answer: 'Basically Available, Soft state, Eventual consistency.',
    options: ['Basically Available, Soft state, Eventual consistency', 'Strong consistency, Always Available', 'No principles'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql8',
    text: 'What is sharding?',
    answer: 'Distribute data across servers.',
    options: ['Distribute data across servers', 'Keep data on single server', 'No data distribution', 'Random data distribution'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql9',
    text: 'What is replication?',
    answer: 'Copy data across servers.',
    options: ['Copy data across servers', 'Move data across servers', 'No data copying', 'Random data copying'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql10',
    text: 'What is master-slave replication?',
    answer: 'One master, multiple slaves.',
    options: ['One master, multiple slaves', 'Multiple masters, one slave', 'No replication', 'Random replication'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql11',
    text: 'What is master-master replication?',
    answer: 'Multiple masters.',
    options: ['Multiple masters', 'Single master', 'No replication', 'Random replication'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql12',
    text: 'What is eventual consistency model?',
    answer: 'Prioritize availability over consistency.',
    options: ['Prioritize availability over consistency', 'Prioritize consistency over availability', 'No prioritization', 'Random prioritization'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql13',
    text: 'What is strong consistency model?',
    answer: 'Prioritize consistency over availability.',
    options: ['Prioritize consistency over availability', 'Prioritize availability over consistency', 'No prioritization', 'Random prioritization'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql14',
    text: 'What is document database?',
    answer: 'Store JSON-like documents.',
    options: ['Store JSON-like documents', 'Store key-value pairs', 'Store tables', 'Store graphs'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql15',
    text: 'What is key-value database?',
    answer: 'Store simple key-value pairs.',
    options: ['Store simple key-value pairs', 'Store complex documents', 'Store tables', 'Store graphs'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql16',
    text: 'What is column-family database?',
    answer: 'Store data in columns.',
    options: ['Store data in columns', 'Store data in rows', 'Store data in documents', 'Store data in graphs'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql17',
    text: 'What is graph database?',
    answer: 'Store nodes and relationships.',
    options: ['Store nodes and relationships', 'Store documents only', 'Store key-values only', 'Store tables only'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },
  {
    id: 'nosql18',
    text: 'What is MongoDB?',
    answer: 'Document database.',
    options: ['Document database', 'Key-value database', 'Column database', 'Graph database'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql19',
    text: 'What is collection in MongoDB?',
    answer: 'Group of documents.',
    options: ['Group of documents', 'Group of tables', 'Group of key-values', 'Group of nodes'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql20',
    text: 'What is document in MongoDB?',
    answer: 'Record.',
    options: ['Record', 'Table', 'Key', 'Graph'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql21',
    text: 'What is BSON in MongoDB?',
    answer: 'Binary JSON.',
    options: ['Binary JSON', 'Text JSON', 'XML data', 'Binary data'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql22',
    text: 'What is _id in MongoDB?',
    answer: 'Default unique identifier.',
    options: ['Default unique identifier', 'Random identifier', 'No identifier', 'Duplicate identifier'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql23',
    text: 'What is embedded document?',
    answer: 'Nested document.',
    options: ['Nested document', 'Flat document', 'No document', 'Random document'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql24',
    text: 'What is referenced document?',
    answer: 'Link to another document.',
    options: ['Link to another document', 'Link to same document', 'No linking', 'Random linking'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql25',
    text: 'What is schema validation?',
    answer: 'Enforce document structure.',
    options: ['Enforce document structure', 'Ignore document structure', 'Create document structure', 'Random document structure'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql26',
    text: 'What is indexing in MongoDB?',
    answer: 'Improve query performance.',
    options: ['Improve query performance', 'Decrease query performance', 'No performance effect', 'Random performance'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql27',
    text: 'What is compound index?',
    answer: 'Index on multiple fields.',
    options: ['Index on multiple fields', 'Index on single field', 'No index', 'Random index'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql28',
    text: 'What is aggregation pipeline?',
    answer: 'Process data in stages.',
    options: ['Process data in stages', 'Process data all at once', 'No data processing', 'Random data processing'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql29',
    text: 'What is $match in MongoDB?',
    answer: 'Filter documents.',
    options: ['Filter documents', 'Sort documents', 'Create documents', 'Delete documents'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql30',
    text: 'What is $group in MongoDB?',
    answer: 'Group documents.',
    options: ['Group documents', 'Sort documents', 'Filter documents', 'Create documents'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql31',
    text: 'What is $sort in MongoDB?',
    answer: 'Sort documents.',
    options: ['Sort documents', 'Group documents', 'Filter documents', 'Create documents'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql32',
    text: 'What is $project in MongoDB?',
    answer: 'Select fields.',
    options: ['Select fields', 'Select documents', 'Create fields', 'Delete fields'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql33',
    text: 'What is $lookup in MongoDB?',
    answer: 'Join collections.',
    options: ['Join collections', 'Separate collections', 'No collection operation', 'Random collection operation'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql34',
    text: 'What is unwind in MongoDB?',
    answer: 'Deconstruct array field.',
    options: ['Deconstruct array field', 'Construct array field', 'No array operation', 'Random array operation'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql35',
    text: 'What is TTL in MongoDB?',
    answer: 'Time to live.',
    options: ['Time to live', 'Time to die', 'No time limit', 'Random time limit'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql36',
    text: 'What is capped collection?',
    answer: 'Fixed size collection.',
    options: ['Fixed size collection', 'Variable size collection', 'No size limit', 'Random size limit'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql37',
    text: 'What is gridFS in MongoDB?',
    answer: 'Store large files.',
    options: ['Store large files', 'Store small files', 'No file storage', 'Random file storage'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql38',
    text: 'What is change streams?',
    answer: 'Track data changes.',
    options: ['Track data changes', 'Ignore data changes', 'Create data changes', 'Delete data changes'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql39',
    text: 'What is replica set?',
    answer: 'Data redundancy.',
    options: ['Data redundancy', 'No redundancy', 'Single data copy', 'Random data copying'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql40',
    text: 'What is primary in replica set?',
    answer: 'Accept writes.',
    options: ['Accept writes', 'Accept reads only', 'No operations', 'Random operations'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql41',
    text: 'What is secondary in replica set?',
    answer: 'Copy data from primary.',
    options: ['Copy data from primary', 'Write data independently', 'No data copying', 'Random data copying'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql42',
    text: 'What is arbiter in replica set?',
    answer: 'Select primary.',
    options: ['Select primary', 'Select secondary', 'No selection', 'Random selection'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql43',
    text: 'What is sharding in MongoDB?',
    answer: 'Distribute data across servers.',
    options: ['Distribute data across servers', 'Keep data on single server', 'No data distribution', 'Random data distribution'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql44',
    text: 'What is config server?',
    answer: 'Store configuration.',
    options: ['Store configuration', 'Store data', 'Store logs', 'Store backups'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql45',
    text: 'What is query router?',
    answer: 'Direct queries to shards.',
    options: ['Direct queries to shards', 'Random query distribution', 'No query routing', 'Random query routing'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql46',
    text: 'What is mongos?',
    answer: 'Sharding router.',
    options: ['Sharding router', 'Query router', 'Config server', 'Database server'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB']
  },
  {
    id: 'nosql47',
    text: 'What is authentication in MongoDB?',
    answer: 'User access control.',
    options: ['User access control', 'No access control', 'Random access', 'Delete access control'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB', 'Security']
  },
  {
    id: 'nosql48',
    text: 'What is authorization in MongoDB?',
    answer: 'Permission control.',
    options: ['Permission control', 'No permission control', 'Random permissions', 'Delete permissions'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB', 'Security']
  },
  {
    id: 'nosql49',
    text: 'What is encryption at rest?',
    answer: 'Encrypt stored data.',
    options: ['Encrypt stored data', 'Encrypt transmitted data', 'No encryption', 'Random encryption'],
    role: 'Backend Developer',
    skills: ['NoSQL', 'MongoDB', 'Security']
  },
  {
    id: 'nosql50',
    text: 'Why NoSQL?',
    answer: 'Scalable, flexible, schema-less.',
    options: ['Scalable, flexible, schema-less', 'Not scalable, rigid, schema-required', 'Random benefits', 'No benefits'],
    role: 'Backend Developer',
    skills: ['NoSQL']
  },

  // AWS Questions
  {
    id: 'aws1',
    text: 'What is AWS?',
    answer: 'Amazon Web Services cloud platform.',
    options: ['Amazon Web Services cloud platform', 'Microsoft Azure platform', 'Google Cloud platform', 'IBM Cloud platform'],
    role: 'DevOps',
    skills: ['AWS']
  },
  {
    id: 'aws2',
    text: 'What is EC2?',
    answer: 'Virtual server service.',
    options: ['Virtual server service', 'Database service', 'Storage service', 'Network service'],
    role: 'DevOps',
    skills: ['AWS']
  },
  {
    id: 'aws3',
    text: 'What is S3?',
    answer: 'Object storage service.',
    options: ['Object storage service', 'Block storage service', 'Database service', 'File system service'],
    role: 'DevOps',
    skills: ['AWS']
  },
  {
    id: 'aws4',
    text: 'What is RDS?',
    answer: 'Managed database service.',
    options: ['Managed database service', 'Unmanaged database service', 'No database service', 'Random service'],
    role: 'DevOps',
    skills: ['AWS']
  },
  {
    id: 'aws5',
    text: 'What is Lambda?',
    answer: 'Serverless compute service.',
    options: ['Serverless compute service', 'Server-based compute service', 'No compute service', 'Random compute service'],
    role: 'DevOps',
    skills: ['AWS']
  }
];
