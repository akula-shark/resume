---
title: mongo_dart Singleton Class
description: Using a singleton for the mongo_dart library can be convenient.
icon: "/uploads/dart.svg"

---
    class Mongo {
      static final Mongo _singleton = Mongo._internal();
      late Db db;
    
      factory Mongo() {
        return _singleton;
      }
    
      init() async {
        print('Connecting to db...');
        var database = await Db.create(process.env.MONGO_CONNECTION_STRING)
        await database.open();
        print('Database connection successful.');
        db = database;
      }
    
      Mongo._internal();
    }
    