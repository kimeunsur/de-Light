import requests
import json
from bs4 import BeautifulSoup
import sqlite3

def food_info(name):
    '''
    This function gives you food information for the given input, including image URL.

    PARAMETERS
        - name(str): name of Korean food in Korean ex) food_info("김치찌개")
    RETURN
        - res(dict): dictionary containing info for the Korean food
    '''
    url = f"https://www.10000recipe.com/recipe/list.html?q={name}"
    response = requests.get(url)
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
    else:
        print("HTTP response error:", response.status_code)
        return None
    
    # Find the first recipe link
    food_list = soup.find_all(attrs={'class': 'common_sp_link'})
    if not food_list:
        print(f"No results found for {name}")
        return None
    
    food_id = food_list[0]['href'].split('/')[-1]
    
    # Extract the image URL
    image_tag = food_list[0].find('img')
    img_url = image_tag['src'] if image_tag and 'src' in image_tag.attrs else None
    
    new_url = f'https://www.10000recipe.com/recipe/{food_id}'
    new_response = requests.get(new_url)
    if new_response.status_code == 200:
        html = new_response.text
        soup = BeautifulSoup(html, 'html.parser')
    else:
        print("HTTP response error:", new_response.status_code)
        return None
    
    # Extract detailed recipe information
    food_info = soup.find(attrs={'type': 'application/ld+json'})
    if not food_info:
        print(f"No detailed information found for {name}")
        return None

    try:
        result = json.loads(food_info.text)
        ingredients = ','.join(result.get('recipeIngredient', []))
        recipe = [step['text'] for step in result.get('recipeInstructions', [])]
        recipe = [f'{i + 1}. {text}' for i, text in enumerate(recipe)]
    except Exception as e:
        print(f"Error parsing recipe JSON for {name}: {e}")
        return None

    # Return the result as a dictionary
    res = {
        'name': name,
        'ingredients': ingredients,
        'recipe': recipe,
        'image': img_url,
    }

    return res

# List of 10 Korean dishes
korean_dishes = [
    "김치찌개", "비빔밥", "불고기", "된장찌개", "잡채",
    "갈비찜", "삼계탕", "떡볶이", "파전", "김밥"
]

# Collect data
data_list = []
for dish in korean_dishes:
    info = food_info(dish)
    if info:
        data_list.append(info)

# Save data to SQLite
conn = sqlite3.connect('korean_foods.db')
cursor = conn.cursor()

# Create table with image column
cursor.execute('''
CREATE TABLE IF NOT EXISTS korean_foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    ingredients TEXT,
    recipe TEXT,
    image TEXT
)
''')

# Insert data including image URL
for data in data_list:
    cursor.execute('''
    INSERT INTO korean_foods (name, ingredients, recipe, image)
    VALUES (?, ?, ?, ?)
    ''', (data['name'], data['ingredients'], '\n'.join(data['recipe']), data['image']))

conn.commit()
conn.close()

print("Data saved to database successfully with images!")