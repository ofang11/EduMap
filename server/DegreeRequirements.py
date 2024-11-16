import urllib
from urllib.request import urlopen
import pip._vendor.requests
import sys
from bs4 import BeautifulSoup
from bs4 import SoupStrainer
import requests
from urllib.request import Request, urlopen
import csv

def formatLink(major):
    result = 'https://www.bu.edu/academics/cas/programs/'+major.replace(" ", "-")+'/ba/'
    return result

url = formatLink("Computer Science")
page = requests.get(url)
taken = ["CAS CS 111 Introduction to Computer Science 1", "CAS CS 112 Introduction to Computer Science 2", "CAS CS 460 Database Design"]
gra = []
grb = []
grc = []
grd = ["400 level CAS CS course or higher"] * 6

soup = BeautifulSoup(page.content, "html.parser")
results = soup.find_all('li', string=lambda text: "CAS CS" in text if text else False)
for i in range(len(results)):
    currText = results[i].get_text(strip=True)
    if i < 5 and currText not in taken:
        gra.append(currText)
    elif i < 8 and currText not in taken:
        grb.append(currText)
    elif i < 11 and currText not in taken:
        grc.append(currText)
    else:
        next

for course in taken:
    if "CAS CS 4" in course or "CAS CS 5" in course:
        grd.pop()
    else:
        next



# Determine the maximum length of the lists
max_length = max(len(gra), len(grb), len(grc), len(grd))

# Pad shorter lists with an empty string
gra += [''] * (max_length - len(gra))
grb += [''] * (max_length - len(grb))
grc += [''] * (max_length - len(grc))
grd += [''] * (max_length - len(grd))

# Open a CSV file to write the data
with open('RequiredCoursesLeft.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Group A', 'Group B', 'Group C', 'Group D'])  # Write the header row
    # Write the data rows
    for row in zip(gra, grb, grc, grd):
        writer.writerow(row)
