module.exports = {
    Liquibase: jest.fn().mockImplementation(() => {
      return {
        update: jest.fn().mockResolvedValue(),
        rollback: jest.fn().mockResolvedValue(),
        status: jest.fn().mockResolvedValue()
      };
    }),
    MYSQL_DEFAULT_CONFIG: {}
  };
  