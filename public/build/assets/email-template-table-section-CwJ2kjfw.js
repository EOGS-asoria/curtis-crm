import{j as e,d as i}from"./store-0Qzhg5Cj.js";import{u as l}from"./app-DKWGkyWz.js";import a from"./email-template-edit-section-DskCdOiu.js";import n from"./email-template-delete-section-CdcJOVYh.js";import"./PencilSquareIcon-BK44Tj4M.js";import"./modal-BB8Ob1Bx.js";import"./transition-BQz_x7pe.js";import"./dialog-B3BbVgJi.js";import"./email-template-thunk-CEoFNKUr.js";import"./email-template-service-ChJfErP3.js";import"./TrashIcon-BYRyR17s.js";function w(){const{email_templates:s}=l(t=>t.email_templates);return console.log("email_templates",s),s?e.jsx(e.Fragment,{children:e.jsxs("section",{className:"px-4 py-12 mx-auto bg-white",children:[e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:"Email Templates Table"})})}),e.jsx("div",{className:"flex items-center mt-4 gap-x-3",children:e.jsxs(i,{href:"/administrator/email_template/create",className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600  ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Create Email Template"})]})})]}),e.jsx("div",{className:"flex flex-col mt-6",children:e.jsx("div",{children:e.jsx("div",{className:"w-full py-2 ",children:e.jsx("div",{className:"overflow-hidden border border-gray-200  md:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ",children:e.jsxs("button",{className:"flex items-center gap-x-3 focus:outline-none",children:[e.jsx("span",{children:"ID"}),e.jsxs("svg",{className:"h-3",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.1"}),e.jsx("path",{d:"M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.1"}),e.jsx("path",{d:"M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.3"})]})]})}),e.jsx("th",{scope:"col",className:"px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  justify-center items-center",children:"Name"}),e.jsx("th",{scope:"col",className:"px-12 py-3.5 text-sm font-normal text-right rtl:text-right text-gray-500  justify-center items-center",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200 ",children:s.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.id})})}),e.jsx("td",{className:"px-12 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.template_name})})}),e.jsxs("td",{className:"px-4 text-sm whitespace-nowrap flex items-center justify-end gap-2 py-2",children:[e.jsx(a,{data:t}),e.jsx(n,{data:t})]})]},r))})]})})})})})]})}):e.jsx("div",{children:"Loading..."})}export{w as default};