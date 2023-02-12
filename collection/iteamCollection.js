"use strict";

class itemCollection {
  constructor(model) {
    this.model = model;
  }

  async create(record) {
    let newRecord = await this.model.create(record);
    return newRecord;
  }

  async read(id) {
    try {
      if (id) {
        console.log("in read in side if");
        var record = await this.model.findOne({ where: { id: id } });
      } else {
        var record = await this.model.findAll();
      }
      return record;
    } catch (err) {
      console.log(
        `Error in reading data from modle : (${this.model.name}) with id : ${id}`
      );
    }
  }

  async update(id, record) {
    try {
      let updatedRecord = await this.model.update(record, {
        where: { id: id },
      });
      return updatedRecord;
    } catch (err) {
      console.log(
        `Error in updating data from modle : (${this.model.name}) with id : ${id}`
      );
    }
  }

  async delete(id) {
    try {
      let deletedRecord = await this.model.destroy({ where: { id: id } });
      return deletedRecord;
    } catch (err) {
      console.log(
        `Error in deleting data from modle : (${this.model.name}) with id : ${id}`
      );
    }
  }

  async getByCode(code) {
    try {
      let record = await this.model.findOne({ where: { code: code } });
      return record;
    } catch (err) {
      console.log(
        `Error in reading data from modle : (${this.model.name}) with code : ${code}`
      );
    }
  }

  async findByBarcode(barcode) {
    try {
      let record = await this.model.findOne({
        where: { itemsBarCode: barcode },
      });
      return record;
    } catch (err) {
      console.log(
        `Error in reading data from modle : (${this.model.name}) with barcode : ${barcode}`
      );
    }
  }
}

module.exports = itemCollection;
