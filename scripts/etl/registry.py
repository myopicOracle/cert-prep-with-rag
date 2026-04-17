import json

file_path = "data/manifest.json"


def load_data():
    with open(file_path, "r") as my_file:
        return json.load(my_file)


def save_data(data):
    with open(file_path, "w") as my_file:
        json.dump(data, my_file)


manifest = load_data()
