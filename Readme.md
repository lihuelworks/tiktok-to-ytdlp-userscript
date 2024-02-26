## Tiktok - Get list of tiktok links
Adds a simple button to the start of Tiktok page element with id "app-header". The button triggers a link that scrolls through the playlist, tiktok profile, etc and gives you a list of tiktok links that you can iterate with something like [yt-dlp](https://github.com/yt-dlp/):

```
yt-dlp -a TikTokLinks.txt -o “TikTok/%(uploader)s/%(title)s - %(id)s.%(ext)s"
```

**Note:** The important part of this snippet is the `-a TikTokLinks.txt`, which takes the list of links from the file that you've downloaded. Note that the file may be downloaded with a different name if an user's profile is detected (i.e it will be downloaded with the users profile name, so the script will have to change to `-a "name of the user".txt`).


## Credits
The code that is called on button press is from Dinosauro's [tiktok-to-ytdlp](https://github.com/Dinoosauro/tiktok-to-ytdlp) repo (The yt-dlp explanation snippet is also taken from his repo). My userscript only adds the button using a MutationObserver. Please visit and star his repo.