interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-th'
  },
  {
    name: 'Users',
    url: '/user',
    icon: 'fa fa-users',
    children: [
      // {
      //   name: 'Registration',
      //   url: '/user/Registration',
      //   icon: 'fa fa-id-card'
      // },
      {
        name: 'Departments',
        url: '/user/departments',
        icon: 'fa fa-desktop'
      },
      {
        name: 'Teams',
        url: '/user/teams',
        icon: 'fa fa-users'
      },
      {
        name: 'Roles',
        url: '/user/createroles',
        icon: 'fa fa-id-card'
      },
      {
        name: 'Access',
        url: '/user/userroles',
        icon: 'fa fa-id-card'
      },
      {
        name: 'Users',
        url: '/user/userlist',
        icon: 'icon-people'
      },
    ]
  },
  // {
  //   name: 'Customers',
  //   url: '/customer',
  //   icon:'fa fa-viacoin',
  //   children: [
  //     {
  //       name: 'List',
  //       url: '/customer/customerlist',
  //       icon: 'fa fa-users'
  //     },
  //   ]
  // },
  // {
  //   name: 'Riders',
  //   url: '/rider',
  //   icon:'fa fa-viacoin',
  //   children: [
  //     {
  //       name: 'List',
  //       url: '/rider/riderlist',
  //       icon: 'fa fa-users'
  //     },
  //   ]
  // },
  // {
  //   name: 'Vendors',
  //   url: '/vendors',
  //   icon:'fa fa-viacoin',
  //   children: [
  //     {
  //       name: 'R&R',
  //       url: '/vendors/RandR',
  //       icon: 'fa fa-taxi',
  //     },
  //   ]
  // },
  // {
  //   name: 'Complaints',
  //   url: '/RequestDetails',
  //   icon: 'fa fa-envelope',
  //   children: [
  //     {
  //       name: 'R&R',
  //       url: '/RequestDetails/RandR',
  //       icon: 'fa fa-taxi', 
  //     },{
  //       name: 'Wooz',
  //       url: '/RequestDetails/Wooz',
  //       icon: 'fa fa-motorcycle',
  //     },{
  //       name: 'Generalized',
  //       url: '/RequestDetails/genralized',
  //       children:[
  //         {
  //           name:'list',
  //           url: '/RequestDetails/genralized/list',
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: 'Resolve',
  //   url: '/complaints',
  //   icon:'fa fa-viacoin',
  //   children: [
  //     {
  //       name: 'List',
  //       url: '/complaints/complaintslist',
  //       icon: 'fa fa-users'
  //     },
  //   ]
  // },
  // {
  //   name: 'Transactions',
  //   url: '/Transactions',
  //   icon: 'fa fa-exchange',
  //   children: [
  //     {
  //       name: 'RandR',
  //       url: '/Transactions/RandR',
  //       icon: 'fa fa-taxi',
  //     },{
  //       name: 'Wooz',
  //       url: '/Transactions/Wooz',
  //       icon: 'fa fa-motorcycle',
  //     }
  //   ]
  // },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'fa fa-bar-chart',
    children: [
      {
        name: 'List',
        url: 'reports/list',
        icon: 'fa fa-list',        
      }     

    ]
  },
   {
    name: 'Admins',
    url: '/Admins',
    icon: 'fa fa-cogs',
    children: [
      {
        name: 'Departments',
        url: '/admins/departments',
        icon: 'fa fa-sitemap',
      }
    ]
  },
  {
    name: 'Requests',
    url: '/requests',
    icon: 'fa fa-envelope-open-o',
    children: [
      {
        name: 'Reqests List',
        url: '/requests/list',        
        icon: 'fa fa-list',
      }
    ]
  },
  {
    name: 'Feedback',
    url: '/feedback',
    icon: 'fa fa-pencil-square-o',
    children: [
      {
        name: 'Feedbacks',
        icon: 'fa fa-list',
        url: '/feedback/list',
      }
    ]
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'fa fa-wrench'
  },
];
