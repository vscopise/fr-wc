const settings = {
  name: "fr-wc",
  state: {
    frontity: {
      url: 'https://wp.laotramirada.com.uy',
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development'
    }
  },
  packages: [
    {
      name: 'frontity-wc-theme',
      state: {
        theme: {
          menu: [
            ['Home', '/'],
            ['Shop', '/products/'],
            ['Tshirts', '/product_cat/tshirts'],
            ['Accessories', '/product_cat/accessories'],
            ['Terror', '/genero/terror'],
            ['Checkout', '/checkout/'],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          checkoutFields: [
            { name: 'firstName', title: 'First Name', value: '', error: false, half: true, isRequired: false },
            { name: 'lastName', title: 'Last Name', value: '', error: false, half: true, isRequired: false },
            { name: 'companyName', title: 'Company Name', value: '', error: false, half: false, isRequired: false },
            { name: 'streetAddress', title: 'Street', value: '', error: false, half: false, isRequired: false },
            { name: 'apartment', title: 'Apartment', value: '', error: false, half: false, isRequired: false },
            { name: 'city', title: 'City', value: '', error: false, half: false, isRequired: false },
            { name: 'country', title: 'Country', value: '', error: false, half: false, isRequired: false },
            { name: 'postcode', title: 'Post Code', value: '', error: false, half: false, isRequired: false },
            { name: 'phone', title: 'Phone', value: '', error: false, half: false, isRequired: false },
            { name: 'email', title: 'Email', value: '', error: false, half: false, isRequired: true },
            { name: 'notes', title: 'Notes', value: '', error: false, half: false, isRequired: false },
          ],
          token: '',
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'http://wp.laotramirada.com.uy/wp-json',
          postTypes: [
            {
              type: 'product',
              endpoint: 'product',
              archive: '/products'
            },
            {
              type: 'libro',
              endpoint: 'libro',
              archive: '/libros'
            }
          ],
          taxonomies: [
            {
              taxonomy: 'product_cat',
              endpoint: 'product_cat',
              postTypeEndpoint: 'product'
            },
            {
              taxonomy: 'genero',
              endpoint: 'genero',
              postTypeEndpoint: 'libro'
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
