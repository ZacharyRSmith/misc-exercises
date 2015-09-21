var fs = require('fs'),
    mdParserReverse = require('../md_parser_reverse').mdParserReverse;


describe('mdParserReverse', function () {
  it("should parse 1 paragraph as 1 chunk", function () {
    fs.writeFileSync('tests_reverse/one_paragraph.html',
                     '<p>This is the first line of the paragraph.\n' +
                      'This is the second line of the same paragraph.</p>\n');
    fs.writeFileSync('tests_reverse/one_paragraph_expected.md',
                     'This is the first line of the paragraph.\n' +
                     'This is the second line of the same paragraph.\n');
    mdParserReverse('tests_reverse/one_paragraph.html', 'tests_reverse/one_paragraph.md');
    var actual = fs.readFileSync('tests_reverse/one_paragraph.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/one_paragraph_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/one_paragraph.html');
    fs.unlink('tests_reverse/one_paragraph_expected.md');
    fs.unlink('tests_reverse/one_paragraph.md');
  });

  it("should parse 2 paragraphs as 2 separated lines", function () {
    fs.writeFileSync('tests_reverse/two_paragraphs.html',
                     '<p>This is the first line of the first paragraph.</p>\n' +
                     '<p>This is the first line of the second paragraph.</p>\n');
    fs.writeFileSync('tests_reverse/two_paragraphs_expected.md',
                     'This is the first line of the first paragraph.\n' +
                     '\n' +
                     'This is the first line of the second paragraph.\n');
    mdParserReverse('tests_reverse/two_paragraphs.html', 'tests_reverse/two_paragraphs.md');
    var actual = fs.readFileSync('tests_reverse/two_paragraphs.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/two_paragraphs_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/two_paragraphs.html');
    fs.unlink('tests_reverse/two_paragraphs_expected.md');
    fs.unlink('tests_reverse/two_paragraphs.md');
  });
});
