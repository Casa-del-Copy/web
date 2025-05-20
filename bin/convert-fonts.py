import os
from fontTools.ttLib import TTFont

def convert_otf_to_woff2(input_dir, output_dir):
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Convert each OTF file
    for filename in os.listdir(input_dir):
        if filename.endswith('.otf'):
            input_path = os.path.join(input_dir, filename)
            output_filename = filename.replace('.otf', '.woff2')
            output_path = os.path.join(output_dir, output_filename)

            print(f'Converting {filename} to {output_filename}...')
            font = TTFont(input_path)
            font.flavor = 'woff2'
            font.save(output_path)
            print(f'Converted {filename} successfully!')

if __name__ == '__main__':
    input_dir = 'src/fonts'
    output_dir = 'src/fonts/woff2'
    convert_otf_to_woff2(input_dir, output_dir)
