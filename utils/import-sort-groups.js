export const importSortGroups = [
  [
    // External libraries - React ecosystem
    '^react$',
    '^react-dom',
    '^react-router',
    '^react-',
    '^@react',

    // External libraries - Other frameworks/utilities
    '^(@[a-zA-Z])',
    '^formik$',
    '^yup$',
    '^moment$',
    '^axios$',
    '^swiper',
    '^legoland',
    '^reactstrap',

    // Internal - Actions
    '^actions/',
    '^context/actions',

    // Internal - API
    '^api/',
    '^api$',

    // Internal - Components
    '^App$',
    '^components/',

    // Internal - Constants (excluding type imports)
    '^(?!.*\\u0000).*constants.*$',
    '^(?!.*\\u0000)constants/',

    // Internal - Configuration
    '^.*config.*$',

    // Internal - Helpers/Utilities
    '^helpers/',
    '^helpers$',

    // Internal - Hooks & Context
    '^context$',
    '^context/',
    '^hooks/',
    '^.*\\/hooks\\/',

    // Internal - Assets/Static files
    '^assets/',

    // Styles
    '^.+\\.(css|scss)$',

    // Type imports (should be last)
    '^.*\\u0000$',
    '^(?!.*\\u0000).*(types).*$',
    '^(?!.*\\u0000)typings/',
  ],
];
