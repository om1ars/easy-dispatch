// import React from "react";
// import { useLocation } from "react-router-dom";

// import routes from "../helpers/routes";

// import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

// const AppBreadcrumb = () => {
//   const currentLocation = useLocation().pathname;

//   const getRouteName = (pathname: any, routes: any) => {
//     const currentRoute = routes?.find((route: any) => route?.path === pathname);
//     return currentRoute?.name;
//   };

//   const getBreadcrumbs = (location: any) => {
//     const breadcrumbs: any = [];
//     location
//       .split("/")
//       .reduce((prev: any, curr: any, index: any, array: any) => {
//         const currentPathname = `${prev}/${curr}`;
//         breadcrumbs.push({
//           pathname: currentPathname,
//           name: getRouteName(currentPathname, routes),
//           active: index + 1 === array.length ? true : false,
//         });
//         return currentPathname;
//       });
//     return breadcrumbs;
//   };

//   const breadcrumbs = getBreadcrumbs(currentLocation);

//   return (
//     <CBreadcrumb className="m-0 ms-2">
//       <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
//       {breadcrumbs.map((breadcrumb: any, index: any) => {
//         return (
//           <CBreadcrumbItem
//             {...(breadcrumb.active
//               ? { active: true }
//               : { href: breadcrumb.pathname })}
//             key={index}
//           >
//             {breadcrumb.name}
//           </CBreadcrumbItem>
//         );
//       })}
//     </CBreadcrumb>
//   );
// };

// export default React.memo(AppBreadcrumb);
