var fs = require('fs'),
		mdParser = require('../md_parser').mdParser;


describe('mdParser', function () {
	it("should parse 2 consecutive lines as 1 chunk", function () {
		mdParser('tests/two_consecutive_lines.md', 'tests/two_consecutive_lines.html');
		var actual = fs.readFileSync('tests/two_consecutive_lines.html', 'utf8'),
				expected = fs.readFileSync('tests/two_consecutive_lines_expected.html', 'utf8');
		expect(actual).toEqual(expected);
	});

	it("should parse 2 separated lines as 2 chunks", function () {
		mdParser('tests/two_separate_lines.md', 'tests/two_separate_lines.html');
		var actual = fs.readFileSync('tests/two_separate_lines.html', 'utf8'),
				expected = fs.readFileSync('tests/two_separate_lines_expected.html', 'utf8');
		expect(actual).toEqual(expected);
	});

	it("should parse a chunk starting with #, ##... as a <h1>, <h2>...chunk", function () {
		mdParser('tests/hashtags.md', 'tests/hashtags.html');
		var actual = fs.readFileSync('tests/hashtags.html', 'utf8'),
				expected = fs.readFileSync('tests/hashtags_expected.html', 'utf8');
		expect(actual).toEqual(expected);
	});

	it("should parse '*' as '<em>' tags", function () {
		mdParser('tests/em.md', 'tests/em.html');
		var actual = fs.readFileSync('tests/em.html', 'utf8'),
				expected = fs.readFileSync('tests/em_expected.html', 'utf8');
		expect(actual).toEqual(expected);
	});

	it("should not parse '\\*'", function () {
		fs.writeFileSync('tests/escaped_em.md',
										 'My \\*escaped text\\* is awesome.');
		fs.writeFileSync('tests/escaped_em_expected.html',
										 '<p>My *escaped text* is awesome.</p>\n');
		mdParser('tests/escaped_em.md', 'tests/escaped_em.html');
		var actual = fs.readFileSync('tests/escaped_em.html', 'utf8'),
				expected = fs.readFileSync('tests/escaped_em_expected.html', 'utf8');
		expect(actual).toEqual(expected);

		fs.unlink('tests/escaped_em.md');
		fs.unlink('tests/escaped_em_expected.html');
		fs.unlink('tests/escaped_em.html');
	});

	it("should enclose text wrapped in '**' with '<strong>' tags", function () {
		mdParser('tests/strong.md', 'tests/strong.html');
		var actual = fs.readFileSync('tests/strong.html', 'utf8'),
				expected = fs.readFileSync('tests/strong_expected.html', 'utf8');
		expect(actual).toEqual(expected);
	});

	it("should parse '**' nested in '*'", function () {
		fs.writeFileSync('tests/strong_in_em.md',
										 'My *emphasized and **stronged** text* is awesome.');
		fs.writeFileSync('tests/strong_in_em_expected.html',
										 '<p>My <em>emphasized and <strong>stronged</strong> text</em> is awesome.</p>\n');
		mdParser('tests/strong_in_em.md', 'tests/strong_in_em.html');
		var actual = fs.readFileSync('tests/strong_in_em.html', 'utf8'),
				expected = fs.readFileSync('tests/strong_in_em_expected.html', 'utf8');
		expect(actual).toEqual(expected);

		fs.unlink('tests/strong_in_em.md');
		fs.unlink('tests/strong_in_em_expected.html');
		fs.unlink('tests/strong_in_em.html');
	});

	it("should parse an unordered list", function () {
		fs.writeFileSync('tests/unordered_list.md',
										 'My favorite cuisines are:\n' +
										 '\n' +
										 '* Sushi\n' +
										 '* Barbeque\n' +
										 '* Mexican\n');
		fs.writeFileSync('tests/unordered_list_expected.html',
										 '<p>My favorite cuisines are:</p>\n' +
										 '<ul>\n' +
										 '  <li>Sushi</li>\n' +
										 '  <li>Barbeque</li>\n' +
										 '  <li>Mexican</li>\n' +
										 '</ul>\n');
		mdParser('tests/unordered_list.md', 'tests/unordered_list.html');
		var actual = fs.readFileSync('tests/unordered_list.html', 'utf8'),
				expected = fs.readFileSync('tests/unordered_list_expected.html', 'utf8');
		expect(actual).toEqual(expected);

		fs.unlink('tests/unordered_list.md');
		fs.unlink('tests/unordered_list_expected.html');
		fs.unlink('tests/unordered_list.html');
	});

	it("should parse an ordered list", function () {
		fs.writeFileSync('tests/ordered_list.md',
										 'My favorite cuisines are:\n' +
										 '\n' +
										 '1. Sushi\n' +
										 '2. Barbeque\n' +
										 '3. Mexican\n');
		fs.writeFileSync('tests/ordered_list_expected.html',
										 '<p>My favorite cuisines are:</p>\n' +
										 '<ol>\n' +
										 '  <li>Sushi</li>\n' +
										 '  <li>Barbeque</li>\n' +
										 '  <li>Mexican</li>\n' +
										 '</ol>\n');
		mdParser('tests/ordered_list.md', 'tests/ordered_list.html');
		var actual = fs.readFileSync('tests/ordered_list.html', 'utf8'),
				expected = fs.readFileSync('tests/ordered_list_expected.html', 'utf8');
		expect(actual).toEqual(expected);

		fs.unlink('tests/ordered_list.md');
		fs.unlink('tests/ordered_list_expected.html');
		fs.unlink('tests/ordered_list.html');
	});
});
