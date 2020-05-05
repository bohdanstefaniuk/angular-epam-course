# Version 1.9
- Added integration tests for Cart service;
- Added tests for Generator service;
- Added tests for Generator factory function;
- Added tests for OrderBy pipe;
- Added integration tests for AdminProducts component;
- Added shallow tests for App component;
- Generated coverage report:

```
=============================== Coverage summary ===============================
Statements   : 56.28% ( 103/183 )
Branches     : 38.46% ( 10/26 )
Functions    : 39.13% ( 27/69 )
Lines        : 54.27% ( 89/164 )
================================================================================
```

# Version 1.8.1
- Added FormBuilder;
- Moved validation message generation from template to component class;

# Version 1.8
- In order form added reactive forms;
- Added multiply phone input;
- Added input fields validators;

# Version 1.6.1
- Added http interceptor which print selected requests duration;

# Version 1.6
- Added json-server for dev purposes;
- Changed product service, added http client support (as Promise);
- Changed order service, added http client support (as Observable);
- Improved orders UI;
- Added little UI improvements in admin panel;

# Version 1.5
- Added auth service;
- Added Login ang Logout screens;
- Added guard for admin panel;
- Added orders and auth caching in local storage;

# Version 1.4
- Improved UI;
- Added routing;
- Added order functionality;
- Added main navigation bar;

# Version 1.3
- Added pipes for formatting prices, category and product add date;
- Changed return type in ProductService from Array of products to Observable;
- Added OrderBy pipe for cart items;

# Version 1.2
- Added About component;
- Added service for working with local storage;
- Added directive which changing element border color on click;
- Added constant service for getting application constants;
- Added generator service for generating random string;

# Version 1.1
- Added "add product" feature;
- Added cart item highlighting on hover;

# Version 1.0
- Added Product and product list component;
- Added cart feature (Cart service, cart item and list component);