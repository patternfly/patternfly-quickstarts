# WIP info for asciidoc

### Highlighting elements in asciidoc/adoc

. To highlight items from a quick start, first the target item needs to have a data attribute: **data-quickstart-id="something"**
. Then in asciidoc, the trigger element needs to have the `data-highlight__something` class/role, where the part after `data-highlight__` matches the data-quickstart-id of the target
Here are some examples:

- `link:[Click me to highlight the logo, role="data-highlight__logo"]`
- `link:[Click me to highlight the Home nav item, role="data-highlight__home"]`