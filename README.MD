# Super Simple Screen Reader

Just like the name implies, this is a super simple screen reader.  It (currently) takes any text that you paste into it, selects whatever your browser default Text to Speech voice is, and speaks it to you.  First priority is getting this set up as an offline only option for extremely privacy-minded folks.  See To Do below for more.

## KNOWN BUG(S)
If you're on Windows, currently Microsoft David is the default voice, even if you have it set to a different one as your default.  This is a Windows bug that's existed for as long as I can remember, so it's unfortunately above my pay grade.

## TO DO
I plan on adding the following features soon™, but wanted to get the absolute basic website up and running ASAP:
* AN OFFLINE VERSION (ASAP)
* Different voices
* Pause and Resume
* More to come

## FAQ
Q: Is my text sent to a server somewhere?
A: NO.  This script runs client side only, and the variable that accesses the text (called 'Input') is created inside the Speak() function.

What this means is that as soon as the script completes, the data is "forgotten" until you click the button again.  You can verify this by opening the browser console (f12, usually), and type
    console.log(input)
    
PLEASE NOTE: As this script and web page are hosted on github pages, I have no controlover any cookies github applies.  If you want to be extra secure, until I can get an offline app working, download the entire project and run it locally.  As long as all files are in the same folder you can simply open the web page (index.html) in your browser of choice.

Q: Is this open source?
A: YES.  It's a simple javascript function that calls an existing API available in most, if not all modern browsers.  I've got no reason to keep it to myself <3  If you want to use this code, please feel free.  I'll be happy you found it useful! ☺

Q: Do you accept code contribution?
A: No, sorry!  This is a side/pet project of mine, but if you want to fork it and add to it, please feel free!

## Find this useful and want to support me?
I don't have a sponsorship thing set up (yet) as I'm focusing on just getting this thing working.  And support is absolutely NOT required, but if you find my stuff useful I have a ko-fi at https://www.ko-fi.com/ScaerieTale and a *very old* PayPal URL, https://paypal.me/CrystalMystical that links to my ScaerietaleProductions PayPal account.