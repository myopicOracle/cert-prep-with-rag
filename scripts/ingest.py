from langchain_text_splitters import MarkdownHeaderTextSplitter

markdown_document = "# Intro \n\n    ## History \n\n Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.[9] \n\n Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files. \n\n ## Rise and divergence \n\n As Markdown popularity grew rapidly, many Markdown implementations appeared, driven mostly by the need for \n\n additional features such as tables, footnotes, definition lists,[note 1] and Markdown inside HTML blocks. \n\n #### Standardization \n\n From 2012, a group of people, including Jeff Atwood and John MacFarlane, launched what Atwood characterised as a standardisation effort. \n\n ## Implementations \n\n Implementations of Markdown are available for over a dozen programming languages."

headers_to_split_on = [
    ("#", "h1"),
    ("##", "h2"),
    ("###", "h3"),
    ("####", "h4"),
]

markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
md_header_splits = markdown_splitter.split_text(markdown_document)

print(f"md_header_splits: {md_header_splits}\n")
print(f"type(md_header_splits[0]): {type(md_header_splits[0])}\n")

# md_header_splits: [Document(metadata={'h1': 'Intro', 'h2': 'History'}, page_content='Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.[9]  \nMarkdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files.'), Document(metadata={'h1': 'Intro', 'h2': 'Rise and divergence'}, page_content='As Markdown popularity grew rapidly, many Markdown implementations appeared, driven mostly by the need for  \nadditional features such as tables, footnotes, definition lists,[note 1] and Markdown inside HTML blocks.'), Document(metadata={'h1': 'Intro', 'h2': 'Rise and divergence', 'h4': 'Standardization'}, page_content='From 2012, a group of people, including Jeff Atwood and John MacFarlane, launched what Atwood characterised as a standardisation effort.'), Document(metadata={'h1': 'Intro', 'h2': 'Implementations'}, page_content='Implementations of Markdown are available for over a dozen programming languages.')]

# type(md_header_splits[0]): <class 'langchain_core.documents.base.Document'>

# As JSON: 
# {
#   "documents": [
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "History"
#       },
#       "page_content": "Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.[9]  \nMarkdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Rise and divergence"
#       },
#       "page_content": "As Markdown popularity grew rapidly, many Markdown implementations appeared, driven mostly by the need for  \nadditional features such as tables, footnotes, definition lists,[note 1] and Markdown inside HTML blocks."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Rise and divergence",
#         "h4": "Standardization"
#       },
#       "page_content": "From 2012, a group of people, including Jeff Atwood and John MacFarlane, launched what Atwood characterised as a standardisation effort."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Implementations"
#       },
#       "page_content": "Implementations of Markdown are available for over a dozen programming languages."
#     }
#   ]
# }

from langchain_text_splitters import RecursiveCharacterTextSplitter

chunk_size = 250
chunk_overlap = 30
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=chunk_size, chunk_overlap=chunk_overlap
)

splits = text_splitter.split_documents(md_header_splits)

print(f"splits: {splits}\n")
print(f"type(splits[0]): {type(splits[0])}\n")

# splits: [Document(metadata={'h1': 'Intro', 'h2': 'History'}, page_content='Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.[9]'), Document(metadata={'h1': 'Intro', 'h2': 'History'}, page_content='Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files.'), Document(metadata={'h1': 'Intro', 'h2': 'Rise and divergence'}, page_content='As Markdown popularity grew rapidly, many Markdown implementations appeared, driven mostly by the need for  \nadditional features such as tables, footnotes, definition lists,[note 1] and Markdown inside HTML blocks.'), Document(metadata={'h1': 'Intro', 'h2': 'Rise and divergence', 'h4': 'Standardization'}, page_content='From 2012, a group of people, including Jeff Atwood and John MacFarlane, launched what Atwood characterised as a standardisation effort.'), Document(metadata={'h1': 'Intro', 'h2': 'Implementations'}, page_content='Implementations of Markdown are available for over a dozen programming languages.')]

# type(splits[0]): <class 'langchain_core.documents.base.Document'>

# As JSON: 
# {
#   "documents": [
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "History"
#       },
#       "page_content": "Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.[9]"
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "History"
#       },
#       "page_content": "Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Rise and divergence"
#       },
#       "page_content": "As Markdown popularity grew rapidly, many Markdown implementations appeared, driven mostly by the need for  \nadditional features such as tables, footnotes, definition lists,[note 1] and Markdown inside HTML blocks."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Rise and divergence",
#         "h4": "Standardization"
#       },
#       "page_content": "From 2012, a group of people, including Jeff Atwood and John MacFarlane, launched what Atwood characterised as a standardisation effort."
#     },
#     {
#       "metadata": {
#         "h1": "Intro",
#         "h2": "Implementations"
#       },
#       "page_content": "Implementations of Markdown are available for over a dozen programming languages."
#     }
#   ]
# }
