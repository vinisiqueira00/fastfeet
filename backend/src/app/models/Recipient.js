import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
     static init(sequelize) {
          super.init(
               {
                    name: Sequelize.STRING,
                    address: Sequelize.STRING,
                    number: Sequelize.INTEGER,
                    complement: Sequelize.STRING,
                    city: Sequelize.STRING,
                    state: Sequelize.STRING,
                    zip_code: Sequelize.STRING,
               },
               {
                    sequelize,
               }
          );
     }
}

export default new Recipient();
