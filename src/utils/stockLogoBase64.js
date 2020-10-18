const image =
  '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';
module.exports = image;