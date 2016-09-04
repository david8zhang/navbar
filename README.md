# Description
General purpose navbar implemented in ReactJS

# Usage
Pass in options and a title to the navbar. You can also pass inline styles

```
var options = [{
	title: 'option 1',
	route: '/',
	drops: ['suboption 1', 'suboption 2', 'suboption 3']
}, {
	title: 'option 2',
	route: '/',
	drops: ['suboption 1', 'suboption 2', 'suboption 3']

}]

var style = {
	backgroundColor:'blue',
	padding:'20px'
}

<Navbar options={options} title='Sample Title' style={style}/> 
```

You can also pass in custom header and options JSX

```
var option = <li className='navbar-option'>
	<a href='/'>Custom Option 1</a>
</li>

var header = <h4>Custom Title</h4>

<Navbar custom_option={option} custom_header={header}/>
```

