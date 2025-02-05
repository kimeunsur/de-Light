import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('korean_foods.db')
cursor = conn.cursor()

# Create the table
cursor.execute('''
CREATE TABLE IF NOT EXISTS korean_foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    ingredients TEXT,
    recipe TEXT,
    image TEXT
)
''')

print("Table 'korean_foods' created successfully.")

# Commit and close the connection
conn.commit()
conn.close()