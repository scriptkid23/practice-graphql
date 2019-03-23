import requests
import os
from playsound import playsound

def play():

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    voices_dir = os.path.join(BASE_DIR,"voices")
    path = os.listdir(os.path.expanduser(voices_dir))

    for i in path:
        short_direct = 'voices'
        direc = f'{short_direct}/{i}'
        playsound(direc)