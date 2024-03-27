/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fxseop25jnrm0d6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ez3rbuwa",
    "name": "DatePosted",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fxseop25jnrm0d6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ez3rbuwa",
    "name": "field",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
