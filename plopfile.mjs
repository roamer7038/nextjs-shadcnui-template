/** @type {import('plop').NodePlopAPI} */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator('storybook', {
    description: 'Create a Storybook story for a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './stories/{{ kebabCase name }}.stories.tsx',
        templateFile: './templates/stories.hbs'
      }
    ]
  });
}
