'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          idCompany: 1,
          name: 'Nossa primeira categoria',
          description:
            'Essa é uma categoria de testes. Muito útil quando você não tem ideia de qual categoria criar.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idCompany: 1,
          name: 'Nossa segunda categoria',
          description:
            'Essa é uma categoria de testes. Muito útil quando você não tem ideia de qual categoria criar.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idCompany: 1,
          name: 'Nossa terceira categoria',
          description:
            'Essa é uma categoria de testes. Muito útil quando você não tem ideia de qual categoria criar.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
