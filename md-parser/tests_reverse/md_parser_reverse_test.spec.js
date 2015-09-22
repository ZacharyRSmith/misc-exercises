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
                     '\n' +
                     '### Chunk starting with three hashtags.\n' +
                     '\n' +
                     '##### Chunk starting with five hashtags.\n');
    mdParserReverse('tests_reverse/hashtags.html', 'tests_reverse/hashtags.md');
    var actual = fs.readFileSync('tests_reverse/hashtags.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/hashtags_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/hashtags.html');
    fs.unlink('tests_reverse/hashtags_expected.md');
    fs.unlink('tests_reverse/hashtags.md');
  });

  it("should parse 'em' tags as '*'", function () {
    fs.writeFileSync('tests_reverse/em.html',
       '<h1><em>This header should be enclosed in an <code>&lt;em&gt;</code> tag.</em></h1>\n' +
       '<p>This paragraph should have the following text enclosed in an <code>&lt;em&gt;</code> tag:\n' +
       '<em>I am the enclosed text, yay!</em></p>\n' +
       '<p>And <em>this is a chunk</em> with two <code>&lt;em&gt;</code> tags! <em>: D</em></p>\n');
    fs.writeFileSync('tests_reverse/em_expected.md',
       '# *This header should be enclosed in an `<em>` tag.*\n' +
       '\n' +
       'This paragraph should have the following text enclosed in an `<em>` tag:\n' +
       '*I am the enclosed text, yay!*\n' +
       '\n' +
       'And *this is a chunk* with two `<em>` tags! *: D*\n');
    mdParserReverse('tests_reverse/em.html', 'tests_reverse/em.md');
    var actual = fs.readFileSync('tests_reverse/em.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/em_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/em.html');
    fs.unlink('tests_reverse/em_expected.md');
    fs.unlink('tests_reverse/em.md');
  });

  it("should parse 'strong' tags as '**'", function () {
    fs.writeFileSync('tests_reverse/strong.html',
       '<h1><strong>This header should be enclosed in a <code>&lt;strong&gt;</code> tag.</strong></h1>\n' +
       '<p>This paragraph should have the following text enclosed in a <code>&lt;strong&gt;</code> tag:\n' +
       '<strong>I am the enclosed text, yay!</strong></p>\n' +
       '<p>And <strong>this is a chunk</strong> with two <code>&lt;strong&gt;</code> tags! <strong>: D</strong></p>\n');
    fs.writeFileSync('tests_reverse/strong_expected.md',
       '# **This header should be enclosed in a `<strong>` tag.**\n' +
       '\n' +
       'This paragraph should have the following text enclosed in a `<strong>` tag:\n' +
       '**I am the enclosed text, yay!**\n' +
       '\n' +
       'And **this is a chunk** with two `<strong>` tags! **: D**\n');
    mdParserReverse('tests_reverse/strong.html', 'tests_reverse/strong.md');
    var actual = fs.readFileSync('tests_reverse/strong.md', 'utf8'),
        expected = fs.readFileSync('tests_reverse/strong_expected.md', 'utf8');
    expect(actual).toEqual(expected);

    fs.unlink('tests_reverse/strong.html');
    fs.unlink('tests_reverse/strong_expected.md');
    fs.unlink('tests_reverse/strong.md');
  });

  // it("should enclose text wrapped in '**' with '<strong>' tags", function () {
  //   mdParser('tests/strong.md', 'tests/strong.html');
  //   var actual = fs.readFileSync('tests/strong.html', 'utf8'),
  //       expected = fs.readFileSync('tests/strong_expected.html', 'utf8');
  //   expect(actual).toEqual(expected);
  // });
});
