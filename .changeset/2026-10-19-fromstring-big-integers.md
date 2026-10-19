---
'@tiptap/core': patch
---

Attribute values that are integers too big for a JavaScript number, such as large ids, now stay strings when parsed from HTML. Before, they were rounded.
