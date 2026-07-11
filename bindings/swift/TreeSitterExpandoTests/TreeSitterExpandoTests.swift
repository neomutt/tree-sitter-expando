import XCTest
import SwiftTreeSitter
import TreeSitterExpando

final class TreeSitterExpandoTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_expando())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Expando grammar")
    }
}
