import requests
import csv
import numpy as np
import argparse

# Parse command line arguments
parser = argparse.ArgumentParser(description='Fetch GitHub traffic data and store in CSV file')
parser.add_argument('--token', help='GitHub personal access token', required=True)
args = parser.parse_args()

# GitHub repository information
owner = 'ELIXIR-Belgium'
repo = 'elixir-toolkit-theme'
token = args.token

# Function to fetch data from GitHub API
def fetch_data(url, token):
    headers = {'Authorization': f'token {token}'}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to fetch data from {url}, Status code: {response.status_code}")
        return None

# Function to write data to CSV file
def write_to_csv(data):
    with open('github_traffic.csv', 'a', newline='') as csvfile:
        fieldnames = ['timestamp', 'clones', 'unique_clones', 'views', 'unique_views']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow(data)

# Function to update existing row in CSV file
def update_csv_row(timestamp, data):
    try:
        data_array = np.genfromtxt('github_traffic.csv', delimiter=',', names=True, dtype=None, encoding=None, invalid_raise=False, missing_values=0, filling_values=0)
        index = np.where(data_array['timestamp'] == timestamp)[0][0]
        
        # Update existing row with new data
        for key, value in data.items():
            data_array[index][key] = value
        
        # Write updated data back to CSV
        with open('github_traffic.csv', 'w', newline='') as csvfile:
            fieldnames = ['timestamp', 'clones', 'unique_clones', 'views', 'unique_views']
            writer = csv.writer(csvfile)
            writer.writerow(fieldnames)
            writer.writerows(data_array)

    except Exception as e:
        print(f"Error updating CSV row: {e}")

# Function to check if a row with a certain timestamp exists
def timestamp_exists(timestamp):
    try:
        data = np.genfromtxt('github_traffic.csv', delimiter=',', names=True, dtype=None, encoding=None)
        result =  True if timestamp in data['timestamp'] else False
        return result
    except OSError:
        return False

# API endpoints for clones and views
clones_url = f'https://api.github.com/repos/{owner}/{repo}/traffic/clones'
views_url = f'https://api.github.com/repos/{owner}/{repo}/traffic/views'

# Fetch clones and views data
clones_data = fetch_data(clones_url, token)
views_data = fetch_data(views_url, token)

if clones_data and views_data:
    # Create sets of timestamps from clones and views data
    clones_timestamps = {entry['timestamp'] for entry in clones_data['clones']}
    views_timestamps = {entry['timestamp'] for entry in views_data['views']}
    all_timestamps = sorted(clones_timestamps.union(views_timestamps))
    # Iterate over the union of timestamps from both sets
    for timestamp in all_timestamps:
        clone_entry = next((entry for entry in clones_data['clones'] if entry['timestamp'] == timestamp), None)
        view_entry = next((entry for entry in views_data['views'] if entry['timestamp'] == timestamp), None)
        
        if clone_entry:
            count_clones = clone_entry['count']
            uniques_clones = clone_entry['uniques']
        else:
            count_clones = 0
            uniques_clones = 0

        if view_entry:
            count_views = view_entry['count']
            uniques_views = view_entry['uniques']
        else:
            count_views = 0
            uniques_views = 0

        data = {
            'timestamp': timestamp,
            'clones': count_clones,
            'unique_clones': uniques_clones,
            'views': count_views,
            'unique_views': uniques_views
            }
        # Check if timestamp already exists in CSV
        if timestamp_exists(timestamp):
            # Update existing row with new data
            update_csv_row(timestamp, data)
        else:
            # Write combined data to CSV
            write_to_csv(data)

else:
    print("Failed to fetch data from GitHub API.")
