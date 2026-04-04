import { Question } from './types';

export const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
  'Node.js', 'Express.js', 'Python', 'Django', 'Flask',
  'SQL', 'PostgreSQL', 'MongoDB', 'NoSQL',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git',
  'GraphQL', 'REST API', 'Security', 'AI'
];

export const ROLES = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps'
];

export const ALL_FILTERS = [...ROLES, ...SKILLS];

export const QUESTIONS: Question[] = [
  // Frontend Fundamentals - React Questions (50 questions)
  {
    id: 'f1',
    text: 'What is React?',
    answer: 'UI library.',
    options: ['UI library', 'Database library', 'Styling library', 'Server library'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f2',
    text: 'What is component?',
    answer: 'Reusable UI.',
    options: ['Reusable UI', 'Single use UI', 'No UI', 'Random UI'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f3',
    text: 'Types of components?',
    answer: 'Functional, Class.',
    options: ['Functional, Class', 'Only Functional', 'Only Class', 'No types'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f4',
    text: 'What is JSX?',
    answer: 'HTML in JS.',
    options: ['HTML in JS', 'JS in HTML', 'Only HTML', 'Only JS'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f5',
    text: 'What is Virtual DOM?',
    answer: 'Fast DOM update.',
    options: ['Fast DOM update', 'Slow DOM update', 'No DOM update', 'Random DOM update'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f6',
    text: 'What is state?',
    answer: 'Component data.',
    options: ['Component data', 'Global data', 'No data', 'Random data'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f7',
    text: 'What are props?',
    answer: 'Data from parent.',
    options: ['Data from parent', 'Data from child', 'No data', 'Random data'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f8',
    text: 'Props vs state?',
    answer: 'Props = read-only, state = mutable.',
    options: ['Props = read-only, state = mutable', 'Both read-only', 'Both mutable', 'No difference'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f9',
    text: 'What is useState?',
    answer: 'State hook.',
    options: ['State hook', 'Effect hook', 'Context hook', 'Ref hook'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f10',
    text: 'What is useEffect?',
    answer: 'Side effects.',
    options: ['Side effects', 'State management', 'Event handling', 'Routing'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f11',
    text: 'What is event handling?',
    answer: 'User interaction.',
    options: ['User interaction', 'System interaction', 'No interaction', 'Random interaction'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f12',
    text: 'What is conditional rendering?',
    answer: 'Render based on condition.',
    options: ['Render based on condition', 'Render always', 'Never render', 'Random render'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f13',
    text: 'What is list rendering?',
    answer: 'Render list using map().',
    options: ['Render list using map()', 'Render list manually', 'No list rendering', 'Random rendering'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f14',
    text: 'What is key?',
    answer: 'Unique ID.',
    options: ['Unique ID', 'Duplicate ID', 'No ID', 'Random ID'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f15',
    text: 'What is controlled component?',
    answer: 'Form with state.',
    options: ['Form with state', 'Form without state', 'No form', 'Random form'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f16',
    text: 'What is uncontrolled component?',
    answer: 'Form with DOM.',
    options: ['Form with DOM', 'Form with state', 'No form', 'Random form'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f17',
    text: 'What is React Router?',
    answer: 'Routing library.',
    options: ['Routing library', 'State library', 'Style library', 'Database library'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f18',
    text: 'What is useParams?',
    answer: 'Get URL params.',
    options: ['Get URL params', 'Set URL params', 'Delete URL params', 'Random URL params'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f19',
    text: 'What is useNavigate?',
    answer: 'Navigate pages.',
    options: ['Navigate pages', 'Stay on page', 'Delete pages', 'Random pages'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f20',
    text: 'What is context API?',
    answer: 'Global state.',
    options: ['Global state', 'Local state', 'No state', 'Random state'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f21',
    text: 'What is useContext?',
    answer: 'Access context.',
    options: ['Access context', 'Create context', 'Delete context', 'Random context'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f22',
    text: 'What is prop drilling?',
    answer: 'Passing props deeply.',
    options: ['Passing props deeply', 'Passing props shallow', 'No props passing', 'Random props'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f23',
    text: 'What is Redux?',
    answer: 'State management.',
    options: ['State management', 'Style management', 'Database management', 'No management'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f24',
    text: 'What is hook?',
    answer: 'Special function.',
    options: ['Special function', 'Regular function', 'No function', 'Random function'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f25',
    text: 'Rules of hooks?',
    answer: 'Top level only.',
    options: ['Top level only', 'Bottom level only', 'Any level', 'No level'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f26',
    text: 'What is fragment?',
    answer: 'No extra div.',
    options: ['No extra div', 'Extra div', 'No div', 'Random div'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f27',
    text: 'What is memo?',
    answer: 'Optimize rendering.',
    options: ['Optimize rendering', 'Slow rendering', 'No rendering', 'Random rendering'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f28',
    text: 'What is lazy loading?',
    answer: 'Load on demand.',
    options: ['Load on demand', 'Load immediately', 'No loading', 'Random loading'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f29',
    text: 'What is Suspense?',
    answer: 'Loading fallback.',
    options: ['Loading fallback', 'Error fallback', 'No fallback', 'Random fallback'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f30',
    text: 'What is ref?',
    answer: 'Access DOM.',
    options: ['Access DOM', 'Access CSS', 'Access JS', 'No access'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f31',
    text: 'What is useRef?',
    answer: 'Hook for ref.',
    options: ['Hook for ref', 'Hook for state', 'Hook for effect', 'No hook'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f32',
    text: 'What is forwardRef?',
    answer: 'Pass ref.',
    options: ['Pass ref', 'Block ref', 'Delete ref', 'Random ref'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f33',
    text: 'What is error boundary?',
    answer: 'Catch errors.',
    options: ['Catch errors', 'Create errors', 'Ignore errors', 'Random errors'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f34',
    text: 'What is HOC?',
    answer: 'Higher order component.',
    options: ['Higher order component', 'Lower order component', 'No component', 'Random component'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f35',
    text: 'What is render props?',
    answer: 'Share logic.',
    options: ['Share logic', 'Hide logic', 'Delete logic', 'Random logic'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f36',
    text: 'What is reconciliation?',
    answer: 'Update DOM.',
    options: ['Update DOM', 'Delete DOM', 'Create DOM', 'Random DOM'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f37',
    text: 'What is SSR?',
    answer: 'Server render.',
    options: ['Server render', 'Client render', 'No render', 'Random render'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f38',
    text: 'What is CSR?',
    answer: 'Client render.',
    options: ['Client render', 'Server render', 'No render', 'Random render'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f39',
    text: 'What is hydration?',
    answer: 'Attach React to HTML.',
    options: ['Attach React to HTML', 'Detach React from HTML', 'No attachment', 'Random attachment'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f40',
    text: 'What is build?',
    answer: 'Production code.',
    options: ['Production code', 'Development code', 'No code', 'Random code'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f41',
    text: 'What is strict mode?',
    answer: 'Detect issues.',
    options: ['Detect issues', 'Hide issues', 'Create issues', 'Random issues'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f42',
    text: 'What is testing?',
    answer: 'Test components.',
    options: ['Test components', 'Style components', 'Delete components', 'Random components'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f43',
    text: 'What is useReducer?',
    answer: 'State alternative.',
    options: ['State alternative', 'State only option', 'No state', 'Random state'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  {
    id: 'f44',
    text: 'What is custom hook?',
    answer: 'Reusable hook.',
    options: ['Reusable hook', 'Single use hook', 'No hook', 'Random hook'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f45',
    text: 'What is batching?',
    answer: 'Group updates.',
    options: ['Group updates', 'Single updates', 'No updates', 'Random updates'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f46',
    text: 'What is portal?',
    answer: 'Render outside DOM.',
    options: ['Render outside DOM', 'Render inside DOM', 'No rendering', 'Random rendering'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f47',
    text: 'What is lifecycle?',
    answer: 'Mount, update, unmount.',
    options: ['Mount, update, unmount', 'Only mount', 'Only update', 'Only unmount'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f48',
    text: 'What is dependency array?',
    answer: 'Controls useEffect.',
    options: ['Controls useEffect', 'Controls useState', 'Controls useRef', 'No control'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f49',
    text: 'What is re-render?',
    answer: 'UI update.',
    options: ['UI update', 'UI delete', 'No UI change', 'Random UI change'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  {
    id: 'f50',
    text: 'Why React?',
    answer: 'Fast + reusable UI.',
    options: ['Fast + reusable UI', 'Slow + single use UI', 'No UI', 'Random UI'],
    role: 'Frontend Developer',
    skills: ['React']
  },

  // HTML Questions (50 questions)
  {
    id: 'html1',
    text: 'What is HTML?',
    answer: 'HTML is used to structure web pages.',
    options: ['HTML is used to structure web pages', 'HTML is used to style web pages', 'HTML is used for database operations', 'HTML is a programming language'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html2',
    text: 'What is a tag?',
    answer: 'Defines an element. Example: <p>Text</p>.',
    options: ['Defines an element', 'Styles content', 'Creates database', 'Adds JavaScript'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html3',
    text: 'What is an element?',
    answer: 'Tag + content.',
    options: ['Tag + content', 'Only tag', 'Only content', 'Style + tag'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html4',
    text: 'What is attribute?',
    answer: 'Extra info inside tag.',
    options: ['Extra info inside tag', 'Content of tag', 'Style of tag', 'JavaScript function'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html5',
    text: 'What is DOCTYPE?',
    answer: 'Defines HTML version.',
    options: ['Defines HTML version', 'Defines CSS version', 'Defines JavaScript version', 'Defines browser version'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html6',
    text: 'What is nesting?',
    answer: 'Elements inside elements.',
    options: ['Elements inside elements', 'Elements side by side', 'Elements with same tag', 'Elements with same content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html7',
    text: 'What is block element?',
    answer: 'Full width element.',
    options: ['Full width element', 'Content width element', 'Hidden element', 'Fixed width element'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html8',
    text: 'What is inline element?',
    answer: 'Takes required width.',
    options: ['Takes required width', 'Takes full width', 'Takes fixed width', 'Takes no width'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html9',
    text: 'What is semantic HTML?',
    answer: 'Meaningful tags.',
    options: ['Meaningful tags', 'Styling tags', 'Script tags', 'Random tags'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html10',
    text: 'Why semantic HTML?',
    answer: 'SEO + accessibility.',
    options: ['SEO + accessibility', 'Only for styling', 'Only for JavaScript', 'No special purpose'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html11',
    text: 'What is header tag?',
    answer: 'Top section.',
    options: ['Top section', 'Bottom section', 'Middle section', 'Side section'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html12',
    text: 'What is footer tag?',
    answer: 'Bottom section.',
    options: ['Bottom section', 'Top section', 'Middle section', 'Side section'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html13',
    text: 'What is section?',
    answer: 'Group content.',
    options: ['Group content', 'Single content', 'Style content', 'Delete content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html14',
    text: 'What is article?',
    answer: 'Independent content.',
    options: ['Independent content', 'Dependent content', 'Related content', 'Random content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html15',
    text: 'What is nav?',
    answer: 'Navigation links.',
    options: ['Navigation links', 'Style links', 'Script links', 'Database links'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html16',
    text: 'What is main?',
    answer: 'Main content.',
    options: ['Main content', 'Side content', 'Header content', 'Footer content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html17',
    text: 'What is aside?',
    answer: 'Sidebar content.',
    options: ['Sidebar content', 'Main content', 'Header content', 'Footer content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html18',
    text: 'What is strong tag?',
    answer: 'Important text.',
    options: ['Important text', 'Normal text', 'Hidden text', 'Styled text'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html19',
    text: 'What is em tag?',
    answer: 'Emphasized text.',
    options: ['Emphasized text', 'Normal text', 'Bold text', 'Italic text'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html20',
    text: 'What is form?',
    answer: 'Collect input.',
    options: ['Collect input', 'Display output', 'Style content', 'Run JavaScript'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html21',
    text: 'What are input types?',
    answer: 'text, email, password.',
    options: ['text, email, password', 'Only text', 'Only email', 'Only password'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html22',
    text: 'What is label?',
    answer: 'Input description.',
    options: ['Input description', 'Input value', 'Input style', 'Input validation'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html23',
    text: 'What is required?',
    answer: 'Mandatory field.',
    options: ['Mandatory field', 'Optional field', 'Hidden field', 'Disabled field'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html24',
    text: 'What is placeholder?',
    answer: 'Hint text.',
    options: ['Hint text', 'Required text', 'Error text', 'Success text'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html25',
    text: 'GET vs POST?',
    answer: 'GET = URL, POST = secure.',
    options: ['GET = URL, POST = secure', 'GET = secure, POST = URL', 'Both are same', 'Both are insecure'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html26',
    text: 'What is select?',
    answer: 'Dropdown.',
    options: ['Dropdown', 'Text input', 'Checkbox', 'Radio button'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html27',
    text: 'What is textarea?',
    answer: 'Multi-line input.',
    options: ['Multi-line input', 'Single line input', 'Password input', 'Email input'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html28',
    text: 'What is button?',
    answer: 'Clickable element.',
    options: ['Clickable element', 'Display element', 'Style element', 'Script element'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html29',
    text: 'What is img?',
    answer: 'Image display.',
    options: ['Image display', 'Video display', 'Audio display', 'Text display'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html30',
    text: 'What is alt?',
    answer: 'Image description.',
    options: ['Image description', 'Image source', 'Image style', 'Image size'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html31',
    text: 'What is audio?',
    answer: 'Play sound.',
    options: ['Play sound', 'Play video', 'Display image', 'Show text'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html32',
    text: 'What is video?',
    answer: 'Play video.',
    options: ['Play video', 'Play audio', 'Display image', 'Show text'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html33',
    text: 'What is anchor?',
    answer: 'Create links.',
    options: ['Create links', 'Create styles', 'Create scripts', 'Create forms'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html34',
    text: 'What is target?',
    answer: 'Open in new tab.',
    options: ['Open in new tab', 'Open in same tab', 'Close tab', 'Block tab'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html35',
    text: 'What is iframe?',
    answer: 'Embed page.',
    options: ['Embed page', 'Create link', 'Add style', 'Run script'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html36',
    text: 'What is download?',
    answer: 'Download file.',
    options: ['Download file', 'Upload file', 'Delete file', 'Edit file'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html37',
    text: 'What is favicon?',
    answer: 'Tab icon.',
    options: ['Tab icon', 'Page title', 'Page content', 'Page style'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html38',
    text: 'What is relative path?',
    answer: 'Local file.',
    options: ['Local file', 'Full URL', 'Database path', 'Script path'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html39',
    text: 'What is absolute path?',
    answer: 'Full URL.',
    options: ['Full URL', 'Local file', 'Relative path', 'Database path'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html40',
    text: 'What is DOM?',
    answer: 'HTML tree.',
    options: ['HTML tree', 'CSS tree', 'JavaScript tree', 'Database tree'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html41',
    text: 'What is id?',
    answer: 'Unique identifier.',
    options: ['Unique identifier', 'Multiple identifier', 'Style identifier', 'Script identifier'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html42',
    text: 'What is class?',
    answer: 'Reusable identifier.',
    options: ['Reusable identifier', 'Unique identifier', 'Style identifier', 'Script identifier'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html43',
    text: 'What is data-*?',
    answer: 'Custom attribute.',
    options: ['Custom attribute', 'Standard attribute', 'Style attribute', 'Script attribute'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html44',
    text: 'What is hidden?',
    answer: 'Hide element.',
    options: ['Hide element', 'Show element', 'Style element', 'Delete element'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html45',
    text: 'What is contenteditable?',
    answer: 'Editable content.',
    options: ['Editable content', 'Read-only content', 'Hidden content', 'Deleted content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html46',
    text: 'What is meta tag?',
    answer: 'Page info.',
    options: ['Page info', 'Page style', 'Page script', 'Page content'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html47',
    text: 'What is viewport?',
    answer: 'Responsive setting.',
    options: ['Responsive setting', 'Fixed setting', 'Mobile setting', 'Desktop setting'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html48',
    text: 'What is script?',
    answer: 'Add JS.',
    options: ['Add JS', 'Add CSS', 'Add HTML', 'Add database'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html49',
    text: 'What is link?',
    answer: 'Add CSS.',
    options: ['Add CSS', 'Add JS', 'Add HTML', 'Add database'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },
  {
    id: 'html50',
    text: 'What is accessibility?',
    answer: 'Usable for all users.',
    options: ['Usable for all users', 'Only for developers', 'Only for designers', 'Only for mobile users'],
    role: 'Frontend Developer',
    skills: ['HTML']
  },

  // CSS Questions (50 questions)
  {
    id: 'css1',
    text: 'What is CSS?',
    answer: 'Styles HTML elements.',
    options: ['Styles HTML elements', 'Structures HTML elements', 'Adds JavaScript to HTML', 'Creates HTML elements'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css2',
    text: 'Types of CSS?',
    answer: 'Inline, Internal, External.',
    options: ['Inline, Internal, External', 'Only Inline', 'Only Internal', 'Only External'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css3',
    text: 'What is selector?',
    answer: 'Targets elements.',
    options: ['Targets elements', 'Creates elements', 'Deletes elements', 'Styles elements automatically'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css4',
    text: 'What is class selector?',
    answer: '.myClass {}',
    options: ['.myClass {}', '#myId {}', 'myClass {}', '*myClass {}'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css5',
    text: 'What is id selector?',
    answer: '#id {}',
    options: ['#id {}', '.id {}', 'id {}', '*id {}'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css6',
    text: 'What is universal selector?',
    answer: '* {}',
    options: ['* {}', '# {}', '. {}', 'all {}'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css7',
    text: 'What is box model?',
    answer: 'Content + padding + border + margin.',
    options: ['Content + padding + border + margin', 'Content + border + margin', 'Padding + border + margin', 'Content + padding + margin'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css8',
    text: 'Margin vs padding?',
    answer: 'Outside vs inside.',
    options: ['Outside vs inside', 'Inside vs outside', 'Both are same', 'Both are outside'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css9',
    text: 'What is border?',
    answer: 'Element boundary.',
    options: ['Element boundary', 'Element background', 'Element margin', 'Element padding'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css10',
    text: 'What is width/height?',
    answer: 'Size control.',
    options: ['Size control', 'Color control', 'Position control', 'Display control'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css11',
    text: 'What is display?',
    answer: 'block, inline, flex.',
    options: ['block, inline, flex', 'Only block', 'Only inline', 'Only flex'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css12',
    text: 'display:block?',
    answer: 'Full width.',
    options: ['Full width', 'Content width', 'No width', 'Fixed width'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css13',
    text: 'display:inline?',
    answer: 'Content width.',
    options: ['Content width', 'Full width', 'No width', 'Fixed width'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css14',
    text: 'display:none?',
    answer: 'Hide element.',
    options: ['Hide element', 'Show element', 'Style element', 'Delete element'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css15',
    text: 'What is position?',
    answer: 'Element placement.',
    options: ['Element placement', 'Element styling', 'Element sizing', 'Element hiding'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css16',
    text: 'Types of position?',
    answer: 'static, relative, absolute, fixed, sticky.',
    options: ['static, relative, absolute, fixed, sticky', 'Only static and relative', 'Only absolute and fixed', 'Only fixed and sticky'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css17',
    text: 'What is relative?',
    answer: 'Position from itself.',
    options: ['Position from itself', 'Position from parent', 'Position from viewport', 'Position from body'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css18',
    text: 'What is absolute?',
    answer: 'Relative to parent.',
    options: ['Relative to parent', 'Relative to itself', 'Relative to viewport', 'Relative to body'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css19',
    text: 'What is fixed?',
    answer: 'Fixed on screen.',
    options: ['Fixed on screen', 'Fixed to parent', 'Fixed to body', 'Fixed to element'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css20',
    text: 'What is sticky?',
    answer: 'Scroll-based.',
    options: ['Scroll-based', 'Click-based', 'Hover-based', 'Fixed-based'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css21',
    text: 'What is z-index?',
    answer: 'Layer order.',
    options: ['Layer order', 'Layer size', 'Layer color', 'Layer position'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css22',
    text: 'What is Flexbox?',
    answer: '1D layout.',
    options: ['1D layout', '2D layout', '3D layout', 'Random layout'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css23',
    text: 'justify-content?',
    answer: 'Horizontal align.',
    options: ['Horizontal align', 'Vertical align', 'Diagonal align', 'Random align'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css24',
    text: 'align-items?',
    answer: 'Vertical align.',
    options: ['Vertical align', 'Horizontal align', 'Diagonal align', 'Random align'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css25',
    text: 'flex-direction?',
    answer: 'Row/column.',
    options: ['Row/column', 'Only row', 'Only column', 'Diagonal'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css26',
    text: 'What is Grid?',
    answer: '2D layout.',
    options: ['2D layout', '1D layout', '3D layout', 'Random layout'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css27',
    text: 'grid-template-columns?',
    answer: 'Define columns.',
    options: ['Define columns', 'Define rows', 'Define gaps', 'Define areas'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css28',
    text: 'gap?',
    answer: 'Space between items.',
    options: ['Space between items', 'Space inside items', 'Space outside items', 'No space'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css29',
    text: 'What is responsive design?',
    answer: 'Adapt to devices.',
    options: ['Adapt to devices', 'Fixed design', 'Mobile only', 'Desktop only'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css30',
    text: 'What is media query?',
    answer: 'Device-based CSS.',
    options: ['Device-based CSS', 'Browser-based CSS', 'Server-based CSS', 'Random CSS'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css31',
    text: 'What is overflow?',
    answer: 'Handle overflow.',
    options: ['Handle overflow', 'Handle underflow', 'Handle flow', 'No handling'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css32',
    text: 'overflow:hidden?',
    answer: 'Hide extra.',
    options: ['Hide extra', 'Show extra', 'Scroll extra', 'Resize extra'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css33',
    text: 'What is opacity?',
    answer: 'Transparency.',
    options: ['Transparency', 'Color', 'Size', 'Position'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css34',
    text: 'What is visibility?',
    answer: 'Show/hide.',
    options: ['Show/hide', 'Only show', 'Only hide', 'No effect'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css35',
    text: 'What is float?',
    answer: 'Left/right position.',
    options: ['Left/right position', 'Top/bottom position', 'Center position', 'Random position'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css36',
    text: 'What is clear?',
    answer: 'Clear float.',
    options: ['Clear float', 'Set float', 'Ignore float', 'Create float'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css37',
    text: 'What is pseudo-class?',
    answer: ':hover',
    options: [':hover', '::before', '.class', '#id'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css38',
    text: 'What is pseudo-element?',
    answer: '::before',
    options: ['::before', ':hover', '.class', '#id'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css39',
    text: 'What is specificity?',
    answer: 'Priority.',
    options: ['Priority', 'Style', 'Color', 'Size'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css40',
    text: 'What is !important?',
    answer: 'Override.',
    options: ['Override', 'Underwrite', 'Ignore', 'Delete'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css41',
    text: 'What is px?',
    answer: 'Fixed unit.',
    options: ['Fixed unit', 'Relative unit', 'Flexible unit', 'Random unit'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css42',
    text: 'What is rem?',
    answer: 'Relative unit.',
    options: ['Relative unit', 'Fixed unit', 'Flexible unit', 'Random unit'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css43',
    text: 'What is vh/vw?',
    answer: 'Viewport units.',
    options: ['Viewport units', 'Fixed units', 'Relative units', 'Random units'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css44',
    text: 'What is transition?',
    answer: 'Smooth change.',
    options: ['Smooth change', 'Instant change', 'No change', 'Random change'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css45',
    text: 'What is animation?',
    answer: 'Movement.',
    options: ['Movement', 'Static', 'Hidden', 'Fixed'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css46',
    text: 'What is keyframes?',
    answer: 'Animation steps.',
    options: ['Animation steps', 'Animation speed', 'Animation color', 'Animation size'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css47',
    text: 'What is shadow?',
    answer: 'Box/text shadow.',
    options: ['Box/text shadow', 'Box/text color', 'Box/text size', 'Box/text position'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css48',
    text: 'What is gradient?',
    answer: 'Color blend.',
    options: ['Color blend', 'Color fix', 'Color change', 'Color remove'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css49',
    text: 'What is transform?',
    answer: 'Rotate/scale.',
    options: ['Rotate/scale', 'Color/size', 'Position/display', 'Hide/show'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },
  {
    id: 'css50',
    text: 'What is filter?',
    answer: 'Visual effects.',
    options: ['Visual effects', 'Audio effects', 'Text effects', 'Layout effects'],
    role: 'Frontend Developer',
    skills: ['CSS']
  },

  // JavaScript Questions (25 questions)
  {
    id: 'js1',
    text: 'What is JavaScript?',
    answer: 'Programming language for web.',
    options: ['Programming language for web', 'Styling language', 'Database language', 'Server language only'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js2',
    text: 'What are variables?',
    answer: 'Store data. let x = 10;',
    options: ['Store data. let x = 10;', 'Only store strings', 'Only store numbers', 'No storage'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js3',
    text: 'var vs let vs const?',
    answer: 'Scope + mutability.',
    options: ['Scope + mutability', 'All same', 'Only scope difference', 'Only mutability difference'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js4',
    text: 'What is data type?',
    answer: 'Type of data (string, number).',
    options: ['Type of data (string, number)', 'Only string', 'Only number', 'No types'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js5',
    text: 'What is typeof?',
    answer: 'Returns type.',
    options: ['Returns type', 'Returns value', 'Returns size', 'Returns nothing'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js6',
    text: 'What is hoisting?',
    answer: 'Variables moved to top.',
    options: ['Variables moved to top', 'Variables moved to bottom', 'No movement', 'Random movement'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js7',
    text: 'What is scope?',
    answer: 'Variable accessibility.',
    options: ['Variable accessibility', 'Variable storage', 'Variable deletion', 'Variable creation'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js8',
    text: 'What is function?',
    answer: 'Reusable code block.',
    options: ['Reusable code block', 'Single use code', 'No code', 'Random code'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js9',
    text: 'What is arrow function?',
    answer: 'Short syntax.',
    options: ['Short syntax', 'Long syntax', 'No syntax', 'Random syntax'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js10',
    text: 'What is callback?',
    answer: 'Function inside function.',
    options: ['Function inside function', 'Function outside function', 'No function', 'Multiple functions'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js11',
    text: 'What is closure?',
    answer: 'Access outer scope.',
    options: ['Access outer scope', 'Access inner scope', 'No access', 'Random access'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js12',
    text: 'What is array?',
    answer: 'Collection of values.',
    options: ['Collection of values', 'Single value', 'No values', 'Random values'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js13',
    text: 'What is object?',
    answer: 'Key-value pair.',
    options: ['Key-value pair', 'Value-key pair', 'Only keys', 'Only values'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js14',
    text: 'What is JSON?',
    answer: 'Data format.',
    options: ['Data format', 'Code format', 'Style format', 'No format'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js15',
    text: 'What is map()?',
    answer: 'Transform array.',
    options: ['Transform array', 'Filter array', 'Delete array', 'Create array'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js16',
    text: 'What is filter()?',
    answer: 'Filter values.',
    options: ['Filter values', 'Transform values', 'Delete values', 'Create values'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js17',
    text: 'What is reduce()?',
    answer: 'Reduce to single value.',
    options: ['Reduce to single value', 'Expand to multiple values', 'No reduction', 'Random values'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js18',
    text: 'What is event?',
    answer: 'User action.',
    options: ['User action', 'System action', 'No action', 'Random action'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js19',
    text: 'What is DOM?',
    answer: 'HTML structure.',
    options: ['HTML structure', 'CSS structure', 'JavaScript structure', 'Database structure'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js20',
    text: 'What is this?',
    answer: 'Current object.',
    options: ['Current object', 'Parent object', 'Child object', 'No object'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js21',
    text: '== vs ===?',
    answer: 'Loose vs strict.',
    options: ['Loose vs strict', 'Both loose', 'Both strict', 'No difference'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js22',
    text: 'What is NaN?',
    answer: 'Not a number.',
    options: ['Not a number', 'Is a number', 'Is a string', 'Is undefined'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js23',
    text: 'What is setTimeout?',
    answer: 'Delay function.',
    options: ['Delay function', 'Immediate function', 'No function', 'Random function'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js24',
    text: 'What is promise?',
    answer: 'Async handler.',
    options: ['Async handler', 'Sync handler', 'No handler', 'Random handler'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'js25',
    text: 'What is async/await?',
    answer: 'Simplify async.',
    options: ['Simplify async', 'Complicate async', 'No async', 'Random async'],
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
  // TypeScript Questions (25 questions)
  {
    id: 'ts1',
    text: 'What is TypeScript?',
    answer: 'Typed JavaScript.',
    options: ['Typed JavaScript', 'Dynamic JavaScript', 'New programming language', 'Database language'],
    role: 'Frontend Developer',
    skills: ['TypeScript', 'JavaScript']
  },
  {
    id: 'ts2',
    text: 'Why TypeScript?',
    answer: 'Catch errors early.',
    options: ['Catch errors early', 'Only for styling', 'Only for database', 'No special purpose'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts3',
    text: 'What is static typing?',
    answer: 'Define types.',
    options: ['Define types', 'Dynamic types', 'No types', 'Random types'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts4',
    text: 'Example type?',
    answer: 'let x: number = 10;',
    options: ['let x: number = 10;', 'let x = 10;', 'number x = 10;', 'x: number = 10;'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts5',
    text: 'Basic types?',
    answer: 'string, number, boolean.',
    options: ['string, number, boolean', 'Only string', 'Only number', 'Only boolean'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts6',
    text: 'What is any?',
    answer: 'Any type allowed.',
    options: ['Any type allowed', 'No type allowed', 'Only specific types', 'Only string types'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts7',
    text: 'What is unknown?',
    answer: 'Safer any.',
    options: ['Safer any', 'Same as any', 'Unsafe any', 'No type'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts8',
    text: 'What is void?',
    answer: 'No return.',
    options: ['No return', 'Must return', 'Optional return', 'Random return'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts9',
    text: 'What is never?',
    answer: 'Never returns.',
    options: ['Never returns', 'Always returns', 'Sometimes returns', 'Optional return'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts10',
    text: 'What is array type?',
    answer: 'number[]',
    options: ['number[]', 'array', 'list', 'collection'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts11',
    text: 'What is tuple?',
    answer: 'Fixed array.',
    options: ['Fixed array', 'Dynamic array', 'Single array', 'Empty array'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts12',
    text: 'What is enum?',
    answer: 'Named constants.',
    options: ['Named constants', 'Dynamic variables', 'Random values', 'Functions'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts13',
    text: 'What is interface?',
    answer: 'Define structure.',
    options: ['Define structure', 'Define function', 'Define variable', 'Define class'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts14',
    text: 'What is type?',
    answer: 'Custom type.',
    options: ['Custom type', 'Standard type', 'Built-in type', 'Random type'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts15',
    text: 'Interface vs type?',
    answer: 'Extend vs flexible.',
    options: ['Extend vs flexible', 'Same thing', 'Only extend', 'Only flexible'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts16',
    text: 'What is optional property?',
    answer: 'name?: string',
    options: ['name?: string', 'name: string', 'name!: string', 'name = string'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts17',
    text: 'What is readonly?',
    answer: 'Immutable.',
    options: ['Immutable', 'Mutable', 'Optional', 'Required'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts18',
    text: 'What is function typing?',
    answer: '(a:number)=>number',
    options: ['(a:number)=>number', 'function number', 'a:number number', 'number=>number'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts19',
    text: 'What is union type?',
    answer: 'string | number',
    options: ['string | number', 'string + number', 'string & number', 'string, number'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts20',
    text: 'What is generics?',
    answer: 'Reusable types.',
    options: ['Reusable types', 'Single types', 'Fixed types', 'No types'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts21',
    text: 'What is type assertion?',
    answer: 'as keyword.',
    options: ['as keyword', 'is keyword', 'type keyword', 'new keyword'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts22',
    text: 'What is module?',
    answer: 'File-based code.',
    options: ['File-based code', 'Single file code', 'No file code', 'Database code'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts23',
    text: 'What is export/import?',
    answer: 'Share code.',
    options: ['Share code', 'Hide code', 'Delete code', 'Create code'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts24',
    text: 'What is tsconfig?',
    answer: 'Config file.',
    options: ['Config file', 'Code file', 'Style file', 'Data file'],
    role: 'Frontend Developer',
    skills: ['TypeScript']
  },
  {
    id: 'ts25',
    text: 'TS vs JS?',
    answer: 'Typed vs dynamic.',
    options: ['Typed vs dynamic', 'Both typed', 'Both dynamic', 'No difference'],
    role: 'Frontend Developer',
    skills: ['TypeScript', 'JavaScript']
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

  // Docker Questions
  {
    id: 'docker1',
    text: 'What is Docker?',
    answer: 'Docker is a platform for developing and running applications in containers.',
    options: ['A platform for developing and running applications in containers', 'A virtualization platform', 'A cloud service', 'A database system'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker2',
    text: 'What is a Docker container?',
    answer: 'A lightweight, standalone executable package.',
    options: ['A lightweight, standalone executable package', 'A virtual machine', 'A physical server', 'A database instance'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker3',
    text: 'What is a Docker image?',
    answer: 'A read-only template for creating containers.',
    options: ['A read-only template for creating containers', 'A running container', 'A configuration file', 'A database backup'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker4',
    text: 'What is Dockerfile?',
    answer: 'Text file with instructions to build image.',
    options: ['Text file with instructions to build image', 'Running container configuration', 'Database schema', 'Application code'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker5',
    text: 'What is docker-compose?',
    answer: 'Tool for defining and running multi-container applications.',
    options: ['Tool for defining and running multi-container applications', 'Single container tool', 'Database tool', 'Cloud deployment tool'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker6',
    text: 'What is Docker Hub?',
    answer: 'Cloud-based registry for Docker images.',
    options: ['Cloud-based registry for Docker images', 'Local image storage', 'Database service', 'Code repository'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker7',
    text: 'What is container orchestration?',
    answer: 'Automating deployment of containers.',
    options: ['Automating deployment of containers', 'Manual container management', 'No container management', 'Random container operations'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker8',
    text: 'What is Kubernetes?',
    answer: 'Container orchestration platform.',
    options: ['Container orchestration platform', 'Container runtime', 'Image registry', 'Database system'],
    role: 'DevOps',
    skills: ['Docker', 'Kubernetes']
  },
  {
    id: 'docker9',
    text: 'What is Docker Swarm?',
    answer: 'Native clustering solution for Docker.',
    options: ['Native clustering solution for Docker', 'External orchestration tool', 'Database clustering', 'Load balancer'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker10',
    text: 'What is docker volume?',
    answer: 'Persistent data storage for containers.',
    options: ['Persistent data storage for containers', 'Temporary storage', 'Memory storage', 'Network storage'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker11',
    text: 'What is docker network?',
    answer: 'Communication between containers.',
    options: ['Communication between containers', 'Container isolation', 'No networking', 'Random networking'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker12',
    text: 'What is docker registry?',
    answer: 'Storage and distribution of images.',
    options: ['Storage and distribution of images', 'Image creation only', 'Container management only', 'No registry functionality'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker13',
    text: 'What is multi-stage build?',
    answer: 'Optimize image size.',
    options: ['Optimize image size', 'Increase image size', 'No optimization', 'Random optimization'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker14',
    text: 'What is .dockerignore?',
    answer: 'Exclude files from build context.',
    options: ['Exclude files from build context', 'Include all files', 'No file exclusion', 'Random file handling'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker15',
    text: 'What is health check?',
    answer: 'Monitor container health.',
    options: ['Monitor container health', 'Ignore container health', 'No health monitoring', 'Random monitoring'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker16',
    text: 'What is docker secret?',
    answer: 'Manage sensitive data.',
    options: ['Manage sensitive data', 'Manage public data', 'No data management', 'Random data management'],
    role: 'DevOps',
    skills: ['Docker', 'Security']
  },
  {
    id: 'docker17',
    text: 'What is docker config?',
    answer: 'Manage configuration data.',
    options: ['Manage configuration data', 'Manage runtime data', 'No configuration management', 'Random configuration'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker18',
    text: 'What is container runtime?',
    answer: 'Execute containers.',
    options: ['Execute containers', 'Build containers', 'No container execution', 'Random container operations'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker19',
    text: 'What is containerd?',
    answer: 'Industry-standard container runtime.',
    options: ['Industry-standard container runtime', 'Docker-specific runtime', 'No runtime', 'Random runtime'],
    role: 'DevOps',
    skills: ['Docker']
  },
  {
    id: 'docker20',
    text: 'Why Docker?',
    answer: 'Consistent environments, portability, efficiency.',
    options: ['Consistent environments, portability, efficiency', 'Inconsistent environments, no portability, inefficient', 'Random benefits', 'No benefits'],
    role: 'DevOps',
    skills: ['Docker']
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
  },

  // AI Questions - Beginner Level
  {
    id: 'ai_beginner_1',
    text: 'What is Artificial Intelligence?',
    answer: 'The simulation of human intelligence in machines.',
    options: ['The simulation of human intelligence in machines', 'Only machine learning algorithms', 'Just robotics', 'No intelligence in machines'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_2',
    text: 'What is Machine Learning?',
    answer: 'Systems that learn from data without explicit programming.',
    options: ['Systems that learn from data without explicit programming', 'Systems that only follow rules', 'Systems that cannot learn', 'No learning capability'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_3',
    text: 'What is Deep Learning?',
    answer: 'Machine learning with neural networks.',
    options: ['Machine learning with neural networks', 'Simple machine learning', 'No learning involved', 'Random learning'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_4',
    text: 'What is a Neural Network?',
    answer: 'Computing systems inspired by biological neural networks.',
    options: ['Computing systems inspired by biological neural networks', 'Simple algorithms', 'No network concept', 'Random networks'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_5',
    text: 'What is Training Data?',
    answer: 'Data used to train AI models.',
    options: ['Data used to train AI models', 'Data used for testing only', 'No data needed', 'Random data'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_6',
    text: 'What is Supervised Learning?',
    answer: 'Learning with labeled training data.',
    options: ['Learning with labeled training data', 'Learning without labels', 'No learning process', 'Random learning'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_7',
    text: 'What is Unsupervised Learning?',
    answer: 'Learning without labeled training data.',
    options: ['Learning without labeled training data', 'Learning with labels only', 'No learning possible', 'Random learning'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_8',
    text: 'What is a Model in AI?',
    answer: 'A mathematical representation of a system.',
    options: ['A mathematical representation of a system', 'Physical representation only', 'No model concept', 'Random model'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_9',
    text: 'What is Feature Engineering?',
    answer: 'Process of selecting and transforming variables.',
    options: ['Process of selecting and transforming variables', 'No feature processing', 'Random features', 'Delete all features'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_beginner_10',
    text: 'What is Overfitting?',
    answer: 'Model performs well on training data but poorly on new data.',
    options: ['Model performs well on training data but poorly on new data', 'Model performs poorly on all data', 'Perfect performance always', 'Random performance'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },

  // AI Questions - Intermediate Level
  {
    id: 'ai_intermediate_1',
    text: 'What is Backpropagation?',
    answer: 'Algorithm for training neural networks by calculating gradients.',
    options: ['Algorithm for training neural networks by calculating gradients', 'Forward propagation only', 'No gradient calculation', 'Random propagation'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_2',
    text: 'What is a Convolutional Neural Network (CNN)?',
    answer: 'Neural network designed for processing grid-like data such as images.',
    options: ['Neural network designed for processing grid-like data such as images', 'Network for text only', 'No grid processing', 'Random network'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_3',
    text: 'What is a Recurrent Neural Network (RNN)?',
    answer: 'Neural network for processing sequential data.',
    options: ['Neural network for processing sequential data', 'Network for static data only', 'No sequence processing', 'Random network'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_4',
    text: 'What is LSTM?',
    answer: 'Long Short-Term Memory network for long-term dependencies.',
    options: ['Long Short-Term Memory network for long-term dependencies', 'Short-term memory only', 'No memory capability', 'Random memory'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_5',
    text: 'What is Transformer Architecture?',
    answer: 'Neural network architecture using attention mechanisms.',
    options: ['Neural network architecture using attention mechanisms', 'Simple feed-forward network', 'No attention mechanism', 'Random architecture'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_6',
    text: 'What is Attention Mechanism?',
    answer: 'Technique to focus on relevant parts of input data.',
    options: ['Technique to focus on relevant parts of input data', 'No focus mechanism', 'Random attention', 'Equal attention to all parts'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_7',
    text: 'What is Transfer Learning?',
    answer: 'Using pre-trained models for new tasks.',
    options: ['Using pre-trained models for new tasks', 'Training from scratch only', 'No transfer possible', 'Random transfer'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_8',
    text: 'What is Fine-tuning?',
    answer: 'Adjusting pre-trained models for specific tasks.',
    options: ['Adjusting pre-trained models for specific tasks', 'No adjustment needed', 'Random adjustment', 'Delete all adjustments'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_9',
    text: 'What is Data Augmentation?',
    answer: 'Technique to increase training data diversity.',
    options: ['Technique to increase training data diversity', 'Reduce data diversity', 'No augmentation needed', 'Random augmentation'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_intermediate_10',
    text: 'What is Regularization?',
    answer: 'Techniques to prevent overfitting.',
    options: ['Techniques to prevent overfitting', 'Techniques to cause overfitting', 'No regularization needed', 'Random regularization'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },

  // AI Questions - Advanced Level
  {
    id: 'ai_advanced_1',
    text: 'What is Generative Adversarial Networks (GANs)?',
    answer: 'Two neural networks competing to generate realistic data.',
    options: ['Two neural networks competing to generate realistic data', 'Single network generation', 'No competition involved', 'Random generation'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_2',
    text: 'What is Reinforcement Learning?',
    answer: 'Learning through interaction with environment using rewards.',
    options: ['Learning through interaction with environment using rewards', 'Learning without interaction', 'No rewards involved', 'Random learning'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_3',
    text: 'What is Q-Learning?',
    answer: 'Model-free reinforcement learning algorithm.',
    options: ['Model-free reinforcement learning algorithm', 'Model-based learning only', 'No learning algorithm', 'Random algorithm'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_4',
    text: 'What is Natural Language Processing (NLP)?',
    answer: 'AI field for understanding and generating human language.',
    options: ['AI field for understanding and generating human language', 'AI for numbers only', 'No language processing', 'Random processing'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_5',
    text: 'What is Computer Vision?',
    answer: 'AI field for understanding visual information from images and videos.',
    options: ['AI field for understanding visual information from images and videos', 'AI for text only', 'No visual understanding', 'Random vision'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_6',
    text: 'What is BERT?',
    answer: 'Pre-trained transformer model for NLP tasks.',
    options: ['Pre-trained transformer model for NLP tasks', 'Simple neural network', 'No pre-training', 'Random model'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_7',
    text: 'What is GPT?',
    answer: 'Generative Pre-trained Transformer for language tasks.',
    options: ['Generative Pre-trained Transformer for language tasks', 'Simple text generator', 'No pre-training involved', 'Random transformer'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_8',
    text: 'What is Embedding?',
    answer: 'Low-dimensional representation of data.',
    options: ['Low-dimensional representation of data', 'High-dimensional only', 'No representation needed', 'Random embedding'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_9',
    text: 'What is Model Deployment?',
    answer: 'Process of making trained models available for use.',
    options: ['Process of making trained models available for use', 'Keep models training only', 'No deployment needed', 'Random deployment'],
    role: 'Full Stack Developer',
    skills: ['AI']
  },
  {
    id: 'ai_advanced_10',
    text: 'What is MLOps?',
    answer: 'DevOps practices applied to machine learning workflows.',
    options: ['DevOps practices applied to machine learning workflows', 'Traditional DevOps only', 'No MLOps needed', 'Random practices'],
    role: 'Full Stack Developer',
    skills: ['AI']
  }
];
