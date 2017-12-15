/*
 * data-converter
 * @author: Rafael Mançan <rafael.mancan@gmail.com>
 */

var convert = require('xml-js');

/**
 * @param data
 * @param status
 * @param format
 */
function dataConverter(data, status, format) {
    var options = {
        spaces: 4,
        compact: true,
        fullTagEmptyElement: true,
        ignoreDeclaration: false,
        ignoreInstruction: false,
        ignoreAttributes: false
    };

    response = JSON.stringify({
        "status": status,
        "error": data,
        "response": null
    });

    if (status === 200) {
        response = JSON.stringify({
            "status": 200,
            "error": null,
            "response": data
        });
    }


    if (format === "xml") {
        return convert.json2xml(response, options);
    }

    return response;
}

module.exports = dataConverter;