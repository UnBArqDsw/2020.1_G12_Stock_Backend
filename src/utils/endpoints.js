export default function endpoints() {
  const collaborator = '/api/collaborator';

  const endpoints = [
    {
      collaborator: [
        {
          type: 'POST',
          endpoint: `${collaborator}`,
          parameters: [
            {
              idAcessLevel: 'Integer',
              idCompany: 'Integer',
              name: 'String',
              document: 'String',
              password: 'String',
            },
          ],
          description: 'Creates new collaborator.',
        },
        {
          type: 'POST',
          endpoint: `${collaborator}/auth`,
          parameters: [
            {
              document: 'String',
              password: 'String',
            },
          ],
          description: 'Verifies user authentication.',
        },
        {
          type: 'GET',
          endpoint: `${collaborator}/index/:idCompany`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description:
            'Returns a list of all collaborators for a specific Company.',
        },
      ],
    },
  ];

  return endpoints;
}
