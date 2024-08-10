[{"content":"import { screen, render } from '@testing-library/react';\r\n\r\nfunction RoleExample() {\r\n  return(\r\n    <div>\r\n      <a href='/'>Link</a>\r\n      <button>Button</button>\r\n      <footer>Footer</footer>\r\n      <h1>Heading</h1>\r\n      <header>Header</header>\r\n      <img alt=\"description\" /> Img\r\n      <input type=\"checkbox\" /> Checkbox\r\n      <input type=\"number\" /> Spinbutton\r\n      <input type=\"radio\" /> Radio\r\n      <input type=\"text\" /> Textbox\r\n      <li>ListItem</li>\r\n      <ul>ListGroup</ul>\r\n    </div>\r\n  )\r\n}\r\n\r\nrender(<RoleExample />);","type":"code","id":"9b4ef"},{"content":"test('can find elements by role', () => {\r\n    render(<RoleExample />);\r\n\r\n    const roles = [\r\n        'link',\r\n        'button',\r\n        'contentinfo',\r\n        'heading',\r\n        'banner',\r\n        'img',\r\n        'checkbox',\r\n        'spinbutton',\r\n        'radio',\r\n        'textbox',\r\n        'listitem',\r\n        'list'\r\n    ];\r\n\r\n    for(let role of roles) {\r\n        const el = screen.getByRole(role);\r\n\r\n        expect(el).toBeInTheDocument();\r\n    }\r\n});","type":"code","id":"gzwg1"}]