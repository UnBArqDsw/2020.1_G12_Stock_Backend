'use strict';
const stockLogo = require('../../utils/stockLogoBase64');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'companies',
      [
        {
          idCompany: 1,
          document: '32603729000149',
          name: 'Stock Enterprise',
          telephone: 40028922,
          email: 'Stock@enterprise.com',
          photo: stockLogo,
          maxQtdCollaborator: 5,
          registerDate: new Date(),
          idBranch: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('companies', null, {});
  },
};
