import asyncio
class Database:
    _connection = None
    def __init__(self):
        pass
    # Database connection simulation
    @staticmethod
    async def get_connection():
        if Database._connection is None:
            print("connecting")
            try:
                Database._connection = Database()
            except Exception as error:
              print("Error establishing database connection:", error)
              raise error
        return await Database._connection.get_connection_message()
    async def get_connection_message(self):
        return "Database connection established"
async def main():
  try:
    connection1 = await Database.get_connection()
    print(connection1)

    connection2 = await Database.get_connection()
    print(connection2)
  except Exception as error:
    print("An error occurred while using the database:", error)

asyncio.run(main())