"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/setting/[settingid]";
exports.ids = ["pages/api/setting/[settingid]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more: \n// https://pris.ly/d/help/next-js-best-practices\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixlQUFlO0FBQ2YsZ0RBQWdEO0FBRWhELElBQUlDO0FBRUosSUFBSUMsS0FBeUIsRUFBYyxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPRixNQUFNLEVBQUU7UUFDbEJFLE9BQU9GLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDbEMsQ0FBQztJQUNEQyxTQUFTRSxPQUFPRixNQUFNO0FBQ3hCLENBQUM7QUFDRCxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2trLWVsZWN0cmljYWwtcHJpY2UtY2hlY2tlci8uL2xpYi9wcmlzbWEuanM/NzUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG4vL1xuLy8gTGVhcm4gbW9yZTogXG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxubGV0IHByaXNtYVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/setting/[settingid].js":
/*!******************************************!*\
  !*** ./pages/api/setting/[settingid].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handle(req, res) {\n    const { settingid  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            // var machine = await prisma.machine.findUnique({\n            //     where: {\n            //         id: Number(mid)\n            //     },\n            //     include: {maintenances: true}\n            // })\n            // res.json(machine)\n            res.end(\"GET\");\n            break;\n        case \"POST\":\n            res.end();\n            break;\n        case \"DELETE\":\n            // await prisma.machineip.delete({\n            //     where: { \n            //         id: Number(addressid)\n            //     },\n            // })\n            // var addresses = await prisma.machineip.findMany()\n            // res.json(addresses)\n            res.end(\"DELETE\");\n            break;\n        case \"PUT\":\n            // var machine = req.body\n            // await prisma.machine.update({\n            //     where: {\n            //         id: Number(mid)\n            //     },\n            //     data: machine\n            // })\n            // var machines = await prisma.machine.findMany()\n            // res.json(machines)\n            res.end(\"PUT\");\n            break;\n        case \"PATCH\":\n            var { id , price , charge , relays  } = req.body;\n            var setting = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setting.update({\n                where: {\n                    id: id\n                },\n                data: {\n                    price: Number(price),\n                    charge: Number(charge),\n                    relays: Number(relays)\n                }\n            });\n            var settings = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setting.findMany();\n            res.json(settings);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2V0dGluZy9bc2V0dGluZ2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUV6QixlQUFlQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMzQyxNQUFNLEVBQUVDLFVBQVMsRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQy9CLE9BQVFILElBQUlJLE1BQU07UUFDZCxLQUFLO1lBQ0Qsa0RBQWtEO1lBQ2xELGVBQWU7WUFDZiwwQkFBMEI7WUFDMUIsU0FBUztZQUNULG9DQUFvQztZQUNwQyxLQUFLO1lBQ0wsb0JBQW9CO1lBRXBCSCxJQUFJSSxHQUFHLENBQUM7WUFDUixLQUFNO1FBQ1YsS0FBSztZQUNESixJQUFJSSxHQUFHO1lBQ1AsS0FBTTtRQUNWLEtBQUs7WUFDRCxrQ0FBa0M7WUFDbEMsZ0JBQWdCO1lBQ2hCLGdDQUFnQztZQUNoQyxTQUFTO1lBQ1QsS0FBSztZQUVMLG9EQUFvRDtZQUNwRCxzQkFBc0I7WUFDdEJKLElBQUlJLEdBQUcsQ0FBQztZQUNSLEtBQU07UUFDVixLQUFLO1lBQ0QseUJBQXlCO1lBRXpCLGdDQUFnQztZQUNoQyxlQUFlO1lBQ2YsMEJBQTBCO1lBQzFCLFNBQVM7WUFDVCxvQkFBb0I7WUFFcEIsS0FBSztZQUVMLGlEQUFpRDtZQUNqRCxxQkFBcUI7WUFDckJKLElBQUlJLEdBQUcsQ0FBQztZQUNSLEtBQU07UUFDVixLQUFLO1lBQ0QsSUFBSSxFQUFFQyxHQUFFLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtZQUU1QyxJQUFJQyxVQUFVLE1BQU1iLGtFQUFxQixDQUFDO2dCQUN0Q2UsT0FBTztvQkFDSFAsSUFBSUE7Z0JBQ1I7Z0JBQ0FRLE1BQU07b0JBQ0ZQLE9BQU9RLE9BQU9SO29CQUNkQyxRQUFRTyxPQUFPUDtvQkFDZkMsUUFBUU0sT0FBT047Z0JBQ25CO1lBRUo7WUFFQSxJQUFJTyxXQUFXLE1BQU1sQixvRUFBdUI7WUFDNUNHLElBQUlpQixJQUFJLENBQUNGO1lBRVQsS0FBTTtJQUNkO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2trLWVsZWN0cmljYWwtcHJpY2UtY2hlY2tlci8uL3BhZ2VzL2FwaS9zZXR0aW5nL1tzZXR0aW5naWRdLmpzP2RmZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IHNldHRpbmdpZCB9ID0gcmVxLnF1ZXJ5XHJcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6IFxyXG4gICAgICAgICAgICAvLyB2YXIgbWFjaGluZSA9IGF3YWl0IHByaXNtYS5tYWNoaW5lLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAvLyAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZDogTnVtYmVyKG1pZClcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICBpbmNsdWRlOiB7bWFpbnRlbmFuY2VzOiB0cnVlfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyByZXMuanNvbihtYWNoaW5lKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzLmVuZChcIkdFVFwiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXMuZW5kKClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICAvLyBhd2FpdCBwcmlzbWEubWFjaGluZWlwLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgIC8vICAgICB3aGVyZTogeyBcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZDogTnVtYmVyKGFkZHJlc3NpZClcclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgYWRkcmVzc2VzID0gYXdhaXQgcHJpc21hLm1hY2hpbmVpcC5maW5kTWFueSgpXHJcbiAgICAgICAgICAgIC8vIHJlcy5qc29uKGFkZHJlc3NlcylcclxuICAgICAgICAgICAgcmVzLmVuZChcIkRFTEVURVwiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgIC8vIHZhciBtYWNoaW5lID0gcmVxLmJvZHlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGF3YWl0IHByaXNtYS5tYWNoaW5lLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC8vICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiBOdW1iZXIobWlkKVxyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6IG1hY2hpbmVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgLy8gdmFyIG1hY2hpbmVzID0gYXdhaXQgcHJpc21hLm1hY2hpbmUuZmluZE1hbnkoKVxyXG4gICAgICAgICAgICAvLyByZXMuanNvbihtYWNoaW5lcylcclxuICAgICAgICAgICAgcmVzLmVuZChcIlBVVFwiKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcclxuICAgICAgICAgICAgdmFyIHsgaWQsIHByaWNlLCBjaGFyZ2UsIHJlbGF5cyB9ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgICAgIHZhciBzZXR0aW5nID0gYXdhaXQgcHJpc21hLnNldHRpbmcudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZTogTnVtYmVyKGNoYXJnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXlzOiBOdW1iZXIocmVsYXlzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBhd2FpdCBwcmlzbWEuc2V0dGluZy5maW5kTWFueSgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHNldHRpbmdzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9ICAgIFxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInNldHRpbmdpZCIsInF1ZXJ5IiwibWV0aG9kIiwiZW5kIiwiaWQiLCJwcmljZSIsImNoYXJnZSIsInJlbGF5cyIsImJvZHkiLCJzZXR0aW5nIiwidXBkYXRlIiwid2hlcmUiLCJkYXRhIiwiTnVtYmVyIiwic2V0dGluZ3MiLCJmaW5kTWFueSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/setting/[settingid].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/setting/[settingid].js"));
module.exports = __webpack_exports__;

})();