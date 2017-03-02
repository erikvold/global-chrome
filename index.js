"use strict";

if (typeof chrome !== "undefined")
{
  module.exports = chrome;
}
else
{
  module.exports = {};
}
