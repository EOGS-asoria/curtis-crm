import{r as d,j as e}from"./store-BLsqIzVE.js";import{u as x}from"./app-Bjqn6gf7.js";function u({setNewAsc:n}){const[i,l]=d.useState(""),{asc:t}=x(s=>s.asc);function o(s){s.preventDefault();const a=t.filter(c=>Object.values(c).some(r=>typeof r=="string"&&r.toLowerCase().includes(i.toLowerCase())));n(a)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between pt-9",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-800 ",children:"ASC"}),e.jsxs("span",{className:"px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full",children:["count: ",t.length," "]})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"These companies have purchased in the last 12 months."})]}),e.jsxs("div",{className:"flex items-center mt-4 gap-x-3",children:[e.jsxs("button",{className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 ",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_3098_154395)",children:e.jsx("path",{d:"M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832",stroke:"currentColor",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_3098_154395",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("span",{children:"Import"})]}),e.jsxs("button",{className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Add vendor"})]})]})]}),e.jsx("form",{onSubmit:o,className:"mt-6 md:flex md:items-center md:justify-between",children:e.jsxs("div",{className:"relative flex items-center mt-4 md:mt-0",children:[e.jsx("span",{className:"absolute",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 mx-3 text-gray-400 ",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e.jsx("input",{onChange:s=>l(s.target.value),type:"text",placeholder:"Search",className:"block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"})]})})]})}export{u as default};