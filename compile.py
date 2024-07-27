"""
This script accepts a single html file as input, it uses jinja2 to render it and a template into 
html and save it into the `assets` directory with the same name. 

It assumes that the source file is in the `src` directory, 
and the template is `src/_template.html` 
"""

import sys
import os
from jinja2 import Environment, FileSystemLoader


def render_html(input_file):
    if "_template.html" in input_file:
        return

    src_filename = input_file.split("/")[-1]

    # Set up Jinja2 environment
    env = Environment(loader=FileSystemLoader("./src"))

    template = env.get_template(src_filename)
    rendered_html = template.render()
    # print(rendered_html)

    # Save the rendered HTML to the `assets` directory
    output_file = os.path.join("assets", src_filename)
    with open(output_file, "w") as f:
        f.write(rendered_html)

    print(f"Rendered HTML saved to {output_file}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <input_file.html>")
        sys.exit(1)

    input_file = sys.argv[1]
    render_html(input_file)
