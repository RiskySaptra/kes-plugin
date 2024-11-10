/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main-page/index.js":
/*!********************************!*\
  !*** ./src/main-page/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconPencilPlus.mjs");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/main-page/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/main-page/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: {
    images: {
      type: "array",
      default: []
    },
    companyProfileImage: {
      type: "object",
      default: {
        id: null,
        url: "",
        alt: ""
      }
    },
    pdfFile: {
      type: "object",
      default: {
        id: null,
        url: "",
        title: ""
      }
    },
    companyProfileDesc: {
      type: "string"
    },
    phoneNumber: {
      type: "string",
      default: ""
    },
    message: {
      type: "string",
      default: ""
    },
    ourProductsImages: {
      type: "array",
      default: []
    },
    ourProductsDesc: {
      type: "string"
    }
  },
  edit: props => {
    const {
      attributes: {
        images,
        companyProfileImage,
        pdfFile,
        companyProfileDesc,
        phoneNumber,
        message,
        ourProductsDesc,
        ourProductsImages
      },
      setAttributes
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

    // Function to handle image selection
    const onSelectOurProductsImages = newImages => {
      const selectedImages = newImages.map(image => ({
        id: image.id,
        url: image.url,
        alt: image.alt
      }));
      setAttributes({
        ourProductsImages: selectedImages
      });
    };

    // Function to handle image selection
    const onSelectImages = newImages => {
      const selectedImages = newImages.map(image => ({
        id: image.id,
        url: image.url,
        alt: image.alt
      }));
      setAttributes({
        images: selectedImages
      });
    };

    // Function to handle company profile image selection
    const onSelectImage = newImage => {
      const selectedImage = {
        id: newImage.id,
        url: newImage.url,
        alt: newImage.alt
      };
      setAttributes({
        companyProfileImage: selectedImage
      });
    };
    const onSelectPdf = file => {
      const selectedFile = {
        id: file.id,
        url: file.url,
        title: file.title
      };
      setAttributes({
        pdfFile: selectedFile
      });
    };
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container p-8 mx-auto bg-gray-50 rounded-lg shadow-lg my-6 not-prose ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-2xl font-semibold text-gray-800 dark:text-white my-5",
          children: "Select Banner Images:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImages,
            multiple: true,
            gallery: true,
            allowedTypes: ["image"],
            value: images.map(image => image.id),
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: open,
              className: "mt-3 mb-5 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 flex items-center gap-2",
              children: images.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: ["Edit Banners ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  size: 20
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: ["Add Banners ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  size: 20
                })]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "overflow-x-auto scrollbar-hide px-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex gap-6 w-max p-5",
            children: images.map(image => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "inline-block relative group",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: image.url,
                alt: image.alt,
                className: "rounded-lg w-[280px] h-[180px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              })
            }, image.id))
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "text-2xl font-semibold text-gray-800 dark:text-white my-5",
          children: "Company Profile:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex flex-col items-center p-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "not-prose",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "font-medium",
              children: "Selected Image:"
            }), companyProfileImage && companyProfileImage.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "relative",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: companyProfileImage.url,
                alt: companyProfileImage.alt,
                className: "rounded-lg w-[590px] h-[337px] object-cover"
              })
            }, companyProfileImage.id) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "w-[590px] h-[337px] bg-slate-800 rounded-xl flex justify-center items-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "text-white",
                children: "Upload an image"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ["image"],
            multiple: false,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              onClick: open,
              className: "mt-4 bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300",
              children: companyProfileImage && companyProfileImage.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: ["Edit Image ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  size: 20
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: ["Add Image ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  size: 20
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "h-full flex flex-col gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "font-medium text-lg",
              children: "About Company:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex-1 bg-white rounded-lg px-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h3",
                placeholder: "Enter your text here...",
                value: companyProfileDesc,
                onChange: newText => setAttributes({
                  companyProfileDesc: newText
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex flex-col justify-end mb-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "font-medium",
              children: "Upload a PDF File:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: onSelectPdf,
              allowedTypes: ["application/pdf"],
              multiple: false,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                onClick: open,
                className: "mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  size: 20
                }), pdfFile && pdfFile.id ? "Replace PDF" : "Upload PDF"]
              })
            }), pdfFile && pdfFile.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "mt-3 text-sm text-gray-600",
              children: ["Uploaded File: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                children: pdfFile.title
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "p-5 bg-gray-100 rounded-md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "WhatsApp Phone Number",
              help: "Enter the phone number in international format without the + sign.",
              value: phoneNumber,
              onChange: newNumber => setAttributes({
                phoneNumber: newNumber
              }),
              placeholder: "Example: 628123456789",
              className: "w-full"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Predefined Message",
              help: "This message will be sent when the user clicks the button.",
              value: message,
              onChange: newMessage => setAttributes({
                message: newMessage
              }),
              placeholder: "Enter your message",
              className: "w-full mt-4"
            }), phoneNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "mt-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                href: whatsAppUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-3 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 flex items-center gap-2",
                children: ["Preview Contact ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  size: 20
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-2xl font-semibold text-gray-800 dark:text-white my-5",
            children: "Our Product:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "font-medium text-lg",
            children: "Our Product Description:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "flex-1 bg-white rounded-lg px-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              placeholder: "Enter your text here...",
              value: ourProductsDesc,
              onChange: newText => setAttributes({
                ourProductsDesc: newText
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-lg font-medium text-gray-900 dark:text-white mt-5",
            children: "Select Banner Images"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: onSelectOurProductsImages,
              multiple: true,
              gallery: true,
              allowedTypes: ["image"],
              value: ourProductsImages.map(image => image.id),
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: open,
                className: "mt-1 mb-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 inline",
                children: ourProductsImages.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex gap-1 items-center",
                  children: ["Edit Banners ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    size: 20
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "flex gap-1 items-center",
                  children: ["Add Banners ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    size: 20
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "overflow-x-auto whitespace-nowrap scrollbar-hide mt-5 py-8 px-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "flex gap-5 w-max",
              children: ourProductsImages.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "inline-block relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: image.url,
                  alt: image.alt,
                  className: "rounded-lg w-[280px] h-[180px] object-center"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "mt-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                    type: "text",
                    placeholder: "Enter image description",
                    value: image.description || "",
                    onChange: e => {
                      const updatedImages = [...ourProductsImages];
                      updatedImages[index].description = e.target.value;
                      setAttributes({
                        ourProductsImages: updatedImages
                      });
                    },
                    className: "w-full mt-1 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  })
                })]
              }, image.id))
            })
          })]
        })]
      })
    });
  }
});

/***/ }),

