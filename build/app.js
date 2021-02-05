(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // src/data/play/play.json
  var require_play = __commonJS((exports, module) => {
    module.exports = {
      category: "play",
      items: [
        {
          title: "Scheme Dream",
          tags: "color generation, harmonics, patterns",
          description: "Scheme Dream is a tool to generate custom color palettes that are related by angles, to be able to define patterns that are harmonic in nature and more pleasing to the eye. Of course custom colors can also be put into any spectrum as well.",
          attachments: [],
          date_created: "1/1/2018",
          date_updated: "1/1/2018",
          demo: "/schemedream"
        },
        {
          title: "Spectrums",
          tags: "frequency, harmonics, patterns",
          description: "Spectrums is an experimental application for developing patterns of harmonic sound spectrums. You can set functional properties for generating a spectrum of frequencies, and then play it back for review. You can also see the frequency output for numerical reference. Eventually, you will be able to see the spectrum in a visual way for review, and also modify spectrums in a subtractive or additive way to see interference patterns. The purpose of the application is to become more familiarized with how patterns interact, and of course to come up with interesting sounds.",
          attachments: [],
          date_created: "1/1/2018",
          date_updated: "1/1/2018",
          demo: "/spectrums"
        },
        {
          title: "Edge",
          tags: "geometry, harmonics, 3D",
          description: "Edge is a small application to generate 2D or 3D layouts that are more easily defined harmonically. Currently there is limited functionality, to only be able to add primitive objects and basic modifiers. The novelty is to eventually be able to define related properties of objects or groups based on other properties, keeping their relationships in tandem to preserve harmony as things are changed.",
          attachments: [],
          date_created: "1/1/2017",
          date_updated: "1/1/2017",
          demo: "/edge"
        },
        {
          title: "DNA Helix",
          tags: "DNA, 3D",
          description: "This is a small demo to showcase a simple ThreeJS 3D double helix that moves as you scroll.",
          attachments: [],
          date_created: "1/1/2016",
          date_updated: "1/1/2016",
          demo: "/shared/dna/index.html"
        },
        {
          title: "Organic Image Mosaic",
          tags: "image gallery, mosaic, responsive",
          description: "Demonstrates organically laying out images of arbitrary size in a mosaic grid, that will animate into new positions as the screen or container is resized.",
          attachments: [],
          date_created: "1/1/2016",
          date_updated: "1/1/2016",
          demo: "https://codepen.io/rw3iss/pen/VpORWQ"
        }
      ]
    };
  });

  // src/data/work/freelance.json
  var require_freelance = __commonJS((exports, module) => {
    module.exports = {
      category: "freelance",
      items: [
        {
          title: "Opus Logica",
          key: "opuslogica",
          tags: "JavaScript, WebGL, React, Angular, Ruby on Rails",
          description: 'Retainer of freelance work for a few projects. Helped maintain OpusWorldWind project, an extension of 3D WebGL methods for the Nasa WorldWind library, for working with 3D objects on a map - <a href="https://github.com/opuslogica/OpusWorldWind">https://github.com/opuslogica/OpusWorldWind</a>. Also worked on a Ruby on Rails admin application for an iOS/Ionic app, to manage the data and reporting for the application that is helping Crohn\u2019s patients work with IoT data from devices.',
          url: "https://opuslogica.com",
          thumb: "opus_thumb.png",
          date_added: "9/24/2020"
        },
        {
          title: "One Night",
          key: "onenight",
          tags: "React, Laravel, iOS, responsive",
          description: "Full stack developer for a Laravel backend, React web client, and some iOS revisions, on a remote team of 5 people. Primarily doing refactoring, bug fixes, and new feature implementation, utilizing CircleCI, PHPUnit testing, Google DialogFlow/chatbot, Rollbar logging, Synxis/booking API syncing.",
          url: "https://onenight.com",
          thumb: "onenight_thumb.png",
          date_added: "11/20/2019"
        },
        {
          title: "KK & Jay",
          key: "kkandjay",
          tags: "React, node.js, Shopify, HTML5, CSS3, responsive",
          description: "Sole developer for fully responsive e-commerce React site with Express and Shopify backend.",
          url: "http://kkandjay.com",
          thumb: "kkandjay_thumb.png",
          date_added: "1/14/2018"
        },
        {
          title: "Ripe",
          key: "ripe",
          tags: "HTML5, CSS3, node.js, responsive",
          description: "Created an entirely new responsive, custom front end, and made modifications to the backend (node.js) to facilitate the management of the client job position/interview creation process, and also an end-user/job applicant process to submit video responses to the created interviews. All data is stored on AWS. Dev tool stack includes usage of ansible for automated packaging and deployment to S3, using DynamoDB for data storage.",
          url: "http://ripereference.com",
          thumb: "ripe_thumb.png",
          date_added: "7/4/2017"
        },
        {
          title: "Shackshare",
          key: "shackshare",
          tags: "HTML5, CSS3, Laravel, responsive",
          description: "Helped to create this custom Laravel application which serves as a sort of Airbnb for college students. I took over as lead developer and built the new responsive homepage, and am responsible for both the frontend and backend tasks.",
          url: "http://shackshare.com",
          thumb: "shackshare_thumb.png",
          date_added: "6/20/2017"
        },
        {
          title: "Kitmoda",
          key: "kitmoda",
          tags: "HTML5, CSS3, Laravel, responsive",
          description: "Created a completely responsive mosaic gallery in javascript that supports 1x1, 1x2, 2x1, and 2x2 grid elements that animate position according to window size in an organic way. The algorithm can take any arbitrary images and detect their optimal size ratios depending on their width and height. For a demo (currently without nice images as the original server is down), please see: https://codepen.io/rw3iss/pen/VpORWQ ",
          url: "http://kitmoda.com",
          thumb: "kitmoda_thumb.png",
          date_added: "6/1/2017"
        },
        {
          title: "Fabworx Custom Fabrication",
          key: "fabworx",
          tags: "HTML5, CSS3, Wordpress, PHP, responsive, ecommerce, Paypal",
          description: "Lead designer and developer for a simple Wordpress-based products and services site for custom fabricated car parts.",
          url: "http://fabworx.org",
          thumb: "fabworx_thumb.png",
          date_added: "9/10/2016"
        },
        {
          title: "Shindig",
          key: "shindig",
          tags: "HTML5, CSS3, Wordpress, PHP, responsive",
          description: "Fully responsive WordPress site showcasing case studies with media, a blog, and upcoming events. Functioned as lead developer for both the frontend and backend for a full frontend rebuild, and some minor backend refactoring to serve event, case study, and blog posts to the application.",
          url: "http://shindig.com",
          thumb: "shindig_thumb.png",
          date_added: "8/27/2016"
        },
        {
          title: "Revolve Robotics",
          key: "revolve",
          tags: "HTML5, CSS3, Wordpress, PHP, responsive",
          description: "WordPress site where I designed and built a responsive homepage and landing pages. It utilizes lazy-loading of background videos and animation, uses HTML5 video with custom player controls, and is 100% responsive. I also developed a vanilla JS plugin called BackgroundCover that would allow me to keep an arbitrary piece of content (div, image, video, iframe) as a background that would always ensure it covers the entire width and height of the container, while maintaining original aspect ratio: https://github.com/rw3iss/BackgroundCover",
          url: "https://revolverobotics.com",
          thumb: "revolve_thumb.png",
          date_added: "8/12/2016"
        },
        {
          title: "Tuebora",
          key: "tuebora",
          tags: "HTML5, CSS3, responsive",
          description: "Helped design and implement new responsive landing pages for a suite of various user access management products.",
          url: "http://tuebora.com",
          thumb: "tuebora_thumb.png",
          date_added: "8/1/2016"
        },
        {
          title: "Rowan University",
          key: "rowan",
          tags: "Drupal, PHP",
          description: "Integrated the SimpleSAMLphp module with a Drupal backend to communicate SSO/single-sign-on with a Canvas LMS (learning management system) remote service provider. Ongoing maintenance of Drupal system and integration of new solutions and projects for the school.",
          url: "http://rowan.edu",
          thumb: "rowan_thumb.png",
          date_added: "11/14/2015"
        },
        {
          title: "Internet.org",
          key: "internet",
          tags: "HTML5, CSS3, Laravel, Amazon AWS, EC2, CloudFront, Bootstrap",
          description: "Lead PHP developer for a Facebook campaign helping to bring internet to the rest of the world. I was responsible for making the site multilingual. Site is built on Laravel 4 utilizing Amazon S3 web services. I built a custom plugin to manage the localization from the remote Amazon S3 repository, caching locally. I also built a custom CMS in Bootstrap to manage and update the available language files for each supported locale. Utilizing composer, grunt and bower as build tools.",
          url: "https://internet.org",
          thumb: "internet_thumb.png",
          date_added: "3/21/2015"
        },
        {
          title: "YiHa",
          key: "yiha",
          tags: "HTML5, CSS3, Wordpress, responsive",
          description: "Startup site for beta application signup and publicity. Mailchimp integration for subscription list. Kickofflabs.com integration for support. Backend in Wordpress with a service layer for storing signups in a MySQL database, and a small CMS so administrators can see those signups.",
          url: "http://yiha.me",
          thumb: "yiha_thumb.png",
          date_added: "2/1/2015"
        },
        {
          title: "DeCaro Trucking",
          key: "decaro",
          tags: "HTML5, CSS3, Angular.js, PHP, Bootstrap, responsive",
          description: "Lead developer, architect, and designer for a local application that is written in PHP and services an Angular.js frontend which manages trucking orders and deliveries, and can be used to organize and create invoices as well as exported PDFs. The local application is cross-platform (built with PHP, served from a local server, wrapped in Qt/C++, using WebKit and pointing to the PHP site), which automatically syncs with a \u201Cmaster\u201D application on the cloud (where clients can submit orders through), to maximize available redundancy.",
          thumb: "decaro_thumb.png",
          date_added: "11/1/2014"
        },
        {
          title: "OldSpice Hairstimonials",
          key: "oldspice",
          tags: "Angular.js, Laravel, Amazon EC2, S3, RDS, Route53, CloudFront, PHP APC, Bootstrap",
          description: "Lead backend developer and server administrator for a high-traffic (about 25k users a day) small video site. Responsibilities included working with Amazon EC2, S3, RDS, Route53, CloudFront serving of data, server optimization of Nginx and PHP APC. The backend was coded custom to be highly optimized, and includes a custom CMS (written in PHP,  Angular.js, and Bootstrap) for managing all video data and site configuration, with a reporting infrastructure and service interface to track how videos were being watched, with filtering and .csv export abilities. I also helped with some of the public frontend components.",
          thumb: "oldspice_thumb.png",
          date_added: "3/1/2014"
        },
        {
          title: "True Renaissance",
          key: "truerenaissance",
          tags: "Wordpress, Paypal",
          description: "Lead developer and server administrator for a Wordpress-based site dedicated to Renaissance artwork. Includes social integration with LinkedIn, Pinterest, and Facebook, and also custom PayPal payments.",
          url: "http://truerenaissance.org",
          thumb: "truerenaissance_thumb.png",
          date_added: "1/1/2014"
        },
        {
          title: "Cooper Union",
          key: "cooper",
          tags: "d3 charts",
          description: "Frontend effort to create a virtual timeline of events with a searchable interface and custom navigation zoom box where you can hover to different sections of the timeline, with the ability to expand items. Data is pulled dynamically from a remote Google Docs API.",
          url: "http://cooper.edu",
          thumb: "cooper_thumb.png",
          date_added: "10/1/2013"
        },
        {
          title: "ESPN Fantasy Football Toolkit",
          key: "espn",
          tags: "ASP.NET, MySQL",
          description: "Lead backend developer demonstrating competence in architectural principles for a high stream of users who use the toolkit to manage their fantasy leagues online, vote for drafting dates, and follow different 'grades' of player progress. Written in .NET and MySQL, in conjunction with two other frontend developers. Integration with ESPN's webservices and player data.",
          url: "http://games.espn.go.com/ffl/fantasyfootballtoolkit",
          thumb: "espn_thumb.png",
          date_added: "7/1/2013"
        },
        {
          title: "Nabisco Party in Play",
          key: "nabisco",
          tags: "ASP.NET, responsive",
          description: "Lead frontend and backend developer for a fully responsive superbowl party site made wth HTML5, jQuery, Modernizr, compatible to IE7. Small backend is coded in ASP.NET/C# and uses Nabisco webservices to retrieve recipes and display them in dynamic carousels and individual pages. Social integration with Facebook, Twitter and Pinterest.",
          url: "http://nabisco.stayhonest.com",
          thumb: "nabisco_thumb.png",
          date_added: "1/1/2013"
        },
        {
          title: "AthletesTouch",
          key: "athletestouch",
          tags: "Wordpress, PHP, bbPress, GroupSpaces, Authorize.net, ecommerce, Paypal",
          description: "Lead developer and server administrator for Wordpress-based athlete business meetup community. Includes Wordpress customization, responsive design elements for mobile and tablet, and also integration with third-party services such as Groupspaces, Authorize.net (defunkt), Paypal API, including implementation of SSL and custom subscription payments via API.",
          url: "http://athletestouch.com",
          thumb: "athletestouch_thumb.png",
          date_added: "1/1/2013"
        },
        {
          title: "Riverbend Madison",
          key: "riverbend",
          tags: "Appfolio",
          description: "Frontend developer for a simple website to showcase rental properties around areas of California.",
          url: "http://riverbendmadison.com",
          thumb: "riverbend_thumb.png",
          date_added: "1/1/2013"
        },
        {
          title: "Wild Rhino Films",
          key: "wildrhino",
          tags: "Wordpress, PHP",
          description: "Custom site developed and partially designed by myself, to display my brother\u2019s documentarian film work.",
          url: "http://www.wildrhinofilms.com",
          thumb: "wildrhino_thumb.png",
          date_added: "12/1/2012"
        },
        {
          title: "Hotmobile",
          key: "hotmobile",
          tags: "Wordpress",
          description: 'Hotmobile is social "Pinterest for men" for users to showcase and share media revolving around alluring subject matter.',
          url: "http://hotmobile.com",
          thumb: "hotmobile_thumb.png",
          date_added: "11/1/2012"
        },
        {
          title: "Vitacare",
          key: "vitacare",
          tags: "backend, PHP, Drugstore",
          description: "Implemented the shopping cart management backend with third-party API checkout from www.drugstore.com.",
          url: "http://www.vitacareworld.com",
          thumb: "vitacare_thumb.png",
          date_added: "9/1/2012"
        },
        {
          title: "Ouidad",
          key: "ouidad",
          tags: "PHP, Facebook",
          description: "Created three interactive Facebook pages where users can select custom beauty preferences and be referred to the main website, join in on content give-aways, and subscribe to a newsletter. Integration with the Facebook API to require that users like the page before being able to participate.",
          url: "http://www.ouidad.com",
          thumb: "ouidad_thumb.png",
          date_added: "7/1/2012"
        },
        {
          title: "Finding Home",
          key: "findinghome",
          tags: "single page application",
          description: "Lead designer and developer for a site showcasing photography, artwork, and stories related to the homeless around Atlantic City, NJ. Features \u201Csingle-page\u201D navigation, carousels, image galleries, and more.",
          url: "http://findinghome.ryanweiss.net",
          thumb: "findinghome_thumb.png",
          date_added: "6/1/2012"
        },
        {
          title: "HulaFrog",
          key: "hulafrgo",
          tags: "ASP.NET",
          description: "Helped to develop some modules for the application involving user event registration, and management of local events.",
          url: "http://hulafrog.com",
          thumb: "hulafrog_thumb.png",
          date_added: "4/1/2012"
        },
        {
          title: "Nature's Boost",
          key: "naturesboost",
          tags: "PHP, Paypal",
          description: "Lead designer and developer to display a single product geared towards all-natural energy increase. Includes online ordering through PayPal and contact abilities.",
          url: "http://naturesboostenergy.com",
          thumb: "naturesboost_thumb.png",
          date_added: "12/1/2011"
        }
      ]
    };
  });

  // src/data/work/fulltime.json
  var require_fulltime = __commonJS((exports, module) => {
    module.exports = {
      category: "fulltime",
      items: [
        {
          title: "EnvoyAI",
          key: "envoyai",
          date_from: "8/1/2017",
          date_to: "8/1/2018",
          description: "First hire and lead developer for a healthcare startup out of Cambridge, MA. Designed and implemented entire developer portal, www.portal.envoyai.com, front-end and back-end, utilising node.js with Okta for user management, AWS integrations (EC2, ECS, CodePipeline, CodeCommit, CodeDeploy, Lambda, Fargate, Aurora, S3, CloudWatch, CloudFront, IAM), REST API, and a React SPA client. Developers can manage and test custom dockerized algorithms (ie. AI \u201Cmachines\u201D) and manage versioned deployments of each. These machines can then be utilised in a hospital setting with input data, ie. DICOM files, put through the algorithms in order to retrieve a computed result. Our system manages all the communications, data transfer, request management, redundancies, logging and statistics.",
          url: "http://envoyai.com",
          thumb: "envoyai_thumb.png"
        },
        {
          title: "Logibrush Studios",
          key: "logicbrush",
          date_from: "10/1/2016",
          date_to: "5/1/2017",
          description: "Helping out on a variety of full-stack PHP projects, so far including urbanturf.com, devines.com, and kevah.org, jonwye.com, transientprotectiondesign.com, leftchannel.com, and christianosgifts.com. Working with WordPress, Laravel, ExpressionEngine, Magento, Silverstripe, and a variety of frontend technologies.",
          url: "http://logicbrush.com",
          thumb: "logicbrush_thumb.png"
        },
        {
          title: "More Perfect Union",
          key: "moreperfectunion",
          date_from: "12/1/2015",
          date_to: "4/1/2016",
          description: "Lead developer for \u200Bhttps://thechisel.com\u200B, written in node.js, express.js, ember.js, LoopBack, MongoDB, and MySQL. Chisel is a  website for political advocates to collaborate on reformation proposals that can be reviewed and revised by a panel of experts,  and eventually elevated to proper political avenues to help induce change.  ",
          url: "http://thechisel.com",
          thumb: "chisel_thumb.png"
        },
        {
          title: "Huge, Inc.",
          key: "huge",
          date_from: "12/1/2014",
          date_to: "5/1/2015",
          description: "ASP.NET and full\xADstack developer for the \u200Bwww.hugeinc.com\u200B website, maintaining the codebase, optimizations, working with  SiteCore CMS. Diagnosing issues between Dev, QA, and Production environments, migrating database from SQL Server to  Cassandra. Using Jenkins and Chef as build and automation/continuous integration tools for deployment.  \xADPracticed Scrum and Agile methodologies day\xADto\xADday, working with a team of about 10 people, including two other backend  developers.",
          url: "http://hugeinc.com",
          thumb: "huge_thumb.png"
        },
        {
          title: "Publicis Modem",
          key: "publicis",
          date_from: "6/1/2012",
          date_to: "2/1/2013",
          description: "Lead ASP.NET backend developer for Garnier USA and Garnier mini\xADsites, allowing for user recommendations, newsletter  subscriptions, tracking, giveaway requests, and review submissions with photos. Worked on a team of about 5 developers, 3 backend and two frontend. I acted as the mentor for the backend developers and  generally architected all of the solutions.",
          url: "http://publicisna.com",
          thumb: "publicis_thumb.png"
        },
        {
          title: "Elephant Ventures",
          key: "elephantventures",
          date_from: "8/1/2011",
          date_to: "7/1/2012",
          description: "15 person firm, practicing Scrum and Agile methodologies, deployment automation, implementing best practices. Lead developer for www.pitneybowesmeter.com\u200B (PHP, jQuery), handling e-commerce shopping cart experience on the backend, security and session management, database design, and also frontend jQuery implementation. Interaction with third-party SEO services: ClickTale for recording user's movements and actions, Google tracking, analytics, and adwords. PHP backend developer for GroupSlots, an iPhone app prototype of a social layer to slot machine playing through the use of mobile devices. Users can group up using Bump, Facebook, and other services on their phones, and choose a prize/goal they want to work toward such as a free dinner or Xbox. Users are notified of player/group wins via push notifications. Lead developer for \u200Bwww.generalsnus.com\u200B (ASP.NET/C#) refactoring, integrating and extending enterprise\xADlevel Orchard CMS  into the site\u2019s existing framework.",
          url: "http://elephantventures.com",
          thumb: "elephant_thumb.png"
        },
        {
          title: "R/GA Interactive",
          key: "rga",
          date_from: "5/1/2007",
          date_to: "8/1/2011",
          description: `ASP.NET backend developer for the "Agency of the Decade". Worked on the following sites: \u200Bwww.rga.com\u200B, www.smallbusiness.verizon.com,\u200B \u200Bwww.barnesandnoble.com\u200B, \u200Bwww.loreal.com\u200B. Verizon Small Business: Implemented the entire backend for the \u2018Bundle Builder\u2019, a tool to allow business clients to customize  service options and deals, as well as catalogue and persist the data. Lead developer for the Internal Reporting system and internal company website/intranet. Consists of architecting reporting  scenarios and solutions, creating independent systems (e.g. automated emailing daemon), RDBMS database management and  administration, blackberry\xADaccessible web pages, Excel API's and worksheet generation, and much more. Utilizing Entity Framework and WCF to handle data abstractions and communicate with server\xADside webservices. Work takes place in small groups with strict deadlines and includes formulating architectural solutions and implementing  them per client requirements. Employing ASP.NET MVC3 principles and an inherent understanding of design patterns. Experience with custom request and response handling, RSS feeds, social network interfacing with third\xADparty API's.`,
          url: "http://rga.com",
          thumb: "rga_thumb.png"
        },
        {
          title: "MyDorp",
          key: "mydorp",
          date_from: "9/1/2005",
          date_to: "8/1/2007",
          description: "Lead developer for an earlier implementation of a web operating system and dynamic service creation /hosting community, ie. something akin to the Cloud for a myriad of languages and \u201Capp\u201D implementations on the web. Unique implementation of a credit\xADbased e\xADcommerce system and user\xADbased shared resources worth real monetary value, relative to the amount of processing power the app used. Technologies used: ASP.NET, Java, HTML/CSS/JavaScript, writing custom Eclipse plugins to bootstrap client  application/module development. Demonstrates an understanding of advanced ASP.NET principles and various architectural patterns: tiered system, producer/consumer model, factory pattern, strategy pattern, service layers as facades to the business\xADtier, message consumption/passing, state machines, some graph strategies, Spring.NET\xADlike dynamic service creation/dependency injection."
        },
        {
          title: "Rutgers University",
          key: "rutgers",
          date_from: "1/1/2005",
          date_to: "5/1/2007",
          description: "Lead developer for www.livingston.com, working with PHP and MySQL, helping to maintain and create various new and existing user pages with dynamic data and administrative functionality, working one\xADon\xADone with the dean of Livingston  College.",
          url: "http://rutgers.edu",
          thumb: "rutgers_thumb.png"
        }
      ]
    };
  });

  // src/data/skills/skills.json
  var require_skills = __commonJS((exports, module) => {
    module.exports = {
      frontend: "JavaScript, jQuery, jQuery Mobile, React, Preact, Vue, Angular.js, Knockout.js, Backbone.js, Underscore.js, Mithril.js, ember.js, lodash, AMDs, require.js, CommonJS, Offline apps, Service Workers, JSON, AJAX, HTML5, XHTML, DHTML, CSS3, Sass, Compass, CoffeeScript, sprites, Canvas, SVG, Meteor.js, Bootstrap, Foundation, Skeleton, Mustache, Handlebars.js, Jade, Adobe AIR, Socket.io, d3.js, Marko templates, Raphael.js, moment.js, gulp, Phantom.js, Modernizr, normalize.css, MooTools, browserify, bower, Grunt build processes/concatenation+minification, AMPs (accelerated mobile pages), PWAs and service workers, flexbox model, CSS grid, Jasmine, Mocha+Chai unit testing, Superagent/Supertest HTTP testing, HTTP AppCache, offline applications, IsMobile, ScrollTrigger, Vimeo, Phantom.js",
      backend: {
        JavaScript: "Express.js, Meteor.js, koa.js, strapi, LoopBack, lowdb, MongoDB, Electron, passport authentication, JWT auth, OAuth 2.0, websockets, Socket.io, Mocha+Chai unit testing, baucis REST module, OAuth 2.0",
        PHP: "Laravel 4, Laravel plugins, Artisan CLI tools, CodeIgniter, Drupal, WordPress, WordPress plugins and theme development, DORM, Doctrine, ActiveRecord, integration of SimpleSAML single sign on, custom CMS design and implementation, PDO, composer, JWT auth, OAuth 2.0, messaging queues, PHPUnit unit testing, TDD/test-driven development, dependency injection, Orno IoC/Dependency Injection, migrations",
        ".NET": "C#, MVC 2-4, CQRS architecture, SiteCore, Entity Framework, Spring.NET IoC/DI, ADO.NET, LINQ, Doctrine, dapper, Xamarin/Mono Cross-Platform apps + PCLs/portable class libraries, OrchardCMS, Jenkins, dependency injection, migrations, nuget package management, PowerShell scripts, Windows Azure, custom Visual Studio plugins, Nant build tool",
        Java: "Kotlin",
        Python: "",
        Databases: "SQL, MySQL, T-SQL, PostgreSQL, PostGIS, SQLite, CouchDB, MongoDB, DynamoDB, memcached, redis, Doctrine, dapper, migrations, proper indexing optimization and normalization techniques, familiarity with sharding and replication practices",
        Desktop: "Adobe AIR, Qt++, C++, Xamarin/Mono, Electron",
        Mobile: "XCode, Xamarin, PhoneGap",
        Concepts: "",
        Misc: "Golang, Python, Ruby, CMS design and implementation, HTTP AppCache logistics/offline applications, Git, setting up personal git servers, Subversion, PhoneGap/Cordova, regex, SSL certificate security, build management with CHEF and Jenkins, SEO, e-commerce experience, web services (REST and SOAP), AJAX, JSON, XML, UML, PostGIS, Vector map tile servers, TopoJSON, CartoDB, Vagrant, nginx, Apache, LAMP/MEAN, Amazon EC2, RabbitMQ and message queuing, Tomcat, Java, UNIX/Linux Server administration and optimization, Nagios, Ant, Nant, Unity Engine/UnityScript, Cocos2D, messaging queues for distributed programming, Agile practices, SCRUM, TDD/test-driven development, migrations, design patterns"
      },
      services: {
        AWS: "EC2, ECS, Lambda, S3, DynamoDB, Aurora RDS, CloudFront, CodePipeline, CodeDeploy, CodeCommit, CloudFront, ELBs, CloudWatch, VPCs, Route 53, IAM, EBS, Beanstalk, Fargate",
        Google: "AdWords, DoubleClick, Analytics, Maps, Weather, DialogFlow chatbot",
        Other: "Okta, Mapbox, Weather, Facebook Graph, Twitter, Radian6, Paypal, Authorize.net, UserVoice, Gravatar, ShareThis, TypeKit, MailChimp+Mandrill, ClickTale, intercom.io, KickOffLabs, Route53, Sizmek, Shopify, Rollbar"
      },
      devtools: "Docker, CircleCI, Webpack, Ansible, GitLab, Composer, Grunt, npm, bower, Yeoman, gulp, nuget, bash scripts, UML, flowcharts, broccoli, Phantom.js, Chef, tmux, PowerShell, Gradle"
    };
  });

  // src/data/work/repositories.json
  var require_repositories = __commonJS((exports, module) => {
    module.exports = {
      category: "repositories",
      items: [
        {
          title: "gow",
          key: "gow",
          tags: "Go, Golang, watcher, builder, runner",
          description: "Very barebones library for watching for file changes, and running Go rebuilder.",
          url: "https://github.com",
          thumb: "todo.png",
          date_added: "10/19/2020"
        }
      ]
    };
  });

  // src/data/db.js
  var require_db = __commonJS((exports, module) => {
    var play = require_play();
    var freelance = require_freelance();
    var fulltime = require_fulltime();
    var skills = require_skills();
    var repositories = require_repositories();
    function db5() {
      this.init = function() {
      };
      this.getItem = function(key) {
        for (item of freelance.items) {
          if (item.key == key) {
            return item;
          }
        }
        for (item of play.items) {
          if (item.key == key) {
            return item;
          }
        }
        for (item of fulltime.items) {
          if (item.key == key) {
            return item;
          }
        }
        for (item of repositories.items) {
          if (item.key == key) {
            return item;
          }
        }
      };
      this.getLatest = function() {
        var items = _combineItems(freelance, play);
        items = items.slice(0, 12);
        return items;
      };
      this.getFreelance = function(sortBy) {
        return freelance.items;
      };
      this.getFulltime = function(sortBy) {
        return fulltime.items;
      };
      this.getPlay = function(sortBy) {
        return play.items;
      };
      this.getSkills = function() {
        return skills;
      };
      this.getRepositories = function(sortBy) {
        return repositories.items;
      };
      this.search = function(string) {
        return null;
      };
    }
    function _combineItems(catA, catB) {
      var result = [];
      for (var i2 = 0; i2 < catA.items.length; i2++) {
        var item2 = catA.items[i2];
        item2.category = catA.category;
        result.push(item2);
      }
      for (var i2 = 0; i2 < catB.items.length; i2++) {
        var item2 = catB.items[i2];
        item2.category = catB.category;
        result.push(item2);
      }
      return result;
    }
    module.exports = new db5();
  });

  // node_modules/dateformat/lib/dateformat.js
  var require_dateformat = __commonJS((exports, module) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    (function(global) {
      var _arguments = arguments;
      var dateFormat2 = function() {
        var token = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LlopSZWN]|"[^"]*"|'[^']*'/g;
        var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
        var timezoneClip = /[^-+\dA-Z]/g;
        return function(date, mask, utc, gmt) {
          if (_arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
            mask = date;
            date = void 0;
          }
          date = date || date === 0 ? date : new Date();
          if (!(date instanceof Date)) {
            date = new Date(date);
          }
          if (isNaN(date)) {
            throw TypeError("Invalid date");
          }
          mask = String(dateFormat2.masks[mask] || mask || dateFormat2.masks["default"]);
          var maskSlice = mask.slice(0, 4);
          if (maskSlice === "UTC:" || maskSlice === "GMT:") {
            mask = mask.slice(4);
            utc = true;
            if (maskSlice === "GMT:") {
              gmt = true;
            }
          }
          var _2 = function _3() {
            return utc ? "getUTC" : "get";
          };
          var _d = function d2() {
            return date[_2() + "Date"]();
          };
          var D2 = function D3() {
            return date[_2() + "Day"]();
          };
          var _m = function m3() {
            return date[_2() + "Month"]();
          };
          var y2 = function y3() {
            return date[_2() + "FullYear"]();
          };
          var _H = function H2() {
            return date[_2() + "Hours"]();
          };
          var _M = function M2() {
            return date[_2() + "Minutes"]();
          };
          var _s = function s2() {
            return date[_2() + "Seconds"]();
          };
          var _L = function L2() {
            return date[_2() + "Milliseconds"]();
          };
          var _o = function o2() {
            return utc ? 0 : date.getTimezoneOffset();
          };
          var _W = function W() {
            return getWeek(date);
          };
          var _N = function N2() {
            return getDayOfWeek(date);
          };
          var flags = {d: function d2() {
            return _d();
          }, dd: function dd() {
            return pad(_d());
          }, ddd: function ddd() {
            return dateFormat2.i18n.dayNames[D2()];
          }, DDD: function DDD() {
            return getDayName({y: y2(), m: _m(), D: D2(), _: _2(), dayName: dateFormat2.i18n.dayNames[D2()], short: true});
          }, dddd: function dddd() {
            return dateFormat2.i18n.dayNames[D2() + 7];
          }, DDDD: function DDDD() {
            return getDayName({y: y2(), m: _m(), D: D2(), _: _2(), dayName: dateFormat2.i18n.dayNames[D2() + 7]});
          }, m: function m3() {
            return _m() + 1;
          }, mm: function mm() {
            return pad(_m() + 1);
          }, mmm: function mmm() {
            return dateFormat2.i18n.monthNames[_m()];
          }, mmmm: function mmmm() {
            return dateFormat2.i18n.monthNames[_m() + 12];
          }, yy: function yy() {
            return String(y2()).slice(2);
          }, yyyy: function yyyy() {
            return pad(y2(), 4);
          }, h: function h2() {
            return _H() % 12 || 12;
          }, hh: function hh() {
            return pad(_H() % 12 || 12);
          }, H: function H2() {
            return _H();
          }, HH: function HH() {
            return pad(_H());
          }, M: function M2() {
            return _M();
          }, MM: function MM() {
            return pad(_M());
          }, s: function s2() {
            return _s();
          }, ss: function ss() {
            return pad(_s());
          }, l: function l2() {
            return pad(_L(), 3);
          }, L: function L2() {
            return pad(Math.floor(_L() / 10));
          }, t: function t2() {
            return _H() < 12 ? dateFormat2.i18n.timeNames[0] : dateFormat2.i18n.timeNames[1];
          }, tt: function tt() {
            return _H() < 12 ? dateFormat2.i18n.timeNames[2] : dateFormat2.i18n.timeNames[3];
          }, T: function T2() {
            return _H() < 12 ? dateFormat2.i18n.timeNames[4] : dateFormat2.i18n.timeNames[5];
          }, TT: function TT() {
            return _H() < 12 ? dateFormat2.i18n.timeNames[6] : dateFormat2.i18n.timeNames[7];
          }, Z: function Z() {
            return gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, "").replace(/GMT\+0000/g, "UTC");
          }, o: function o2() {
            return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60) * 100 + Math.abs(_o()) % 60, 4);
          }, p: function p2() {
            return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60), 2) + ":" + pad(Math.floor(Math.abs(_o()) % 60), 2);
          }, S: function S2() {
            return ["th", "st", "nd", "rd"][_d() % 10 > 3 ? 0 : (_d() % 100 - _d() % 10 != 10) * _d() % 10];
          }, W: function W() {
            return _W();
          }, N: function N2() {
            return _N();
          }};
          return mask.replace(token, function(match) {
            if (match in flags) {
              return flags[match]();
            }
            return match.slice(1, match.length - 1);
          });
        };
      }();
      dateFormat2.masks = {default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", paddedShortDate: "mm/dd/yyyy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"};
      dateFormat2.i18n = {dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]};
      var pad = function pad2(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
          val = "0" + val;
        }
        return val;
      };
      var getDayName = function getDayName2(_ref) {
        var y2 = _ref.y, m3 = _ref.m, D2 = _ref.D, _2 = _ref._, dayName = _ref.dayName, _ref$short = _ref["short"], _short = _ref$short === void 0 ? false : _ref$short;
        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(yesterday[_2 + "Date"]() - 1);
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow[_2 + "Date"]() + 1);
        var today_D = function today_D2() {
          return today[_2 + "Day"]();
        };
        var today_m = function today_m2() {
          return today[_2 + "Month"]();
        };
        var today_y = function today_y2() {
          return today[_2 + "FullYear"]();
        };
        var yesterday_D = function yesterday_D2() {
          return yesterday[_2 + "Day"]();
        };
        var yesterday_m = function yesterday_m2() {
          return yesterday[_2 + "Month"]();
        };
        var yesterday_y = function yesterday_y2() {
          return yesterday[_2 + "FullYear"]();
        };
        var tomorrow_D = function tomorrow_D2() {
          return tomorrow[_2 + "Day"]();
        };
        var tomorrow_m = function tomorrow_m2() {
          return tomorrow[_2 + "Month"]();
        };
        var tomorrow_y = function tomorrow_y2() {
          return tomorrow[_2 + "FullYear"]();
        };
        if (today_y() === y2 && today_m() === m3 && today_D() === D2) {
          return _short ? "Tdy" : "Today";
        } else if (yesterday_y() === y2 && yesterday_m() === m3 && yesterday_D() === D2) {
          return _short ? "Ysd" : "Yesterday";
        } else if (tomorrow_y() === y2 && tomorrow_m() === m3 && tomorrow_D() === D2) {
          return _short ? "Tmw" : "Tomorrow";
        }
        return dayName;
      };
      var getWeek = function getWeek2(date) {
        var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
        var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
        firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
        var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
        targetThursday.setHours(targetThursday.getHours() - ds);
        var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
        return 1 + Math.floor(weekDiff);
      };
      var getDayOfWeek = function getDayOfWeek2(date) {
        var dow = date.getDay();
        if (dow === 0) {
          dow = 7;
        }
        return dow;
      };
      var kindOf = function kindOf2(val) {
        if (val === null) {
          return "null";
        }
        if (val === void 0) {
          return "undefined";
        }
        if (_typeof(val) !== "object") {
          return _typeof(val);
        }
        if (Array.isArray(val)) {
          return "array";
        }
        return {}.toString.call(val).slice(8, -1).toLowerCase();
      };
      if (typeof define === "function" && define.amd) {
        define(function() {
          return dateFormat2;
        });
      } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
        module.exports = dateFormat2;
      } else {
        global.dateFormat = dateFormat2;
      }
    })(void 0);
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function v(n2, l2, u2) {
    var i2, t2, o2, r2 = arguments, f2 = {};
    for (o2 in l2)
      o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
    if (arguments.length > 3)
      for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
        u2.push(r2[o2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
      for (o2 in n2.defaultProps)
        f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
    return h(n2, f2, i2, t2, null);
  }
  function h(l2, u2, i2, t2, o2) {
    var r2 = {type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n.__v : o2};
    return n.vnode != null && n.vnode(r2), r2;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _(n2, l2) {
    if (l2 == null)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null)
        return u2.__e;
    return typeof n2.type == "function" ? _(n2) : null;
  }
  function w(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return w(n2);
    }
  }
  function k(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
  }
  function g() {
    for (var n2; g.__r = u.length; )
      n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s({}, t2)).__v = t2.__v + 1, $(r2, t2, i2, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? _(t2) : o2, t2.__h), j(u2, t2), t2.__e != o2 && w(t2)));
      });
  }
  function m(n2, l2, u2, i2, t2, o2, r2, c2, s2, v2) {
    var y2, d2, w2, k2, g2, m3, x3, P2 = i2 && i2.__k || e, C2 = P2.length;
    for (s2 == f && (s2 = r2 != null ? r2[0] : C2 ? _(i2, 0) : null), u2.__k = [], y2 = 0; y2 < l2.length; y2++)
      if ((k2 = u2.__k[y2] = (k2 = l2[y2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? h(null, k2, null, null, k2) : Array.isArray(k2) ? h(p, {children: k2}, null, null, null) : k2.__b > 0 ? h(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (w2 = P2[y2]) === null || w2 && k2.key == w2.key && k2.type === w2.type)
          P2[y2] = void 0;
        else
          for (d2 = 0; d2 < C2; d2++) {
            if ((w2 = P2[d2]) && k2.key == w2.key && k2.type === w2.type) {
              P2[d2] = void 0;
              break;
            }
            w2 = null;
          }
        $(n2, k2, w2 = w2 || f, t2, o2, r2, c2, s2, v2), g2 = k2.__e, (d2 = k2.ref) && w2.ref != d2 && (x3 || (x3 = []), w2.ref && x3.push(w2.ref, null, k2), x3.push(d2, k2.__c || g2, k2)), g2 != null ? (m3 == null && (m3 = g2), typeof k2.type == "function" && k2.__k != null && k2.__k === w2.__k ? k2.__d = s2 = b(k2, s2, n2) : s2 = A(n2, k2, w2, P2, r2, g2, s2), v2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && w2.__e == s2 && s2.parentNode != n2 && (s2 = _(w2));
      }
    if (u2.__e = m3, r2 != null && typeof u2.type != "function")
      for (y2 = r2.length; y2--; )
        r2[y2] != null && a(r2[y2]);
    for (y2 = C2; y2--; )
      P2[y2] != null && (typeof u2.type == "function" && P2[y2].__e != null && P2[y2].__e == u2.__d && (u2.__d = _(i2, y2 + 1)), I(P2[y2], P2[y2]));
    if (x3)
      for (y2 = 0; y2 < x3.length; y2++)
        H(x3[y2], x3[++y2], x3[++y2]);
  }
  function b(n2, l2, u2) {
    var i2, t2;
    for (i2 = 0; i2 < n2.__k.length; i2++)
      (t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? b(t2, l2, u2) : A(u2, t2, t2, n2.__k, null, t2.__e, l2));
    return l2;
  }
  function x(n2, l2) {
    return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      x(n3, l2);
    }) : l2.push(n2)), l2;
  }
  function A(n2, l2, u2, i2, t2, o2, r2) {
    var f2, e2, c2;
    if (l2.__d !== void 0)
      f2 = l2.__d, l2.__d = void 0;
    else if (t2 == u2 || o2 != r2 || o2.parentNode == null)
      n:
        if (r2 == null || r2.parentNode !== n2)
          n2.appendChild(o2), f2 = null;
        else {
          for (e2 = r2, c2 = 0; (e2 = e2.nextSibling) && c2 < i2.length; c2 += 2)
            if (e2 == o2)
              break n;
          n2.insertBefore(o2, r2), f2 = r2;
        }
    return f2 !== void 0 ? f2 : o2.nextSibling;
  }
  function P(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      o2 === "children" || o2 === "key" || o2 in l2 || z(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || z(n2, o2, l2[o2], u2[o2], i2);
  }
  function C(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || c.test(l2) ? u2 : u2 + "px";
  }
  function z(n2, l2, u2, i2, t2) {
    var o2, r2, f2;
    if (t2 && l2 == "className" && (l2 = "class"), l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || C(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || C(n2.style, l2, u2[l2]);
      }
    else
      l2[0] === "o" && l2[1] === "n" ? (o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), (r2 = l2.toLowerCase()) in n2 && (l2 = r2), l2 = l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, f2 = o2 ? T : N, u2 ? i2 || n2.addEventListener(l2, f2, o2) : n2.removeEventListener(l2, f2, o2)) : l2 !== "list" && l2 !== "tagName" && l2 !== "form" && l2 !== "type" && l2 !== "size" && l2 !== "download" && l2 !== "href" && l2 !== "contentEditable" && !t2 && l2 in n2 ? n2[l2] = u2 == null ? "" : u2 : typeof u2 != "function" && l2 !== "dangerouslySetInnerHTML" && (l2 !== (l2 = l2.replace(/xlink:?/, "")) ? u2 == null || u2 === false ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : u2 == null || u2 === false && !/^ar/.test(l2) ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
  }
  function N(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
  }
  function T(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
  }
  function $(l2, u2, i2, t2, o2, r2, f2, e2, c2) {
    var a2, v2, h2, y2, _2, w2, k2, g2, b2, x3, A3, P2 = u2.type;
    if (u2.constructor !== void 0)
      return null;
    i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = n.__b) && a2(u2);
    try {
      n:
        if (typeof P2 == "function") {
          if (g2 = u2.props, b2 = (a2 = P2.contextType) && t2[a2.__c], x3 = a2 ? b2 ? b2.props.value : a2.__ : t2, i2.__c ? k2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x3) : (u2.__c = v2 = new d(g2, x3), v2.constructor = P2, v2.render = L), b2 && b2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x3, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = s({}, v2.__s)), s(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), y2 = v2.props, _2 = v2.state, h2)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && g2 !== y2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x3), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x3) === false || u2.__v === i2.__v) {
              v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x3), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(y2, _2, w2);
            });
          }
          v2.context = x3, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = s(s({}, t2), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (w2 = v2.getSnapshotBeforeUpdate(y2, _2)), A3 = a2 != null && a2.type === p && a2.key == null ? a2.props.children : a2, m(l2, Array.isArray(A3) ? A3 : [A3], u2, i2, t2, o2, r2, f2, e2, c2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = E(i2.__e, u2, i2, t2, o2, r2, f2, c2);
      (a2 = n.diffed) && a2(u2);
    } catch (l3) {
      u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), n.__e(l3, u2, i2);
    }
  }
  function j(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
      try {
        l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
          n2.call(u3);
        });
      } catch (l3) {
        n.__e(l3, u3.__v);
      }
    });
  }
  function E(n2, l2, u2, i2, t2, o2, r2, c2) {
    var s2, a2, v2, h2, y2, p2 = u2.props, d2 = l2.props;
    if (t2 = l2.type === "svg" || t2, o2 != null) {
      for (s2 = 0; s2 < o2.length; s2++)
        if ((a2 = o2[s2]) != null && ((l2.type === null ? a2.nodeType === 3 : a2.localName === l2.type) || n2 == a2)) {
          n2 = a2, o2[s2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (l2.type === null)
        return document.createTextNode(d2);
      n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type, d2.is && {is: d2.is}), o2 = null, c2 = false;
    }
    if (l2.type === null)
      p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
      if (o2 != null && (o2 = e.slice.call(n2.childNodes)), v2 = (p2 = u2.props || f).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
        if (o2 != null)
          for (p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
            p2[n2.attributes[y2].name] = n2.attributes[y2].value;
        (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n2.innerHTML) || (n2.innerHTML = h2 && h2.__html || ""));
      }
      P(n2, d2, p2, t2, c2), h2 ? l2.__k = [] : (s2 = l2.props.children, m(n2, Array.isArray(s2) ? s2 : [s2], l2, u2, i2, l2.type !== "foreignObject" && t2, o2, r2, f, c2)), c2 || ("value" in d2 && (s2 = d2.value) !== void 0 && (s2 !== n2.value || l2.type === "progress" && !s2) && z(n2, "value", s2, p2.value, false), "checked" in d2 && (s2 = d2.checked) !== void 0 && s2 !== n2.checked && z(n2, "checked", s2, p2.checked, false));
    }
    return n2;
  }
  function H(l2, u2, i2) {
    try {
      typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
      n.__e(l3, i2);
    }
  }
  function I(l2, u2, i2) {
    var t2, o2, r2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || H(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (l3) {
          n.__e(l3, u2);
        }
      t2.base = t2.__P = null;
    }
    if (t2 = l2.__k)
      for (r2 = 0; r2 < t2.length; r2++)
        t2[r2] && I(t2[r2], u2, i2);
    o2 != null && a(o2);
  }
  function L(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function M(l2, u2, i2) {
    var t2, r2, c2;
    n.__ && n.__(l2, u2), r2 = (t2 = i2 === o) ? null : i2 && i2.__k || u2.__k, l2 = v(p, null, [l2]), c2 = [], $(u2, (t2 ? u2 : i2 || u2).__k = l2, r2 || f, f, u2.ownerSVGElement !== void 0, i2 && !t2 ? [i2] : r2 ? null : u2.childNodes.length ? e.slice.call(u2.childNodes) : null, c2, i2 || f, t2), j(c2, l2);
  }
  function S(n2, l2, u2) {
    var i2, t2, o2, r2 = arguments, f2 = s({}, n2.props);
    for (o2 in l2)
      o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
    if (arguments.length > 3)
      for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
        u2.push(r2[o2]);
    return u2 != null && (f2.children = u2), h(n2.type, f2, i2 || n2.key, t2 || n2.ref, null);
  }
  n = {__e: function(n2, l2) {
    for (var u2, i2, t2, o2 = l2.__h; l2 = l2.__; )
      if ((u2 = l2.__c) && !u2.__)
        try {
          if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
            return l2.__h = o2, u2.__E = u2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  }, __v: 0}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, d.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n2 == "function" && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, d.prototype.render = p, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/history/index.js
  var m2;
  var x2 = m2 || (m2 = {});
  x2.Pop = "POP";
  x2.Push = "PUSH";
  x2.Replace = "REPLACE";
  var y = function(a2) {
    return Object.freeze(a2);
  };
  function z2(a2, b2) {
    if (!a2) {
      typeof console !== "undefined" && console.warn(b2);
      try {
        throw Error(b2);
      } catch (g2) {
      }
    }
  }
  function A2(a2) {
    a2.preventDefault();
    a2.returnValue = "";
  }
  function B() {
    var a2 = [];
    return {get length() {
      return a2.length;
    }, push: function(b2) {
      a2.push(b2);
      return function() {
        a2 = a2.filter(function(a3) {
          return a3 !== b2;
        });
      };
    }, call: function(b2) {
      a2.forEach(function(a3) {
        return a3 && a3(b2);
      });
    }};
  }
  function D() {
    return Math.random().toString(36).substr(2, 8);
  }
  function E2(a2) {
    var b2 = a2.pathname, g2 = a2.search;
    a2 = a2.hash;
    return (b2 === void 0 ? "/" : b2) + (g2 === void 0 ? "" : g2) + (a2 === void 0 ? "" : a2);
  }
  function F(a2) {
    var b2 = {};
    if (a2) {
      var g2 = a2.indexOf("#");
      0 <= g2 && (b2.hash = a2.substr(g2), a2 = a2.substr(0, g2));
      g2 = a2.indexOf("?");
      0 <= g2 && (b2.search = a2.substr(g2), a2 = a2.substr(0, g2));
      a2 && (b2.pathname = a2);
    }
    return b2;
  }
  function createHashHistory(a2) {
    function b2() {
      var a3 = F(f2.location.hash.substr(1)), c3 = a3.pathname, b3 = a3.search;
      a3 = a3.hash;
      var e3 = p2.state || {};
      return [e3.idx, y({pathname: c3 === void 0 ? "/" : c3, search: b3 === void 0 ? "" : b3, hash: a3 === void 0 ? "" : a3, state: e3.usr || null, key: e3.key || "default"})];
    }
    function g2() {
      if (n2)
        k2.call(n2), n2 = null;
      else {
        var a3 = m2.Pop, c3 = b2(), e3 = c3[0];
        c3 = c3[1];
        if (k2.length)
          if (e3 != null) {
            var f3 = l2 - e3;
            f3 && (n2 = {action: a3, location: c3, retry: function() {
              h2(-1 * f3);
            }}, h2(f3));
          } else
            z2(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
        else
          w2(a3);
      }
    }
    function t2(a3) {
      var d2 = document.querySelector("base"), c3 = "";
      d2 && d2.getAttribute("href") && (d2 = f2.location.href, c3 = d2.indexOf("#"), c3 = c3 === -1 ? d2 : d2.slice(0, c3));
      return c3 + "#" + (typeof a3 === "string" ? a3 : E2(a3));
    }
    function v2(a3, b3) {
      b3 === void 0 && (b3 = null);
      return y(_extends({}, c2, {}, typeof a3 === "string" ? F(a3) : a3, {state: b3, key: D()}));
    }
    function w2(a3) {
      q = a3;
      a3 = b2();
      l2 = a3[0];
      c2 = a3[1];
      e2.call({action: q, location: c2});
    }
    function u2(a3, c3) {
      function d2() {
        u2(a3, c3);
      }
      var b3 = m2.Push, e3 = v2(a3, c3);
      z2(e3.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(a3) + ")");
      if (!k2.length || (k2.call({action: b3, location: e3, retry: d2}), false)) {
        var g3 = [{usr: e3.state, key: e3.key, idx: l2 + 1}, t2(e3)];
        e3 = g3[0];
        g3 = g3[1];
        try {
          p2.pushState(e3, "", g3);
        } catch (H2) {
          f2.location.assign(g3);
        }
        w2(b3);
      }
    }
    function r2(a3, c3) {
      function d2() {
        r2(a3, c3);
      }
      var e3 = m2.Replace, b3 = v2(a3, c3);
      z2(b3.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(a3) + ")");
      k2.length && (k2.call({
        action: e3,
        location: b3,
        retry: d2
      }), 1) || (b3 = [{usr: b3.state, key: b3.key, idx: l2}, t2(b3)], p2.replaceState(b3[0], "", b3[1]), w2(e3));
    }
    function h2(a3) {
      p2.go(a3);
    }
    a2 === void 0 && (a2 = {});
    a2 = a2.window;
    var f2 = a2 === void 0 ? document.defaultView : a2, p2 = f2.history, n2 = null;
    f2.addEventListener("popstate", g2);
    f2.addEventListener("hashchange", function() {
      var a3 = b2()[1];
      E2(a3) !== E2(c2) && g2();
    });
    var q = m2.Pop;
    a2 = b2();
    var l2 = a2[0], c2 = a2[1], e2 = B(), k2 = B();
    l2 == null && (l2 = 0, p2.replaceState(_extends({}, p2.state, {idx: l2}), ""));
    return {
      get action() {
        return q;
      },
      get location() {
        return c2;
      },
      createHref: t2,
      push: u2,
      replace: r2,
      go: h2,
      back: function() {
        h2(-1);
      },
      forward: function() {
        h2(1);
      },
      listen: function(a3) {
        return e2.push(a3);
      },
      block: function(a3) {
        var c3 = k2.push(a3);
        k2.length === 1 && f2.addEventListener("beforeunload", A2);
        return function() {
          c3();
          k2.length || f2.removeEventListener("beforeunload", A2);
        };
      }
    };
  }

  // node_modules/preact-router/dist/preact-router.es.js
  var EMPTY$1 = {};
  function assign(obj, props) {
    for (var i2 in props) {
      obj[i2] = props[i2];
    }
    return obj;
  }
  function exec(url, route2, opts) {
    var reg = /(?:\?([^#]*))?(#.*)?$/, c2 = url.match(reg), matches = {}, ret;
    if (c2 && c2[1]) {
      var p2 = c2[1].split("&");
      for (var i2 = 0; i2 < p2.length; i2++) {
        var r2 = p2[i2].split("=");
        matches[decodeURIComponent(r2[0])] = decodeURIComponent(r2.slice(1).join("="));
      }
    }
    url = segmentize(url.replace(reg, ""));
    route2 = segmentize(route2 || "");
    var max = Math.max(url.length, route2.length);
    for (var i$1 = 0; i$1 < max; i$1++) {
      if (route2[i$1] && route2[i$1].charAt(0) === ":") {
        var param = route2[i$1].replace(/(^:|[+*?]+$)/g, ""), flags = (route2[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || "", plus = ~flags.indexOf("+"), star = ~flags.indexOf("*"), val = url[i$1] || "";
        if (!val && !star && (flags.indexOf("?") < 0 || plus)) {
          ret = false;
          break;
        }
        matches[param] = decodeURIComponent(val);
        if (plus || star) {
          matches[param] = url.slice(i$1).map(decodeURIComponent).join("/");
          break;
        }
      } else if (route2[i$1] !== url[i$1]) {
        ret = false;
        break;
      }
    }
    if (opts.default !== true && ret === false) {
      return false;
    }
    return matches;
  }
  function pathRankSort(a2, b2) {
    return a2.rank < b2.rank ? 1 : a2.rank > b2.rank ? -1 : a2.index - b2.index;
  }
  function prepareVNodeForRanking(vnode, index) {
    vnode.index = index;
    vnode.rank = rankChild(vnode);
    return vnode.props;
  }
  function segmentize(url) {
    return url.replace(/(^\/+|\/+$)/g, "").split("/");
  }
  function rankSegment(segment) {
    return segment.charAt(0) == ":" ? 1 + "*+?".indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
  }
  function rank(path) {
    return segmentize(path).map(rankSegment).join("");
  }
  function rankChild(vnode) {
    return vnode.props.default ? 0 : rank(vnode.props.path);
  }
  var customHistory = null;
  var ROUTERS = [];
  var subscribers = [];
  var EMPTY = {};
  function setUrl(url, type) {
    if (type === void 0)
      type = "push";
    if (customHistory && customHistory[type]) {
      customHistory[type](url);
    } else if (typeof history !== "undefined" && history[type + "State"]) {
      history[type + "State"](null, null, url);
    }
  }
  function getCurrentUrl() {
    var url;
    if (customHistory && customHistory.location) {
      url = customHistory.location;
    } else if (customHistory && customHistory.getCurrentLocation) {
      url = customHistory.getCurrentLocation();
    } else {
      url = typeof location !== "undefined" ? location : EMPTY;
    }
    return "" + (url.pathname || "") + (url.search || "");
  }
  function route(url, replace) {
    if (replace === void 0)
      replace = false;
    if (typeof url !== "string" && url.url) {
      replace = url.replace;
      url = url.url;
    }
    if (canRoute(url)) {
      setUrl(url, replace ? "replace" : "push");
    }
    return routeTo(url);
  }
  function canRoute(url) {
    for (var i2 = ROUTERS.length; i2--; ) {
      if (ROUTERS[i2].canRoute(url)) {
        return true;
      }
    }
    return false;
  }
  function routeTo(url) {
    var didRoute = false;
    for (var i2 = 0; i2 < ROUTERS.length; i2++) {
      if (ROUTERS[i2].routeTo(url) === true) {
        didRoute = true;
      }
    }
    for (var i$1 = subscribers.length; i$1--; ) {
      subscribers[i$1](url);
    }
    return didRoute;
  }
  function routeFromLink(node) {
    if (!node || !node.getAttribute) {
      return;
    }
    var href = node.getAttribute("href"), target = node.getAttribute("target");
    if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
      return;
    }
    return route(href);
  }
  function handleLinkClick(e2) {
    if (e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey || e2.button !== 0) {
      return;
    }
    routeFromLink(e2.currentTarget || e2.target || this);
    return prevent(e2);
  }
  function prevent(e2) {
    if (e2) {
      if (e2.stopImmediatePropagation) {
        e2.stopImmediatePropagation();
      }
      if (e2.stopPropagation) {
        e2.stopPropagation();
      }
      e2.preventDefault();
    }
    return false;
  }
  function delegateLinkHandler(e2) {
    if (e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey || e2.button !== 0) {
      return;
    }
    var t2 = e2.target;
    do {
      if (String(t2.nodeName).toUpperCase() === "A" && t2.getAttribute("href")) {
        if (t2.hasAttribute("native")) {
          return;
        }
        if (routeFromLink(t2)) {
          return prevent(e2);
        }
      }
    } while (t2 = t2.parentNode);
  }
  var eventListenersInitialized = false;
  function initEventListeners() {
    if (eventListenersInitialized) {
      return;
    }
    if (typeof addEventListener === "function") {
      if (!customHistory) {
        addEventListener("popstate", function() {
          routeTo(getCurrentUrl());
        });
      }
      addEventListener("click", delegateLinkHandler);
    }
    eventListenersInitialized = true;
  }
  var Router = function(Component$$1) {
    function Router2(props) {
      Component$$1.call(this, props);
      if (props.history) {
        customHistory = props.history;
      }
      this.state = {
        url: props.url || getCurrentUrl()
      };
      initEventListeners();
    }
    if (Component$$1)
      Router2.__proto__ = Component$$1;
    Router2.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Router2.prototype.constructor = Router2;
    Router2.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
      if (props.static !== true) {
        return true;
      }
      return props.url !== this.props.url || props.onChange !== this.props.onChange;
    };
    Router2.prototype.canRoute = function canRoute2(url) {
      var children = x(this.props.children);
      return this.getMatchingChildren(children, url, false).length > 0;
    };
    Router2.prototype.routeTo = function routeTo2(url) {
      this.setState({url});
      var didRoute = this.canRoute(url);
      if (!this.updating) {
        this.forceUpdate();
      }
      return didRoute;
    };
    Router2.prototype.componentWillMount = function componentWillMount() {
      ROUTERS.push(this);
      this.updating = true;
    };
    Router2.prototype.componentDidMount = function componentDidMount() {
      var this$1 = this;
      if (customHistory) {
        this.unlisten = customHistory.listen(function(location2) {
          this$1.routeTo("" + (location2.pathname || "") + (location2.search || ""));
        });
      }
      this.updating = false;
    };
    Router2.prototype.componentWillUnmount = function componentWillUnmount() {
      if (typeof this.unlisten === "function") {
        this.unlisten();
      }
      ROUTERS.splice(ROUTERS.indexOf(this), 1);
    };
    Router2.prototype.componentWillUpdate = function componentWillUpdate() {
      this.updating = true;
    };
    Router2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updating = false;
    };
    Router2.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
      return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function(vnode) {
        var matches = exec(url, vnode.props.path, vnode.props);
        if (matches) {
          if (invoke !== false) {
            var newProps = {url, matches};
            assign(newProps, matches);
            delete newProps.ref;
            delete newProps.key;
            return S(vnode, newProps);
          }
          return vnode;
        }
      }).filter(Boolean);
    };
    Router2.prototype.render = function render(ref, ref$1) {
      var children = ref.children;
      var onChange = ref.onChange;
      var url = ref$1.url;
      var active = this.getMatchingChildren(x(children), url, true);
      var current = active[0] || null;
      var previous = this.previousUrl;
      if (url !== previous) {
        this.previousUrl = url;
        if (typeof onChange === "function") {
          onChange({
            router: this,
            url,
            previous,
            active,
            current
          });
        }
      }
      return current;
    };
    return Router2;
  }(d);
  var Link = function(props) {
    return v("a", assign({onClick: handleLinkClick}, props));
  };
  var Route = function(props) {
    return v(props.component, props);
  };
  Router.subscribers = subscribers;
  Router.getCurrentUrl = getCurrentUrl;
  Router.route = route;
  Router.Router = Router;
  Router.Route = Route;
  Router.Link = Link;
  Router.exec = exec;
  var preact_router_es_default = Router;

  // src/components/pages/Home/index.tsx
  var db = require_db();
  var Home = class extends d {
    constructor() {
      super(...arguments);
      this.state = {
        items: []
      };
    }
    componentWillMount() {
      var items = db.getLatest();
      this.setState({
        items,
        currentId: void 0
      });
    }
    componentDidMount() {
      this.container = document.querySelector("#home .container");
      setTimeout(() => {
        this.container.classList.add("page-loaded");
      }, 150);
    }
    onNavClick(e2, path) {
      const self = this;
      let id = path.replaceAll("/", "");
      let items = document.querySelectorAll(".menu li");
      Array.from(items).filter((i2) => i2.children[0] != e2.target).forEach((i2) => i2.classList.remove("clicked"));
      e2.target.parentNode.classList.add("clicked");
      this.container.classList.add("navigating");
      setTimeout(() => self.loadContent(id), 100);
    }
    loadContent(id) {
      const self = this;
      console.log("load content", id);
      this.setState({
        currentId: id
      });
      if (id != this.state.currentId) {
        this.container.classList.add("show-stage");
        this.container.classList.add("loading");
        setTimeout(() => {
          self.container.classList.remove("loading");
        }, 500);
      } else {
      }
    }
    render() {
      return /* @__PURE__ */ v("div", {
        class: "page",
        id: "home"
      }, /* @__PURE__ */ v("div", {
        class: "logo"
      }, "RYAN"), /* @__PURE__ */ v("div", {
        class: "container",
        style: "opacity: 0;"
      }, /* @__PURE__ */ v("div", {
        class: "menu"
      }, /* @__PURE__ */ v("ul", {
        class: "menu-content"
      }, /* @__PURE__ */ v("li", {
        onClick: (e2) => {
          this.onNavClick(e2, "/about");
        }
      }, /* @__PURE__ */ v("span", null, "About")), /* @__PURE__ */ v("li", {
        onClick: (e2) => {
          this.onNavClick(e2, "/portfolio");
        }
      }, /* @__PURE__ */ v("span", null, "Portfolio")), /* @__PURE__ */ v("li", {
        onClick: (e2) => {
          this.onNavClick(e2, "/projects");
        }
      }, /* @__PURE__ */ v("span", null, "Other Projects")), /* @__PURE__ */ v("li", {
        onClick: (e2) => {
          this.onNavClick(e2, "/contact");
        }
      }, /* @__PURE__ */ v("span", null, "Contact")))), /* @__PURE__ */ v("div", {
        class: "stage"
      }, /* @__PURE__ */ v("div", {
        class: "stage-content"
      }, /* @__PURE__ */ v("div", {
        class: "loader"
      }, /* @__PURE__ */ v("div", {
        class: "loader-ring"
      }, /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null), /* @__PURE__ */ v("div", null)))))));
    }
  };
  var Home_default = Home;

  // src/components/shared/Item/index.tsx
  var dateformat = __toModule(require_dateformat());
  var Item = class extends d {
    handleClick() {
      if (this.props.item.demo) {
        window.open(this.props.item.demo);
      } else {
        window.open(this.props.item.url);
      }
    }
    render() {
      var self = this;
      var item2 = this.props.item;
      if (item2.date_added) {
        var date = Date.parse(item2.date_added);
        var dateString = dateformat.default(date, "mmmm dS, yyyy");
      } else if (item2.date_from) {
        var dateFrom = Date.parse(item2.date_from);
        var dateTo = Date.parse(item2.date_to);
        var dateString = dateformat.default(dateFrom, "mmmm yyyy") + " to " + dateformat.default(dateTo, "mmmm yyyy");
      }
      return /* @__PURE__ */ v("div", {
        class: "item " + (item2.isOpen == true ? "open" : "")
      }, /* @__PURE__ */ v("div", {
        class: "inner clear",
        onClick: this.handleClick
      }, /* @__PURE__ */ v("div", {
        class: "thumb"
      }, item2.thumb && /* @__PURE__ */ v("img", {
        src: item2.thumb
      })), /* @__PURE__ */ v("div", {
        class: "text-top"
      }, /* @__PURE__ */ v("div", {
        class: "date"
      }, dateString), /* @__PURE__ */ v("div", {
        class: "title"
      }, item2.title), item2.url && /* @__PURE__ */ v("div", {
        class: "link"
      }, /* @__PURE__ */ v("a", {
        href: item2.url,
        target: "_blank"
      }, item2.url)), item2.tags && /* @__PURE__ */ v("div", {
        class: "tags"
      }, /* @__PURE__ */ v("span", {
        className: "label"
      }, "Tags:"), " ", item2.tags)), /* @__PURE__ */ v("div", {
        class: "text-bottom"
      }, /* @__PURE__ */ v("div", {
        class: "content",
        dangerouslySetInnerHTML: {__html: item2.description}
      })), item2.demo && /* @__PURE__ */ v("div", {
        class: "demo-link"
      }, /* @__PURE__ */ v("a", {
        href: item2.demo,
        target: "_blank"
      }, "Demo"))));
    }
  };
  var Item_default = Item;

  // src/components/pages/Work/index.tsx
  var db2 = require_db();
  var Work = class extends d {
    constructor() {
      super(...arguments);
      this.state = {
        freelance: [],
        fulltime: []
      };
    }
    componentWillMount() {
      this.setState({
        freelance: db2.getFreelance(),
        fulltime: db2.getFulltime()
      });
    }
    componentDidMount() {
    }
    scrollTo(targetId) {
      var target = document.getElementById(targetId);
    }
    render() {
      console.log("render");
      return /* @__PURE__ */ v("div", {
        class: "page",
        id: "work"
      }, /* @__PURE__ */ v("h1", null, "Work"), /* @__PURE__ */ v("div", {
        class: "sub-nav"
      }, /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("freelance"),
        href: "#freelance"
      }, "Freelance"), /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("fulltime"),
        href: "#fulltime"
      }, "Fulltime")), /* @__PURE__ */ v("div", {
        class: "line-title",
        id: "freelance"
      }, /* @__PURE__ */ v("h3", null, "Freelance")), /* @__PURE__ */ v("div", {
        class: "items flex-row flex-wrap"
      }, this.state.freelance.map(function(item2, i2) {
        return /* @__PURE__ */ v(Item_default, {
          item: item2,
          key: i2
        });
      })), /* @__PURE__ */ v("div", {
        class: "line-title",
        id: "fulltime"
      }, /* @__PURE__ */ v("h3", null, "Fulltime"), /* @__PURE__ */ v("h5", null, /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("work"),
        href: "#",
        class: "to-top"
      }, "Back to Top"))), /* @__PURE__ */ v("div", {
        class: "items flex-row flex-wrap"
      }, this.state.fulltime.map(function(item2, i2) {
        return /* @__PURE__ */ v(Item_default, {
          item: item2,
          key: i2
        });
      })));
    }
  };
  var Work_default = Work;

  // src/components/pages/Work2/index.tsx
  var db3 = require_db();
  var Work2 = class extends d {
    constructor() {
      super(...arguments);
      this.state = {
        freelance: [],
        fulltime: []
      };
    }
    componentWillMount() {
      this.setState({
        freelance: db3.getFreelance(),
        fulltime: db3.getFulltime()
      });
    }
    componentDidMount() {
    }
    scrollTo(targetId) {
      var target = document.getElementById(targetId);
    }
    render() {
      console.log("render");
      return /* @__PURE__ */ v("div", {
        class: "page",
        id: "work2"
      }, /* @__PURE__ */ v("h1", null, "Work"), /* @__PURE__ */ v("div", {
        class: "sub-nav"
      }, /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("freelance"),
        href: "#freelance"
      }, "Freelance"), /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("fulltime"),
        href: "#fulltime"
      }, "Fulltime")), /* @__PURE__ */ v("div", {
        class: "line-title",
        id: "freelance"
      }, /* @__PURE__ */ v("h3", null, "Freelance")), /* @__PURE__ */ v("div", {
        class: "items flex-row flex-wrap"
      }, this.state.freelance.map(function(item2, i2) {
        return /* @__PURE__ */ v(Item_default, {
          item: item2,
          key: i2
        });
      })), /* @__PURE__ */ v("div", {
        class: "line-title",
        id: "fulltime"
      }, /* @__PURE__ */ v("h3", null, "Fulltime"), /* @__PURE__ */ v("h5", null, /* @__PURE__ */ v("a", {
        onClick: () => this.scrollTo("work"),
        href: "#",
        class: "to-top"
      }, "Back to Top"))), /* @__PURE__ */ v("div", {
        class: "items flex-row flex-wrap"
      }, this.state.fulltime.map(function(item2, i2) {
        return /* @__PURE__ */ v(Item_default, {
          item: item2,
          key: i2
        });
      })));
    }
  };
  var Work2_default = Work2;

  // src/components/pages/Play/index.tsx
  var db4 = require_db();
  var Play = class extends d {
    constructor() {
      super(...arguments);
      this.state = {
        items: []
      };
    }
    componentWillMount() {
      var items = db4.getPlay();
      console.log("play", items);
      this.setState({items});
    }
    handleClick(item2) {
      if (item2.isOpen == true)
        item2.isOpen = false;
      else
        item2.isOpen = true;
      this.forceUpdate();
    }
    render() {
      return /* @__PURE__ */ v("div", {
        class: "page",
        id: "play"
      }, /* @__PURE__ */ v("h1", null, "Play"), /* @__PURE__ */ v("div", {
        class: "items flex-row flex-wrap"
      }, this.state.items.map(function(item2, i2) {
        return /* @__PURE__ */ v(Item_default, {
          item: item2,
          key: i2
        });
      })));
    }
  };
  var Play_default = Play;

  // src/components/pages/Info/index.tsx
  var Info = class extends d {
    render() {
      return /* @__PURE__ */ v("div", {
        class: "page",
        id: "info"
      }, /* @__PURE__ */ v("h1", null, "Info"), /* @__PURE__ */ v("div", {
        class: "bio"
      }, "For now, I can be reached by email at ", /* @__PURE__ */ v("a", {
        href: "mailto:rw3iss@gmail.com"
      }, "rw3iss@gmail.com"), "."));
    }
  };
  var Info_default = Info;

  // src/components/Routes.jsx
  var Routes = class extends d {
    render() {
      return /* @__PURE__ */ v(preact_router_es_default, {
        history: createHashHistory()
      }, /* @__PURE__ */ v(Home_default, {
        path: "/"
      }), /* @__PURE__ */ v(Work_default, {
        path: "work"
      }), /* @__PURE__ */ v(Work2_default, {
        path: "work2"
      }), /* @__PURE__ */ v(Play_default, {
        path: "play"
      }), /* @__PURE__ */ v(Info_default, {
        path: "info"
      }));
    }
  };
  var Routes_default = Routes;

  // src/components/App.tsx
  var App = class extends d {
    render() {
      return /* @__PURE__ */ v("div", {
        id: "app"
      }, /* @__PURE__ */ v("div", {
        class: "content-wrapper"
      }, /* @__PURE__ */ v(Routes_default, null)));
    }
  };
  var App_default = App;

  // src/index.tsx
  var app = document.getElementById("app");
  if (app) {
    M(/* @__PURE__ */ v(App_default, null), app, app);
  }
})();
//# sourceMappingURL=app.js.map
