/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv8l1hf84u6lfpr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyyz15lu",
    "name": "Contact",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv8l1hf84u6lfpr")

  // remove
  collection.schema.removeField("iyyz15lu")

  return dao.saveCollection(collection)
})