/***/ "./src/main-page/style.scss":
/*!**********************************!*\
  !*** ./src/main-page/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReactComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.mjs */ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs");
/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */




const createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "svg",
      {
        ref,
        ..._defaultAttributes_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][type],
        width: size,
        height: size,
        className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(" "),
        ...type === "filled" ? {
          fill: color
        } : {
          strokeWidth: stroke,
          stroke: color
        },
        ...rest
      },
      [
        title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", { key: "svg-title" }, title),
        ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  Component.displayName = `${iconNamePascal}`;
  return Component;
};


//# sourceMappingURL=createReactComponent.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};


//# sourceMappingURL=defaultAttributes.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconEdit)
/* harmony export */ });
/* harmony import */ var _createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.mjs */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs");
/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */



var IconEdit = (0,_createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("outline", "edit", "IconEdit", [["path", { "d": "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", "key": "svg-0" }], ["path", { "d": "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z", "key": "svg-1" }], ["path", { "d": "M16 5l3 3", "key": "svg-2" }]]);


//# sourceMappingURL=IconEdit.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconPencilPlus.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconPencilPlus.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconPencilPlus)
/* harmony export */ });
/* harmony import */ var _createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.mjs */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs");
/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */



var IconPencilPlus = (0,_createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("outline", "pencil-plus", "IconPencilPlus", [["path", { "d": "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", "key": "svg-0" }], ["path", { "d": "M13.5 6.5l4 4", "key": "svg-1" }], ["path", { "d": "M16 19h6", "key": "svg-2" }], ["path", { "d": "M19 16v6", "key": "svg-3" }]]);


//# sourceMappingURL=IconPencilPlus.mjs.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconUpload)
/* harmony export */ });
/* harmony import */ var _createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.mjs */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs");
/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */



var IconUpload = (0,_createReactComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("outline", "upload", "IconUpload", [["path", { "d": "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", "key": "svg-0" }], ["path", { "d": "M7 9l5 -5l5 5", "key": "svg-1" }], ["path", { "d": "M12 4l0 12", "key": "svg-2" }]]);


//# sourceMappingURL=IconUpload.mjs.map


/***/ }),

/***/ "./src/main-page/block.json":
/*!**********************************!*\
  !*** ./src/main-page/block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"kes-internal-block/main-page-block","version":"0.1.0","title":"Main Page Block","category":"theme","icon":"smiley","description":"Custom kes internal block","example":{},"supports":{"html":false},"textdomain":"kes-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main-page/index": 0,
/******/ 			"main-page/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkes_block"] = self["webpackChunkkes_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main-page/style-index"], () => (__webpack_require__("./src/main-page/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map