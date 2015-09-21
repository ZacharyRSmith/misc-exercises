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

  it("should parse a chunk starting with <h1>, <h2>...as a #, ##...chunk", function () {
    fs.writeFileSync('tests_reverse/hashtags.html',
                     '<h1>Chunk starting with one hashtag.</h1>\n' +
                     '<h3>Chunk starting with three hashtags.</h3>\n' +
                     '<h5>Chunk starting with five hashtags.</h5>\n');
    fs.writeFileSync('tests_reverse/hashtags_expected.md',
                     '# Chunk starting with one hashtag.\n' +
                     '### Chunk starting with three hashtags.\n' +
                     '##### Chunk starting with five hashtags.\n');
    mdParserReverse('tests_reverse/hashtags.html', 'tests_reverse/hashtags.md');
    var actual = fs.readFileSync('tests_reverse/hashtags.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/hashtags_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/hashtags.html');
    fs.unlink('tests_reverse/hashtags_expected.md');
    fs.unlink('tests_reverse/hashtags.md');
  });

  //   it("should parse a chunk starting with #, ##... as a <h1>, <h2>...chunk", function () {
  //   mdParser('tests/hashtags.md', 'tests/hashtags.html');
  //   var actual = fs.readFileSync('tests/hashtags.html', 'utf8'),
  //       expected = fs.readFileSync('tests/hashtags_expected.html', 'utf8');
  //   expect(actual).toEqual(expected);
  // });
});
