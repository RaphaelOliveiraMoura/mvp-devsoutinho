/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@devsoutinho/cms',
  '@devsoutinho/ui',
]);

module.exports = withPlugins([withTM], {
  future: {
    webpack5: true,
  },
  trailingSlash: true,
  images: {
    domains: ['unavatar.now.sh'],
  },
  async redirects() {
    const oldSite = [
      '001-como-lidar-de-uma-forma-mais-feliz-com-classes-css-condicionais-no-react-dicas-de-react',
      '002-como-i18n-multi-linguagem-em-uma-aplicacao-react-dicas-de-react',
      '003-como-automatizar-um-styleguide-em-projetos–dicas-de-react',
      'about',
      'alura-live-72-react-e-comunidade',
      'alura-live-pre-processadores',
      'angular-vs-react-hipsters-142',
      'archives',
      'assinaturas',
      'braziljs2018-entrevista-mario-souto',
      'categories',
      'como-compartilhar-seu-localhost-de-forma-simplificada-com-o-ngrok',
      'como-criar-um-projeto-com-flutter-hello-world',
      'como-integrar-rodar-o-flutter-no-vscode',
      'como-manipular-o-head-das-paginas-react-utilizando-o-react-helmet',
      'como-o-youtube-entrega-este-video-para-voce-or-nerdologia-tech',
      'como-preparar-uma-aplicacao-react-para-o-deploy-em-um-servidor-node',
      'como-rankear-bem-no-google-boas-praticas-de-seo',
      'conhecendo-o-flutter-e-uma-visao-do-desenvolvimento-mobile',
      'criando-componentes-css-com-o-padrao-bem',
      'debugando-projetos-nodejs-no-vscode',
      'entendendo-como-fazer-ajax-com-a-fetchapi',
      'eu-sou-o-dev-soutinho',
      'extendendo-o-css-com-javascript-e-magia-feat-houdini',
      'hipsters-72-por-tras-do-wordpress',
      'inputs-materializados-com-css',
      'js',
      'newsletter',
      'o-que-e-wordpress',
      'roteamento-no-react-com-os-poderes-do-react-router-v4',
      'stylus',
      'youtube-devsoutinho',
    ];
    const oldTags = [
      'ajax',
      'angular',
      'bem',
      'braziljs',
      'classnames',
      'cms',
      'como-a-web-funciona',
      'css',
      'debug',
      'deploy',
      'devsoutinho',
      'devtips',
      'dicas-de-react',
      'entrevista',
      'fetchapi',
      'flutter',
      'flutter-no-vscode',
      'front',
      'front-end',
      'get-started',
      'houdinicss',
      'html',
      'http',
      'i18n',
      'javascript',
      'js',
      'live',
      'mobile',
      'nerdologia',
      'ngrok',
      'node',
      'nodejs',
      'performance',
      'php',
      'podcast',
      'pre-processadores',
      'react',
      'react-native',
      'seo',
      'styleguide',
      'talk',
      'wordpress',
      'youtube',
    ];
    const redirects = [
      {
        source: '/go/youtube/',
        destination: 'https://youtube.com/DevSoutinho',
        permanent: true,
      },
      {
        source: '/go/comunidade/',
        destination: 'https://discord.gg/SpsBHQJeXb',
        permanent: true,
      },
      ...oldSite.map((item) => ({
        source: `/${item}/`,
        destination: `/${item}/index.html`,
        permanent: true,
      })),
      ...oldTags.map((item) => ({
        source: `/tags/${item}/`,
        destination: `/tags/${item}/index.html`,
        permanent: true,
      })),
    ];

    return redirects;
  },
});
