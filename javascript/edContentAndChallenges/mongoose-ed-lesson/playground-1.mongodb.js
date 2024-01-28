db.createCollection("messages", {
  validator: {
     $jsonSchema: {
        bsonType: "object",
        // the required fields, no message without any of these fields
        required: [ "name", "summary", "organiser", "date"],
        properties: {
           name: {
              bsonType: "string",
              description: "must be a string and is required"
           },
           summary: {
              bsonType: "string",
              description: "must be a string and is required"
           },
           organiser: {
            bsonType: "string",
            description: "must be a string and is required"
           },
           date: {
            bsonType: "date",
            description: "must be a string and is required"
           },
           address: {
            bsonType: "string",
            description: "must be a string and is required"
           },
           //Array definition
           organiser: {
               bsonType: ["array"],
               items: {
                   bsonType: ["object"],
                   //Comments are not mandatory but if there is a comment it needs these two fields
                   required: ["fullName", "email", "YoE"],
                   additionalProperties: false,
                   description: "'items' must contain the stated fields.",
                   properties: {
                       fullName: {
                           bsonType: "string",
                           description: "must be a string and is required"
                       },
                       email: {
                           bsonType: "string",
                           description: "must be a string and is required"
                       },
                       YoE: {
                        bsonType: "int",
                        description: "must be a string and is required"
                    }
                   }
               }
           }
        }
     }
  }
})