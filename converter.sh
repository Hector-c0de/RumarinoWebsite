#!/bin/bash

# Define input and output directories
INPUT_DIR="$HOME/Downloads"
OUTPUT_DIR="$INPUT_DIR/converted_jpg"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check for heif-convert
if ! command -v heif-convert &> /dev/null; then
    echo "heif-convert not found. Please install it using: sudo apt install libheif-examples"
    exit 1
fi

# Convert each HEIC image to JPG
shopt -s nullglob
for file in "$INPUT_DIR"/*.heic "$INPUT_DIR"/*.HEIC; do
    filename=$(basename "$file")
    name="${filename%.*}"
    output="$OUTPUT_DIR/${name}.jpg"

    echo "Converting $filename to ${name}.jpg..."
    heif-convert "$file" "$output" > /dev/null
done

echo "Conversion complete. All JPGs are in: $OUTPUT_DIR"
