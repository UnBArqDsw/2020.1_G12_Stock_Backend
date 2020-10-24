export default function endpoints() {
  const collaborator = '/api/collaborator';
  const product = '/api/product';
  const category = '/api/category';
  const lot = '/api/lot';
  const belongs = '/api/belongs';

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
          endpoint: `${collaborator}s/:idCompany`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description:
            'Returns a list of all collaborators of a specific Company.',
        },
      ],
      product: [
        {
          type: 'POST',
          endpoint: `${product}`,
          parameters: [
            {
              name: 'String',
              unitQtd: 'Integer',
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
          description: 'Decreases qtd from spcefic product. Sell the product',
        },
        {
          type: 'GET',
          endpoint: `${product}s/:idCompany`,
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
          endpoint: `categories/:idCompany`,
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
              productQtd: 'Integer',
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
          endpoint: `${lot}s/:idCompany`,
          parameters: [
            {
              idCompany: 'Integer',
            },
          ],
          description: 'Return a list of all lots of a specific company',
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
          description: 'Return a list of all categoies of a specific product.',
        },
      ],
    },
  ];

  return endpoints;
}
