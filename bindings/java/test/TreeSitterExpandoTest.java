import io.github.treesitter.jtreesitter.Language;
import io.github.treesitter.jtreesitter.expando.TreeSitterExpando;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

public class TreeSitterExpandoTest {
    @Test
    public void testCanLoadLanguage() {
        assertDoesNotThrow(() -> new Language(TreeSitterExpando.language()));
    }
}
