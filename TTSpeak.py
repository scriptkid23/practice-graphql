import requests
import sys 
#API Key của bạn
keys = ['4f0623b961a84403b13cd3ce2ba56588',
        '08962ccb6975478b9a484dbb8bc57f06',
        'ad8f7daba7fa4a0d8e32ea52a328f4b4',
        '221aaa96d1634cb89be9ed20073d7262',
        '719b3570e0eb4c0384a64d79cf5b402f']
 

voice = ""

speed= "0"

prosody= "0"
 

args = sys.argv
if len(args) >= 1:
    short_direct = args[0]
    direc = '{}/'.format(args[0])
 

short_direct = 'voices'
direc = f'{short_direct}/'
import os
import datetime
 

if short_direct not in os.listdir():
    os.mkdir(short_direct)
if 'full.mp3' in os.listdir('{}'.format(direc)):
    #create folder backup if not exists
    if 'backup' not in os.listdir('{}'.format(direc)):
        os.mkdir('{}backup'.format(direc))
    
    now = str(datetime.datetime.now()).replace(" ", "_").replace(":", "_")
    os.rename("{}full.mp3".format(direc), "{}backup/{}.mp3".format(direc, now))
    #print('backup file full mp3 to {}backup/{}.mp3'.format(direc, now))
 
# Remove all file mp3
for item in os.listdir('{}'.format(direc)):
    if item.endswith(".mp3"):
        os.remove(os.path.join(direc, item))
#print('remove all file mp3')

from textwrap import wrap
import time
import wget
import random
def textToSpeech(content_t = None):
    content = content_t
    
    wraptexts = wrap(content, 480)
    
    for i in range(len(wraptexts)):
        while True:
            try:
                text = wraptexts[i]
                api_key = random.choice(keys)
                #print('\n', api_key)
                url = "http://api.openfpt.vn/text2speech/v4?api_key={}&voice={}&speed={}&prosody={}".format(api_key, voice, speed, prosody)
                response = requests.post(url, data=text.encode('utf-8'), headers={'voice':voice, 'speed':speed, 'prosody':prosody})
                response = response.json()
                #print('\n', response['async'])
                file = response['async']
                #print("downloading file {}/{} ".format(i+1, len(wraptexts)), "{}{:03}.mp3".format(direc, i))
            except :
                time.sleep(1)
                continue
            break
        while True:
            try:
                wget.download(file, "{}{:03}.mp3".format(direc, i))
            except :
                time.sleep(0.1)
                continue
            break


