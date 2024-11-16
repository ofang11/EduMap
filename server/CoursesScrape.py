import requests
from bs4 import BeautifulSoup
import pandas as pd

# Input the course code
course_code_to_find = "CAS AA 103"

# URL of the BU courses page
base_url = "https://www.bu.edu/academics/cas/courses/"

# Fetch the webpage content
response = requests.get(base_url)
if response.status_code != 200:
    raise Exception(f"Failed to load page {base_url}. Status code: {response.status_code}")

# Parse the HTML
soup = BeautifulSoup(response.text, 'html.parser')

# Find all course titles (links to individual courses)
course_titles = soup.find_all('a')  # Update this selector if needed

# Data storage
data = []

# Loop through and filter by the course code
for title in course_titles:
    if course_code_to_find in title.text:
        # Get the full course title
        full_title = title.text.strip()

        # Navigate to the parent container (assumes the description is nearby)
        parent = title.find_parent('div')  # Adjust based on the HTML structure

        # Extract the correct course description (blue-box text)
        # Find all <p> tags within the parent container
        paragraphs = parent.find_all('p')

        # The desired description is usually the second <p> tag or one with specific keywords
        course_description = (
            paragraphs[1].get_text(strip=True) if len(paragraphs) > 1 else "No description available"
        )

        # Save data
        data.append({'Course Code': course_code_to_find, 'Title': full_title, 'Description': course_description})

        print("Course Code Found!")
        print(f"Title: {full_title}")
        print(f"Description: {course_description}")
        break
else:
    print(f"Course code {course_code_to_find} not found.")

# Save data to CSV
if data:
    df = pd.DataFrame(data)
    output_file = "course_data.csv"
    df.to_csv(output_file, index=False)
    print(f"Data saved to '{output_file}'")
else:
    print("No data to save.")