module.exports = [
	{
		description: 'rewrites `a = a + 1` as `a+=1`',
		input: `a = a + 1`,
		output: `a+=1`
	},

	{
		description: 'rewrites `a = a + a` as `a+=a`',
		input: `a = a + a`,
		output: `a+=a`
	},

	{
		description: 'does not rewrite `a = 1 + a` as `a+=1`, because it\'s not commutative',
		input: `a = 1 + a`,
		output: `a=1+a`
	},

	{
		description: 'rewrites `a = a - 1` as `a-=1`',
		input: `a = a - 1`,
		output: `a-=1`
	},

	{
		description: 'does not rewrite `a = 1 - a` as `a-=1`',
		input: `a = 1 - a`,
		output: `a=1-a`
	},

	{
		description: 'rewrites arithmetic expression with value',
		input: `a = 1 + 2 * 3`,
		output: `a=7`
	}
];