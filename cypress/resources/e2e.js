export const E2E_URL = 'https://www.globalsqa.com'

export const REUSABLE_NAVIGATION_ITEM = {
  // reusable-navigation-url-parts
  JS_PROTRACTOR: '/angularJs-protractor',
  REGISTRATION_LOGIN_EXAMPLE: '/registration-login-example/#',
  DEMO_SITE: '/demo-site',
}

export const NAVIGATION_ITEM = {
  // first layer
  HOME: {
    SELECTOR: '#menu-item-1513 > a',
    LINK: E2E_URL + '',
  },
  CHEATSHEETS: {
    SELECTOR: '#menu-item-6898 > a',
    LINK: E2E_URL + '/cheatsheets/',
  },
  FREE_BOOKS: {
    SELECTOR: '#menu-item-7128 > a',
    LINK: E2E_URL + '/free-ebooks/',
  },
  TESTERS_HUB: {
    SELECTOR: '#menu-item-2822 > a',
    LINK: E2E_URL + '/testers-hub/',
  },
  CONTACT_US: {
    SELECTOR: '#menu-item-1561 > a',
    LINK: E2E_URL + '/contact-us/',
  },
  // second layer
  FREE_MACHINE_LEARNING_EBOOKS: {
    SELECTOR: '#menu-item-7132 > a',
    LINK: E2E_URL + '/free-machine-learning-ebooks/',
  },
  FREE_DEEP_LEARNING_EBOOKS: {
    SELECTOR: '#menu-item-7130 > a',
    LINK: E2E_URL + '/free-deep-learning-ebooks/',
  },
  FREE_ELASTIC_SEARCH_EBOOKS: {
    SELECTOR: '#menu-item-7129 > a',
    LINK: E2E_URL + '/free-elasticsearch-ebooks/',
  },
  FREE_TENSORFLOW_EBOOKS: {
    SELECTOR: '#menu-item-7131 > a',
    LINK: E2E_URL + '/free-tensorflow-ebooks/',
  },

  DEMO_TESTING_SITE: {
    SELECTOR: '#menu-item-2823 > a',
    LINK: E2E_URL + '/demo-site/',
  },
  ANGULAR_JS_PROTRACTOR_PRACTICE_SITE: {
    SELECTOR: '#menu-item-2824 > a',
    LINK: E2E_URL + '/angularjs-protractor-practice-site/',
  },
  SAMPLE_PAGE_TEST: {
    SELECTOR: '#menu-item-2846 > a',
    LINK: E2E_URL + '/samplepagetest/',
  },
  FLASH_WEBSITE: {
    SELECTOR: '#menu-item-3796 > a',
    LINK: E2E_URL + '/flash-testing/website.htm',
  },

  // third layer
  MULTIFORM: {
    SELECTOR: '#menu-item-2838 > a',
    LINK:
      E2E_URL +
      REUSABLE_NAVIGATION_ITEM.JS_PROTRACTOR +
      '/Multiform/#/form/profile',
  },

  // TODO: to be completed in the feature with all third layer
}

export const SELECTORS = {
  // url
  LOGIN_PAGE:
    E2E_URL +
    REUSABLE_NAVIGATION_ITEM.JS_PROTRACTOR +
    REUSABLE_NAVIGATION_ITEM.REGISTRATION_LOGIN_EXAMPLE +
    '/login',
  LOGGED_PAGE:
    E2E_URL +
    REUSABLE_NAVIGATION_ITEM.JS_PROTRACTOR +
    REUSABLE_NAVIGATION_ITEM.REGISTRATION_LOGIN_EXAMPLE +
    '/',
  REGISTER_PAGE:
    E2E_URL +
    REUSABLE_NAVIGATION_ITEM.JS_PROTRACTOR +
    REUSABLE_NAVIGATION_ITEM.REGISTRATION_LOGIN_EXAMPLE +
    '/register',

  // login
  LOGIN_UERNAME_INPUT: '#username',
  LOGIN_PASSWORD_INPUT: '#password',
  LOGIN_BTN: 'Login',
  LOGIN_REDIRECT_TO_REGISTER_BTN: 'Register',
  LOGOUT_BTN: 'Logout',
  LOGGED_IN_MSG: "You're logged in!!",
  LOGIN_FAILED:
    'body > div.jumbotron > div > div > div.ng-binding.ng-scope.alert.alert-danger',
  LOGIN_FAILED_MSG: 'Username or password is incorrect',

  //   register
  REGISTER_FIRST_NAME_INPUT: '#firstName',
  REGISTER_LAST_NAME_INPUT: '#Text1',
  REGISTER_UERNAME_INPUT: '#username',
  REGISTER_PASSWORD_INPUT: '#password',
  REGISTER_BTN: 'Register',
  CANCEL_REGISTER_BTN: 'Cancel',
  REGISTER_WITH_SUCCESS_MSG: 'Registration successful',
  REGISTER_WITH_SUCCESS:
    'body > div.jumbotron > div > div > div.ng-binding.ng-scope.alert.alert-success',

  // navigation
  NAVBAR: '#header > div.header_container_holder > div',
  LOGO: '#logo',

  // cheatsheets
  CHEATSHEETS_TITLE:
    '#wrapper > div.content_bgr > div.full_container_page_title > div > div > div > div.page_heading > h1',
  DEMO_SITE_TITLE: '#post-2715 > div:nth-child(1) > div > div > h2',
  DEMO_LIST_OF_INFO: '#post-2715 > div:nth-child(1) > div > div > ul',
  DEMO_ANGULARJS_LINK: '#post-2715 > div.text_box > a',

  // angularjs practice
  ANGULARJS_PRACTICE_TITLE: '#post-2777 > div:nth-child(2) > div > div > h2',
  ANGULARJS_DEMO_LINK: '#post-2777 > div.text_box > a',
  ANGULARJS_LIST_OF_INFO: '#post-2777 > div:nth-child(2) > div > div > ul',

  // multiform
  MULTIFORM_TITLE: '#form-container > div > h2',
  MULTIFORM_NAME: '#form-views > div:nth-child(1) > input',
  MULTIFORM_EMAIL: '#form-views > div:nth-child(2) > input',
  MULTIFORM_STEPS_BTN: '#form-views > div.form-group.row.ng-scope > div > a',
  MULTIFORM_SUBMIT_BTN: '#form-views > div > button',
  MULTIFORM_PREVIEWR: 'body > div.container > div > div > div > pre',
  MULTIFORM_REDIRECT_HOME_LINK: 'body > div.row > div > div > p > a',
  MULTIFORM_THANKS_MSG: '#form-views > div > h3',
}

export const CHEATSHEETS_LINK_SELECTORS = {
  GIT: {
    NO: 1,
    LINK: '/git-cheat-sheet/',
  },
  VIM: {
    NO: 2,
    LINK: '/vim-cheat-sheet/',
  },
  SQL: {
    NO: 3,
    LINK: '/sql-cheat-sheet/',
  },
  PYTHON: {
    NO: 4,
    LINK: '/python-cheat-sheet/',
  },
  LINUX_BASH_SHELL: {
    NO: 5,
    LINK: '/linux-bash-shell-cheat-sheet/',
  },
  DVP: {
    NO: 6,
    LINK: '/dvp-cheat-sheet/',
  },
  PYSPARK: {
    NO: 7,
    LINK: '/pyspark-cheat-sheet/',
  },
  // TODO: to be completed in the feature with all links
}
