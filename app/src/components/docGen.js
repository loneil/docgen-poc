const log = require('npmlog');
const carbone = require('carbone');
const stream = require('stream');

const docGen = {
  /** TODO: Fill in here...
   *  @param {object} file TEMP
   *  @param {object} context The object of replacement variables
   *  @param {object} response The server response to write the generated file to
   */
  generateDocument: async (body, response) => {
    carbone.render('./node_modules/carbone/examples/simple.odt', body.context, function (err, result) {
      if (err) {
        log(`Error during Carbone generation. Error: ${err}`);
        throw new Error(err);
      }
      // write the result
      var readStream = new stream.PassThrough();
      readStream.end(result);

      response.set('Content-disposition', 'attachment; filename=test');
      response.set('Content-Type', 'text/plain');

      readStream.pipe(response);
    });
  }
};

module.exports = docGen;
