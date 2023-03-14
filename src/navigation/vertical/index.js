const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',

      // badgeContent: 'new',
      // badgeColor: 'error',
      children: [
        {
          title: 'Home',
          path: '/home'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      title: 'Access Control',
      path: '/acl',
      icon: 'tabler:shield',
      action: 'read',
      subject: 'acl-page'
    }
  ]
}

export default navigation
