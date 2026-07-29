const si = require('react-icons/si');
const fa = require('react-icons/fa');

const requested = [
  'SiC', 'SiCplusplus', 'SiHtml5', 'SiGo', 'FaJava', 'SiJavascript', 'SiTypescript', 
  'SiVercel', 'SiChartdotjs', 'SiBun', 'SiBootstrap', 'SiFlutter', 'SiJsonwebtokens', 
  'SiLaravel', 'SiNpm', 'SiNextdotjs', 'SiNodedotjs', 'SiReact', 'SiTailwindcss', 
  'SiThreedotjs', 'SiVite', 'SiVuedotjs', 'SiSupabase', 'SiSqlite', 'SiMysql', 
  'SiAdobe', 'SiAdobeaftereffects', 'SiCanva', 'SiFigma', 'SiGit', 'SiGithub', 
  'SiPostman', 'SiDocker', 'SiCodecov'
];

const available = requested.filter(name => si[name] || fa[name]);
const missing = requested.filter(name => !si[name] && !fa[name]);

console.log('Available:', available.join(', '));
console.log('Missing:', missing.join(', '));
