import sqlite3
import json

# Connect to the SQLite database
conn = sqlite3.connect('korean_foods.db')
cursor = conn.cursor()

# Fetch data
cursor.execute("SELECT name, ingredients, recipe, image FROM korean_foods")
rows = cursor.fetchall()

# Close the connection
conn.close()

# Convert data to JSON format
data = []
for idx, row in enumerate(rows):
    name, ingredients, recipe, image = row
    data.append({
        "name": name,
        "ingredients": ingredients,
        "recipe": recipe.split('\n'),  # Convert recipe to a list
        "image": image
    })

# Save to a JSON file
output_file = 'korean_foods.json'
with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)

print(f"Data has been written to {output_file}")