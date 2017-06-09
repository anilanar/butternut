module.exports = [
	{
		description: 'removes whitespace before parens',
		input: `new Foo (bar)`,
		output: `new Foo(bar)`
	},

	{
		description: 'removes whitespace inside parens',
		input: `new Foo( a, b , c )`,
		output: `new Foo(a,b,c)`
	},

	{
		description: 'preserves parens around improbable callee',
		input: `new (-1 / 2)`,
		// TODO remove space
		output: `new (-.5)`
	},

	{
		description: 'wraps with parens when new expression without params has member access with dot',
		input: `new Foo().bar`,
		output: `(new Foo).bar`
	},

	{
		description: 'wraps with parens when new expression without params has member access brackets',
		input: `new Foo()[bar]`,
		output: `(new Foo)[bar]`
	},

	{
		description: 'wraps with single set of parens when new expression without params has member access but wrapped in parens already',
		input: `(new Foo()).bar`,
		output: `(new Foo).bar`
	},

	{
		description: 'nested parameterless new expressions with member accesses',
		input: `x = new new Foo().Bar().quu`,
		output: `x=(new (new Foo).Bar).quu`
	},

	{
		description: 'removes parens from new expression without params',
		input: `x = new Foo()`,
		output: `x=new Foo`
	}
];
