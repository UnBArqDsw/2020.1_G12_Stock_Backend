export default function endpoints() {
  const collaborator = '/api/collaborator';
  const product = '/api/product';
  const category = '/api/category';
  const lot = '/api/lot';
  const belongs = '/api/belongs';
  const accesslevel = '/api/accesslevel';
  const branch = '/api/branch';
  const company = '/api/company';
  const decreases = '/api/decreases';

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
          endpoint: `${collaborator}s/`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description:
            'Returns a list of all collaborators of a specific Company.',
        },
        {
          type: 'GET',
          endpoint: `${collaborator}/:idCollaborator`,
          parameters: [
            {
              idCollaborator: 'Integer',
            },
          ],
          description: 'Returns a specific collaborator.',
        },
        {
          type: 'PUT',
          endpoint: `${collaborator}/update/profile/:idCollaborator`,
          parameters: [
            {
              idCollaborator: 'Integer',
            },
          ],
          description: 'Update profile data.',
        },
        {
          type: 'PUT',
          endpoint: `${collaborator}/update/collaborator/:idCollaborator`,
          parameters: [
            {
              idCollaborator: 'Integer',
            },
          ],
          description: 'Update collaborator data.',
        },
      ],
      product: [
        {
          type: 'POST',
          endpoint: `${product}`,
          parameters: [
            {
              name: 'String',
              unitQty: 'Integer',
              unitMeasure: 'String',
              salePrice: 'Integer',
            },
          ],
          description: 'Creates new product.',
        },
        {
          type: 'POST',
          endpoint: `${product}/destroy`,
          parameters: [
            {
              idProduct: 'Integer',
            },
          ],
          description:
            "Remove product from stock. Only works if product doesn't have lot",
        },
        {
          type: 'POST',
          endpoint: `${product}/decreases`,
          parameters: [
            {
              idProduct: 'Integer',
              quantity: 'Integer',
            },
          ],
          description: 'Decreases qty from spcefic product. Sell the product',
        },
        {
          type: 'GET',
          endpoint: `${product}s/`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description: 'Return a list of all product of a specific company',
        },
      ],
      category: [
        {
          type: 'POST',
          endpoint: `${category}`,
          parameters: [
            {
              name: 'String',
              description: 'Integer',
            },
          ],
          description: 'Creates new category.',
        },
        {
          type: 'GET',
          endpoint: `categories/`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description: 'Return a list of all categories of a specific company',
        },
      ],
      lot: [
        {
          type: 'POST',
          endpoint: `${lot}`,
          parameters: [
            {
              idProduct: 'Integer',
              entryDate: 'String',
              dueDate: 'String',
              productQty: 'Integer',
              description: 'String',
              purchasePrice: 'Integer',
            },
          ],
          description: 'Creates new category.',
        },
        {
          type: 'POST',
          endpoint: `${lot}/decreases`,
          parameters: [
            {
              idLot: 'Integer',
              quantity: 'String',
            },
          ],
          description:
            "Remove lot. Only works if lot doesn't have products related at.",
        },
        {
          type: 'GET',
          endpoint: `${lot}s/:idProduct`,
          parameters: [
            {
              idProduct: 'Integer',
            },
          ],
          description: 'Return a list of all lots of a specific product',
        },
      ],
      belongs: [
        {
          type: 'POST',
          endpoint: `${belongs}`,
          parameters: [
            {
              idProduct: 'Integer',
              idCategory: 'Array[Integer]',
            },
          ],
          description: 'Creates new relation of product to category.',
        },
        {
          type: 'GET',
          endpoint: `${belongs}/productCategory/:idProduct`,
          parameters: [
            {
              idProduct: 'Integer',
            },
          ],
          description: 'Return a list of all categories of a specific product.',
        },
      ],
      accesslevel: [
        {
          type: 'GET',
          endpoint: `${accesslevel}/list`,
          description: 'Return a list of all access levels.',
        },
        {
          type: 'GET',
          endpoint: `${accesslevel}/show/:idAccessLevel`,
          parameters: [
            {
              idAccessLevel: 'Integer',
            },
          ],
          description: 'Return a specific access level data.',
        },
      ],
      branch: [
        {
          type: 'GET',
          endpoint: `${branch}`,
          description: 'Return a list of all branches of companies.',
        },
      ],
      company: [
        {
          type: 'POST',
          endpoint: `${company}`,
          parameters: [
            {
              document: 'String',
              name: 'String',
              telephone: 'Integer',
              email: 'String',
              photo: 'String',
              maxQtdCollaborator: 'Integer',
              idBranch: 'Integer',
              registerDate: 'String',
            },
          ],
          description: 'Creates new company.',
        },
      ],
      decreases: [
        {
          type: 'GET',
          endpoint: `${decreases}/:idDecreasesType`,
          parameters: [
            {
              idDecreasesType: 'Integer',
            },
          ],
          description: 'Return a list of sell history data.',
        },
      ],
    },
  ];

  return endpoints;
}
