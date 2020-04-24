export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea30ea828fe58287dabfbb8',
                  title: 'Sanity Studio',
                  name: 'Brandon-Lent---Blog-studio',
                  apiId: 'b0e6c777-9dfc-4257-9872-fede338273b2'
                },
                {
                  buildHookId: '5ea30ea8e878520206264584',
                  title: 'Blog Website',
                  name: 'Brandon-Lent---Blog',
                  apiId: '05593c03-c9ba-495f-8d9a-e70db6f41b86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Blent1050/Brandon-Lent---Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://Brandon-Lent---Blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
