'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'decreases_types',
      [
        {
          idDecreasesType: 1,
          name: 'Remover produto',
          description:
            'Remover um produto por: defeito, data de validade, prejuízos em geral. Esta remoção não será considerada no fluxo de vendas.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idDecreasesType: 2,
          name: 'Dar baixa em produto',
          description: 'Remover um produto por ter sido vendido.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('decreases_types', null, {});
  },
};
