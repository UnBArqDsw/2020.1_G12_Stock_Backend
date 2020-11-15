'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'access_levels',
      [
        {
          idAccessLevel: 1,
          name: 'Gestor(a)',
          description:
            'Dono do negócio. Possui todos os níveis de acesso da aplicação.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAccessLevel: 2,
          name: 'Administrador(a)',
          description:
            'Gerente. Possui todos os níveis de acesso da aplicação, mas pode ser removido pelo owner',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idAccessLevel: 3,
          name: 'Vendedor(a)',
          description:
            'Vendedor. Pessoa que vende ou é responsável pelas vendas.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('access_levels', null, {});
  },
};
