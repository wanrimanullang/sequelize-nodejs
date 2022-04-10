'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 31,
          name: 'user321',
          email: 'usere321@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 22,
          name: 'user322',
          email: 'userr322@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 33,
          name: 'user323',
          email: 'userq323@test.com',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'channel',
      [
        {
          id: 12,
          name: 'channel1',
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 22,
          name: 'channel2',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'video',
      [
        {
          id: 1,
          title: 'video1ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          title: 'video2ByUser1',
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          title: 'video3ByUser2',
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
