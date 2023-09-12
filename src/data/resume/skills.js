const skills = [
  {
    title: 'HTML5',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'CSS3',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SCSS',
    competency: 5,
    category: ['Web Development'],
  },

  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'Recoil',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'Recoil',
    competency: 3,
    category: ['Javascript'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
