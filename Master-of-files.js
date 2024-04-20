/*
Are you a file extension master? 
Let's find out by checking if Bill's files are images or audio files. 
Please use regex if available natively for your language.

You will create 2 string methods:
  isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
  with the extension .mp3, .flac, .alac, or .aac.
  isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
  with the extension .jpg, .jpeg, .png, .bmp, or .gif.

Note that this is not a generic image/audio files checker. 
It's meant to be a test for Bill's files only. 
Bill doesn't like punctuation and numbers.
Thus, his filenames are letter-only.

Rules:
  It should return true or false, simply.
  File extensions should consist of lowercase letters and numbers only.
  File names should consist of letters only (uppercase, lowercase, or both).
*/


// Solution

String.prototype.isExtension = function(ext) {
  return new RegExp('^[A-Za-z]+\.(' + ext.join('|') + ')$').test(this);
};

String.prototype.isAudio = function(){
  return this.isExtension(['mp3', 'flac', 'alac', 'aac']);
};

String.prototype.isImage = function(){
  return this.isExtension(['jpg', 'jpeg', 'png', 'bmp', 'gif']);
};

// or

String.prototype.isAudio = function() {
  const str = this;
  const [name, extension] = str.split('.');
  return /^[a-z]+$/ig.test(name) && /^(mp3|(f|a)lac|aac)$/g.test(extension);
};

String.prototype.isImage = function() {
  const str = this;
  const [name, extension] = str.split('.');
  return /^[a-z]+$/ig.test(name) && /^(jpe?g|png|bmp|gif)$/g.test(extension);
};